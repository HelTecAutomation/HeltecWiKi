---
sidebar_position: 3
title: AT Command User Manual
---

import styles from '@site/src/css/styles.module.css';

## Serial port settings
- Baud rate: 115200
- Stop bit: 1
- Data bits: 8
- DTR, RTS requirement: None
- Ending characters: None

## Related Pins

| Pin     | Type | Function            | Description                                                                 |
|---------|------|---------------------|-----------------------------------------------------------------------------|
| GPIO10  | DI   | Mode Determination  | "1": Configuration Mode (115200 baud); "0": Transparent Mode. When switching from 1 to 0, the device restarts and reconnects to the HaLow AP if configuration changes are detected. |
| GPIO11  | DI   | Wake-up Pin         | "1": Wake up; "0": AUTO-Sleep.                                               |
| GPIO12  | DO   | Connection Status   | "1": Disconnected; "0": Connected.                                          |
| GPIO16  | I/O  | TX                  | UART transmit pin.                                                          |
| GPIO17  | I/O  | RX                  | UART receive pin.                                                           |


## AT Commands
:::note
- The maximum length of a single packet is 512 bytes.
- AT command input does not require an end symbol.
- The return value includes a newline character.
:::

### Error Return

| Return                 | Description                    |
|------------------------|--------------------------------|
| +ERROR:not supported   | Unsupported command             |
| +ERROR:format          | Format error                    |
| +ERROR:length          | Command value length error      |
| +ERROR:value           | Command value error             |

### Region

**Setting Region**

<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+Region=?</td>
    <td>+OK<br />+Region=1,AU</td>
  </tr>
  <tr>
    <td colspan="3">
      Values 0–7 correspond to: <code>US</code>, <code>AU</code>, <code>EU</code>, <code>IN</code>, <code>JP</code>, <code>KR</code>, <code>NZ</code>, <code>SG</code>
    </td>
  </tr>
</table>

**Query Region**
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+Region=1</td>
    <td>+OK<br />+Region=1,AU</td>
  </tr>
  <tr>
    <td colspan="3">
      Values 0–7 correspond to: <code>US</code>, <code>AU</code>, <code>EU</code>, <code>IN</code>, <code>JP</code>, <code>KR</code>, <code>NZ</code>, <code>SG</code>
    </td>
  </tr>
</table>

---

### HaLow SSID
**Setting SSID**
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+SSID=HC02-1234</td>
    <td>+OK<br />+SSID=HC02-1234,AU</td>
  </tr>
  <tr>
    <td colspan="3">
      Set HaLow SSID as “HC02-1234”
    </td>
  </tr>
</table>

**Query SSID**
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+SSID=?</td>
    <td>+OK<br />+SSID=HC02-1234,AU</td>
  </tr>
  <tr>
    <td colspan="3">
      Set HaLow SSID as “HC02-1234”
    </td>
  </tr>
</table>

### Password
**Setting HaLow Password**
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+Password=12345678</td>
    <td>+OK<br />+Password=12345678,AU</td>
  </tr>
  <tr>
    <td colspan="3">
      Setting HaLow Password as “12345678”
    </td>
  </tr>
</table>

**Query HaLow Password**

<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+Password=?</td>
    <td>+OK<br />+Password=12345678,AU</td>
  </tr>
  <tr>
    <td colspan="3">
      HaLow Password is “12345678”
    </td>
  </tr>
</table>

---

###  Target Server Address
**Setting Target Server Address**

<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+Server=192.168.0.108 </td>
    <td>+OK<br />+Server=192.168.0.108</td>
  </tr>
  <tr>
    <td colspan="3">
     Set target server address as “192.168.0.108”
    </td>
  </tr>
</table>

**Query Target Server Address**
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+Server=? </td>
    <td>+OK<br />+Server=192.168.0.108</td>
  </tr>
  <tr>
    <td colspan="3">
    Target server address is “192.168.0.108”
    </td>
  </tr>
</table>

### Target Server Port 
**Setting Target Server Port**
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+ServerPort=1008  </td>
    <td>+OK<br />+ServerPort=1008</td>
  </tr>
  <tr>
    <td colspan="3">
    Set target server port as 1008
    </td>
  </tr>
</table>


**Query Target Server Port**
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+ServerPort=? </td>
    <td>+OK<br />+ServerPort=1008</td>
  </tr>
  <tr>
    <td colspan="3">
    Set target server port as 1008
    </td>
  </tr>
