---
title: "Upgrading TFS RC to RTM"
date: 2006-03-16T11:38:15.000Z
# post thumb
images:
  - "/images/post/2006-upgrading-tfs-rc-to-rtm.jpg"
#author
author: "Martin Woodward"
# description
description: "Learn how to upgrade from TFS RC to RTM while safeguarding custom data and modifying Agile process templates."
# Taxonomies
categories: ["tfs", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

Well, the impending release of Team Foundation Server looks to be days away. The User Education team have posted the [upgrade instructions](http://blogs.msdn.com/vstsue/archive/2006/03/15/552130.aspx). I'll post back to let folks know how we get on when we do the upgrade.

Like many people we have customized the base MSF Agile process to add some fields that we need (for example, customer contact details on the Bug work item type), so we'll be saving those types out and re-modifying the template later. The question I currently have is what will happen to the data that is currently in these fields in the RC version. I'll soon find out, but I'll be taking a dump of the data into an Excel spreadsheet before I upgrade so I can get the data back easily should it dissapear (which is what I expect to happen, but am prepared to be plesently suprised).
