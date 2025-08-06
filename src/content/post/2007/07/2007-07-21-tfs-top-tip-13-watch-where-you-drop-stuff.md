---
title: "TFS Top Tip #13 - Watch where you drop stuff"
date: 2007-07-21T05:13:51.000Z
# post thumb
images:
  - "/images/post/2007-tfs-top-tip-13-watch-where-you-drop-stuff.jpg"
#author
author: "Martin Woodward"
# description
description: "With Team Build in Team Foundation Server, you can have multiple build types for multiple projects."
# Taxonomies
categories: ["git", "tfs", "maker", "teamprise", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
With Team Build in Team Foundation Server, you can have multiple build types for multiple projects.  For example, we have a build that runs fast that we can have running [Continuous Integration](http://en.wikipedia.org/wiki/Continuous_Integration) on, and a slower build (that does obfuscation, release packaging etc) that is run on demand when we want to perform a release to QA (some of which later go on to become public releases). 

A neat feature in the Team Build stuff is that you specify a drop location for your builds and the packaged binaries along with the build log and test results will be placed in a folder corresponding to the build name.  In all the demos you see, this will typically be specified as something like [\\server\drop](file://\\server\drop) and you may well do this yourself at first.  Pretty quickly the drop folder will fill up with builds and get confusing. 

A better way is a rather simple solution that I almost didn't mention, however when I mentioned this to a friend of mine and it caused some head-slapping, so I thought I'd discuss it here.  Apologies if you'd already figured this out this rather basic step. 

Simply, put your builds into folders.  Something like:-  \\server\drop\product\buildType\ 

To give an example:-  \\jeeves\drop\teamprise\ci  \\jeeves\drop\teamprise\release 

You can obviously take this further if need be.  For example we currently have builds going on in two main places, we are putting Teamprise 2.2 through final testing while, in parallel, we work on the next major release in trunk.  In the example above, it means we have 4 builds types in total and can follow the convention of \\server\drop\product\branch\buildType to make:-  \\jeeves\drop\teamprise\2.2\ci  \\jeeves\drop\teamprise\2.2\release  \\jeeves\drop\teamprise\trunk\ci  \\jeeves\drop\teamprise\trunk\release 

 Pretty simple really, but helps to plan this stuff up front.