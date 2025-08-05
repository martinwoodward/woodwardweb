---
title: "MSDN Webcast Follow-up"
date: 2006-06-22T17:32:40.000Z
# post thumb
images:
  - "/images/post/2006-msdn-webcast-follow-up.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["Technology"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

Thanks to the folks that dropped by the webcast early today.  Hopefully it was ok – I found it very weird talking to the sheep in the field outside my house while all you folks were “out there”.  Anyway, here are some links that I promised to people during the Q&A Session.  I’ll post a link to the session recording as soon as I have it.

[Team System Forums](http://forums.microsoft.com/MSDN/default.aspx?ForumGroupID=5&SiteID=1) – The place to ask questions of people much cleverer than me (including many of the VSTS team).  I also hang around on here and it the best place to ask a team system related question and get it answered.
[Force comment on Check-in](http://www.woodwardweb.com/vsts/000194.html) – Sadly this is not one of the policies that are shipped in the box with TFS, but you can add it yourself.  See [this blog post](http://www.woodwardweb.com/vsts/000194.html) I did on the topic for some links and sample code ([James Manning](http://blogs.msdn.com/jmanning/)’s blog is worth subscribing to if this topic interests you).
Seeing who has what checked out etc – The pending changes view is great for seeing what you are up to, but when you are trying to see what other members of the team are up to it is a little more difficult.  If you are going to be doing anything like this with your version control repository I’m afraid you need to get familiar with the command line tool “tf.exe”.  The documentation for this is super and is available [here](http://msdn2.microsoft.com/en-us/library/cc31bk2e(en-us,vs.80).aspx).  It is also worth looking at the [Version Control Sidekicks](http://www.attrice.info/cm/tfs/index.htm) from [Attrice software](http://www.attrice.info/index.htm) which are very helpful GUI tools to do some of these common tasks.  
Team Build and CI – This is not a feature “in the box”, but has to be one of the most common requests I have heard.  You can put together a piece of software that does this for you (see [this example](http://blogs.msdn.com/buckh/archive/2005/09/19/471347.aspx) from Buck Hodges).  You can also use [CruiseControl.NET](http://ccnet.thoughtworks.com/) with the [VSTS Source Control Block](http://confluence.public.thoughtworks.org/x/zRE).  Additionally – here is an [MSDN White Paper](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnvs05/html/ConIntTmFndBld.asp) on the topic.

I have a couple more questions that I am figuring out the answers to – results will be posted here soon so stay tuned.  If you think I’ve forgotten your question then leave it as a comment and I’ll make sure I do answer you.