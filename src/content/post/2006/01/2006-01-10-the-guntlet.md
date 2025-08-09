---
title: "The Guntlet"
date: 2006-01-10T18:19:16.000Z
# post thumb
images:
  - "/images/post/2006-the-guntlet.jpg"
#author
author: "Martin Woodward"
# description
description: "Explore Buck Hodges' insights on Microsoft's Gauntlet system for managing shelvesets in VSTS Source Control, balancing benefits against complexities."
# Taxonomies
categories: ["git", "tfs", "technology", "dotnet", "maker", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
[Buck Hodges](http://blogs.msdn.com/buckh/) recently posted about a [problem with locks based on files types and shelving in VSTS Source Control](http://blogs.msdn.com/buckh/archive/2006/01/10/511188.aspx).  In the post he mentions a system called Gauntlet that is used internally in some teams at Microsoft.

The Gauntlet system is very interesting to me.  I've never seen it in action and have only had snippets of conversations with Microsoft people (and I have to say mostly it is them [moaning about it](http://blogs.msdn.com/hippietim/archive/2005/02/07/368705.aspx)).  

From Buck's article, Gauntlet runs by processing a queue of shelvesets.  (A Shelveset is a great new feature in VSTS Source Control where you can save your code on the server but outside of the main source tree - you can think of it a bit like a temporary working branch - but see Chris Rathjen's post [Is Shelving just a fancy word for branching?](http://blogs.msdn.com/crathjen/archive/2005/04/06/405909.aspx) for more)

Anyway, each shelveset is processed, and providing the code does not break the build (i.e. compiles, passed static code analysis and unit tests) then it is added to the main source tree.

To me, this is Continuous Integration by another name.  Many people are using CruiseControl (and CruiseControl.NET) to acheive the same benefits but the Gauntlet has some additional benefits:-

The code is not committed to the main branch until it is proven by the server that it will not break the build.Main branch build and labels can be reserved for "integration builds" or releases - that way you can very easily provide the users of that build with a list of differences between the builds

The downsides seems to be:-

More complicated development process, slowing down developmentIncreased time before a code change appears in the main branchComplicated process discourages small incremental checkin-insWhen you submit your change, there may be a queue of changes being processed and one of those might break your code, no easy way of preventing thisSimilarly, if you are relying on a change that then doesn't get passed the Gauntlet then odds are additional queued changes by you will also fail

Using an open source toolset, an equivalent process could be done by using patch files.  It would be pretty painful with today's toolsets but could be simplified.

Like everything, you have to have a process that meets the needs of your organisation.  Development is always a matter of control vs speed of delivery.  Personally, I think CI in the traditional sense with CruiseControl strikes a nice balance in most organisations.

But if anyone in Microsoft land fancies describing Gauntlet in a but more detail and perhaps a quick pros / cons of using a similar process versus CI with CruiseControl (or MSBuild for that matter) I for one would love to read it.