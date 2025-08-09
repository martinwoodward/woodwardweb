---
title: "Assert in Eclipse"
date: 2006-10-03T10:41:07.000Z
# post thumb
images:
  - "/images/post/2006-assert-in-eclipse.jpg"
#author
author: "Martin Woodward"
# description
description: "Learn how to fix Eclipse settings to enable the assert keyword and ensure compatibility with Java 1.4 for smoother development."
# Taxonomies
categories: ["technology", "teamprise", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
One of the things that Java IDE's have always had over Visual Studio is the ability to target older versions of the VM from the latest and greatest versions of the tools.  For example, I develop in Eclipse 3.2 day to day, but I target Eclipse 3.0 on Java 1.4 for compilations and to debug against.  That way I get errors in Eclipse 3.2 if I try to use a method that isn't in the Eclipse 3.0 object model.  Very useful.  That said - I had a problem recently because my IDE was telling me that I couldn't use the "[assert](http://java.sun.com/j2se/1.4.2/docs/guide/lang/assert.html)" keyword which was introduced in Java 1.4 (which we require for Teamprise). 

The problem was in Windows, Preferences, Java, Compiler.  Source compatibility was set to Java 1.3 and .class file compatibility set to Java 1.2 - I corrected these preferences to make them allow Java 1.4 source and class files and now the [assert](http://java.sun.com/j2se/1.4.2/docs/guide/lang/assert.html) keyword works just fine.