---
title: "TFS Top Tip #10 - Keep Your Shelves Tidy"
date: 2006-10-05T11:03:00.000Z
# post thumb
images:
  - "/images/post/post-1.jpg"
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

Team Foundation Server source control has a great feature called Shelving.  Shelving lets you set store a batch of pending changes onto the server and optionally remove them from your local workspace.  It comes in really handy for the times when you want to backup your code and store it on the server but don't want to commit it to source control.  I also sometimes use it when I would like a remote colleague to take a look at some code I have written before I commit it into the code base.  For more information about Shelving, see the [MSDN documentation](http://msdn2.microsoft.com/en-us/library/ms181403.aspx).  A Shelveset is identified by developer and the name the developer gave it when shelving. 

One of the features of shelving (and how it differs from working in a private developer branch) is that a Shelveset is in itself not versioned.  If the same developer saves a Shelveset with the same name, then it will overwrite the previous Shelveset.  This comes in really handy when you have a Shelveset that you commonly use for one thing - for example, I have a Shelveset that I normally call "Work In Progress" (actually, I normally call it "wip" because I am lazy when it comes to typing, but you get the idea).  If I need to stop work, but I haven't been able to get to a point where I can check-in the code, then I shelve the pending changes and call the Shelveset "Work In Progress".  That way, I only have one of these and I know the purpose of it. 

However, most of the time when you shelve, it is a temporary thing.  You create a Shelveset and then you unshelve it - and then you no longer want it.  The old shelvesets will sit on your shelf gathering dust until you tidy them up by deleting them.  The unshelve dialog has a "Delete" button that you can use to delete a particular shelveset. 

Additionally, if you press "Details", then you get to see more information about the shelveset in question - but you also get a couple of other options controlling the behavior that occurs while the unshelve is being performed:- 

If you un-check the "Preserve shelveset on server" check-box then your shelveset will be automatically deleted after you successfully unshelve it - which is a quite handy (if slightly hidden) feature. 

It's good practice to delete the shelvesets when you no longer need them.  Not only will it get rid of clutter for you, it will also help when another person is trying to unshelve something that you have placed there for them.