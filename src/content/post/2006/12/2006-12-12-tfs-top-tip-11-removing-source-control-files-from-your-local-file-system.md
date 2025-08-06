---
title: "TFS Top Tip #11 - Removing source control files from your local file system"
date: 2006-12-12T12:45:58.000Z
# post thumb
images:
  - "/images/post/2006-tfs-top-tip-11-removing-source-control-files-from-your-local-file-system.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["tfs", "technology", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
One of the questions that came up from one of our users was "how do I delete the files from my local file system - and tell Team Foundation Server that I have done this". 

The first thing you might try is to just delete them locally.  However, Team Foundation Server (TFS) uses your [workspace](http://msdn2.microsoft.com/en-us/library/ms181383(VS.80).aspx) to keep track of what files you have downloaded and what version you have of them.  The reason it does this is so that it can maintain your files without a costly (both in terms of network and CPU processing) sync step.  With TFS, when you say "Get latest", you only get the latest version of files that have changed since you last got them.  Nothing is downloaded that you don't need (thereby saving you network traffic).  A really neat thing about TFS is that if you delete a file on the server and check that delete in, then when somebody does a "Get Latest", the file is deleted on their local system as well - very nice.  Moves and renames also exhibit this behavior - really useful for keeping the local file system in sync with the servers.   

But, if you have deleted a file locally (using Windows Explorer for example) then do a "Get Latest" the file is not downloaded - because the server thinks you already have it.  You can easily download the file by going to "Get Specific Version..." and selecting the "Force get" option - which will download all files, regardless of if the server things you have them or not. 

The question I was asked was how to tell the server you have removed the file from your system, without deleting it from the server.  In the end, it took me a while to figure out the answer (and the help of [Buck Hodges](http://blogs.msdn.com/buckh/)) 

The answer is, if you do a "Get Specific Version..." on the files, and select [Changeset](http://msdn2.microsoft.com/en-us/library/ms181408(VS.80).aspx) 1, the files will be deleted locally and the server will know this.  The color of the file in the Source Control explorer will go from black to gray and will have the phrase "Not downloaded" in the latest column. 

[Changeset](http://msdn2.microsoft.com/en-us/library/ms181408(VS.80).aspx) 1 is a special [changeset](http://msdn2.microsoft.com/en-us/library/ms181408(VS.80).aspx) on your Team Foundation Server instance.  It was created as part of the setup routine and only contains one thing - the root node ($/) in your source control tree.  If you do a get for [changeset](http://msdn2.microsoft.com/en-us/library/ms181408(VS.80).aspx) 1 on any actual files then they will not exist at that point in time on the system so will be deleted locally and the server will know this. 

Anyway, I thought this worthy of a TFS Tip post.  Not only because it highlights how to do something that is non-obvious, but also because once you understand how it works, you will understand a large part of what you need to know about Team Foundation Server Source Control.