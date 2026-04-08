---
sidebar_position: 0
title: Heltec Automation Documention
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/styles.module.css';
import DocCard from '@theme/DocCard';

# Heltec Automation Documention Index



Since 2014, Heltec Automation has been a trusted PaaS provider dedicated to delivering reliable wireless and IoT products, with a strong focus on the LoRa/LoRaWAN field. By using our products, users can quickly build complete IoT solutions. This document serves as an operation guide to help you better understand how to use our products. For detailed product specifications and parameters, please refer to the product manuals or visit the Heltec Automation website.


![Overview](/img/main-img/3.png)

## Product Usage Guide



```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```

## LoRa Server


![Overview](/img/main-img/4.png)

In a complete LoRaWAN communication process, a server is essential. A LoRaWAN server typically consists of two parts: the Network Server (NS) and the Application Server (AS). The NS is responsible for tasks such as node joining, acknowledgments, identity verification, and communication authentication. Today, there are many excellent LoRaWAN servers available. For example, Heltec provides SnapEmu, and detailed operation instructions can be found on its [platform](/docs/platforms).



## LoRaWAN Appliaction

### LoRa Gateway 
| LoRa Gateway                                                                 | Feature                                   |
| ------------------------------------------------------------------------------- | ----------------------------------------- |
| [HT-M02 Edge LoRa Gateway (V2)](/docs/devices/lorawan-application/lora-gateway/ht-m02_v2/)          | The edge computing LoRa gateway integrated with Wi-Fi, PoE and LTE functions |
| [HT-M2802 Indoor LoRa Gateway](/docs/devices/lorawan-application/lora-gateway/ht-m2802/)            | Having high-performance hotspots          |
| [HT-M01S Indoor LoRa Gateway (Rev.2.0)](/docs/devices/lorawan-application/lora-gateway/ht-m01s_v2/) | A standard LoRaWAN gateway based on ESP32 MCU |
| [HT-M7603 Indoor LoRa Gateway](/docs/devices/lorawan-application/lora-gateway/ht-m7603/)            | A cost-effective eight-channel indoor LoRa gateway |
| [HT1303 LoRaWAN Concentrator Module](/docs/devices/lorawan-application/lora-gateway/ht-1303/)       | LoRa gateway module based on SX1303+SX1250 chipset |
| [HT-M00S Single Channel LoRa Gateway](/docs/devices/lorawan-application/lora-gateway/ht-m00s/)      | A low-cost single-channel LoRaWAN gateway |
| [HT-M00 Dual Channel LoRa Gateway](/docs/devices/lorawan-application/lora-gateway/ht-m00/)          | A small, low-cost dual-channel LoRa gateway with Type-C interface |
| [HT-M01 Evaluation LoRa Gateway](/docs/devices/lorawan-application/lora-gateway/ht-m01/)            | A Pico cell gateway |

###  LoRa Node Devices   
|   LoRa Node Devices                                                             | Feature                                             |
| -------------------------------------------------------------------------------- | --------------------------------------------------- |
| [HRU-3601](/docs/devices/lorawan-application/lora-node-devices/hru-3601/)                                 | A low cost indoor LoRa t&h (temperature and humidity) monitor |
| [Sensor Hub](/docs/devices/lorawan-application/lora-node-devices/hri-3621/)                             | A ready-to-use LoRa/LoRaWAN sensor for indoor (industrial) applications |
| [Sensor Hub – Bus Transformer](/docs/devices/lorawan-application/lora-node-devices/hri-3622/)  | Drives third-party RS-485 sensors (outdoor series)  |
| [RS485-LoRa Wireless Converter](/docs/devices/lorawan-application/lora-node-devices/hri-485x-rs-485/hri-4851/) | HRI-4851 converts 485 bus into LoRa, HRI-4852 connects HRI-4851 to server via ETH or LTE |
| [RS485-LoRaWAN Wireless Converter](/docs/devices/lorawan-application/lora-node-devices/hri-485x-rs-485/hri-4851-lorawan/) | Converts 485 bus into LoRa, LTE, and Ethernet communication |
| [RS485-TCP/UDP/MQTT Converter HRI-4853](/docs/devices/lorawan-application/lora-node-devices/hri-485x-rs-485/hri-4853/) | Converts RS-485 bus into LTE and Ethernet communication |
| [Wireless Aggregator – Bus Transformer](/docs/devices/lorawan-application/lora-node-devices/hri-3632/)    | A LoRa/LoRaWAN device for outdoor applications      |
| [Wireless Aggregator – Sensor Docker](/docs/devices/lorawan-application/lora-node-devices/hri-3631/)      | A LoRa/LoRaWAN device for outdoor applications      |
| [Wireless Aggregator – Valve Controller](/docs/devices/lorawan-application/lora-node-devices/hri-3633/)   | A LoRaWAN converter belonging to Sensor Hub Outdoor |
| [Wireless Thermoprobe](/docs/devices/lorawan-application/lora-node-devices/hru-1000/)         | Displays or uploads temperature via LoRaWAN         |
| [Junction Box](/docs/devices/lorawan-application/lora-node-devices/junction-box/) | The junction box converts 4–20 mA signals to RS485 |


## Open Source Devices

