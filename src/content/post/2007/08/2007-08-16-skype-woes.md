---
title: "Skype Woes"
date: 2007-08-16T14:37:56.000Z
# post thumb
images:
  - "/images/post/2007/08/2007-skype-woes.jpg"
#author
author: "Martin Woodward"
# description
description: "Skype experienced significant login issues today, linked to a server software fault exacerbated by Windows updates, but it's now resolved."
# Taxonomies
categories: ["technology", "dotnet", "gadgets", "maker", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Skype seems to have been having trouble this morning.  At first I thought it was a set of Windows Vista Updates I'd applied - but when the problem started affecting my hardware based Skype phone as well my suspicions went to my ISP.  I was thinking that they were doing some traffic shaping or something to Skype traffic.  Finally, after talking with a fellow Skype user (over an old fashioned POTS line) who was also having login problems I figured it must be Skype itself - and turns out [it is](http://heartbeat.skype.com/2007/08/problems_with_skype_login.html).  The fault is apparently "[software related](http://heartbeat.skype.com/2007/08/problems_with_skype_login.html)" and they did some [planned maintenance yesterday](http://heartbeat.skype.com/2007/08/planned_maintenance_on_15th_of.html) - coincidence? 

Funny how long it took me to realize it was Skype to blame, must show how reliable the service has been so far.  Interestingly, when I called my ISP ([Nildram](http://www.nildram.net/)) to ask if they'd did any traffic shaping they said that they did but that VoIP, Skype, and VPN traffic are all prioritized on my line during working hours.  That's actually quite reassuring and makes me like Nildram even more. 

**Update:**  Skype is back up and running, with a [few details posted as to what caused the problem](http://heartbeat.skype.com/2007/08/what_happened_on_august_16.html).  Interestingly they are spinning it as that the software fault on Skype's servers was triggered by lots of Windows computers rebooting for patch Tuesday - not sure what I think about that.