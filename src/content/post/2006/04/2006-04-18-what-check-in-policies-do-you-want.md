---
title: "What Check-in Policies Do You Want?"
date: 2006-04-18T18:22:22.000Z
# post thumb
images:
  - "/images/post/2006-what-check-in-policies-do-you-want.jpg"
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

Now V1.0 of [Teamprise](http://www.teamprise.com/) is out the door, we have started on the next release and are looking at the features that people want.  One of these is Check-in policy support.  Due to the way check-in policies are implemented in Team Foundation Server it presents us with several architectural challenges.

I’d be interested to hear what Check-in policies people either use currently or would like to have.  Feel free to join in the discussion even if you only currently use Team Foundation Server to manage your .NET projects.  To get the discussion started here are the ones that I’ve heard discussed previously:-

Work-Item has been associated
Comment has been entered
Code passes static code analysis rules (FxCop etc)
File names pass certain regular expression rules (i.e. forbid people from checking in *.tmp files or that pesky Thumbs.db file)
Code being checked in compiles
A defined set of unit tests associated with code have been ran and passed.

Anyone got any others?  Any of those listed above useful or totally useless?  If you don’t want to post a comment to this blog – I’d be very happy to hear from you [in private](javascript:var dom=).