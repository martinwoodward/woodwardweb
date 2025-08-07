---
title: "Increasing the size of a VMWare Disk"
date: 2008-05-15T12:37:29.000Z
# post thumb
images:
  - "/images/post/2008-increasing-the-size-of-a-vmware-disk.jpg"
#author
author: "Martin Woodward"
# description
description: "I am currently playing with SP1 of VSTS 2008 and TFS 2008 in a Windows Server 2008 VMWare instance I have."
# Taxonomies
categories: ["git", "tfs", "technology", "gadgets", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

I am currently playing with [SP1 of VSTS 2008 and TFS 2008](http://blogs.msdn.com/bharry/archive/2008/05/13/vs-vsts-tfs-2008-sp1-beta-is-now-available.aspx) in a Windows Server 2008 VMWare instance I have. Whenever I created this particular instance I kept the disk space at 16Gb which is normally plenty for these play instances but after installing the service pack of VSTS my disk space was getting low.

I thought I would try extending the size of my virtual disk and it was suprising easy. First, I had to take a fill clone my image to remove the snapshot history. The on the new clone's disk I executed the following command:

"C:\Program Files (x86)\VMware\VMware Workstation\vmware-vdiskmanager.exe" -x 32Gb win2008-000004-cl1.vmdk

This extended the disk size, now I need to extend the size of the partition. Boot up the virtual Windows 2008 server, right click on "My Computer" and select "Manage". Go To Storage, Disk Management and then right click on the C: partition and select Extend to extend the partition the the size of the remaining disk.

Tada. No third party tools (like Partition Magic etc) needed.
