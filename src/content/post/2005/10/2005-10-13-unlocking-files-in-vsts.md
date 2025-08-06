---
title: "Unlocking Files in VSTS"
date: 2005-10-13T12:19:30.000Z
# post thumb
images:
  - "/images/post/2005-unlocking-files-in-vsts.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories:
  ["git", "tfs", "technology", "gadgets", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

Just posted a reply to the VSTS Forums, but this is such a common question that I thought I'd post the response here in a place that Google is more likely to stumble across it. The problem is when somebody leaves a file checked out from Team Foundation Source Control (formally known as Hatterras).

If you want to do anything advanced with Team Foundation Source Control, then you will need to get friendly with the command line. This used to be called h.exe but is now tf.exe.

The command line reference can be found at [http://msdn2.microsoft.com/library/cc31bk2e(en-us,vs.80).aspx](<http://msdn2.microsoft.com/library/cc31bk2e(en-us,vs.80).aspx>). Fire up a Visual Studio Command Prompt and away you go. Once you get your head around it, the command line tool is really powerful.

To unlock a file, first you need to make a note of the full path to the problem files. Sadly, I don't think there is anywhere that you can copy this into the clipboard from in the Visual Studio UI (if anyone finds a place then let me know!!). Then you need to pull up the detailed information on that file:-

tf status $/MyProject/MyPath/MyFile.cs /server:my_server /format:detailed

You'll get something like:-

$/MyProject/MyPath/MyFile.cs;C20290
User : MY_DOMAIN\my_user
Date : Thursday, October 12, 2005 11:25:00 PM
Lock : checkout
Change : edit
Workspace : WorkSpaceName
Local item : [WorkSpaceName] D:\projects\MyProject\MyPath\MyFile.cs
File type : Windows-1252

There is an unlock command - if this works it will be cool as it would mean that the developer wouldn't loose their changes. I heard that this didn't work properly for Beta 2 - should be fixed now, the syntax is below:-

tf lock $/MyProject/MyPath/MyFile.cs /lock:none /workspacename:WorkSpaceName /server:my_server

There is also an Undo command. It would get rid of any pending changes that the developer had made and they will lose any work they were doing. The syntax for Undo is:-

tf undo /workspacename:WorkSpaceName;dev_username /server:my_server $/MyProject/MyPath/MyFile.cs

We had a developer leave our company with some files still checked out when we were running on Beta 2. To find out which workspaces the developer had we used:-

tf workspaces /owner:dev_username /computer:\* /server:my_server

Then we deleted them. Deleting the workspace also removes the lock on the files. The command to delete a workspace is:-

tf workspace /delete /server:your_tf_server workspacename;workspaceowner

I read somewhere that an graphical admin tool will be available as a download post release for Team Foundation Server. If not, I think I've found myself a new project...
