---
title: "Delete Old Files"
date: 2006-02-09T13:29:52.000Z
# post thumb
images:
  - "/images/post/2006/02/2006-delete-old-files.jpg"
#author
author: "Martin Woodward"
# description
description: "Learn how to efficiently delete old files from your directory with a custom C# app, plus a safer alternative in Windows Server 2003."
# Taxonomies
categories: ["technology", "dotnet", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

I was just trying to get some backups configured and I wanted a way of deleting files from a directory stucture that were older than a certain date. I couldn't figure out how to do it easier from a Windows 2003 command script, so I wrote a quick C# console app to do the job. I've included the code and a copy in case you find this useful. **WARNING:** Use this at your own risk, as I wrote this for myself I haven't spent any time putting in "Are You Sure" prompts or anything. If you were to do something crazy like DeleteOldFiles 5 c:\ it will delete any file on your C:\ drive that has not been written to in 5 days - including things in the Windows directory..

**Update:** The second I posted this, I noticed the [ForFiles](http://technet2.microsoft.com/WindowsServer/en/Library/9660fea1-65c7-48cf-b466-204ba159381e1033.mspx) command in the Windows Server 2003 resource kit that works a bit like find on unix. Hey ho, at least I wrote some C# code today.
