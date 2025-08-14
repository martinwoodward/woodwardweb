---
title: "Getting Started with LibGit2Sharp"
date: 2013-05-11T13:44:35.000Z
# post thumb
images:
  - "/images/post/2013/05/2013-getting-started-with-libgit2sharp.jpg"
#author
author: "Martin Woodward"
# description
description: "If you want to work with your local Git repositories in some."
# Taxonomies
categories: ["git", "technology", "books", "dotnet", "maker", "web", "programming", "github"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
If you want to work with your local Git repositories in some .NET code then [LibGit2Sharp](https://github.com/libgit2/libgit2sharp) is your friend.  It’s the open source library used by the [Visual Studio Tools for Git](http://aka.ms/Git4VS) and gives you a very idiomatic way to talk to Git from C# or VB.NET.  I thought it would be worth a quick tutorial post showing how easy it is to get started by querying a repository helping us learn a bit about the library but also learn more about Git itself. As LibGit2Sharp is open source in this example I’m going to point to cloned copy of the repository I have locally already by using the Git tooling in Visual Studio or by typing git clone https://github.com/libgit2/libgit2sharp.git. However you can obviously point to any Git repository you already have locally.  

To begin, create a new console project in Visual Studio. We need to add a reference to the Lib2Sharp library and the quickest way to do that is to open the NuGet package manager by right-clicking on your project in Solution Explorer and select Manage NuGet Packages…  Search online for “LibGit2Sharp” and Install.  

[](http://www.woodwardweb.com/Windows-Live-Writer/Getting-Started-with-LibGit2Sharp_1091B/nuget_2.png)  

Then accessing an existing repo is trivial, simply use the LibGit2Sharp.Repository class. A handy way to get a particular commit is by its hash if you know it.  

```csharp
      public static void Main(string[] args)
      {
          using (var repo = new Repository(@"D:\source\LibGit2Sharp"))
          {
              Commit commit = repo.Lookup<Commit>("73b48894238c3e9c37f9f3a696bbd4bffcf45ce5");
              Console.WriteLine("Author: {0}", commit.Author.Name);
              Console.WriteLine("Message: {0}", commit.MessageShort);
          }
      }
```

But what if we just want the commit that’s the latest of the current branch, in Git-speak we want the “Tip” of “Head”. LibGit2Sharp gives you an easy way to get to the Head through the repository object. So we can do the following:

```csharp
    public static void Main(string[] args)
      {
          using (var repo = new Repository(@"D:\source\LibGit2Sharp"))
          {
              Commit commit = repo.Head.Tip;
              Console.WriteLine("Author: {0}", commit.Author.Name);
              Console.WriteLine("Message: {0}", commit.MessageShort);
          }
      }
```

A point in time in the repository is represented by a Commit. Each Commit points to a Tree which you can think of as a directory/folder. A Tree can contain a Blob (i.e. the contents of a file) or another Tree (i.e. a sub-folder).

So if you want to list the contents at the root of the repository then you can do

```csharp
    public static void Main(string[] args)
      {
          using (var repo = new Repository(@"D:\source\LibGit2Sharp"))
          {
              Commit commit = repo.Head.Tip;
              Console.WriteLine("Author: {0}", commit.Author.Name);
              Console.WriteLine("Message: {0}", commit.MessageShort);
          }
      }
        foreach(TreeEntry treeEntry in commit.Tree)
        {
            Console.WriteLine("Path:{0} - Type:{1}", treeEntry.Path, treeEntry.TargetType);
        }
``` 

That will give you something like the following when against the LibGit2Sharp repository

```
Path:.gitattributes - Type:Blob
Path:.gitignore - Type:Blob
Path:.gitmodules - Type:Blob
Path:.mailmap - Type:Blob
Path:.travis.yml - Type:Blob
Path:CHANGES.md - Type:Blob
Path:CI-build.msbuild - Type:Blob
Path:LICENSE.md - Type:Blob
Path:Lib - Type:Tree
Path:LibGit2Sharp.Tests - Type:Tree
Path:LibGit2Sharp.sln - Type:Blob
Path:LibGit2Sharp - Type:Tree
Path:README.md - Type:Blob
Path:ResharperSettings.xml - Type:Blob
Path:UpdateLibgit2ToSha.ps1 - Type:Blob
Path:build.libgit2sharp.cmd - Type:Blob
Path:build.libgit2sharp.sh - Type:Blob
Path:build.libgit2sharp.x64.cmd - Type:Blob
Path:libgit2 - Type:GitLink
Path:nuget.package - Type:Tree
Path:square-logo.png - Type:Blob
```

To see which files changed in a particular commit.  To do that we need to find the diff between the commit and it’s parent. For now let’s just assume that we have a single parent (i.e. we’re not a merge commit). Therefore we can do this

```csharp
        Tree commitTree = repo.Head.Tip.Tree;
        Tree parentCommitTree = repo.Head.Tip.Parents.Single().Tree;
 
        TreeChanges changes = repo.Diff.Compare(parentCommitTree, commitTree);
 
        Console.WriteLine("{0} files changed.",changes.Count());
```

And finally to iterate over the changes to show what files changed in that commit

```csharp
        foreach(TreeEntryChanges treeEntryChanges in changes)
        {
            Console.WriteLine("Path:{0} +{1} -{2} ", 
                    treeEntryChanges.Path, 
                    treeEntryChanges.LinesAdded,
                    treeEntryChanges.LinesDeleted
                );
        }
```

That then gives the following output

```
Author: nulltoken
Message: Release LibGit2Sharp v0.11
3 files changed.
Path:LibGit2Sharp.Tests\DiffTreeToTreeFixture.cs +35 -11
Path:LibGit2Sharp.Tests\LibGit2Sharp.Tests.csproj +1 -0
Path:LibGit2Sharp.Tests\TestHelpers\OdbHelper.cs +17 -0
```

This post obviously just scratches at the surface of what is possible with LibGit2Sharp. We’re starting the process of trying to flesh out the documentation for the project from the current starting position of none, but it the meantime if you want to see some more examples of using LibGit2Sharp then take a look at the [Unit Tests](https://github.com/libgit2/libgit2sharp/tree/vNext/LibGit2Sharp.Tests).