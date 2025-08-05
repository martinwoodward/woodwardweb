---
title: "Team Foundation Server Versioning Error"
date: 2006-01-31T22:37:41.000Z
# post thumb
images:
  - "/images/post/post-1.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["Technology"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

[John Lawrence](http://blogs.msdn.com/johnlawr/default.aspx) has posted an interesting [tip](http://blogs.msdn.com/johnlawr/archive/2006/01/31/520872.aspx) about the error "Server did not recognize the value of the HTTP Header SOAPAction: http://schemas.microsoft.com/TeamFoundation/2005/06/Services/ServerStatus/02/CheckAuthentication".  Basically, if you see this error you are trying to use a beta client to connect to an RC version of Team Foundation Server.  The solution is to upgrade your client to the latest version.

Web service versioning is a minefield issue when it comes to SOA Architectures.  It would have been nice if the MS Client detected this error better and gave a nicer error to the end-user.  There is a get version method call that the client pings occasionally to keep the HTTP session alive - really that schema should have stayed intact and clients used it to detect if they were compatible with the version on the server and give back an understandable error message.

Anyway, looks like the RC is very nearly here.  I for one cannot wait to have it in my sweaty hands.