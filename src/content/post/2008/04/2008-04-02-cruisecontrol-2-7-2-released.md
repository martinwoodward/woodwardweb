---
title: "CruiseControl 2.7.2 Released"
date: 2008-04-02T20:27:47.000Z
# post thumb
images:
  - "/images/post/2008/04/2008-cruisecontrol-2-7-2-released.jpg"
#author
author: "Martin Woodward"
# description
description: "CruiseControl 2.7.2 is now available, featuring key bug fixes and improved compatibility with Microsoft Visual Studio Team Foundation Server 2008."
# Taxonomies
categories: ["tfs", "technology", "dotnet", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

[Jeffrey Fredrick](http://www.developertesting.com/archives/individual_weblogs-jeffrey_fredrick-index.html) just announced that [CruiseControl](http://cruisecontrol.sourceforge.net/) 2.7.2 is now available for download: [http://tinyurl.com/2zm9mz](http://tinyurl.com/2zm9mz).

There are lots of bug fixes, lots of changes to the Dashboard and some new plug-ins, but the bit that is of most interest to me was (from the release notes)

## TeamFoundationServer source control

- Fix compatibility with Microsoft Visual Studio Team Foundation Server 2008 (CC-735). Submitted by Martin Woodward.

This was to work around an issue that came up when using CruiseControl (java version) to talk to a TFS2008 server (TFS2005 worked fine and still does). If you are attempting to use CruiseControl with TFS 2008 then you should go with CruiseControl 2.7.2. For that matter - if you are using CruiseControl.NET with TFS then you should also take a look at the [latest release](http://www.codeplex.com/TFSCCNetPlugin/Release/ProjectReleases.aspx?ReleaseId=1816) of the integration to TFS - as that contains the same fix allowing you to happily talk to a 2008 version of Team Foundation Server (also using the TFS 2008 client API's).

Anyway, congratulations to the CruiseControl team on the 2.7.2 release!
