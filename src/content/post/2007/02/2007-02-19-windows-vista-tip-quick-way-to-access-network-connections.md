---
title: "Windows Vista Tip: Quick way to access Network Connections"
date: 2007-02-19T13:48:50.000Z
# post thumb
images:
  - "/images/post/2007-windows-vista-tip-quick-way-to-access-network-connections.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["technology", "gadgets", "teamprise", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
One of the things I've always enjoyed about Windows 2000 -> Windows XP -> Windows Vista is that no matter how much the UI changes, some shortcuts just seem to stay around allowing me to quickly navigate around the system.  One that has survived is right clicking on My Computer and then selecting "Manage" - which takes you to an MMC console with most of the commonly used snap-ins pre-loaded.  However, one I used a lot more has disappeared.  I used to to right-click on the "My Network" shortcut in the start menu and select "Properties".  That would take me to the network connections wizard.  In Vista it takes me to the Network and Sharing Center screen (possibly helpful for my Dad, but not what I was after). 

From the dialog, you can press "Manage network connection" and it takes you to the good old network connections dialog[](http://www.woodwardweb.com/WindowsLiveWriter/WindowsVistaTipQuickestwaytoaccessNetwor_C224/Network%20Connections%5B4%5D.png)  

However, I wanted a quick way to access this from my keyboard, so I used a tactic I've found I've been doing a lot with Windows Vista - I create a shortcut to it that I placed in my Programs menu.  The trick was to find the control panel file responsible for this dialog.  After a bit of digging I tracked it down to be "%SystemRoot%\System32\ncpa.cpl". 

Here is a screenshot of my shortcut settings in case you want to do the same