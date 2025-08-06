---
title: "The Missing Merge Context Menu"
date: 2006-08-30T22:40:33.000Z
# post thumb
images:
  - "/images/post/2006-the-missing-merge-context-menu.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["git", "tfs", "technology", "books", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
[](http://www.woodwardweb.com/WindowsLiveWriter/TheMissingMergeContextMenu_13EDC/merge_options3.png) I'm currently busy with the merge functionality in Teamprise Version 2.  At the same time I've been working off in a bridging branch while some major refactoring / performance improvement work was happening in the main development trunk so it turns out that the pains and pitfalls of merging are fresh in my mind as I work on the functionality. 

Anyway, when merging I like to select the changeset range so that I know exactly what I am trying to merge.  This "cherry-picking" of changesets to merge in TFS is a neat feature.  One thing that was really annoying me was the inabilty to see the contents of a changeset while in the merge wizard page.  Therefore I've just added a context menu so that you can see changeset details (and also copy information about the selected changesets into the clipboard in case you need them to keep notes or send an email or something).  Strangely enough there is no context menu in the Visual Studio version of this wizard page so I thought I'd mention it here in case any of the VSTS team are reading but also to let any Teamprise users know to look for it when it turns up in the next V2 preview release.