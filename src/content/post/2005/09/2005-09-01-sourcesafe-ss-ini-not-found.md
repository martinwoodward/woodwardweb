---
title: "Sourcesafe ss.ini Not Found"
date: 2005-09-01T11:44:16.000Z
# post thumb
images:
  - "/images/post/2005-sourcesafe-ss-ini-not-found.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["technology"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

Some days I forget how much I hate SourceSafe. If for some reason you start being unable to log into your SourceSafe database and get the error "ss.ini" not found this is because the SourceSafe client has renamed the file to a .tmp file while it was doing something to it and for some reason not finished. To fix the problem, simply navigate in explorer to your users folder ([sourcesafedbpath]\users\[user]) and rename the single temp file in that directory to be ss.ini. If that doesn't work you can try copying another users ss.ini file and manually changing all the setting to make it work for the other user. Good luck.
