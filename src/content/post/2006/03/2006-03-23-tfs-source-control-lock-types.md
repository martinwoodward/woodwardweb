---
title: "TFS Source Control Lock Types"
date: 2006-03-23T08:54:48.000Z
# post thumb
images:
  - "/images/post/2006-tfs-source-control-lock-types.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["git", "tfs", "technology", "maker", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

As I have [mentioned before](http://www.woodwardweb.com/vsts/000179.html), when you check out a file for edit in Team Foundation Source Control, you are actually telling the server that you are going to edit a particular version of a particular file that you have in your local workspace. At that point, you can optionally select one of three lock types:-

"none", "check-out" or "check-in"

Lock "None". The file is not locked. A user may check out the file after you have, make changes and check those changes back in. At the point when you come to check in files you will be prompted to resolve any conflict that could occur. A really useful example when none is very useful is if editing a common config file, and interface containing constants or an enum where typically only additions are being made - your changes and another developers changes will usually always work in harmony. Typically, we default to lock of "none" in my organization and rely on communication between developers to ensure we do not adversely effect each others development.

Lock "Check-out". The file is locked on the server so that no user may check the file out after you have. This is useful is you are making a change to the file and you do not want anybody else to be able to start editing the file until you have released the lock by checking in the file or un-locking it. **You cannot place a lock of "check-out" on a file if somebody already has checked out the file with a lock type of "none"**. Additionally, binary files are checked out with a check-out lock due to the problems of merging two binary files.

Lock "Check-in". This is also known as the "antisocial" lock in our company :-) A check-in lock prevents anyone else from committing their changes to that file until you have released the lock. This means that they will be responsible for performing any conflict resolution activities that result. **You can place a check-in lock on a file even if somebody has a file checked out with a lock type of "none"** i.e. I know you are working on this file but you are not allowed to check in your changes until I have made this important quick fix.

Depending on the culture in your organization, you may not be comfortable with two developers being able to work on the same file at the same time. In which case there is a Team Project Setting (Team, Team project Settings..., Source Control, Check-out settings) called "Enabled multiple check-out". This is typically enabled, however you can de-select this option if you have appropriate privileges and from then on all check-outs will be performed with lock "Check-out" - no other types of lock will be permitted by the server.
