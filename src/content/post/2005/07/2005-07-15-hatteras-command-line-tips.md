---
title: "Hatteras Command Line Tips"
date: 2005-07-15T18:58:47.000Z
# post thumb
images:
  - "/images/post/2005-hatteras-command-line-tips.jpg"
#author
author: "Martin Woodward"
# description
description: "Unlock essential Hatteras command line tips, from passing login credentials to mastering date and time versionspecs for efficient history searches."
# Taxonomies
categories: ["tfs", "technology", "maker", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
I couldn't find this with a quick google, so guessed the answer.  If you want to pass login credentials to the Hatteras command line client (h.exe or soon to be renamed tf.exe) then you can use the /login command line parameter.  

The bit I couldn't find in the helpfile is that the format is /login:username,password.  For example, if you want to connect to your team server as a certain user and see what workspaces are set up you do:-

h.exe workspaces /s:vstsserver /login:DOMAIN\username,password

Next in my set of tips is how to pass a date and time as a versionspec when doing a history.  This allows you to search for changes between a specific start and end datetime:-

h.exe history $/MyPath /recursive /version:D2005-03-20T10:00:00~D2005-07-15T17:24:45 /s:vstsserver /login:DOMAIN\username,password /noprompt

So the parts they don't tell you in the helpfile are to use "~" to indicate a start and end versionspec for the /version paramater.  If you begin the versionspec with D then this get's passed to the regular DateTime.Parse() method.  However, we need to find a format that doesn't contain spaces and allows the time component as well so along comes the handy SortableDateTimePattern i.e. "yyyy-MM-ddTHH:mm:ss"