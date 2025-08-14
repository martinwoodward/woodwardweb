---
title: "Upgrading from TFS 2008 Trial to TFS 2008 Full"
date: 2008-01-28T11:40:59.000Z
# post thumb
images:
  - "/images/post/2008/01/2008-upgrading-from-tfs-2008-trial-to-tfs-2008-full.jpg"
#author
author: "Martin Woodward"
# description
description: "Learn how to seamlessly upgrade from a 90-day TFS 2008 trial to the full version with key purchasing tips and installation steps."
# Taxonomies
categories: ["tfs", "technology", "maker", "web", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

One of the most frequent questions I get when talking to people about TFS if how to upgrade from the freely downloadable [90-day TFS 2008 trial](http://www.microsoft.com/downloads/details.aspx?FamilyID=B0155166-B0A3-436E-AC95-37D7E39A440C&displaylang=en) to a full version of TFS. Our TFS 2008 license key arrived at the weekend, so I thought I would take the opportunity to record the process. The first two steps have nothing to do with installing your license key, just purchasing it - but sadly are often the most complicated. Installing the actual key once received, is pretty trivial as I hope you will see.

**Step 1: Purchase a TFS License Key.**

This step is frequently mis-understood. You have to pay for the full version of TFS. Just because you are a partner of an MSDN subscriber, doesn't mean that you get TFS included. As an MSDN Subscriber, depending on your subscription type you do get access to a 5-user limited version of TFS called "Team Foundation Server Workrgoup Edition". However only Gold Partners or Partners with an ISV Competency get TFS included in their partner fees - everyone else has to purchase it. When connecting to TFS, you also need to make sure you have enough Team Foundation Server Client Access Licenses (CAL's) to cover your use - if you have a Team Suite flavor of MSDN then that gives you one CAL.

**Step 2: Obtain TFS License Key.**

The license key for TFS will be printed on a little sticker on the back of the media that it arrives on. If it didn't (perhaps because you purchased TFS via a volume licensing agreement) then there are ways around this to get the license key out of the media (look for a file called setup.sdb and open it in Notepad, look for [Product Key], usually at the bottom of the file, and you will find it there).

Because getting a TFS License Key usually involves the physical delivery of the media, you should make sure that you factor this time into your purchasing decision. If (like most people) your purchasing process takes longer than you budgeted for - then you do have the ability to [extend your TFS Trial by an additional 30-days](http://blogs.msdn.com/bharry/archive/2008/01/15/checking-your-tfs-version-and-extending-trials.aspx).

**Step 3: Enter TFS Maintanence Mode**

Go to, Control Panel, Add Remove Programs.

[](http://www.woodwardweb.com/WindowsLiveWriter/UpgradingfromTFS2008TrialtoTFS2008Full_A42E/sshot-1_3.png)

Then find Microsoft Visual Studio 2008 Team Foundation Server in the list and press Change/Remove

[](http://www.woodwardweb.com/WindowsLiveWriter/UpgradingfromTFS2008TrialtoTFS2008Full_A42E/sshot-2_2.png)

**Step 4: Enter the Full Key for TFS**

At the bottom of the maintenance dialog, you have the option to enter your full license key.

[](http://www.woodwardweb.com/WindowsLiveWriter/UpgradingfromTFS2008TrialtoTFS2008Full_A42E/sshot-3_2.png)

Note that there was a bug in the RTM version of TFS 2008 that means that workgroup edition doesn't have the ability - see [this post](http://blogs.msdn.com/bharry/archive/2008/01/15/how-to-i-upgrade-to-a-proper-version-of-tfs-2008.aspx) for details. This is TFS 2008 90-day trial, so it works just fine for us.

Enter your license key and press Next. Note that this will install the license key and fire up a command window for a few seconds while it restarts IIS for the TFS server. Once you are finished, you will get the following dialog.

[](http://www.woodwardweb.com/WindowsLiveWriter/UpgradingfromTFS2008TrialtoTFS2008Full_A42E/sshot-4_2.png)

And you are complete. If you really want to check that the new license key has taken hold, then you can fire up a copy of [Brian Harry's VersionDetection tool](http://blogs.msdn.com/bharry/archive/2008/01/15/checking-your-tfs-version-and-extending-trials.aspx) to set your mind at rest.

[](http://www.woodwardweb.com/WindowsLiveWriter/UpgradingfromTFS2008TrialtoTFS2008Full_A42E/sshot-5_2.png)

And there you go - running the final release (9.0.21022.8) with no expiry date :-)
