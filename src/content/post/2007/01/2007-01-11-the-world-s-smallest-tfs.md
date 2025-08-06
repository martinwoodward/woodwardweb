---
title: "The World's Smallest TFS?"
date: 2007-01-11T15:46:00.000Z
# post thumb
images:
  - "/images/post/2007-the-world.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories:
  [
    "tfs",
    "technology",
    "books",
    "gadgets",
    "maker",
    "teamprise",
    "web",
    "programming",
  ]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

[Dave Glover](http://blogs.msdn.com/dglover/default.aspx) has held onto the title of [world's smallest Team Foundation Server](http://blogs.msdn.com/dglover/archive/2006/08/07/690479.aspx) instance since August 2006. However, I have a confession to make.

On Tuesday I was doing an MSDN webcast demonstrating the Teamprise plug-in. We have a bunch of TFS test instances over in our head office in Champaign, but I was doing the webcast from my office in Northern Ireland. I was a little worried about running live meeting, routing my VoIP phone call and also accessing a test TFS instance over the VPN back into the office all on my 2Mb ADSL connection so I figured I would play safe and talk to a local instance of TFS. Normally I talk to one running on my laptop - however, I had a spare machine sitting on the desk right next to me that I can connect to over my Gigabit Ethernet. It is dual core with 2GB RAM and 120GB hard disk just sitting idle - so I figured I would put TFS on it. The machine worked a dream, and the demo passed off flawlessly (well, apart from a few presenter glitches, but you can't blame TFS for that). This was a little surprising for me, as the machine in question was my Mac Mini...

Courtesy of the good folks at [SizeEasy.com](http://www.sizeasy.com/) here is a comparison between my [Mac Mini](http://www.apple.com/macmini/), [Dave Glovers Mini ITX system](http://blogs.msdn.com/dglover/archive/2006/08/07/690479.aspx) in a [Morex 3888 case](http://www.auspcmarket.com.au/show_product_info.php?input[product_code]=CA-MO3688BLK-80&input[category_id]=371) and a can of [pop](http://www.popvssoda.com/).

Now, I cheated a little bit. Rather than installing a clean version of TFS (with all the pre-requisites such as Windows Server 2003, SQL Server 2005 etc) I simply dropped in a test VMWare image that I normally use for demos into a beta version of VMWare Workstation 6 that I had installed on the Vista partition of my Mac Mini. I'm not sure if virtualized instances count in the World's Smallest TFS Server book of records, but maybe now you can see why I was surprised when it worked so well :-)
