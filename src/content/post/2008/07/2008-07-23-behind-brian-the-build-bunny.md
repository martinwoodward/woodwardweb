---
title: "Behind Brian the Build Bunny"
date: 2008-07-23T16:31:57.000Z
# post thumb
images:
  - "/images/post/2008-behind-brian-the-build-bunny.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover how Brian the Build Bunny transforms Team Foundation Server events into audio notifications using simple web service integration."
# Taxonomies
categories: ["tfs", "technology", "gadgets", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
[](http://www.youtube.com/watch?v=Is32fWJJA-I) Since posting about [Brian the Build Bunny](http://www.woodwardweb.com/gadgets/000434.html), I have been getting a steady stream of emails from people who would like to know more about how it works.  

[Team Foundation Server provides a mechanism by which you can subscribe to events when certain things happen](http://msdn.microsoft.com/en-us/magazine/cc507647.aspx).  This is actually how many of the components in TFS are integrated between themselves and like the rest of the TFS glue - Microsoft make these events available so you can customize your TFS instance.  

At a high level, I purchased a [Nabaztag](http://www.nabaztag.com/) bunny and decorated it with the Visual Studio logo and Brian the Build Bunny was born. The code behind Brian the Build Bunny is actually very simple, a web service (in my case sat in IIS on my TFS server) listens for the events and then converts this into a string on text which it sends to the Nabaztag servers.  Nabaztag run this text through a Text to Speech engine and generate an MP3 file with the results, they then notify my build bunny about the MP3 file and he downloads the file over his WiFi connection and plays it on his speakers.  

But if you want the full gory details then read on.