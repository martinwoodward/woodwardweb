---
title: "TFS MSSCCI Provider 1.1 is available"
date: 2006-06-22T09:44:13.000Z
# post thumb
images:
  - "/images/post/2006/06/2006-tfs-msscci-provider-1-1-is-available.jpg"
#author
author: "Martin Woodward"
# description
description: "Version 1.1 of the TFS MSSCCI Provider is now available, featuring improved workflows, enhanced support, and new options for effective."
# Taxonomies
categories: ["tfs", "technology", "maker", "teamprise", "web", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
As announced yesterday by [Brian Harry](http://blogs.msdn.com/bharry/archive/2006/06/21/641884.aspx) and also by  [Michal Malecki](http://blogs.msdn.com/michalma/) in the [TFS Version Control Forum](http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=494881&SiteID=1), version 1.1 of Team Foundation Msscci Provider is now available for download [here](http://www.microsoft.com/downloads/details.aspx?FamilyId=87E1FFBD-A484-4C3A-8776-D560AB1E6198&displaylang=en).

It incorporates the following changes:-

Work items can be reviewed and edited from inside the Checkin Dialog 
Checkin locks are treated as exclusive 
Enhanced "Open from SCC"/"Add to SCC" process - both local and server path are specified in the single dialog. Also if the local path is already mapped, the process is done automatically.Support for Enterprise Architect 6.1 and PowerBuilder 10.5 
Fixed order of parameters passed into external diff tools (it's the same as in VS2005 now) 
Setup is working in x64 architecture 
And, the feature most commonly talked about whenever I talk to people about TFS, "Get latest" on Checkout.  Yes, they’ve added this in as an option that is disabled by default.  

As I [mentioned back in February](http://www.woodwardweb.com/vsts/000179.html), this is the same way that we are trying it with [Teamprise](http://www.teamprise.com/) – it’s not totally guaranteed because it is just a client side hack – it performs a Get Latest and then instantly notifies the server of a “pending edit” in a separate transaction.  It is possible that somebody could check a file in during the few milliseconds between the “get” and the “pend edit” (especially if you are getting a large file over a slow network) – but having this as an option (disabled by default) should help the users who are used to the way VSS works.  We actually opted to leave this feature out in the end from [Teamprise](http://www.teamprise.com/) 1.0 because we were trying to encourage the TFS way of thinking – however I might have to add it back in now for V2 :-)

If you are using the current version of the MSSCCI provider then I would encourage you to upgrade.  I’m very impressed at the level of effort going into the development of the provider.  While this is still an “unsupported tool”, Brian [mentions](http://blogs.msdn.com/bharry/archive/2006/06/21/641884.aspx) that he is investigating trying to change this and actually get it officially supported.  Personally, I don’t have any problems with the current state of support with the MSSCCI plugin as I feel that TFS via an unsupported MSSCCI provider is a much safer bet than VSS via MSSCCI provider – but I know that a reliance on unsupported tools is preventing many organisations from beginning their migration to TFS.