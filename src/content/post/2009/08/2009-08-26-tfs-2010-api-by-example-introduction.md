---
title: "TFS 2010 API By Example: Introduction"
date: 2009-08-26T15:21:52.000Z
# post thumb
images:
  - "/images/post/2009/08/2009-tfs-2010-api-by-example-introduction.jpg"
#author
author: "Martin Woodward"
# description
description: "Explore essential TFS 2010 programming insights through practical code snippets and an overview of the new TeamFoundationApplicationInstance."
# Taxonomies
categories: ["tfs", "technology", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
As I am exploring programming against TFS 2010, I usually build myself up a collection of code snippets that show me how to do various discrete operations. I thought it would be useful for me to post some of these to my blog so that others might benefit later.  Note that this code was written against TFS 2010 Beta 1 so may well change by the time you read this – but hopefully it will give you some idea where to get started.  

I’ve got a few that I wanted to post, but before I do I thought I’d better take some time to explain a fundamental new level TFS Object Model – the TeamFoundationApplicationInstance.  #### **Team Foundation Server Application Instance.**  

 In TFS 2010 a new level has been introduced.  Previously in TFS 2005 and TFS 2008 all you needed to connect to was a TeamFoundationServer.  The TFS server object was equal to the Team Foundation Server instance that you had deployed.  On that TFS server were a number of Team Projects.  Each Team Project had it’s own notion of work item tracking process, builds, project portal, reports and a node in version control for the server.  However work items and version control changesets were all numbered server wide. If you created work item 1 in Team Project 1 then the next work item you created, in any project on that server, would be work item 2.  There were a number of other things that were tracked at the server level.  

Now in 2010 we have a new higher level of abstraction called the Team Project Collection.  In many ways, a project collection is what we used to think of as the Team Foundation Server – it contains Team Projects - and each project collection is isolated from the others meaning that work item 1 in DefaultCollection is different from work item 1 in Collection B.  However you still need to connect to something that next level up to find your project collections and that thing is the TFS Application Instance.  

To maintain compatibility the TFS Object Model keeps the name TeamFoundationServer for the thing that we now know to be the Team Project Collection.  A new class is introduced called a TeamFoundationApplicationInstance.  As the application instance shares many things in common with the TeamFoundationServer a new base class has also been introduced called TeamFoundationServerBase.  The class diagram for these is shown below, if you click on the image it should open a full size version in a new window.  

[](http://www.woodwardweb.com/WindowsLiveWriter/TFS2010APIByExampleQueryingProjectCollec_C79A/appinstance_2.gif)   

You can construct a new TeamFoundationAppicationInstance much in the same way that you would have created a TeamFoundationServer object previously.       

TeamFoundationApplicationInstance tfs = new TeamFoundationApplicationInstance(       

    new Uri("http://tfs2010:8080/tfs"));       

Note that in 2010, the TFS Application Instance URL is typically in the form http://tfsserver:8080/tfs/ where “tfs” is the virtual path to the tfs application instance as defined when you installed TFS.  Project collection URLs are now in the form “http://tfsserver:8080/tfs/ProjectCollectionName”.  When connecting to a TFS 2008 or TFS 2005 server you still use a TeamFoundationServer object like you did before and by the old URL style i.e. something like “http://tfsserver:8080”.  

Anyway, that’s probably enough introduction.  Next up we’ll look at how to tell if a server you want to talk to is in the new TFS2010 style or if it is a “legacy” TFS server (i.e. TFS 2008 or TFS 2005).