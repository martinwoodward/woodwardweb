---
title: "There is no such thing as “User Error”"
date: 2008-10-01T11:31:57.000Z
# post thumb
images:
  - "/images/post/2008-there-is-no-such-thing-as-user-error.jpg"
#author
author: "Martin Woodward"
# description
description: "User error' is a myth; persistent issues often highlight design flaws, not user mistakes."
# Taxonomies
categories: ["tfs", "technology", "teamprise", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
Earlier in the week I was on a support call with a customer who was seeing strange issues.  It later transpired that they had a TFS workspace configuration issue that we were not able to solve quickly over email.  When we were saying the words “TFS Workspace”, they had been translating this as “Working Folder Mapping” which is a perfectly sensible thing to do for someone new to TFS – but was sadly not helping in this case.  Once we’d ran the user through a couple of scenarios they instantly “got it”.  

One of the many pleasures of working for Teamprise is that our end users are nearly all developers which makes our life much easier.  In this particular case, once the customer “got it”, they quickly forgot the time when they hadn’t and became a little apologetic blaming “User Error” for their troubles.  

I don’t believe in “User Error”.  I’m not just being cute – I really don’t believe that it exists.  If you went up to a vending machine and instead of a tasty beverage you ended up with a nasty cut you wouldn’t say it was “User Error”.  Equally, when getting into an elevator to ride from the 20th to the 22nd floor, if you had to travel down 20 floors before going up to your destination it isn’t “User Error” that is causing the diversion but an issue with the user interface and the design of the application.  Especially if you go on this diversion more than twice.  

Admittedly, there are times when users accidentally do dumb things – and there is a learning curve to all applications (the fun my son is currently having learning his numbers by pressing the buttons in elevators is an example of that learning curve).  However if more than one person is having the same issue with your application then it is a good sign that you have a usability fault and you need to make your application more transparent.  While some usability issues will probably always have to live in your software (especially if it is not a mass-market consumer application) at least try to file down some of those sharp edges in your code.  That way, if they do go off the beaten track then at least they shouldn’t get hurt.