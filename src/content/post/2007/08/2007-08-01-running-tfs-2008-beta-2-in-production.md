---
title: "Running TFS 2008 (Beta 2) in Production"
date: 2007-08-01T18:26:50.000Z
# post thumb
images:
  - "/images/post/2007/08/2007-running-tfs-2008-beta-2-in-production.jpg"
#author
author: "Martin Woodward"
# description
description: "Yesterday I sat down with my freshly downloaded Orcas Beta 2 media (thanks to the Secure Content Downloader from the good folks at Microsoft."
# Taxonomies
categories: ["tfs", "technology", "maker", "teamprise", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Yesterday I sat down with my freshly downloaded Orcas Beta 2 media (thanks to the [Secure Content Downloader](http://www.microsoft.com/downloads/details.aspx?familyid=9a927cf6-16e4-4e21-9608-77f06d2156bb&displaylang=en) from the good folks at Microsoft Research in Cambridge) and upgraded our production TFS instance.  The good news is that the set-up process in Beta 2 is miles better than it was in earlier versions of TFS - it even handled the upgrade of my database for me.  As someone who has been through manual database upgrades from TFS 2005 Beta 2 -> Beta 3 -> Beta 3R -> RC -> RTM -> TFS 2008 Beta 1, having it all done for me was just fantastic. 

Performance wise, things seem to be a lot better than TFS 2005 SP1.  Other good news is that the existing Teamprise clients (including the [recently shipped 2.2 release)](http://www.teamprise.com/news/2007/07/new_release_teamprise_22.html) versions talk to TFS 2008 just fine thanks to the fantastic work the TFS team have done to ensure backwards compatibility.  Obviously our clients do not yet take advantage of some of the new TFS 2008 functionality - but the performance improvements made on the server definitely come through. 

The only minor issue we came across was one to do with our reports being displayed in our WSS 2.0 portal (see [Tim Noonan's blog for the fix](http://blogs.msdn.com/hippietim/archive/2007/07/31/fix-for-reports-showing-up-properly-on-wss-2-0-for-team-foundation-server-2008-beta-2.aspx)). 

Anyway - thought I'd spread some positive news about the recent TFS Beta, I'll let you know how we get on.