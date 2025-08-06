---
title: "Workspace 101: An introduction to TFS Workspaces"
date: 2007-02-27T15:54:38.000Z
# post thumb
images:
  - "/images/post/2007-workspace-101-an-introduction-to-tfs-workspaces.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["git", "tfs", "technology", "gadgets", "teamprise", "web", "programming", "podcast"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
One of the concepts that people need to understand when they begin to work with Team Foundation Server Version Control is that of the Team Foundation Server (TFS) Workspace. So I thought I would write a series of blog-posts covering the basics of TFS workspaces, with this post being the first. This information may be a little basic to many of the people who read my blog (especially this first post) and it is just a write up of how I think about workspaces and how I explain the concept to others. If you have any additional information to add or comments to make then please do.  Also, if you are new to TFS then you probably want to take a read of the help documentation over at [MSDN](http://msdn2.microsoft.com/en-us/library/ms181383(VS.80).aspx) and in the [Teamprise User Guide](http://help.teamprise.com/2.0/index.jsp?topic=/com.teamprise.help/plugindoc/gs_workspace_manage.html) as there is some great information there on this topic. 

Ok.  One of the first problems people have with workspaces is that the term is a little overloaded – this is especially true to users of the [Teamprise plug-in for Eclipse](http://www.teamprise.com/) as an Eclipse “Workspace” is an entirely different entity that, though related, has very different functions to the TFS workspace. 

Conceptually, I like to think of a TFS workspace as a container that bridges the gap between your local computer (acting as a TFS client) and the server. 

A TFS Workspace contains several important bits of information. A workspace is identified by its name and its owner. The workspace name can be up to 64 characters in length, and the name must be unique for a given owner. The workspace also contains the hostname of the computer that the workspace is associated with and there is room for you to give your workspace a comment (a good idea when you have multiple workspaces so you can remind yourself what they are for). A workspace also contains the working folder mappings – the links between your computer’s hard drive and the TFS version control repository. You can also picture the workspace as the way in which the TFS server keeps track of which files you have downloaded, what versions of those files you have and which ones you have pending changes and / or locks against in your local file system. 

By using workspaces to remember files and versions downloaded TFS can use this information to massively optimize the network traffic between your computer and the TFS server. When you ask the server to “Get Latest”, it already knows what versions you have of everything so it can simply send you what has changed. This is one of the design decisions that the team at Microsoft took to optimized for distributed teams working over wide area networks. The TFS workspaces is therefore a central piece in ensuring two of the key principles in the way TFS Version Control behaves:-   Only send the information between server and client that you need to send  Only do this when I tell you to 

However, to get the benefit of this reduced network traffic, you have one very important price to pay.   Talk to TFS when you do something to a file or folder that is in version control 

TFS does some neat tricks with workspaces to keep them up-to-date. If somebody renames a file in source control then your local file gets renamed when you do a “Get Latest”. If someone deletes a file, then your local copy gets deleted when you do the “Get”. This way, you are not left with old stale files on your local hard drive like you do when using VSS or CVS etc. 

Speaking of "Get Latest", when you do a “Get Latest” a few things happen. Any versions of files that you do not yet have are downloaded and placed into the directories you told it to put them in when you created a working folder mapping. Those files are then marked as read-only in the local file system. To edit a file, you must check the file out. 

When you do a check out, what you are actually doing is saying “TFS, I would like to edit the version of the file that I have already downloaded, is that ok?” TFS then looks at that version, and tells you if you can edit it or not (based on your security permissions at that point in time and if anyone else has placed a lock on the file). If you can edit the file, the TFS marks the file as read/write on your local machine and allows you to proceed. 

When you have finished editing, you check-in the file. Before the code is committed to the server, the server looks at what version you had locally (by looking in your workspace) and compares this with the latest version on the server. If someone else has edited that file since the last time you did a “Get Latest” into your workspace then the server will ask you what to do with that conflicting edit. 

Once you get to the position that you have no conflicts in the list of pending changes that you wish to commit, you can then check-in your code and it will get committed to the source code repository as a new changeset.  The server also updates its record of your workspace to say that you already have this new version of the file locally. 

In summary, TFS workspaces are the way in which the server can keep track of which versions of what files you have on a given machine, where you have them on that machine and what changes you are in the process of making.   

Hopefully, you can start to see some implications of the way in which TFS workspaces are used by the server.  For example, if you un-mark a file as read/write, edit it and then do a "Get Latest" on that file then it will not be replaced with the latest version from the server (because you never told the server you were messing with that file so it assumes it you didn't).  In that scenario you would want to use the "Get Specific..." option to force a get of the file - but we'll cover all this type of stuff later on.  That is enough for now. As I say, In future posts we will look in [more detail at working folder mappings](http://www.woodwardweb.com/teamprise/000334.html), things that users frequently do that confuse TFS and how to use TFS workspaces to maximise your productivity helping you to get the best out of the excellent version control facilities provided by TFS.  I hope this post proves useful for someone.