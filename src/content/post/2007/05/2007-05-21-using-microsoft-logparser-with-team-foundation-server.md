---
title: "Using Microsoft LogParser with Team Foundation Server"
date: 2007-05-21T15:17:50.000Z
# post thumb
images:
  - "/images/post/2007-using-microsoft-logparser-with-team-foundation-server.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["tfs", "technology", "maker", "teamprise", "web", "programming", "podcast", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Anyone who has spent time on the inside of the Microsoft LAN knows that they have a ton of great internal tools and utilities that never make it into the outside world.  One of those ones that did is [Microsoft LogParser](http://www.microsoft.com/technet/scriptcenter/tools/logparser/default.mspx).  It gives you a universal querying capability to log files, active directory, event log data, the registry etc using a SQL like syntax.  It was initially created to look at IIS log files, and is lighteningly quick.  If you want to know more about Microsoft Log Parser 2.2 then go take a look at the [website](http://www.microsoft.com/technet/scriptcenter/tools/logparser/default.mspx), download it and take a read of the installed help documentation.  You can tell something is powerful when [Mike Gunderloy](http://www.larkware.com/) hosts a website ([LogParser.com](http://www.logparser.com/)) giving people tips and tricks around it :-) 

LogParser is able to output into all sorts of things, text files, charts or even HTML reports.  Personally I normally like to output into a CSV file so that I can load the data up into Excel and play a bit more with it there. 

So, here are a few examples for queries against the IIS logs for my Team Foundation Server application tier (I run these from a copy of the IIS logs I have in my current directory):- ##### Which client versions have been accessing TFS and who was using them from where? 

"c:\Program Files\Log Parser 2.2\LogParser.exe" -I:IISW3C "select cs(User-Agent),cs-username,c-ip,MAX(date) INTO out.csv FROM *.log WHERE cs-username IS NOT NULL GROUP BY cs(User-Agent),cs-username,c-ip ORDER BY cs(User-Agent)" -o:csv 

We had a bad bug before Teamprise 1.1.1 and recently we've been aware that some companies have older versions of Teamprise still lying around.  If you are one of these companies, then I urge you to upgrade immediately.  You can use the query above and then look for Teamprise+1.0.0 or Teamprise+1.1.0 to find the folks who are using older versions and on what machines. ##### Who is using Teamprise to talk to my TFS instance? 

What about if you want check who is using Teamprise to talk to TFS.  If you have purchased licenses then you can ask [Teamprise support](mailto:support@teamprise.com) for administrative access to our activation server but another way that includes folks running on evaluation licenses is to check your IIS logs:- 

"c:\Program Files\Log Parser 2.2\LogParser.exe" -I:IISW3C "SELECT DISTINCT username USING TO_LOWERCASE(cs-username) AS username FROM *.log WHERE cs-username IS NOT NULL AND cs(User-Agent) LIKE 'Teamprise%'" 

As you can see, LogParser is a great tool that has a lot of flexibility to offer.  If you enable additional IIS logging you would also be able to get information about bandwidth usage for TFS per user etc.  While the learning curve for LogParser is pretty steep, I would encourage you to install it and have a play so that you have it in your arsenal next time you need it.