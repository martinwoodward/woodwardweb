---
title: "\"You are not running Vista\" Remote Desktop warning annoyance"
date: 2007-03-28T10:41:38.000Z
# post thumb
images:
  - "/images/post/2007-.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["technology", "dotnet", "maker", "teamprise", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
[](http://www.woodwardweb.com/WindowsLiveWriter/YouarenotrunningVistaRemoteDesktopwarnin_9654/Remote%20Desktop%20Connection%5B5%5D.png) When running Remote Desktop from Windows Vista I've been getting the following error popping up everytime I connect.  It is a little alarming and I've never really sat down and figured out what this was telling me - basically I translated this to mean "Vista has a new, more secure Remote Desktop client, you are talking to an older version of the server - is this ok?".  I've been meaning to figure out how to make this dialog go away for a while and was just assuming I was dumb.  However a couple of few weeks ago I had the pleasure of attending the MVP Summit and every single Microsoft employee that used remote desktop to talk to his or her machine somewhere else on campus also got this dialog pop up - so I figured that I wasn't being that dumb after all - or maybe just as dumb as everyone else, which considering the company I was keeping at the time I would take as a compliment. 

It took me a while to figure out how to get rid of the dialog when connecting to a known older version of the remote desktop server.  When doing the connection, click on the "Options >>" button and then the "Advanced" tab.  In the "Server Authentication" section, change the authentication option to "Always connect, even if authentication fails". 

Then, after a bit of digging around I found this [great post](http://weblogs.asp.net/owscott/archive/2006/11/10/Vista_2700_s-Remote-Desktop-Prompt.aspx) from [Scott Forsyth](http://weblogs.asp.net/owscott/) who points out that there is a registry key you can also use to control this behavior, add a DWORD value called AuthenticationLevelOverride to HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Terminal Server Client and set it to 0.  You will no longer get prompted and the Server Authentication option in the advanced tab will be grayed out.  Obviously that reduces the security when remoting to your machine so it is up to you if you want to take that risk to save you the annoyance of seeing that dialog any more.