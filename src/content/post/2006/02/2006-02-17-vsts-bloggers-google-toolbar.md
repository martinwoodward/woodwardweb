---
title: "VSTS Bloggers Google Toolbar"
date: 2006-02-17T17:06:07.000Z
# post thumb
images:
  - "/images/post/2006-vsts-bloggers-google-toolbar.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover how to enhance your Google Toolbar with a custom VSTS Community Button that showcases top posts from the VSTS blogosphere."
# Taxonomies
categories: ["git", "tfs", "technology", "books", "maker", "web", "programming", "podcast"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
[](http://www.woodwardweb.com/blog/vsts_google_toolbar.jpg)Well, having tried new new beta of [Google Toolbar](http://www.google.com/tools/toolbar/T4/) I just had to try implementing my own toolbar button.  Here is one that will give you the top previous posts from folks around the VSTS blogosphere.  Clicking on the button will take you to the excellent [Team System Rocks](http://teamsystemrocks.com/) website.

Once you have installed Google Toolbar, you can click [here](http://toolbar.google.com/buttons/add?url=http://www.woodwardweb.com/vstsbloggers/vsts_button.xml) to get the [VSTS Community Button](http://toolbar.google.com/buttons/add?url=http://www.woodwardweb.com/vstsbloggers/vsts_button.xml).

If you are interested, I pulled together a quick php script to slurp the RSS feed together and host them via Feedburner (because my slurping code was not written very efficiently).  The Feedburner version of the feed that the toolbar button uses can be found [here](http://feeds.feedburner.com/VstsBloggers).  This should be working a bit better now then when I first posted the this entry as I've improved the speed of the script so Feedburner doesn't time-out when reading the feed.  If you have a feed that you want me to add to the slurp list then feel free to post it as a comment here.  The feed items must to have a [pubDate](http://blogs.law.harvard.edu/tech/rss) as part of the feed because my dodgy script uses that to sort on to get the last 25 posts.