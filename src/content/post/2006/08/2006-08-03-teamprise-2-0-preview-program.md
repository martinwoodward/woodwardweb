---
title: "Teamprise 2.0 Preview Program"
date: 2006-08-03T22:52:26.000Z
# post thumb
images:
  - "/images/post/2006-teamprise-2-0-preview-program.jpg"
#author
author: "Martin Woodward"
# description
description: "Explore the exciting features of Teamprise 2.0 in our Preview Program, where your feedback shapes the future of version control."
# Taxonomies
categories:
  [
    "git",
    "tfs",
    "technology",
    "books",
    "dotnet",
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

I know it only seems like a few moments have past since we [released](http://www.woodwardweb.com/vsts/000261.html) version 1.1 onto the unsuspecting public, but today we opened the doors a little on Version 2.0 as we start our [2.0 Preview Program](http://www.teamprise.com/preview/preview-register.py). The word “preview” is deliberately chosen – this is to allow you to take a peek at the current state of development on our 2.0 branch, take some of the many new features out for a bit of a drive and kick the tires around. If you think it’ll be something you’d like to use when it’s finished then [let us know](http://support.teamprise.com/viewforum.php?f=6) – equally please [let us know](http://support.teamprise.com/viewforum.php?f=6) what you really don’t like, what you would really want or what just blatantly doesn’t work in your environment. There are bugs in this release, so I wouldn’t recommend you use this in production – our [current V1.1 release](http://www.teamprise.com/download/) is the most stable one and you should use that if you plan to be using [Teamprise](http://www.teamprise.com/) in anger. Additionally, if you purchase V1.1 right now then you get a free upgrade to V2.0 when it is released later in the year.

Version 1 was all about making a robust implementation of the version control functionality in Java and then integrating this with Eclipse. Version 2 is about expanding on that robust version control mechanism to bring in many of the additional features offered by Team Foundation Server. While we have not finished implementing all the features we plan to put into 2.0 yet, many of them are there. Some major and some subtle. Now that Version 2.0 is available for preview customers I just wanted to highlight some of my favourite additions.

### Team Explorer

[](http://www.woodwardweb.com/blog/teamexplorer.png)

We now have a “Team Explorer” view. Looks awfully like the Visual Studio one I’m sure you can see. You can now access your work items, Sharepoint document libraries and reports from [Teamprise](http://www.teamprise.com/). What’s that you say, “Work Items”?

### Work Item Support

Yup. Full work item editing support, from the comfort of a rich client interface on a non-windows OS or from Eclipse on Windows if you fancy. Other than Java (and Eclipse if you are using our IDE plug-in), nothing else is needed, just install our client onto your machine and point it at your Team Foundation Server and you are away.

The depth of functionality here is huge – basically because we are parsing the same work item definitions that you access from Visual Studio. All customised work items should also work (if they work in Visual Studio Team System). If yours don’t then [let us know](http://support.teamprise.com/viewforum.php?f=6). If you want to [email me](javascript:var dom=) a copy of your process template I’ll add it to one of our test servers and we’ll test against it during internal development – I am keen on getting as many examples of real life work item types as possible to make sure we have everything done right.

The work item editing support rocks, I often have to double check if I am in Eclipse or Visual Studio. Even the fonts used on Windows are the same – it’s crazily good (probably because I had very little to do with this feature). One of the few differences is that, because we use the latest version of SWT in [Teamprise](http://www.teamprise.com/) Explorer, our tabs are displayed with the proper native look and feel (i.e. a gradient fill if you have Windows XP or the Royale theme installed) – [try doing that in .NET](http://www.codeproject.com/cs/miscctrl/themedtabpage.asp) :-) However, there are a couple of other little extras you get that I want to show off.

### Work Item Searching

Right click on a the Work Items node of a Team Project and look what options are currently available…

Before you rush to click on the search icon, take a little time to admire it. That little collection of 256 pixels was probably my only contribution to the whole Work Item project ! Anyway, don’t admire it for too long or you won’t get to the next Dialog…

[](http://www.woodwardweb.com/blog/work_item_search.png)

This can only be described as a _power search_ feature. You want to find a bug, but the only thing you can remember about it was that it had something to do with “cheese” – no problem. There are many more useful features available here to help narrow down your search.

Enough of work items. Let’s talk about some of the stuff I did have a little to do with.

### Teamprise Explorer 2.0

[](http://www.woodwardweb.com/blog/explorer_on_windows.png)

We have revised the look and feel of the stand-alone TFS client, [Teamprise](http://www.teamprise.com/) Explorer, to bring in the Team Explorer view and work item support. Ok, it looks nice on my Royale themed copy of Windows XP – but what about that shiny MacBook Pro you just sold your house to buy?

[](http://www.woodwardweb.com/blog/explorer_on_mac.png)

Probably worth pointing out here that since version 1.1 we have been a Universal Binary on the Mac Platform (i.e. we run on both the Intel and PowerPC based models). Obviously, [Teamprise](http://www.teamprise.com/) Explorer also runs from Linux, Solaris etc.

### Shelving Support

It’s currently a little hidden away, but there are some new menu options on the Pending Changes view so that you can Shelve and Un-shelve your pending changes. We have a couple of performance problems that show up particularly when you do a branch operation over a large set of files so current branch, merge and label are not enabled in this preview release. I’m working on that right now so that we can include those remaining source control operations before we ship V2.0 later this year.

### Get Latest on Checkout

OK, it has to been one of the most requested features we get – especially with users who have come from Source Safe. They just expect a check-out to bring down the latest version – [but this is not how TFS works](http://www.woodwardweb.com/vsts/000179.html). If you are one of those people that get really annoyed by this, then we now have an option that is disabled by default but you can go switch it on if you want (Preferences…, Teamprise, Source Control).

### Additional Command Line Client Capabilities

A little hard to show in a screen-shot, but we have made some major improvements to the command line client. To begin with, you only need to download one version of the command line client and it will run on your Java enabled system (including FreeBSD if that is your fancy). Not only do we have the good old “tf” style commands, we introduced a new command “wit”. This allows you to do work item operations from the command line including viewing queries, view work items and editing fields on a work item. While this is handy if you are stuck on a Solaris box with only a text prompt to talk to – it will also come in handy in a ton of automation and scripting based scenarios that we can think of.

That is a quick rundown of some of the stuff I am most excited about in this preview release. There are a ton of new features, performance improvements and bug fixes for some bizarre edges cases that I hope you never happen to come across. Over the next few weeks we’ll be doing more of the same, but I wanted to show you some of the cool stuff we’ve been working on. Please drop by the [forums](http://support.teamprise.com/) and let us know what you think.
