---
title: "Know your Internals"
date: 2004-03-29T10:44:32.000Z
# post thumb
images:
  - "/images/post/2004-know-your-internals.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["technology", "maker", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

I've been a regular user of programs from [Sysinternals](http://www.sysinternals.com/ntw2k/utilities.shtml) for a while now - today they just saved me again.

I've just been getting an "Access is deinied" error when I was trying to delete a directory telling me that it was is use by another process. I re-booted the machine and the directory was still in use. Then I remembered the [Process Explorer](http://www.sysinternals.com/ntw2k/freeware/procexp.shtml) from Sysinternals. This handy peice of freeware will tell you what files and registry keys are being access by which processes on the system. It even allows you to search for the file as a handle and it will show you the process that is using it. If only this feature was built into windows...

Another program I use all the time is [BgInfo](http://www.sysinternals.com/ntw2k/freeware/bginfo.shtml). This is installed on all my Windows servers and quickly tells me what the machine is along with its IP addresses and free disk space. Again, this has saved me loads of time traking down which server is which when connected to them remotely or through a KVM. Until this was installed, the quickest way I had to figure out which machine was which was to log in and eject the CD-ROM drive tray. Though this approach is funnier, it is not always practical...
