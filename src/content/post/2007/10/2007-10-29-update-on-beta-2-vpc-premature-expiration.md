---
title: "Update on Beta 2 VPC Premature Expiration"
date: 2007-10-29T11:30:27.000Z
# post thumb
images:
  - "/images/post/2007-update-on-beta-2-vpc-premature-expiration.jpg"
#author
author: "Martin Woodward"
# description
description: "Jeff Beehler outlines options for resolving the Beta 2 VPC expiration issue, including upgrades and new VPC images set for release soon."
# Taxonomies
categories: ["tfs", "technology", "web", "programming", "podcast"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
[Jeff Beehler has posted an update on the Beta 2 expiration issue](http://blogs.msdn.com/jeffbe/archive/2007/10/27/update-on-expiring-vs2008-beta2-vpcs.aspx).  He currently see's three possible alternatives:  **Do nothing**: if you don't need to use your VPC for more than an hour or so at at time (for instance for demos), then you can probably tolerate the behavior of the timed out OS.  **Upgrade OS to fully licensed version: **if you have access to a fully licensed version of Windows Server, follow the steps above and upgrade the expired OS.   **Use new VPC images:** if you can't upgrade the VPC OS and want to continue to use VS2008 / TFS2008 Beta2 on a regular basis, you'll probably want to use the new VPC images which we'll publish early the week of October 29.  If you have data in TFS, you'll need to follow the instructions on [moving TFS servers](http://msdn2.microsoft.com/en-us/library/ms404879%28VS.90%29.aspx).  

Obviously there is a forth, and that is to set keep the date of your host OS machine to before November 1st before firing up this virtual machine - however this can have some issues - I'm not completely sure what the behavior of TFS would be if changesets and work item revisions started appearing before earlier ones on the system - however the fact that Jeff doesn't mention messing with date/times indicates that there might be some issues there. 

The option I'm going to try is upgrading to a license key from my MSDN subscription - I'll report back how I get on. 

Anyway - keep an eye on [Jeff's blog](http://blogs.msdn.com/jeffbe/) for more details.