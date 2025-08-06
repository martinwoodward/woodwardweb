---
title: "Bulk Editing a Build Definition Workspace Mapping"
date: 2010-02-23T11:15:14.000Z
# post thumb
images:
  - "/images/post/2010-bulk-editing-a-build-definition-workspace-mapping.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover how to efficiently bulk edit workspace mappings in your build definitions, streamlining your setup process for complex projects."
# Taxonomies
categories: ["git", "tfs", "technology", "maker", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
This morning I was creating a new build definition for the Beta branch of the initial Microsoft release of the Teamprise acquired bits.  Creating a new build definition in Visual Studio 2010 is remarkably easy, but we have a fairly complex workspace template.  Our files are stored in version control in a way optimised to make it easy to get the source and build/debug in locally in Eclipse rather than for the automated Ant based build.  Because we have a lot of plug-ins, Eclipse features etc that make up our build we actually have over 30 separate entries in the workspace section of the build definition.  Is looks something like the following:  

[](http://www.woodwardweb.com/WindowsLiveWriter/BulkEditingaBuildDefinitionWorkspaceMapp_9DD0/tpbuildmain_2.png)   

When developers want to run a full Ant build locally (as opposed to doing a debug session in Eclipse), we have a script file that creates the workspace for them. We actually have two workspace creation scripts, one that is for Windows machines and another shell script that is for Mac/Linux etc.  Both are just wrappers around the [Team Foundation Server command line (tf)](http://msdn.microsoft.com/en-us/library/cc31bk2e(VS.100).aspx).  

When I originally created the main branch build definition, I did this using the often overlooked “Copy Existing Workspace…” button at the bottom of the Workspace section of the build definition and pointed to the local workspace I was using to test the Ant build once we’d moved over to Microsoft.  This was great as it saved me entering all 30-odd working folder mappings again and it is very clever, calculating a common root folder to use as the $(SourceDir) folder.  

However, this morning I wanted to create a new build definition from a branch that I’d created ($/TP/Releases/Dev10-beta).  I didn’t have a local mapping that was pointing to the release branch.  I could easily create one using our workspace creation script – however I wondered if there was an easier way.  And it turns out there is, good old copy/paste!  

I simply clicked on a row in the workspace section, did Ctrl-A to select all then Ctrl-C to copy all the rows.  I then went into my favorite text editor (in my case Notepad2) and pasted the results.  

[](http://www.woodwardweb.com/WindowsLiveWriter/BulkEditingaBuildDefinitionWorkspaceMapp_9DD0/tpbuildnotepad_2.png)   

I then did a simple Find/Replace to convert all $/TP/main/ entries to my release branch $/TP/Releases/Dev10-beta.  Did a Ctrl-A to select all and then a Ctrl-V to paste them back into my build definition for the release branch.  

[](http://www.woodwardweb.com/WindowsLiveWriter/BulkEditingaBuildDefinitionWorkspaceMapp_9DD0/tpbuildrelease_2.png)   

A nice simple way of bulk editing a complex working folder mapping template that Just Worked(tm).  Note that the copy/paste trick also works in Visual Studio 2008 as well as the Teamprise 3.3 release (and of course the beta release that I was setting up the new build definition for).