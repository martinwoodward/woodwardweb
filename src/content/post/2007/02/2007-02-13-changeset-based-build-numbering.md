---
title: "Changeset based Build Numbering"
date: 2007-02-13T14:10:52.000Z
# post thumb
images:
  - "/images/post/2007/02/2007-changeset-based-build-numbering.jpg"
#author
author: "Martin Woodward"
# description
description: "Teamprise has revamped its build numbering to enhance clarity, focusing on user-friendly Major.Minor.Revision milestones for better tracking."
# Taxonomies
categories: ["git", "tfs", "technology", "dotnet", "maker", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Here at Teamprise we've recently changed our build numbering scheme.  We use the traditional Major.Minor.Revision.Build approach with Major.Minor.Revision being the only thing an end user should care about and Major.Minor the only thing we would every do any marketing for.  The build number used to be an integer that incremented everytime we did a build.  On day one it started at 1 (i.e. 1.0.0.1) and when we got to the final 2.0 build it was 2058 (i.e. 2.0.0.2058).   

Internally, we have several different build types.  For example, we have a build for development which runs really fast but is missing steps like code obfuscation.  The "Release Build" is the build that compiles, generates documentation and obfuscates all the code just as we would distribute it to customers and would performs all of the automated tests etc.  Release Builds are the ones that our internal QA folks use to test against.  We used to label when we made a build so that we could tie that build to the exact versions of all the files included in it. 

During a development cycle we typically update the versions we use to develop with fairly regularly (we use Teamprise to develop Teamprise, what is commonly referred to as [dogfooding](http://en.wikipedia.org/wiki/Eat_one)).  Every month or so we issue a preview releases to brave customers who have asked for a particular feature so that they can test them and let us know how we are getting along.  When the time comes to ship we flag a certain release build as our "release candidate" and then we start to hammer it as much as we can, trying to break it.  We also ship these release candidates to customers who want them.  We build up a list of bugs or features we would like to fix and then we triage them to decide which ones we will fix before we ship.  We then fix, re-build and test until we are happy with a release candidate and then we release it.  Typically we have 2 or 3 release candidates before we have a release we will sign off on. 

Finally, when we decide which version is our RTM build (release-to-manufacture) we branch our mainline of code to create a branch for that release.  In Team Foundation Server you can create a branch from set of labeled files so this works well.  We can in effect branch after the fact, once we know what our shipping version was.  Development for the next version carries on in trunk.  If we find an issue or a bug that needs a fix applied to the previous release we can fix it in that branch and merge the changes into trunk. 

Then we had a brain-wave.  I'm not sure exactly who's idea this was in the team, I think possibly several of us had it at the same time - and googling around this idea isn't particularly original.  Anyway, we now use the last changeset number for the $/Teamprise path in our Team Foundation Server code repository as the build number. We then append on to this a one letter code for the build type (for example, looking at the build server the latest release build is 2.1.0.5113R where R stands for Release).   

In Team Foundation Server, the [changeset](http://msdn2.microsoft.com/en-us/library/ms181408(VS.80).aspx) number is an incrementing number that gets assigned to every transaction of change to the version control system.  Each changeset number therefore represents a precise state of the files in version control on that server instance. 

The advantage of this is that if I want to get the source code that exactly matches the state of play at the time of that build I can do a Get Specific... and ask for changeset 5113.  Additionally, I can lookup changeset 5133 in TFS and get the exact time and date that this change was made.  Also - if I want to compare the differences between builds this becomes trivial (again by knowing the changeset numbers).  It also means that we do not have to create labels for every build.  While labeling in TFS is fairly cheap, no point doing it if we don't have to. 

Anyway.  I am so taken with the changeset build numbering approach that I thought I would mention it here.  While we happen to be building JAR files for our Java code, the same process can easily be applied to .NET assemblies etc.  I'm also going to be modifying the [CruiseControl.NET integration to TFS](http://www.codeplex.com/TFSCCNetPlugin/) to make versioning based on changeset numbers easier.  Stay tuned for details.