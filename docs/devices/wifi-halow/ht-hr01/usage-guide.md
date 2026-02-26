---
sidebar_position: 1
title: Usage Guide
---

# HR01 Get started

### Hardware

#### Hardware Preparation
- [Pi-CamLow](https://heltec.org/project/ht-hc32/)
- Raspberry Pi 1/2/3/4
- Micro SD card
- SD card reader
- Computer running Windows, Linux, or macOS

#### Hardware Installation

Follow the steps shown below to install and connect the device.

![Hardware Installation](./img/10.png)

#### Power

HR01 is powered by Raspberry PI, so it is sufficient to connect the Raspberry PI power supply.



### Install firmware

1. Download the [HR01_Firmware](https://resource.heltec.cn/download/HT-HR01/Raspiberry%20firmware) and [Raspberry Pi Imager](https://www.raspberrypi.com/software/).
2. Insert the SD card into the card reader and connect it to your computer.
3. Install and run the **Raspberry Pi Imager tool**.

![Raspberry Pi Imager](./img/11.png)

4. Select the appropriate Raspberry Pi model. Select `Use custom`. Then choose the **HR01_Firmware** you just downloaded.

![Select Custom Firmware](./img/12.png)

5. Click `NEXT` and complete the firmware installation.
6. Remove the SD card from the card reader and insert it into the Raspberry Pi.

![Insert SD Card](./img/13.png)



### Setup and Use

1. Powering on the device, the red indicator light should turn on, indicating that the device is starting up (takes a few dozen seconds).
2. Connect your Raspberry PI to your computer with an Internet cable.

![Connect Internet](./img/14.png)

3. Press and hold the device button for 3 seconds until the yellow light turns on, then release the button.  
4. Open the web browser on your computer and go to `10.42.0.1`.

- Default username: **root**  
- Default password: **heltec.org**

![Web UI](./img/05.png)

5. Select the mode you want to run and configure it accordingly.  
 
- [Wi-Fi HaLow Gateway(AP) Mode](/docs/devices/wifi-halow/ht-h7608/gateway)
- [Wi-Fi HaLow Client(STA) Mode](/docs/devices/wifi-halow/ht-h7608/station)
- [Wi-Fi HaLow Mesh Gate Mode](/docs/devices/wifi-halow/ht-h7608/mesh_gate)
- [Wi-Fi HaLow Mesh Point Mode](/docs/devices/wifi-halow/ht-h7608/mesh_point)





