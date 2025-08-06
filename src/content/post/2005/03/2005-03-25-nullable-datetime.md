---
title: "Nullable DateTime"
date: 2005-03-25T17:40:38.000Z
# post thumb
images:
  - "/images/post/2005-nullable-datetime.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["dotnet", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Found my second thing in .Net that really sucks. In .Net DateTime is a reference type and is therefore not nullable (Unlike the Java.Sql.Date class in java).  I am talking to a SQL Server database with a nullable DateTime field and I want to accurately pass this around my application then out of a web service (that is supposed to be interoperable between .Net and Java clients) into a .Net based UI.

Other things that suck about DateTime is that if you create a DateTime and do not initialise it then the object is set to DateTime.MIN_VALUE which happens to be a date lower than SQL Server 2000 can support.  I get the feeling that Dates and interoperability really don't mix...

All in all it is a bit smelly.  Apparently fixed in .Net 2 - but until then I will have to employ some horrible work-around hack.