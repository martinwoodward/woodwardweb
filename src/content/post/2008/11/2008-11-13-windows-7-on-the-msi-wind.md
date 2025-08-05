---
title: "Windows 7 on the MSI Wind"
date: 2008-11-13T11:34:43.000Z
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

[](http://www.woodwardweb.com/WindowsLiveWriter/Windows7onMSIWind_9736/windwin7m3_2.jpg)   

For the record, I like Windows Vista.  However, for those of us who remember the Vista beta program and even early days of running Windows Vista it wasn't always fun - largely due to the driver support but there were plenty of bugs to avoid even in the later betas. When I purchased my MSI Wind (OEM rebadged as an Advent 4211 here in the UK) XP was pre-installed.  I remember when I picked up my Wind from the local computer store the salesman tried to sell me on the fact that it came with XP rather than Vista which is not a good sign of Vista's reputation with consumers.  That said, XP didn't last long on my Wind before Vista replaced it.  The stock Wind runs a 1.6 Ghz Intel Atom processor on the Intel 945GSE chipset.  As part of the initial batch of Winds, mine happily has the Synaptics touchpad.  One of the many things I like about the Wind is that it is end-user upgradeable, but the only addition I have made was to upgrade it to 2Gb RAM as the stock Western Digital Scorpio 120GB hard drive is a pretty good one for a budget netbook.  

Remembering the early days of the Vista beta program, I had to contrast this with the absolute delight that installing and running the PDC build (build 6801) of Windows 7 has been on this diminutive device.  For a start stable drivers for the Wind were all available from Windows Update.  To get them I first had to install the [Realtek WiFi driver for Vista](http://www.realtek.com.tw/downloads/downloadsView.aspx?Langid=1&PNid=40&PFid=40&Level=5&Conn=4&DownTypeID=3&GetDown=false&Downloads=true#RTL8187SE) by changing the compatibility settings to trick the installer into thinking I was running Vista RTM.  But once I had an internet connection, Windows Update found updated drivers for the graphics card, Wifi, Ethernet and even the SD card reader.  Everything on the device appears to be working, including bluetooth and the built in webcam.  

I then ran the ["blue-badge" unlock hack](http://www.withinwindows.com/2008/11/09/blue-badge-tool-now-available-unlocks-all-known-protected-features/) from [Rafael Rivera Jr](http://www.withinwindows.com/) because I wanted some of the shiny eye-candy showed off on stage at PDC2008 that is not active in the standard 6801 build.  Note that after running the hack, I had to manually set the security permissions on the following files that the tool modifies to grant the "Users" group read permissions - but this was just because of my hackery and because I want the device to support multiple users, not something that a normal user would have to do.     \Windows\Explorer.exe     \Windows\System32\wisptis.exe     \Windows\System32\ieframe.dll     \Windows\System32\shell32.dll     \Windows\System32\stobject.dll     \Windows\System32\TabletPC.cpl     \Windows\System32\themecpl.dll     \Windows\System32\themeui.dll     \Windows\System32\powercfg.cpl    

Then I was up and running, and ready for the ultimate test - leaving the laptop on the kitchen table for my wife to pick up and use.  I warned her that I'd been "messing about" with the laptop - but she logged in, checked her mail (using the shortcut to the Windows Live Mail application in the fancy new taskbar) and did her online banking using IE8 (again from the pinned shortcut in the new taskbar).  All without issues.  Windows 7 = Passed. It is now the official operating system on my netbook.  

Resume from standby is noticeably faster in Windows 7, and general system usage is also a lot snappier than Vista on this underpowered device.  Not sure what I think to the new "Libraries" but at first pass I class them as "not too annoying".    

I am liking many of the new features in Windows 7.  "Aero snaps" (where you can drag a window to the top of the screen to maximize or to the left and right) is good, the new magnification tool (press Win and "+" to zoom in, Win and "-" to zoom out) will replace [ZoomIt](http://technet.microsoft.com/en-us/sysinternals/bb897434.aspx) as the tool I use during on-stage demos and it was nice to see that the calculator has had a revamp (programmer mode will now be my personal mode of choice for it).  

Despite all the additional stuff, what is really nice about Windows 7 is what they have taken away.  The overall experience is just less noisy than before.  

I am very excited to see how useable this very early build is and what the later builds, betas and eventual release of Windows 7 will bring.  Windows 7 is looking to be exactly what Microsoft need - it will probably be known as "the release that Vista should have been" which is a little unfair as Vista obviously laid down a lot of the ground work in terms of architecture.  That said, at this early stage it looks like Windows 7 is going to be a very popular release.

**Update (5 Jan 2009):** The new version of the [Blue Badge unlock tool](http://www.withinwindows.com/2008/12/09/blue-badge-rev-3-adds-registry-override-bits-aero-peek-enabled/) doesn't require system files to be modifed so hopefully it will be easier to run.  Also from what I read on the internet this tool will not be necessary from Windows 7 beta 1 (build 7000) onwards as the features will be enabled by default.