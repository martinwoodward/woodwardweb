---
title: "CruiseControl 2.7.1 RC3 - now with TFS Support!"
date: 2007-08-15T16:00:23.000Z
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

[Paul Julius just announced](http://www.pauljulius.com/blog/?p=6) that RC3 of CruiseControl 2.7.1 has been released from the [Agile 2007 conference](http://www.agile2007.org).  From my point of view this is fantastic news, because it includes a patch I submitted to the project to include integration between CruiseControl and Team Foundation Server.  Previously this was available from our website but from 2.7.1 onwards it will be included in the base CruiseControl distribution. 

If you have an existing CruiseControl build process then this makes it really simple to migrate your source control over to TFS.  Combined with the [TFS Ant tasks](http://www.teamprise.com/download/download-ant.html) we make freely available you should be good to go. Note that both the CruiseControl integration and the Ant tasks require a version of the TFS Command Line Client be installed on your build server.  We've tested them against the standard Microsoft tf.exe for Windows build servers and our own tf command line client that works cross-platform. 

Thanks to Dan Rollo and the rest of the [CruiseControl team](http://cruisecontrol.sourceforge.net/developers.html) for checking over and committing my patch, which got assigned the rather ominous issue number of CC-666 ;-)