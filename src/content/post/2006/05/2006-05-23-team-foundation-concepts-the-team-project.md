---
title: "Team Foundation Concepts:  The Team Project"
date: 2006-05-23T16:27:21.000Z
# post thumb
images:
  - "/images/post/2006-team-foundation-concepts-the-team-project.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["tfs", "technology", "dotnet", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Recently I was putting together some slides for a talk and I was trying to put together a short sentence regarding the definition of each.  The one that gave me most problems was that of the Team Project.  [Clark Sell recently posted](http://csell.net/PermaLink,guid,a47d4174-1fb7-4d6e-8d7c-d17f3645ec47.aspx) a link to the [official guidance on MSDN](http://msdn2.microsoft.com/en-us/library/ms181234(VS.80).aspx).  As you can see it is hard to sum up.  The following things should be considered when deciding how to split your work into Team Projects.

By default, a team project has a portal site created, a reporting site and a root level node in source control (however this can be customised)
By default, a basic set of security groups and permissions are created for each Team Project Role.
You can have multiple solutions, C#, VB or even Java projects stored under one team project.
Each team project can have it’s own work item types and processes.
It is hard to move work items between projects (but fairly easy to link between work items in different projects)
The out the box reports and work item queries are scoped to a Team Project level

As [Clark says](http://csell.net/PermaLink,guid,a47d4174-1fb7-4d6e-8d7c-d17f3645ec47.aspx), figuring out your split of Team Projects depends very much on your circumstances but it helps to do some analysis up front to take a best guess.  In large organisations you should also think carefully about the split of Team Projects between instances of Team Foundation Server if you have more than one.

If you are interested, the best one sentence definition I could give was “A collection of work items, code, tests, work products, metrics, etc that is used by a defined team to track a common set of related work.” – and that was after a lot help from [Rob Caron](http://blogs.msdn.com/robcaron/).  I ended up putting the words up on the slide and then spending 5 minutes explaining it, looking back I should have probably used a picture.