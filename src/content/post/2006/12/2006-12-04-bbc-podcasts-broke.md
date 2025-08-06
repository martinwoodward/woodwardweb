---
title: "BBC Podcasts Broke"
date: 2006-12-04T16:19:19.000Z
# post thumb
images:
  - "/images/post/2006-bbc-podcasts-broke.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["technology", "web", "podcast"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

**Update: **17.15 Fixed now, nothing to see here. Move along.

As of the time of writing, all the [BBC Podcasts](http://www.bbc.co.uk/radio/downloadtrial/) have broke. Attempting to access the link gives a 404 error (reported as "The URL xxx could not be found on the server" in iTunes) This is a bit of a bummer for me as I am about to get in my car and drive down to Dublin ready for the [big Vista launch](http://www.microsoft.com/ireland/business/launch2007/event.mspx) event tomorrow with Neil Armstrong - yes [that one](http://en.wikipedia.org/wiki/Neil_Armstrong).

The problem is that the URL's that everyone is currently using are in the format:-

http://downloads.bbc.co.uk/rmhttp/downloadtrial/StationName/ProgramName/rss.xml

After a bit of playing, I discovered that I can access the feed from the following location (with the rmhttp bit removed):-

http://downloads.bbc.co.uk/downloadtrial/StationName/ProgramName/rss.xml

However, all the links in the feed are broke, because they talk to the following URL's for file download:-

http://downloads.bbc.co.uk/rmhttp/downloadtrial/StationName/ProgramName/EpisodeName.mp3

Again, if you _really_ want the content then you can remove the rmhttp bit of the URL and download it manually, i.e. the above would become:-

http://downloads.bbc.co.uk/downloadtrial/StationName/ProgramName/EpisodeName.mp3

I dare say that Auntie is working on a fix, however it looks like I'll have to listen to back issues on the way down - getting the content sync with iTunes via a manual download is just too much work (another reason for me to switch MP3 players away from the iPod/iTunes paring, a move that I am strongly considering)
