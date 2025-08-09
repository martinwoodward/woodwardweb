---
title: "TFS on the Mainframe"
date: 2009-09-23T21:07:26.000Z
# post thumb
images:
  - "/images/post/2009-tfs-on-the-mainframe.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover the exciting potential of running Teamprise on a z/OS mainframe, enhancing performance and memory efficiency for TFS users."
# Taxonomies
categories: ["tfs", "technology", "teamprise", "web", "programming", "podcast"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

I’m playing with a lot of cool stuff at the moment as we get ready for Team Foundation Server 2010, but accessing TFS from the Mac or inside Eclipse doesn’t give me as many of those “it shouldn’t work that well” moments any more. But today I had big one of those moments while I was helping test an application we are playing with internally.

[](http://www.woodwardweb.com/WindowsLiveWriter/AccessingTFSfromtheMainframe_11B04/teampriz_2.png)

Yup, that’s [Teamprise](http://www.teamprise.com) running on a mainframe. A z/OS R08 based system to be precise. We’ve had prototypes of our command line client running on z/OS Unix for a while now, however it was using too many system resources to be suitable to run in a real shared mainframe environment. As part of our development for Teamprise 4.0 we’ve been putting a lot of the code on a diet to improve memory usage and performance and now running the command line on z/OS UNIX is looking more and more of a possibility.

But of course, z/OS Unix is pretty new in the world of mainframes and there are still lots of people using 3270 emulators and running TSO. I developed in TSO when doing my first professional programming job as a PL/1 developer back in the days of MVS on OS/390. When the opportunity came around to help test our mainframe efforts I jumped at the chance.

It’s early days for the mainframe client. While the z/OS UNIX side is working very well, the TSO stuff is still just beginning. We have both a command based interface in TSO and a menu driven one in ISPF. Both are wrappers around the Teamprise z/OS Command Line Client that allow users to enter tf commands without starting the USS. The applications start an instance of the command line client and then keep it running while the user is in the interactive session to avoid having to restart the Java virtual machine running the command line client repeatedly. The result is that the application is pretty snappy even though it is talking to a TFS server hosted in the cloud.

Anyway, it is early days – but just wanted to share. Some days I love my job – and today really put a smile on my face. Kudos to the team internally working on this, I’ll be sure to post more information when we are getting closer to making this more widely available.
