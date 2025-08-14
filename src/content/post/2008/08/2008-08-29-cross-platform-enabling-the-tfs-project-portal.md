---
title: "Cross Platform Enabling the TFS Project Portal"
date: 2008-08-29T10:58:50.000Z
# post thumb
images:
  - "/images/post/2008/08/2008-cross-platform-enabling-the-tfs-project-portal.jpg"
#author
author: "Martin Woodward"
# description
description: "Upgrade your TFS portal to WSS 3.0 for enhanced cross-platform support and discover a free Telerik editor for seamless content management."
# Taxonomies
categories: ["tfs", "technology", "maker", "teamprise", "web", "podcast"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

Team Foundation Server uses Windows Sharepoint Services (WSS) to provide the project portal infrastructure. If you installed TFS 2005 then you will probably have WSS 2.0 installed, even if you later upgraded to TFS 2008. WSS 3.0 gets installed by default with TFS 2008 installations and is _much_ better than WSS 2.0 - not just in the area of cross-platform and cross-browser support but just better all round. If you have a WSS 2.0 site running your TFS 2008 project portals then I would encourage you to [upgrade to WSS 3.0](http://blogs.msdn.com/sudhir/archive/2007/05/31/upgrade-2005-with-wss2-0-to-orcas-wss3-0.aspx) wether you need cross-platform support or not.

Anyway. Here at [Teamprise](http://www.teamprise.com) we like the Wiki way of working to manage content on our team project portal, and WSS 3.0 comes with basic wiki capabilities. The only problem is that by default the Sharepoint wiki uses an ActiveX control for content editing which obviously presents a few problems when editing content from a Mac or Linux machine.

Luckily, the kind and clever folks at [Telerik](http://www.telerik.com/) come to the rescue with a (free) [cross-platform alternative to the WSS (and MOSS) editor](http://www.telerik.com/products/sharepoint/radeditor.aspx).

[](http://www.woodwardweb.com/WindowsLiveWriter/CrossPlatformEnablingforTFSProjectPortal_9309/xplatwss_2.png)

Installing the editor in a standard WSS 3.0 portal as used by TFS takes a few minutes. Basically, you have to carry of the following steps: [Install ASP Ajax Controls](http://sharepoint.microsoft.com/blogs/mike/Lists/Posts/Post.aspx?ID=3) [Download and install the RadEditor Lite for MOSS](http://www.telerik.com/help/aspnet-ajax/installing-radeditor-in-moss-2007-farm.html) [Set the RadEditor to be the default editor for Lists and Wiki's in your Team Project site.](http://www.telerik.com/help/aspnet-ajax/using-radeditor-in-list-items.html)

Finally, if you are using a standard WSS project portal then you will also need to configure the RadEditor to insert standard hyperlinks. Until you do this part, the Link button in the RadEditor control will not work. It took me a while to figure out how to get this button enabled - basically you have to go to %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\wpresources\RadEditorSharePoint\5.2.0.0\_\_1f131a624888eeed\Resources on the server hosting your sharepoint sites (which is the TFS server in my case) and edit ListToolsFile.xml and ToolsFile.xml replacing the line

<tool name="MossLinkManager" />

with

<tool name="LinkManager" />

You then might need to do an iisreset and hit refresh in your browser to clear all the caches but your link button should now work great.

Once this is all done, you will be able to edit wiki pages and other HTML content from Safari, Firefox on your platform of choice.
