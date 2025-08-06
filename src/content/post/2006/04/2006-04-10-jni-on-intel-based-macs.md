---
title: "JNI on Intel Based Macs"
date: 2006-04-10T15:18:09.000Z
# post thumb
images:
  - "/images/post/2006-jni-on-intel-based-macs.jpg"
#author
author: "Martin Woodward"
# description
description: "The day that Intel Macs first started shipping I walked into an Apple store, downloaded Teamprise and tried to run it to see if it would work."
# Taxonomies
categories: ["tfs", "technology", "maker", "teamprise", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
The day that Intel Macs first started shipping I walked into an Apple store, downloaded [Teamprise](http://www.teamprise.com/) and tried to run it to see if it would work.  It didn’t.  I wasn’t that surprised, but I had kinda been hoping that the magic of Rosetta would just take over and automagically make it work.  But sadly Rosetta (while clever) isn’t that clever.

You see, although on most of the marketing material it says our client is 100% Java, that is not strictly true.  It should say 100% java rounded to the nearest percent – in terms of lines of code we are actually about 99.8% Java with a few small lines of JNI code to call a few (very isolated) native functions.  While we seriously did consider a marketing tagline of “nearly 100% java” or “99.8% Java”, however we felt that the message would just confuse things.

So – what are we doing in native code I hear you ask?  Well, one thing we are not doing is calling into the Microsoft client libraries for Team Foundation Server access – some days I wish we were as it would mean a lot less work getting the client to run on Windows.  However, when it comes to getting the client running everywhere else we would have been scuppered.  Nope, all our Team Foundation Client logic is java talking to the web services running on your Team Foundation Server, meaning that you only need to install our client and you are good to go.

We use native code in a couple of small places:-

“Advanced” File handling.  We need to set a read-only file read-write when it gets checked out and we have to work under a 1.4 version of the JRE.  While Java 1.4 it has a nice file.setReadOnly() method, there is not file.setReadOnly(false) or file.setReadWrite() method so we had to write our own.  This is the only real bit of functionality that was must-have for our client that required native code.
Terminal handling.  Calculating the number of columns and rows in a console terminal from within the command line client.  Had we not have already developed a JNI library for the read/write issue we probably wouldn’t have added one for this, but it makes the command line client environment a lot nicer.

So you see – including comments and blank lines in the source for our native c code we have less than 300 lines – less than 0.2 % or our code base at the time of writing.

Of course, our Teamprise Explorer Client uses SWT, which has a great deal of native code in it allowing Java applications to write nice looking and performant GUI’s cross-platform.  However, the only code we have written falls into one of the two categories above.

Anyway, there is an interesting article over at Apple Developer Connection discussing how to get your [JNI to compile as a universal binary](http://developer.apple.com/java/jniuniversal.html).  While our JNI code in our Mac version of the Eclipse Plugin and Command Line Client is compiled as a universal binary, we currently do not officially support the Mac on Intel platform as of version 1.0 – this is mainly due to the fact that the SWT code at the time we were developing was in the process of being ported to MacIntel.  

[Ed](http://www.edwardthomson.com/blog/), one of my fellow developers here at [Teamprise](http://www.teamprise.com/), has a [great article](http://www.edwardthomson.com/blog/2006/04/teamprise_on_intel_os_x.html) on the topic which explains our reasons for not supporting Intel based Macs as of V1.0.  It is something that we are working on and won’t be that way for long (in fact, as Ed mentions, if you contact us then we’ll send you an unsupported MacIntel build right now).  Personally, I’m looking forward to the day when I can take one machine into a demo and show our client running on Mac OS, Windows and Linux – but we’ll have to wait for better virtualization support for the new intel based Mac’s until that can happen.