---
title: "Setting up the Perfect Git Command Line Environment on Windows"
date: 2014-01-17T11:01:17.000Z
# post thumb
images:
  - "/images/post/2014-setting-up-the-perfect-git-command-line-environment-on-windows.jpg"
#author
author: "Martin Woodward"
# description
description: "Over the past couple of weeks I’ve had several people ask me about my dev environment for working with Git on Windows so I decided to write."
# Taxonomies
categories: ["git", "tfs", "technology", "maker", "web", "programming", "personal", "github"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Over the past couple of weeks I’ve had several people ask me about my dev environment for working with Git on Windows so I decided to write it up here for me to point people to. Of course the first thing that you want is Visual Studio 2013 with the built in Git tooling. While I’m obviously very biased in terms of the Visual Studio tools I’m actually more familiar with the command line workflow – especially coming from the Mac. However the team specifically designed the Visual Studio tools to work well with the command line and compliment them – I find myself swapping more and more between the command line and the UI depending on what’s quickest for me. I NEVER use the command line for merging any more, but I still use if for dealing with multiple remotes (very common in OSS workflows) squashing and rebasing my commits etc. There are some things I actually find myself using Visual Studio for that I never thought I would. For example I quite often find myself swapping my email address around when I’m doing commits for work or if I’m working on a demo or a side project and I’ve noticed I’ve been using the Git settings panel in Team Explorer more and more rather than going to “git config” which surprised me.  

**So, how do I set up my command line Git experience?**  

First of all you have to install [Git for Windows](http://msysgit.github.io/) of course.  I always use the .exe installer from [here](http://code.google.com/p/msysgit/downloads/list?q=full+installer+official+git) (ignore the –preview moniker, they are good – at the time of writing the latest is Git-1.8.5.2-preview20131230.exe). Now one of the first mistakes I see people do is go for the default options in the installer which results is people using Git Bash. If you love yourself don’t do that, but make sure Git is added to your path. On the screens that I need to make decisions on, I always follow this path.  

For component selection, I generally go for the defaults. I don’t use the shell extensions personally but they don’t hurt.  

[](http://www.woodwardweb.com/Windows-Live-Writer/Setting-up-the-perfect-Git-environment-o_906F/image_2.png)  

This is the important one being the change to **make sure Git is added to your Path**. This makes sure that you can go to the command shell or PowerShell and run Git. The Git Bash shell is evil IMHO, I never find myself using it despite using Bash all the time when I’m on *nix.  

[](http://www.woodwardweb.com/Windows-Live-Writer/Setting-up-the-perfect-Git-environment-o_906F/image_4.png)  

Then I go with the default of setting the CRLF behaviour to normalize as Unix style endings in the commits.  Basically this makes sure a commit generated on Windows is the same as one done on the Mac or on Linux but also that you can still use notepad if you check out a file that was edited in Vim on Linux.  

[](http://www.woodwardweb.com/Windows-Live-Writer/Setting-up-the-perfect-Git-environment-o_906F/image_8.png)  

At this point you now have Git installed. Congratulations!  However, you can do better than that…  

**Enter PoshGit**  

The next thing I install is [PoshGit](http://dahlbyk.github.io/posh-git/). I swear, PoshGit is the main reason to use the PowerShell console (that and also the fact it doesn’t shout at you when you accidentally type “ls” instead of “dir”) Installation of PoshGit can be a bit quirky but [Keith’s instructions](http://dahlbyk.github.io/posh-git/) are pretty good. Basically, after he’s helped you make sure your PowerShell environment is set up correctly, you clone the repo (git clone [https://github.com/dahlbyk/posh-git.git](https://github.com/dahlbyk/posh-git.git)), cd into it and then run the install script.  

I always use Git over HTTPS rather than SSH so I often don’t have Putty installed with Paegent to handle my keys. Therefore I tend to just comment out the Start-SshAgent -Quiet line in \posh-git\profile.example.ps1. If you are seeing the error “WARNING: Could not find ssh-agent” when you start PowerShell and you don’t need SSH then just open up profile.example.ps1 in notepad, scroll down to the end of the file and make sure it looks like this:  

```powershell
   Enable-GitColors

   Pop-Location

   # Start-SshAgent -Quiet
```

Then save the file and restart PowerShell.  If you do need SSH then you’ll need to install Putty and make sure it’s on your path.
**Remembering Passwords**

Next up I install Andrew Nurse’s credential helper, [git-credential-winstore](http://gitcredentialstore.codeplex.com/). If you are talking to a Git server that requires a username and password, rather than having to type your credentials all the time this nifty little helper will actually store them securely in the Windows Credential Manager.  Note that when installing you’ll see an error if you’ve gone for the middle option when setting your path in Git for Windows because Git.exe isn’t on your path (Git.cmd is).  Therefore you are going to want to:

  [Download it from CodePlex](http://gitcredentialstore.codeplex.com/releases/) and save it to your disk 

  In a command / powershell window, cd into your Downloads folder 

  Install the credential helper by typing: 
```powershell
git-credential-winstore.exe -I "C:\Program Files (x86)\Git\bin\git.exe"
```

Combined with with web interface in TFS, Visual Studio 2013 and Eclipse with egit, that’s all I need personally. However if you want a graphical view of your repository then a lot of people use gitk which is installed with Git for Windows (just type “gitk” inside your repo in the command shell / powershell windows).  You can also type “git gui” for the git-gui tools.  Other popular graphical tools you might want to install are GitHub’s free app [GitHub for Windows](http://windows.github.com/) and Atlassian’s free app [SourceTree](http://www.sourcetreeapp.com/).  GitHub for Windows is very pretty and great for managing your GitHub based repos. Atlassian’s SourceTree is very highly regarded as stand-alone UI for working with Git repos on Windows.