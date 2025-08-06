---
title: "Freezing Time in VMWare"
date: 2009-01-21T01:36:36.000Z
# post thumb
images:
  - "/images/post/2009-freezing-time-in-vmware.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["tfs", "technology", "maker", "web", "podcast", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

[](http://www.woodwardweb.com/WindowsLiveWriter/BacktotheFuturewithVMWare_1104/tfs2010_on_mac_2.jpg) One of the many pains of working with the [October 2008 CTP of VS2010 (aka Rosario)](http://www.microsoft.com/downloads/details.aspx?FamilyId=922B4655-93D0-4476-BDA4-94CF5F8D4814&displaylang=en) is that on top of everything else, it actually timebombed on January 1st 2009. This means that you have to run the virtual machine disconnected from the clock. Unsurprisingly all of the virtualization packages on the market try their hardest to do you doing crazy things like that. For a start, both [VMWare](http://www.vmware.com/) and [Virtual PC](http://www.microsoft.com/downloads/details.aspx?FamilyID=04d26402-3199-48a3-afa2-2dc0b40a73b6&displaylang=en) will set the CMOS clock date/time to be the time that you created / converted the machine. This means you have to be lightening fast on your F2 button to get into the BIOS setup screen to set the clock back.

You also need to tell the virtual machine to disable clock synchronization. [Brian Keller has a blog post on how to do this with Microsoft Virtual PC](http://blogs.msdn.com/briankel/archive/2008/10/27/visual-studio-2010-ctp-vpc-dealing-with-activation-messages.aspx). However, I needed to figure it out on VMWare Fusion. Luckily the following PDF from VMWare came to my rescue ([http://www.vmware.com/pdf/vmware_timekeeping.pdf](http://www.vmware.com/pdf/vmware_timekeeping.pdf)). The document is a little painful to read through, but basically all you need to do is open up the .vmx file in TextEdit and add the following entries:

tools.syncTime = FALSE  
time.synchronize.continue = FALSE  
time.synchronize.restore = FALSE  
time.synchronize.resume.disk = FALSE  
time.synchronize.shrink = FALSE  
time.synchronize.tools.startup = FALSE

Two of these caused me problems, first tool.syncTime was already set to false (likely because the Virtual PC image I converted already had time sync disabled). Next was “time.synchronize.tools.startup = FALSE”. This stops the VMWare tools from setting the guest OS time on OS startup and was missing from all the other posts I saw online about dealing with this issue.
