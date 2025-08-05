---
title: "Building Maven Projects with Team Foundation Build"
date: 2009-04-23T11:26:40.000Z
# post thumb
images:
  - "/images/post/2009-building-maven-projects-with-team-foundation-build.jpg"
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

For a while now, we’ve been helping our Java customers by providing the [Teamprise Build Extensions](http://www.teamprise.com/products/build/) to allow people to easily build Ant based projects using Team Foundation Build and publish JUnit test results into TFS for inclusion in the reports etc.  With the release of Teamprise 3.2 we also released a new version of the Teamprise Build Extensions which enables Maven based builds to be performed under Team Foundation Build with the same ease.  We’ve been using this with a few different customers this year and it has proven to be very successful so I wanted to spread the word a little.  

The easiest way to build a Maven project from Team Foundation Server is to install the Teamprise Build Extensions on your build server using the MSI installer provided on the download site ([http://www.teamprise.com/products/build/](http://www.teamprise.com/products/build/)).  You must also have a Java JDK and a copy of Maven 2 installed on the build server.  See the [User’s Guide](http://www.teamprise.com/products/build/) for full details.  

You can then use a copy of [Teamprise Explorer](http://www.teamprise.com/products/explorer/) or the [Teamprise Plug-in for Eclipse](http://www.teamprise.com/products/plugin/) to create the build definition.    

Once you have given the build definition a name and specified what should be included in the build using the usual options, go to the Project File section.    

Just as in Visual Studio you can change the folder that you want the build configuration to be stored (1) but when you press the Create button (2) things differ a bit from  the Visual Studio interface.  

As you can see, you are prompted as to what type of build you would like to create. When connected to a TFS 2008 server you will be offered two options, Ant and Maven.  In our case we are going to select Maven and then we get to pick the master POM file for our Maven 2 build  

The wizard will then create the TFSBuild.proj file necessary to run the Maven 2 project and check it into the build configuration folder specified previously.  You can then define you trigger and build agent just as you would normally and you should be good to go.  

As well as creating the build definition, the [Teamprise](http://www.teamprise.com) client simply creates a TFSBuild.proj file in the following format which you could easily create yourself if you wanted to create the build from Visual Studio or something.     

<?xml version="1.0" encoding="utf-8"?>         

<Project DefaultTargets="DesktopBuild" xmlns="http://schemas.microsoft.com/developer/msbuild/2003" ToolsVersion="3.5">         

  <!-- Do not edit this -->       

  <Import Project="$(MSBuildExtensionsPath)\Microsoft\VisualStudio\TeamBuild\Microsoft.TeamFoundation.Build.targets" />         

**  <Import Project="$(MSBuildExtensionsPath)\Teamprise\v2\Teamprise.Build.Maven2.targets" />           **

**         **

  <ProjectExtensions>       

    <ProjectFileVersion>2</ProjectFileVersion>         

    <Description></Description>       

    <BuildMachine>buildserver.mycompany.com</BuildMachine>         

  </ProjectExtensions>       

  <PropertyGroup>       

    <TeamProject>Billing</TeamProject>         

    <BuildDirectoryPath>UNKNOWN</BuildDirectoryPath>         

    <DropLocation>\\UNKNOWN\drops</DropLocation>         

    <SkipWorkItemCreation>false</SkipWorkItemCreation>         

    <WorkItemType>Bug</WorkItemType>         

    <WorkItemFieldValues>       

      System.Reason=Build Failure;System.Description=Start the build using Team Build        

    </WorkItemFieldValues>       

    <WorkItemTitle>Build failure in build:</WorkItemTitle>         

    <DescriptionText>This work item created on a build failure.</DescriptionText>         

    <BuildlogText>The build log file is at:</BuildlogText>         

    <ErrorWarningLogText>The errors/warnings log file is at:</ErrorWarningLogText>         

    <UpdateAssociatedWorkItems>true</UpdateAssociatedWorkItems>         

  </PropertyGroup>       

  <ItemGroup>       

    <!--  Maven 2 Call Configuration.          

          The POM file called should be included in the workspace of the build definition.        

    -->       

**    <MavenPomFile Include="$/Billing/Main/billing-service/pom.xml">           **

**         **

      <Goals>install</Goals>         

      <Properties>    

         BinariesRoot=$(BinariesRoot);BuildDefinitionName=$(BuildDefinitionName);    

         BuildDefinitionUri=$(BuildDefinitionUri);BuildDirectory=$(BuildDirectory);    

         BuildNumber=$(BuildNumber);DropLocation=$(DropLocation);LogLocation=$(LogLocation);    

         SourceGetVersion=$(SourceGetVersion);TestResultsRoot=$(TestResultsRoot);    

         TeamProject=$(TeamProject);WorkspaceName=$(WorkspaceName);    

         WorkspaceOwner=$(WorkspaceOwner)       

      </Properties>       

    </MavenPomFile>       

  </ItemGroup>       

</Project>       

The Import statement at the top is calling the Teamprise.Build.Maven2.targets file. This safely inserts the call to Maven 2 into the Team Foundation Build process. It uses the MavenPomFile item group to specify the server path of the POM file to build – this is converted into a local path as part of the build process.   

The Maven 2 integration will listen for surefire steps as part of the build process and automatically include those files in the list of JUnit results to publish to TFS. It will also automatically copy any files in the Maven 2 targets directory over to the drop location for build archival purposes.  

The [Teamprise Build Extensions](http://www.teamprise.com/products/build/) are provided free of charge, and the [source code is available](http://www.teamprise.com/products/build/) under the permissive open source MS-PL license if you want to take a look in more detail at what they do and how they do it.  

Internally, we also have a Maven SCM Provider for TFS coded up and we are about to submit this to the Maven project so that people using Maven will be able to perform SCM operations easily from inside their projects (and use things like the Maven Release plug-in to perform releases).  If you would like a copy of the SCM provider in the mean time then let me know and I can send you a copy.  

Looking forward to hearing what people think.  Now that we have both Maven 2 and Ant support for building Java projects in Team Foundation Server this really helps Java development be a first class citizen in the TFS world. I’m always keen to hear feedback how we can improve the situation further if you have any suggestions then let me know.