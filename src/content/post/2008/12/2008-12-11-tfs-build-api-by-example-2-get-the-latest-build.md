---
title: "TFS Build API by Example #2: Get the Latest Build."
date: 2008-12-11T16:41:07.000Z
# post thumb
images:
  - "/images/post/2008/12/2008-tfs-build-api-by-example-2-get-the-latest-build.jpg"
#author
author: "Martin Woodward"
# description
description: "Often when doing some build integration work with the TFS2008 Build API, you will want to get the latest build for a particular definition –."
# Taxonomies
categories: ["tfs", "technology", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

Often when doing some build integration work with the [TFS2008 Build API](http://msdn.microsoft.com/en-us/library/ms400688.aspx), you will want to get the latest build for a particular definition – for example to show the latest status of the build etc. To do that use the following code snippet: TeamFoundationServer tfs = new TeamFoundationServer("http://tfsserver:8080");  
IBuildServer buildServer = (IBuildServer) tfs.GetService(typeof(IBuildServer));

IBuildDetailSpec buildDetailSpec = buildServer.CreateBuildDetailSpec("Team Project", "Build Definition Name");  
buildDetailSpec.MaxBuildsPerDefinition = 1;  
buildDetailSpec.QueryOrder = BuildQueryOrder.FinishTimeDescending;

IBuildQueryResult results = buildServer.QueryBuilds(buildDetailSpec);  
if (results.Failures.Length == 0 && results.Builds.Length == 1)  
{  
 IBuildDetail buildDetail = results.Builds[0];  
 Console.WriteLine("Build: " + buildDetail.BuildNumber);  
 Console.WriteLine("Account requesting build “ +  
 “(build service user for triggered builds): " + buildDetail.RequestedBy);  
 Console.WriteLine("Build triggered by: " + buildDetail.RequestedFor);  
}

Note that if you are wanting to display a continually updated list of builds, then you should take a look at the [CreateQueuedBuildsView](http://msdn.microsoft.com/en-us/library/microsoft.teamfoundation.build.client.ibuildserver.createqueuedbuildsview.aspx) method on [IBuildServer](http://msdn.microsoft.com/en-us/library/microsoft.teamfoundation.build.client.ibuildserver.aspx) as a lot of the hard work is done for you. See my [Build Wallboard example](http://code.msdn.microsoft.com/buildwallboard) on the MSDN Code Gallery for more information.
