---
title: "Finally I Virtually Understand"
date: 2005-07-13T17:40:19.000Z
# post thumb
images:
  - "/images/post/2005/07/2005-finally-i-virtually-understand.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover the nuances of C# inheritance and interfaces in Bill Caputo’s insightful article on why interface methods are implicitly 'final'."
# Taxonomies
categories: ["technology", "books", "dotnet", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

[Bill Caputo](http://www.williamcaputo.com/) has posted an interesting article discussing [inheritance in C#, especially when using interfaces](http://www.williamcaputo.com/archives/000138.html). I learned about OO while learning how to write Java, so I still struggle with the fact that methods in C# are not virtual by default. [Bill](http://www.williamcaputo.com/) explains why inheriting a class that implements an interface might not work as you expected.

The key statement here is:-

...the implementation of an interface method is implicitly 'final', just as if the 'sealed' and 'override' modifiers were present.

Anyway, worth reading. I think I might be getting myself a copy of [.NET Essentials](http://www.amazon.co.uk/exec/obidos/ASIN/0201734117/woodwardwebcom)...
