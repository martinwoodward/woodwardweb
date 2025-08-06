---
title: "CruiseControl.NET TFS Integration updated for TFS 2008"
date: 2007-11-27T14:12:11.000Z
# post thumb
images:
  - "/images/post/2007-cruisecontrol-net-tfs-integration-updated-for-tfs-2008.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["tfs", "technology", "dotnet", "maker", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Recently, I noticed a [small change in the way TFS 2008 (RTM) handles history calls between date ranges](http://connect.microsoft.com/VisualStudio/feedback/ViewFeedback.aspx?FeedbackID=312511) that unfortunately breaks the existing CruiseControl.NET integration to TFS.  Should you want to carry on using CC.NET using TFS2008 as your source control then the [following 1.4.0 release may be of interest](http://www.codeplex.com/TFSCCNetPlugin/Release/ProjectReleases.aspx?ReleaseId=1816).   

It includes the work around for the [TFS 2008 server issue](http://connect.microsoft.com/VisualStudio/feedback/ViewFeedback.aspx?FeedbackID=312511) and is compiled against the V9.0.0.0 versions of the TFS Client assemblies that ship with the [VS 2008 Team Explorer Client](http://www.microsoft.com/downloads/details.aspx?familyid=0ed12659-3d41-4420-bbb0-a46e51bfca86&displaylang=en).   

The code will work just fine against a TFS 2005 server as well, but if you don't want to install the TFS 2008 client assemblies on your CruiseControl.NET server then you will need to recompile against the 2005 client assemblies or do some assembly redirection magic. 

I'll be sending a patch to the CruiseControl (java) project shortly with the same fix to hopefully get implemented in their next version - but if you need it before it appears in the Java version of CruiseControl then drop me a line and I'll send you the relevant code.