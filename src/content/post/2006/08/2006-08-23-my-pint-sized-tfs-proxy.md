---
title: "My Pint Sized TFS Proxy"
date: 2006-08-23T11:25:19.000Z
# post thumb
images:
  - "/images/post/2006-my-pint-sized-tfs-proxy.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover how a small TFS Proxy Server drastically improved my development speed over a slow VPN connection from the UK."
# Taxonomies
categories: ["git", "tfs", "technology", "gadgets", "maker", "teamprise", "web", "podcast"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
[](http://www.woodwardweb.com/WindowsLiveWriter/PintSizedTFSProxy_F31B/tfs_proxy%5B3%5D.jpg) I use Team Foundation Server over the end of a VPN connection to from my house in the UK over to Teamprise HQ back in Champaign, IL.  Using Team Foundation Server the performance has been satisfactory, but I've always been jealous of the performance that the guys in the office get over their 1Gbs connection.  We have gigabit networks both sides of the Atlantic, but the ADSL line to my house is a 2Mbs downstream and 256kps upstream connection which slows everything down.  As an experiment, I've just installed a very small machine as a TFS Version Control Proxy Server and the performance increase is astounding - I wish I had done this earlier. 

In my office, I had an old Dell Optiplex SX270 lying round.  Measuring 240x240x85 mm (~9x9x3 inches), it used to run woodwardweb.com before Teamprise kindly offered to host my blog for me.  It's not a powerhouse by any stretch of the imagination - a 2.4 Ghz P4 with 512Mb RAM and a 5,400rpm 20Gb Laptop hard disk.  I picked it up on the Dell Outlet store for less than £300 over 3 years ago.  However, it will run Windows Server 2003 without any complaints, so I configured the box as a VPN gateway for my network and also installed the Team Foundation Server Version Control Proxy onto it. 

All I can say is that I wish I has done this earlier.  Our main development branch currently contains 4,501 files in 706 folders taking up 70Mb.  As you can tell - the majority of the files are small (java source) files.  The TFS Version Control Proxy gives the most impressive speed improvements when working with large files.  Despite this, to do a full clean get of the main development branch has gone from 43 minutes 33 seconds to (on average) 2 minutes 50 seconds - that is a 15 times performance improvement. 

[](http://www.woodwardweb.com/WindowsLiveWriter/PintSizedTFSProxy_F31B/ProxySpeeds%5B7%5D.png)  

While, I don't see this sort of speed improvements all the time (because in the majority of cases I just do a Get Latest to update the 20 or so files changes since I last did a Get Latest into my workspace), it is invaluable when I swap branches or when I want to run a clean build.  Doing some performance testing, even my pint sized server is not under any sort of load during a full get of the trunk so I could probably use it to host a small remote team of about 5-10 people reasonably easily. 

Anyway - I just wanted to post about my small TFS proxy server (though not quite the [smallest TFS appliance](http://blogs.msdn.com/dglover/archive/2006/08/07/690479.aspx)).  If you are running TFS and you have a remote office connecting then I urge you to set aside a spare machine to run as a TFS proxy server at the remote site.  It doesn't have to be particularly high-powered or dedicated to the task for you to get some serious benefit from it.