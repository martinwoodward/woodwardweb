---
title: "Don't do that"
date: 2005-12-08T18:51:24.000Z
# post thumb
images:
  - "/images/post/2005/12/2005-don.jpg"
#author
author: "Martin Woodward"
# description
description: "Beware when disabling inherited security settings in Visual Studio Team System, as losing read permissions can leave critical objects hidden."
# Taxonomies
categories: ["git", "tfs", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

[](http://www.woodwardweb.com/images/blog/tfs_properties_full.png)The source control system within Visual Studio Team System has a very powerful security model. One of the nice things is that if a user does not have read permissions on one of the objects in a tree, then that object is totally hidden from view - the server never even tells the client about it's existence.

While this is very nice, there is an option on the security settings for each object that allows you to disable inherited permission from the parent. It's a nice feature , but **USE THIS FEATURE CAREFULLY**. In Beta3 Refresh, when you de-select it - by default all of the permissions on that object get removed. You have to maually select which ones you want to add to it. This is exactly by design and maybe the behaviour you want. However, if you remove read permissions for everyone - that includes you. You will no longer be able to view it in the tree and so not able to select the object so that you can retore your read permission. It just sit's there in your repository totally hidden.

As I did this on a folder containing lots of very important files, and quickly I had that horrible sinking feeling. Luckily I was able to recover because I happened to add read permissions for one user before I pressed ok. I made that user admin and then logged in as him to restore read permissions for everyone. If I hadn't have done this, I think I'd have been left toally lost, pehaps hacking around in the TFS Database schema and re-starting the TFS service several times to try and restore something resembling my old source tree.

Anyway, let this be a warning. Don't disable "Inherit security settings" from an object in source control in Visual Studio Team System unless you really know what you are doing and you have left yourself an escape route!
