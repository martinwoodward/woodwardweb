---
title: "TFS Top Tip #14: The only 2 things you need to know when customizing Team Build"
date: 2007-10-26T23:09:24.000Z
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

If you are customizing a team build, then there are only two things you need to know to get you started.  The rest you can (mostly) figure out from there.  Your build is defined in a file called TFSBuild.proj for your particular Team Build Type.  You probably figured that bit out already.  The first thing you need to know is that the TFSBuild.proj file inherits most of its logic from a file called Microsoft.TeamFoundation.Build.targets which lives in 
%ProgramFiles%\MSBuild\Microsoft\VisualStudio\TeamBuild\Microsoft.TeamFoundation.Build.targets.
If you open this file in Notepad you can see that it is exceptionally well commented.  There is no smoke and mirrors with Team Build, if it happens at all then it triggered by this file. Note that you should **never edit the Microsoft.TeamFoundation.Build.targets** file.  In Team Build 2008 there are so many hook points provided for you to insert your own logic into the build that you should never need to.  Microsoft goes to some rather extreme lengths to ensure backwards compatibility with this file (i.e. a TFSBuild.proj file written with the TFS2005 targets file in mind will work just great with the 2008 targets file).  If you modify the targets file, not only are you setting your self up for deployment nightmares but you servicing nightmares as well if you attempt to upgrade to later version or even possibly service packs - don't say I didn't tell you ;-) If you get a bit lost in reading the targets file - the MSDN help for build customizations is pretty good.  The best starting point is the page "[Understanding Team Foundation Build Configuration Files](http://msdn2.microsoft.com/en-us/library/ms400710(VS.90).aspx)" - however the pages that this links to that I refer to constantly are [Customizable Team Foundation Build Targets](http://msdn2.microsoft.com/aa337604(VS.90).aspx) and [Customizable Team Foundation Build Properties](http://msdn2.microsoft.com/aa337598(VS.90).aspx).  That said - most of the comments in those MSDN help pages are actually in the targets file itself - just sometimes the property or task you are after is easier to find in the MSDN help.