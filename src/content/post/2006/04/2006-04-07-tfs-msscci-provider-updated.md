---
title: "TFS MSSCCI Provider Updated"
date: 2006-04-07T10:57:15.000Z
# post thumb
images:
  - "/images/post/2006/04/2006-tfs-msscci-provider-updated.jpg"
#author
author: "Martin Woodward"
# description
description: "The updated TFS MSSCCI Provider 1.0 enables broader access to Team Foundation Server from various IDEs, enhancing development workflows."
# Taxonomies
categories: ["tfs", "technology", "dotnet", "maker", "teamprise", "web", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
A lot of people were asking about this [when I was in Dublin](http://www.woodwardweb.com/vsts/000217.html).  [Brian Harry](http://blogs.msdn.com/bharry/default.aspx) has [announced](http://blogs.msdn.com/bharry/archive/2006/04/06/570305.aspx) the version 1.0 of the [TFS MSSCCI provider](http://www.microsoft.com/downloads/details.aspx?FamilyId=32202966-EF04-442F-8C5C-88BDF15F551C&displaylang=en) allowing you to access the power of Team Foundation Server from the following platforms (among others):-

Visual Studio .NET 2003
Visual Visual Basic 6 SP6 
Visual C++ 6 SP6 
SQL Server Management Studio

Don’t forget, that you can will need at least Team Explorer installed on your machine and you need to make sure your developers have a Team Foundation Server CAL, but for most folks this will allow them to adopt Team Foundation Server right away, and then can use more and more of the power of Visual Studio Team System as they do more projects in VS 2005.  You’ll still need Team Explorer and the Command Line Client (tf.exe) to do more powerful administrative tasks.  With this MSSCCI provider and with [Teamprise](http://www.teamprise.com/) you are now in a much better position for day-to-day development integrated in your IDE with Team Foundation Server than you are with most source control systems (even VSS).

The provider is not officially supported by Microsoft, however they will actively be working on it over the next few months.  See [Rob](http://blogs.msdn.com/robcaron/archive/2006/04/06/570317.aspx)’s or [Brian](http://blogs.msdn.com/bharry/archive/2006/04/06/570305.aspx)’s posts for more information.