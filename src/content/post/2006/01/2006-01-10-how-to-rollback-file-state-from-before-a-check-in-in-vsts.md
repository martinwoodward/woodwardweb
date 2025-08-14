---
title: "How to rollback file state from before a check-in in VSTS"
date: 2006-01-10T14:32:41.000Z
# post thumb
images:
  - "/images/post/2006/01/2006-how-to-rollback-file-state-from-before-a-check-in-in-vsts.jpg"
#author
author: "Martin Woodward"
# description
description: "Learn to easily rollback file states in VSTS by using the Get Specific Version feature to revert to any changeset seamlessly."
# Taxonomies
categories: ["git", "tfs", "technology", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
It's probably obvious this one, but it took me a minute to figure it out.  In VSTS source control, file version numbers do not go 1,2,3,4.. but they are versioned by the changeset number that the change was in.  For example, I am currently looking at a file in my repository that has the following versions in its history:-

539, 538, 493, 451, 386, 4.

At first that is a little wired, but you get used to it.  A changeset in VSTS is the transaction under which a commit to the source repository occurs.  It can contain edits to files, renames (what everyone apart from Microsoft usually calls move), add, deletes, etc.  Once you realise that all your check-ins to the source control are done in one atomic unit you start to understand how different VSTS source control is from VSS...  (You also realise that there really is no excuse anymore for breaking the build in a CI environment)

Anyway, Somewhere during changeset 538 I did something to one of the 6 files that I modified that broke what I thought I was fixing in a non-obvious way (by non-obvious I mean we don't have a unit tests that covers it - yet).  I want to restore the state of my source tree to before changeset 538, then go through my changes one by one to figure out which one is at fault.

I simply did a "Get Specific Version" and entered the changeset before the one I wanted (i.e. 537).  I could have also entered the date and time this morning that I last synced my code repository if I wanted to get rid of all my mornings work.

Simple I know, but it's nice when something is easy...