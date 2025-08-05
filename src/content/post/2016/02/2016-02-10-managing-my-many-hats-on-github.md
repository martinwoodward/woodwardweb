---
title: "Managing My Many Hats on GitHub"
date: 2016-02-10T10:53:11.000Z
# post thumb
images:
  - "/images/post/2016-managing-my-many-hats-on-github.jpg"
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

Like many developers, I contribute to open source projects at home – usually to scratch an itch, learn something new or just to contribute to something [I love using myself](http://openlivewriter.org). However, I work for the open source [.NET Foundation](http://www.dotnetfoundation.org/) which means I have a dream job of getting paid to work on open source. Finally, I’m also still employed by Microsoft and get to make contributions to open source projects on their behalf which is also a pretty good gig.  

When I commit to Git, I make sure my email address is set correctly based on what hat I’m wearing. On my work machines I have my work email configured by default and on my home machine I have my personal email configured by default.  To configure your default email address for Git [remember](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup) from the [excellent Git Book](https://git-scm.com/book) that you do:     

git config --global user.name "John Doe"
git config --global user.email johndoe@example.com

As I use my work machine for work and my personal machine for personal stuff, this usually works well. However sometimes I want to make a quick update to something at work from my personal machine. But that’s fine because Git also provides a way to specify any git config setting per repository.  Once you have cloned down the Git repository, you cd into the repository and then simply type the same command without the -–global parameter, i.e:

git config user.email johndoe@example.com

Which will override the default email address set on your machine but just for that one repository. The repository wide (local) settings are stored in a file called config with-in the .git folder in your repository, the global settings are stored in a file called .gitconfig in your users home directory.

Next, I like to make sure all my contributions come back to my GitHub identity. Luckily, GitHub have an easy mechanism to associate multiple email addresses with one GitHub account.  Simply go to your profile, and make sure all the [emails](https://github.com/settings/emails) you use to commit to Git are [configured](https://github.com/settings/emails).  I have a few different ones listed in mine

[](https://github.com/settings/emails)

And that’s it – when commits are pushed to GitHub using either my home, work or .NET Foundation email addresses they all come back to my [GitHub profile](https://github.com/martinwoodward) so people can see what I as an individual am [involved with](https://github.com/martinwoodward).