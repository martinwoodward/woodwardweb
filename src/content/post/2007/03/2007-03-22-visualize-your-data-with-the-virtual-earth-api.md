---
title: "Visualize your data with the Virtual Earth API"
date: 2007-03-22T17:06:20.000Z
# post thumb
images:
  - "/images/post/2007-visualize-your-data-with-the-virtual-earth-api.jpg"
#author
author: "Martin Woodward"
# description
description: "At the recent MVP summit, I attended a Mash-up lounge event."
# Taxonomies
categories: ["technology", "gadgets", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
At the recent MVP summit, I attended a Mash-up lounge event.  It was a bit Web 2.0-ey, but basically they had a bunch of bean bags, fake palm trees, and members of the Windows Live team and some Virtual Earth MVP's around to help folks get up to speed with the [Windows Live API's](http://dev.live.com/).  (Thanks to [Tyler](http://home.infusionblogs.com/tdavey/default.aspx) and [Robert](http://www.infusionblogs.com/blogs/rob_mcgoverns_weblog/default.aspx), Virtual Earth MVP's from [InFusion Development](http://www.infusiondev.com/) for helping me with some sample code to grok).  This is a whole area that I've not really been paying attention to in the past year, so I dropped by to see what the deal was and have a play. 

I have to say, I'm impressed.  It is super easy to control the Virtual Earth map control from your JavaScript, and the [documentation is pretty decent](http://dev.live.com/virtualearth/sdk/).  Now, as I freely admit, I am no expert on the differences between the various mapping providers around and their web interfaces - but I will say this; The [local.live.com](http://local.live.com/) data for Ireland and Northern Ireland is by far the best of the mapping sites that I've seen.  I also love the driving instructions and the custom print capabilities.  I get the feeling that if [local.live.com](http://local.live.com/) was not made by Microsoft then there would probably be more fuss about it - but hey ho.  I've just come back from a trip to Redmond so I must have had my borg implant secretly added if I'm feeling Microsoft are being unjustly treated :-) 

Anyway, on my return, I was having a chat with my good friend [Rob Burke](http://blogs.msdn.com/robburke/) about some of the exciting possibilities that the mapping API gives you.  As an example, I did this very quick [mash-up of traffic cameras](http://www.woodwardweb.com/demo/dublin.html) from the [Dublin City Council website](http://www.dublincity.ie/living_in_the_city/getting_around/traffic_cameras/index.asp) and a Virtual Earth Map.  It is very crude as it only took me 5 minutes to write the HTML (in [Notepad2](http://www.flos-freeware.ch/notepad2.html)) and then a further 15 figuring out the lat/long positions of the cameras - but hopefully you'll get the point.  If anyone wants the GeoRSS data I used to create the map then [here it is](http://www.woodwardweb.com/demo/dublin_webcam.xml). 

[Dublin City Center Traffic Cameras](http://www.woodwardweb.com/demo/dublin.html) - data from [Dublin City Council](http://www.dublincity.ie/living_in_the_city/getting_around/traffic_cameras/index.asp).