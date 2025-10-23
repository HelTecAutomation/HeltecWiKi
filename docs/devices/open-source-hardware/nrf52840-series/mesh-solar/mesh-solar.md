---
sidebar_position: 6
title: MeshSolar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/styles.module.css';
import DocCard from '@theme/DocCard';

<div style={{ textAlign: 'center' }}>
  ![](img/1.jpg)
</div>

The outdoor solar communication solution based on MeshSolar supports Bluetooth + LoRa communication, integrates an 18V solar panel, 3*3000mAh, and a waterproof casing. It is perfectly suited for Meshtastic.

{<div className={styles.btnContainer}>
  <a href="https://heltec.org/project/meshsolar/" className={styles.btnLink1}>
    Product Page
  </a>
</div>}

## Product characteristicss

- Flexible Battery Support 1 ~4 cells with balanced charging and full safety protection
- Versatile Charging Solar MPPT (18–24V), USB PD3.0 fast charge, external DC input
- Smart Control Web-based parameter setup, LED battery level, one-touch shutdown
- Dual Connectivity Bluetooth + LoRa (up to 10km)
- Expandable & Efficient Supports display, GPS, I/O with ultra-low power design

## Important parameters
| [parameters](https://resource.heltec.cn/download/MeshSolar/datasheet/MeshSolar_V1.0.0.pdf)         |  MeshSolar    |
|--------------------|----------------------------|
|BMS chip      |	    BQ4050, CN3795             |
|Main Control Module|  		HT-n5262M(nRF52840+SX1262)           |
| Number of Managed Battery Cells     |   	1~4 cells                |
| Expansion Interface         | 	Screen: MX1.25-9P, GNSS: MX1.25-8P           |
|Battery Type     |  	Lithium-ion, Lithium iron phosphate   |
| Dimensions         |   		96.97 * 42.97 * 12.00 mm   |


## Important Resources
- [Datasheet](https://resource.heltec.cn/download/MeshSolar/datasheet/MeshSolar_V1.0.0.pdf)
- [Schematic diagram](https://resource.heltec.cn/download/HT-N5262M/HT-N5262M_Schematic_Diagram.pdf)
- [nRF Development Framework](https://github.com/HelTecAutomation/Heltec_nRF52)
- [BMS Setting Page](https://flash.nmiot.net:3333/)
- [Related links](https://resource.heltec.cn/download/MeshSolar)

## Product Usage Guide

**The following documentation will help you get started quickly with the product**
- [Install development environment](/docs/devices/open-source-hardware/nrf52840-series/nrf52840-series-quick-start?nrf52840=nrf52840)
- [Applied to LoRaWAN](/docs/devices/open-source-hardware/nrf52840-series/nrf52840-series-quick-start?nrf52840=lorawan)
- [Applied to Meshtatic](/docs/devices/open-source-hardware/nrf52840-series/nrf52840-series-quick-start?nrf52840=meshtastic)
- [How to use license](/docs/devices/general-docs/how_to_use_license)





