---
title: "Beware of the VMWare Workstation 6 Beta with Visual Studio 2005 on Vista"
date: 2007-01-16T15:18:50.000Z
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

I'd been having trouble getting Visual Studio Team Suite up and running on my new vista install.  I was assuming it was something nasty in the long winded installs of Visual Studio Team Suite, Team Explorer, SP1 for both and the Beta of the Vista GDR for Team Suite.  Every time I tried to start Visual Studio, I got the following error:- 

"[An error has occurred while trying to access the log file. Logging may not function properly](http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=1114955&SiteID=1&mode=1)". 

Luckily for me, [Gabriel Lozano-Morán posted the solution over on the MSDN Forums](http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=1114955&SiteID=1&mode=1) - turns out that I had installed a Visual Studio Plug-in as part of my VMware Workstation 6 Beta.  I didn't really want this plug-in from within Visual Studio anyway, so I re-ran the VMWare setup and removed the plug-in.  All is now working just fine.  Thanks Gabriel !.