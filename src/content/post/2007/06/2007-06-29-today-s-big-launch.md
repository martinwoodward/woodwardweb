---
title: "Today's Big Launch"
date: 2007-06-29T16:23:09.000Z
# post thumb
images:
  - "/images/post/2007-today.jpg"
#author
author: "Martin Woodward"
# description
description: "Excitement surrounds the release of Eclipse 3.3 (Europa) today, featuring enhanced support for Vista and a streamlined download experience."
# Taxonomies
categories:
  [
    "technology",
    "dotnet",
    "gadgets",
    "maker",
    "teamprise",
    "web",
    "programming",
  ]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

The blogosphere today is buzzing with news of the [other launch](http://www.apple.com/iphone/) happening today, but there is one a bit closer to my own heart - [Eclipse 3.3 (Europa)](http://www.eclipse.org) has been released. I'm downloading it right now.

I've been running Eclipse 3.3 since Milestone 3 at the start of the year, and as the releases have been coming out it has been getting better and better. Interestingly, the download site today has broken down Eclipse into separate versions geared towards downloading the parts that different audiences are interested in - bringing the straight "Eclipse IDE for Java Developers" down to 78MB. The version I need "Eclipse for RCP/Plug-in Developers" is a more substantial 153MB.

My immediate needs in Eclipse 3.3 was support for the Windows Vista native UI widgets (including things like the Vista tree control). The version of SWT that was shipping at the time of Vista launch had a weird bug which caused the JVM to crash randomly, but was fixed early in the 3.3 codebase. SWT in the 3.3 release has also got a version which renders using WPF rather than Win32. I'm still not really sure what the reasoning behind a WPF version, but it is funny to compile Teamprise Explorer against this version of WPF and then zoom in using the magnification tool in Vista and everything is all smooth as it is vector based. Performance sucks with the WPF version - but still. With Teamprise Explorer compiled against the 3.3 Win32 SWT libraries, performance is super with the application looking more native on Vista than ones written using .NET 3.0.

Other the next few weeks I'm also going to try looking into some of the additional Europa projects. The whole organization of the Eclipse Open Source project is very interesting to watch. Today sees the simultaneous launch of 21 separate open source projects - many of which have dependencies on other projects. The complexity is very interesting and yet (from the outside at least) seems to work impressively well. Eclipse has been very good at doing releases every year, with substantial improvements as well as incremental changes.

As I write, I am 89% done downloading. I'll let you know how I get on. If anyone is queuing for the [other launch](http://www.apple.com/iphone/), be sure to let me know how that goes.
