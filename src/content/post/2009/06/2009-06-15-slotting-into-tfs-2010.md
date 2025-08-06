---
title: "Slotting into TFS 2010"
date: 2009-06-15T14:50:04.000Z
# post thumb
images:
  - "/images/post/2009-slotting-into-tfs-2010.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["git", "tfs", "technology", "maker", "web", "podcast", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

In TFS 2010 quite a few things have been fundamentally changed for the better, but from an end user point of view people hopefully won't notice. Things like hierarchical work items will very quickly because just how work items should work and people will scratch their heads when they go look at a TFS 2008 or TFS 2005 server and wondered how we ever got by.

However in version control, the changes have been even more subtle from the end user point of view but are actually huge under the covers. The biggest change by far in TFS 2010 is the move to Slot Mode version control from the current Item Mode. Version Control PM [Matt Mitrik](http://blogs.msdn.com/mitrik/) has a excellent post entitled "[Changing to Slot Mode in TFS 2010 Version Control](http://blogs.msdn.com/mitrik/archive/2009/05/28/changing-to-slot-mode-in-tfs-2010-version-control.aspx)" which I encourage you to take a look at.

_"In TFS 2010, one of the more significant changes that we made to our version control platform was how we identify items. Previously, version control operated in what we called "item mode" and in TFS 2010 it operates in "slot mode". To better understand the motivation and impact of these changes, and what "item mode" and "slot mode" actually mean, I've decided to provide some background and detail into the changes we've made."_

[Matt Mitrick - Changing to Slot Mode in TFS 2010 Version Control](http://blogs.msdn.com/mitrik/archive/2009/05/28/changing-to-slot-mode-in-tfs-2010-version-control.aspx)

Basically a really fundamental concept at the heart of TFS has been completely changed - but like hierarchical work items I anticipate most people will just look at it in the future and think that's how it should always have been. Hopefully merges will be a lot less complex but the simple things are preserved like the fact that TFS shows the history of a file from before a rename. Note that some of these changes have not arrived yet in the Beta 1 build that is currently publicly available so we'll have to wait until Beta 2 to see exactly how the end user experience pans out.

As well as simplifying the merge process the changes have also allowed for a big performance and scalability improvement on the server side. [Grant Holliday](http://blogs.msdn.com/granth/) talks about some of the benefits that Microsoft saw internally when he discusses the "Schema Change" in the [current episode of Radio TFS](http://www.radiotfs.com/2009/06/15/DogfoodingTFSWithGrantHolliday.aspx).
