---
title: "NTLM Explained"
date: 2005-06-26T23:31:37.000Z
# post thumb
images:
  - "/images/post/2005/06/2005-ntlm-explained.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover the intricacies of NTLM authentication and its vital role in enabling seamless interoperability between MS and Unix-like environments."
# Taxonomies
categories: ["technology", "books", "dotnet", "web"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
If you have ever tried interoperability between an MS environment and any of the others you are likely to have tripped over NTLM authentication before now.  Obviously there is no RFC for this one, but Eric Glass has an [excellent explanation of NTLM](http://davenport.sourceforge.net/ntlm.html) that was gathered by reading public available information and a bit of network sniffing.  This information was used by the Samba developers when they were enabling Windows File Sharing to/from *nix which is such a great achievement I am still in awe that they ever got it done.