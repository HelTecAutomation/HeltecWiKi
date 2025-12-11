---
title: "LoRaHunt"
description: "Protecting endangered species"
category: "News"
author: "BrunoGriffon"
date: "2025-12-08"
image: "img/LoRaHunt.jpg.jpg"
---

![image info](img/LoRaHunt.jpg)

Invasive species introduced by humans threaten native fauna and flora through their unchecked spread. Therefore, invasive species must be monitored and, if necessary, relocated. LoRaHunt is a project to monitor the live traps required for this purpose.

## Conserving native wildlife

Hunters don't just hunt, they are also active conservationists. In our hunting grounds, we have long observed a decline in native species such as hares, pheasants, songbirds and even amphibians. One main cause of this is the raccoon. The raccoon originates from North America and is an invasive species in Europe; it does not belong in these latitudes. In the 20th century, raccoons were imported to Europe for fur production. They escaped from farms and were released into the wild. They have no natural enemies.

![image info](img/Animals.jpg)

Therefore, we decided to set up live traps in our hunting grounds to get an overview of the raccoon population. To avoid unnecessary suffering of the animals, each trap must be checked twice a day or there must be electronic monitoring to see if the trap has been triggered. This is required by law.  But, visiting a dozen traps twice per day is not an option. There are commercial trap detectors for electronic monitoring. But they are expensive to purchase and incur monthly costs for sending messages via mobile phone network.

This was the idea behind LoRaHunt. LoRaHunt uses free LoRa radio technology to send the trap detector data to a central base station connected to the internet, which then forwards the messages via WhatsApp and email. The trap detectors are significantly cheaper than trap detectors with mobile phone technology and there are no recurring costs.

## LoRaHunt Components

Our LoRaHunt installation consists of three components:

+ Trap detectors at every live trap 
+ A base station to alert users and manage the trap detectors  
+ Optional repeaters to increase the network coverage 

### Trap Detector

![image info](img/TrapDetector.jpg)

Each live trap is equipped with a LoRahunt trap detector. The main component is [**Heltec's WiFi LoRa 32(V3) board**](https://heltec.org/project/wifi-lora-32-v3/) in a [**waterproof housing**](https://de.aliexpress.com/item/1005007992259939.html). Power is supplied by four [**18650 lithium-ion**](https://de.aliexpress.com/item/32810182330.html) cells. This is sufficient for up to three months of battery life. The ESP32 is in deep sleep most of the time and is awakened by dragging away a magnet from a [**reed proximity switch**](https://de.aliexpress.com/item/1005004517568686.html) when the trap is triggered. The ESP32 then sends its data and waits for confirmation by the base station. In addition, it wakes up twice a day via a timer and sends a ping. This serves to check whether it is still functioning and replaces the legally required manual inspection of the trap.
Another [**reed switch**](https://de.aliexpress.com/item/1005007039328744.html) can be used to wake up the trap detector to open up a Wifi hotspot  and then test the connection to the base station, change settings, or update the firmware over the air.

![image info](img/TrapDetectorUI.jpg)

### Base Station

The base station receives data from the trap detectors and forwards it to users via WhatsApp and email. To do so, it connects to a nearby Wifi network. When a trap detector reports, it sends back a confirmation of when the trap detector should wake up from deep sleep and report its status again. Furthermore, it monitors the status reports and alerts users if a trap detector fails to report its status in time or if a trap detector is in need of recharging its batteries.

![image info](img/BaseStation.jpg)

The base station can be accessed from the internet via a web server on the ESP32. The status of the trap detectors is displayed and the trap detectors and users can be managed.
The base station runs on the same hardware as the trap detectors, except for an [**antenna with better gain**](https://de.aliexpress.com/item/1005007301116616.html) and it is powered by a power supply unit instead of batteries. 

### Repeater

LoRa technology enables amazing radio ranges. However, the traps are usually located on the ground in dense vegetation. This limits the range, especially since a maximum transmission power of only 21 dBm is permitted in the ISM 868 MHz band in Europe. However, our hunting ground covers several square kilometers. We have therefore set up a number of repeaters. In a repeater, the ESP32 is activated by the SX1262 LoRa chip as soon as it receives data from a trap detector or the base station. The data is then forwarded and ESP32 goes to sleep again.

![image info](img/Repeaters.jpg)

The hardware of a repeater is again the same as that of a trap detector. However it has got the same antenna as the base station and the power supply is provided by a [**solar panel**](https://de.aliexpress.com/item/1005006466633406.html), as the power consumption is higher than that of a trap detector.

##  Wrapping Up

Based on [**Heltec's WiFi LoRa board**](https://heltec.org/project/wifi-lora-32-v3/) we have set up a relieable trap detector network. There are no recurring costs by using mobile networks and the cost per device is only half the price of commercial solutions. 
Heltec's board has proven worth even in harsh environments like frost and summer heat. It was a lot of fun to set up the network, and it's great to see that it's helping to preserve our natural fauna.