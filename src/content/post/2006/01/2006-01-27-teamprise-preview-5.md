---
title: "Teamprise Preview 5"
date: 2006-01-27T04:39:37.000Z
# post thumb
images:
  - "/images/post/post-1.jpg"
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

[](http://www.teamprise.com)Preview 5 of Teamprise is now available for registered users to [download](http://www.teamprise.com/preview-register.py) (registration is free).  This release is compatible with Beta 3 and Beta 3 refresh of Visual Studio 2005 Team Foundation Server.  We'll be releasing another preview release after Release Candidate comes out (due [any time soon](http://blogs.msdn.com/jeffbe/archive/2006/01/19/514801.aspx)).  

I use the Preview 5 release day-to-day for the continued development of Teamprise in Eclipse.  Considering I spend most of my time on the end of a VPN connection the source control works incredibly well.  We also use the command line client in the build scripts to download the source onto the build server (which is on a meaty linux box).  

Anyway, if you are currently using VSTS and you have some Java folks in your organisation then I suggest that you point them at the Preview 5 download page so that they can join in the party.  Even if you don't use Eclipse for your day-to-day development, I'd also recommend you try the Teamprise Explorer (a stand-alone client) if you are just using VSTS for source control.  IMHO, it's a more compact interface than Microsoft's Team Foundation Client (which currently just looks like Visual Studio).  Also, the compare dialog is really nice.  You wouldn't believe it was a 100% java client, SWT is soo much of an improvement from the old Swing days...