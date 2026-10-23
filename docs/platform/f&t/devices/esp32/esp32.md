---
sidebar_position: 1
title: ESP32 Series
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/styles.module.css';
import DocCard from '@theme/DocCard';

<Tabs
groupId="esp32"
queryString="esp32"
defaultValue="esp32"
values={[
{label: 'WiFi LoRa 32 V3', value:'esp32'},
{label: 'WiFi LoRa 32 V4', value:'v4'},
{label: 'WiFi LoRa 32 V4 R8', value:'v4r8'},
{label: 'WiFi LoRa 32 Expansion Kit Touchscreen', value:'v4r8 touch'},
{label: 'Wireless Tracker', value:'tracker'},
{label: 'Wireless Tracker V2', value:'tracker2'},
]}>

<TabItem value="esp32">


<div style={{ textAlign: 'center' }}>
  <img 
    src={require('./img/v3.png').default} 
    style={{ width: '500px', maxWidth: '100%' }} 
  />
</div>



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

## PinMap

<div style={{ textAlign: 'center' }}>
  <img 
    src={require('./img/pinmap.png').default} 
    style={{ width: '700px', maxWidth: '100%' }} 
  />
</div>



</TabItem>
  <TabItem value="v4">

<div style={{ textAlign: 'center' }}>
  <img 
    src={require('./img/v4.png').default} 
    style={{ width: '500px', maxWidth: '100%' }} 
  />
</div>

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

## PinMap

<div style={{ textAlign: 'center' }}>
  <img 
    src={require('./img/v4pinmap.png').default} 
    style={{ width: '700px', maxWidth: '100%' }} 
  />
</div>








</TabItem>
<TabItem value="v4r8">

<div style={{ textAlign: 'center' }}>
  <img 
    src={require('./img/v4.png').default} 
    style={{ width: '500px', maxWidth: '100%' }} 
  />
</div>


## Product characteristics

- Based on ESP32-S3R8 + SX1262, supporting Wi-Fi b/g/n, BLE, and LoRa.
- Equipped with 8MB PSRAM and 16MB external Flash for UI and complex applications.
- Available in high-power 28 dBm.
- Added SH1.25-2Pin solar panel and SH1.25-8Pin GNSS interfaces.

## PinMap

<div style={{ textAlign: 'center' }}>
  <img 
    src={require('./img/v4R8pinmap.png').default} 
    style={{ width: '700px', maxWidth: '100%' }} 
  />
</div>

</TabItem>
<TabItem value="v4r8 touch">

<div style={{ textAlign: 'center' }}>
  <img 
    src={require('./img/exr8.png').default} 
    style={{ width: '300px', maxWidth: '100%' }} 
  />
</div>

## Button Instructions

- **USER**(Only effective in the touchscreen version of F&T UI)

  - Single Press: **Previous option**, **Wake** the screen.
  - Long Press 2 seconds: Enter or select the current option.
  - Double Press: Return to the **previous** screen or navigate to the Function Selection Menu.

- **IO**(Only effective in the touchscreen version of F&T UI)
  
  - Single Press: **Next option**, **Wake** the screen.
  - Long Press 2 seconds: Enter or select the current option.
  - Double Press: Open the **Quick Access Menu.**

- **RST:** Restart the device.
- **PWR:**	Power button. Press and hold for 3 seconds to power the device on or off.

### Touch Interaction

- **Tap on the screen:** Next option, Wake the screen (same as IO key)
- **Long press on the screen:** Confirm / Enter

</TabItem>
<TabItem value="tracker">

<div style={{ textAlign: 'center' }}>
  <img 
    src={require('./img/tracker1.png').default} 
    style={{ width: '500px', maxWidth: '100%' }} 
  />
</div>

## Product characteristics

- ESP32-S3FN8+SX1262+UC6580 Chipset, supports Wi-Fi, LoRa, Bluetooth, GNSS
- Low power design of dual-frequency multi-system based on 22nm technology
- Supports multi-system positioning (GPS, GLONASS, BDS, Galileo, NAVIC, QZSS) with L1/L5/L2 bands
- Onboard Wi-Fi and Bluetooth 2.4GHz antenna, with reserved IPEX (U.FL) for LoRa/GNSS
- 0.96" 160*80 LCD for debug info, battery, and more

<div style={{ textAlign: 'center' }}>
  <img 
    src={require('./img/trackerpinmap.png').default} 
    style={{ width: '700px', maxWidth: '100%' }} 
  />
</div>



</TabItem>
<TabItem value="tracker2">

<div style={{ textAlign: 'center' }}>
  <img 
    src={require('./img/tracker2.png').default} 
    style={{ width: '500px', maxWidth: '100%' }} 
  />
</div>

## Product characteristics

- ESP32-S3FN8 + SX1262 + UC6580 supporting Wi-Fi, LoRa, Bluetooth, and GNSS.
- 28 ±1 dBm high-power LoRa for longer range.
- Dual-frequency L1 with multi-system GNSS support.
- Onboard lithium battery and solar with smart power management.
- Onboard TFT display and enhanced GNSS reception.

<div style={{ textAlign: 'center' }}>
  <img 
    src={require('./img/tracker2pinmap.png').default} 
    style={{ width: '700px', maxWidth: '100%' }} 
  />
</div>

</TabItem>
</Tabs>


