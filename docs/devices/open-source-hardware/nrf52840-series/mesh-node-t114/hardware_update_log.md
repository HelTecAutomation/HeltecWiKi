---
sidebar_position: 4
title: Hardware Update Logs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/styles.module.css';
import DocCard from '@theme/DocCard';



## V1

<div style={{ textAlign: 'center' }}>
  ![](img/hardware_update_log/1.png)
</div>


- First release
- 2024-8-7 public sale

## V2

- The circuit board was changed from 4 layers to 6 layers so that both the RF part and the crystal oscillator part can obtain a more complete ground.
- The circuit was changed from lead-free to immersion gold process, which is more friendly to signal transmission.
- The position of some components was adjusted.
- The RF path was optimized according to the six-layer board structure.
- The direction of the 2.4GHz Bluetooth antenna and IPEX LoRa antenna interface was changed to make them farther away.
- Now the high-frequency Mesh node T114 can stably send long data packets in the "Long_Fast" channel of Meshtastic.

## V2.1

- Added a reverse-polarity protection resistor to enhance power input safety and system reliability.
- Optimized ADC power consumption in sleep mode for Meshtastic, further reducing overall standby power usage.
