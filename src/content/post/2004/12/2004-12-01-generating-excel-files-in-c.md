---
title: "Generating Excel Files in C#"
date: 2004-12-01T04:20:23.000Z
# post thumb
images:
  - "/images/post/2004-generating-excel-files-in-c.jpg"
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

I have been investigating several ways of generating files suitable for use in Excel from a C# application.   

As with most problems, there is more than one way to crack a nut.  Various examples on the web show how to generate formatted sheets in Excel, either by controlling Excel from a C# application or by transforming  XML data.  The XML transformation has the disadvantage that is limits your clients to the most recent versions of Excel, whereas dire manipulation of Excel requires that you have it installed on the server.  You also have to be very careful not to leave instances of Excel running in the background, eventually grinding your server to a halt.

This article provides a demonstration of a very simple method to generate a file that will load into Excel.  It is a bit of a hack that I used from a java platform a few years ago, but it works if all you need is a simple data export (with less than 65536 rows).  All you do is set the response stream to the mime type "application/vnd.ms-excel" and then pass a tab delimted set of data with new lines at the end of each row.