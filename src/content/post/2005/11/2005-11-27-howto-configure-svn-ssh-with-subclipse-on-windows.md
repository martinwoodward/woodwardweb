---
title: "HowTo: Configure SVN+SSH with Subclipse on Windows"
date: 2005-11-27T00:09:34.000Z
# post thumb
images:
  - "/images/post/2005-howto-configure-svn-ssh-with-subclipse-on-windows.jpg"
#author
author: "Martin Woodward"
# description
description: "**Problem:** Use ssh tunnelling to access a Subversion repository using SSH tunneling (i."
# Taxonomies
categories:
  ["git", "technology", "dotnet", "gadgets", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

**Problem:**

Use ssh tunnelling to access a Subversion repository using SSH tunneling (i.e. with a subversion repository url of svn+ssh://myservername/myrepo) using the Subclipse subversion integration with Eclipse. I tried various things and used each of the three interfaces for configuring Subclipse (Window, Preferences..., Team, SVN).

When I used JavaHL (JNI) I got the following error, "svn: Can't create tunnel: The system cannot find the file specified." SVN Command Line gave me a similar error. Finally the JavaSVN interface (1.0) just did not want to authenticate with my server at all. Did various searches on Google and couldn't find an answer that worked, just lots of people with a similar problem. Anyway, the following works for me...

**Solution:**

You need to create an environment variable called "SVN_SSH" that points to an executable file that accepts the same command line arguments as ssh on unix. I did this by doing the following:-

Set up ssh keys. Not going to cover that here as you can easily Google for that. You need to end up with your public key on the SVN server and your private key loaded into Paegent locally.

Download and installed the excellent [TortoiseSVN](http://tortoisesvn.sourceforge.net/) client for Windows.

Set the following environment variable (by right-clicking on My Computer, Properties, Advanced, Environment Variables, New):-

Variable name: SVN_SSH

Variable value: C:\\Program Files\\TortoiseSVN\\bin\\TortoisePlink.exe

(The "\\" is very important, otherwise it won't work. Equally, you cannot use the plink.exe that comes with putty as that fires up a command shell window which is really annoying. The TortoisePlink.exe is a windows implementation of plink that doesn't bring up any UI)

Configure the Subclipse plugin to use JavaHL (JNI)

Restart Eclipse

Do a little victory jig (optional)
