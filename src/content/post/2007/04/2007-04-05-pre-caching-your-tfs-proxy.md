---
title: "Pre-caching your TFS Proxy"
date: 2007-04-05T11:21:38.000Z
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

The Team Foundation Server Version Control Proxy is a wonderful thing - despite the not so catchy name.  It sits between a remote office and your Team Foundation Server Application Tier and caches requests for file downloads from that remote office so that the second person to request that version of that file will get it from the local network and not have to download it over a slow WAN link again.  This is great - helps to make sure that the files cached locally are the files wanted locally and generally makes the proxy self-managing, but the only problem here is that the first person to download that file always takes the hit to download it. 

In my office, I'm usually the first person to make that download so I wanted a way of pre-caching data.  There are a few approaches to doing this, most of which would be cleverer than this one - however what follows is a simple way that simply uses the command line client tf.exe to do most of the work for you (meaning in some companies you will be more likely to get this approach past your IT security folks that manage the production server your TFS Proxy server is running on). 

1)  On the TFS Version Control Proxy, install the Team Explorer Client.  This will also install the TFS command line client (tf.exe) - that is the bit we need here. 

2) Create a directory to act as a temporary dumping ground.  In my case this is d:\tempget 

3) In a command shell, cd to d:\tempget and then create a TFS workspace and working folder mappings to the parts of the code that you would like to pre-cache.  Something like the following would do: C:\tempget> tf workspace /new /server:http://myserver:8080 /login:DOMAIN\myuser,password /noprompt proxycache tf C:\tempget> workfold /server:http://myserver:8080 /login:DOMAIN\myuser,password /workspace:proxycache /map $/MyTeamProject/AreaToGet 

If you wanted, you could be more creating with your working folder mappings to give a very fined grained approach to what you want to pre-cache. 

4) Write a script to perform call tf.exe and perform a get latest.  The trick here comes in the form of an undocumented environment variable TFSPROXY that I've mentioned previously.  Below is an example of the file I created for this purpose saved as proxysync.cmd 

   1 @echo off 
  2 setlocal 
  3 set TFSPROXY=http://localhost:8081 
  4 echo Forcing Pre-cache of files using TFS VC proxy at %TFSPROXY% 
  5 cd d:\tempget 
  6 "%PROGRAMFILES%\Microsoft Visual Studio 8\Common7\IDE\TF.exe" get 
  7 del /F /S /Q d:\tempget\*.* 
  8 echo Pre-cache complete. 
  9 endlocal 

Note that if your sync script will actually be performing several get's then it would make sense to put these into a command file and use the much overlooked "[tf @](http://msdn2.microsoft.com/en-us/library/1az5ay5c(vs.80).aspx)" syntax. 

3) Set up a scheduled task to run the script periodically.  I have mine set to run during working hours - there is little point in doing it when no-one will be in the office to take advantage of the pre-cached data.  I actually have the first download of the day to start a little earlier than normal working hours to ensure that the nights changes have all been downloaded before I start work. 

There you go.  Very low tech, and no where near as fancy as doing something like subscribing to TFS Check-in events etc - but I was able to get it up and running in less time than it has taken me to write the blog post about it.