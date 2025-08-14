---
title: "Java on Ubuntu"
date: 2006-06-27T18:10:28.000Z
# post thumb
images:
  - "/images/post/2006/06/2006-java-on-ubuntu.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover how to easily install and set the Sun JRE on Ubuntu for seamless NTLM authentication with Teamprise."
# Taxonomies
categories: ["teamprise", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
[Teamprise](http://www.teamprise.com/) currently requires a Java JRE with DES encryption available in the JVM for the magic of NTLM authentication to work correctly.  Unfortunately, the GCJ that ships by default with Ubuntu and other Debian based distributions does not have one.  The easiest way around this is to install a JRE from one of the other vendors (such as Sun, IBM or BEA) – all of which are free (as in beer).

Since Sun has recently modified it’s licensing agreement for Java it has recently become a lot easier to install a the Sun JRE onto your Debian based installation.  Today I happened to stumble upon the excellent documentation in the Ubuntu wiki detailing how to install the Sun JRE and make it your default:-

[https://help.ubuntu.com/community/Java](https://help.ubuntu.com/community/Java)

The command I never knew existed until now was:-

sudo update-alternatives --config java

That saved me a lot of time hacking around manually (I never can get the parameters to create a symlink the correct way round first time…)