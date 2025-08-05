---
title: "TFS Top Tip #4:  The Command Line Client is your friend."
date: 2006-04-28T16:39:48.000Z
# post thumb
images:
  - "/images/post/2006-tfs-top-tip-4-the-command-line-client-is-your-friend.jpg"
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

If you are going to be doing more than the basic check-in / check-out options then it pays to get to know the command line client – tf.  The command line client is actually the most flexible and powerful client to Team Foundation Version Control.

For more information, consult the [MSDN help documentation](http://msdn2.microsoft.com/en-us/library/cc31bk2e.aspx).  [Teamprise](http://www.teamprise.com/) users will be glad to hear that a large percentage of the commands are implemented in V1.0 of our command line client meaning that you can do these actions from a Mac or Unix box as well ([install instructions are posted in the Knowledge Base](http://kb.teamprise.com/article/view/8)).  If you are running on Windows then you are probably better off sticking to Microsoft’s command line client that gets installed as part of the Team Foundation Server client installation (and accessible via a Visual Studio 2005 command shell).

For example, to show all the check-outs by everyone on a path in the repository:-

  tf status /server:http://yourservernamehere:8080 /user:* /recursive $/TeamProject/

For more examples, see an excellent post from [James Manning](http://blogs.msdn.com/jmanning/archive/2006/04/07/571151.aspx) or some of my previous posts:-

[Hatteras Command Line Tips](http://www.woodwardweb.com/dotnet/000116.html) (from back when tf.exe was called h.exe which saved a keypress :-), however the documentation was no where near as good as it is now )
[Unlocking files in VSTS](http://www.woodwardweb.com/vsts/000143.html)

The command line client is also excellent for scripting purposes (our automated build system relies heavily on it).  I urge you to spend a few moments with a strong cup of coffee, the [help documentation](http://msdn2.microsoft.com/en-us/library/cc31bk2e.aspx) and just have a play around.  Once you realise what commands are available then you’ll know what’s possible if you come across a situation in the future where you reach limitations in the UI.