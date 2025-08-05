---
title: "Disabling TFS Automatic Check out"
date: 2009-01-06T12:59:10.000Z
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

From time to time I hear from people who dislike the automatic check out behaviour common with TFS.  One of the great things about TFS is the the pending changes list that shows you the files you have currently checked out and allows you to easily undo any un-intentional check outs.  While I personally find the auto-checkout features a productivity boon - like most things there is a preference that you can use to adjust the default behaviour if you find it causes problems with the way you like to work.  

In Visual Studio 2008 (with the Team Explorer 2008 installed), go to Tools, Options, Source Control, Environment and change the Checked-in items for Saving and Editing to "Prompt for check out" rather than the default which is "Check out automatically".  

[](http://www.woodwardweb.com/WindowsLiveWriter/TFSAutomaticCheckout_B26A/Options_2.png)  

This will then prompt you before the automatic checkout occurs and give you the opportunity to cancel if you wish.  

In Eclipse with [Teamprise](http://www.teamprise.com) installed, go to Window, Preferences (or Eclipse, Preferences on the Mac) and then Teamprise, Source Control to enable prompting before check out.  

[](http://www.woodwardweb.com/WindowsLiveWriter/TFSAutomaticCheckout_B26A/Preferences%20(2)_2.png)   

That said, I would strongly encourage you to stick with the defaults and have Multiple check outs enabled in TFS for your Team Project and also keep the Pending Changes view on screen (in VS View, Other Windows, Pending Changes or in Eclipse Window, Show View, Other, Teamprise, Pending Changes).  That way you can always see what you have checked out at any time and immediately undo any check-outs that you no longer need.