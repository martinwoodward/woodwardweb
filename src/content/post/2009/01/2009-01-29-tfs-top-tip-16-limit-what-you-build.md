---
title: "TFS Top Tip #16 - Limit What you Build"
date: 2009-01-29T16:39:03.000Z
# post thumb
images:
  - "/images/post/2009-tfs-top-tip-16-limit-what-you-build.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["git", "tfs", "technology", "dotnet", "maker", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
When you create a new build definition in Team Foundation Server, you get to define how the workspace looks for the build.  By default this includes the ENTIRE team project.  While this **usually always works**, it is nearly always **not what you want**.  #### **Build Definition = What, How and When**  

You can think of a build definition as you telling TFS "What, How and When" you want to build something.  The "What" is covered by the workspace template.  The "How" is covered by the Project File (the TFSBuild.proj file in TFS2005 or TFS2008 or the WF Process in TFS2010).  The "When" is the trigger.   

If you think about it, the "What" is pretty important. Not only does it include the files that are downloaded for your build, it also informs the trigger.  If you have set a build to run on every check-in then it needs to know what you are building to determine if the check-in applies to it.  If you set your "What" to be too broad then you will build when you don't need to.  If you set your "What" too narrow, then your build will not be triggered by files that impact the build.  This will become even more important when Gated Check-ins come along in TFS 2010, but doing this now will dramatically speed up the performance of your builds and mean that CI builds are done when something that you care about changes.  Let's take a look at the workspace template definition screen as it gets populated by default:  

Notice that we have the server path of the Team Project mapped to the $(SourceDir).  You can click on either of these paths and edit them.  Most of the time, you just want to edit the server path to restrict it to the root of the project that you want to build such as:  

If you only learn one thing from this tip, then the above is all you really need to know to make your experience with Team Foundation Build much nicer.  However, the working folder mappings can get quite complicated if you want to.  #### **Excluding Certain Folders from the Build.**  

Now, lets take a different scenario. Suppose you are working on a web site. You have your graphic designers also checking in their digital assets into the $/AdventureWorks/main/dotnet/Wallboard/assets folder in the project but you don't want to create a new build when they check in their huge Photoshop files - especially as the .psd files are not actually used in the website, just the .gif and .jpg files that they generate from the .psd's.  In this case you can use a cloaked working folder mapping to tell TFS to ignore those files from the trigger and when downloading source before a build.  

   #### **Building from Multiple Places**  

Another scenario you might be faced with is building two things at the same time from different parts of your source tree.  That's easy - simply add another Active working folder mapping and adjust your LocalFolder mappings accordingly:  

   #### **What Variables are Allowed?**  

In the Local Folder mapping you can hard code paths, but it isn't recommended.  There are two variables that can be used, $(SourceDir) and $(BuildDir). BuildDir is the build directory as defined in the build agent definition. $(SourceDir) is usually $(BuildDir)\Sources.  The "Sources" part is actually not hard-coded and can be modified by editing the TfsBuildServer.exe.config on the build agent machine if you wanted.  For example if you changed     

<add key="SourcesSubdirectory" value="Sources" />   

to be      

<add key="SourcesSubdirectory" value="s" />   

then $(SourceDir) would get expanded to $(BuildDir)\s on the build agent.  Therefore, $(SourceDir) is by far the most useful option.  That said - if you wanted to make your build to be triggered to changed to the TFSBuild.proj file, but for backwards compatibility with VS2005 you had your build configuration folder in the default "$/TeamProject/TeamBuildTypes" folder instead of the project's branch (which would be my recommended location) then you could use the $(BuildDir) variable to trick TeamBuild into triggering a build when the TFSBuild.proj file were modified by setting your build configuration as follows:  

By setting the server path to "$/AdventureWorks/TeamBuildTypes/Wallboard CI/*" and the local path to "$(BuildDir)\temp" we are telling Team Build to include the files in the root of the build configuration folder but to place them outside of the SourceDir so that they do not confuse our build process.  Note that in 2008 working folder mappings because a lot more flexible, so you can now map the root level of a folder using the Asterisk (*) wildcard and you can also map individual files as active or cloaked working folder mappings if you want to include or exclude individual files.  

In summary, spend some time to think about what you want included in your build and do not be afraid to have your version control repository organized in a way that makes building it simple. One of the biggest problems when people move to a new version control system is that they inherit the repository layout from their old system rather than sitting down and thinking about what makes most sense with the new features or restrictions of the system that you are moving to.  Happy Building!