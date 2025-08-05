---
title: "TFS 2010 Beta 1 with Teamprise"
date: 2009-05-21T16:09:27.000Z
# post thumb
images:
  - "/images/post/2009-tfs-2010-beta-1-with-teamprise.jpg"
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

Now that [TFS 2010 Beta 1 is publically available](http://msdn.microsoft.com/en-us/vstudio/dd582936.aspx), I thought it would make sense to share our plans with everyone.  Teamprise has been working closely with Microsoft on the TFS 2010 release.  First of all, can I quickly thank all the people at Microsoft who have been helping us so far. All the way from the individual developers working on features all the way up to the very highest leadership, we have had nothing put fantastic support and rapid responses to our questions.  

I remember attending meetings almost two years ago now with many of the [Teamprise](http://www.teamprise.com) developers at the Microsoft offices to talk about this version back when it was known only with the codename Rosario.  We’ve been actively working on builds since last year and in fact [Brian Harry demonstrated Teamprise talking to TFS2010 at PDC in October 2008](http://www.woodwardweb.com/vsts/tfs_2010_teampr.html).  

But we have a long way to go.  The current plan is that Teamprise 4.0 will be our “TFS 2010 compatible release”, including many of the new TFS 2010 features.  We aim to ship Teamprise 4.0 with-in a couple of weeks of when Microsoft launches TFS 2010.  Before that date we will have previews of Teamprise 4.0 for people wanting to test our clients against their TFS 2010 beta environments.  The current plan is to ramp up our preview program around the Beta 2 timeframe of TFS 2010.  We will also have TFS2010 Beta 2 compatible versions of our [Teamprise Build Extensions](http://www.teamprise.com/products/build/).  If anyone is on Microsoft’s early adopter programs and is blocked from being able to provide Microsoft with TFS feedback until they also have Teamprise clients to test with, then please drop a line to [support@teamprise.com](mailto:support@teamprise.com) so we know about you as soon as possible.  We plan to be [dogfooding](http://en.wikipedia.org/wiki/Eat_your_own_dog_food) against TFS2010 beta’s here at Teamprise very early.  

If you want to use current versions of Teamprise today with TFS 2010 Beta 1, then there are several known issues.  However the basics of version control and work item tracking are both operational.  That said, using TFS 2010 Beta 1 with Teamprise is not supported so use it at your own risk.  

First of all, you must be running the latest version of Teamprise (3.2.2) for anything to work.  We had to make some changes to the 3.2 release to allow check-ins to work against a TFS2010 server and we included those in the 3.2.1 public release.  

Next, Team Foundation Server must be configured to not be in a virtual directory.  By default, a fresh install of TFS 2010 Beta 1 will exist at http://server:8080/tfs where “tfs” is the virtual directory for the TFS application.  This makes TFS much easier to host inside an existing web site (i.e. on a single port shared with Sharepoint etc) – however Teamprise 3.X doesn’t know about virtual directories.  Therefore when you install TFS 2010 Beta 1 you will have to do a customised installation and blank out the Virtual Directory text box in the Application Tier settings.  

[](http://www.woodwardweb.com/WindowsLiveWriter/TFS2010Beta1withTeamprise_CF0A/TFS2010B1_2.jpg)   

Teamprise 3.X (like Visual Studio 2008) also doesn’t know about Project Collections.  Therefore you will only be able to access the default project collection on each TFS instance using Teamprise 3.X.  Once you have this configured – the TFS 2010 beta 1 server will look much the same as accessing a TFS 2010 server does from Visual Studio 2008.  

 [](http://www.woodwardweb.com/WindowsLiveWriter/TFS2010Beta1withTeamprise_CF0A/Java%20-%20Source%20Control%20-%20Eclipse%20SDK%20(2)_2.png)   

And there you have it.  The next few weeks and months are shaping up to be great fun as we all get to test out this massive new version of the Team System products.  Visual Studio Team System 2010 is a huge release, but one that addresses many adoption issues that people have today with the product.  I’m incredibly excited now that the Beta of VSTS is publically available so we can all start talking about it and figuring out new best practises etc.  If you thought adoption of Team System was going well up until now, the adoption of this 2010 release is going to be huge.  With all the new stuff to learn, and the potential even this early beta of the product is showing – now is a very exciting time to be in the Team System space :-)  

If you have any questions or comments about Teamprise and TFS 2010 then please drop the [support team a line](mailto:support@teamprise.com), or contact me.