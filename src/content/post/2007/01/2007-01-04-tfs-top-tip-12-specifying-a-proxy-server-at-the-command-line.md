---
title: "TFS Top Tip #12 - Specifying a proxy server at the command line"
date: 2007-01-04T16:07:43.000Z
# post thumb
images:
  - "/images/post/2007-tfs-top-tip-12-specifying-a-proxy-server-at-the-command-line.jpg"
#author
author: "Martin Woodward"
# description
description: "If (like me) you are using the tf."
# Taxonomies
categories: ["tfs", "technology", "maker", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
If ([like me](http://www.woodwardweb.com/vsts/000273.html)) you are using the [tf.exe](http://msdn2.microsoft.com/en-us/cc31bk2e(VS.80).aspx) command line to access your Team Foundation Server via a Version Control Proxy from a remote office, then the following tip is extremely useful - much more so than my previous [registry hack](http://www.woodwardweb.com/vsts/000286.html).   

There is currently no option with the Microsoft command line to pass a version control proxy server in to TF.exe.  It will pick one up if you have one set in the registry if you have used the Team Explorer GUI - but that isn't great for scripted scenarios.  [James Manning](http://blogs.msdn.com/jmanning/) recently pointed me in the direction of an undocumented environment variable called TFSPROXY.  If set, the TFS client will use that setting to proxy your requests.  Therefore the following will call tf.exe passing a proxy server to use in your connection:- 

@echo off
setlocal
set TFSPROXY=http://your_proxy_server:8081
tf %*
endlocal

I saved this in a batch file called "tfvp.cmd" (for "tf via proxy"), therefore if I want to call tf via my proxy and I'm in a shell that doesn't have the environment variable set I can call my script.

The only command that this really useful for is when doing a tfs get command, as only the download is sent via the version control proxy server, the majority of requests go direct to the main Team Foundation Server application tier that you are connected to.

By the way, if you are using the Teamprise command line client then you can use the /proxy:http://your_proxy_server:8081 argument to specify a proxy server to use for the connection, I've just logged a bug so that we will also accept this undocumented environment variable, but we'll make it so that passing one explicitly will override any picked up from the environment variable.