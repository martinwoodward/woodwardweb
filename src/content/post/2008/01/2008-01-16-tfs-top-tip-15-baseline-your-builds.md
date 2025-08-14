---
title: "TFS Top Tip #15 - Baseline your Builds"
date: 2008-01-16T07:36:36.000Z
# post thumb
images:
  - "/images/post/2008/01/2008-tfs-top-tip-15-baseline-your-builds.jpg"
#author
author: "Martin Woodward"
# description
description: "temp_placeholder"
# Taxonomies
categories: ["tfs", "technology", "maker"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Microsoft Team Foundation Server 2008 has a great new improved build system (often referred to as "Team Build").  An advantage of running your build from Team Build is that (by default) all changes between your current build and the last good one are reported in the build report and any work items that were associated with those changesets are automatically updated with the build number they were fixed in. 

However, when demonstrating this feature - the following thing always catches me out and is important to remember when using Team Build in production.  The very first time you run a build, it does not associate that build with changesets or update any work items. 

Therefore, the first time your create a new build definition you should manually run a build and make sure it is successful.   

In fact I would recommend you do this anyway, even if the changeset association thing wasn't the case, after all you need to test that the new build definition you created actually works! 

The reason why Team Build 2008 works in this way is that when Team Build successfully completes a build it stores the label applied to that last good build.  The next time it runs a build that is successful it will compare the two labels to detect which changesets were included in the build.  It will then look over those changesets for any associated work items and update them to include the build number in which they were fixed. 

This tip is also true if you upgrade from TFS2005 to TFS2008.  Once the upgrade is complete you should run your builds once manually to check that they are all still working fine and to give a baseline from which changes can be detected.