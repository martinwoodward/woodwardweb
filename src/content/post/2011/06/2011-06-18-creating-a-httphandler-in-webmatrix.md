---
title: "Creating a HTTPHandler in WebMatrix"
date: 2011-06-18T09:31:18.000Z
# post thumb
images:
  - "/images/post/2011/06/2011-creating-a-httphandler-in-webmatrix.jpg"
#author
author: "Martin Woodward"
# description
description: "Learn how to create a HttpHandler in WebMatrix to redirect old episode links for your Radio TFS podcast website."
# Taxonomies
categories:
  ["tfs", "technology", "dotnet", "maker", "web", "programming", "podcast"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

This weekend I thought I would get round to a project that I’ve been meaning to do for a long time – a new website for the Radio TFS podcast that I do with Mickey and Paul. I haven’t had the chance to play with WebMatrix before so thought that I would give it a try when building the new Radio TFS site. I’m also behind in my learning's around ASP.NET MVC, WebDeploy and IIS 7 so it’s going to be a good weekend!

One thing that I wanted to do was make sure that all the old episode links redirect to the new locations. To do this I’m building a HttpHandler that listens for all the requests ending in \*.aspx (which is what the episode links did) and then look up that link in the database to redirect them to the new link. However it took me a while to figure out how to create a HttpHandler in Webmatrix. As with everything – once you know the answer it is easy but as it took me a while to figure out I’m documenting it here in case others try searching for the answer with the same keywords I was using.

The first step is to create your HttpHandler class. In the App_Code directory in your WebMatrix site create a new C# file (mine is called LegacyUrlHandler.cs). A very simple HttpHandler is below.

using System;  
using System.Collections.Generic;  
using System.Web;

namespace RadioTFS  
{  
 public class LegacyURLHttpHandler : IHttpHandler  
 {  
 public bool IsReusable  
 {  
 // The same instance of this class can be re-used so we return true.  
 get {  
 return true;  
 }  
 }

        public void ProcessRequest(HttpContext context)
        {
            HttpResponse response = context.Response;
            response.Write("<html><body><h1>Hello World!</h1></body></html>");
        }
    }

}

You then have to register this HttpHandler in the web.config. Assuming this is being deployed to IIS7 you register it as follows:

<?xml version="1.0" encoding="UTF-8"?>
<configuration>         
    <system.webServer>         
        .....         
        <handlers>         
            <add name="LegacyUrlHandler" verb="*"         
                path="*.aspx"         
                type="RadioTFS.LegacyURLHttpHandler"         
                resourceType="Unspecified" />         
        </handlers>  
    </system.webServer>         
    ....         
</configuration>

Hope that helps you. I’ll probably be blogging again over the weekend as I discover more – and I’ll definitely let you know when the new site is live.
