---
title: "Connecting to TFS 2010 Beta 2 with Teamprise"
date: 2009-11-08T17:37:47.000Z
# post thumb
images:
  - "/images/post/2009/11/2009-connecting-to-tfs-2010-beta-2-with-teamprise.jpg"
#author
author: "Martin Woodward"
# description
description: "Learn how to connect Teamprise 3.3 to TFS 2010 Beta 2, utilising the new URL format for seamless integration and project management."
# Taxonomies
categories: ["tfs", "technology", "maker", "teamprise", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
One of the features in [Teamprise 3.3](http://www.teamprise.com) is the ability to connect to a Team Foundation Server 2010 Beta 2 project collection.  The support for TFS 2010 Beta 2 in Teamprise is very similar to the support you will find in a [patched Visual Studio 2008 instance](http://www.microsoft.com/downloads/details.aspx?FamilyID=CF13EA45-D17B-4EDC-8E6C-6C5B208EC54D) – you can connect and work correctly, however some of the new TFS 2010 features will not be available.  

The URL syntax in TFS has changed slightly with the 2010 release.  Previously, all URL’s were relative to the root of a server, but with the introduction of [project collections](http://msdn.microsoft.com/en-us/library/dd236915(VS.100).aspx) you have a longer URL in the form of     

http://servername:8080/tfs/DefaultCollection   

Where “servername” is the name of your TFS instance, “8080” is the port, “/tfs” is the virtual directory that TFS is installed in and “DefaultCollection” is the name of the project collection you want to connect to.  Like Visual Studio 2008, Teamprise 3.3 cannot connect to the application instance to determine which project collections are available – you have to be provided the name or URL from your TFS administrator.  

However you can connect now using one of the new URL formats, and if you have a Sharepoint site or a reports site configured their correct locations will be used in Team Explorer.  If you have performed a basic installation of TFS (i.e. with no Sharepoint or Reports services configured) then the Documents and Reports nodes in Team Explorer will just not display.