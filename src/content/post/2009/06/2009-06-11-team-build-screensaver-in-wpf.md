---
title: "Team Build Screensaver in WPF"
date: 2009-06-11T13:43:28.000Z
# post thumb
images:
  - "/images/post/2009-team-build-screensaver-in-wpf.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover a fantastic WPF Team Build screensaver by Jim Liddell, featuring sleek graphics and multi-monitor support for enhanced project visibility."
# Taxonomies
categories: ["tfs", "technology", "dotnet", "gadgets", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
I recently stumbled across a handy [Team Foundation Build screensaver](http://teambuildscreensaver.codeplex.com/) created by Jim Liddell and wanted to share it as it seems very good.  For my team build talks I created a [Team Build Wallboard](http://code.msdn.microsoft.com/buildwallboard) as a code sample, however Jim has created his own as a WPF based screensaver and it looks very nice.  

A few features that I particularly liked:     Deployed as a screen saver (.scr) with full configuration options via the screen saver properties    Ability to display multiple builds from multiple team projects    Nice, clean WPF based vector graphics    Multi-monitor support   

The code is also pretty clean, and reminds a WPF novice like me how different a true WPF based programming model can be from WinForms.  The only issue I had with it is that I had to download the source code and recompile as x86 only against the TFS2008 API’s to get it to run on my main dev machine which is a Vista x64 machine with VSTS2010 Beta 1 installed.  

Anyway, the code is [up on CodePlex](http://teambuildscreensaver.codeplex.com/) under the permissive MS-PL license, so I would encourage you to give it a look and give Jim your feedback or even contribute back features that you would like to add.    

Notice in the picture above that Jim has a [Build Bunny](http://www.woodwardweb.com/gadgets/000434.html) sat next to his Build Monitor as well - great to see them breeding like, well – you know…