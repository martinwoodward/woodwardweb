---
title: "CruiseControl.NET Source Control Plugin 1.2.0 Released"
date: 2006-03-02T21:45:48.000Z
# post thumb
images:
  - "/images/post/2006/03/2006-cruisecontrol-net-source-control-plugin-1-2-0-released.jpg"
#author
author: "Martin Woodward"
# description
description: "The CruiseControl.NET Source Control Plugin 1.2.0 has been updated for compatibility with the RC version of Team Foundation Server API,."
# Taxonomies
categories: ["tfs", "dotnet", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Tonight, I finally sat down and recompiled the [CruiseControl.NET plugin](http://vstsplugins.sourceforge.net/) to work with the RC version of the Team Foundation Server API.  

Turns out there was only one change – the TeamFoundationServer object now has a public constructor to pass the credentials to rather than using the factory as I has previously been doing.  I also put a quick fix in there, but I really want to re-write the whole thing.  Looking back at the use of the client API it is very naive, there would be a ton of improvements I would love to do to it to make it faster by actually using some of the great features that Version Control in Team Foundation Server gives you.  I also want to talk to the PublishTestResults service.  Hey ho – so little time so many projects…

Anyway, cruise on over to the [VSTSPlugins](http://vstsplugins.sourceforge.net/) project to find out more.