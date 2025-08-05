---
title: "Rock The Build with TFS"
date: 2009-05-05T11:47:04.000Z
# post thumb
images:
  - "/images/post/2009-rock-the-build-with-tfs.jpg"
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

If [bunnies](http://www.woodwardweb.com/gadgets/000434.html) are just a little bit too cute and fluffy for you, then you might be interested in a little side project that reader Terry Humphries just got in touch with me about.  You see Terry had no love for [robotic rabbits in the build process](http://www.woodwardweb.com/gadgets/000434.html) – but an electric guitar was something that he and the other developers in his team would pay attention to. So he hooked up a vintage 1990’s Warlock Electric guitar made by B.C.Rich to TFS and let that rock their world.  I thought this was a cool project so asked permission to share his email with you all. If you want to get in touch with Terry, drop me a line and I’ll send your details on to him.  

**From: Terry Humphries**     

[](http://www.woodwardweb.com/WindowsLiveWriter/RockTheBuildwithTFS_57CB/guitar_2.jpg)My name is Terry Humphries and I work for EnGraph Software. I’ve been a developer for over 25 years the last three months at EnGraph. I came here to join a development team that was scaling up from a couple of developers to over 14 folks. Part of my job has been and continues to be leading EnGraph’s push into using Team System. I spend part of my time wearing a developer hat and part wearing the TFS admin, Build Sensei hat.  

Having always been a strong believer in nightly builds and making sure everyone is aware of the status of the build, I’m always looking for ways to get the other developers invested in the status of the build.  

Having seen Brain aka the Build Bunny and the Lava Lamp build indicator I decided it was time to create something unique for EnGraph to use.   

I almost used a full size traffic light, but since all of the pcs here are named after guitar manufacturers, a Build Guitar seemed the way to go, and the search was on. It took me about three week to locate the used Warlock I used as the basis of the project. I didn’t want a run of the mill guitar, it need to be electric and it needed to have a unique look. When I got the Warlock it’s better years were behind it, the body was in bad shape. I had to end up stripping it, filling in a few dings and refinishing it with a purple undercoat and a bronze metallic pearlized overcoat.  

I looked at several options for the switching mechanism for the LEDS. Basically, I wanted something that would provide the low dc power needed to drive the LEDS and a programmable interface for switching them on/off. I considered Ethernet based relays, Bluetooth based relays, Ethernet to parallel port converters, and USB controlled relays. Mostly because the other options were much more costly I settled on the USB controlled relay. I decided to mount this control circuit in its own box and use standard Ethernet cabling to get the power to the guitar from the relay. With this option the only things I had to mount in the guitar were the LEDs, the Ethernet jack, and wire connecting them.  

Once I obtained everything I need I started build the *controller*. Wanting it to also be somewhat different I decided to mount the relay circuit old 3.5 diskette plastic case that was designed to hold 10 diskettes. After mounting the circuit board I added the ethernet jack and connected the power supply. Cut a few hole for the cables and bam the Build Guitar Controller was born.  

Next, guitar time. I decided the best place to mount the LEDs was in one of the pickup coil frames, you see a Warlock comes with 2 Humbucker pickup coils each mounted in its own frame. I fashioned a piece of black plastic to fit the frame and drilled three holes for the LEDS. Then I wired the LEDS to the Ethernet jack I had placed in the jackplate.  

Then I hooked everything up loaded the Phidgets drivers and using they’re control panel applet tested the wiring and after a few minutes I had everything working as planned.  

The folks at Phidgets provide 2 way to interface with their devices, either directly or via a webservice, I used both. I couldn’t find a TFS event that fires when a build starts so I created a custom task that turned on the correct relay and hooked it into our build scripts via the BeforeEndToEndIteration target and then used Howard van Rooijen TFS Event Framework to react to the BuildCompletionEndpoint to set the red and green leds.  

The basic code for manipulating the relays is only 9 lines:     

InterfaceKit RelayPhidget = new InterfaceKit();    

RelayPhidget.open("gibson", 5001);    

System.Threading.Thread.Sleep(1000); //wait for the server to connect    

RelayPhidget.outputs[0] = false;     //Set build start off    

RelayPhidget.outputs[1] = true;      //Set build success on    

RelayPhidget.outputs[2] = false;     //Set the other off    

RelayPhidget.outputs[3] = false;    

RelayPhidget.close();    

RelayPhidget = null;   

I’m not sure what else I can tell you about it other that it’s a big hit with the other developers. As for more about EnGraph you can visit our web site at [www.engraph.com](http://www.engraph.com)  

Hardware:     Warlock Electric guitar made by B.C.Rich vintage 1990s     10MM diffused LEDS in Blue, green and red ****    Phidget Interface Kit 0/0/4 available [here](http://www.phidgets.com/products.php?category=1&product_id=1014)     5VDC 350milliamp wallwort power supply     Various bit of wire, tape glue paint, etc.    

Software:     Team Foundation Server Notification Event project template from Howard van Rooijen     VS2008     Phidgets Driver      

Thanks for sharing this with me Terry, and for allowing me to post your email.  For anyone interested, I’ll be talking more about integrating with Team Foundation Build API’s during my session at [Tech·Ed North America 2009](http://www.microsoft.com/events/TechEd2009/) next week.     

**DTL307 Brian the Build Bunny: Extending Team Foundation Server Build**    

Fri 5/15 | 9:00 AM-10:15 AM | Room 404    

This session digs deep into customization of the Microsoft Visual Studio Team System Team Foundation Server Build system. Learn about the .NET API for Team Foundation Build and how to use it to create your own build status display or even have your team chastised about build failures by a robotic rabbit.