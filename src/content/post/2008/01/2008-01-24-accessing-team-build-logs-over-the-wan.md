---
title: "Accessing Team Build logs over the WAN"
date: 2008-01-24T00:15:35.000Z
# post thumb
images:
  - "/images/post/2008-accessing-team-build-logs-over-the-wan.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover how to access TFS Build logs over the WAN more efficiently by using HTTP links instead of slow Windows file sharing."
# Taxonomies
categories: ["tfs", "technology", "dotnet", "gadgets", "maker", "teamprise", "web", "programming", "podcast"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
In [a previous post](http://www.woodwardweb.com/teamprise/000413.html), I talked about how Windows file sharing sucks over the WAN. This is particularly annoying for me when trying to view the log of a TFS Build - especially if that build has failed and I want to know why in a hurry. On my computer (sitting on the end of a VPN nearly 4000 miles from my TFS instance), there is a delay of about 50-70 seconds to view the log file depending on the size and the speed of the link at that moment in time.  During that time, Visual Studio is hanging waiting for the file to open.  The issue is compounded by the fact that the rest of the Team Build UI - and in fact the whole of TFS access in general - is so speedy over the same VPN link, that I really notice the time delay accessing build logs.  

Therefore - it didn't take too many 70-seconds delays for me to fire up a second instance of Visual Studio to create a work-around.  In Visual Studio 2008 (and in the upcoming Teamprise 3.0 Team Build integration), if the log location provided is not a UNC style path (i.e. \\server\drop\build\BuildLog.txt) but a http:// address, then it will open the file in a browser instead.  Accessing the build log over http helps in two important ways.     HTTP is much less latency sensitive than accessing a file from a Windows share     A browser will display the contents of the file before it has finished loading.  When accessing the build log directly from a file share, the application (i.e. Notepad) will have to wait until it has recieved the whole file before displaying any of it to you.  These log files can get large - so the improvement in perceived speed is significant. (http:// urls are a lot more cross-platform friendly than UNC paths as well, which is nice for us Teamprise folks).    

Therefore, I created  a quick and dirty ASP.NET page that accessing the build log for a particular build over the network and streams the contents of a build log to the browser.  I then add a target into my TFSBuild.proj file that sets the log location to be the http url rather than the default UNC address.  #### LogView ASP.NET Page  

I am by no means an ASP.NET expert - so please feel free to highlight any glaring stupidity on my part if you know better.  I know the code below is sub-optimal and presents some security considerations, however it is a quick work-around that I spent a couple of minutes over to solve my issue - so please treat this code as just that.  

Create a new Web Application Project, with references to Microsoft.TeamFoundation.Client and Microsoft.TeamFoundation.Build.Client assemblies.  Create a new aspx page - mine is called view.aspx.  In the page mark-up, ensure it only contains the Page tag, and an output caching directive.  Mine (which is in a C# project) looks like this.  

*<%*@ Page Language="C#" AutoEventWireup="true" CodeBehind="view.aspx.cs" Inherits="LogViewer._Default" *%>*
*<%*@ OutputCache Duration="2592000" Location="Server" VaryByParam="*" *%>*

Now - the work is performed in the code behind.   

  1 using System;
  2 using System.IO;
  3 using Microsoft.TeamFoundation.Build.Client;
  4 using Microsoft.TeamFoundation.Build.Common;
  5 using Microsoft.TeamFoundation.Client;
  6 
  7 namespace LogViewer
  8 {
  9     public partial class _Default : System.Web.UI.Page
 10     {
 11         protected void Page_Load(object sender, EventArgs e)
 12         {
 13             Response.Write("<html>");
 14             string teamFoundationServerUrl = Request.Params["TeamFoundationServerUrl"];
 15             string buildUri = Request.Params["BuildUri"];
 16 
 17             if (String.IsNullOrEmpty(teamFoundationServerUrl))
 18             {
 19                 teamFoundationServerUrl = "http://localhost:8080";
 20             }
 21 
 22             if (String.IsNullOrEmpty(buildUri))
 23             {
 24                 Response.Write("<title>LogViewer Error</title><body>A valid BuildUri must be passed</body></html>");
 25                 Response.End();
 26                 return;
 27             }
 28 
 29             TeamFoundationServer tfs = new TeamFoundationServer(teamFoundationServerUrl);
 30             IBuildServer buildServer = (IBuildServer) tfs.GetService(typeof(IBuildServer));
 31 
 32             IBuildDetail buildDetail = buildServer.GetBuild(new Uri(buildUri));
 33 
 34             String logFile = Path.Combine(buildDetail.DropLocation, BuildConstants.BuildLogFileName);
 35 
 36             Response.Write("<title>Build Log: " + buildDetail.BuildNumber + "</title><body>\r\n<pre>");
 37 
 38             StreamReader reader = File.OpenText(logFile);
 39             String line = reader.ReadLine();
 40             
 41             while(line != null)
 42             {
 43                 WriteLine(line);
 44                 line = reader.ReadLine();
 45             }
 46             reader.Close();
 47             
 48             Response.Write("</pre></html>");
 49 
 50             Response.End();
 51             
 52         }
 53 
 54         private void WriteLine(string line)
 55         {
 56             line = Server.HtmlEncode(line);
 57             if (line.StartsWith("Target ""))
 58             {
 59                 line = "<strong>" + line + "</strong>";
 60             }
 61             Response.Write(line);
 62             Response.Write("\r\n");
 63         }
 64     }
 65 }
 66 

As you can see - this is a very quick and dirty example.  I am relying on the output caching of the ASP.NET page to provide any performance at all, and this code could be improved in many ways.  However to walk you through the code;

I start by checking for a TeamFoundationServerUrl parameter, if not passed, I assume that this application is being installed on the TFS server itself so localhost:8080 will get me there. I show an error if the BuildUri is not passed.  Inside the TFSBuild.proj file execution, the MSBuild properties $(TeamFoundationServerUrl) and $(BuildUri) are accessible and provide you all you need to be able to get how of the build that you are building.

Line 29 is me getting hold of the TFS instance, line 30 the build server and finally line 32 the build that I am currently executing.  3 lines to get everything I need to be able to query and modify the build information - you gotta love the TFS2008 build API ;-)

I then (line 34) get the build log path, which is always a file called BuildLog.txt in the drop folder.  I then simply stream the file, line by line, into the response stream.

The WriteLine method is used to do this so that I can optionally do a bit of formatting to the lines as I stream them to the client.  In this example, I am highlighting and lines that are the beginnings of a Target - just to make the log easier to read.

I then deploy this ASP.NET page onto an IIS server.  In my case, I have it running on my production TFS server as a separate application (on a different port) and I have the application set to run as a defined user that has read access to the drop share along with read access to the TFS Build Store.  This means that anyone inside the network can anonymously access the web page and view the build log of any build - but that is acceptable in my organization.  You might want to make access more secure - but then you will also have to be cleverer in your output caching decisions.

#### TFSBuild.proj File Customization

In the TFSBuild.proj file, I then override one of the provided hook targets to set the log location property of the build.  I'm still un-decided as to which is the best target to put this in, but at the moment I'm going with BeforeGet.

<Target Name="BeforeGet">   <SetBuildProperties TeamFoundationServerUrl="$(TeamFoundationServerUrl)"      BuildUri="$(BuildUri)"      LogLocation="http://tfsserver:9090/logs/view.aspx?BuildUri=$(BuildUri)" /> </Target>

As you can see - it is pretty low tech, but very effective.  Clicking on the link starts providing me with log output with-in a second.

I actually have the web site running on port 9090 configured to give me directory browsing of the drop location file share (that is also located on the same server).  This means that I can access my drop files using a browser by browsing to http://tfsserver:9090/ - however, you can not update the drop location of the build to be a http:// url.  This is because the drop path is specified (and verified) as a UNC path and several parts of code in the build client API itself assume this.  You could work around this by extending the ASP.NET page mechanism above to provide access to the files in the drop location - perhaps a future project for me ;-)

Rather a lengthy post this one - but I hope it helps someone else out of the same frustrations I was having.  If you've read this far than I guess it was moderately interesting to you :-)