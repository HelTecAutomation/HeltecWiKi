
// Browse by data - organized by categories
export const browseByData = [
   {
    key: "lorawan",
    image: "lorawan",
    title: "LoRaWAN Appliaction",
    moreLink: "/docs/devices/lorawan-application/",
    docList: [
       {
        path: "/docs/devices/lorawan-application/lora-gateway/",
        image: "img/main-img/3.png",
        title: "LoRa Gateway Series",
      },
      {
        path: "/docs/devices/lorawan-application/lora-node-devices/",
        image: "img/main-img/lora_node.jpg",
        title: "LoRa Node Devices",
      },
      {
        path: "https://heltec.org/wireless-aggregator/",
        image: "img/main-img/wireless_aggregator.png",
        title: "Wireless Aggregator",
      },
      {
        path: "/docs/devices/lorawan-application/lora-node-devices/meshpocket/",
        image: "img/main-img/meshpocket.jpg",
        title: "MeshPocket ",
      },
    ],
  },
  {
    key: "open_source_devices",
    image: "open_source_devices",
    title: "Open Source Devices",
    moreLink: "/docs/devices/open-source-hardware/",
    docList: [
       {
        path: "/docs/devices/open-source-hardware/esp32-series/esp32-quick-start",
        image: "img/main-img/esp32qs.jpg",
        title: "Heltec ESP32 Series Quick Start",
      },
      {
        path: "/devices/open-source-hardware/nrf52840-series/nrf52840-series-quick-start",
        image: "img/main-img/nrf.jpg",
        title: "Heltec nRF52840 Series Quick Start",
      },
      {
        path: "/docs/devices/open-source-hardware/cubecell-series/cubecell-quick-start",
        image: "img/main-img/wifi_kit_32.jpg",
        title: "Heltec CubeCell Series Quick Start",
      },
      {
        path: "/docs/devices/open-source-hardware/esp32-series/wireless_boot",
        image: "img/main-img/capsule.png",
        title: "Heltec WirelessBoot System",
      },
    
    ],
  },
  {
    key: "wifi_halow",
    image: "wifi_halow",
    title: "Wi-Fi HaLow",
    moreLink: "/docs/devices/wifi-halow/",
    docList: [
      {
        path: "https://heltec.org/what-is-wi-fi-halow/",
        image: "img/main-img/wifi_halow.png",
        title: "What is Wi-Fi HaLow",
      },
      {
        path: "/docs/devices/wifi-halow/ht-h7608/",
        image: "img/main-img/7608.png",
        title: "Wi-FI HaLow Router",
      },
      {
        path: "/docs/devices/wifi-halow/ht-hd01/",
        image: "img/main-img/dongle.webp",
        title: "Wi-FI HaLow Dongle",
      },
    
      {
        path: "/docs/devices/wifi-halow/ht-hc32/",
        image: "img/main-img/sensor.jpg",
        title: "ESP32 Wi-FI HaLow Camera",
      },
    ],
  },
  {
    key: "networking",
    image: "networking",
    title: "Networking & Communication",
    moreLink: "/docs/intro",
    docList: [
      {
        path: "/docs/devices/general-docs/lorawan-instructions/",
        image: "img/main-img/lora.png",
        title: "LoRa Communication Protocol Deep Dive",
      },
      {
        path: "/docs/devices/open-source-hardware/esp32-series/esp32-quick-start?esp32=meshtastic",
        image: "img/main-img/meshtastic.png",
        title: "WiFi Mesh Network Construction",
      },
      {
        path: "https://flash.nmiot.net:3333/",
        image: "img/main-img/meshsolar_confige.png",
        title: "MeshSolar WebSerial Tool",
      },
      {
        path: "/docs/platforms",
        image: "img/main-img/4.png",
        title: "Cloud Platform Integration Guide",
      },
    ],
  },
];
// Get category by key
export const getCategoryByKey = (key) => {
  return browseByData.find((category) => category.key === key);
};

// Get all category keys
export const getAllCategoryKeys = () => {
  return browseByData.map((category) => category.key);
};

// Get category titles
export const getCategoryTitles = () => {
  return browseByData.map((category) => ({
    key: category.key,
    title: category.title,
  }));
};
