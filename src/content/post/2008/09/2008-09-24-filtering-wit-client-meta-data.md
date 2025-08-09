---
title: "Filtering WIT Client Meta-data"
date: 2008-09-24T11:24:39.000Z
# post thumb
images:
  - "/images/post/2008-filtering-wit-client-meta-data.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover how to enhance TFS 2008 SP1 performance by enabling WIT Client Meta-data Filtering to optimise network traffic and data management."
# Taxonomies
categories:
  [
    "tfs",
    "technology",
    "dotnet",
    "maker",
    "teamprise",
    "web",
    "programming",
    "podcast",
    "personal",
  ]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

### In TFS 2008 SP1, a new feature was quietly introduced, WIT Client Metadata Filtering. This feature could boost the performance of your Team Foundation Server experience, reduce the amount of traffic flowing over your network and reduce the data porosity of your TFS instance. Yet it is not enabled by default. In this post I'm going to explain the feature, what it does and how and when to enable it.

But first, what the heck is WIT meta-data and why do you care about filtering it? #### **WIT Meta-data Explained**

Team Foundation Server has the concept of we all know and love of "Work Items". A work item is a bug, task, requirement, feature - whatever you have defined as the main elements of work that make up your software development process. TFS has a very flexible Work Item Tracking system (known by the [TLA](http://en.wikipedia.org/wiki/TLA) of WIT). The key to the flexibility of the WIT functionality is that everything that makes up the work item is customizable. How it looks, what data can be stored and what states the work item can be in are all configurable by editing the work item definition in TFS. A single Team Foundation Server instance is split into multiple Team Projects, each one able to have its own work item definitions independent of the other projects on that server.

When you work with work items in Visual Studio or Eclipse, one of the nice things about TFS is that if you change a field the client instantly knows what other fields need to change and what values are permitted. There is no delay while the client asks the server something - it just happens. This is because the rules that make up the work item definition are actually all downloaded to the client machine and kept in sync with the server so that the client always knows exactly which values are available for each field. These rules make up what is known as the WIT meta-data.

[](http://www.woodwardweb.com/WindowsLiveWriter/FilteringWITClientMetadata_981F/image_2.png)Let's make this a little less abstract and take a look at one of the default work items that comes in the MSF Agile process - the Task.

In a Task, we have basic stuff like the title. The client displaying the task needs to know that you want to see the title. You want to see it on the top left hand side, it contains text and that it is mandatory. That's at least 4 rules already - field name, data type, form position and validation rules. Next we have the "Discipline". It is a mandatory text field that has a set of allowable values that appear in a drop down box. The rules for this field cover not only the field type, validation position etc but also all of the allowed values for it (or "constants" in the meta-data world). Then we have a few more fields. The "Assigned To" field contains everyone that the work item can belong to. By default, this is the full name of everyone who has access to your Team Foundation Server instance (this is a dumb default by the way - [but a topic for another day](http://blogs.msdn.com/team_foundation/archive/2005/05/23/421178.aspx)). Not only do the work item rules have to store every single person that the work item can be assigned to, it also has to remember who created the work item and (in the case of a MSF Agile "bug" for example) know that when it is marked as resolved that it should default to being re-assigned back to the person who raised it. And these are only a few of the fields and possible state transitions that are possible for a single work item type in a particular Team Project.

As you can tell, this meta-data quickly mounts up. Not only that, you can change a work item template at any time and the allowed values in the fields change quite often (for example as new people are added to the project or a build is run). This means that the client has to be kept up to date of the changes made to each work item type as they are made. An interesting problem.

How this is solved in TFS is that the work item client maintains the state of its locally downloaded meta-data and what versions it has of them. Whenever it talks to the server to perform a work item related query it tells the server what versions of each of the types of meta-data it is on and the server then sends back all the stuff it doesn't know about yet along with the data the client was actually asking for.

For example, when you make a query in TFS to see what work items are assigned to you at the moment it queries TFS and in the same request tells TFS what versions of all the meta-data tables it has. In the response from TFS you get the results of the query and also any rows to be modified in the meta-data.

So far so good. Sounds like a good way of achieving a very rich client side experience. One of the problems with it is that when Team Foundation Server 2005 shipped the client received ALL the metadata for ALL team projects on the server, regardless of how many of those projects the user had access to. This is obviously less than ideal - not only is some information about other projects in TFS leaking out but it imposes a limit to the number of Team Projects on a server.

This Team Project limit is well documented in a MSDN article from Bill Essary "[Team Foundation Server Project Limits](<http://msdn.microsoft.com/en-us/library/aa974183(VS.80).aspx>)". The more team projects you have, the more meta-data that exists. This has to be downloaded to the client the first time it connects, and every time a service pack is applied. Not only that, the meta-data has to be built up by the server, sent over the wire and loaded into memory to be used by the client. If you have too many Team Projects on the server, you'll get too much meta-data. Too much memory will be needed in the client, or worse, too much memory gets consumed by the server processing all the client download requests causing excessive IIS worker process recycling and severely impacting TFS performance. To take the perverse case, if you apply a TFS service pack to a production instance with 200MB of WIT Metadata then usually the service pack will "stamp" the meta-data cache meaning all new clients will need to download a new version of the entire cache next time they connect. You apply the service pack on a Saturday and everything is looking good. Monday morning rolls around and at 9am everyone boots up their machines and logs into TFS and starts requesting the 200MB download all at the same time, saturating the IIS server running TFS and the network connection to it meaning they will all have to wait a long time to get up and running.

In Team Foundation Server 2008 SP1, a new feature was introduced that alleviates at least some of these issues - WIT Client Meta-data filtering. The feature is pretty simple, by setting a flag in your TFS web.config all clients will only get the WIT meta-data applicable to their user-id. This decreases the amount of meta-data that the client must download and parse.

For a system like CodePlex this feature is a great boon. CodePlex is the Open Source hosting solution from Microsoft and it uses TFS at the back-end. They have several TFS server instances each hosting many team projects. Typically a developer hosting a project on CodePlex might have access to one or two projects on a server, but in the past they had to download all the meta-data for all projects on that server when they wanted to connect with Visual Studio or Teamprise. CodePlex were one of the first organizations to enable WIT Meta-data filtering, even before SP1 was publically available. After the feature was enabled, the average meta-data download size went from about 40Mb to 3.5MB - that makes a big difference to the initial connection speed when you start downloading that amount of data over the internet.

In fact, this feature makes so much sense you might be wondering why it is not enabled by default. The reason is that some applications (especially server-side ones, such as Team System Web Access), actually made use of the fact that WIT Meta-data is the same for all users and so they only download a single copy of it. This worked great in the old days, but if WIT meta-data filtering were enabled then they would only see the WIT meta-data belonging to the first user to connect.

Thankfully, the WIT team took this into account. Not only is the feature disabled by default but they also make it so that you could control which client applications were excluded from the meta-data filtering by providing their user agent. #### **Enabling WIT Meta-data filtering.**

Now that we have been through all the gory details, let's finally see how to switch on the feature.

In the appSettings section of the %ProgramFiles%\Microsoft Visual Studio 2008 Team Foundation Server\Web Services\WorkItemTracking\web.config file add the following keys

1: <add key ="filterClientMetadata" value="true"/>

2: <add key ="excludedUserAgents" value="WebAccess:w3wp:witfields:witimport:witexport:witadmin"/>

The _filterClientMetadata_ switch determines whether to filter client metadata based on the calling user's access rights (true) or not (false). If not provided the setting will default to false.

The _excludedUserAgents_ switch is a colon delimitated list of strings that may appear in the requested clients HttpRequest UserAgent header. You can take a look at your IIS logs or your TFS Activity logs to determine what user agents are used, but a handy feature of the TFS .NET API is that the executable name using the API is recorded in the user agent string, meaning that you can easily find your specific utility and exclude it if necessary. As far as I am aware, the only publically accessible application that makes use of shared meta-data is Team System Web Access, so we put "WebAccess" in our excluded user agents setting. We also put in the names of the utilities in Team System that need to see all the metadata to report back correct information to the TFS administrators.

Note that the text provided in the excluded user agents setting can appear anywhere in the string using a case insensitive search. Also note that all requests coming from the same machine as the TFS application tier are automatically excluded.

And that is all there is to it. The next time a new client connects they will only get meta-data relevant to them.

#### **Effect on the Team Project Limit**

This might be too nuanced to place into a general guidance document, but the limits on the numbers of Team Projects on a server start to get a bit of wiggle room once this feature is enabled. If most users in TFS only have access to a handful of projects, the soft limit can go moderately high, so long as multiple administrators do not make a fresh, first connect concurrently. Using the meta-data filtering, the total number of team projects probably becomes less of a factor in determining the total size of the meta-data. Instead, the biggest factor probably becomes the total number of users on a server.

That said, for "normal" companies, if you are bumping up on these limits already (with the product only having been around since 2005) then you are possibly not using Team Projects correctly. Team Projects should be fairly large, long running things - not created one per solution as some people seem to want to do. However, if you do have tens of Team Projects on a server, with the majority of users only having access to a subset of them then I definitely recommend you take a look at client meta-data filtering.
