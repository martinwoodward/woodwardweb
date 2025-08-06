---
title: "TFS Top Tip #7 - Determine when TFS Trial Edition will expire"
date: 2006-07-06T11:31:17.000Z
# post thumb
images:
  - "/images/post/2006-tfs-top-tip-7-determine-when-tfs-trial-edition-will-expire.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["git", "tfs", "technology", "maker", "teamprise", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
**UPDATE**:  [Brian Harry](http://blogs.msdn.com/bharry/) has [posted a new utility](http://blogs.msdn.com/bharry/archive/2006/08/23/714412.aspx) to help you determine the trial expiration dates on your server.  View [Brian's post for more details](http://blogs.msdn.com/bharry/archive/2006/08/23/714412.aspx). 

Like a lot of early adopters, we installed the Team Foundation Server 180–day trial edition so that we could use is right away while we were waiting for our TFS license key. 

Anyway, if you want to know what the installation date of your TFS server is then the easiest way is to type the following command in a Visual Studio 2005 command prompt:- 

tf changeset 1 /server:http://servername:8080 /noprompt 

Where *servername* is your TFS instance.  I get the following result:- 

Changeset: 1
User: tfssetup
Date: 20 February 2006 19:57:54
Comment:
Items:
  add $/ 

During the installation, Team Foundation Server creates the root branch of the source tree and this is the first changeset on your system.  If you add 180 days to this date then you get when your trial will expire. 

Now, in my case it is even more confusing.  I installed the Release Candidate of TFS on February 20th, and then upgraded to the 180–day trial edition of TFS on March 21st.  A fact that I can tell from my installation log file located on the Team Foundation Server in the following directory:- 

C:\Program Files\Microsoft Visual Studio 2005 Team Foundation Server\Microsoft Visual Studio 2005 Team Foundation Server - ENU\Logs 

Which date will be used for the expiry of my server?  Well at the moment I have no idea, so I am assuming the earlier of these dates will be used just in case… 

However, for most people who went straight to the 180–day trial, the command at the top of this post will give them the date of initial install.