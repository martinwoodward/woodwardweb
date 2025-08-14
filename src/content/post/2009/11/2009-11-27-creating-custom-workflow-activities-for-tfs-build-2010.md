---
title: "Creating Custom Workflow Activities for TFS Build 2010"
date: 2009-11-27T23:32:06.000Z
# post thumb
images:
  - "/images/post/2009/11/2009-creating-custom-workflow-activities-for-tfs-build-2010.jpg"
#author
author: "Martin Woodward"
# description
description: "Learn to create custom workflow activities in TFS Build 2010 to automate assembly versioning and enhance your build process."
# Taxonomies
categories: ["tfs", "technology", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Fellow Microsoft TFS Program Manager [Jim Lamb](http://blogs.msdn.com/jimlamb) has a good post detailing how to create a custom workflow activity in Team Foundation Build 2010 using the first of what I am sure will be many activities to stamp your assemblies with the build number.     

One of the common requests we hear is to provide a way of automatically updating the version information in the assemblies produced by a TFS build. Unfortunately, it’s one of those features that never gets quite high enough on our priority list to get implemented. You may have noticed that we haven’t provided a solution to this problem in TFS 2010 Beta 2, but this article is going to show you how to solve this problem yourself and will even give you the sources (see the attached ZIP file) for a working solution that you can start using today.    

[Jim Lamb](http://blogs.msdn.com/jimlamb) [– How to create a custom workflow activity for TFS Build 2010](http://blogs.msdn.com/jimlamb/archive/2009/11/18/how-to-create-a-custom-workflow-activity-for-tfs-build-2010.aspx)   

If you start creating your own workflow activities then please consider going over to the [Team Build 2010 Contrib](http://teambuild2010contrib.codeplex.com/) project on CodePlex and share what you can.