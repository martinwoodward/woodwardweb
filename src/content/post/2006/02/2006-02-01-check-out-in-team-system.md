---
title: "Check Out in Team System"
date: 2006-02-01T07:14:50.000Z
# post thumb
images:
  - "/images/post/2006-check-out-in-team-system.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["tfs", "teamprise"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Internally in Teamprise, we have been having a lot of discussions about check-in and check-out in Team System and how to explain this concept to our end users.  The problem is that the terms are overloaded depending on the source control system that you come from.  In Visual Source Safe (VSS) or PVCS, check-out means “give me the latest version of the file and lock it so that no-one else can edit it”.  In CVS and subversion, checkout means “get the latest version”.  If you are using the source control features in Team System then checkout means “Tell the server I want to edit this file and mark that file as writeable in my file system”, at the same time that you check-out the file you also get an option to lock the file using one of three lock types (none, check-out and check-in).

We have to figure out a way to explain this to the end user, as this is new behaviour to them no matter what source control system they are coming from.