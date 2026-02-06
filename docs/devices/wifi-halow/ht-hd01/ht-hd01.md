---
sidebar_position: 1
title: Introduction
---

import styles from '@site/src/css/styles.module.css';

<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/yv7G51lyqAw?start=29s"
  title="Dongle"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

## Overview
HT-HD01 is a plug-and-play long-range communicator based on Wi-Fi HaLow that can replace Ethernet cables in certain scenarios. Pair two devices for use, or work with the HaLow gateway.
### Features
- Long transmission range, up to 1km
- Plug and play, simple configuration
- IEEE 802.11ah standard
- Both Wi-Fi and Ethernet supported, WiFi HaLow and 2.4GHz dual-band design
- Seamlessly connected to traditional networks
<div className={styles.btnContainer}>
  <a href="https://heltec.org/project/ht-hd01/" className={styles.btnLink1}>
    <span className={styles.cartIcon}>🛒</span>
    Buy Now
  </a>
</div>

### General Parameters
Here are some common parameters of the HD01. For detailed parameters, please refer to: [HD01 Datasheet](https://resource.heltec.cn/download/HT-HR01/Datasheet/HT-HR01_V1.0.0.pdf)

|  Parameters | HT-HD01       |
|--------------------|----------------------------|
|MCU     |	   		MT7628          |
|Consumption  |     		300mA(Typical)         |
|HaLow Standard     |   	IEEE 802.11ah           |
|Power Supply    | 			USB-C, 5V  |
|Operating temperature         |  		-20~ +70℃|
|Dimensions       |  87.5 *32.5 *20mm |

### HD01 LED Indicator Description

:::note
**The description may vary depending on the firmware version.**
:::

| **LED Indicator**                   | **Description**                                         |
| ----------------------------------- | ------------------------------------------------------- |
| 🔴 **Red (blinking)**               | Device is booting                                       |
| 🔴 **Red (steady on)**              | Button pressed                                          |
| 🟡 **Yellow (steady on, 3s hold)**  | Enter configuration mode                                |
| ⚪ **White (steady on, 7s hold)**    | Restore factory settings                                |
| 🟢🟡 **Green & Yellow alternating** | Configuration mode (WiFi + Ethernet)                    |
| 🔵🟡 **Blue & Yellow alternating**  | Configuration mode (WiFi + USB)                         |
| 🟢 **Green (blinking)**             | STA mode using Ethernet, HaLow not connected            |
| 🟢 **Green (steady on)**            | STA mode using Ethernet, HaLow connected successfully   |
| 🔵 **Blue (blinking)**              | STA mode using USB, HaLow not connected                 |
| 🔵 **Blue (steady on)**             | STA mode using USB, HaLow connected successfully        |
| 💠 **Cyan (blinking)**              | AP mode using Ethernet, network input not connected     |
| 💠 **Cyan (steady on)**             | AP (Ethernet) — Network connected                       |
| 🟣 **Purple (blinking)**            | AP mode using USB, network input not connected          |
| 🟣 **Purple (steady on)**           | AP mode using USB, network input connected successfully |


## Network Modes
The HD01 supports multiple networking modes. Below are some common configurations. You can click the "**Setup Guide**" icon below the table to learn how to use them.

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Default AP-STA (plug&play)</th>
      <th class="table-trnobg">AP-STA & AP-Multipoint STA (Custom setup)</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="/general/hd01/02.png" style={{width:400, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="/general/hd01/03.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.heltec.org/docs/devices/wifi-halow/ht-hd01/quick_started" target="_blank"><strong><span><font color={'#4169E1'} size={"4"}>📚 Setup guide</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.heltec.org/docs/devices/wifi-halow/ht-hd01/ap" target="_blank"><strong><span><font color={'#4169E1'} size={"4"}>📚 Setup guide</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Local Area Network (Without Router)</th>
      <th class="table-trnobg">Mesh Mode(Mesh Networking & Relay)</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="/general/hd01/04.png" style={{width:400, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="/general/hd01/hd01-mesh.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.heltec.org/docs/devices/wifi-halow/ht-hd01/lan" target="_blank"><strong><span><font color={'#4169E1'} size={"4"}>📚 Setup guide</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.heltec.org/docs/devices/wifi-halow/ht-hd01/meshgate" target="_blank"><strong><span><font color={'#4169E1'} size={"4"}>📚 Setup guide</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## Important Resources
- [Datasheet](https://resource.heltec.cn/download/HT-HD01/HT-HD01_Rev.1.0.0.pdf)
- [Firmware](https://resource.heltec.cn/download/HT-HD01/firmware)
- [Related links](https://resource.heltec.cn/download/HT-HD01/)