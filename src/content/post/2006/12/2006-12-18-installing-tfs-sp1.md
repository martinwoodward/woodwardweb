---
title: "Installing TFS SP1"
date: 2006-12-18T13:35:24.000Z
# post thumb
images:
  - "/images/post/2006/12/2006-installing-tfs-sp1.jpg"
#author
author: "Martin Woodward"
# description
description: "Learn how to safely install TFS SP1 by applying KB919156 first to prevent client data loss during the update process."
# Taxonomies
categories: ["tfs", "technology", "maker", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
This morning I have been installing Team Foundation Server SP1 onto some test TFS instances.  A handy hint for you is that you need to apply [KB919156](http://support.microsoft.com/?kbid=919156) before installing SP1.  [KB919156](http://support.microsoft.com/?kbid=919156) is an important patch for TFS that allows it to be put into a state in which client requests are refused and the ability to take it out of this state afterwards.  Not only does it quiesce the Team Foundation Server application, but it also does the same to IIS and the SQL Server database on which TFS runs.  This is important to make sure that no client data is lost or data corrupted during the installation on service packs etc. Apparently, all Team Foundation Server updates that you install from now on will use this functionality.  The following links will take you to the relevant download sections that you need for TFS SP1.  [KB919156 - Visual Studio Team Foundation Server Quiescence GDR](http://www.microsoft.com/downloads/details.aspx?FamilyID=c18c756e-8f80-4987-b3bf-600068a9e3c4&DisplayLang=en) [KB928957 - Team Foundation Server SP1](http://www.microsoft.com/downloads/details.aspx?familyid=A9AB638C-04D2-4AEE-8AE8-9F00DD454AB8&displaylang=en) 

After installing KB919156 you will have a file called TFSQuiesce.exe installed into your Team Foundation Server TFS Setup folder (mine is in C:\Program Files\Microsoft Visual Studio 2005 Team Foundation Server\TF Setup).