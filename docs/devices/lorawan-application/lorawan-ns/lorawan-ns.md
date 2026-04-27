---
sidebar_position: 1
title: LoRaWAN NS
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React from "react";
import styles from '@site/src/css/styles.module.css';



>This section comprises two parts: `LoRa Network Server` and `LoRa Application Server`. However, people habitually refer to these two components collectively as "LoRa NS". It typically runs on a server(local or cloud). It is the core network component that manages devices and processes data from gateways. It receives uplink data from LoRaWAN Gateways, handles routing and processing, and forwards data to applications or cloud platforms. It is also responsible for device authentication, network control, and data security.

As introduced in the previous chapter on LoRaWAN architecture, the first step in building a LoRaWAN system is to deploy the LoRaWAN NS and ensure it operates reliably and stably.

**Here are three commonly used LoRaWAN NS**

|LoRaWAN NS   | Descrption |
|-------------|------------|
|[Snapemu](/docs/platform/snapemu) | A comprehensive IoT management platform with LoRaWAN support developed by Heltec|
|[ChirpStack](/docs/devices/lorawan-application/lorawan-ns/chirpstack_deployment_via_docker) | Well-known open-source solution |
|[The Things Stack](/docs/devices/lorawan-application/lorawan-ns/tts-docker) | TTN/TTS, public LoRaWAN network |



:::note
ChirpStack and The Things Stack are provided as reference examples only. Related content may change with version updates; please refer to the official documentation for the most accurate information.
:::

