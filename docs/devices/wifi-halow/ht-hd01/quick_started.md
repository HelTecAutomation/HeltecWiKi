---
sidebar_position: 2
title: Default P-to-P Mode
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/styles.module.css';

We have provided a plug-and-play mode for the HT-HD01 to help you get started more quickly. The devices are pre-paired at the factory, and you can use them directly without any configuration. 

Plug the AP-side device into your network source (e.g., a router).The STA-side device, once powered on, will provide either an Ethernet or 2.4GHz Wi-Fi connection for your end devices.

![](img/04.jpg)

# Getting Start

## How to Distinguish Between AP Mode and STA Mode
- Via Sticker, you can distinguish between the AP or STA side using stickers. 
- After firmware version 2.6.6, you can also differentiate them by the RGB lights: AP-side devices will display cyan/purple after the red light turns off, while STA-side devices will show blue/green.

## Start Access Point
1. Connect the Dongle-AP to the upstream router and power it on. 

![](img/11.jpg)

:::tip
The RJ45 interface does not support PoE (Power-over-Ethernet) power supply. The USB cable can both supply power and networking.
:::

:::tip
If your upstream network is WiFi, you must enter the Wi-Fi credentials (SSID and password) in the configuration page. Please refer to the following link:[Access Configuration Page](https://wiki.heltec.org/docs/devices/wifi-halow/ht-hd01/access_configuration_page)
:::

2. When the device's red light changes to **Cyan/Purple** and stays on, it indicates that the device is functioning properly.

## Start Station
Power on the Dongle-STA. When the device's red light changes to **blue/green** and stays on, it indicates that the device is functioning properly.

![](img/12.jpg)

:::tip
If the STA device's indicator light remains solid blue/green or flashes, it indicates that the device has not obtained an IP address assigned by the AP. In this case, you may need to reconfigure the device. Please refer to the ["Dongle STA Setup Guide"](/docs/devices/wifi-halow/ht-hd01/ap?ap=sta).
:::

## Start Using
After the STA device is functioning normally, Connect your end device to the Dongle-STA via ethernet cable or 2.4G WiFi.

![](img/13.jpg)

<Tabs
groupId="ethernet"
queryString="ethernet"
defaultValue="ethernet"
className={styles.customTabs}
values={[
{label: ' Ethernet(RJ45,USB-C) ', value:'ethernet'},
{label: ' 2.4G Wi-Fi ', value:'2.4gwifi'},
]}>

<TabItem value="ethernet">

### Ethernet
The STA blue light of the device represents a USB-C cable, and the green light represents an RJ45 cable. If the color of your indicator does not match the type of network cable you are connected to, you need to change the color of the indicator by pressing the button.

![](img/07.jpg)

For Windows systems, installing a driver is required to use USB-C Ethernet:
- [HD01-V2 Windows USB-C Ethernet Driver](https://resource.heltec.cn/download/HT-HD01_V2/driver).
- [HD01-V1 Windows USB-C Ethernet Driver](https://resource.heltec.cn/download/HT-HD01/Driver/USB-NIC).

:::tip
If the device does not respond after installation, you can repeatedly toggle the switch shown in the image above to help the computer recognize the device.
:::

</TabItem>
<TabItem value="2.4gwifi">

By default, the STA device's 2.4GHz Wi-Fi is enabled. The default SSID and password are as follows:
- Default 2.4G Wi-Fi SSID:HT-HD01-XXXX
- Default Password:heltec.org

You can change the username and password on the configuration page. Please refer to [Access Configuration Page](https://wiki.heltec.org/docs/devices/wifi-halow/ht-hd01/access_configuration_page) for guidance.

</TabItem>
</Tabs>

# Other Modes
You can view other modes and their configuration methods in the [**Introduction**](https://wiki.heltec.org/docs/devices/wifi-halow/ht-hd01/) section.

# View and Modify the SSID and Password
You can access the device's configuration page to set or modify its parameters. For methods to access the configuration page, please refer to the following link:
[Access Configuration Page](https://wiki.heltec.org/docs/devices/wifi-halow/ht-hd01/access_configuration_page) for guidance.

# Factory reset

:::warning
In this mode, all existing configurations on the device are completely erased. You must reconfigure it anew before use.
:::

1. Press and hold the device button 10 seconds until the **white** light turns on, then release the button. Subsequently, orange light and green light (blue light) will flash alternately, indicating that the device has entered reset mode.

![](img/07.jpg)

2. At this point, the device will provide a dedicated AP hotspot for configuration. The default SSID is **HT-HD01-xxxx**, and the default password is **heltec.org**. Connect your PC(Laptop) to it.


3. Access **10.42.0.1** in your browser. The default username is **root**, and the default password is **heltec.org**.

![](img/09.png)

4. By adhering to the instructions and prompts available on the configuration interface, each stage of the process can be executed methodically.


