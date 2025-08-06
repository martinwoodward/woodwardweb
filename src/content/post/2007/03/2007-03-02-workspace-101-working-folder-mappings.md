---
title: "Workspace 101: Working Folder Mappings"
date: 2007-03-02T15:04:48.000Z
# post thumb
images:
  - "/images/post/2007-workspace-101-working-folder-mappings.jpg"
#author
author: "Martin Woodward"
# description
description: "So in my previous post, I introduced the concept of a TFS workspace."
# Taxonomies
categories: ["git", "tfs", "technology", "gadgets", "maker", "teamprise", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
So in my [previous post](http://www.woodwardweb.com/teamprise/000333.html), I introduced the concept of a TFS workspace. If you only have one TFS workspace then you might have so far been blissfully unaware that you had one. This is because one is created for you automatically when you first use the Visual Studio Team Explorer UI – you’ll see it in a little drop down at the top of your pending changes window and at the top of your source control explorer view. By default, a workspace is created with the same name as your machine name (in my case, Vista-M70 for my lovely [Dell Precision M70 running Vista](http://www.woodwardweb.com/vista/000322.html)). 

A little gotcha here is that these two drop downs are actually not connected. If you have multiple workspaces on your machine then in Visual Studio you have to change the drop down in both places if you want to see pending changes and source control view for the same workspace (which you usually do). Lucky users of Teamprise Explorer do not have to remember this – there is only the one drop down to switch for those folks ;-) 

However, whether you knew it or not, if you’ve been using TFS version control, you are using workspaces. As previously discussed, a workspace contains the working folder mappings. Fair enough, but what the heck is a working folder mapping? #### What is a working folder mapping? 

A working folder mapping is a link between the local computer file system and the path to the file in the repository.  

In Team Foundation Server, the working folder mappings are stored in your TFS workspace. They are not shared between anyone else (unlike PVCS for example) and it is very easy to get a list of all your working folder mappings – in Visual Studio go to File, Source Control, Workspaces... Select your workspace and press Edit... 

As you can see, I have one working folder mapping here – a bit easier than tracking them all down in Visual Source Safe eh? A repository path in TFS always starts with “$/”, and the local folder is the path on your local file system. In the above example we map “$/demo” in TFS to “C:\code\demo” on my machine as an Active working folder mapping. We’ll talk about the other type of working folder mapping, a “Cloaked” working folder mapping, later in this post. 

When you first do a “Get Latest” in source control explorer or the first time you clicked on the .sln file, you were prompted for a local folder to download the code into – this is because the TFS client creates a working folder mapping for you if you didn’t have one. Memory has it that this was actually behavior that was introduced later on on in the original TFS development cycle - I think up until Beta 3 of VSTS you had to manually add workspace mappings by going to the edit workspace dialog.  I certainly remember that I was introduced to the workspace concept early on in my involvement with TFS and once I had got over that learning hump, it helped me later on. 

Users of the Teamprise [TFS plug-in for Eclipse](http://www.teamprise.com/product/plugin_eclipse.html) will note that when they run the Import wizard to bring projects into their Eclipse workspace they are actually not prompted for a local folder – that is because the way “Import” works in Eclipse is to bring that code into your local workspace folder – so the plug-in works out where Eclipse is going to place this folder for you and maps it accordingly. 

The problem is that by making all the clients so easy to use, new people to TFS are often un-aware that the working folder mapping was created for them and so can get into trouble later on. The reason folks get into a bit of trouble with working folders in TFS v1 is there are a few restrictions to do with working folder mappings. The main one that confuses people is that there is a one-to-one mapping between local folders and repository paths. 

This sounds obvious at first, two local paths cannot point to the same place in the repository for the same workspace. However, the one that catches a lot of folks un-aware is that you **cannot have two repository paths mapped to one local path** on the same computer. 

If you [think back](http://www.woodwardweb.com/teamprise/000333.html) to our discussion about the clever stuff TFS does with workspaces to keep them up to date, it deletes / moves files for you when they have been deleted / moved etc on the server. This is great behavior and a welcome relief from the VSS and CVS days. However think what would happen if you had two repository folders pointing to the same working folder and you had a file with the same name in both server paths...  

Once you think about this it is obvious why the restriction exists – the only problem is that some folks used to use the fact that SourceSafe allowed two folders to point to one as part of their software management process. If you were one of these people and you would like to use TFS then you need to re-think your approach (consider branching techniques or build scripts that copy everything around to where is needs to be in some staging area) 

Wow, this post is turning out to be a long one, but I promised you I would talk about the other, much less well known, working folder type of “Cloaked”.  #### Engage Cloaking Device 

A cloaked working folder is a child an active working folder. Is tells the server that you do not want to download files under that directory. You do not want them to appear in your local folder. 

Consider this scenario. You want to bring down the contents of an entire Team Project – possibly to develop on or perhaps to do a build. However, in one of (say) the 20 folders you have a folder that you do not want to download or receive updates to. Perhaps it contains lots of large word documents about an area of the system that you have no interest in. Perhaps it is a project that your particular solution does not need, but it needs most of the rest of them. In this case you can cloak the unwanted folder and next time you do a “Get Latest” it will be removed from your file system. Now you are able to do a “Get Latest” at the parent folder and receive updates for everything – apart from the folder you are not interested in. If it wasn’t for cloaked folders then the only alternative would have been to create active working folders for everything, but the one thing you didn’t want – which could be a time consuming and error prone process depending on your circumstances. Many users of TFS will never need to use a cloaked working folder mapping (I personally do not have to for the Teamprise source code) – however the ones that do are awfully glad they exist! 

Right then. I feel this post has gone on long enough. If anyone has any other working folder mapping gotchas that they think others would benefit from feel free to add them to the comments of this post. In my next installment in this series I’ll be talking about how people get themselves into a mess with workspaces, how to avoid it and some tips on how to recover. I’m also planning one that explains how to use multiple workspaces on one machine to improve productivity for certain types of tasks and discuss some sensible workspace naming best practices. Again, if anyone has anything they would particularly like covered then let me know in the comments or drop me a [mail](javascript:var dom=).