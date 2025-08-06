---
title: "INDC Talk:  Top Ten Tips for Team Foundation Server"
date: 2006-05-05T12:29:26.000Z
# post thumb
images:
  - "/images/post/2006-indc-talk-top-ten-tips-for-team-foundation-server.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover essential tips and tricks for optimising your experience with Team Foundation Server in this insightful recap of my INDC talk."
# Taxonomies
categories: ["git", "tfs", "technology", "dotnet", "maker", "teamprise", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Thanks to everyone that came along to [my talk](http://indc.wordpress.com/2006/04/26/indc-session-top-10-tips-for-team-foundation-server-by-martin-woodward/) at the [2006 Irish National Developers Conference](http://indc.wordpress.com/) yesterday.  As it was Jedi Day, the session was appropriately aimed at being a deep-dive into some tips and tricks when using Team Foundation Server in the real world.  As promised, here is the [here is the slide deck (1.9 MB)](http://www.woodwardweb.com/blog/IDC2006_Top_10_Tips_For_TFS.ppt).  The point of the session was for it to be a very interactive and demo led one so the deck might not be that useful, therefore the following is a quick summary of what we discussed:-

**Introduction**
As an introduction, I attempted to briefly cover what [Visual Studio Team System](http://msdn.microsoft.com/vstudio/teamsystem/) is, how a [deployment looks](http://www.woodwardweb.com/vsts/000215.html) and how much of a paradigm shifting tool it is.

**#10 – TF.exe is your Friend** 
The most flexible and powerful client for TFS Version Control is the command line tool tf.exe so I did a demo.  See the an [earlier blog post](http://www.woodwardweb.com/vsts/000234.html) for a little more information.  Also, we discussed [Buck Hodges tips](http://blogs.msdn.com/buckh/archive/2005/12/12/503015.aspx) for improving performance and how some of these also apply to using the VSSImport utility.

**#9 – Baby Come Back**
How to access deleted files through the Source Control Explorer.  See [Clark Sell’s blog post](http://blogs.msdn.com/csell/archive/2006/04/11/573571.aspx) on the topic.  Clark is a Microsoft Consultant who was involved with the product group testing VSTS in the real world during the development phases and advises customers on using Team System out in the field.  He is also a great friend of mine and has recently become a Daddy so the title of this tip was a way of giving subtle props to the guy who first told me about it.

**#8 – Users are Painful**
Advise on using active directory groups to manage users in a production configuration.  I’s been planning on doing a blog post on this topic for ages but I always get distracted.  The [MSDN help on the topic](http://msdn2.microsoft.com/en-us/library/ms252512(VS.80).aspx) is pretty good now-a-days, also the user permissions dialog now gives you links to all the places you need to add the groups which makes it more discoverable.  The slide on this point was relatively useful:-

[](http://www.woodwardweb.com/blog/user_pain.png)

**#7 – Make TFS Work Your Way**
A demo of how to customize a work item that was audience driven.  I also showed how to change the action behaviour as discussed in a [previous blog post](http://www.woodwardweb.com/vsts/000230.html).

**#6 – Plan Your Repository
**How I think you should plan your repository, as discussed in an [earlier blog post](http://www.woodwardweb.com/vsts/000224.html).  Mitch Denny has his [own opinions](http://notgartner.com/posts/4089.aspx) on the matter – personally I think creating a “truck” or “main” folder and checking stuff in under that is a small level of indirection that will give you many potential benefits in the future (especially with how Work Items work and the difficulty in moving a work item between projects).  But as Mitch points out [there are other ways](http://notgartner.com/posts/4089.aspx) and no one answer.  Remember, I’m a Java guy so I tend to make things complicated in favour of flexibility :-)  We also talked a little bit about branching here for folks that had not been to [one](http://www.woodwardweb.com/vsts/000232.html) of my [earlier ](http://www.woodwardweb.com/vsts/000227.html)[talks](http://www.woodwardweb.com/vsts/000217.html).

**#5 – TFS for Everyone Else**
Demonstrated the [MCCSSI provider](http://blogs.msdn.com/bharry/archive/2006/04/06/570305.aspx) allowing you to access TFS version control from Visual Studio 2003 among others and also talked a little bit about [Teamprise](http://www.teamprise.com/) which allows you to talk to TFS from Eclipse, Mac and Unix.  Hopefully it wasn’t too blatant advertisement for my day job but I did want folks to know that Team Foundation Server is ideally suited as an enterprise class tool that the entire enterprise can adopt.

**#4 – Extending TFS**
A discussion about the “Team System Economy” and how extensible the whole of Visual Studio Team System is as well as just Team Foundation Server.  There is plenty of opportunity for partner companies like the [one](http://www.teamprise.com/) I am lucky enough to work for.  Customers are also free to customise and extend team system as they want.  I [ranted](http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=358913&SiteID=1) a little about how good the Microsoft .NET object model is and advised people to always use that if possible rather than considering using the web services.  I had planned on showing an example of using the object model but a lot of interest was sparked on the term “Team System Economy” (which I actually coined on the spot and had not planned).  All the talk meant I was at risk of running over so I cut the demo.  If anyone wants to get started with the object model then they could do a lot worse than subscribe to [Buck Hodges](http://blogs.msdn.com/buckh/default.aspx)’ and [James Manning](http://blogs.msdn.com/jmanning/)’s blogs, read this [particular post](http://blogs.msdn.com/buckh/archive/2006/03/15/552288.aspx) from Buck and download the [Visual Studio SDK](http://www.vsipdev.com/downloads).

**#3 – The Exception To The Rule**
Talked a little bit about the [TFS Admin Web Service](http://blogs.msdn.com/buckh/archive/2005/06/29/434099.aspx) and the Proxy Statistics service (available on http://tfs_at:8080/VersionControl/v1.0/ProxyStatistics.asmx).

**#2 – Change != Bad**
Talked about some of the differences and difficulties folks will face when moving to Team Foundation Server.  [My](http://www.woodwardweb.com/vsts/000232.html) [earlier ](http://www.woodwardweb.com/vsts/000227.html)[talks](http://www.woodwardweb.com/vsts/000217.html) go into a lot more detail about this, so I just focussed on explaining what a Changeset is, explained Shelving, talked about the fact that [Check out != Get Latest](http://www.woodwardweb.com/vsts/000179.html) and how [labelling works](http://blogs.vertigosoftware.com/teamsystem/archive/2006/05/03/Comparing_SourceSafe_Labels_to_Team_Foundation_Server_Labels.aspx) among other points queried by the audience.

**#1 – Don’t Do That**
A demo of the power of the security model inside TFS Version Control, but some tips of how you should [be careful](http://www.woodwardweb.com/vsts/000158.html) when making changes.

As ever I gave a list of useful places to find out more:-

[Rob Caron’s Blog ](http://blogs.msdn.com/robcaron/default.aspx)– The “Team System Blogfather” and all round nice chap (with Irish roots might I add)
[Team System Rocks](http://teamsystemrocks.com/default.aspx) – Great VSTS community site maintained by Team System MVP [Mickey Gousset](http://teamsystemrocks.com/blogs/mickey_gousset/default.aspx).
[Teamprise](http://www.teamprise.com/) – the company I am lucky enough to work for
[VSTS Licensing White Paper](http://www.microsoft.com/downloads/details.aspx?familyid=1FA86E00-F0A3-4290-9DA9-6E0378A3A3C5&displaylang=en) – yes, I’m afraid it is that complicated
[Microsoft VSTS Virtual Labs](http://www.microsoftvirtuallabs.com/express/registration.aspx?LabId=5ede642a-f4e7-4c3a-8d5b-82d3d7540a19) – connect in to a ready made VSTS environment, you can give the software a try with no need to install anything on your local machine.

Hope that summary is a fair one – if you were one of the attendees then feel free to add a comment if I’ve missed something.  As ever at Irish User Group events I was impressed with the level and quantity of questions from the audience so I may well have missed something we talked about.  If you are in the country and want a more introduction style talk then feel free to come along to my sessions at the .NET user groups in [Limerick](http://www.developers.ie/event.aspx?s=48) or [Gallway](http://www.developers.ie/event.aspx?s=46) next week.

**Now playing:** [Brass Incorporated](http://phobos.apple.com/WebObjects/MZSearch.woa/wa/advancedSearchResults?artistTerm=Brass Incorporated) - [Swingin' Cymbal](http://phobos.apple.com/WebObjects/MZSearch.woa/wa/advancedSearchResults?songTerm=Swingin)