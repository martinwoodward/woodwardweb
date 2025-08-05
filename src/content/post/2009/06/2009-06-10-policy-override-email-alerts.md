---
title: "Policy Override Email Alerts"
date: 2009-06-10T12:42:45.000Z
# post thumb
images:
  - "/images/post/post-1.jpg"
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

A guiding principle with Team Foundation Server is that all the flexibility of configuration and all the control should not get in the way of getting work done.  For example, if you try to do a check-in that fails a defined check-in policy, you get the following warning.  

The key thing about check-in policies is that you can always override them.  Some check-in policies (such as the Build policy) actually rely on this behaviour.  However, this fact can irk some software configuration managers when they first figure this out.  They’ve defined a check-in policy for a good reason, and gosh darned it they do not want their developers to be able to check-in unless they meet the check-in policy or they better have a really good reason.  

Now, don’t get me started on how check-in policies can be abused in TFS.  Like all shiny new toys, sometimes people can go crazy with them and have check-in policies to enforce things (such as code coverage) that in my opinion would be best covered by an automated build system.  But that rant is off limits for today.  Let’s take a check-in policy that I wouldn’t have a problem with, the check for work item policy.  This policy ensures that you developer has captured which work item the check-in is related to.  The key point about this check-in policy is that if you do not capture that information now then it is hard to remember exactly which work item that should be later on.    

When introducing this new check-in policy to a team, you want to make sure that everyone understand the value in associating work item to check-ins.  Being able to explain this to a large team also makes you question the value yourself which is an important self check before switching it on.  Remember **All check-in policies cost money**.  Each check-in policy you enable will slow down the check-in process just a fraction.  As you want people to be checking in regularly this fraction is amplified.  Taking a rough figure of each check-in policy takes 5 seconds to ensure you have correctly met, roughly translates to 5 cents per check-in for developer time in a US company,  Say you have on average 6 check-ins per day (a figure that you are always trying to raise).  Therefore, this quick back of an envelop calculation puts the annual cost of a check-in policy to be around $70 per developer per year.   

Not a huge amount, considering how much free soda a developer can drink in a year – but still not beer change either.  The key point is not so much cost, but that the cost is per check-in.  People always try to take the path of least resistance, therefore the more you penalise the check-in process by slowing it down the less often people will check-in – which is exactly the opposite behaviour that you want to encourage.  

Anyway, once you have convinced everyone including yourself of the value of a check-in policy, you now want to encourage people adhere to it.  The problem of course is that check-in policies can be overriden by checking a box and typing in a single letter as the comment.  Overriding check-in policies is something that you want people to think carefully about, and in my experience the best way of making people think about something in the development process is peer pressure.  ## **Configuring Email Alerts for Check-in Policy Overrides**  

For people to not override a check-in policy without thinking about it, there has to be some penalty involved in overriding the policy.  Often this is simply the fact that the policy warning box will pop up.  It is usually easier to find the valid work item than it is to go through the check-in policy override dialog.  That said, you can easily configure TFS to send an email to an individual – or more usefully in this scenario – a distribution list every time someone overrides a check-in policy.  This has two effects.  First, it makes them think if they have a good reason for overriding the policy – their managers and peers will get an email if they override, so this makes you pause for thought straight away.  Secondly, because the comment provided in the check-in policy override is in the email sent by TFS it encourages people to properly document the reason for the policy override in the comment box rather than just typing some random characters.  

The easiest way to create a check-in policy override email is to install the [Team Foundation Server 2008 Power Tools](http://msdn.microsoft.com/en-us/teamsystem/bb980963.aspx).  This includes the very useful alerts editor into your Team Explorer.  Double clicking the Alerts node in Team Explorer will bring up the alerts editor, where you can press “New” to create a new alert.  

There are a number of default alerts provided with the tool, and the one that we want is under the Check-in Alerts section, “Check-In to a specific folder with a policy overridden”.  

 In the alert, you then provide the email address that you want it sent to.  

If anyone now overrides the check-in policy, and email will be sent to the address provided in your alert along with the reason they provided for overriding the policy.  It’s then up to the organization to ensure that these stay rare events, that people not providing a good reason are suitably ashamed and that everyone just doesn’t set up an email filter to send those messages to the trash.  

As with all actions, there are [consequences which you have to think through.](http://www.woodwardweb.com/vsts/the_measurement.html)  For example, by switching on the work item association policy and enabling policy override emails are you now making it so that people will randomly associate a check-in with *any* work item?  It’s because of constant issues like this that you have to make sure everyone understands *why* the check-in policies are in place in the first place and buys into the procedure that you would want them to follow.