### Heltec ESP32 Series 
| Heltec ESP32 Series                                                                 | Feature                                  |
| -------------------------------------------------------------------------------- | ---------------------------------------- |
| [Heltec Capsule Sensor V3](/docs/devices/open-source-hardware/esp32-series/lora-32/capsule-sensor-v3/) | A portable LoRa/LoRaWAN device based on ESP32-S3 and SX1262 |
| [WiFi LoRa 32 V3](/docs/devices/open-source-hardware/esp32-series/lora-32/wifi-lora-32-v3/)                  | A classic IoT development board          |
| [WiFi LoRa 32 V4](https://heltec.org/project/wifi-lora-32-v4/)   | A compact ESP32S3 board with Wi-Fi, Bluetooth, and LoRa |
| [Wireless Paper](/devices/open-source-hardware/esp32-series/lora-32/wireless-paper/)                     | An E-Ink development kit with multiple wireless drive methods |
| [Wireless Shell V3](/docs/devices/open-source-hardware/esp32-series/lora-32/wireless-shell/)              | Wi-Fi, BLE, and LoRa solutions           |
| [Wireless Stick Lite V3](/docs/devices/open-source-hardware/esp32-series/lora-32/wireless-stick-lite/)    | A development board for Wi-Fi, Bluetooth and LoRa |
| [Wireless Stick V3](/docs/devices/open-source-hardware/esp32-series/lora-32/wireless-stick/)              | High-performance, small size dev board   |
| [Wireless Tracker](/docs/devices/open-source-hardware/esp32-series/lora-32/wireless-tracker/)                 | Development kit based on ESP32-S3FN8     |
| [Wireless Tracker V2](https://heltec.org/project/wireless-tracker-v2/) | An ESP32-S3 LoRa GNSS tracker with up to 28 dBm output power.|
| [Vision Master E213](/docs/devices/open-source-hardware/esp32-series/vision-master/vison-master-e213/)             | IoT development board with 2.13-inch E-Ink |
| [Vision Master E290](/docs/devices/open-source-hardware/esp32-series/vision-master/vison-master-e290/)             | IoT development board with 2.9-inch E-Ink |
| [Vision Master T190](/docs/devices/open-source-hardware/esp32-series/vision-master/vison-master-t190/)             | ESP32+LoRa development board with 1.9-inch TFT |
| [HT-CT62](/docs/devices/open-source-hardware/esp32-series/lora-32/wireless-min-shell-ht-ct62/)                                   | LoRa/LoRaWAN node module, high sensitivity, low cost |
| [Wireless Bridge](/docs/devices/open-source-hardware/esp32-series/lora-32/wireless-bridge/)                   | Converts WiFi/Bluetooth ↔ LoRa           |
| [Wifi Kit 32](/docs/devices/open-source-hardware/esp32-series/lora-32/wifi-kit-32/) | A highly integrated product based on ESP32 including WiFI and BLE |

### nRF52840 Series
| nRF52840 Series                                                               | Feature                                  |
| -------------------------------------------------------------------------------- | ---------------------------------------- |
| [MeshPocket](/docs/devices/lorawan-application/lora-node-devices/meshpocket/)    | A Qi2 magnetic power bank with Bluetooth, LoRa, and e-ink displa |
| [Mesh Node T114 (Rev.2.0)](/docs/devices/open-source-hardware/nrf52840-series/mesh-node-t114/)           | Low power board based on nRF52840 + SX1262 |
| [Mesh Node 5262M](/docs/devices/open-source-hardware/nrf52840-series/mesh-node-5262m/) | A module based on the nRF52840 and SX1262 |
| [MeshSolar](/docs/devices/open-source-hardware/nrf52840-series/mesh-solar/) | an outdoor solar solution with Bluetooth + LoRa |
| [MeshTower](/docs/devices/open-source-hardware/nrf52840-series/mesh-tower/) | A solar-powered outdoor communication system built on MeshSolar technology |

### CubeCell Series
| CubeCell Series                                                               | Feature                                  |
| -------------------------------------------------------------------------------- | ---------------------------------------- |
| [CubeCell – AB01 Dev-Board (V2)](/docs/devices/open-source-hardware/cubecell-series/htcc_ab01/)       | LoRa development board integrated with MCU |
| [CubeCell – AM01 Module (V2)](/docs/devices/open-source-hardware/cubecell-series/htcc_am01/)          | Small stamp-hole package module          |
| [CubeCell 1/2AA Node (HTCC-AB02A)](/docs/devices/open-source-hardware/cubecell-series/htcc_ab02a/)       | Developer-friendly LoRa node             |
| [CubeCell AM02 Module Plus](/docs/devices/open-source-hardware/cubecell-series/htcc_am02/)               | Supports AT transparent transmission     |
| [CubeCell Dev-Board Plus (HTCC-AB02)](/docs/devices/open-source-hardware/cubecell-series/htcc_ab02/)     | Dev-Board based on ASR605x (ASR6501, ASR6502) |
| [CubeCell GPS-6502 (HTCC-AB02S)](/docs/devices/open-source-hardware/cubecell-series/htcc_ab02s/)         | Dev board with AIR530Z GPS module        |


## WiFi HaLow Series

| Heltec WiFi HaLow                                                                | Feature                                  |
| -------------------------------------------------------------------------------- | ---------------------------------------- |
| [ESP32 Wi-Fi HaLow Camera](/docs/devices/wifi-halow/ht-hc32/)                  | Dev board with ESP32-S3 + WiFi HaLow module and built-in camera |
| [Raspberry Pi Wi-Fi HaLow Camera HAT](/docs/devices/wifi-halow/ht-hr01/)       | Pi HAT with Wi-Fi HaLow module and 5MP camera |
| [Wi-Fi HaLow Dongle 802.11ah](/docs/devices/wifi-halow/ht-hd01/)               | Long-range communicator, can replace Ethernet cables |
| [HT-H7608 Wi-FI HaLow Router](/docs/devices/wifi-halow/ht-h7608/)              | an innovative WiFi HaLow gateway |
| [Wi-FI HaLow Module](/docs/devices/wifi-halow/ht-hc01/)                        | A Wi-Fi HaLow module with excellent RF performance |





