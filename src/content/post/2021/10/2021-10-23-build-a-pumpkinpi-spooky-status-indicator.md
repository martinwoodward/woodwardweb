---
title: "Build a PumpkinPi - Spooky Build Status Indicator"
date: 2021-10-23T18:39:46.000Z
# post thumb
images:
  - "/images/post/2021/10/pumpkinpi-title.png"
#author
author: "Martin Woodward"
# description
description: "Step-by-step instructions for building a PumpkinPi - a Halloween-themed build status indicator using Raspberry Pi Zero and RGB LEDs"
# Taxonomies
categories: ["maker", "technology", "github"]
tags:
  [
    "raspberry-pi",
    "halloween",
    "led",
    "python",
    "diy",
    "maker",
    "ci-cd",
    "build-status",
  ]
type: "regular" # available type (regular or featured)
draft: false
---

With Halloween approaching, what better way to monitor your build status than with a spooky pumpkin that glows different colours based on whether your CI/CD pipeline is passing or failing? The PumpkinPi is a fun project that combines the spirit of Halloween with practical DevOps monitoring.

![PumpkinPi Title](/images/post/2021/10/pumpkinpi-title.png)

## What is PumpkinPi?

PumpkinPi is a spooky build status indicator that uses a Raspberry Pi Zero WH and a Pimoroni Unicorn pHAT to create an RGB LED display inside a pumpkin. The device monitors your build badges (like GitHub Actions workflows) and changes colour based on the status:

- **Green** - All builds passing ✅
- **Red** - Build failing ❌
- **Orange** - Build in progress 🔄
- **Multi-coloured patterns** - Custom effects

The best part? You can use either a real carved pumpkin or the included 3D printable pumpkin case for year-round use!

## Hardware Requirements

This project makes use of the following components:

### Core Components

