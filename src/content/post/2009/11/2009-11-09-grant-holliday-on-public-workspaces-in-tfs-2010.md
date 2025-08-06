---
title: "Grant Holliday on Public Workspaces in TFS 2010"
date: 2009-11-09T06:49:14.000Z
# post thumb
images:
  - "/images/post/2009-grant-holliday-on-public-workspaces-in-tfs-2010.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["tfs", "technology", "maker", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

[Grant Holliday](http://blogs.msdn.com/granth/) has an excellent post up on the new [public workspaces feature in TFS 2010](http://blogs.msdn.com/granth/archive/2009/11/08/tfs2010-public-workspaces.aspx), why it was created and how to use it. I’ve spoken with a number of Teamprise customers who will benefit from this feature when we add workspace permissions to the cross-platform client as it seems fairly common to share access to a unix based build server.

The Public Workspaces feature removes this limitation of one user per workspace and allows multiple users to use the same workspace mappings on a single machine. Unlocked workspaces are sometimes also referred to as "Shared workspaces", as they can be shared among multiple people.

[Grant Holliday – TFS2010 Public Workspaces](http://blogs.msdn.com/granth/archive/2009/11/08/tfs2010-public-workspaces.aspx)

It is going to be interesting to me to see how people use this functionality in the real world. There is certainly a potential for some anti-patterns when (mis) using the feature – however the fact that you have to explicitly make a workspace a public workspace should help a lot.
