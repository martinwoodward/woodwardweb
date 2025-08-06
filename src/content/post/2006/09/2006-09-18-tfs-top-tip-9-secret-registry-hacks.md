---
title: "TFS Top Tip #9 - Secret Registry Hacks"
date: 2006-09-18T19:28:25.000Z
# post thumb
images:
  - "/images/post/2006-tfs-top-tip-9-secret-registry-hacks.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories:
  ["tfs", "technology", "books", "dotnet", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

So, this isn't exactly original material - but I was having a chat with somebody today who I consider very knowledgeable about Visual Studio Team System and they were not aware of these so hopefully re-posting some will help more people discover them. Strictly speaking, as all of these have been mentioned somewhere before the word "Secret" isn't correct - however it gave an otherwise very dull post a certain bit of excitement which kept you reading this far so forgive me. The usual Caveats about messing with the registry apply, also the default settings are generally more logical to new users so use with caution. Most of these tips apply to HKEY_LOCAL_MACHINE as well as HKEY_CURRENT_USER - I normally set them as a user preference so as not to confuse anyone else that should happen to use my machine. #### Hack #1 - Stopping Team Explorer from connecting on Visual Studio 2005 Start-up

Add a DWORD value called "AutoLoadServer" under HKEY_CURRENT_USER\Software\Microsoft\VisualStudio\8.0\TeamFoundation. Zero means do not reconnect automatically.

I first read about this setting over at Tim Noonan's blog. This can be very handy if, like me, you frequently change TFS servers. I jump between the work TFS instance, CodePlex and a test or VPC versions of TFS. I know which server I want to connect to when starting VS 2005, and frequently it is not the one I connected to last time. Adding the following setting means that I have to manually pick the server I want to connect to from the "Add Existing Project..." button. #### Hack #2 - Don't get Missing Files

Add a DWORD value called DisableGetMissingFiles under HKEY_CURRENT_USER\Software\Microsoft\VisualStudio\8.0\TeamFoundation\SourceControl. Any value other than zero will disable getting files from the server automatically.

Another Tim Noonan special. This setting determines if files missing from the solution or project are automatically downloaded. I normally switch this off and so get the files only when I say "Get Latest" on a particular solution or project, this is especially useful when you are not always connected. #### Hack #3 - Bypass proxy server

Add a String value called BypassProxyOnLocal under HKEY_CURRENT_USER\Software\Microsoft\VisualStudio\8.0\TeamFoundation\RequestSettings. A value of "true" will bypass.

This one from the legendry [Buck Hodges](http://blogs.msdn.com/buckh/). In some network configurations, the Microsoft Team Foundation Server client will connect to your Team Foundation Server via a web proxy server. This should be avoided as it slows everything down and the NTLM authentication used by TFS doesn't play well with some proxy configurations. I've seen this pop up as a problem with environments that use a proxy.pac file to control proxy access rather than hard-coding the entries in the Internet Options, LAN Settings (or for folks that don't have Bypass local set up). You should probably only use this setting if you know you are having this problem (often diagnosed by an intermittent failure of Team Explorer to connect but easily checked using a network sniffing tool such as Ethereal). #### Hack #4 - TFS Version Control Proxy Settings

See HKEY_CURRENT_USER\Software\Microsoft\VisualStudio\8.0\TeamFoundation\SourceControl\Proxy. A String value called Url containing the proxy address and a String value called Enabled set to true will enable the source control proxy.

The easier way to enter values for what machine to use as a TFS Version Control Proxy is to go to into Visual Studio with Team Explorer installed and select Options, Source Control, Tools, Options, Source Control, Visual Studio Team Foundation Server, Proxy Settings. However, if you are running a tf.exe script or TFS .NET API code as part of a service and you want the code to go via a proxy then the HKEY_LOCAL_MACHINE version of this setting is very useful for setting a default. #### Hack #5 - Configuring the TreeDiff Power Toy

See [Brian Harry](http://blogs.msdn.com/bharry/)'s excellent post about some registry tweaks for [Configuring the TreeDiff Power Toy](http://blogs.msdn.com/bharry/archive/2006/09/08/746254.aspx) to your whim.
