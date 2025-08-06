---
title: "To MSBuild or not to MSBuild"
date: 2009-11-15T12:30:05.000Z
# post thumb
images:
  - "/images/post/2009-to-msbuild-or-not-to-msbuild.jpg"
#author
author: "Martin Woodward"
# description
description: "That is the question that I am frequently asked by folks looking at the impact of Team Foundation Build moving to Windows Workflow 4."
# Taxonomies
categories: ["tfs", "technology", "books", "dotnet", "maker", "web", "programming", "podcast"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
That is the question that I am frequently asked by folks looking at the impact of Team Foundation Build moving to Windows Workflow 4.0 from MSBuild as the master build orchestration language in the TFS 2010 release.  

In general I would always think carefully about re-writing everything in WF 4.0 if you have a perfectly functional MSBuild based build process.  Just because things have moved towards workflow based builds in 2010, there is still plenty of logic (such as the actual compile) that is conducted in MSBuild.

Fellow former MVP turned Microsoft employee, [William Bartholomew](http://blogs.msdn.com/willbar/) has done an excellent job of [writing up the pro's and con's](http://blogs.msdn.com/willbar/archive/2009/11/12/upgrade-paths-for-custom-msbuild-tasks.aspx) of the available approaches when upgrading build logic to TFS 2010.

I'm regularly asked what's the best way to upgrade an MSBuild-based build process to a Workflow Foundation-based build process and one of the most important parts of this is how to leverage the investment and dependence you have on any custom MBBuild tasks you've written. This post outlines four different ways you can make your custom MSBuild tasks callable from a Workflow Foundation workflow.

	Use MSBuild Activity to call MSBuild wrapper around MSBuild task 
	Wrap MSBuild task in a custom Workflow Activity
	Rewrite MSBuild task as a Workflow Activity
	Extract custom task logic into a POCO class and provide an MSBuild Task and Workflow Activity adapters

[William Bartholomew - Upgrade Paths for Custom MSBuild Tasks](http://blogs.msdn.com/willbar/archive/2009/11/12/upgrade-paths-for-custom-msbuild-tasks.aspx)

[William's post](http://blogs.msdn.com/willbar/archive/2009/11/12/upgrade-paths-for-custom-msbuild-tasks.aspx) is worth reading in full if you are interested in this topic.  Also, if you are not subscribed to his new [MSDN hosted blog](http://blogs.msdn.com/willbar/) then I highly recommend that you do.