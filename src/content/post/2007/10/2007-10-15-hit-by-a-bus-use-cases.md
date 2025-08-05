---
title: "\"Hit By a Bus\" Use Cases"
date: 2007-10-15T16:56:59.000Z
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

One of the great things about version control is that it covers a number of "Hit by a Bus" scenarios.  I say this with an air of joviality, but each actual use case is never a nice one.  I once worked with a guy, who supposedly once worked at a place where the "Hit By a Bus" scenario was a real one.  Mostly you need them when a member of the team has had to leave at short notice because [they quit](http://www.woodwardweb.com/vsts/000143.html)/ were sacked / had a family emergency etc. Anyway, there are a number of times when you thank your chosen deity for the fact that you implemented a decent source control system giving you one less thing to worry about, especially when times are tough.  Today, I [ran across a question on the MSDN forums](http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=2271260&SiteID=1&mode=1) where someone was having one of these days and as usual, it is time to dust off the [tf command line](http://msdn2.microsoft.com/en-us/library/z51z7zy0(VS.80).aspx), or fire up the [excellent TFS Sidekicks from Attrice](http://www.attrice.info/cm/tfs/index.htm) - in [this example](http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=2271260&SiteID=1&mode=1) it was to query history with a filter on the user that you want the history for.