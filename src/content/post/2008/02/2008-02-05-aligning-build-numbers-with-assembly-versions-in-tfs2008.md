---
title: "Aligning Build Numbers with Assembly Versions in TFS2008."
date: 2008-02-05T11:19:38.000Z
# post thumb
images:
  - "/images/post/2008-aligning-build-numbers-with-assembly-versions-in-tfs2008.jpg"
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

I like my build numbers to be the same number that my assemblies are versioned with (and my end deliverables).  It just makes things easier to track, that way if I get a bug report in from a customer I can look at the version and easily look at the label in source control to see what code that included. In all deliverables provided to the customer, we always output the version obtained from the current assembly somewhere at the start of any diagnostic information, that way you can easily tell what version they are on and instantly track this back.  This all helps to make it easy for bugs to be filed against the correct version and reported in which version they have been fixed (using the nice integration between Team Build and the Work Item tracking portion of TFS).  

People are often surprised that this feature does not work "out the box" with Team Build, so I thought I would just take the time to document how I made this work for us internally.  As you'll be able to see, in TFS2008 all the basic hooks are provided for us to support this way of working.  

Firstly, our .NET version numbering uses a slightly different scheme to our Java version numbering.  In our Java products, the "build number" portion of the version number is actually the [changeset number of TFS at that point in time](http://www.woodwardweb.com/vsts/000329.html).  In .NET there are 4 components to a typical assembly version number (1.0.1234.5678) and the maximum value for each number is 65535.  Our production TFS server is currently at changeset 7698 which means that we would get about 6 years out of such a build numbering scheme for .NET - that would be perfectly satisfactory if you had a changeset epoch after each major release (so you would reset the build number to be current changeset - 7698 if we did a major version today).  However Team Build needs a unique name for each build - using a changeset based approach risks having two builds with the same build number.  So rather than do a changeset based system, I decided to make the .NET build numbers be a straight-forward incrementing number. I rely of the default functionality of Team Build to create a label for that build number to track the number back to version control.  The incrementing number value is stored in a file on the default drop location for the build.  

Another thing that I should explain is that I don't personally like the "standard" Microsoft way of versioning assemblies as:-     

<Major>.<Minor>.<Build>.<Service>   

To me, it reads much easier as:-     

<Major>.<Minor>.<Service>.<Build>   

Where <Build> is the number that increments every time a build is performed.  As far as I am concerned, this difference is mostly cosmetic as it doesn't change the way the CLR resolves the assembly versions, however feel free to correct me in the comments if I am talking rubbish.  

So - onto how we accomplish this.  Firstly, in TFS2008 there is a convenient target for you to override to generate your custom build numbers called "BuildNumberOverrideTarget".  The important thing is that each build number must be unique, therefore a good rule of thumb is to use something like BuildDefinitionName_1.0.0.1234.  Inside the BuildNumberOverrideTarget you simply set "BuildNumber" property to be what you want.  Here is ours:-  

<PropertyGroup> 
  <VersionMajor>1</VersionMajor> 
  <VersionMinor>0</VersionMinor> 
  <VersionService>0</VersionService> 
  <VersionBuild>0</VersionBuild> 
</PropertyGroup>
<Target Name="BuildNumberOverrideTarget"> 
  <!-- Create a custom build number, matching the assembly version -->      
  <Message Text="Loading last build number from file "$(DropLocation)\buildnumber.txt"" /> 
  <IncrementingNumber NumberFile="$(DropLocation)\buildnumber.txt"> 
    <Output TaskParameter="NextNumber" PropertyName="VersionBuild" /> 
  </IncrementingNumber> 
  <PropertyGroup> 
    <BuildNumber>$(BuildDefinitionName)_$(VersionMajor).$(VersionMinor).$(VersionService).$(VersionBuild)</BuildNumber> 
  </PropertyGroup> 
  <Message Text="Build number set to "$(BuildNumber)"" />  
</Target>

The first thing I do is call a quick custom task I wrote that increments the build number stored in the passed file.  I wanted to do this while keeping a lock on the file itself in case two builds tried to update the same file at the same time.  We then take this new number and build the BuildNumber based upon that value.  The code for the Incrementing Number task is very simple and is given below:-

using System; 
using System.IO; 
using Microsoft.Build.Framework; 
using Microsoft.Build.Utilities; 

namespace Teamprise.Tasks 

{ 

    /// <summary> 

    ///   A simple task to increment the number stored in a passed file. 

    /// </summary> 

    public class IncrementingNumber : Task 

    { 

        public override bool Execute() 

        { 

            NextNumber = IncrementNumber(); 

            return true; 

        } 

        public int IncrementNumber() 

        { 

            using (FileStream fs = new FileStream(NumberFile, FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.None)) 

            { 

                StreamReader reader = new StreamReader(fs); 

                long pos = 0; 

                String line = reader.ReadLine(); 

                // Ignore comments in file 

                while (line != null && line.StartsWith("#")) 

                { 

                    pos = pos + line.Length + System.Environment.NewLine.Length; 

                    line = reader.ReadLine(); 

                } 

                int number = -1; 

                if (line != null) 

                { 

                    number = Int32.Parse(line); 

                } 

                NextNumber = number + 1; 

                // Rewind the file stream back to the beginning of the number part. 

                fs.Position = pos; 

                StreamWriter writer = new StreamWriter(fs); 

                writer.WriteLine(NextNumber.ToString()); 

                writer.Flush(); 

                writer.Close(); 

            } 

            return NextNumber; 

        } 

        [Required] 

        public string NumberFile { get; set; } 

        [Output] 

        public int NextNumber { get; set; } 

    } 

}

You compile this code into an assembly of your choice that lives alongside the TFSBuild.proj file in the build configuration folder in source control and is this loaded using the UsingTask call at the begging of your MSBuild project, i.e.

<UsingTask TaskName="Teamprise.Tasks.IncrementingNumber" 
           AssemblyFile="Teamprise.Tasks.dll" />

The next thing that we have to do is to take the new version and force this into the assemblyinfo files.  Personally, I prefer the AssemblyInfo files stored in source control to have a certain well defined number for each release branch (i.e. 1.0.0.0), and make it the build server that versions them.  Some people like to check these back into source control - if you do that, be sure to check them in with the special comment of "***NO_CI***" to ensure that the check-in does not trigger any CI builds potentially putting you into an infinite loop of building.

So, we modify our assembly version files after they have been downloaded from source control using a technique borrowed from [Richard Banks](http://richardsbraindump.blogspot.com/2007/07/versioning-builds-with-tfs-and-msbuild.html), our interpretation of this is given below:-

<ItemGroup> 
  <AssemblyInfoFiles Include="$(SolutionRoot)\**\assemblyinfo.cs" /> 
</ItemGroup>   
<Target Name="AfterGet"> 
  <!-- Update all the assembly info files with generated version info --> 
  <Message Text="Modifying AssemblyInfo files under "$(SolutionRoot)"." /> 
  <Attrib Files="@(AssemblyInfoFiles)" Normal="true" /> 
  <FileUpdate Files="@(AssemblyInfoFiles)"                                 
              Regex="AssemblyVersion\(".*"\)\]"                 
              ReplacementText="AssemblyVersion("$(VersionMajor).$(VersionMinor).$(VersionService).$(VersionBuild)")]" /> 
  <FileUpdate Files="@(AssemblyInfoFiles)" 
              Regex="AssemblyFileVersion\(".*"\)\]" 
              ReplacementText="AssemblyFileVersion("$(VersionMajor).$(VersionMinor).$(VersionService).$(VersionBuild)")]" /> 
  <Message Text="AssemblyInfo files updated to version "$(VersionMajor).$(VersionMinor).$(VersionService).$(VersionBuild)"" /> 
</Target>

As you can see, we are making use of the custom Attrib task that is provided by the essential [MSBuild Community Tasks](http://msbuildtasks.tigris.org/) to set the files to read/write and then we are calling the MSBuild Community Task FileUpdate to do a couple of regular expression search replaces on the appropriate parts of the files.

And that's about all that needs to be done.  Now our builds have nice incrementing numbers that have the version number included that is the same as the assembly info files.

dp.SyntaxHighlighter.ClipboardSwf = '/js/clipboard.swf';

dp.SyntaxHighlighter.HighlightAll('code');