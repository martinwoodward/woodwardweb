---
title: "Only Running Impacted Tests in a CI Build."
date: 2011-03-14T10:34:32.000Z
# post thumb
images:
  - "/images/post/2011-only-running-impacted-tests-in-a-ci-build.jpg"
#author
author: "Martin Woodward"
# description
description: "One of the key things about your CI build is to ensure that is runs fast so that you have a very quick feedback loop to see if you have a."
# Taxonomies
categories: ["tfs", "maker", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---
One of the key things about your CI build is to ensure that is runs fast so that you have a very quick feedback loop to see if you have a good build or not.  [Rob Maher](http://scrumdod.blogspot.com/) has an [interesting blog post up](http://scrumdod.blogspot.com/2011/03/tfs-2010-build-only-run-impacted-tests.html) describing how he customized the build process to make use of the test impact analysis feature so that only the impacted tests are run as part of the CI build and then the full test suite run later.       

If your tests take a long time to run, you may wish to only run the tests that have been impacted by code changes checked in with the build (and of course run a full nightly build that executes all tests :) Unfortunately there is no out of the box feature to do this, so we need to edit our build xaml to do it.    

[TFS 2010 Build - Only run impacted tests](http://scrumdod.blogspot.com/2011/03/tfs-2010-build-only-run-impacted-tests.html) – [Robert Maher](http://scrumdod.blogspot.com/)   

In Rob’s example he uses a nightly build process to baseline the test impact analysis – however this might be a good candidate for a Rolling Build set to run once an hour or so (I personally prefer builds to run when there is someone still at work able to fix a build process should it break).  Anyway, it’s an interesting read not only for the idea but also as a good example of some of the key techniques when customizing a build in TFS 2010.