</table>


---

## Local Port
**Setting Local Port**

<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+LocalPort=1002 </td>
    <td>+OK<br />+LocalPort=1002</td>
  </tr>
  <tr>
    <td colspan="3">
    Set the local port as 1002
    </td>
  </tr>
</table>

**Query Local Port**

<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+LocalPort=? </td>
    <td>+OK<br />+LocalPort=1002</td>
  </tr>
  <tr>
    <td colspan="3">
    Local port is 1002
    </td>
  </tr>
</table>

###  Local IP Mode
**Setting Local IP Mode**

<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+DHCP=1 </td>
    <td>+OK<br />+DHCP=1</td>
  </tr>
  <tr>
    <td colspan="3">
    1:DHCP; 0: static IP
    </td>
  </tr>
</table>

**Query Local IP Mode**

<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+DHCP=? </td>
    <td>+OK<br />+DHCP=1</td>
  </tr>
  <tr>
    <td colspan="3">
    1:DHCP; 0: static IP
    </td>
  </tr>
</table>

### Local IP
**Setting Local IP**
*Effect when DHCP=0*
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+LocalIP=192.168.1.118 </td>
    <td>+OK<br />+LocalIP=192.168.1.118</td>
  </tr>
  <tr>
    <td colspan="3">
    Set Local IP as 192.168.1.118
    </td>
  </tr>
</table>

**Query Local IP**
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+LocalIP=? </td>
    <td>+OK<br />+LocalIP=192.168.1.118</td>
  </tr>
  <tr>
    <td colspan="3">
    Local IP is 192.168.1.118
    </td>
  </tr>
</table>

---

### Subnet Mask
**Setting Subnet Mask**
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+SubNet=255.255.255.0 </td>
    <td>+OK<br />+SubNet=255.255.255.0</td>
  </tr>
  <tr>
    <td colspan="3">
    Set local subnet mask as 255.255.255.0
    </td>
  </tr>
</table>

**Query Subnet Mask**
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+SubNet=? </td>
    <td>+OK<br />+SubNet=255.255.255.0</td>
  </tr>
  <tr>
    <td colspan="3">
    Local subnet mask is 255.255.255.0
    </td>
  </tr>
</table>

### Gateway IP
**Setting Gateway IP**
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+GateWay=192.168.1.1 </td>
    <td>+OK<br />+GateWay=192.168.1.1</td>
  </tr>
  <tr>
    <td colspan="3">
    Set gateway IP as 192.168.1.1s
    </td>
  </tr>
</table>

**Query Gateway IP**
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+SubNet=? </td>
    <td>+OK<br />+SubNet=255.255.255.0</td>
  </tr>
  <tr>
    <td colspan="3">
    Gateway IP is 192.168.1.1
    </td>
  </tr>
</table>

---

### Baud Rate
**SettingBaudRate**
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+SubNet=8 </td>
    <td>+OK<br />+Baud=8,115200</td>
  </tr>
  <tr>
    <td colspan="3">
    (0-9correspondsto1200,2400,4800,9600,14400,19200,38400,57600,115200,921600)
    </td>
  </tr>
</table>

**Query Board Rate**
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+SubNet=? </td>
    <td>+OK<br />+Baud=8,115200</td>
  </tr>
  <tr>
    <td colspan="3">
    (0-9correspondsto1200,2400,4800,9600,14400,19200,38400,57600,115200,921600)
    </td>
  </tr>
</table>

**Query Firmware Version**


**HaLow OTA**
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+OTA=http://192.168.0.2/halow-udp-104.bin</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="3">
    “http://192.168.0.2/halow-udp-104.bin”istheaddresswherethefirmwareisstored.
    </td>
  </tr>
</table>

**Protocol Type**

*Set Protocol Type*
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+Mode=0</td>
    <td>+OK<br />+Mode=0</td>
  </tr>
  <tr>
    <td colspan="3">
    Set the protocol type to UDP, “0” and “1” corresponds to"UDP"and"TCP" respectively.
    </td>
  </tr>
</table>

*Query Protocol Type*
<table>
  <tr>
    <th>AT Command</th>
    <th>Return</th>
  </tr>
  <tr>
    <td>AT+Mode=?</td>
    <td>+OK<br />+Mode=0</td>
  </tr>
  <tr>
    <td colspan="3">
    Set the protocol type to UDP, “0” and “1” corresponds to"UDP"and"TCP" respectively.
    </td>
  </tr>
</table>

