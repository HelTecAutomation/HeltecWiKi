---
sidebar_position: 5
title: RadioCore Kit
---


>**RadioCore_Kit** is the shared Arduino library for RadioCore series hardware. It provides compile-time board configuration used by portable, board-adaptive examples.  




### Install the Library

Download the [**RadioCore_Kit**](https://github.com/HelTecAutomation/RadioCore_Library) repository and place it in the Arduino `libraries` directory, for example:

```text
D:\Documents\Arduino\libraries
```

After installation, restart the Arduino IDE if it is already running. The library examples can then be accessed from **File > Examples > RadioCore_Kit**. Select the desired example to get started.

<img src={require('./img/1.png').default} style={{width: '600px'}} />

---

## Example Code

The RadioCore Kit provides example code for the supported expansion modules. The following table lists the corresponding examples and documentation.


| **Expansion Module**             | **Example**          | **Purpose**                                            | **Documentation**                                                                                                  |
| -------------------------------- | -------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| RadioCore Light Sensor           | `BH1750_Read`        | Read ambient light over Sensor I2C                     | [Guide](https://github.com/HelTecAutomation/RadioCore_Library/blob/main/examples/BH1750_Read/README.md)            |
| RadioCore Methane Sensor         | `CH01_Read`          | Estimate CH01 gas concentration and trend              | [Guide](https://github.com/HelTecAutomation/RadioCore_Library/blob/main/examples/CH01_Read/README.md)              |
| RadioCore Carbon Monoxide Sensor | `CO01_Read`          | Run the CO01 warm-up cycle and estimate concentration  | [Guide](https://github.com/HelTecAutomation/RadioCore_Library/blob/main/examples/CO01_Read/README.md)              |
| RadioCore VOC Sensor             | `VO01_Read`          | Estimate VO01 gas concentration and trend              | [Guide](https://github.com/HelTecAutomation/RadioCore_Library/blob/main/examples/VO01_Read/README.md)              |
| RadioCore Soil Moisture Sensor   | `Soil_Moisture_Read` | Read and calibrate an analog soil moisture sensor      | [Guide](https://github.com/HelTecAutomation/RadioCore_Library/blob/main/examples/Soil_Moisture_Read/README.md)     |
| RadioCore TFT Display            | `NV3001B_Display`    | Exercise the 128-by-220 color TFT                      | [Guide](https://github.com/HelTecAutomation/RadioCore_Library/blob/main/examples/NV3001B_Display/README.md)        |
| RadioCore LED Strip              | `WS2812`             | Run a three-color breathing animation                  | [Sketch](https://github.com/HelTecAutomation/RadioCore_Library/blob/main/examples/WS2812/WS2812.ino)               |
| RadioCore Motor                  | `Motor_Control`      | Drive two direction inputs on an external motor driver | [Sketch](https://github.com/HelTecAutomation/RadioCore_Library/blob/main/examples/Motor_Control/Motor_Control.ino) |
| RadioCore Relay                  | `Relay_Control`      | Toggle an active-high relay module                     | [Sketch](https://github.com/HelTecAutomation/RadioCore_Library/blob/main/examples/Relay_Control/Relay_Control.ino) |
| RadioCore Servo                  | `Servo_Control`      | Control both channels of an RS-SV01 servo driver       | [Sketch](https://github.com/HelTecAutomation/RadioCore_Library/blob/main/examples/Servo_Control/Servo_Control.ino) |
| RadioCore Buzzer                 | `Buzzer_Control`     |Play and repeat an RTTTL melody through the board-designated buzzer output| [Sketch](https://github.com/HelTecAutomation/RadioCore_Library/blob/main/examples/Buzzer_Control/Buzzer_Control.ino)|