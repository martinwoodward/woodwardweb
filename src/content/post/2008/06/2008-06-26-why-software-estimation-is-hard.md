---
title: "Why Software Estimation is Hard"
date: 2008-06-26T14:46:55.000Z
# post thumb
images:
  - "/images/post/2008-why-software-estimation-is-hard.jpg"
#author
author: "Martin Woodward"
# description
description: "Software estimation is challenging due to unpredictable complexities, similar to the varying difficulty of Sudoku puzzles."
# Taxonomies
categories: ["technology", "gadgets", "web", "programming", "podcast"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Over the years, I have tried many different approaches to software estimation.  From the Ceiling and Weller method (look up to the ceiling, scratch your chin and say "Well-errr"), FITA analysis (Finger In The Air) through various variations (both formal and informal) of metric based estimation techniques to things like IFPUG etc.  

Today, I had something happen that reminded me why software estimation is so hard. I've just wasted about 8 hours trying to figure out an issue with what I thought was some bizarre firewall problem with Windows Vista SP1 x64 when it turns out that some code that **I wrote** was actually working correctly and was picking up a HTTP proxy preference that was pointing to a server that no longer exists.  I'd just forgotten I'd fixed this bug, and that I had the proxy set in my preferences.  

I took two lessons from this frustrating day.     We need a better error message when your proxy is no-longer available    Software estimation is hard   

In discussions with my wife she frequently struggles when some nights I finish work complaining that I am 3 days behind and the very next afternoon I can be caught up or even a little ahead.  

The best way I have come up with to explain this, is to get her to imagine that I had given her 60 Suduko puzzles all rated as 10 minute puzzles.  Should take you 10 hours right?  Now see how long it takes you to do each puzzle.  

 [Suduko](http://en.wikipedia.org/wiki/Suduko) is the closest analogy to computer programming that I can find for "normals" - i.e. people that don't code.  This only really works if the person does Suduko puzzles, but my wife does so it works in our house.  Suduko is a numeric analytical problem solving activity.  While there are tricks and techniques to solving some puzzles, there is a significant challenge and difference to each one. Looking at the puzzle, it is hard to know if it is going to be hard or easy.  You can get stuck down blind alleys and have to start all over. Also when you "get into the zone" you can often make surprising intuitive leaps that often defy verbal explanation afterwards. Finally, solving a hard Suduko puzzle quickly involves a fair degree of luck and depends on your state of mind at the time of trying the puzzle.  There is a great amount of satisfaction to be gained from solving a Suduko puzzle along with a high degree of frustration when you cannot solve one - you know that it must be possible after all.  

So.  Each task (solving a Suduko puzzle) should take about 10 minutes, with-in a certain error range.  In software estimation a really good developer doing a well known and well defined task can only hope to get their estimate to around 25% accuracy (a "hard estimate") - and then there are always the odd random occurrences that throw you way off.  

I've been in interviews where the candidate swears blind that they always finish a task on time.  This tells me two things about that candidate:     They are a liar    They either never estimate how long something is going to take up-front or they over-subscribe to the [Scotty](http://en.wikipedia.org/wiki/Montgomery_Scott) principle of estimation. (Or as Microsoft are fond of saying, under promise - over deliver)   

Does this mean that we should give up on estimation?  Of course not.  Planning a project is going to be pretty hard if you have no idea of roughly when you are going to be finished, what the end result is going to do or how much it is going to cost.  Not to forget that when estimating a large number of tasks you can rely on the fact that some of the work you finish early will offset the work that takes longer than expected.  However, understanding the nature of software development and how it differs from, say, laying bricks, helps you be more likely to succeed.  

The problems inherent in software estimation also help me to understand why Agile software development methodologies work.       You are forced to **break problems down into small bits** that can be managed, tracked and measured.    **Small iterations** means that you can only get so far behind.    You **re-estimate and re-prioritise work at each iteration** when a hard estimate on that task is possible (and therefore your estimates are more likely to succeed)    **You frequently listen **to the person who will be** using the software**    You can load your iterations so that there is always work to do of the correct priority to the customer when you have finished a task early and things of the appropriate priority that you can drop off the list when something takes longer   

There are also many other techniques that people can adopt from Agile methodologies or just from common sense to reduce the amount of time taken when a task is taking longer than expected, such as     **Limit distractions.** You need time to concentrate on a single problem otherwise you will never finish it.    **Pair programming**. Identify when a second pair of eyes is needed and quickly as for help in your team (can be hard when your team are distributed across multiple time-zones)    **Daily progress meetings**. The guy that has been stuck for 24 hours on what he thinks is a firewall issue is quickly identified)    **Lack of ego**.  I'm the "Windows guy" in our company, if I say something is a firewall issue with Windows Vista SP1 x64 and a probably collision with the new Eclipse 3.4 launcher executable - then the new intern who only knows about the Mac he used at college should feel like he can ask a "dumb" question and say "Have you checked your proxy settings after that bug you were fixing yesterday".   

Anyway.  All common sense stuff and writing this post has been a nice way to get rid of the frustration of finding why I was stupidly stuck for the past day.  Now to stop distracting myself further and get on with some more work :-)