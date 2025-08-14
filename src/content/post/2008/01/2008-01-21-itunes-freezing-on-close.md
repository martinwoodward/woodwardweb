---
title: "iTunes Freezing on Close"
date: 2008-01-21T09:40:53.000Z
# post thumb
images:
  - "/images/post/2008/01/2008-itunes-freezing-on-close.jpg"
#author
author: "Martin Woodward"
# description
description: "Frustrated by iTunes 7.6 freezing on close? Discover how disabling Bonjour can restore functionality and improve your experience."
# Taxonomies
categories: ["technology", "gadgets", "maker", "web", "programming", "podcast"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

I swear, one day I'll learn. Despite having [promised myself to steer clear](http://www.woodwardweb.com/podcasting/000371.html) of the initial release of any Windows version of iTunes because they are consistently broke in some pretty severe ways - I read [this report on Engadget](http://www.engadget.com/2008/01/15/apples-itunes-7-6-plays-nice-with-64-bit-vista/) and decided to upgrade thinking that they may finally haved solved the issues I have been having. (My main one being that I could consistently crash iTunes on any PC by downloading a podcast and pressing the "pause" button during the download).

However, iTunes 7.6 gave me a great new issue - iTunes wouldn't close. Every time I tried to close it (by pressing the X button, or doing File, Close) it would freeze and start consuming as much of my CPU as possible - the only way to get rid of it was to kill the process in Task Manager.

Anyway - after a bit of playing, I eventually figured out that this was something wrong with how they are calling [Bonjour](<http://en.wikipedia.org/wiki/Bonjour_(software)>). iTunes has the ability to listen for other shared libraries and to share your own library - which is something I had enabled so that I could stream stuff off my laptop onto the Mac Mini and vice-versa. It does this using Apple's Bonjour service.

On my system, the Bonjour service is installed under the catchy name of

"##Id_String1.6844F930_1628_4223_B5CC_5BB94B879762##"

Very user friendly - I think I'll start using GUID's for all my user interfaces :-). Anyway. If I stop this service, I can close iTunes down happily. It will even now let me go into the preferences in iTunes and disable sharing - something that was locking up iTunes 7.6 before (and what made me suspect the Bonjour integration).

Therefore - if you are having the same problems as me, right click on My Computer and select Manage. Then go to Services and Applications, Services, select "##Id_String1.6844F930_1628_4223_B5CC_5BB94B879762##" and press "Stop". Then right click, select properties and change the Start-up type from "Automatic" to "Disabled".

This obviously removes the sharing capabilities - but at least it allows you to sync your iPod. When I finally got iTunes 7.6 to actually work a little bit, I was unsurprised to see that they have still not fixed the bug with the download manager, so if you attempt to do anything to a downloading purchase, podcast or whatever then it will still crash iTunes and will consume most of the available CPU while downloading. Sigh.

**Update:**People are reporting that this same issue is true with iTunes 7.6, 7.7 and 7.7.1 so I've removed the version number from the title of this post. Luckily now that I've disabled Bonjour and sharing things seem to be working better for me so hadn't noticed myself that this was the case. Additionally, if you have ESET NOD32 Antivirus installed then you might want to look at [this forum post](http://www.eset.com/support/kb.php?option=com_kb&Itemid=29&page=articles&articleid=760).
