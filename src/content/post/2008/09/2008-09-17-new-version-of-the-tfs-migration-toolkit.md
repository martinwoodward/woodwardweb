---
title: "New Version of the TFS Migration Toolkit"
date: 2008-09-17T06:59:58.000Z
# post thumb
images:
  - "/images/post/post-1.jpg"
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

[](http://www.codeplex.com/MigrationSyncToolkit) In a [recent episode of .NET Rocks](http://www.dotnetrocks.com/default.aspx?showNum=373), we got talking about migrating to TFS and taking your SCM history with you.  If you really wanted to go through the pain of doing this then the [TFS Migration and Synchronization Toolkit](http://www.codeplex.com/MigrationSyncToolkit) project on CodePlex is a good starting point to write a bespoke migration script.  As well as providing a framework for migration code along with samples, the project also includes some low-level direct web-service hacks that let you do some things that the officially supported .NET API do not.  Normally this would scare me, but with this project you have the comfort of knowing that the code actually comes from people at Microsoft including some of the same people that work on Team Foundation Server itself.  They have just released a new version of the tool with better TFS 2008 compatibility. From the [project site](http://www.codeplex.com/MigrationSyncToolkit):     ##### *Key features of the Toolkit *         *Ability to migrate historical data for VC and WIT *      *Ability to migrate individual projects independent from one another *      *Bi-directional synchronization of data between TFS and another system allowing teams to transition over time *                 *Enables integration of TFS with other VC and WIT systems (i.e. using TFS for VC but a proprietary system for bug tracking) *                  *Includes several reference implementations to demonstrate Toolkit capabilities and provide an example to tool authors *      

The related [TFS to TFS Migration Tool](http://www.codeplex.com/tfstotfsmigration) has also been updated.  If you are interested, please take a look at the project pages on CodePlex.     [Migration and Synchronization Toolkit](http://www.codeplex.com/MigrationSyncToolkit)    [TFS to TFS Migration Tool](http://www.codeplex.com/tfstotfsmigration)   

If this sort of thing interests you, then you might also want to keep an eye on the [TFS Migration Blog](http://blogs.msdn.com/tfs_migration/default.aspx) for more details.