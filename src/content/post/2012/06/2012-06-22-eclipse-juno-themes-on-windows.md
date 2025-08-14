---
title: "Eclipse Juno Themes on Windows"
date: 2012-06-22T03:59:38.000Z
# post thumb
images:
  - "/images/post/2012/06/2012-eclipse-juno-themes-on-windows.jpg"
#author
author: "Martin Woodward"
# description
description: "Discover how to enhance the Eclipse Juno theme on Windows by switching to Windows 7 for a sleeker, more integrated look."
# Taxonomies
categories: ["technology", "web", "programming", "personal"]
tags: ["blog", "archive"]
type: "regular" # available type (regular or featured)
draft: false
---

I’ve been running Eclipse Juno regularly since the M5 milestone. One of the things I’ve really noticed is that the default theme for Eclipse Juno on Mac OS X blends in better with other Cocoa applications than Juno looks on my Windows machines. Today I just realised that this is because Eclipse is picking up the Eclipse “Windows XP Blue” theme by default. Below is a picture of Juno RC3 with a Windows Explorer window over it for comparison.

[](http://www.woodwardweb.com/Windows-Live-Writer/Eclipse-Juno-Themes-on-Windows-8_2A06/e4_winxpblue_2.png)

To change the theme, go to Window, Preferences, General, Appearance and select Windows 7. This looks a lot better on my Windows 8 Release Preview machine as shown below.

[](http://www.woodwardweb.com/Windows-Live-Writer/Eclipse-Juno-Themes-on-Windows-8_2A06/e4_win7_2.png)

Now, one of the great things about e4 is that it is skinnable using CSS. I thought I’d knock up a quick stylesheet to get rid of the gradient in the toolbar and tidy up a few other little things. It’s also really easy to define a theme as part of the plugin.xml and only have it apply to people running Windows 8 – simply add the following (note the condition on OS version of 6.2):

<extension
   point="org.eclipse.e4.ui.css.swt.theme">

<theme

         basestylesheeturi="css/e4_default_win8.css"

         id="org.eclipse.e4.ui.css.theme.e4_default"

         label="Windows 8 Desktop"

         os="win32"

         os_version="6.2">

   </theme>

</extension>

This is what my Windows 8 theme for Juno currently looks like against explorer:

[](http://www.woodwardweb.com/Windows-Live-Writer/Eclipse-Juno-Themes-on-Windows-8_2A06/image_2.png)

Needs a bit of playing with (for example, I’ve noticed that swapping themes in Eclipse works a lot better if you explicitly override things like the background images that have been used previously in themes in that Eclipse session rather than just leaving them not set). What do you think? If you are interested the CSS is below but it’s just a subtly changed version of the default win7 theme.

@import url('e4_basestyle.css');

.MTrimmedWindow {

    background-color: #EFF6FE;

}

.MPartStack {

    font-size: 9;

    font-family: 'Segoe UI';

    swt-simple: true;

    swt-mru-visible: false;

}

.MTrimBar {

    background-color: #EFF6FE;

}

.MToolControl.TrimStack {

    frame-image:  url("./win7TSFrame.png");

    handle-image:  url("./win7Handle.png");

}

.MPartStack.active {

    swt-unselected-tabs-color: #F3F9FF #D0DFEE #CEDDED #CEDDED #D2E1F0 #D2E1F0 #FFFFFF 20% 45% 60% 70% 100% 100%;

    swt-outer-keyline-color: #B6BCCC;

}

#PerspectiveSwitcher {

    background-color: #E1E6F6 #EFF6FE 100%;

}

#org-eclipse-ui-editorss {

swt-tab-renderer: url('bundleclass://org.eclipse.e4.ui.workbench.renderers.swt/org.eclipse.e4.ui.workbench.renderers.swt.CTabRendering');

swt-unselected-tabs-color: #F0F0F0 #F0F0F0 #F0F0F0 100% 100%;

swt-outer-keyline-color: #B4B4B4;

swt-inner-keyline-color: #F0F0F0;

swt-tab-outline: #F0F0F0;

color: #F0F0F0;

swt-tab-height: 8px;

padding: 0px 5px 7px;

}

CTabFolder.MArea .MPartStack, CTabFolder.MArea .MPartStack.active {

swt-shadow-visible: false;

}

CTabFolder Canvas {

background-color: #F8F8F8;

}

Anyway, lesson from this is to at least change the theme in Juno on Windows 8 from Windows XP Blue to the Windows 7. The jury is still out on my customized stylesheet above – I’m sure someone with some actual design skills could do better.
