---
title: "Getting Started with the TFS SDK for Java"
date: 2011-05-26T18:19:03.000Z
# post thumb
images:
  - "/images/post/2011-getting-started-with-the-tfs-sdk-for-java.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["tfs", "technology", "maker", "teamprise", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
As you may have read over on [Brian Harry’s blog](http://blogs.msdn.com/b/bharry/archive/2011/05/16/announcing-a-java-sdk-for-tfs.aspx), we recently made available a TFS SDK for Java.  This is the same core code that we use in Team Explorer Everywhere 2010 SP1 to talk to TFS from Eclipse and from our Cross-platform command line client – just packaged up into a single jar file to make it easier to consume and re-distribute in your own applications.  

The TFS SDK for Java ships with a bunch of sample applications, check-in policies, custom work item controls and some handy snippets of code.  It also includes an Ant build script to allow you to build the samples that we ship.  However – I thought it would be interesting to walk through how you can consume the SDK in a simple Eclipse project and make use of some of the nice Eclipse features such as inline Javadoc.  

To begin, download the TFS SDK for Java 10.1.0 from the download site and unzip it to a handy location. Next create a new blank Java project in Eclipse (File, New, Java Project).  

Give the project a name (i.e. com.contoso.tfsplay), then press Finish to create the empty project.  The next thing that we are going to do is browse to the empty project in the file system to copy over the relevant files in the SDK.  Having the SDK as part of your Java project makes it much easier to build and deploy it later.  

First of all, browse to your Eclipse workspace folder in the file system (for example mine is at C:\play\tfssdk4j\com.contoso.tfsplay but you can find where yours is by right clicking on the project you just created and selecting properties).  Inside the project folder, create a new folder to hold your TFS SDK bits.  Mine is called tfssdk at the root at the folder.  Inside this copy the redist folder from the TFS SDK ZIP archive.  I also personally ZIP up the Javadoc folder from the TFS and also include it – however if you have a copy of the TFS SDK Javadoc installed on an intranet server somewhere you could just point to it later on.  

Now that we have the SDK inside our project, if I press refresh back in Eclipse on the package explorer I get something that looks like the following:  

[](http://www.woodwardweb.com/Windows-Live-Writer/Getting-Started-with-the-TFS-SDK-for-Jav_8CCD/image_5.png)  

Now we want to configure the project to include the SDK in it’s build path. Right click on your project, select Properties, then Java Build Path.  In the Libraries tab press Add JAR… Select the com.microsoft.tfs.sdk-10.1.0.jar file from your tfssdk/redist/lib folder.  Now that the JAR file is included, we want to expand it to let Eclipse know about the Javadoc and the natives.  Double click on the Javadoc location and point it to where the TFS SDK Javadoc is located.  Do the same for the natives for your platform.  

[](http://www.woodwardweb.com/Windows-Live-Writer/Getting-Started-with-the-TFS-SDK-for-Jav_8CCD/image_11.png)  

Your JAR file definition should then look like the above and you are now up and ready to start talking to TFS via the SDK in your Java project.  

For our example, let’s create a quick class with a main method. (Right click on the project, New, Class…)  

[](http://www.woodwardweb.com/Windows-Live-Writer/Getting-Started-with-the-TFS-SDK-for-Jav_8CCD/image_9.png)  

Then inside the main method, I’ll quickly steal the code that Brian used in his [TFS SDK for Java announcement blog](http://blogs.msdn.com/b/bharry/archive/2011/05/16/announcing-a-java-sdk-for-tfs.aspx) post.    

[](http://www.woodwardweb.com/Windows-Live-Writer/Getting-Started-with-the-TFS-SDK-for-Jav_8CCD/image_15.png)  

Once the code is included and modified to point at my TFS project collection, I’ll quickly debug the code (Run, Debug As…, Java Application…)  

I’ll be posting more samples shortly, but now the code is running let’s step through it.  To begin with we first need to get hold of a project collection. In Brian’s example he uses:  

TFSTeamProjectCollection tpc =      
            new TFSTeamProjectCollection("http://tfs2010:8080/tfs/DefaultCollection");  

The reason this works is that the native code libraries are configured correctly so the SDK can then get the credentials of the logged in user and use those to authenticate with TFS.  However – what if you don’t want to use those credentials but want to pass them in via code?  Well luckily the TFSTeamProjectCollection has lots of overloads including one that allows you to pass username, password and domain.  

[](http://www.woodwardweb.com/Windows-Live-Writer/Getting-Started-with-the-TFS-SDK-for-Jav_8CCD/image_17.png)  

TFSTeamProjectCollection tpc =      
            new TFSTeamProjectCollection("http://tfs2010:8080/tfs/DefaultCollection",       
                    "username","domain","password");  

In our example, we now want to query work items – so we get hold of a work item client as follows:  

WorkItemClient workItemClient = tpc.getWorkItemClient();  

We then create the query that we want to run.  In the example we’re going to execute an ad-hoc query in TFS’s Work Item Query Language (WIQL).  

// Define the WIQL query.          
String wiqlQuery =       
    "Select ID, Title from WorkItems where (State = 'Active') order by Title";  

// Run the query and get the results.          
WorkItemCollection workItems = workItemClient.query(wiqlQuery);     

Finally, we then need to loop over the collection of results and display them.  The WorkItemCollection class contains logic to efficiently handle large result sets.  It will page in a set of query results as needed rather than waiting for all the results to be returned before you can start iterating over them.  This makes it much more efficient if you just need a page of data – i.e.  

final int maxToPrint = 20;  

for (int i = 0; i < workItems.size(); i++)          
{       
    if (i >= maxToPrint)              
    {       
        System.out.println("[...]");                  
        break;       
    }       
    WorkItem workItem = workItems.getWorkItem(i);       
    
    System.out.println(workItem.getID() + "\t" + workItem.getTitle());  
}       

The full code for the QueryWorkItemExample is below.  Hope that is makes a bit more sense now that we’ve walked through it.     

package com.contso.tfsplay;  

import com.microsoft.tfs.core.TFSTeamProjectCollection;      
import com.microsoft.tfs.core.clients.workitem.WorkItem;       
import com.microsoft.tfs.core.clients.workitem.WorkItemClient;       
import com.microsoft.tfs.core.clients.workitem.query.WorkItemCollection;  

public class QueryWorkitemExample {  

    /**      
     * @param args       
     */       
    public static void main(String[] args)       
    {       
        TFSTeamProjectCollection tpc =       
            new TFSTeamProjectCollection("http://tfs2010:8080/tfs/DefaultCollection",      
                    "username","password","domain");       
        
        WorkItemClient workItemClient = tpc.getWorkItemClient();       
        
        // Define the WIQL query.          
        String wiqlQuery =       
            "Select ID, Title from WorkItems where (State = 'Active') order by Title";       
        
        // Run the query and get the results.          
        WorkItemCollection workItems = workItemClient.query(wiqlQuery);  

        System.out.println("Found " + workItems.size() + " work items.");      
        System.out.println();       
        
        // Write out the heading.          
        System.out.println("ID\tTitle");       
        
        // Output the first 20 results of the query       
        final int maxToPrint = 20;       
        
        for (int i = 0; i < workItems.size(); i++)          
        {       
            if (i >= maxToPrint)              
            {       
                System.out.println("[...]");                  
                break;       
            }       
            WorkItem workItem = workItems.getWorkItem(i);       
            
            System.out.println(workItem.getID() + "\t" + workItem.getTitle());  
        }       
        
        System.out.println("Done");       
    }  

}  

In future posts I’ll talk about how to do more advanced things in Java against TFS.  If you have any requests then please drop me a line, but for now take a look at the snippets that we ship in the SDK.  I’ll also be posting walkthrough posts discussing custom check-in policies in Team Explorer Everywhere, custom Work Item Controls as well as other ways of extending Team Explorer Everywhere and using the SDK.  Again – if you have anything in particular that you’d like me to use as an example then let me know.