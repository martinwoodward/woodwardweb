---
title: "Team Build with CC.NET"
date: 2007-11-26T10:01:52.000Z
# post thumb
images:
  - "/images/post/2007-team-build-with-cc-net.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover how a new Team Build plug-in for CruiseControl.NET enhances TFS 2005 by integrating build data for seamless project management."
# Taxonomies
categories: ["tfs", "dotnet", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

I had the pleasure of meeting [James Dawson](http://blogs.conchango.com/jamesdawson) at TechEd in Barcelona this year, and recently he dropped me a note to let me know about a [Team Build plug-in for CruiseControl.NET that folks still on TFS 2005 might find interesting](http://blogs.conchango.com/jamesdawson/archive/2007/11/24/TeamBuild-Plug_2D00_in-for-CruiseControl.NET-now-on-CodePlex.aspx). It basically allows you to use CruiseControl.NET to subscribe to TFS to detect changes (via the [TFS plug-in to CC.NET](http://www.codeplex.com/TFSCCNetPlugin/) that I look after) but call Team Build to perform the actual build - which has the benefit of feeding back all the build data etc into TFS.

I have yet to take it for a drive myself as I'm now running TFS 2008 and use the TFS 2008 CI functionality to trigger builds, however I've seen some folks asking for similar functionality in the past so I though you might find it interesting.

While on the subject of CruiseControl integration with TFS. I recently came across a problem that means the existing CC.NET and CruiseControl (java) source control integrations do not work correctly with TFS 2008. I've confirmed that this is still the case with the RTM release of TFS 2008 so I'm going to spend some time this week getting patches together for them. I will post soon with more details about that.

**Update:** Fix to the CC.NET integration has been made - for more information see [this post](http://www.woodwardweb.com/vsts/000403.html).
