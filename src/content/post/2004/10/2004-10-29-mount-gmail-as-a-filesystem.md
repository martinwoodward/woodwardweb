---
title: "Mount gMail as a filesystem"
date: 2004-10-29T09:05:42.000Z
# post thumb
images:
  - "/images/post/2004/10/2004-mount-gmail-as-a-filesystem.jpg"
#author
author: "Martin Woodward"
# description
description: "Transform your Gmail invites into a practical storage solution by mounting your Gmail account as a filesystem on Linux or Windows."
# Taxonomies
categories: ["technology", "dotnet", "gadgets", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Been wondering what to do with all those GMail invites?  Well thanks to a couple of new developments you can now mount a gmail account as an external file system.

First up, for lovers of penguins we have [GmailFS](http://richard.jones.name/google-hacks/gmail-filesystem/gmail-filesystem.html) a mountable filesystem for linux. It is a Python application, using the [FUSE](http://sourceforge.net/projects/fuse/) filesystem infrastructure to help provide the filesystem, and [libgmail](http://libgmail.sourceforge.net/) to communicate with Gmail.  GmailFS supports most file operations such as read, write, open, close, stat, symlink, link, unlink, truncate and rename.

Next we have the [GMail Drive](http://www.viksoe.dk/code/gmail.htm), a shell extension for windows.  GMail Drive enables you to save and retrieve files stored on your GMail account directly from inside Windows Explorer. GMail Drive adds a new drive to your computer under the My Computer folder.

[xdrive](http://www.freedrive.com/) is dead, long live gmail (so long as you don't worry about the privacy of the files stored...)