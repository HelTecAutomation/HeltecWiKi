---
sidebar_position: 6
title: WiFi LoRa 32 V3
---
# WiFi LoRa 32 V3


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/styles.module.css';
import DocCard from '@theme/DocCard';


<div style={{ textAlign: 'center' }}>
  <img src="https://heltec.org/wp-content/uploads/2023/09/LoRa-32-v3.jpg" alt="示意图" width="600" />
</div>


WiFi LoRa 32 is a compact and versatile IoT development board from Heltec Automation™, combining the power of ESP32-S3 and SX1262 to deliver Wi-Fi, Bluetooth Low Energy, and LoRa connectivity in one device. It also integrates a Li-Po battery management system and a 0.96" OLED display for enhanced functionality.


{<div className={styles.btnContainer}>
  <a href="https://heltec.org/project/wifi-lora-32-v3/" className={styles.btnLink1}>
    Product Page
  </a>
</div>}

## Product characteristics
- Equipped with ESP32-S3, supporting Wi-Fi and BLE 5.0
- Integrated SX1262 LoRa chip for long-range communication
- Built-in 0.96-inch OLED display
- Integrated charging and battery protection circuit
- Rich GPIO interfaces for versatile peripheral expansion


## Important parameters
| [parameters](https://resource.heltec.cn/download/WiFi_LoRa_32_V3/HTIT-WB32LA_V3.2.pdf)         | WiFi LoRa 32 (V2)          |
|--------------------|----------------------------|
|LoRa Node Chip      |	    SX1262                |
|USB to Serial Chip  |     	CP2102                |
| Max. TX Power      |   	21±1dBm                 |
| Bluetooth          | 	Bluetooth 5 (LE)          |
| Battery            |  3.7V lithium battery power supply and charging|
| Dimensions         |   	50.2 * 25.5* 10.2 mm    |

## Version comparison
| Feature            | WiFi LoRa 32 (V2)          | WiFi LoRa 32 (V3)                            |      
|--------------------|----------------------------|----------------------------------------------|
| MCU                | ESP32-D0                   | ESP32-S3                                     |     
| LoRa Chip          | SX1276                     | SX1262                                       |      
| USB Socket         | Micro USB                  | TypeC                                        |      
| Crystal Oscillator | Ordinary crystal oscillator| High precision temperature<br />compensated crystal oscillator |      
| LowPower           | 800uA                      | `<10uA`                                     |      
| Other              | /                          | Better impedance matching of RF circuits.    |      

## Important Resources
- [Datasheet](https://resource.heltec.cn/download/WiFi_LoRa_32_V3/HTIT-WB32LA_V3.2.pdf)
- [Schematic diagram](https://resource.heltec.cn/download/WiFi_LoRa_32_V3/WiFi_LoRa_32_V3.2_Schematic_Diagram.pdf)
- [Pin Map](https://resource.heltec.cn/download/WiFi_LoRa_32_V3/Wi-Fi_LoRa32_V3.2_Pinmap.png)
- [Related links](https://resource.heltec.cn/download/WiFi_LoRa_32_V3/)

## Product Usage Guide

**The following documentation will help you get started quickly with the product**
- [Install development environment](/docs/devices/open-source-hardware/esp32-series/esp32-quick-start?esp32=esp32)
- [Applied to LoRaWAN](/docs/devices/open-source-hardware/esp32-series/esp32-quick-start?esp32=lorawan)
- [Applied to Meshtatic](/docs/devices/open-source-hardware/esp32-series/esp32-quick-start?esp32=meshtastic)
- [How to use license](/docs/devices/general-docs/how_to_use_license)
