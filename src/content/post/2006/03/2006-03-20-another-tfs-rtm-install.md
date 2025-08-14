---
title: "Another TFS RTM Install"
date: 2006-03-20T17:04:36.000Z
# post thumb
images:
  - "/images/post/2006/03/2006-another-tfs-rtm-install.jpg"
#author
author: "Martin Woodward"
# description
description: "Successfully installed TFS RTM in a VPC over the weekend, but avoid network shares for installation to prevent file errors."
# Taxonomies
categories: ["tfs", "technology", "dotnet", "maker", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Quick post to say that I got an RTM version of Team Foundation Server installed inside a VPC over the weekend and it worked seamlessly (as we've come to expect - kudos to those involved).  Once little caveat:  don't attempt to install from media over a network share.  

I had the install files copied into a local folder on my workstation and then tried to install them directly from a shared folder from within the Virtual PC.  It failed saying it couldn't find files some files (I have screen shots if any of the good folks from Microsoft are interested).  I figured it was because the setup routine had .NET code in it which often doesn't like running directly from a UNC network share for security reasons - but I didn't spend the time investigating it further (it could also have been a file naming thing because folder names were very long by the time the media was extracted to disk).  When the media was local (which it will me in most cases) then there are no problems.

I gave the latest builds of the [Teamprise](http://www.teamprise.com) Clients a quick run through and they seems to be working just fine - however tomorrow we upgrade our main physical server instances so we'll see what happens then....