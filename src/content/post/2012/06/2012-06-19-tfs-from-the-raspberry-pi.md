---
title: "TFS from the Raspberry Pi"
date: 2012-06-19T18:53:42.000Z
# post thumb
images:
  - "/images/post/2012-tfs-from-the-raspberry-pi.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories:
  ["tfs", "technology", "gadgets", "maker", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

I just got delivery of my shiny new [Raspberry Pi](http://www.raspberrypi.org/). With-in a few minutes I had it all booted and running a [stock Debian “squeeze” image](http://www.raspberrypi.org/downloads), almost too easy and the performance of the diminutive Raspberry Pi was great. Previously my experiences with Embedded Linux has mostly been when running on hacked router firmwares so running on a chip as powerful as the ARM v11 Broadcoam chip in the Raspberry Pi is a real pleasure. As getting it up and running was so easy, what should be my first project on my latest (and least expensive ever) computer? I thought I’d see what it took to talk to TFS from the device :-)

[](http://www.woodwardweb.com/Windows-Live-Writer/TFS-from-the-Raspberry-Pi_FF5C/raspi_2.png)

First things first, I had to get Java installed. It sounds like [Oracle are working on a version of Java with a proper Hotspot JVM](https://blogs.oracle.com/speakjava/entry/javafx_on_the_raspberry_pi) – but I just went with a vanilla OpenJDK build for the device that lacks important features like a JIT etc. It’s all fully functional, just the performance isn’t great but sticking to the TFS cross-platform command line client (tf) in Team Explorer Everywhere, performance is usable and will only get better as better JVM’s come available for the Raspberry Pi.

To install a JRE you would just do the usual:

sudo apt-get install openjdk-6-jre

However, I needed to do some building on the Raspberry Pi and needed a full JDK so I went with:

sudo apt-get install openjdk-6-jdk

And then set my JAVA_HOME by adding the following to my profile

export JAVA_HOME=/usr/lib/jvm/java-6-openjdk/

Now, I like to say that [Team Explorer Everywhere](http://go.microsoft.com/?linkid=9810483) is 99.99% Java. All the code to talk to the TFS webservices is all Java based, however there is a small but very important set of native code that we also ship with our [Cross-platform command line client, the Eclipse plug-in and the TFS SDK for Java](http://go.microsoft.com/?linkid=9810483). The native code does things that are hard to do otherwise such as see how many columns are available in the current console session, use Key Ring of Keychain for secure credential storage, interface with the platforms native Kerberos libraries if present to allow for single sign-on with TFS etc. My next step to get tf working on the Raspberry Pi was to compile our native code for the armv6l based chipset. As mentioned this native code includes Kerberos support so I first had to add the Kerberos libraries (sudo apt-get install libkrb5-dev - note you wouldn’t have to do this if you didn’t need Kerberos support as we also support NTLMv2 out the box without requiring any additional dependencies)

I ran the native build process, and amazingly all the unit tests passed! I then checked the Linux/Arm natives back into TFS, waiting for the CI build to finish and then downloaded a new TFS-CLC.zip from the build server. Unzipped the standard CLC into my users ~/Bin directory and it just worked!

I can now happily talk to my local TFS server from my $25 Raspberry Pi. With local workspaces and transparent execute bit support in TFS 2012 it’s a really good experience. I just use vim to edit files, do a quick “tf status” to see what's changed and then a “tf checkin” to add the files to source control.

I’ve actually added the Linux on Arm natives into the main build of TEE so they might appear in the RTM version of Team Explorer Everywhere if I don’t find any major bugs. It definitely wouldn’t be classed as a supported platform or anything, but it certainly “works on my machine”. Possibly more useful is that if the Arm natives also ship in our TFS SDK for Java it would mean any Java applications coded on the Raspberry Pi in the future would have full access to the same TFS API that we use to create the command line client and the Eclipse plug-ins.

**[](http://www.woodwardweb.com/Windows-Live-Writer/TFS-from-the-Raspberry-Pi_FF5C/WP_000861_2.jpg)Update:** I was getting some questions on Twitter, so just to explain how small this device is [here](http://www.woodwardweb.com/Windows-Live-Writer/TFS-from-the-Raspberry-Pi_FF5C/WP_000861_2.jpg) is a picture of it against my Microsoft ID Card (which is credit card sized). The Raspberry PI is almost exactly the same size. The ARM CPU on it is about the size of a thumbnail – much smaller than the HDMI and Ethernet connection it is attached to. Really nice piece of kit for $25 if you can get hold of one.

All this was anti-climatically easy. I’m going to have to figure out what to do as my next Raspberry Pi project. Now that I have an API I can use for TFS, I’m thinking about doing a Wallboard display application to display stats from my TFS server (such as latest build status, latest check-ins and work item assignments etc) from the device onto a cheap HDMI TV set in my office – but if anyone has any other ideas let me know.
