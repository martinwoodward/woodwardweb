---
title: "Teamprise 3.0 Ships!"
date: 2008-03-18T17:06:56.000Z
# post thumb
images:
  - "/images/post/2008-teamprise-3-0-ships.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["tfs", "technology", "dotnet", "maker", "teamprise", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
At [EclipseCon 2008](http://www.eclipsecon.org/) this morning, we just announced that [Teamprise 3.0](http://www.teamprise.com/) has been released!  If you've been wondering why I have been quiet on the blog lately - but also why anything I have been talking about is Team Foundation Build related, then you are about to find out why :-)  First of all, I'd encourage you to go visit the shiny new website at [http://www.teamprise.com](http://www.teamprise.com).  Our marketing team had too much fun putting that together, including getting a real, live, massive Teamprise power button made up and shipped in a huge crate from New York to be photographed and used as the new site/icon image.

The full release notes are available [here](http://download.teamprise.com/cs/3.0/release-notes/release-notes.html), but as has been the tradition for the past few Teamprise releases, I thought I would give you a run down of my favourite new features in the 3.0 release.

At a high level, the features in 3.0 can be summarised as:-

  Full Team Foundation Build integration (including ability to execute Ant based builds) 

  Check-in policy support 

  Recursive folder compare 

  Single sign-on (from Microsoft Windows machines) 

  "Destroy" command for version control 

  Show deleted items and undelete from Source Control Explorer UI 

  much much more (see [release notes](http://download.teamprise.com/cs/3.0/release-notes/release-notes.html)) 

While it is not my area, I should also mention that we've taken this opportunity to make our licensing **more affordable for smaller teams**.  We have been very pleasantly surprised by the number of people buying 1 to 20 licenses at a time.  Originally, Teamprise pricing was skewed to the Enterprise customers (i.e. simple, all inclusive and with steep volume discounts).  So we have done a couple of things to help out the smaller companies:-

  You can now purchase the various components (Teamprise Plug-in for Eclipse, Teamprise Explorer, Teamprise Command Line Client) individually as well as the Teamprise Client Suite which gives you the lot. 

  We have lowered the initial prices for a single seat, meaning that people buying one or two licenses can now get the same discounts that used to only be available to folks purchasing 100. 

If you have any licensing issues / queries then feel free to contact me, or you can talk to the sales team direct at [sales@teamprise.com](mailto:sales@teamprise.com).  Anyway - back to the part of this release that I do know about - the technology.  

The first feature I want to talk about is one that I had no involvement with.  It's one of those features that many people will not notice because it just works but anyone who has done any Java to .NET web service interop work will instantly recognise as being a little bit clever.

#### Single Sign-On

The initial log-in screen has undergone a big overhaul.  On Windows machines you are given the option to use "default credentials", i.e. the username and password that you are logged onto windows with.  It obviously doesn't know your password, but does some JNI magic to get the native Windows API's to handle the authentication logic with Team Foundation Server.  While you are also on the login screen, you may notice the Profile feature.  This is an area that many people probably won't use, but we added for our power users and for ourselves.  Basically, the profiles feature allows you to store sets of servers/credentials that you commonly use to connect to Team Foundation Server and then you can bring up the details using a simple drop down.  Makes it much easier to switch between your production TFS instance and your CodePlex project for example - or switch credentials if you are a TFS administrator.

#### Check-in Policy Support

In Visual Studio, check-in policies are implemented as a .NET assembly runs every time a policy is evaluated or configured.  The policy also has full access to the .NET API's, the Visual Studio API's as well as anything it might want to pinvoke out to on the Win32 API side.  As you can imagine, this presented us some problems when we wanted to have check-in policies that ran the same in Eclipse on Windows Vista as Teamprise Explorer on the Mac or Aptana on Ubuntu - therefore we have had to develop a parallel Teamprise check-in policy framework.

As we were doing this, we took the opportunity to learn from some of the feedback folks have been having with the Visual Studio check-in policies.  While our framework and SDK will look very familiar to anyone that has developed a custom check-in policy for Visual Studio, you will notice some differences.

Firstly, we supply **different policies out of the box**.  The vast majority of custom check-in polices that people deploy are things like "Check for Comments" etc, so we just shipped the common ones our customers wanted to prevent them from having to write their own.

Secondly, we make use of the Eclipse plug-in framework to implement our policies as extension points.  This means that they are **easy to deploy** (using the Eclipse update site mechanisms built in to the IDE).  We have also separated the configuration (stored as a blob of XML data in our framework) from the implementation - represented by the plug-in deployed.  The again makes it easier to deploy, especially when it comes to version 2 of a policy...

Thirdly, all of our policies can be **scoped by the path in version control** to which they correspond - you are not limited to per Team Project scoping and you do not have to wrap your policies in a custom policy to get more detailed scoping like you do with the current Visual Studio framework.

#### Team Foundation Build Integration

Anyone that has been following this blog for a while, or who attended the [Team Build talk I did at TechEd with Brian Randell](http://www.woodwardweb.com/personal/000391.html), will notice that I have been increasingly involved in the inner workings of Team Foundation Build.  Now you can see the fruits of that labour.

In Teamprise we now have **full integration** with the shiny new **build functionality** in **TFS 2008** as well as support for **TFS 2005**.  Backwards compatibility with the TFS 2005 server is very similar to if you were using a Visual Studio 2008 client, accept that ours is slightly more backwards compatible (you can create new builds on a TFS 2005 server as well as manage build qualities etc).  However it is with TFS 2008 that you get to see the majority of the features.  I could go on about this aspect all day as their are so small things that I am proud of, but at a high level you can:

  View existing build definitions 

  Manage builds in Build Explorer 

  Queue new builds 

  View build report 

  Edit Build Quality 

  Delete build 

  Manage Build Qualities 

  Open Drop Folder 

  New/Edit Build Definition 

The following features are only available against a TFS2008 server: 

  Edit Retention Policies 

  Keep Build 

  Set Queue Priority 

  Postpone Build 

  Stop/Cancel Build 

  Delete Build Definition 

One of the smaller features I will call out is that from the build definition in the Team Explorer, you can right click and do a "View Build Configuration" that will open the Source Control Explorer at the place in which the TFSBuild.proj file is stored so that you can check it out and edit it.  A feature that I added solely for my own sanity during dogfooding :-).  

[](http://www.woodwardweb.com/teamprise/images/be_leopard.jpg) All this would be fairly academic, if you didn't have some way to do a cross-platform build using Team Foundation Build.  In the current release, we provide a the [Teamprise Extensions for Team Foundation Build](http://www.teamprise.com/products/build/) which basically [**Ant enables the Team Foundation build server**](http://www.teamprise.com/products/build/).  The Teamprise extensions are a set of MSBuild targets that insert the Ant build process into the standard Team Build mechanism as well as a custom MSBuild We hope to extend this to support in the near future to some of the other common build/test tool-chains in the cross-platform world.  However, the Ant integration case will help a lot number of people out there.

Best yet, the [Teamprise Extensions for Team Foundation Build](http://www.teamprise.com/products/build/) are available **free of charge for everyone** - wether or not you are a Teamprise customer.  Also, if you want to see how they work and customize them to meet your own non-standard build system then the [source is available](http://www.teamprise.com/products/build/) under the permissive **open source** Microsoft Public License ([MS-PL](http://www.microsoft.com/resources/sharedsource/licensingbasics/publiclicense.mspx)).

I would personally like to thank the Team Foundation Build Team (especially [Buck Hodges](http://blogs.msdn.com/buckh/) and [Aaron Hallberg](http://blogs.msdn.com/aaronhallberg/)) who have been incredibly helpful through the development of the build functionality in Teamprise 3.0 while they were also busy working on TFS 2008.  

Hopefully that gives you a quick flavour of Teamprise 3.0 and where we are going with this release.  If you head over to the new site now and take a look at the many improvements we've made, we'd love to [hear what you think](http://support.teamprise.com).