---
title: "Teamprise Remote Accelerator Released"
date: 2008-10-28T12:55:51.000Z
# post thumb
images:
  - "/images/post/2008-teamprise-remote-accelerator-released.jpg"
#author
author: "Martin Woodward"
# description
description: "At PDC last night Ed Thomson announced our latest product, the Teamprise Remote Accelerator."
# Taxonomies
categories: ["git", "tfs", "technology", "dotnet", "maker", "teamprise", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
[](http://www.teamprise.com/products/accelerator/) At PDC last night [Ed Thomson](http://www.edwardthomson.com/blog/) announced our latest product, the [Teamprise Remote Accelerator](http://www.teamprise.com/products/accelerator/).  This is a single user Team Foundation Server proxy designed for use by lone remote developers working off-site.  The product was initially developed for internal use as we have quite a few developers that work off site most of the time, like myself.  However when talking with a number of our customers we realised that other people would also get great benefit so we decided to release it as a product.  #### **How Does it Work?**  

The [Teamprise Remote Accelerator](http://www.teamprise.com/products/accelerator/) looks to Visual Studio or Teamprise clients just like any other Team Foundation Proxy Server.  The notion of a download proxy is part of the Team Foundation Server version control protocol.  

Basically, when you want to know the latest version of something the TFS client talks to Team Foundation Server and asks what the latest version of something is and requests a download token.  If a TFS proxy server is configured then the file with that download token is downloaded from the local proxy server.  If the file has already been cached by the proxy server then it can be downloaded immediately over the local network rather than having to wait for the file to be downloaded over the wide area network.  #### **How is this different to the TFS Proxy Server from Microsoft?**  

Microsoft allow you to purchase [TFS Proxy Servers](http://msdn.microsoft.com/en-us/library/ms252490.aspx) for remote your remote offices.  This software lives on a Windows Server machine in the same domain as the Team Foundation Server and is running IIS.  It is a great solution when you have more than a couple of people at the remote site.  The Microsoft TFS proxy server will get the requested file the first time that someone requests it from the proxy server and when the second person requests the same version of that file they will get it instantly from the local network.  The problem is that the initial user does not see any real performance gain - therefore you need more than one person to make the product worthwhile - unless you seed the cache (see [my blog post](http://www.woodwardweb.com/vsts/precaching_your.html) to explain how to do that with the Microsoft TFS Proxy Server).  

[](http://www.woodwardweb.com/WindowsLiveWriter/TeampriseRemoteAcceleratorReleased_A7B9/Remote%20Accelerator%20Configuration_2.png)The Teamprise Remote Accelerator runs as a process in the notification area of your local machine, so does not need a dedicated server.  It can also be configured to "seed" the cache - i.e. you tell the Remote Accelerator what areas of the version control repository that you are interested in and it will poll the server for changes periodically and download the latest versions of any changed files for you.  That way, the file is more likely to exists locally the first time you ask for it.  

Additionally, the Teamprise Remote Accelerator connects to TFS using your TFS credentials - regardless of if your machine is on a domain or not.  Please note that the remote accelerator only connects to TFS with a single set of credentials and these credentials much match those that you are using to connect to TFS.  The Teamprise Remote Accelerator is therefore limited to a single user connection and is not suitable for workgroups.  

That said - if you have multiple machines on your network, either physically or you are running Virtual Machines, then you can configure them to point to your local remote accelerator if you wish.  #### **What sort of productivity improvements are we talking about here?**  

Like everything, it depends on your use.  If you would like to see [detailed benchmarks](http://www.teamprise.com/products/accelerator/benchmarks/), then take a look at the [Remote Accelerator](http://www.teamprise.com/products/accelerator/) pages on the Teamprise website.  Inside Teamprise we are pretty heavy users of branching and we also run quite a few machines to test access to TFS from lots of different operating systems.  Therefore we are always creating new TFS workspaces and downloading source so we see huge productivity improvements (which was the main reason why we wrote this product in the first place).    

As part of our beta-testing we made early versions of the [Remote Accelerator](http://www.teamprise.com/products/accelerator/) available to a few Team System MVP's and select customers, and they too have been seeing pretty impressive performance.  Fellow Team System MVP (and all-round community legend), [Willy-Peter Schaub](http://dotnet.org.za/willy/) has been blogging about his experiences [here](http://dotnet.org.za/willy/archive/2008/10/14/teamprise-remote-accelerator-a-view-after-a-few-battles.aspx).  Since this version we have made several major performance improvements to the code as part of our release process.  

Basically, if you think the Remote Accelerator is of use, then I would encourage you to sign up for a [free trial](https://csp.teamprise.com/eval.aspx) and take it for a spin for 30-days on us.  

**Sounds nifty - how much is it?**  

$99 USD per person.  

**Ok, how do I sign up?**  

First, I would encourage you to [download](http://www.teamprise.com/products/accelerator/download/) the Remote Accelerator and then sign up for a [free 30-day trial license](https://csp.teamprise.com/eval.aspx).  If you have any feedback or comments on the product then [let us know](http://www.teamprise.com/support/).  Once you have decided if the remote accelerator works for your scenario then you can [purchase from our store](https://csp.teamprise.com/catalog.aspx).  

**What next?**  

This first release concentrated on performance and functionality.  While we are continually looking to improve the performance of the Remote Accelerator and improve the remote TFS experience, we are also looking to make the product both easier to use and easier to tell how well it is working for you.  If you have anything you would like to see in the next version of the Remote Accelerator then please [let us know](http://www.teamprise.com/support/).