---
title: "Folder Structure in Team Foundation Server Version Control"
date: 2006-04-11T16:49:15.000Z
# post thumb
images:
  - "/images/post/2006-folder-structure-in-team-foundation-server-version-control.jpg"
#author
author: "Martin Woodward"
# description
description: "Explore effective folder structures in Team Foundation Server to optimise project management and branching strategies."
# Taxonomies
categories:
  ["git", "tfs", "technology", "dotnet", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

I’ve seen a few forum posts on this topic and talk about it a lot whenever meeting new users to Team Foundation Server so I thought it worthwhile posting on the subject.

When you create a new team project on the Team Foundation server, the new team project wizard will ask you where you want to create a folder in source control for your project. Every team project has to have a root level folder to store files under – in fact under the covers TFS uses annotations on that root level folder to store team project level source control settings (such as check-in notes, check-in policies and if you want to disable checking out of files with no lock).

The temptation I’ve seen with a number of first time users is to put the solution file under the root level folder. The problem comes when they want another solution for that team project or perhaps that want to branch. Instead, I usually follow the convention in the picture below when creating new Team Projects – in this case one called “Oryx”.

[](http://www.woodwardweb.com/blog/example_structure.png)[](http://www.woodwardweb.com/blog/example_structure.png)

Team Foundation Server supports namespace branching – i.e. when you branch you tell the server to take a folder and branch it into another folder. Obviously – that folder cannot be below where you are branching from otherwise you would get yourself into a recursive loop. Now different branching models are the topic for a whole other discussion – however if you don’t know what you want to do just yet, then it is probably safe just to create a folder for your main development line called “trunk” – you might never branch, but if you do at least you can branch at the root level of your team project.

Another problem is where to draw the boundary between Team Projects? A team project usually shares a common set of requirements and are working towards an end goal. For example, if I was creating a medium sized e-commerce site for a company it would probably all be under one team project even though the site might be made up of multiple interfaces (internet, VoxML, customer service desktop), a core business logic engine built using .NET 1.1, .NET 2.0 and Java components with a mixture of legacy interop and a relational DB for the backend. The reason I’d have all this as one team project is that they have one key deliverable that the business is interested in and also one requirement that may span multiple delivery teams. When you are considering Team projects you should think how your requirements are defined by the business rather than how your teams are currently organised. The internal organisation of teams can be mapped as sub folders in the project folder structure and also used to define your areas in the project classification for work items.

The security model inside Team Foundation Server is incredibly powerful and you can break down the permissions inside your team project to a more granular level than is used by default. For example, each development group could have full rights to their project deliverable, but only read access to the others. You could even configure it so that nobody had permissions to edit a file in the /releases/1.0.0 folder once it had been released etc etc.

The thing that affects a lot of users migrating from VSS is the fact that shared folders are not supported in Team Foundation Server. Shared folders where often used as a poor mans version of branching, in TFS you have the real thing – however some people also relied on them to set out their source in a particular way when sharing code between teams. I’m afraid that this way of working is not well supported in TFS and you will have to use scripts to copy files around into the directory structure that you require.

Like most things, change can be uncomfortable – but once you get used to Team Foundation Server you will love it.
