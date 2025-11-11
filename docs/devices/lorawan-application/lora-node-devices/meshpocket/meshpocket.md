---
sidebar_position: 0
title: MeshPocket
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/styles.module.css';
import DocCard from '@theme/DocCard';


<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/hy2ndMZC0RI"
  title="Heltec Capsule Sensor V3. A Portable LoRa/LoRaWAN Node device compatible with Meshtastic"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>


MeshPocket is not only a Qi2 magnetic power bank but also an intelligent device equipped with Bluetooth, LoRa remote communication, and e-ink display, making it the perfect companion for open source projects such as Meshtastic and providing a good solution for outdoor exploration and emergency communication.

{<div className={styles.btnContainer}>
  <a href="https://heltec.org/project/meshpocket/" className={styles.btnLink1}>
    Product Page
  </a>
</div>}

## Product characteristicss

- nRF52840 (BLE) + SX1262 (LoRa) with 2.13 e-ink display
- 5000/10000mAh battery, QI2, 5–15W wireless, 9V-2.22A & 5V-3A USB-C
- Supports PD, AFC, Huawei protocols; wired + wireless charge/discharge
- Multi-layer safety: overvoltage, overcurrent, short circuit, thermal, timeout
- Custom firmware, Meshtastic ready

## Important parameters
| [parameters](https://resource.heltec.cn/download/MeshPocket/datasheet/MeshPocket_1.0.1.pdf)         | MeshPocket    |
|--------------------|----------------------------|
|Master and LoRa Chip      |	    nRF52840 +  SX1262              |
|Memory|  	1M ROM; 256kB SRAM            |
| Battery     |   	3.7V lithium battery power supply and charging                |
| Bluetooth         | 	Bluetooth LE: Bluetooth 5, Bluetooth mesh           |
|Power Consumption       |  	Deep Sleep 9uA   |
| Dimensions         |   		30 * 20 * 3.2 mm   |


## Important Resources
- [Datasheet](https://resource.heltec.cn/download/MeshPocket/datasheet/MeshPocket_1.0.1.pdf)
- [Schematic diagram](https://resource.heltec.cn/download/MeshPocket/schematic)
- [nRF Development Framework](https://github.com/HelTecAutomation/Heltec_nRF52)
- [Related links](https://resource.heltec.cn/download/MeshPocket)

## Product Usage Guide

**The following documentation will help you get started quickly with the product**
- [Install development environment](/docs/devices/open-source-hardware/nrf52840-series/nrf52840-series-quick-start?nrf52840=nrf52840)
- [Applied to LoRaWAN](/docs/devices/open-source-hardware/nrf52840-series/nrf52840-series-quick-start?nrf52840=lorawan)
- [Applied to Meshtatic](/docs/devices/open-source-hardware/nrf52840-series/nrf52840-series-quick-start?nrf52840=meshtastic)
- [How to use license](/docs/devices/general-docs/how_to_use_license)


