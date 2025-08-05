---
title: "Brian the Build Bunny"
date: 2008-05-28T22:22:02.000Z
# post thumb
images:
  - "/images/post/2008-brian-the-build-bunny.jpg"
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

I'm always keen try new and novel ways to keep in touch with the status of my software projects.  Fortunately, Team Foundation Server provides many ways to do this.  While the [Build Wallboard](http://www.woodwardweb.com/vsts/000395.html) is fun if you have a spare monitor and machine lying around, I wanted to experiment with some inexpensive dedicated devices, and so Brian the Build Bunny was born.   

";" alt="">  

Brian is a [Nabaztag smart rabbit](http://www.amazon.com/Violet-Nabaztagtag-WiFi-Rabbit/dp/B000OFHBKS/woodwardwebcom).  He reads out details of check-ins and builds.  If a build has failed then his ears go down to show how sad he feels, but if you fix the build his ears will soon pick up again.  

I've had Brian for about a year now waiting to do this project, but when I tried it in the past I always found the response times from the rabbit to be too slow.  However earlier this year, the Nabaztag developers updated the code running the rabbits so that they are now using the XMPP (Jabber) protocol to receive updates and the service now seems pretty good.  

Brian is now sitting on my desk chattering away and letting me know what is happening in TFS.  If you want to find out more about how he works and see him in action then take a look at the [video](http://www.youtube.com/watch?v=Is32fWJJA-I). If your company blocks YouTube but you have Silverlight installed then you can view [a higher quality version of the video courtesy of the Windows Live Streaming service](http://silverlight.services.live.com/invoke/15051/buildbunny/iframe.html).  I'll go through the code behind Brian in a later post if there is any interest, but it is pretty much a standard TFS event listener that then sends text to the rabbit using the [Nabaztag API](http://api.nabaztag.com/docs/home.html).