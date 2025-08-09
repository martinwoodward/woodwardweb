---
title: "Virtual Machine Additions for Linux"
date: 2007-10-23T13:25:49.000Z
# post thumb
images:
  - "/images/post/2007-virtual-machine-additions-for-linux.jpg"
#author
author: "Martin Woodward"
# description
description: "Version 2.0 of Virtual Machine Additions for Linux enhances support for RedHat and SuSE systems, with mixed results for Debian users."
# Taxonomies
categories: ["technology", "maker", "web", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Yesterday, [Version 2.0 of the Virtual Machine Additions for Linux](http://www.microsoft.com/downloads/details.aspx?familyid=bf12642f-77dc-4d45-ae4e-e1b05e0a2674&displaylang=en&tm) were released on the Microsoft Download Center.  Officially, this provides addition support for Virtual Server 2005 SP1, however I have read reports from the beta program suggesting they may also work under Virtual PC (albeit unsupported).  The additions are for RedHat and SuSE based Linux distributions.  I tried converting the supplied RPM files into .DEB files for installation in Ubuntu, but the scripts would then get installed specifically test for being installed on a Debian distribution and fail early.  If I was feeling adventurous I'd remove these checks and see what happened - but my Linux knowledge is a little sketchy so I'll stick with VMWare for now for heavy duty Ubuntu use until I read about someone clever getting them up and running.