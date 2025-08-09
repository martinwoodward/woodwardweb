---
title: "Teamprise 3.1 is now available"
date: 2008-07-09T22:28:23.000Z
# post thumb
images:
  - "/images/post/2008-teamprise-3-1-is-now-available.jpg"
#author
author: "Martin Woodward"
# description
description: "Teamprise 3.1 is now available, featuring enhanced offline support and several bug fixes for users with a Teamprise 3.0 licence."
# Taxonomies
categories:
  [
    "git",
    "tfs",
    "technology",
    "maker",
    "teamprise",
    "web",
    "programming",
    "personal",
  ]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

At the Microsoft [Worldwide Partner Conference](https://partner.microsoft.com/global/40018508) in Houston today, Corey Steffen (General Manager of Teamprise and the guy that pays my wages) announced the [public availability of Teamprise 3.1](http://www.teamprise.com/).

This is a maintenance release free to everyone with a valid Teamprise 3.0 license and includes several bug fixes along with a few new features. For the proper release notes, take a look [here](http://download-us.teamprise.com/cs/3.1.0.8392R/release-notes/release-notes.html). However I just wanted to point out a few highlights.

[](http://www.woodwardweb.com/WindowsLiveWriter/Teamprise3.1isnowavailable_C053/online_2.png) #### Improved Offline Support

With-out doubt, the biggest new feature in Teamprise 3.1 for most people will be the improved offline support. If you right click on a project in the Eclipse IDE, you are now presented with a "Go Offline" option which allows you to tell Teamprise not to bother trying to talk to TFS for a while (previously you had to restart Eclipse for Teamprise to ask you if you wanted to go offline, and only then after it had tried _really_ hard to connect).

While offline, you can still perform all the file operations like you expect -- you can add, edit, move and delete files just like if you were online.

When you want to come back online (say when you have stepped back out of the plane, bus, meeting room), you can right click on the project and say "Return Online" and Teamprise will do it's best to detect what changes have happened while you were away, giving you the option to pend those changes.

There is even "return online" capability in the stand-alone client Teamprise Explorer which is very neat and makes working with tools that are not TFS aware a little easier too. The actual algorithm used by the return online feature is more sophisticated than just checking for read/write status in your local workspace, we also do some magic and compare checksums of the file contents etc. Fellow Teamprise blogger [Ed Thomson](http://www.edwardthomson.com/blog/) was the lead developer for the offline work and he has some [more details on his blog](http://www.edwardthomson.com/blog/2008/07/teamprise_31.html). #### TFS 2008 SP1 New Feature Support

Service Pack 1 of Team Foundation Server 2008 is hopefully due out soon, and with it come [lots of lovely new features](http://blogs.msdn.com/bharry/archive/2008/04/28/team-foundation-server-2008-sp1.aspx). We took advantage in the timing of our 3.1 release to update Teamprise to support some of the new server capabilities so that they are available to our customers as soon as TFS 2008 SP1 arrives. These include: Last check-in date/time column ([see my previous post about this feature](http://www.woodwardweb.com/teamprise/000436.html)) Support for work item meta-data filtering option (note that this option is already being used on some of the CodePlex servers so if you use Teamprise to talk to the work item functionality in CodePlex then you probably want to upgrade to Teamprise 3.1, [after all the price is right](http://www.woodwardweb.com/teamprise/000339.html) :-) ). tf branch -checkin command, the fastest way to create large branches and perform the check-in at the same time. #### Command Line Client Improvements

In this release we are making publicly available a bunch of improvement and new features that we added to our command line client after some great feedback from one particular customer who has un-questionably the largest and most demanding Team Foundation Server install base on the planet. In particular we have added the "-format:xml" option for most commands in addition to the usual -format:brief and -format:detailed. The -format:xml option will output data from the command line client in a format easily XML parseable without truncating output which makes it much easier to use and parse command line output in scripting scenarios. However, there have been many more improvements so check out the [release notes](http://download-us.teamprise.com/cs/3.1.0.8392R/release-notes/release-notes.html) for more information.

#### 64-bit support on Windows.

Not really worth calling out separately only to say that Teamprise is now **the world's first commercially available x64 TFS client for Windows** :-)

While we are a Java application, [as mentioned before](http://www.woodwardweb.com/java/000223.html), we have a bit of JNI code to do the stuff not possible from all the JRE versions that we support (such as native authentication on Windows or making a file writable). Also we use SWT to give us a native look and feel on all platforms and SWT works by using lots of JNI to do the presentation calls. This meant that if you tried to run Teamprise under a x64 Java runtime we died pretty quickly. We've had x64 support available for other platforms for a while (including Linux), but with Windows x64 support coming in Eclipse 3.4 we took the opportunity to compile our JNI code over to the Win32 x64 architecture and it works great.

On a personal note, during this activity I had to fix some bits in the core Eclipse 3.4 codebase (specifically PDE for people that are interested) and the small patches that I submitted have been applied into the main Eclipse project which is a nice feeling. Eclipse is a poster-child of open source projects and it is with some pride that I can tell people I have contributed code into it. It's also nice that as Teamprise is a commercial company that uses a lot of the Eclipse code and is an Eclipse Foundation member, we are able to do our bit and contribute something back for the benefit of all.

As you can see, we've been busy. We've hopefully cleared some adoption blockers for some of our customers, done quite a few bug fixes and performance improvements and thrown in some new features along the way. While the headline grabbing features of interest to most people are probably the offline support and the 64-bit support, I'm very proud of this as a solid "point" release and I would encourage everyone with a valid 3.0 license to upgrade.
