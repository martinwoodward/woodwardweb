---
title: "Java on Debian"
date: 2006-05-17T12:54:17.000Z
# post thumb
images:
  - "/images/post/2006-java-on-debian.jpg"
#author
author: "Martin Woodward"
# description
description: "Debian and Ubuntu users can now easily install Sun Java 5 JRE with a simple command, simplifying access to essential encryption for NTLM."
# Taxonomies
categories: ["technology", "dotnet", "maker", "teamprise", "web", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

Thanks to [Ben](http://www.flyingjelly.net/entry.jsp?entry=721) for passing this on. You can now do a straight forward “apt-get install sun-java5–jre” and have it install on [Debian](http://www.debian.org/) and [Ubuntu](http://www.ubuntu.com/). Due to the old licensing restrictions you used to have to package up the installation yourself and was a real pain. Our [Teamprise](http://www.teamprise.com/) client needs the Sun JRE because it contains the various encryption bits necessary for NTLM authentication to work – hopefully this will make life easier for our customers running [Debian](http://www.debian.org/) based distributions such as the growingly popular [Ubuntu](http://www.ubuntu.com/). See [Simon Phipp](http://blogs.sun.com/roller/page/webmink/)’s weblog for more [details](http://blogs.sun.com/roller/page/webmink?entry=jdk_on_gnu_linux_something). [Gentoo](http://www.gentoo.org/) will have it soon too and any other GNU/Linux or [OpenSolaris](http://www.opensolaris.org/) distributions are welcome to join in the fun.

**Correction:** As Shaw points out in the comments, we don’t _need_ the Sun JRE, we just need the encryption bits. The JRE from IBM and [JRockit from BEA](http://www.bea.com/content/products/jrockit) also contain the relevant bits. It’s just that GCJ as installed by default on Debian does not have them.
