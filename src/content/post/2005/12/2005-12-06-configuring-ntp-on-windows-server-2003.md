---
title: "Configuring NTP on Windows Server 2003"
date: 2005-12-06T07:47:58.000Z
# post thumb
images:
  - "/images/post/2005-configuring-ntp-on-windows-server-2003.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["technology", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

Recently, a colleague and I were struggling to get a Windows 2003 domain controller configured to use an external NTP time source. We were doing all the old registry hacks that you used to have to do to no affect.

It turns out that there is a domain controller group policy that now affects the behavior of the windows time service. What I don't quite understand is that it overrides the registry settings even if it is left as "Not Configured" in the group policy. Anyway if you do the settings as a domain controller policy and reboot the PDC, it works fine. There is probably a better way to get this working, if you find it let me know!

For more information, see the following article from Microsoft:- [Windows Time Service Configuration for Windows Server 2003](http://www.microsoft.com/technet/prodtechnol/windowsserver2003/technologies/security/ws03mngd/26_s3wts.mspx)