- **Pumpkin** - Carve a real one or you can always [3D print one](#3d-printed-pumpkin)
- **Raspberry Pi Zero WH** ([UK](https://amzn.to/33rmXEc), [US](https://amzn.to/3lcQLul))
- **Pimoroni Unicorn pHAT** ([UK](https://amzn.to/3l8rPnR), [US](https://amzn.to/30wEWaG)) - Note: discontinued now so you might want to try the [Unicorn HAT Mini instead](https://shop.pimoroni.com/products/unicorn-hat-mini)
- **Micro SD Card** ([UK](https://amzn.to/2SoRagP), [US](https://amzn.to/2GeMWWT))
- **USB power** - I used the official Raspberry Pi Charger ([UK](https://amzn.to/33qvreN), [US](https://amzn.to/36yKkh4)) but you can also power with a USB battery pack

### 3D Printed Pumpkin (Optional)

For the [3D printed pumpkin case](https://github.com/martinwoodward/PumpkinPi/tree/main/stl), you will need:

- **Glow in the Dark PLA Filament** for body ([UK](https://amzn.to/2SmQzwj))
- **Green PLA Filament** for top ([UK](https://amzn.to/2GeMlo7), [US](https://amzn.to/30vuAHX))
- **Adafruit Panel Mount Extension USB Cable** - Micro B Male to Micro B Female [ADA3258] ([UK](https://amzn.to/3irYgf9), [US](https://amzn.to/34pR51V))
- **4 x M2.5 threaded brass inserts** ([UK](https://amzn.to/3ixudCK), [US](https://amzn.to/33rnYw0))
- **4 x M2.5 male PCB standoffs & screws** ([UK](https://amzn.to/3cYGkYE), [US](https://amzn.to/3l8VDk8))

![Pumpkin Parts](/images/post/2021/10/pumpkin-parts.jpg)

When ordering online, whilst Amazon is handy, I also highly recommend [AdaFruit](https://www.adafruit.com/) for electronics purchases in the US and [PiHut](https://thepihut.com/) in the UK. They basically should just park a truck at my house and take all my money!

## Getting Started

### Step 1: Prepare Your Raspberry Pi

Format the micro SD Card and [install Raspberry Pi OS Lite](https://www.raspberrypi.org/downloads/raspberry-pi-os/). If installing onto a Pi Zero you might not have the keyboard and HDMI adapters lying around, so you probably want to do a [headless install](https://www.raspberrypi.org/documentation/configuration/wireless/headless.md), configuring SSH and WiFi by dropping an `ssh` file and a `wpa_supplicant.conf` file onto the root of the SD card after copying over the Raspbian files.

### Step 2: Install the Software

You'll need to install the [Unicorn HAT](https://github.com/pimoroni/unicorn-hat) software, but they have a brilliant one-line installer that takes care of all the dependencies including Python and Git:

```bash
\curl -sS https://get.pimoroni.com/unicornhat | bash
```

In addition, we'll be using the `requests` module in Python, so after installing the Unicorn HAT software, install the `requests` module with the following command:

```bash
sudo pip install requests
```

### Step 3: Get the Code

Next you want to clone the PumpkinPi git repository. I have it at the root of the standard `pi` user:

```bash
git clone https://github.com/martinwoodward/PumpkinPi.git
```

### Step 4: Configure Your Build Badge

You need to modify the settings to point at your build badge. First copy the sample settings provided in the repo:

```bash
cp ~/PumpkinPi/src/local_settings.sample ~/PumpkinPi/src/local_settings.py
```

Then edit the `BADGE_LINK` variable and point at the URL of your build badge:

```python
# Build Badge for the build you want to monitor
BADGE_LINK = "https://github.com/martinwoodward/calculator/workflows/CI/badge.svg?branch=main"
# How often to check (in seconds). Remember - be nice to the server. Once every 5 minutes is plenty.
REFRESH_INTERVAL = 300
```

### Step 5: Hardware Assembly

![PHat Install](/images/post/2021/10/phat-install.jpg)

The hardware assembly is straightforward:

1. **Install the Unicorn pHAT** onto your Raspberry Pi Zero WH
2. **Prepare your pumpkin** - either carve a real one or 3D print the case
3. **Mount the Pi** inside the pumpkin with the pHAT facing outward for maximum light diffusion
4. **Connect power** via the micro USB port

For the 3D printed version, the design includes mounting points for the Pi and cable management for a clean installation.

### Step 6: Test the Setup

Finally, you can run the script as root:

```bash
sudo python ~/PumpkinPi/src/pumpkinpi.py &
```

The PumpkinPi will start monitoring your build badge and change colours accordingly!

## Running at Boot

Once you are happy everything is running how you want, don't forget you can run the script at boot time. The easiest way to do this is to use crontab. See this [brilliant video from Estefannie over on the Raspberry Pi blog](https://www.raspberrypi.org/blog/how-to-run-a-script-at-start-up-on-a-raspberry-pi-using-crontab/) to learn more.

Basically do `sudo crontab -e` then add the following:

```bash
@reboot /bin/sleep 10 ; /usr/bin/python /home/pi/PumpkinPi/src/pumpkinpi.py &
```

Note that we are pausing for 10 seconds before running the python script. This is to allow the network to come up. We could make the Python script more resilient to network outages and/or start up the script using [systemd](https://www.raspberrypi.org/documentation/linux/usage/systemd.md).

## See It in Action

![Pumpkin Orange Animation](/images/post/2021/10/pumpkin-orange.gif)

The PumpkinPi creates beautiful animated effects when your builds are running, and provides clear visual feedback about your project status. Perfect for Halloween, or for adding some fun to your home office year-round!

## Multiple Pumpkins

![Multi-coloured Pumpkins](/images/post/2021/10/multi-coloured-pumpkins.jpg)

Want to monitor multiple projects? Build several PumpkinPis and create your own pumpkin patch of build indicators! Each can monitor different repositories or workflows.

## Get the Files

Ready to start building? Get all the design files, 3D models, Python code, and latest updates at the [PumpkinPi GitHub repository](https://github.com/martinwoodward/PumpkinPi).

## What's Next?

This project opens up lots of possibilities for creative build monitoring:

- **Different patterns** for different types of notifications
- **Integration with other CI/CD systems** beyond GitHub Actions
- **Home automation integration** to sync with other smart devices
- **Seasonal variations** - Christmas trees, Easter eggs, the possibilities are endless!

Happy making, and Happy Halloween! 🎃👻
