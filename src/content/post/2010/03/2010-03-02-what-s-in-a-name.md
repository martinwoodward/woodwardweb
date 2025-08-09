---
title: "What’s in a Name?"
date: 2010-03-02T21:03:32.000Z
# post thumb
images:
  - "/images/post/2010-what-s-in-a-name.jpg"
#author
author: "Martin Woodward"
# description
description: "Explore the challenges and evolution behind rebranding Teamprise to Microsoft Team Explorer, reflecting its legacy and broader reach."
# Taxonomies
categories: ["tfs", "technology", "dotnet", "maker", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
When the Teamprise technology was acquired by Microsoft, one of the first non-TFS 2010 feature things that we knew we needed to do was change the name.  You’d think re-branding would be simple, just do a global search and replace for “Teamprise” and replace with the official Microsoft name – and then reformat everything because the Microsoft name is obviously going to be longer :-)  Obviously nothing is that simple.  It took a while before we decided on a name, at the moment we are *Microsoft Team Explorer 2010 codename “Eaglestone”* – which in the team we sometimes abbreviate to “TEE” (because it is shorter, but it is also handily a slight homage to the Teamprise logo which is the T power button).  

However, in the past we used “Teamprise” to mean different things.  For example we have “Teamprise” views in Eclipse.  When you whent to import a project from Team Foundation Server you selected “Teamprise”.  Sometimes we used Teamprise as a product name, sometimes as a metaphor for accessing TFS. Sometimes we used it under the covers as well – for example as the name of an annotation in version control when storing check-in polices or as the layout type when doing work item forms.    

[](http://www.woodwardweb.com/WindowsLiveWriter/WhatsinaName_9CB5/tp_montage_2.png)   

This was a deliberate decision at Teamprise.  When we started we were just a plucky start-up convinced that we were one of many working to put TFS into Eclipse.  We wanted to make our name synonymous with accessing TFS from Eclipse so that people would think of us instead of a competitor.  But we also wanted to allow competing products to exist in the same Eclipse installation so that users had choice as to which TFS connector they used and it wasn’t too confusing for them.  Largely this was a success.  We got a solution to market at the right time and managed to keep improving the technology and a competing product never really appeared.  To people who know Team Foundation Server, Teamprise == TFS in Eclipse and Teamprise == TFS cross-platform.  

But, there was a whole world of people that we didn’t reach.  People would always need to know to ask “How do I connect to TFS from Eclipse, or How do I connect to TFS from the Mac” and be given the answer of Teamprise (either by a person or a search engine).  

Now that we are part of the Team Foundation Server team, it doesn’t make sense to be as “visible” anymore as a brand in the UI.  When you are connecting to Team Foundation Server in Eclipse or want to see Team Foundation Server resources – you should look for Team Foundation Server.  When looking for how to connect to TFS from Eclipse, you should look for the product that contains a “Team Foundation Server plug-in for Eclipse”.  It is now Team Foundation Server we want you to connect with (both literally, and from a branding perspective).  All this means that it is more complicated than just doing a search/replace in the UI as now we need to figure out when we were using Teamprise to talk about TFS and when we were using it to talk about the software that you plug-in to Eclipse.  

[](http://www.woodwardweb.com/WindowsLiveWriter/WhatsinaName_9CB5/tee_montage_2.png)   

And then there was package renaming.  All of our code used to be in com.teamprise packages.  Some classes were called things like “TeampriseLogConfiguration” etc etc.  In each case decisions had to be made on individual merit rather than being able to come up with a simple automated cookie cutter approach.  

The following is what we ended up with:     In the UI, when talking about connecting to Team Foundation Server use that name and the TFS icon.    Packages moved from com.teamprise.* to com.microsoft.tfs.*.    Class names sometimes went from Teamprise* to TFS* or TEE* depending on use, or got a different name entirely.    Eclipse plug-ins moved from com.teamprise.* to com.microsoft.tfs.*.   We also took the chance to do some refactoring here to make the plug-in names more sensible now that the codebase is much more mature and the roles and responsibilities of each plug-in is better defined than it was back at V1.0 of Teamprise when some of them were originally created.    Extension points moved from com.teamprise.* to the appropriate plug-in com.microsoft.tfs.* based name.  This is important if you were previously using the Teamprise extension points to add integration into our plug-in from yours.  I’ve spoken to the customers and partners that I knew of that were doing this – however I expect more will want to once we make the initial Microsoft release and so we wanted to get the naming right now.    Check-in policies keep their Teamprise based annotation names in version control.  This fact is totally transparent to end users, but means that we retain backwards compatibility with older Teamprise client defined check-in policies.  It also means that partners like JetBrains who have their own check-in policy implementation in the IntelliJ IDE that uses the “Teamprise” scoped mechanism for check-in policy storage need not change their code.    The .tpattributes file lives on as the file that is used to store unix execute bit permissions etc, the .tpignore file lives on as the file you can use to specify resources that Eclipse should ignore.  Again this was for backwards compatibility.  We could have gone down a route where we searched for “.tfsignore” first etc but we’re hoping to be able to reduce the need for these files at some point in the future by making use of the new properties capabilities in TFS 2010 so we decided to leave alone.    In the work item layout target names, “Teamprise” used to be the name of a layout target that was for the Teamprise client.  “Teamprise” is still accepted (for back-compat) but a layout with the target name “JavaSWT” now takes preference.  Therefore when we are looking for a layout target in Eclipse we look for one called:     
         “JavaSWT”, followed by       “Teamprise” followed by       “WinForms”, followed by       the last unspecified layout.           

If all this talk of layouts doesn’t mean anything to you then do not worry.  Neno has a [good post here](http://msmvps.com/blogs/vstsblog/archive/2007/08/29/creating-a-separate-work-item-form-layout-for-web-access.aspx) where he talks about using separate layouts for Web Access and Visual Studio where you will get the idea.   

Hope that makes sense, we will have a beta out soon where you can take a look for yourself.  The moral of this story is that if you have to re-brand your codebase due to acquisition then be prepared that it will take more thought and effort than you might have originally estimated.