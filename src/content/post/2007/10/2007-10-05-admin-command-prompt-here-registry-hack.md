---
title: '"Admin Command Prompt Here" Registry Hack'
date: 2007-10-05T02:19:51.000Z
# post thumb
images:
  - "/images/post/2007/10/2007-.jpg"
#author
author: "Martin Woodward"
# description
description: "temp_placeholder"
# Taxonomies
categories: ["git", "technology", "maker", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

A neat (if not well known) feature of Windows Vista is the built in ability to do a "Command Prompt Here" by selecting a folder, keeping the shift key down and right clicking on the folder. While this is neat, I've sometimes found myself needing an Command Prompt with full administrative privileges.

I stumbled upon an excellent tip from Randy Rants on how to get an [elevated command prompt here](http://www.randyrants.com/2007/02/vista_tip_eleva.html).

Personally, I like my admin command prompts to have a dark red background color so that I remember it is running with elevated privileges (see my [previous post if you want a admin command prompt icon](http://www.woodwardweb.com/vista/000349.html) using this meme). Anyway, my registry entires look something like:-

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\shell\runas]
@="Admin Comm&and Prompt here"
"NoWorkingDirectory"=""
"Extended"=""

[HKEY_CLASSES_ROOT\Directory\shell\runas\command]
@="cmd.exe /t:4f /k \"pushd %L && title Command Prompt\""

Have fun - usual warnings about registry hacking and backing up etc. According to Randy this should also work for XP users who run with non-Admin privileges.
