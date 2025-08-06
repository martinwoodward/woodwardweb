---
title: "TFS Build API by Example #1: Queue a build."
date: 2008-04-21T14:23:34.000Z
# post thumb
images:
  - "/images/post/2008-tfs-build-api-by-example-1-queue-a-build.jpg"
#author
author: "Martin Woodward"
# description
description: "As we all know by now - the build system in TFS2008 was substantially improved."
# Taxonomies
categories: ["tfs", "technology", "dotnet", "maker", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
[](http://www.woodwardweb.com/WindowsLiveWriter/TFSBuildAPIbyExample1Queueabuild_C1CE/BuildAPI_2.gif) As we all know by now - the build system in TFS2008 was substantially improved.  Along with the many improvements came an official API for talking to the build system.  This is the same API that the Team Foundation Build UI in Visual Studio uses, however there are many additional methods that were added that were not for the UI at all but for potential consumers of the Build API. 

In talking with folks at community events, and on the MSDN forums I have realized that there isn't a huge awareness of this API.  Having written a parallel implementation of the build API, but in Java for the Teamprise 3.0 release I have spent a great deal of time with the .NET API and have a few examples lying around of how to accomplish certain common tasks - so I thought I would run through a some of them.  If you have an example of something you would like to see with the build API then please leave a comment for this post or drop me a line. 

So - let's start with a basic one.  How to queue a build.  This will introduce us to a few concepts with-in the build API that are common across all of the methods. #### The Easy Way. 

A quick look at the class diagram above will show you that the main interfaces you'll be dealing with in the Build API are the IBuildServer and IBuildDefinition interfaces.  To get started with these you'll need to add references to the Microsoft.TeamFoundation.dll, Microsoft.TeamFoundation.Client.dll and Microsoft.TeamFoundation.Build.Client.dll. 

**C#** 

TeamFoundationServer tfs = TeamFoundationServerFactory.GetServer("http://tfsserver:8080");
IBuildServer buildServer = (IBuildServer)tfs.GetService(typeof(IBuildServer));
IBuildDefinition buildDef = buildServer.GetBuildDefinition("TeamProject", "Build Name");
buildServer.QueueBuild(buildDef);

**VB.NET**

Dim tfs As TeamFoundationServer = TeamFoundationServerFactory.GetServer("http://tfsserver:8080")
Dim buildServer As IBuildServer = DirectCast(tfs.GetService(GetType(IBuildServer)), IBuildServer)
Dim buildDef As IBuildDefinition = buildServer.GetBuildDefinition("TeamProject", "Build Name")
buildServer.QueueBuild(buildDef)

I'm afraid that's the last example you'll be seeing in VB.NET.  Being a Java developer by day I tend to like my semi-colons.  However if you are a VB developer then hopefully you'll be able to follow along as the rest of the examples are more or less just method calls with the occasional bit of casting.

So - what's going on here.  Well we first get hold of a TeamFoundationServer object.  If this was server side code and we wanted to specify some credentials then we would use a slightly difference mechanism but in this case the constructor works well and this will automatically connect using the credentials of the current thread.

Next we get hold of the build service that implements the IBuildServer interface.  Finally we get a hold of the build definition by specifying a team project and build definition name (build definitions are unique per team project in TFS).  We then queue a build using the defaults for that build definition.  This API call is actually shorthand for the following...
#### The Hard Way

 Supposed you want to queue a build, but you don't want to use the default build agent, priority, drop location etc.  Well in that case you need to look at the IBuildRequest interface.  Here you will find all the options to customize the build request, you can specify a build agent, drop location, priority etc like you can do from the Visual Studio UI.  You will also find other options such as being able to queue the build with a maximum acceptable queue position, pass a custom get version for the build or even queue the build in a postponed status.

In the following example, I am going to find a non-default build agent from the server and then queue a build using it.

        TeamFoundationServer tfs = new TeamFoundationServer("http://tfsserver:8080");
        IBuildServer buildServer = (IBuildServer)tfs.GetService(typeof(IBuildServer));

        String teamProject = "TeamProject";

        String buildDefinitionName = "MyBuildDefinition";

        String buildAgentName = "MyBuildAgent";

        // Find our (non default) build agent.

        IBuildAgentQueryResult queryResult = buildServer.QueryBuildAgents(buildServer.CreateBuildAgentSpec(teamProject, buildAgentName));

        if (queryResult.Failures.Length > 0 || queryResult.Agents.Length != 1)

        {

          throw new Exception("Invalid Build Agent");

        }

        IBuildAgent buildAgent = queryResult.Agents[0];

        IBuildDefinition buildDefinition = buildServer.GetBuildDefinition(teamProject,buildDefinitionName);

        // Create a build request based on our chosen definition.

        IBuildRequest buildRequest = buildDefinition.CreateBuildRequest();

        // Optionally set command line args, drop location, priority, custom source version etc here

        // in this case just overriding default build agent.

        buildRequest.BuildAgent = buildAgent;

        buildServer.QueueBuild(buildRequest);

Pretty simple really and very powerful.  I encourage you to go take a look at the IBuildServer interface to see some of the stuff that you can do.  If you have any suggestions as to what you would like to see as a build API example then leave a comment to this post.