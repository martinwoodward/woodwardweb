---
title: "TFS Top Tip #5 - What to do if you lock yourself out of your repository"
date: 2006-05-19T10:03:47.000Z
# post thumb
images:
  - "/images/post/2006-tfs-top-tip-5-what-to-do-if-you-lock-yourself-out-of-your-repository.jpg"
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

This tip is a follow up from my rather less helpful post “[Don’t Do That](http://www.woodwardweb.com/vsts/000158.html)” where I discussed the “Inherit security settings” option in the security settings tab for the Source Control Explorer when talking to Team Foundation Server.  The issue with this check-box is that if you un-tick it then all the settings for every group on that folder are removed meaning that you have to go through every group and make sure that they have the correct permissions before you press the OK button.  Even if you are a project administrator and you un-tick this box and press OK without giving project administrators rights to the folder or file you will not be able to go back and adjust the permissions.

However, I have found a work around should you be left stranded in this way.  If you log in to TFS with the credentials of somebody who is a local administrator on the server then you will be able to view the folder and reset the security permissions.  The easiest way to do this is to log on locally to your TFS application tier machine as the TFSSetup user and use the source control explorer on that machine to rectify the problem.  Obviously it is not ideal but at least you are not totally stranded.

Rather embarrassingly, I found this work-around totally by accident while up on stage presenting my recent talk “[Top Ten Tips for Team Foundation Server](http://www.woodwardweb.com/vsts/000237.html)”.  My finale was going to be trashing my TFS installation by un-ticking this box and pressing OK without giving the Project Administrators the appropriate rights – however it wasn’t as dramatic as I’d planned.  Turns out that this was because I was also the TFSSetup user on the VPC I was using as the TFS server.  At least next time I can make it dramatic and then show folks how to fix it!