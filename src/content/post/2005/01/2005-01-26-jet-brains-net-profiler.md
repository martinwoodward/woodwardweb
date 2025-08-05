---
title: "Jet Brains .NET Profiler"
date: 2005-01-26T12:29:57.000Z
# post thumb
images:
  - "/images/post/post-1.jpg"
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

[Jet Brains](http://www.jetbrains.com) have just announced the opening of the EAP for their new [.NET Profiler](http://www.jetbrains.net/confluence/display/NetProf/Home), available for [download](http://www.jetbrains.net/confluence/display/NetProf/Download).  [Resharper](http://www.jetbrains.com/resharper) by Jet Brains and of course [IntelliJ](http://www.jetbrains.com/idea) are excellent tools, however the future of Resharper and now the [.NET Profiler](http://www.jetbrains.net/confluence/display/NetProf/Home) are by no means certain, with Microsoft adopting many of Jetbrain's excellent features in [Visual Studio 2005](http://lab.msdn.microsoft.com/vs2005/).

From what I have seen on [Visual Studio 2005](http://lab.msdn.microsoft.com/vs2005/) it is a much better IDE than VS 2003 is, but still a little behind the usability that IntelliJ brought to the Java IDE market.  It wil be interesting to see if development of Resharper for VS 2005 can bring anything that makes people who have not allready invested $99 in the product part with their cash.  At the moment, Resharper in VS 2003 still makes me smile every time I use it - and I really miss it when I am working from a computer that doesn't have Resharper installed.

I took a look at build 100 of the [.NET Profiler](http://www.jetbrains.net/confluence/display/NetProf/Home) and in seems to work for exe file profiling.  I managed to sucessfully profile my unit tests by invoking nunit-console.exe passing in the unit test dll as a command line parameter.    The ASP.NET profilier just didn't seem to want to work in this build - which is a real shame.  I am currently doing a lot of server side stuff and being able to profile my web service of remoting application while is was being driven by my [nunit](http://www.nunit.org/) tests would be fanstatsic.

The output of the profiler is fairly easy to read.  I've used Java profilers in the past (such as [JProbe](http://www.quest.com/jprobe/index.asp)) but never was actually able to understand what it was telling me (this probably says more about me than the product as I know people who use it all the time and swear by it).  10 minutes with the .NET Profiler has made me realise that the Microsoft XML Serialisation / Deserialisation is pretty slow and so will make me code around this in the future to avoid calls to this when I don't have to.

I will continue to try out the [.NET Profiler](http://www.jetbrains.net/confluence/display/NetProf/Home) and see how it goes.  My only worry is that code profiling is supposed to be one of the new features in [MS Visual Studio Team System](http://lab.msdn.microsoft.com/vs2005/teamsystem/).  Will Jetbrains compliment or compete against the Microsoft tool?