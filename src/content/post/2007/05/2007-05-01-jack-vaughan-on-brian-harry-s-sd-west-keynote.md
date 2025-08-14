---
title: "Jack Vaughan on Brian Harry's SD West Keynote"
date: 2007-05-01T12:09:03.000Z
# post thumb
images:
  - "/images/post/2007/05/2007-jack-vaughan-on-brian-harry.jpg"
#author
author: "Martin Woodward"
# description
description: "Jack Vaughan shares insights from Brian Harry's keynote, highlighting a 10X data optimisation improvement and the importance of disk-level."
# Taxonomies
categories: ["tfs", "technology", "books", "dotnet", "maker", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
I wasn't at SD West this year, however I'd heard that [Brian Harry](http://blogs.msdn.com/bharry/default.aspx) was going to be doing an interesting keynote.  [Jack Vaughan has recently published some of his "take-aways" from Brian's presentation](http://www.theserverside.net/news/thread.tss?thread_id=45195) and it certainly looks like there was some good stuff in it.  My favorite quote is:-  

“In version 1.0, I took all my paths and sorted them. Unfortunately, if I was to access all of the files in a folder, I end up seeking dramatically more because of interleaving in all of the subtrees. We went back to looking at what order we want the data to be on the disk to give us a geometric pattern as to how to optimize the data on the platter. When I look across all of the operations, the one change resulted in a 10X improvement. Sometimes you have to drop the relational model and look at what is happening at the disk level.” 

Now, here at Teamprise we have to worry about some low level stuff from time to time, but it's because of quotes like that, that I enjoy working with the TFS Team.  Not that I even particularly understand what Brian is referring to here, I just get confidence that the team are worrying about stuff that I don't want to.  It also takes me back to my time as a [PL/1](http://en.wikipedia.org/wiki/PL/I) developer when to even compile a bit of code you had to have a decent understanding of the [IBM 3390 disk geometry](http://sdisw.com/vm/dasd_capacity.html) to be able to write the [JCL](http://en.wikipedia.org/wiki/Job_Control_Language) to compile your bit of code... 

Because of my job, I have the pleasure of talking with many of the people behind TFS, and everytime I do it always inspires me with confidence.  I am also very grateful that Microsoft are dogfooding TFS.  Looking at our own dogfood server (i.e. the one that we use to manage the Teamprise development - not one of the ones we use as a test TFS instance) we have 146,016 local versions currently and we have one main Team Project called, unsuprisingly "Teamprise".  Contrast that with Microsoft's DevDiv dogfood server who [currently](http://blogs.msdn.com/bharry/archive/2007/04/18/april-devdiv-dogfood-statistics.aspx) have over 500,000,000 rows in their local versions table and over 300 Team Projects. 

Anyway, [at the time Brian promised to blog the contents of his talk](http://blogs.msdn.com/bharry/archive/2007/03/23/sd-west-and-the-jolt-awards.aspx), and I hope he does that.  It sounds like there was a lot of useful data-points and stuff that would be good to be able to think over for a while.