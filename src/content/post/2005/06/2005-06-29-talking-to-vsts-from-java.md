---
title: "Talking to VSTS from Java"
date: 2005-06-29T23:26:30.000Z
# post thumb
images:
  - "/images/post/2005-talking-to-vsts-from-java.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["tfs", "technology", "teamprise", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

**Update (Jan 2006):** If you would like to use some of the features of VSTS from Eclipse then you might want to take a look at my new employer, [Teamprise](http://www.teamprise.com). They provide an eclipse plugin to access Team Foundation Source Control from Eclipse running on multiple platforms including Windows, Linux and Mac OS X.

**Original Post:** I have just managed to get a quick test java client talking to VSTS and retrieving a list of projects running on my Team Foundation Server. I know this is a small step towards the goals of the [VSTSEclpse](http://www.vstseclipse.org) project, but I'm really happy I've got this working and wanted to tell everyone. Thanks to [Davanum Srinivas](http://blogs.cocoondev.org/dims/), Dexter Wong, Evgeny Beskrovny and the rest of the folks over at the axis-user mailing list for all their help in getting NTLM authentication with a Windows Web Service working from a Java application. I've been trying to get NTLM authentication working for something I needed to do at work recently, so this came in doubly handy (another example of working on Open Source projects in your own time directly benefiting your employer).
