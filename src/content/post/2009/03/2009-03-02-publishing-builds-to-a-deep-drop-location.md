---
title: "Publishing Builds to a Deep Drop Location"
date: 2009-03-02T06:59:44.000Z
# post thumb
images:
  - "/images/post/2009-publishing-builds-to-a-deep-drop-location.jpg"
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

Nasty things start to happen on Windows systems when you start having paths that are longer than 254 characters.  When NTFS is the underlying filesystem you can have up to 32767 unicode characters in the path, however in parts of Windows (and therefore .NET), a local file path (i.e. "C:\MyDir\MyFile.txt") is limited to 260 characters. Some older applications use 255 bytes for the path, while .NET's wrappers over the native file system API's seem to make the issue worse rather than better.

The problem is that this limitation is pretty easily bumped up against when performing a build as your build itself will use up a lot of those characters, and so if you start your build deep in a directory structure (i.e. using the default build working directory of "C:\Documents and Settings\username\Local Settings\Temp\Build Definition Name") then you quickly run out of room.  [Aaron Hallberg](http://blogs.msdn.com/aaronhallberg/) has a [great post talking](http://blogs.msdn.com/aaronhallberg/archive/2007/06/20/team-build-and-260-character-paths.aspx) about this [in relation to build working directories](http://blogs.msdn.com/aaronhallberg/archive/2007/06/20/team-build-and-260-character-paths.aspx) - however at a recent customer, I ran into a similar problem because their build drop locations were quite long.  

**Deep Drop Locations**  

The CoreDropBuild target in Team Build is responsible for copying files from the $(BinariesRoot) folder to the Drop Location.  The Drop Location *must* be specified as a UNC path to a network share.  CoreDropBuild, the target in Team Build that performs the copying, uses the standard MSBuild [Copy](http://msdn.microsoft.com/en-us/library/3e54c37h.aspx) task which is implemented in .NET.  

Some folks (especially large organizations with multiple domains) use fully qualified domain names for all their shares.  Also, they have a corporate standard directory structure.  Therefore they end up needing drop locations to be something like "\\servername.domain.company.com\Project\SubProject\Build Results\".  Now, UNC paths should not present a problem to us - the 260 character limit in a local path thing, UNC style paths should be able to go up to [32,767 characters](http://msdn.microsoft.com/en-us/library/aa365247.aspx).  However, the .NET API for file paths forces a 260 character limit even if the path is a UNC style path - if you try to copy files using the MSBuild Copy task into a deep drop location you will get the error:     

"The specified path, file name, or both are too long. The fully qualified file name must be less than 260 characters, and the directory name must be less than 248 characters."   

Therefore to copy these files, we need to get out of .NET - fortunately MSBuild allows us to easily call other processes using the [Exec](http://msdn.microsoft.com/en-us/library/x8zx72cd.aspx) task.  At first, I considered using the venerable [xcopy](http://technet.microsoft.com/en-us/library/bb491035.aspx). Xcopy has been around and since the early days of OS/2 and network aware MS DOS/Windows it has been able to copy to network shares using UNC style paths.  The only issue is that XCopy doesn't work well with a path greater than 254 characters.  If you try copying a folder to a path that takes you longer than that limit you get the following exception when you hit the long file:     

Insufficient memory   

**Robocopy to the Rescue**  

In Windows Vista, XCopy has been depreciated in favor of [Robocopy](http://technet.microsoft.com/en-us/library/bb491035.aspx).  I have a somewhat one-sided love / hate relationship with Robocopy.  It can do nearly anything you would ever want to do with files (it is a bit like rsync for Windows platforms) - but the [syntax](http://technet.microsoft.com/en-us/library/bb491035.aspx) for it is pretty painful to use. It also does strange things with the error codes that it returns.  That said it now ships by default with Vista and Windows Server 2008 - and it is also available as part of the [Windows Server 2003 resource kit](http://www.microsoft.com/downloads/details.aspx?familyid=9d467a69-57ff-4ae7-96ee-b18c4790cffd&displaylang=en). More importantly, it can handle UNC paths longer than the 260 character barrier. Therefore we can override the default CoreDropBuild target that Team Build provides, with one that uses Robocopy as shown below:     

<Target Name="CoreDropBuild">     

  <Exec Command="robocopy "$(BinariesRoot)" "$(DropLocation)\$(BuildNumber)" /E /NP" IgnoreExitCode="true">       
    <Output TaskParameter="ExitCode" PropertyName="RobocopyExitCode" />        
  </Exec>     

</Target>   

Simply copy/paste that target into your TFSBuild.proj and hopefully you can have a long UNC path for your drop location that works.  That said - bear in mind that their are other parts of TFS that the long path could cause problems with.  For example, if the DropLocation path itself was getting really close to the 260 character limit then you will get problems accessing <DropLocation>\BuildLog.txt and the test results which get put in <DropLocation>\TestResults\. That said - for most people this should not be a problem and so the CoreDropBuild override method described above is the way to go.