---
title: "Last Check-in Date Explained"
date: 2008-06-05T15:51:20.000Z
# post thumb
images:
  - "/images/post/2008/06/2008-last-check-in-date-explained.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover how the Last Check-in column in TFS 2008 SP1 enhances source control management, along with essential usage tips."
# Taxonomies
categories: ["tfs", "teamprise", "web", "podcast"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
I've been doing a lot of work with the Team Foundation Server 2008 SP1 Preview, and even recorded a [podcast about it](http://www.radiotfs.com/2008/06/03/RadioTFS06TeamFoundationServer2008SP1.aspx) (also see [Brian Harry's](http://blogs.msdn.com/bharry/default.aspx) [blog post for more details on TFS 2008 SP1 features](http://blogs.msdn.com/bharry/archive/2008/04/28/team-foundation-server-2008-sp1.aspx)).  

One out of the many new features introduced in TFS 2008 SP1 is the "Last Check-in" column in the source control explorer. It is a handy little thing that I think a lot of people will find useful.    

However just a couple of warnings for you for behaviour that you might not expect at first.     The date shown for folders is the date that the folder was added, **not** the last date that any contents of that folder where checked in.  That means you cannot use it to drill down onto the most recently changes files - to find that out you should still do a "View History" on the parent folder and look at the changesets.     If you are using a Visual Studio 2008 SP1 client (or Teamprise 3.1 for that matter when it is released) and you point it at a server prior to TFS 2008 SP1 (i.e. TFS 2005 or the RTM release of TFS 2008) then you do not get any data in this column because the server doesn't send back that data to the client.    

Otherwise it works pretty much as you expect.  Most useful is that you can obviously sort the column to find the recently changed files in a big list of files.