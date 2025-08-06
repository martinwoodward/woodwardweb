---
title: "Windows Live Writer and Movable Type"
date: 2009-10-22T20:57:16.000Z
# post thumb
images:
  - "/images/post/2009-windows-live-writer-and-movable-type.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["technology", "books", "dotnet", "web", "podcast", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

I've been an avid [Windows Live Writer](http://windowslivewriter.spaces.live.com/) user since the early days, and for many years I've used [Moveable Type](http://www.movabletype.org/) for my personal blog. The reason I went with Moveable Type was initially because that was what some of the other blogs that I read where using. The other thing I liked about it is that files are published as HTML onto the server making the serving of blog pages a very easy task for the web server to do - meaning that my site typically copes well when a post get's a lot of traffic (talk about tempting fate...). While it doesn't have the wide community support that Wordpress has - it works well for me and I'm still very happy with it despite trying lots of others (Wordpress, DasBlog, Community Server etc)

This is, it was all working well. Last week I switched my hosting from an Ubuntu machine over to a Windows Server 2008 R2 based machine. My reason for doing this is that I'm wanting to have a play with some ASP.NET MVC 2 based sites using Visual Studio 2010 Beta 2 - and I wanted a server that I could host all my sites on.

Moving the server over was a fairly painless process. Especially considering I was moving a backup from an Ubuntu + psql based host to a Windows + MySQL environment. The one problem I was having was that Windows Live Writer was no longer working for me. Whenever I tried to log into my blog I got the following error:

Now, I knew my password was valid because I'd been logging in to the web interface with it. After much digging it turns out that Movable Type now has a separate web service password to the web site password. This is because the web service password is stored in clear text in the database, but the normal login is stored as an MD5 hash.

I changed the web service password in my profile in the Movable Type console to a cryptographically random string and copy/pasted that into the password field in Movable Type and now I can post entries again.

Apologies is anyone has been having trouble accessing my blog during this transition or got spammed with new feed posts. Hopefully things are working for everyone.

As a side note - Windows Live Writer is by far the best blog editor I've found that handles Moveable Type. I'm surprised that nothing as easy to use exists on the Mac side (I've tried most of them). If anyone knows of a good Windows Live Writer competitor over on the Mac then I'd love to hear your recommendations.
