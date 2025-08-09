---
title: "Changeset comments are editable in TFS"
date: 2009-10-13T12:13:56.000Z
# post thumb
images:
  - "/images/post/2009-changeset-comments-are-editable-in-tfs.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover how to edit changeset comments in TFS 2008, a surprising yet useful feature for enhancing metadata clarity."
# Taxonomies
categories: ["git", "tfs", "technology", "maker", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
A feature of changeset metadata in Team Foundation Server 2008 is that it is actually editable.  If you look at the changeset details for a historical check-in in Visual Studio you will notice that the comment and check-in notes fields are enabled and there is a “Save” button. This is by design, but I have known customers that find this fact very surprising.    

In fact people are so surprised that this is even possible that in [Teamprise](http://www.teamprise.com) we currently do not provide a way to edit the comment or check-in notes and guess how many customer requests we have had so far to add it?  I’ll give you a clue – it’s less than 1.  

Anyway – apart from removing the odd bit of unsavoury language from a frustrated late night check-in, today I found a handy use for updating the comments after the fact.  

In TFS 2008 SP1, Microsoft introduced a new feature in the server – to allow branches to be created and committed in a single operation.  This is exposed in the command line using the tf branch /checkin option or through the API using the undocumented VersionControlServer.CreateBranch method.  Creating a branch in this way is very fast because it bypasses the whole requirement to have a workspace created, working folders mapped, a branch to be pended and then the branch finally checked in.  It also uses significantly less server resources to perform which is why the feature got added in the first place.  Microsoft have some very large branches that they manage in TFS :-)  

The problem with the current version of the CreateBranch method is that it doesn’t add a comment to the changeset during the branch operation.  But you can, as we now know, add a comment after the fact.  Below is a code snippet to demonstrate this:     

public void CreateBranchWithComment(        

    string serverUrl,         

    string sourcePath,         

    string targetPath,         

    string comment)        

{       

    TeamFoundationServer tfs = new TeamFoundationServer(serverUrl);        

    VersionControlServer vcServer =         

        (VersionControlServer)tfs.GetService(typeof(VersionControlServer));        

    int changesetId = vcServer.CreateBranch(        

        sourcePath,         

        targetPath,         

        VersionSpec.Latest);        

    Changeset changeset = vcServer.GetChangeset(changesetId);        

    changeset.Comment = comment;        

    changeset.Update();    

}   

Hope that helps somebody.  In TFS 2010 there is an additional overload of the CreateBranch method that allows you to optionally specify many things about the changeset created including a command and check-in notes so this workaround isn’t  necessary there.    

Remember, use your new found changeset comment altering powers for good rather than for pranking your colleagues.