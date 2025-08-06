---
title: "State Based Testing vs Interaction Testing"
date: 2005-06-23T15:00:25.000Z
# post thumb
images:
  - "/images/post/2005-state-based-testing-vs-interaction-testing.jpg"
#author
author: "Martin Woodward"
# description
description: "Migrated from old blog archive"
# Taxonomies
categories: ["git", "dotnet", "maker", "web", "programming"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

I'm currently thinking a lot about different testing strategies. [Martin Fowler](http://www.martinfowler.com) has an intesting post entitled [Mock Aren't Stubs](http://www.martinfowler.com/articles/mocksArentStubs.html) in which he also discusses the differences between State testing and Interaction testing. In summary state based testing is when you set up your test conditions and say that when you do _x_ the result in the data or from your method is _y_. Iteraction testing is when you say that when I call the method it should call _a_, _b_ and _c_ passing the appropriate parameters.

In the days when I first started learning to write code professionally (on an MVS mainframe in PL/1) a test was described as a set of conditions that if your code passes then by definition it is working. This is classic state testing. We didn't do interaction based testing then, possibly becuase we couldn't - we didn't have nMock on the mainframe..

Stepping back into the modern world of TDD in dotnet, by doing state based tests IMHO you are more free to refactor and test all possibly branches of the code by adjusting the inputs to the public interface. With a state based approach you find yourself having to edit the tests much less and just wait for the magic green lights to say you have finished.

Interaction testing allows you a much finer granularity of control in your tests, leading to smaller, discrete sections of code. It also allows you to quickely identifiy which part of the code is broke (by following the single red light in xUnit). However, I've recently run into a few instances where problems have been spotted in the very final stages of programmer testing because assumptions were made about the interaction that turned out to be false.

I'm not saying interaction testing is bad. It is just emitting a slightly bad smell for me at the moment, hence why I am re-evaluating how I test.
