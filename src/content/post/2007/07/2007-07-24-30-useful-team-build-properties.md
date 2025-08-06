---
title: "30 Useful Team Build Properties"
date: 2007-07-24T14:09:40.000Z
# post thumb
images:
  - "/images/post/2007-30-useful-team-build-properties.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["tfs", "technology", "dotnet", "maker", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
If you are going to get into the Zen of TFS Team Build, then at some point you are going to have to read the TeamBuild .targets file (located in %ProgramFiles%\MSBuild\Microsoft\VisualStudio\TeamBuild\Microsoft.TeamFoundation.Build.targets).  The TeamBuild build scripts are usually extensions of this master build script.  In Orcas the script has has several revisions to make sure as many hooks are provided as possible, but extraordinary lengths have been gone to to make sure that scripts written to target the old (VS 2005) version of the file will still work with the new one.   The problem with all MSBuild scripts, and a problem that is shared with Nant and Ant scripts alike, is that they take a little bit of working out.  You cannot just pick up a script and read it from beginning to end due to the way that dependencies work in these process execution languages and the fact that you can have multiple entry points.  Fortunately, the TeamBuild .targets file is very well commented and there is also [additional documentation available on MSDN](http://msdn2.microsoft.com/en-us/library/aa337604(vs.90).aspx) listing the points you should start to look when hooking in your logic. 

However, when you eventually override your first target to write a custom bit of code in the build process, you are going to need to know some properties that are available for you.  Below is my list of 30 build properties that you will find useful.  There are over 70 available if you read the target file you will find them all, these are just the ones that I find most useful - some to read the properties available, and some to override to easily alter the behavior of the build script.