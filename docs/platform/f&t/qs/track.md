---
sidebar_position: 3
title: Track Recording
---



The **GPS Track** feature records the device's movement using GPS. After **GPS Track** is enabled, the device automatically records track points as it moves. The recorded track can then be viewed on a computer using the [**DevRemote**](https://devremote.heltec.org/) tool.

## Access GPS

First, [**navigate to the GPS**](/docs/platform/f&t/qs/gps) function on the device.

Enable the **`GPS Track`** feature in **GPS** .

### View Track

1. Connect the device to a computer via a USB cable.

2. Open [**DevRemote**](https://devremote.heltec.org/).

3. Click **Connect**.

   ![](img/4.png)

4. Select the serial port associated with the connected device.

   ![](img/5.png)

5. Click **Route Map**. The tool automatically detects the number of track points recorded on the device.

   ![](img/6.png)
6. If the data is detected successfully, the recorded route is displayed on the map.
  
<div style={{textAlign: 'center'}}>
  <img
    src={require('./img/track.png').default}
    style={{width: '600px'}}
  />
</div>

:::tip
**Current logging rule:** one point is recorded approximately every 50 meters of movement, Up to 600 track points can be stored.
:::

