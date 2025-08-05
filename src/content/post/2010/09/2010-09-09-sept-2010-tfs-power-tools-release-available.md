---
title: "Sept 2010 TFS Power Tools Release Available"
date: 2010-09-09T15:27:14.000Z
# post thumb
images:
  - "/images/post/post-1.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["Technology"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

Today the team released a brand new version of the Team Foundation Server Power Tools.  You can download the latest versions from here:     [TFS Power Tools](http://visualstudiogallery.msdn.microsoft.com/en-us/c255a1e4-04ba-4f68-8f4e-cd473d6b971f)    [Team Foundation Build Extensions](http://visualstudiogallery.msdn.microsoft.com/en-us/2d7c8577-54b8-47ce-82a5-8649f579dcb6)    [MSSCCI Provider](http://visualstudiogallery.msdn.microsoft.com/en-us/bce06506-be38-47a1-9f29-d3937d3d88d6) (no updates this release)   

[Brian Harry](http://blogs.msdn.com/b/bharry/) has a [great post highlighting three of the new features in the TFS power Tools](http://blogs.msdn.com/b/bharry/archive/2010/09/09/sept-2010-tfs-power-tools-release-available.aspx) up on [his blog](http://blogs.msdn.com/b/bharry/).  Not only is there now a new Admin Console backup/restore wizard but there have been some handy improvements to Team Explorer of which my personal favourites are “View With…” in Source Control Explorer and “Clone Build Definition…”.  For more details see [Brian’s post](http://blogs.msdn.com/b/bharry/archive/2010/09/09/sept-2010-tfs-power-tools-release-available.aspx).  

The Team Foundation Build Extensions have also received a bunch of updates based on customer feedback and from our own use internally.  In case you are not aware the Build Extensions allow you to build Ant or Maven 2 projects easily from Team Foundation Server and publish the results of the build along with JUnit test results back to TFS.  We use the build extensions ourselves to build Team Explorer Everywhere, and many of our customers rely on them for their Java builds from TFS.  The new build extensions fix an issue where multiple Ant or Maven builds could not be run in parallel on a machine with multiple build agents installed.  In addition the Ant and Maven extensions were both updated to more accurately set the build status based on the return code from running the tools.  

I’m very proud of what the team added to this release.  Download them now and let us know what you think!