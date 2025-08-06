---
title: "Determining the last changeset"
date: 2006-09-12T16:05:06.000Z
# post thumb
images:
  - "/images/post/2006-determining-the-last-changeset.jpg"
#author
author: "Martin Woodward"
# description
description: "We've just been having a discussion internally about ways of numbering our builds."
# Taxonomies
categories: ["git", "tfs", "technology", "dotnet", "maker", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
We've just been having a discussion internally about ways of numbering our builds.  It seems a sensible idea to qualify a build with the changeset number in our TFS repository, that way we are able to easily identify the exact status of all the files included in that build without the need to add a label into TFS.  My thought process when figuring out how to get the data was a typical one so I thought I'd post it here... 

Idea 1)  My first thought was to go directly to the web services.  I know there is an Administration web service for VersionControl that gives you lots of nice jucy stats about your TFS instance including the maximum changeset ID (the QueryRepositoryInformation operation on http://tfs_at:8080/VersionControl/v1.0/Administration.asmx).  However, as I've ranted about before, going against the web services should always be avoided and only used as a last resort when all other alternatives have been ruled out - so I thought I'd try to resist the temptation and do it another way. 

Idea 2)  Well, in that case I thought I'd use the API.  I could have done this using the .NET API, but as I work for Teamprise, I have access to our Java API which has the advantage of running from our Unix build server. 

Idea 3)  Then I realised, I didn't need to do any of this rubbish and that the functionality was already available with careful use of the Command Line Client (tf) - again Teamprise has a version of tf that runs from unix so I can happily use my commands on our unix box as well.  (For those new to tf then see [TFS Top Tip #4](http://www.woodwardweb.com/vsts/000234.html)).  In the end, the command I needed was:- 

tf history /s:http://tfs_at:8080 /stopafter:1 /noprompt /recursive /version:T $/MyProject/trunk

Simple really.  But I thought this illustrated a key point about using TFS.  Because the capability for extension is so huge, the temptation is to use it when often you can simply do it in the UI or from the command line.  If you cannot and there isn't a tool already available to do it, then you should look to the tried, tested and performance tweaked API.  Finally, if the method really isn't exposed in the API then you could go direct to the webservices, but you are now in the territory of being un-supported and things may well break as new versions of TFS are released.

People might suggest you go direct to the database, but there are many reasons why you shouldn't.  Mainly that unless you work for the TFS teams at Microsoft you'll probably do it wrong.  Also a lot of data is cached in memory in the Application Tier - messing with the database under the hood is a sure-fire way of corrupting your TFS instance.  The final reason is that if you corrupt TFS by messing with the tables after all these warnings, don't be expecting anyone to help you.