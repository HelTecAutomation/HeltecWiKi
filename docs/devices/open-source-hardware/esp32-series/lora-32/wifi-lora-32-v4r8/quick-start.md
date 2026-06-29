---
sidebar_position: 1
title: Quick Start
---

import styles from '@site/src/css/styles.module.css';

# WiFi LoRa 32 Expansion kit V2 Quick Start


## Installing the Battery
After removing the casing, you can install the battery. Battery type:
**18650 flat-top lithium battery**. Be careful not to reverse the positive and negative terminals.

![](img/r82.jpg)

## Power On/Off
Press and hold the Power button for 3 seconds to turn the device on or off.

![](img/v4_r81.png)

## Charging
You can power or charge the device via the USB-C port. The applicable voltage is **5V**.

## Insert the SD card

If an SD card is required, insert it as shown in the diagram, ensuring it is oriented correctly to avoid incorrect insertion.

![](img/sd.jpg)

## Programming & Firmware Flashing 

1. Connect the device to your computer via USB-C.
2. Enter BootLoader mode: Press and hold the USER button, press RST once, then release the USER button.
3. Select the serial port to flash your code. After flashing is complete, press RST to restart.

:::note
  After entering Boot mode, the serial port number may change, so remember to reselect the port.
:::

:::warning
The **WiFi LoRa 32 Expansion Kit V2** currently supports local firmware flashing only.
Meshtastic firmware version **2.7.25** or later is required to support flashing for the WiFi LoRa 32 Expansion Kit V2.
The firmware is provided as a .bin file that includes both `tft` and `factory` images.

![](img/r8mesh.png)
:::

## SDK
Please refer to the: [Heltec ESP32 Series Quick Start](https://wiki.heltec.org/docs/devices/open-source-hardware/esp32-series/esp32-quick-start).


