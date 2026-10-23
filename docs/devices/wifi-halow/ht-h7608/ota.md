---
sidebar_position: 6
title: OTA Upgrade Procedure
---


[Firmware Download Link](https://resource.heltec.cn/download/HT-H7608/firmware)

1. Access the Configuration Page. For entry methods, refer to: [Access Configuration Page](/docs/devices/wifi-halow/ht-h7608/usage-guide)

2. Navigate to Firmware Update. Click: `Advanced Config` → `System` → `Reset/Flash Firmware` → `Flash Image`

![](img/ota/1.png)

3. Select `Browse`, Choose target firmware, click `Upload`, Waiting for firmware upload to complete...

![](img/ota/2.jpg)

4. Select whether to **"keep settings and retain the current"** configurations

![](img/ota/3.jpg)

:::danger
Ensure network and power stability during firmware upgrade.
:::

## Firmware Version Update 

HT-H7608 Firmware Version **2.6.6-20250605** update:
- Press the button to change from purple to red.
- In AP and MeshGateway modes, the ETH indicator light for network usage is changed to green, and the USB indicator light for network usage is changed to purple.

HT-H7608 Firmware Version **2.8.5-20250807** update:
- Added support for enabling the HaLow AP function in HaLow Mesh mode, allowing STA devices to connect to Mesh nodes.
- `Dynamic Channel Selection` is enabled by default.

HT-H7608 Firmware Version **2.8.5-20250924** update:
- Fixed a bug where devices kept rebooting after enabling the HaLow AP function in HaLow Mesh mode.

- 2026/08/18: Firmware version 2.8.5 introduces **Easy Mesh** mode and improves mesh networking capabilities. 

  Latest Firmware: [Download Firmware v2.8.5](https://resource.heltec.cn/download/HT-H7608_V2/firmware/openwrt-2.8.5-20260420-heltec-ht-h7608-v2-squashfs-sysupgrade.bin)

