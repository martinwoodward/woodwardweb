---
title: "Locale sensitive String sorting in Java"
date: 2006-10-03T16:30:32.000Z
# post thumb
images:
  - "/images/post/2006-locale-sensitive-string-sorting-in-java.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["technology", "dotnet", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

So, the day after I get made a Microsoft MVP I do two posts about Java - go figure. Anyway, today I had one of those moments where you thought you understood something and then realize you didn't and probably a lot of your code that you've written over the past 10 years doesn't work as well as you thought... All this with the humble String.compareTo method.

Take the following strings:- charlotte Chloé Raoul Real Réal Rico

In .NET, if you want to perform a standard case insensitive, dictionary based comparison between two strings then you can use the [String.Compare](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpref/html/frlrfsystemstringclasscomparetopic1.asp) method. This does a culture based, case insensitive comparison.

In Java, if you were to do use the Comparable interface which makes use of the standard [String.compareTo](<http://java.sun.com/j2se/1.4.2/docs/api/java/lang/String.html#compareTo(java.lang.String)>) method to sort a list, you would end up with:- Chloé Raoul Real Rico Réal charlotte

That is because [compareTo](<http://java.sun.com/j2se/1.4.2/docs/api/java/lang/String.html#compareTo(java.lang.String)>) looks at the unicode value of the character and sorts on that - which for those of us that tend to live in the ASCII range tends to work ok (only that lowercase letters come after the uppercase ones) - however if you have a language that uses one of the many other characters it doesn't work so well. If you had a language where M comes before A in the alphabet you are totally screwed.

This is were you should be using the [java.text.Collator](http://java.sun.com/j2se/1.4.2/docs/api/java/text/Collator.html) class in Java. The Collator class does locale sensitive string comparisons - i.e. allowing you to do a dictionary base sort of a set of strings.

Dope. One of those classes I should have been using for a while... I thought I was just being dumb, but then a couple of other people I mentioned this to were not aware of the issue so I thought it worth a blog post.
