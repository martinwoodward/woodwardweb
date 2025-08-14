---
title: "Five Hidden Features in Team Explorer Everywhere 2010 SP1"
date: 2011-03-06T20:21:09.000Z
# post thumb
images:
  - "/images/post/2011/03/2011-five-hidden-features-in-team-explorer-everywhere-2010-sp1.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover five lesser-known, yet invaluable features in Team Explorer Everywhere 2010 SP1 that enhance productivity for power users."
# Taxonomies
categories:
  ["git", "tfs", "technology", "gadgets", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

Hopefully you have heard the news by now that in February we shipped [Team Explorer Everywhere 2010 SP1](http://www.microsoft.com/downloads/en/details.aspx?FamilyID=53c27216-c4f0-48b6-9bed-fe1718a2e3b0). Brian Harry has a couple of great blog posts ([here](http://blogs.msdn.com/b/bharry/archive/2011/02/09/team-explorer-everywhere-2010-sp1-is-available.aspx) and [here](http://blogs.msdn.com/b/bharry/archive/2010/11/03/team-explorer-everywhere-2010-sp1-beta-is-available-for-download.aspx)) talking about the headline features of what was added, but I wanted to follow up with some smaller features that I personally use every day that you probably didn’t know about. Note that the features have been deliberately made somewhat hard to find as we’d currently class them as “power user” functionality, but I figure anyone bothering to read my blog comes into the power user category :-)

**1: Links to Shelvesets**

We have a lot of remote working in our team across three continents and so we find ourselves passing around shelvesets a lot. We also use shelvesets for code reviews. As our team is so geographically spread out that we’re actually in four different domains inside Microsoft (one for Redmond, North Carolina, Europe and Asia). Therefore we find the best way to share a shelveset name is in the ShelvesetName;DOMAIN\Username syntax as that is fully qualified. It’s also great to include a link to the shelveset in web access, that way you can quickly review a shelveset without having to pull down the files into your local workspace or even fire up an IDE.

To do this quickly, open the Unshelve dialog (by pressing the Unshelve button in the Pending Changes view), select the shelveset that you want to send a link to and simply use the keyboard shortcut for copy (i.e. Ctrl-C on Windows/Linux or Command-C on Mac). Paste this into something that accepts HTML and you’ll get a fully qualified shelveset name including the link to web access. Paste into something that just accepts text and you will just get the fully qualified shelveset name.

**2: Query Results Copy/Paste**

In the query results view, you can select a range of work items, right click and from the context menu select Copy Selected Results to Clipboard or Copy All Results to Clipboard. If you paste them into something that just understands text then you get a tab delimited set of results but if you paste into something that understands HTML (such as Outlook, Word, Excel or things link Mail, Numbers, Pages on the Mac) then you will get a nicely formatted table of results including the column headers and links to web access. We use this all the time when emailing work items around, especially if reporting process outside of the team where people might not have our project collection set up as a connection in VS or Eclipse but they still have access to our work items via web access (lots of people in Microsoft have read access to our work items).

**3: Opening a Work Item in Web Access**

We have a fully features work item editor in Eclipse, but some customers have different work item form layouts for Eclipse and for Web Access or perhaps you might want to view a web access version of the work item so that you can share the link with team members etc. We added an “Open With…” option when you right click on a work item to allow you to pick which work item editor you wanted to use. This is actually an extension point so people can add other editors that they might want to use instead of the one we ship with (for example, in future releases TaskTop could add an editor here and you could open the work item with their Task editor). The default work item editor is now a preferrence that the user can adjust in the Eclipse preferences. If this is changed then opening a work item in all of the places that we show work items in the UI will open it in the preferred editor.

---

**4: Eclipse Project Specific Actions**

There are a bunch of “power-user” version control actions that we only make available when you right click on an Eclipse Project in Package Explorer / Resource Navigator. **Detect Local Changes** – will examine your local disk for changes that you have not yet created pending changes for with Team Foundation Server. This is useful if you have been working outside of Eclipse for some reason. For example if you have edited a file by setting it read/write, if you have added a file etc. This is functionally the same as going offline and then returning online. **Go Offline** – sometimes you know that you are going to work offline from TFS (i.e. you’ve picked up your laptop and walked into a meeting room with no corporate wifi connection). The Go Offline menu option will allow you to tell the Eclipse plug-in not to bother attempting to connect to TFS first but to just assume that you are offline. **Go Online** – When you get back to your desk you want to reconnect to TFS so select Go Online. This will connect you back up again. It will perform a local change detection to try and help you sync up the changes that occurred since you went offline. **Disconnect Project Permanently** – You may have bound a project to Eclipse but then decided that you don’t want Team Explorer Everywhere managing the files for you. In this case you can disconnect the project from being bound with TFS for version control. To reverse this operation (i.e to bind it again with TFS) then you go to Team, Share Project… and select TFS. We will then automatically detect the working folder mapping is present in TFS and simply add the bindings back into Eclipse so that you see the TFS items in the team menu.

**5: Label Decorations**

In Team Explorer Everywhere we decorate the labels given to files and folders in package explorer. However sometimes it is useful to have more information – for example if you use the “Switch to Branch” feature frequently then knowing what the server path a particular project corresponds to us very useful. Therefore we added a bunch of label decoration preferences to allow you to customize.

Hope you find some of these power user features useful. Remember these are all Eclipse specific – not in the Visual Studio user interface. There are more to discover as well so take some time to poke around the preferences and the context menus and let me know what features you find invaluable.
