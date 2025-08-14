---
title: "Understanding the Branches Tab"
date: 2006-08-11T12:36:55.000Z
# post thumb
images:
  - "/images/post/2006/08/2006-understanding-the-branches-tab.jpg"
#author
author: "Martin Woodward"
# description
description: "Explore the complexities of the Branches tab in Microsoft Team Foundation Server and learn to navigate its visual representation of branch history."
# Taxonomies
categories:
  ["git", "tfs", "technology", "maker", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

Showing branch history in a visual way is not something that the current version 1.0 of the Microsoft Team Foundation Server client is great at. In fairness to the team, showing the branch history of files in an graphical way is pretty complicated and would involve many lines of code – especially when you build a version control system as flexible and powerful as Team Foundation Server.

I’ve been around the business for a good few years now, and before I joined a software company specialising in Version Control tools I had only used branching twice[\*](#only_twice). This suggests that branching is not something that everyone uses all the time – and those that do don’t often need to see the branch history. Therefore the VSTS team not spending an awful lot of time on a branch visualisation tool that will only get used less than 1% of requests seems like a pragmatic approach to me (especially if the data is available – just not in the easiest way to understand)

I’ve been using Team Foundation Server in production project every working day for over a year now, today was the first day I needed the server to tell me the branch history for a file. So, until we get branch visualisation in the tool or from the open source project [Vertigo](http://www.codeplex.com/Wiki/View.aspx?ProjectName=TFSVTreeBrowse) we are stuck with the Branches tab when you select a file in source control and select Properties…

[](http://www.woodwardweb.com/blog/branches_tab.png)[](http://www.woodwardweb.com/blog/branches.png)

I sat and stared at the branches tab for about 10 minutes before I could work out what it was telling me. The “F1” help is ok here in that it introduces the concepts of branching. However, I know what branching is – I was trying to understand the dialog…

To help understand, I drew a quick diagram on a bit of paper. For the purposes of the blog post I fired up Powerpoint 2007 Beta 2 to give you a prettier looking one:-

[](http://www.woodwardweb.com/blog/branch_diagram.png)

Basically. The item in bold in the dialog is the item that you selected on for Properties. This particular example shows that the file itself was a branch of version 2750 of myProject/testFile.txt and has been subsequently branched as myproject-branch3/testFile2–branch.txt. Easily really. This means that if you were putting a patch into the file, you might want to consider patching the file it was branched from – but also all the other files that have been derived from that branch.

As you can see, it would also be a lot easier to understand if you used a [sensible naming structure](http://www.woodwardweb.com/vsts/000224.html) when branching files. However – the information you need is given to you, even if you have to concentrate for a while..

- If the statement that I only branched twice surprises you then here is an explanation. While I understood the concepts – it was still always a little scary but more importantly when you start branching your source code the whole team has to have the discipline to make sure changes are merged back into the appropriate branches etc. In a lot of internal IT projects, there is only the need for one main line of development and that line is best managed using continuous integration techniques to ensure it is always in a fit state. To be fair, in a lot of those internal IT projects, you would probably get benefit from branching at times – but the pain of managing those branches would outweigh many of the benefits – especially in you work in a place where you are struggling to just make people check their code compiles before committing it to version control – never mind making sure they have applied that fix in a sensible way to the appropriate branches…

Now I work for an ISV, branching is vital. In our main line of code we have been working on the next version (version 2.0) since we stopped developing version 1 back in March of this year. Originally, work on NTLM authentication was slated to be a V2.0 feature but when it was completed earlier than we thought we wanted to make it available to our V1 customers but not include all the unfinished (and buggy) stuff in the main development line. When we released Version 1, we branched the code (from $/Teamprise/trunk to $/Teamprise/releases/1.0). This meant the new NTLM authentication logic could be merged into the V1.0 branch and a new release V1.1 be issued. This is just one example where branching is essential – but you can use branching for many other reasons (such as allowing greater parallel development etc).

Like all tools at your disposal as a developer, you have to learn what it is good at and what the downsides are, then apply the technique appropriately.
