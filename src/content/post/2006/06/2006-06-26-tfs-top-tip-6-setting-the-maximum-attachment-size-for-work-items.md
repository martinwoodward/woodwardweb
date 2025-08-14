---
title: "TFS Top Tip #6 - Setting the Maximum Attachment Size for Work Items"
date: 2006-06-26T10:38:02.000Z
# post thumb
images:
  - "/images/post/2006/06/2006-tfs-top-tip-6-setting-the-maximum-attachment-size-for-work-items.jpg"
#author
author: "Martin Woodward"
# description
description: "By default, the maximum attachment size for attachments to work items in Team Foundation Server is 4Mb."
# Taxonomies
categories: ["tfs", "technology", "web", "programming", "podcast"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
By default, the maximum attachment size for attachments to work items in Team Foundation Server is 4Mb.  It is handy that this feature exists because people may accidentally attach massive files when they should really be attaching something a little smaller.  However – for some people 4Mb is just not enough and they want more (or even less).

To do this, you can use one of the WIT Web services that isn’t exposed via the object model.  The easiest way is to log on to the Team Foundation Server as an administrator and then fire up the following in Internet Explorer:-

http://localhost:8080/WorkItemTracking/v1.0/ConfigurationSettingsService.asmx?op=SetMaxAttachmentSize

In the “maxSize” box, enter the required size in bytes.  The maximum size for MaxSize is 2Gb, but you probably want to keep it smaller than that unless you really need people attaching VPC images to your work items :-)   Note that this setting is applied server wide (across all Team projects).  See [MSDN Help](http://msdn2.microsoft.com/en-us/library/ms400780.aspx) for more information (and thanks to Mohammad Iqubal for [posting](http://forums.microsoft.com/MSDN/showpost.aspx?postid=499684&siteid=1) a link to the help in the [MSDN Forums](http://forums.microsoft.com/MSDN/default.aspx?ForumGroupID=5&SiteID=1)).