---
sidebar_position: 6
title: Data Format Document
---



Click here for the decoding code: [JavaScript decoding example code](https://resource.heltec.cn/download/Sensor%20Hub%20for%20industry/data_decode.js)

The following is a detailed description of the data format.



## 1. LoRaWAN Node Data Upload Format

### 1.1 Overall Data Packet Format

| Sensor-1 ID | Total Length(bytes) | Sensor Data Packet 1-1 | Sensor Data Packet 1-2 | ... | Sensor Data Packet 1-n | ... | Sensor-2 ID | Total Length(bytes) | Sensor Data Packet 1-1 | ... |
|-------------|---------------------|------------------------|------------------------|-----|------------------------|-----|-------------|---------------------|------------------------|-----|
| 2 bytes     | 1 byte              |                        |                        |     |                        |     | 2 bytes     | 1 byte              |                        |     |

:::note
Each LoRaWAN packet can contain data from multiple sensors.  
Each sensor can contain multiple types of sub-data.
:::


### 1.2 Sensor Data Packet Format

| Sensor Data Packet | ID Data Type Inside the Packet | Total Valid Data Length (bytes) | Valid Data of This Sensor Packet |
|--------------------|--------------------------------|---------------------------------|----------------------------------|
| 4 bits             | 4 bits                         | 1 byte                          | ...                              |

:::note
**Total Valid Data Length (bytes)**: This field is only present for arrays, omitted for other data types.
:::

| Data Type | Value  | Bytes Occupied |
|-----------|--------|----------------|
| array     | 0b0000 | max 64         |
| double    | 0b0001 | 8              |
| float     | 0b0010 | 4              |
| bool      | 0b0011 | 1              |
| int8_t    | 0b0100 | 1              |
| uint8_t   | 0b0101 | 1              |
| int16_t   | 0b0110 | 2              |
| uint16_t  | 0b0111 | 2              |
| int32_t   | 0b1000 | 4              |
| uint32_t  | 0b1001 | 4              |



### 1.3 Sensor Raw Data Conversion Instructions

All data types (except for arrays) are split in the same way as floats.  
When packing, the low byte comes first.

```
typedef union {
    union bits_32_raw_data {
        uint32_t uint32_t_raw_data;
        int32_t  int32_t_raw_data;
        float    float_raw_data;
    };
    uint8_t bits_32_convert_data[4];
} bits_32_type_convert_t;

data[0] = bits_32_convert_data[0];
data[1] = bits_32_convert_data[1];
data[2] = bits_32_convert_data[2];
data[3] = bits_32_convert_data[3];

```
### 1.3 Data Packet Decoding Exampl

This is an example of a complete LoRaWAN data packet upload. (The data below is in hexadecimal):

**04 00 0A 02 2B 34 BB 41 12 88 C5 B3 41 00 00 02 05 07**

| Data (Hex)            | Description |
|-----------------------|-------------|
| 0x04 0x00             | Parent ID. According to the sensor table, this identifies the GXHTC temperature and humidity sensor. |
| 0x0A               | GXHTC data length is 10 bytes. |
| 0x02 (0b0000 0010)  | High 4 bits: Sub ID, represents GXHTC temperature. <br /> Low 4 bits: Data type is float. |
| 0x2B 0x34 0xBB 0x41 | Temperature value, converted to 23.40047264099121. |
| 0x12 (0b0001 0010)  | High 4 bits: Sub ID, represents GXHTC humidity. <br /> Low 4 bits: Data type is float. |
| 0x88 0xC5 0xB3 0x41 | Humidity value, converted to 22.471450805664062. |
| 0x00 0x00           | Parent ID. According to the sensor table, this identifies battery power. |
| 0x02                | Battery data length is 2 bytes. |
| 0x05 (0b0000 0101)  | High 4 bits: Sub ID, represents battery percentage. <br /> Low 4 bits: Data type is uint8_t. |
| 0x07               | Battery remaining: 7%. |

## 2. Special Circumstances


### 2.1 Sensor Data Reading Error


When a sensor reading error occurs, the data length field is set to **0**, and no data for this sensor is filled afterward. However, if there are multiple sensors and one sensor encounters an error, it does not affect the data transmission of other sensors.

This is an example of a complete LoRaWAN data packet upload. (The data below is in hexadecimal):

  **04 00 00 00 00 02 05 07**

The GXHTC sensor reading error, so the length field is set to 0. However, the battery data transmission is not affected.

## 3. Sensors

### 3.1 Sensor ID Summary Table

<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Sensor Name</th>
      <th>Parent ID</th>
      <th>Data Name</th>
      <th>Sub ID</th>
      <th>Data Type</th>
      <th>Decimal Places</th>
      <th>Measurement Range</th>
      <th>Unit</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Battery Power</td>
      <td rowspan="2">0x0000</td>
      <td>Battery Percentage</td>
      <td>0x00</td>
      <td>uint8_t</td>
      <td></td>
      <td>0~100</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Charging State</td>
      <td>0x01</td>
      <td>uint8_t</td>
      <td></td>
      <td></td>
      <td></td>
      <td>0: uncharged; 1: charging</td>
    </tr>
    <tr>
      <td>RS485</td>
      <td>0x0001</td>
      <td>—</td>
      <td>—</td>
      <td>uint8_t</td>
      <td></td>
      <td></td>
      <td></td>
      <td>RS485 uploads array data</td>
    </tr>
    <tr>
      <td rowspan="2">BMP280</td>
      <td rowspan="2">0x0002</td>
      <td>Atmospheric Pressure</td>
      <td>0x00</td>
      <td>float</td>
      <td>2</td>
      <td>300~1100</td>
      <td>hPa</td>
      <td></td>
    </tr>
    <tr>
      <td>Temperature</td>
      <td>0x01</td>
      <td>float</td>
      <td>2</td>
      <td>-40~85</td>
      <td>°C</td>
      <td></td>
    </tr>
    <tr>
      <td>BH1750</td>
      <td>0x0003</td>
      <td>Light Intensity</td>
      <td>0x00</td>
      <td>float</td>
      <td>1</td>
      <td>1~65535</td>
      <td>lx</td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2">GXHTC</td>
      <td rowspan="2">0x0004</td>
      <td>Temperature</td>
      <td>0x00</td>
      <td>float</td>
      <td>2</td>
      <td>-40~125</td>
      <td>°C</td>
      <td></td>
    </tr>
    <tr>
      <td>Humidity</td>
      <td>0x01</td>
      <td>float</td>
      <td>2</td>
      <td>0~100</td>
      <td>%RH</td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="3">DA217</td>
      <td rowspan="3">0x0005</td>
      <td>X-axis Acceleration</td>
      <td>0x00</td>
      <td>float</td>
      <td>2</td>
      <td>±16</td>
      <td>g</td>
      <td></td>
    </tr>
    <tr>
      <td>Y-axis Acceleration</td>
      <td>0x01</td>
      <td>float</td>
      <td>2</td>
      <td>±16</td>
      <td>g</td>
      <td></td>
    </tr>
    <tr>
      <td>Z-axis Acceleration</td>
      <td>0x02</td>
      <td>float</td>
      <td>2</td>
      <td>±16</td>
      <td>g</td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="4">OUTDOOR_VALVE</td>
      <td rowspan="4">0x0006</td>
      <td>VALVE_0_STATUS</td>
      <td>0x00</td>
      <td>bool</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>VALVE_1_STATUS</td>
      <td>0x01</td>
      <td>bool</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>PULSE_COUNTER_0</td>
      <td>0x02</td>
      <td>uint32_t</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>PULSE_COUNTER_1</td>
      <td>0x03</td>
      <td>uint32_t</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="4">IO</td>
      <td rowspan="4">0x0007</td>
      <td>IO_NUMBER</td>
      <td>0x00</td>
      <td>uint8_t</td>
      <td></td>
      <td></td>
      <td></td>
      <td>Number of IOs</td>
    </tr>
    <tr>
      <td>IO_EDIT</td>
      <td>0x01</td>
      <td>int16_t</td>
      <td></td>
      <td></td>
      <td></td>
      <td>Each bit represents an IO; 0: non-adjustable, 1: adjustable</td>
    </tr>
    <tr>
      <td>IO_MODE</td>
      <td>0x02</td>
      <td>int16_t</td>
      <td></td>
      <td></td>
      <td></td>
      <td>Each bit represents an IO; 0: input, 1: output</td>
    </tr>
    <tr>
      <td>IO_STATUS</td>
      <td>0x03</td>
      <td>uint16_t</td>
      <td></td>
      <td></td>
      <td></td>
      <td>Each bit represents an IO; 0: low, 1: high</td>
    </tr>
    <tr>
      <td>PT100</td>
      <td>0x0008</td>
      <td>Temperature</td>
      <td>0x00</td>
      <td>float</td>
      <td>1</td>
      <td></td>
      <td>°C</td>
      <td></td>
    </tr>
    <tr>
      <td>DOOR_MONITOR</td>
      <td>0x0009</td>
      <td>DOOR_MONITOR</td>
      <td>0x00</td>
      <td>bool</td>
      <td></td>
      <td></td>
      <td></td>
      <td>true: door open; false: door closed</td>
    </tr>
    <tr>
      <td>BODY_DETECTOR</td>
      <td>0x000A</td>
      <td>BODY_DETECTOR</td>
      <td>0x00</td>
      <td>bool</td>
      <td></td>
      <td></td>
      <td></td>
      <td>true: presence; false: no presence</td>
    </tr>
    <!-- 气体传感器 -->
    <tr>
      <td>SEN0563_HCHO</td>
      <td>0x000B</td>
      <td>HCHO</td>
      <td>0x00</td>
      <td>uint16_t</td>
      <td></td>
      <td>0~3</td>
      <td>ppm</td>
      <td>Qualitative sensor</td>
    </tr>
    <tr>
      <td>SEN0564_CO</td>
      <td>0x000C</td>
      <td>CO</td>
      <td>0x00</td>
      <td>uint16_t</td>
      <td></td>
      <td>5~5000</td>
      <td>ppm</td>
      <td>Qualitative sensor</td>
    </tr>
    <tr>
      <td>SEN0565_CH4</td>
      <td>0x000D</td>
      <td>CH4</td>
      <td>0x00</td>
      <td>uint16_t</td>
      <td></td>
      <td>1~10000</td>
      <td>ppm(C3H8)</td>
      <td>Qualitative sensor</td>
    </tr>
    <tr>
      <td>SEN0566_VOC</td>
      <td>0x000E</td>
      <td>VOC</td>
      <td>0x00</td>
      <td>uint16_t</td>
      <td></td>
      <td>1~500</td>
      <td>ppm</td>
      <td>Qualitative sensor</td>
    </tr>
    <tr>
      <td>SEN0567_NH3</td>
      <td>0x000F</td>
      <td>NH3</td>
      <td>0x00</td>
      <td>uint16_t</td>
      <td></td>
      <td>1~300</td>
      <td>ppm</td>
      <td>Qualitative sensor</td>
    </tr>
    <tr>
      <td>SEN0568_H2S</td>
      <td>0x0010</td>
      <td>H2S</td>
      <td>0x00</td>
      <td>uint16_t</td>
      <td></td>
      <td>0.5~50</td>
      <td>ppm</td>
      <td>Qualitative sensor</td>
    </tr>
    <tr>
      <td>SEN0569_EtOH</td>
      <td>0x0011</td>
      <td>EtOH</td>
      <td>0x00</td>
      <td>uint16_t</td>
      <td></td>
      <td>1~500</td>
      <td>ppm</td>
      <td>Qualitative sensor</td>
    </tr>
    <tr>
      <td>SEN0570_SMOKE</td>
      <td>0x0012</td>
      <td>SMOKE</td>
      <td>0x00</td>
      <td>uint16_t</td>
      <td></td>
      <td>10~1000</td>
      <td>ppm</td>
      <td>Qualitative sensor</td>
    </tr>
    <tr>
      <td>SEN0571_ODOR</td>
      <td>0x0013</td>
      <td>ODOR</td>
      <td>0x00</td>
      <td>uint16_t</td>
      <td></td>
      <td>0.5~50</td>
      <td>ppm</td>
      <td>Qualitative sensor</td>
    </tr>
    <tr>
      <td>SEN0572_H2</td>
      <td>0x0014</td>
      <td>H2</td>
      <td>0x00</td>
      <td>uint16_t</td>
      <td></td>
      <td>0.1~1000</td>
      <td>ppm</td>
      <td>Qualitative sensor</td>
    </tr>
    <tr>
      <td>SEN0574_NO2</td>
      <td>0x0015</td>
      <td>NO2</td>
      <td>0x00</td>
      <td>uint16_t</td>
      <td></td>
      <td>0.1~10</td>
      <td>ppm</td>
      <td>Qualitative sensor</td>
    </tr>
  </tbody>
</table>

