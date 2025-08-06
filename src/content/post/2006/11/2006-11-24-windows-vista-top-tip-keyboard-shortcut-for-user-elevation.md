---
title: "Windows Vista Top Tip: Keyboard shortcut for user elevation"
date: 2006-11-24T12:11:04.000Z
# post thumb
images:
  - "/images/post/2006-windows-vista-top-tip-keyboard-shortcut-for-user-elevation.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["technology", "gadgets", "maker", "web", "podcast", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
I'm loving Windows Vista RTM.  I'm actually considering moving my main development PC over - just need to be certain that everything I use will work just fine - in the meantime, I'll stick with it running from my Core Duo based Mac Mini.  Today, I stumbled over a great blog from [Tim Sneath](http://blogs.msdn.com/tims/default.aspx), a Windows Vista Evangelist.  He has a series of "Windows Vista Secret's" that are well worth subscribing to.  One of the things I've found when using Vista is that my hands can stay on the keyboard much more - making me significantly faster to navigate around the system.  I was particularly please to read his [Windows Vista Secret #10: Open and Elevated Command Prompt in Six Keystrokes](http://blogs.msdn.com/tims/archive/2006/11/02/windows-vista-secret-10-open-an-elevated-command-prompt-in-six-keystrokes.aspx). 

The "trick" in the tip is that if you press Ctrl+Shift+Enter on a command in the search bar, it will run that command with Admin rights - therefore to run a command shell as admin Tim recommends you do "Win key; type cmd; press Ctrl+Shift+Enter; and then hit Alt+C to confirm the elevation prompt". But you can also use the Ctrl+Shift+Enter shortcut to fire up Notepad as admin and then have the ability to edit your hosts file etc. 

Personally, I have a shortcut to Cmd that opens it up with Admin rights and a different background colour (called "Admin Console") - that way I can get to an admin console by typing "a" at the search bar and the console is always a different colour so I remember which console is the admin one.  To do that, copy the "Command Prompt" shortcut from the Accessories group in Program Files, rename as "Admin Console" or whatever you want.  Go to the "Shortcut" tab and select "Advanced...", then check the "Run as administrator" box.  Press Ok, and then press Apply.  Finally you can go to the Colors tab and edit the background colour - I use the dark red to signify danger.