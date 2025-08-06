---
title: "Using Team Explorer Everywhere with CodePlex"
date: 2010-04-22T12:39:36.000Z
# post thumb
images:
  - "/images/post/2010-using-team-explorer-everywhere-with-codeplex.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories:
  ["tfs", "technology", "books", "web", "programming", "podcast", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

[](http://www.codeplex.com/) People using CodePlex can download [Visual Studio Team Explorer](http://www.microsoft.com/downloads/details.aspx?displaylang=en&FamilyID=fe4f9904-0480-4c9d-a264-02fedd78ab38) to access a CodePlex hosted TFS instance free of charge, but what if you want to be a project team member and access the code from Eclipse or a non-windows machine?

Well, I’m proud to say that we’ve continued the tradition and you can now use Team Explorer Everywhere with CodePlex. Simply download the [trial edition of Team Explorer Everywhere](http://www.microsoft.com/downloads/details.aspx?FamilyID=AF1F5168-C0F7-47C6-BE7A-2A83A6C02E57) and then enter the [license key given on the CodePlex wiki](http://codeplex.codeplex.com/wikipage?title=Obtaining%20the%20Team%20Explorer%20Everywhere%20Client). Note that if you already have a full license to Team Explorer Everywhere (either through retail, volume licensing or MSDN) then you can obviously use this to access CodePlex as well.

Just a quick tip. When adding the connection, be sure to hop over to the Advanced tab to ensure that you do not have “tfs” in your path. CodePlex has it’s TFS servers at the root of the server location (as required by older TFS clients and older versions of TFS) – but the Team Explorer Everywhere client will default to the TFS 2010 convention of looking at [https://servername/tfs](https://servername/tfs) unless you tell it differently. Also some of SSL certificates on some of the CodePlex servers are signed by a root certification authority that is not in the Java Certificate Store in all Java Runtime Environments running today. If you run into this problem and you are having SSL issues then you can add the root CA to your Java certificate store. An easier way is to un-check the “Accept only trusted SSL certificates” which will disable the root certification authority check for the SSL connection to the CodePlex server – but bear in mind that reduces the security of the communication between your machine and the CodePlex server.

[](http://www.woodwardweb.com/WindowsLiveWriter/UsingTeamExplorerEverywherewithCodeplex_B1DF/codeplex_2.png)

Let me know how you get on. I’m excited to see who takes us up on this offer. As an encouragement, I’ll send a [free copy of my book](http://www.amazon.com/gp/product/0470484268?ie=UTF8&tag=woodweb03-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0470484268) to the first person who [emails me a screenshot](javascript:var dom=) of them contributing to a project on CodePlex using Team Explorer Everywhere.
