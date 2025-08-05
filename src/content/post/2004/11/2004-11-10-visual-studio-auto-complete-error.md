---
title: "Visual Studio Auto Complete Error"
date: 2004-11-10T00:10:41.000Z
# post thumb
images:
  - "/images/post/2004-visual-studio-auto-complete-error.jpg"
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

Been using Visual Studio 2003 lately, not a bad editor (no where near as good as [intellij](http://www.jetbrains.com/idea/) for Java for pretty good).  Today, all of a sudden the autocomplete feature - called Intellisense (TM - M$) stopped working.  Now normally, this is because of an error earlier in the code, not yet displayed to you (dumb).  However this time my project was building fine, just no auto-complete.  After much scratching of heads, the following seems to work:-

Shut down Visual Studio .NET

Open the project in explorere

Delete the bin and obj directories from within the project that is causing problems (or delete all of them if in doubt)

Start up Visual Studio

Alternatively, you could install [Resharper](http://www.jetbrains.com/resharper/), which is also from Jetbrains and seems to put most of the stuff that was in IntelliJ into Visual Studio, and so far works a treat.  Infact I think that Ctrl-Shift-N could well be the new Ctrl-Shift-N