---
sidebar_position: 1
title: Open Source Hardware
---



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


![](img/1.png)

The Heltec ESP32, CubeCell, and nRF52840 series open-source hardware are built around highly integrated LoRa communication and low-power architectures, combined with a unified and comprehensive open-source development ecosystem, delivering efficient and flexible solutions for rapid prototyping and large-scale deployment of IoT applications.


## Usage Guide

This Usage Guide provides detailed operating instructions for each open source hardware series, including ESP32, CubeCell, and nRF, to help users correctly set up, configure, and deploy them in practical IoT scenarios.

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
## Series Comparison

<table>
  <thead>
    <tr>
      <th>Feature / Series</th>
      <th><b>ESP32 Series</b></th>
      <th><b>CubeCell Series (ASR)</b></th>
      <th><b>nRF Series</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>MCU</b></td>
      <td>ESP32 (Dual-core Xtensa)</td>
      <td>ASR6501/ASR6502 (ARM Cortex-M0+ + LoRa)</td>
      <td>nRF52840 (ARM Cortex-M4 + BLE + external LoRa module)</td>
    </tr>
    <tr>
      <td><b>Main Connectivity</b></td>
      <td>Wi-Fi + Bluetooth + LoRa</td>
      <td>LoRaWAN only</td>
      <td>BLE + LoRa</td>
    </tr>
    <tr>
      <td><b>Power Consumption</b></td>
      <td>Higher (better for continuous power supply)</td>
      <td>Ultra-low power (ideal for battery operation)</td>
      <td>Low power (better than ESP32, slightly higher than CubeCell)</td>
    </tr>
    <tr>
      <td><b>Common Features</b></td>
      <td colspan="3">All three support LoRa communication, come with Heltec official open-source libraries, feature high integration (power management, antenna interface, some with OLED), and target IoT prototyping and deployment.</td>
    </tr>
  </tbody>
</table>

