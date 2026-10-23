---
sidebar_position: 2
title: LoRa Gateway Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{ textAlign: 'center' }}>
  ![](img/1.png)
</div>


In the previous overview of the LoRaWAN series, we provided a basic explanation of the gateway's functions.

> The primary function of the gateway is data forwarding.
> - Uplink: It receives data transmitted by LoRa nodes via the LoRaWAN protocol, packages it into JSON format, and sends the data to the LoRa NS over the network (UDP, TCP/IP).
> - Downlink: converts the downlink data, ACKs, etc. from the LoRa NS into LoRa radio signals and transmit to LoRa Nodes.

The core of the Heltec LoRa Gateway lies in the Semtech SX1302/3 + SX1250 baseband chipset, combined with an MCU, we have released various types to adjust different application scenarios.

| LoRaWAN Gateway          | Descrption    |
|-----------------|---------------|
|[HT-M02 V2 Edge LoRa Gateway](https://heltec.org/project/ht-m02-v2/) | High-performance gateways designed for outdoor deployment—equipped with edge computing capabilities—allow for the internal deployment of LoRa Network Servers (NS), such as SnapEmu and ChirpStack. |
|[HT-M7603 Light Gateway](https://heltec.org/project/ht-m7603/) | A Cost-Effective, Lightweight Gateway Powered by the MT7628 and Running OpenWRT.  |
|[HT-M2808 Indoor Hotspot For Helium](https://heltec.org/project/ht-m2808/)| Full LoRaWAN/LongFi gateway support Helium network. |
|[HT-M2802 Indoor LoRa Gateway](https://heltec.org/project/ht-m2802/)|A high-performance LoRaWAN hotspot for long-range, large-scale IoT connectivity. |
|[HT-M01S Indoor LoRa Gateway V2](https://heltec.org/project/ht-m01s-v2/)| An ESP32-D0WDQ6-based LoRaWAN gateway that lowers costs by eliminating the need for a high-performance Linux-based CPU.|
|[HT1303 LoRaWAN Concentrator Module](https://heltec.org/project/ht1303/)| LoRa gateway module based on SX1303+SX1250 chipset. |


## Usage Guide

This Usage Guide provides detailed operating instructions for LoRa Gateway, to help users correctly set up, configure, and deploy them in practical IoT scenarios.

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
