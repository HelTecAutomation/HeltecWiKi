---
sidebar_position: 3
title: Firmware Update
---




This document describes the firmware release notes for all versions of the HT-M7603 gateway.

## Mesh mode

After firmware update, the gateway can operate in ChirpStack Mesh mode. 

```
rm -rf update_M7603* && wget http://minerback.heltec.cn/download/update_M7603.sh && chmod +x update_M7603.sh && ./update_M7603.sh
```

:::note
Due to the large size of the Mesh package, the Flash file copying process may be slow, and the initial installation may take several minutes to complete. Please be patient and do not interrupt the process.
:::