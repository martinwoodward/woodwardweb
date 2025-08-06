---
title: "Another RC Team Foundation Server Up and Running"
date: 2006-02-08T22:08:27.000Z
# post thumb
images:
  - "/images/post/2006-another-rc-team-foundation-server-up-and-running.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["tfs", "technology", "maker", "teamprise", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

You'll probably be seeing a lot of these [type of posts](http://blogs.msdn.com/robcaron/archive/2006/02/07/527353.aspx) around the net, but I just wanted to say that I've got the RC version of Team Foundation Server up and running in a VPC. Apart from my only allocating the virtual server 384 Mb of memory for the first part - the installation went very smoothly. Honestly, they are really taking the fun out of it. I remember when getting a successful install of TFS was [cause for celebration](http://www.woodwardweb.com/vsts/000137.html).

Anyway, at [Teamprise](http://www.teamprise.com) we will be coding against this new version to pick up all the changes and then migrate our dogfood server once we have a java client that is stable against the new RC web service schemas. Apart from the [headline changes in the RC build](http://blogs.msdn.com/jeffbe/archive/2006/01/22/515917.aspx), I'm noticing lots of subtle cosmetic changes with Microsoft's RC version of the client - like all the additional subtle help pointers and a few really minor things (such as the current workspace version of a file being displayed when you right-click and select properties within Source Control Explorer).
