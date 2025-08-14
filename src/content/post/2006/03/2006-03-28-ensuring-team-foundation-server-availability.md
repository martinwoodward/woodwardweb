---
title: "Ensuring Team Foundation Server Availability"
date: 2006-03-28T06:52:43.000Z
# post thumb
images:
  - "/images/post/2006/03/2006-ensuring-team-foundation-server-availability.jpg"
#author
author: "Martin Woodward"
# description
description: "Explore strategies to ensure Team Foundation Server availability while leveraging existing SQL Server expertise and optimising disk configurations."
# Taxonomies
categories: ["git", "tfs", "technology", "web", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

While even it's own mother would admit that VSS has some issues, the one thing in it's favour is it's simplicity. You only need a file server to keep a VSS repository available and organisations have a lot of experience keeping file systems up and running. Recently I've been talking to a lot of Architect types who are trying to figure out how Team Foundation Server will fit into their organisation and the issue of ensuring availability frequently crops up.

[Buck Hodges](http://blogs.msdn.com/buckh/) has an [interesting post on the topic](http://blogs.msdn.com/buckh/archive/2006/03/27/562031.aspx), linking to some MSDN documentation on the topic. Good news is that we can use database clustering and database backup skills that most large companies using SQL Server have in house - but we are reliant on a warm standby option for application tier availability.

In real terms this is probably a better position than most folks are in for their current version control systems, but as Team Foundation Server develops, I would expect to see more improvements in this area.

Quick note about configuring your application tier machine (and source control proxy machines). Personally, I consider it best to use a couple of disk types. The application and config settings should be stored on a partition configured for maximum reliability and read optimization (think RAID level 5), however there is a caching element to the application tier and with the proxy server. The caching stores compressed versions of each file at each changeset - allowing them to be rapidly streamed to the client. You can separately configure the location of this cache on disk - allowing you to put this on a disk array configured for performance (say RAID level 0) - if the disk array was to suffer a failure the cache can always be re-built from data stored in the database. For more information on the Version Control cache see an [excellent screen cast by Swamy Subramanian](http://go.microsoft.com/fwlink/?LinkId=62788).
