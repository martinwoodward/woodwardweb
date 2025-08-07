---
title: "Vista RTM on Intel Mac Mini Core Duo"
date: 2006-11-22T11:12:29.000Z
# post thumb
images:
  - "/images/post/2006-vista-rtm-on-intel-mac-mini-core-duo.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover how I navigated booting issues between Vista and Mac OS X on my Intel Mac Mini, leading to a handy workaround."
# Taxonomies
categories:
  ["technology", "books", "gadgets", "maker", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

[](http://www.woodwardweb.com/WindowsLiveWriter/VistaRTMonIntelMacMini_B4B1/startupdisk6.png) Just as a follow up to my [previous post](http://www.woodwardweb.com/teamprise/000304.html), I was having trouble switching back into Mac OS X once booted into Vista. As part of the Boot Camp process, Apple allow you to burn a CD containing the Windows XP Drivers and Utilities. Included is a handy utility to select the default Startup Disk. Using various tools, I was able to extract the Control Panel extension and install it into Vista. However, I was unable to get this to work - even when elevated to Administrator - it would always complain about not being able to get Administrative rights. Reading around the problem a little I think this may be either a Vista security thing or a driver thing (probably the former). I think pn XP the utility somehow manages to write a variable into the EFI telling it which boot partition to use - whatever mechanism is trys seems to not be working on my installation - but they again I may have just installed it wrong in my attempt to hack around BootCamps "Drivers for XP" installation program that really doesn't work on Vista.

The alternative is to press the (alt) Option key on startup. However, I have a cheap Belkin KVM that I'm running this through and it didn't seem to work (think it is something to do with the USB keyboard detection). Thankfully, [this tip](http://www.macworld.com/weblogs/macosxhints/2006/05/bootremote/index.php) came to my rescue, by holding the menu key of my Mac Mini's Apple Remote I got the bootloader screen allowing me to select my OS X partition - nice. Then I booted straight back into Vista, because I really am loving it :-)
