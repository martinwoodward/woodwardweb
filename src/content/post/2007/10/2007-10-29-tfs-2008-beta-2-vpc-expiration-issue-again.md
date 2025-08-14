---
title: "TFS 2008 Beta 2 VPC Expiration Issue (again)"
date: 2007-10-29T17:32:45.000Z
# post thumb
images:
  - "/images/post/2007/10/2007-tfs-2008-beta-2-vpc-expiration-issue-again.jpg"
#author
author: "Martin Woodward"
# description
description: "temp_placeholder"
# Taxonomies
categories: ["tfs", "technology", "dotnet", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
So, to stop my [Beta 2 VPC image from expiring this week](http://blogs.msdn.com/jeffbe/archive/2007/10/27/update-on-expiring-vs2008-beta2-vpcs.aspx), I thought I'd try out an "upgrade" of one of the VSTS + TFS Beta 2 VPC images to a full copy of Windows Server Enterprise Edition with a retail key (as provided by my MSDN account, that Microsoft kindly supply me as a perk of being a [Team System MVP](http://msdn2.microsoft.com/en-gb/teamsystem/bb734814.aspx)).  Here are a few observations in case you try to do the same:-  I needed to use a recent copy of the Windows Server 2003 R2 Enterprise Edition media (32-bit).  The ISO image I had from my March 2007 MSDN DVD did not work, so I ended up having to use one from September 2007 (number 2939.4 if you are looking).  Jeff mentioned that he used the June version which was 2939.3) The setup didn't want to run at first.  In the end, I let it perform a bunch of Windows Updates that it had in it's queue, restarted and tried again. This time it worked fine. When completing the upgrade, everything seems to be working fine, apart from the Documents and Reporting nodes are showing with the dreaded "little red crosses".  A quick peek in the event log showed that I needed to re-grant the Network Service user rights to the "C:\WINDOWS\Microsoft.NET\Framework\v2.0.50727\Temporary ASP.NET Files" directory.  A quick right-click and add on the security tab of the Temporary ASP.NET File directory and everything seemed to be ok. 

Other than those little hiccups - seemed to work ok.  Certainly quicker than rebuilding the image from ISO's but still took quite a while (couple of hours including time to install those windows updates).  I'll report back here if I find any other issues.