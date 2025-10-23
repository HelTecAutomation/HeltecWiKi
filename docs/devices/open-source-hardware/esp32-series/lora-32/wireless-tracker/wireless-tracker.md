---
sidebar_position: 4
title: Wireless Tracker
---
# Wireless Tracker

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/styles.module.css';
import DocCard from '@theme/DocCard';


<div style={{ textAlign: 'center' }}>
  ![](img/1.png)
</div>


Wireless Tracker is a development kit based on ESP32-S3FN8. It integrates both SX1262 and UC6580 to provide fast GNSS solution for IoT. It can track any object and then upload that data wirelessly by Wi-Fi, Bluetooth, LoRa. Wireless Tracker supports L1 + L5/L2, and supports GPS, GLONASS, BDS, Galileo, NAVIC, QZSS multi-system joint positioning.

{<div className={styles.btnContainer}>
  <a href="https://heltec.org/project/wireless-tracker/" className={styles.btnLink1}>
    Product Page
  </a>
</div>}

## Product characteristics
- ESP32-S3FN8+SX1262+UC6580 Chipset, supports Wi-Fi, LoRa, Bluetooth, GNSS
- Low power design of dual-frequency multi-system based on 22nm technology
- Supports multi-system positioning (GPS, GLONASS, BDS, Galileo, NAVIC, QZSS) with L1/L5/L2 bands
- Onboard Wi-Fi and Bluetooth 2.4GHz antenna, with reserved IPEX (U.FL) for LoRa/GNSS
- 0.96" 160*80 LCD for debug info, battery, and more

## Important parameters
| [parameters](https://resource.heltec.cn/download/Wireless_Tracker/Wireless%20Tracker1.1.pdf)         | Wireless Tracker          |
|--------------------|----------------------------|
|Master and LoRa Chip      |	    ESP32-S3FN8 + SX1262                |
|GNSS Chipset  |     UC6580               |
| Max. TX Power      |   	21±1dBm                 |
| Bluetooth          | 	Bluetooth 5           |
| Battery            |  3.7V lithium battery power supply and charging|
| Dimensions         |   	65.48 * 28.06 * 13.52mm    |


## Important Resources

- [GNSS Module Datasheet](https://resource.heltec.cn/download/Wireless_Tracker/UFirebird_Standard%20Positioning%20Products%20Protocol%20Specification_EN_R4.6(1).pdf)
- [Datasheet](https://resource.heltec.cn/download/Wireless_Tracker/Wireless%20Tracker1.1.pdf)
- [Schematic diagram](https://resource.heltec.cn/download/Wireless_Tracker/Wireless_Tacker1.1/HTIT-Tracker_V0.5.pdf)
- [Pin Map](https://resource.heltec.cn/download/Wireless_Tracker/Wireless%20Tracker%20Pin%20Map.png)
- [Hardware Update Log](/docs/devices/open-source-devices/esp32-series/lora-32/wireless-tracker/hardware-update-log)


## Product Usage Guide
**The following documentation will help you get started quickly with the product**
- [Install development environment](/docs/devices/open-source-hardware/esp32-series/esp32-quick-start?esp32=esp32)
- [Applied to LoRaWAN](/docs/devices/open-source-hardware/esp32-series/esp32-quick-start?esp32=lorawan)
- [Applied to Meshtatic](/docs/devices/open-source-hardware/esp32-series/esp32-quick-start?esp32=meshtastic)
- [How to use license](/docs/devices/general-docs/how_to_use_license)