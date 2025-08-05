---
title: "Building Ant projects from Team Build"
date: 2007-12-03T15:56:31.000Z
# post thumb
images:
  - "/images/post/2007-building-ant-projects-from-team-build.jpg"
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

**Update: ** With [Teamprise 3.0](http://www.teamprise.com/) we included this work into the freely downloadable [Teamprise Extensions for Team Build](http://www.teamprise.com/products/build/).  The source is also provided under the MS-PL if you are interested.  You should definately look at [the new version ](http://www.teamprise.com/products/build/)as it contains some fixes and additional features based on feedback during beta testing.

Original Post:

With the recent release of Microsoft Visual Studio 2008 Team Foundation Server we are seeing more and more people looking to use the build capabilities of TFS (often referred to as "Team Build") to manage their Java based builds as well as their .NET ones.  We have an MSBuild task available internally that we use to trigger Ant based builds and report the progress back into TFS, and I wanted to share this with a wider audience to get some feeedback.  This task is heavily influenced by [Aaron Hallberg's Team Build DevEnv task](http://blogs.msdn.com/aaronhallberg/archive/2007/07/12/team-build-devenv-task.aspx) which I encourage you to go look at if you are interested in getting other build systems integration with Team Build. 

You can download an early version of the Ant task from here - (TeampriseBuildExtensions 1.1MB).  There are two versions of the task included in the zip file - one for TFS2005 and one for TFS2008.  Additionally there is a draft set of instructions included on how to get this working today.  We hope to make the process much easier with future releases of Teamprise. 

The Ant task works by calling Java to run Ant. The task first parses the Ant file to locate the name of the project and the description. It then calls Ant and the resulting output from Ant is then parsed by the task to look for key information (such as javac and junit tasks) as well as to pass the results into the MSBuild log. Options which are normally available via ant launching script are available as additional attributes to the Ant task.  #### Example Usage

<Ant TeamFoundationServerUrl="$(TeamFoundationServerUrl)" 
  BuildFile="$(SolutionRoot)\java\HelloWorld\build.xml" 
  BuildUri="$(BuildUri)" 
  AntHome="$(ANT_HOME)" 
  JavaHome="$(JAVA_HOME)" 
  Flavor="%(ConfigurationToBuild.FlavorToBuild)" 
  Platform="%(ConfigurationToBuild.PlatformToBuild)"   
  Properties="BinariesRoot=$(BinariesRoot);BuildNumber=$(BuildNumber);SourceGetVersion=$(SourceGetVersion)" />
#### Task Reference

The following is a complete list of all the attributes supported by the task, note that many of them are best left to the default values unless a different behavior is explicitly required. Items that are in bold are the ones that are frequently used. 

**Parameter**

**Required**

**Description**

**AntHome**

**No**

**Location of Ant on Build Server.  If not specified then the value of the ANT_HOME environment variable will be used.**

AutoProxy

No

In Java 1.5+, use the OS proxies

**BuildFile******

**No**

**Name of the build file to use, by default this is "build.xml" in the current directory.**

**BuildUri**

**Yes**

**The team system URI which uniquely represents the instance of the build being run.  With-in a Team Build MSBuild script, this is normally available in the MSBuild property $(BuildUri)**

Debug

No

Set to "true" to instruct Ant to print debugging information.  By default this is set to "false".

**Flavor**

**No**

**The flavor of the build i.e. Release, Debug etc.  This will default to "Release".  In the Team Build MSBuild scripts, this is normally available as the global property ****%(ConfigurationToBuild.FlavorToBuild)**

InputHandler

No

Specifies the Ant class which will handle input requests

**JavaHome******

**No**

**Location of Java home directory on build server.  If not specified then the value of the JAVA_HOME environment variable will be used.**

KeepGoing

No

Instruct Ant to execute all targets that do not depend on failed target(s)

Lib

No

Specifies a path for Ant to search for jars and classes.

Listener

No

Add an instance of an Ant class as a project listener

Logger

No

Specify an Ant class to perform logging.

Main

No

Override Ant's normal entry point with specified Ant class.

NoClasspath

No

Run ant without using CLASSPATH

Noinput

No

Do not allow interactive input in Ant script

NoJavacBuildSteps

No

Set to "true" to suppress the reporting of javac steps to TFS.  By default javac steps are added as build steps.

NoUserLib

No

Run ant without using the jar files from ${user.home}/.ant/lib

**Platform**

**No**

**The build platform i.e. Any CPU, x86, x64.   This will default to "Any CPU".  In the Team Build MSBuild script, this is normally available as the global property ****%(ConfigurationToBuild.PlatformToBuild)**

**Properties**

**No**

**Properties to pass to Ant in "name=value;name2=value2" syntax.  When calling Ant, it is often useful to pass through properties from the originating MSBuild script - for example ****Properties="BinariesRoot=$(BinariesRoot);BuildDefinitionName=$(BuildDefinitionName);"**

PropertyFile

No

Instruct Ant to load all properties from file with -D properties taking precedence

**Target**

**No**

**Single Ant Target to execute.  If not specified then the default target specified in the script will be used.  It is often useful to specify a target that is executed by Team Build and leave the default target to be what would get executed by a developer in a local workstation build.**

Targets

No

Comma separated list of ant targets to execute.

**TeamFoundationServerUrl**

**Yes**

**The URL of the Team Foundation Server to talk to.  In the Team Build MSBuild script, this is often available in the property ****$(TeamFoundationServerUrl)**

Verbose

No

Set to "true" to instruct Ant to be extra verbose.

As part of the next version of Teamprise we will be providing integration with Team Build in the UI (i.e. inside Eclipse based IDE's or in the stand-alone Teamprise Explorer client).  More on those build capabilities soon - but hopefully you can see that with the ability to run Ant based builds from Team Build and the ability to control/monitor from Eclipse you will have a nice build system that is fully integrated with TFS.

If you find this task useful, then be sure to drop me a line with any feedback you might have.  We have not yet decided how to make the source of this task available, either as an open source project of it's own or as part of a larger community of MSBuild tasks.  There are pro's and con's to both.  In the meantime, if anybody would like the source code then drop me a line.