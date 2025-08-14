---
title: "TFS Top Tip #2: Changing the Logged In User"
date: 2006-04-26T15:15:46.000Z
# post thumb
images:
  - "/images/post/2006/04/2006-tfs-top-tip-2-changing-the-logged-in-user.jpg"
#author
author: "Martin Woodward"
# description
description: "When you connect to a Team Foundation Server, the Microsoft client API attempts to connect with your current credentials that the process is."
# Taxonomies
categories: ["tfs", "technology", "teamprise", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

[](http://www.woodwardweb.com/blog/username_cache.gif)[](http://www.woodwardweb.com/blog/username_cache.gif)[](http://www.woodwardweb.com/blog/username_cache.gif)[](http://www.woodwardweb.com/blog/username_cache.gif)[](http://www.woodwardweb.com/blog/username_cache.gif)When you connect to a Team Foundation Server, the Microsoft client API attempts to connect with your current credentials that the process is running with under Windows. If you are on a different domain than your TFS server or the user that you are logged in with does not have access, then you will be prompted to enter your login credentials using the standard login dialog box that you will be familiar with from Internet Explorer.

However, what if you pass credentials and now you would like to pass in a different set. In [Teamprise](http://www.teamprise.com/) it is easy enough because we have to ask you them every time you connect. With the Microsoft API your credentials are cached in the standard windows store.

To access this store (and remove your cached credentials allowing you to re-authenticate as a different user) then go to Control Panel, User Accounts, Advanced Tab, Manage Passwords. You should then locate your TFS Server instance and select Remove.
