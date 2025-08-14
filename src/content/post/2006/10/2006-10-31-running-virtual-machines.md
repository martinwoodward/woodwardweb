---
title: "Running Virtual Machines"
date: 2006-10-31T12:13:40.000Z
# post thumb
images:
  - "/images/post/2006/10/2006-running-virtual-machines.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover how using external drives for virtual machines on a laptop can enhance performance significantly, even via USB 2.0 connections."
# Taxonomies
categories: ["git", "technology", "gadgets", "teamprise", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
I use VMWare a lot.  Not only do I use it for demonstrations of Teamprise, I also use it for day-to-day development and testing (one of the joys of developing a cross platform product that talks to a Microsoft server product). 

I work on a laptop most of the time.  It's a Dell Precision M70 with 2Gb Ram, but the hard drive is only 60Gb (I went for speed rather than size).  When I first started running out of space, I ran up a virtual machine over my USB2.0 connection to an external hard drive.  I'd assumed that this was going to be even slower, but much to my surprise it was noticeably faster. 

[Jeff Atwood](http://www.codinghorror.com/blog/) has an [excellent post](http://www.codinghorror.com/blog/archives/000714.html) over on his [Coding Horrors blog](http://www.codinghorror.com/blog/) this morning explaining why this is so.  ##### [The Single Most Important Virtual Machine Performance Tip](http://www.codinghorror.com/blog/archives/000714.html) 

If you use virtual machines at all, you should have the single most important virtual machine performance tip committed to heart by now: **always run your virtual machines from a separate physical hard drive** 

Personally, I have a couple of the [Seagate 100Gb 5400rpm USB 2.0 Drives](http://www.amazon.co.uk/gp/redirect.html?ie=UTF8&location=http%3A%2F%2Fwww.amazon.co.uk%2FSeagate-Momentus-External-100Gb-5400Rpm%2Fdp%2FB00064NG0Q&tag=woodwardwebcom&linkCode=ur2&camp=1634&creative=6738) as they strike a nice balance between portability, robustness and capacity.  They are also nearly always available when I pop into Best Buy or PC World.  However, the [SmartDisk CrossFire](http://www.amazon.co.uk/gp/product/B0007UDC2G?ie=UTF8&tag=woodwardwebcom&linkCode=as2&camp=1634&creative=6738&creativeASIN=B0007UDC2G) drives look pretty good and I just noticed a [7200rpm, 250Gb](http://www.amazon.co.uk/gp/product/B0007UDC2G?ie=UTF8&tag=woodwardwebcom&linkCode=as2&camp=1634&creative=6738&creativeASIN=B0007UDC2G) one on Amazon for £120.  As Jeff's post explains, going for eSATA looks like the way to go in the future - especially a drive enclosure that supports both eSATA and USB.  However, for the meantime, I'll stick with my USB 2.0 only models as they are very portable and are powered by the USB lead.