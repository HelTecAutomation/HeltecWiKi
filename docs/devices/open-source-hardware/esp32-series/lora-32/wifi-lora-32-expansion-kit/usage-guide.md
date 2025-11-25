---
sidebar_position: 1
title: Usage Guide
---

# WiFi LoRa 32 Expansion Kit  Operation Guide


<iframe
  width="100%"
  height="500"
  src=" https://www.youtube.com/embed/NNXZOnf5NNk"
  title="Heltec Capsule Sensor V3. A Portable LoRa/LoRaWAN Node device compatible with Meshtastic"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

---
This guide explains the physical button functions, touchscreen gestures (Expansion Kit only), UI navigation, notification sound configuration, and how to switch between Classic UI and MUI.


:::note
>Touchscreen support for the V4 Expansion Kit is available only in version [**2.7.14**](https://github.com/meshtastic/firmware/releases/tag/v2.7.14.e959000) and later.  
> This document applies to **both** the WiFi LoRa 32 Expansion Kit (touchscreen version) and (non-touch version).  
> **Both devices use the Classic UI by default**, but only the Expansion Kit supports touchscreen gestures.
:::


## Applicable Devices 

- **WiFi LoRa 32 Expansion Kit (Touchscreen)** — Full button + touch support; recommended for MUI usage.  
- **WiFi LoRa 32 V4 (Glass Panel, Non-Touch)** — Button-only operation; can run Classic UI.

##  Startup Mode
Press and hold the **PWR** button for approximately **3 seconds** to power on the device.  
Both versions start in the **Classic UI** by default.


## Button & Touch Instructions

The operation of the physical buttons is the same across all versions.

### 1. Physical Buttons

- USER Button
  - Single press: Next / Forward
  - Long press: Confirm / Enter

- GPIO35 button
  - Single press: Back / Return
  - Long press: Exit
 
- PWR Button: Power switch
- RST Button: Reset


### 2. WiFi LoRa 32 Expansion Kit Touchscreen Operations 


- **Tap on the screen:** Next / Forward (same as USER key)  
- **Long press on the screen:** Confirm / Enter

The glass-panel version **does not support touch input** and relies entirely on physical buttons.

---
## Notification Sound Settings

When the system is powered on for the first time, key press and touch prompt sounds may be enabled.  
To adjust the buzzer behavior:

1. Enter the **System** menu  
2. Long press to enter system settings  
3. Select **Notifications**  
4. Open **Buzzer Mode** and choose the preferred option

| Mode          | Click Sound | Message Notification Sound |
|---------------|-------------|-----------------------------|
| ALL Enable    | Yes         | Yes                         |
| Disable       | No          | No                          |
| DMS Only      | No          | No                          |
| Notifications | No          | Yes                         |
| System Only   | Yes         | No                          |



## Switch to MUI

The MUI interface provides enhanced touchscreen capabilities, including full-screen touch and a virtual keyboard.

### Switching Steps

1. Enter the **System** menu  
2. Long press to open system settings  
3. Select **Reboot/Shutdown**  
4. Tap **Switch to MUI**  
5. Confirm with **Yes**  
6. The device will reboot into MUI

### Notes

- **USER button** wakes the screen when it turns off  
- MUI supports **full touchscreen operation**  
- A virtual keyboard appears when sending messages in a channel  
- MUI allows text input and browsing without relying on a phone




## Return from MUI to Classic UI

1. In MUI, tap the **Settings** icon  
2. Open **Reboot/Shutdown**  
3. Press and hold the **Bluetooth icon** in the center  
4. Select **OK**  
5. The device will reboot back to Classic UI

:::tip
If you accidentally tap the Bluetooth icon, the device will enter Programming mode. If this happens, simply long-press the Bluetooth icon to return to the MUI interface. Once you're back in MUI, you can repeat the steps mentioned above.
:::


:::note
**Reference:** Meshtastic official docs — https://meshtastic.org/docs/configuration/radio/
:::