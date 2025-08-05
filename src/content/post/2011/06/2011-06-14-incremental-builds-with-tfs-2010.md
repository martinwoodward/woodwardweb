---
title: "Incremental Builds with TFS 2010"
date: 2011-06-14T05:53:23.000Z
# post thumb
images:
  - "/images/post/2011-incremental-builds-with-tfs-2010.jpg"
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

When you create a new build definition with TFS 2010 by default it does a clean build for you every time.  That is to say that between builds all the source from the previous build is deleted along with the compiled outputs and then the source is downloaded fresh, built and you are good to go.  There is a good reason for this to be the default – it is the safest option.  If your build script messes around with the files in your source directory at all (perhaps baking in a build number into the AssemblyInfo files etc) then you want to get a clean workspace to ensure that you are back to a known good state.  

However, if you know what you are doing then there are couple of really good reasons why only building the things that changed between builds would be very useful:     **Speed** – if you are doing CI builds (which you should be doing if you are not BTW) then the only thing that will have changed between builds to the same build agent are the contents of a single check-in – a single changeset.  If you are checking in regularly (which you should be doing BTW) then these changesets usually contain a small number of changes.  Downloading only the files that have changed between builds speeds things up but also only compiling new versions of assemblies that have been affected saves even more time.    **Differential Deployment** – For websites it makes a lot of sense to use something like robocopy to deploy the output of a build to a directory used by a test IIS instance.  By using robocopy you can specify that only the files that have changed should be copied over.  When TFS does a get into a clean workspace the files did not previously exist in that location on disk.  Therefore the creation date and modification dates of the source files are taken as the time at which they are downloaded to the machine – i.e. the time of doing a get.  By switching to incremental builds files which haven’t been touched are left alone so older files keep their timestamps.  Only the changes files have a new timestamp.  Utilities such as robocopy can therefore easily identify these and therefore only deploy the changes files over to IIS.  IIS then sees that the file is new and so compiles it first time that page is accessed or a page references an assembly that has been updated.   

Traditionally, in the world of build solutions, incremental builds were always treated with a bit of “[Here be dragons](http://en.wikipedia.org/wiki/Here_be_dragons)”.  Many version control systems can leave orphan files around in your local working copy when you update to the latest version from the server (for example in the case that a file was deleted, moved or renamed on the server).  TFS however cleans up your workspace as you go along so that when you do a *get* deleted files are deleted from your local file system, as are the old versions when you do a rename/move etc.  ### Enabling Incremental Builds with TFS 2010  

To enable incremental builds, edit the build definition in Visual Studio 2010 and set the Clean Workspace property to “None”.  

Note that there are a few options for Clean Workspace, All; Outputs; None – take a look at the handy property help text to learn more about what they mean. For example Outputs is useful if you want the benefit of not downloading all your source every time but are not able or do not trust the ability to incrementally compile your binaries.  

Your mileage may vary depending on your build process and what you do during it.  Depending on assumptions made during and build customization work you have done you may indeed need to re-engineer the way that you do your build to be able to reap the benefits of incremental builds.  Also, you may want to do things like incremental builds to a dev test instance but a full clean build for your nightly drop to a QA test environment.  Also remember that even with a CI build set for incremental builds, you can at any time Queue a manual build from Visual Studio by right clicking on the build definition in Team Explorer.  From there you can (if you wanted) set the Clean Workspace property to All for your manual build if something funny was going on and you just wanted to reset everything – and if you are really fancy you might even do it so that a deployment of a clean build to IIS not only copies all the files over fresh but forces an IIS Reset for the true belt and braces approach.