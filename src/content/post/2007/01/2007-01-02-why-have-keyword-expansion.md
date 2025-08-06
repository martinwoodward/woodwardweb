---
title: "Why have Keyword Expansion?"
date: 2007-01-02T16:49:38.000Z
# post thumb
images:
  - "/images/post/2007-why-have-keyword-expansion.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["tfs", "technology", "books", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Every source control system I have worked with until recently supported keyword expansion.  My code comment blocks have always tended to be something like (in Java):-

/**
 * Description.
 * @author $Author: martin $
 * @version $Revision: 12 $ $Date: 2007-01-02 16:15 $ 
 */

The source control system updates the block in-between the $tag: $ on check-in and that's just how it works.  Over time, I standardized on author, version, date because that is what was common between all the major SCM tool vendors and things like the history tag just got in the way.  Keyword expansion did have it's downsides thought, the main one is that it always gave you problems when diffing and merging files and had the habit of giving you un-necessary conflicts to resolve.

I say that every source control system "until recently" supported keyword expansion.  Over the past couple of years there has been a notable exception - the version control provided by Team Foundation Server does not have this capability.  I found this very surprising at first - just because I expected to have them at my disposal, I never stopped to ask why I wanted them.

The reason why I used to want them was because I used to review code by printing it out on candy stripe paper and taking it along to a code review meeting.  Also, my source control tool was always a separate (frequently hard to use) application that meant me swapping tools and then finding the file I was working on in that separate application when all I wanted to know was to who to talk to about the line of code I was looking at.  I'll admit that was in the days when I did all my coding in [PL/I](http://en.wikipedia.org/wiki/Pl/1) with the odd sprinkle of [JCL](http://en.wikipedia.org/wiki/JCL) - but still.  It was awfully handy for the source control system to help you keep your comment blocks up to date, to tell you who was the last person who touched the code, therefore the first person you spoke to if your suspected the code was broke.

Now-a-days, it is rare that a single person "owns" a file.  If they do, you get a much better idea of what has happened by looking at the history.  As all this is nicely integrated inside the IDE, checking the history is a matter of right-clicking on the file in the IDE and selecting "History", I don't have to jump tools, re-navigate to find files etc.  With diff between versions and annotate functionality I can easily see who did what and when, what other changes they made at the same time and what work items they linked all this stuff too.  Maybe keyword expansion was just a solution for a problem I no longer have (except possibly when dealing with Stored Procedures, but IDE integration has [come a long way there recently](http://msdn2.microsoft.com/en-us/teamsystem/aa718764.aspx)).

Yet I still miss it.  Does anyone out there have a reason why they *need* keyword substitution as part of their software development process, or is it just one of those things that you've always done that has long lost the value?