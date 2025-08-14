---
title: "TFS Power Toys"
date: 2006-09-08T11:05:40.000Z
# post thumb
images:
  - "/images/post/2006/09/2006-tfs-power-toys.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover the new TFS Power Toys from Microsoft, featuring seamless IDE integration and XML output for enhanced Agile development."
# Taxonomies
categories: ["tfs", "technology", "gadgets", "teamprise", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
[Brian Harry](http://blogs.msdn.com/bharry/) has been on a blogging spree this week!.  Last night he [announced some new Team Foundation Server Power Toys](http://blogs.msdn.com/bharry/archive/2006/09/07/744993.aspx).  This also shows a new and very welcome trend from Microsoft's DevDiv - the Power Toys are available as a [separate download](http://go.microsoft.com/?linkid=5431080), but more interestingly many of them also integrate seamlessly into the IDE.  This is a great way of providing new features to customers in a much more Agile fashion.  It is fantastic to see a large company like Microsoft being able to move in a more nimble way and not have to wait for that big release train to come along. 

There are many interesting things in the Power Toys and the supplied word documentation is also pretty good.  There are a new set of commands for manipulating work items from the command line (a bit like the "wit" command in Teamprise) - however Microsoft have implemented a feature which we had discussed internally but not got around to yet, which is output as XML.  Anyone that has tried to write some sort of shim over the existing tf.exe commands will know how hard that is - output as XML gives a very easy way of making the command line computer readable. 

If all that was not enough - Brian has also announced that support is now available for the MSSCCI provider.  This is also very welcome news for adoption of Team Foundation Server.  Visual Studio Team System will handle IDE integration for VS 2005 and up, the MSSCCI provider will all the older Visual Studio products you are likely to come across in an enterprise and of course [Teamprise](http://www.teamprise.com) can enable your Java or Embedded developers and the folks running Mac, Linux or other flavors of Unix.  This means that an organization can migrate all its development efforts into Team Foundation Server.