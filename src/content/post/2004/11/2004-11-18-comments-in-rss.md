---
title: "Comments in RSS"
date: 2004-11-18T17:19:46.000Z
# post thumb
images:
  - "/images/post/2004/11/2004-comments-in-rss.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover how to enrich your RSS feeds with comment details using extensions and essential namespace declarations."
# Taxonomies
categories: ["web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

Just found out about the various extensions to RSS 2 that allow information about comments to be included in the RSS feeds.

I have revised [my feed](http://www.woodwardweb.com/index.xml) to include the full article along with links to the comments in it, numbers of comments etc. For more information on supporting comments in Moveable Type see this [excellent HOWTO](http://www.tkachenko.com/blog/archives/000133.html) by [Oleg Tkachenko](http://www.tkachenko.com/).

The only caveat I would add is that you must remember to add the following namespace declarations to your RSS feed file (index.xml):-

    xmlns:wfw="http://wellformedweb.org/CommentAPI/"

    xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
