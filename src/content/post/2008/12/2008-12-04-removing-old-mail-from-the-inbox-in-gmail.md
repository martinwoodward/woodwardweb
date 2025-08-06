---
title: "Removing Old Mail from the Inbox in GMail"
date: 2008-12-04T23:55:23.000Z
# post thumb
images:
  - "/images/post/2008-removing-old-mail-from-the-inbox-in-gmail.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["technology", "teamprise", "web", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
I recently moved my domain email over to Google Apps for Domains.  So far I have been very happy with it and all my family have been set up with accounts, and all is working well for them to.  I decided to move my old mail archive into GMail so that I have the messages available for searching from whatever machine I happen to be on.

To do this, I used the [Google Email Uploader](http://mail.google.com/mail/help/email_uploader.html), and it worked well (but did take a long time to complete against my rather large Outlook archive dating back to 2001).

The only problem was that I now had an awful lot of messages in my inbox that I didn't really want to see - also because I use IMAP to connect my mail clients up to GMail I didn't want them to download all that mail again.

It took me a while to figure out how to archive all the old mails, so I am logging it here for future reference. I exclude stared mail as I will flag a message in my email clients that I might want to respond to later and unflag when I am finished with it.  The exclusion means that I won't archive the flagged messages which isn't so important this time round but will be handy if I use the query again to prune my inbox  Hope it may also be helpful to you.

To archive old mails in Gmail:

	In the search box type "in:inbox -is:starred before:2008/06/01" where the date is in yyyy/mm/dd format.
	Press the Select All link.  When you press this link, but you have more than a page of results a new link will appear that says "Select all conversations that match this search" - press that
	In the Action drop down, select Archive.

The old mails will now be available when you search, and when you look in the "All Mails" folder - but will not be included in your inbox.