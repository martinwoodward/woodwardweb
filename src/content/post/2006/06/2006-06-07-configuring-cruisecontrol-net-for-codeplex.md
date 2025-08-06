---
title: "Configuring CruiseControl.NET for CodePlex"
date: 2006-06-07T04:37:08.000Z
# post thumb
images:
  - "/images/post/2006-configuring-cruisecontrol-net-for-codeplex.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["tfs", "technology", "dotnet", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

Apologies for being quiet on the blogging front lately, we’ve been busy getting ready for TechEd in Boston next week. I’ll soon be able to share some exciting news so stay tuned. One of the areas I have been playing with in my spare time recently is with [CodePlex](http://www.codeplex.com/) – the new developer community site from Microsoft that uses Team Foundation Server for Version Control and Work Item Tracking. I noticed that the Turtle project had a work item to configure CruiseControl.NET to talk to their project tree so I thought I’d quickly describe how to do it here in case anyone else is interested.

First things first, you’ll need to install [CruiseControl.NET 1.0](http://ccnet.thoughtworks.com/) on your build server, the [TFS Client](http://download.microsoft.com/download/2/a/d/2ad44873-8ccb-4a1b-9c0d-23224b3ba34c/VSTFClient.img) and also the [TFS Source Control Block](http://prdownloads.sourceforge.net/vstsplugins/ccnet_vsts_plugin_1_2_0_bin.zip?download) from [VSTSPlugins](http://vstsplugins.sourceforge.net/). (To be honest, you don’t actually need to install the TFS Client, you could just copy the [appropriate assemblies](http://vstsplugins.sourceforge.net/index.php/archives/news/2006/11) into the CruiseControl server directory).

Then, you have to configure the source control block (along with your tasks and publishers) in your ccnet.config file. Below is an example:-
<cruisecontrol>
<project name="CodeplexExample">
<sourcecontrol type="vsts" autoGetSource="true" applyLabel="false">
<server>https://tfs01.codeplex.com</server>
<username>**USERNAME**\_cp</username>
<password>**PASSWORD**</password>
<domain>SND.RNO.GBL</domain>
<project>$/Foobar</project>
<workingDirectory>c:\source\Foobar</workingDirectory>
</sourcecontrol>

        <tasks>
            <msbuild>
                <executable>C:\WINDOWS\Microsoft.NET\Framework\v2.0.50727\MSBuild.exe</executable>
                <workingDirectory>c:\source\Foobar\FoorbarConsoleApp</workingDirectory>
                <projectFile>FoorbarConsoleApp.sln</projectFile>
                <buildArgs>/noconsolelogger /p:Configuration=Debug /v:diag</buildArgs>
                <targets>Build</targets>
                <timeout>15</timeout>
                <logger>ThoughtWorks.CruiseControl.MsBuild.XmlLogger,ThoughtWorks.CruiseControl.MsBuild.dll</logger>
            </msbuild>
        </tasks>

        <publishers>
            <!-- Insert publishers here -->
        </publishers>

    </project>

</cruisecontrol>

Remember to substitute “USERNAME” and “PASSWORD” for your appropriate values. Note that your username should be suffixed with \_cp. In the example above, I’m using the MSBuild Task – more information on that is available [here](http://confluence.public.thoughtworks.org/display/CCNET/MsBuild+Task).

Anyway, it all seems to work perfectly. All this has reminded me that I want to fix / improve a few things with the CruiseControl.NET plugin – better add that to my todo list – but hopefully it should be good to get people started.

**Update:** As I’m currently sat in a Hotel room I figured I should just make [those changes](http://vstsplugins.sourceforge.net/index.php/archives/news/2006/13). They appeared to be easier than I thought and worked first time – but I’ve probably introduced a few new bugs. Anyway, feel free to download the [latest version](http://vstsplugins.sourceforge.net/index.php/downloads/) and let me know how you get on.
