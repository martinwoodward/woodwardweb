---
title: "TFS 2010 API By Example: Getting Links to Web Access"
date: 2010-09-20T15:57:04.000Z
# post thumb
images:
  - "/images/post/2010-tfs-2010-api-by-example-getting-links-to-web-access.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["tfs", "technology", "maker", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
In Team Foundation Server 2010 web access is installed by default.  Therefore you can now happily create links to web access resources and know that there is somewhere that you can point a web browser to to find more information.  However what is less well known is that there is a handy service available in the TFS 2010 object model to help you create the links – the [TswaClientHyperlinkService](http://msdn.microsoft.com/en-us/library/ff734705.aspx). 

Take a quick look at the [MSDN documentation](http://msdn.microsoft.com/en-us/library/ff734705.aspx) for more information, but a quick look at the [methods available](http://msdn.microsoft.com/en-us/library/ff734705.aspx) in IntelliSense shows you some very useful methods including:  [GetAnnotateSourceControlItemUrl](http://msdn.microsoft.com/en-us/library/ff738094.aspx) – Annotate a file in version control  [GetChangesetDetailsUrl](http://msdn.microsoft.com/en-us/library/ff731890.aspx) – Show the details for a particular changeset including comments and all the files changes along with links to do comparisons of individual files etc.  [GetDifferenceSourceControlItemsUrl](http://msdn.microsoft.com/en-us/library/ff735213.aspx) – Show the results of a diff between two files in version control  [GetHistorySourceControlItemUrl](http://msdn.microsoft.com/en-us/library/ff731683.aspx) – Show the history for a file in version control  [GetHomeUrl](http://msdn.microsoft.com/en-us/library/ff734672.aspx) – Get a link to the web access application for the server you are talking to  [GetShelvesetDetailsUrl](http://msdn.microsoft.com/en-us/library/ff732568.aspx) – Show the shelveset details including links to be able to compare the files in that shelveset.  Great for code reviews.  [GetSourceExplorerUrl](http://msdn.microsoft.com/en-us/library/ff734143.aspx) – Show the passed path in source control explorer  [GetViewBuildDetailsUrl](http://msdn.microsoft.com/en-us/library/ff737275.aspx) – Show the build report for the passed in build detail.  [GetViewSourceControlItemUrl](http://msdn.microsoft.com/en-us/library/ff737186.aspx) – Show the passed item from version control.  [GetWorkItemEditorUrl](http://msdn.microsoft.com/en-us/library/ff736178.aspx) – Show the work item  [GetWorkItemQueryResultsUrl](http://msdn.microsoft.com/en-us/library/ff731630.aspx) – Run the passed stored query on the server and show the results 

Using the link service is very easy if you are used to calling other TFS services in code.  For example: 

TfsTeamProjectCollection tfs = new TfsTeamProjectCollection(new Uri(projectCollectionUrl));
TswaClientHyperlinkService service = tfs.GetService<TswaClientHyperlinkService>();
 
if (service != null)
{
    // View Changeset
    int changesetId = 1;
    Uri viewChangesetUrl = service.GetChangesetDetailsUrl(changesetId);
    Console.WriteLine("Changeset " + changesetId + ": " + viewChangesetUrl.AbsoluteUri);
 
    // View annotate on a file
    Uri annotateFileUrl = service.GetAnnotateSourceControlItemUrl("$/path/to/file/myfile.txt", 
                             VersionSpec.Latest.ToString());
    Console.WriteLine("Annotate: {0}", annotateFileUrl.AbsoluteUri);

}