---
title: "KoaOS for Heltec V4"
description: "A small Unix-style operating system for the Heltec WiFi LoRa 32 V4."
category: "Technical"
author: "Kaden Lovelady"
date: "2026-10-14"
image: "img/v4.png"
productCategory: ["LoRa32"]
---


 
# KoaOS for Heltec V4

**A small Unix-style operating system for the Heltec WiFi LoRa 32 V4.**
Flash it once, log in over USB, and the board becomes a pocket computer with a shell, a text editor, GPS, Wi-Fi, weather and LoRa APRS. Then install apps over Wi-Fi without ever reflashing, or write your own in C.

*KoaOS is an independent, open-source project (MIT) by Koakno. It is not made or endorsed by Heltec; "Heltec" is used only to say which board it runs on.*

- Project page and source: https://github.com/Koakno/KoaOS-for-the-Heltec-V4
- Board: Heltec WiFi LoRa 32 **V4** (ESP32-S3, with PSRAM)
- License: MIT

---

## Why KoaOS

The V4 is a capable board, but most firmware turns it into a single-purpose device. KoaOS treats it as a small computer. You operate it from a serial terminal (USB), everything you type is mirrored on the board's OLED, and no phone app or PC is needed once it has been flashed.

KoaOS is built around three ideas:

- **A real shell and filesystem.** Login, processes, files that survive reboots, a Nano-style editor, and simple shell scripts.
- **Apps you install and remove at runtime.** The firmware stays put. Apps are separate packages (`.esp`) downloaded over Wi-Fi and run in a WebAssembly sandbox, so a crashing app does not take the OS down.
- **The OS owns the hardware.** Apps ask for Wi-Fi, GPS, LoRa or pins, and the OS grants, shares or refuses. Two apps cannot fight over the radio or the same pin, and everything an app holds is released when it exits or is killed.

## What you get out of the box

Built into the firmware, ready right after flashing:

- Shell with login, `ps`, `kill`, background jobs (`&`), redirection (`>`, `>>`) and scripts
- LittleFS storage that survives reboots and reflashes (same partition scheme)
- **GPS** with a shared on/off manager
- **Wi-Fi** client (`wifi scan`, `wifi connect`) with HTTP/HTTPS
- **Weather** from Open-Meteo
- **LoRa APRS** (`aprs`, plus an `aprsd` background daemon)
- `edit` text editor, `neofetch`, `pins`, and more

## Apps and the SDK

Apps are written in C, compiled to WebAssembly and run by [wasm3](https://github.com/wasm3/wasm3), with app memory held in PSRAM (about 1 MB per app). The SDK exposes a 48-function ABI covering:

- Console and file I/O (each app gets a private `/data/<app>/` folder)
- Wi-Fi and HTTP(S), GPS, and LoRa (configure, CAD, TX, RX)
- GPIO, two UARTs, I2C and SPI on OS-approved pins
- Hardware RNG, SHA-256, HMAC-SHA256 and AES-128
- IPC, so a command like `myapp start` can talk to a running `myapp` daemon

Every package declares what it needs (for example `requires=wifi,gps`), and the OS enforces it at run time. Apps cannot touch the pins used for GPS, the radio, the OLED, USB or power.

Included example apps: `hellowasm`, `gpswatch`, `webget`, `iodemo`, and an experimental **MeshCore** client.

## Quick start

1. Flash the firmware (see below) and open a serial terminal on the board's USB port: Arduino Serial Monitor, PuTTY, or a serial app on your phone.
2. Log in with `root` / `1234`, then try:

```
help
free              # should show a psram line
wifi scan
wifi connect <ssid> <password>
weather
gps
```

3. To install an app, serve a folder of `.esp` packages from any computer or phone on the same Wi-Fi, then on the board:

```
install -s <host-ip>:8000
install -l
install meshcore
```

### Flashing

KoaOS needs the **V4's PSRAM**, so other boards, including the V3, are not supported. You can either:

- **Use the prebuilt firmware** from the project's GitHub Releases page and flash it at address `0` with `esptool`, Espressif's Flash Download Tool, or an Android flasher such as ESPFlash; or
- **Build it yourself** with the Arduino IDE (or ArduinoDroid on Android). The README lists the exact board settings; the important ones are QSPI PSRAM, 16 MB flash, and the *No OTA (2MB APP/2MB SPIFFS)* partition scheme.

KoaOS was built and flashed entirely from an Android phone, so no PC is required at any step.

## Good to know

- **V4 only.** Input is by USB serial terminal; an on-board keyboard is not supported yet.
- **GPIO is an app API, not a driver layer.** Not available to apps yet: GPIO interrupts, PWM, ADC, display drawing, and command-line arguments.
- **Apps are interpreted**, so heavy computation is slow. Each `.wasm` is limited to 256 KB.
- **Security is basic and meant for hobby use.** The default login is a convenience, and anyone holding the board can reflash it. `install` uses plain HTTP, and the SHA-256 in a package catches corruption but does not prove authorship, so only install from servers you control. The firmware runs no network server, so nothing listens on Wi-Fi.
- **MeshCore is experimental.** The client implements the MeshCore protocol and passes native tests, but has not yet been tested against real MeshCore nodes over the air. Feedback is welcome.

## Roadmap

Planned work includes saved Wi-Fi networks, I2C keyboard support (if there is demand), a graphical home screen for the V4 Expansion Kit's touchscreen, and a public app repository. See `ROADMAP.md` in the repository.

## Credits

Built on [wasm3](https://github.com/wasm3/wasm3) (MIT), with U8g2, TinyGPSPlus, RadioLib and arduino-esp32. The MeshCore app speaks the [MeshCore](https://github.com/meshcore-dev/MeshCore) protocol.
