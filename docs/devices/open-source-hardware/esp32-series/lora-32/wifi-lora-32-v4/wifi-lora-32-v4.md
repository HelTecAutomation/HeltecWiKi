---
sidebar_position: 3
title: WiFi LoRa 32 V4
---


import styles from '@site/src/css/styles.module.css';

<iframe
  width="100%"
  height="400"
  src=" https://www.youtube.com/embed/JRidd85Rm5U"
  title="Heltec Capsule Sensor V3. A Portable LoRa/LoRaWAN Node device compatible with Meshtastic"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

The classic WiFi LoRa 32 development board has been upgraded to the all-new V4 version. While retaining the advantages of previous editions, it features comprehensive improvements in craftsmanship and enhanced performance.

{<div className={styles.btnContainer}>
  <a href="https://heltec.org/project/wifi-lora-32-v4/" className={styles.btnLink1}>
    Product Page
  </a>
</div>}

## Product characteristics
- Based on ESP32-S3R2 + SX1262, supporting Wi-Fi b/g/n, BLE, and LoRa.
- Equipped with 2MB PSRAM and 16MB external Flash for UI and complex applications.
- Available in high-power (28 dBm) and low-power (22 dBm) versions.
- Added SH1.25-2Pin solar panel and SH1.25-8Pin GNSS interfaces.
- PC casing with integrated antenna, optimized battery management, and ultra low power consumption (`<20 μA`).

## Hardware Version Comparison

| [Parameters](https://resource.heltec.cn/download/WiFi_LoRa_32_V4/datasheet/WiFi_LoRa_32_V4.2.0.pdf)        | V3                      | V4                                    |
|-------------------|-------------------------|---------------------------------------|
| MCU               | ESP32-S3FN8             | ESP32-S3R2                            |
| Flash             | 8MB (integrated)        | 16MB (external)                       |
| USB to Serial Chip| CP2102                  | Removed CP2102                        |
| Power Management  | Standard Li-ion management IC | Upgraded IC supporting solar input |
| Solar Input       | Not available           | Added SH1.25-2P interface             |
| LoRa TX Power     | 21±1 dBm                | 28±1 dBm                              |
| 2.4G Antenna      | Metal spring antenna    | FPC antenna + IPEX connector          |
| GPS Interface     | Not available           | Added SH1.25-8Pin interface           |
| Peripheral I/F    | 36-pin                  | 40-pin                                |
| Screen Connection | Soldered                | Soldered + B2B connector              |
| Pin Craft         | Silver-plated           | Gold-plated                           |
| Screen Bracket    | Partial protection      | Full protection                       |

## Important Resources
- [Datasheet](https://resource.heltec.cn/download/WiFi_LoRa_32_V4/datasheet/WiFi_LoRa_32_V4.2.0.pdf)
- [Schematic diagram](https://resource.heltec.cn/download/WiFi_LoRa_32_V4/Schematic/WiFi_LoRa_32_V4.2.pdf)
- [Pin Map](https://resource.heltec.cn/download/WiFi_LoRa_32_V4/Pinmap/V4_pinmap.png)
- [Related links](https://resource.heltec.cn/download/WiFi_LoRa_32_V4)

## Product Usage Guide

**The following documentation will help you get started quickly with the product**
- [Install development environment](/docs/devices/open-source-hardware/esp32-series/esp32-quick-start)
- [Applied to LoRaWAN](/docs/devices/open-source-hardware/esp32-series/esp32-quick-start?esp32=lorawan)
- [Applied to Meshtatic](/docs/devices/open-source-hardware/esp32-series/esp32-quick-start?esp32=meshtastic)
- [How to use license](/docs/devices/general-docs/how_to_use_license)