---

title: "Heltec V3 & V4 Mountain Field Test: LoRa Mesh Performance in Real Terrain"
description: "Recently, Daniel put Heltec V3 and V4 devices through real-world tests in the challenging mountain terrain of central Italy."
category: "Technical"
author: "Lily"
date: "2026-08-20"
image: "img/1.png"
productCategory: ["LoRa32", "Meshtastic", "Meshcore"]
-----------------------------------------------------

We are pleased to share a detailed field test report from Daniel IU6WSC, a member of the LoRa and Meshtastic communities.

Recently, Daniel put Heltec [**V3**](https://heltec.org/project/wifi-lora-32-v3/) and [**V4**](https://heltec.org/project/wifi-lora-32-v4/) devices through real-world tests in the challenging mountain terrain of central Italy.

Unlike idealized laboratory tests, real-world communications are often affected by complex terrain, mobility, and unpredictable RF conditions. To better understand how the devices perform in practical applications, Daniel conducted a series of outdoor tests in the Apennine Mountains near the border between Italy's Lazio and Abruzzo regions.

![](img/1.png)

The test area included:

* Steep valleys
* High-altitude ridges
* Complex terrain

All of these factors pose considerable challenges to wireless communication performance.

---

# Heltec V3: Mobile Communication and Multi-Hop Mesh Testing

For the vehicle test, Daniel used a Heltec V3 with the stock antenna and operated it from inside the vehicle.

![](img/2.png)

### Test Route

* Total distance: approximately 4 km
* Elevation ranged from 808 m down to 620 m
* The route followed mountain roads

Despite:

* Potential RF signal attenuation from the vehicle's metal body
* Extensive blockage from the surrounding mountains

the communication link remained stable throughout the test.

---

![](img/3.png)

Daniel also conducted a multi-hop mesh test on foot.

Because the mountainous terrain blocked the path, a direct line-of-sight link could not be established between the starting point and the destination node. Communication was therefore relayed through two high-altitude nodes:

* Monte Livata (elevation: 1,350 m)
* Marsia (elevation: 1,980 m)

### Final Test Results

* Message delivery rate reached 100%
* All five test messages were transmitted successfully
* Multi-hop link latency was approximately 10 seconds

This test demonstrates the potential of LoRa Mesh networks in mountainous areas and environments with limited infrastructure.

---

# Heltec V4: Exploring a Compact, Portable Communication Solution

For the Heltec V4, Daniel focused on a different use case:

**A compact, portable node design.**

![](img/4.png)

During the test, the [**V4**](https://heltec.org/project/wifi-lora-32-v4/) was installed in a pocket-sized enclosure with an integrated GPS module and an internal antenna.

Although an internal antenna typically involves some trade-offs in RF performance, the V4's greater transmit capability can partially offset the antenna's limitations.

![](img/5.png)

### Vehicle Test

Daniel drove from Cervara di Roma (Lazio) to Oricola (Abruzzo). During the test, he:

* Used the pocket-sized [**V4**](https://heltec.org/project/wifi-lora-32-v4/) device
* Used no external antenna
* Maintained communication through a multi-node Mesh relay network

This test demonstrates the potential of compact LoRa Mesh devices for portable and off-grid communications.

---

# Important Feedback from Real-World Testing

We are very grateful to Daniel for the time and effort he invested in this comprehensive field test.

Realistic testing is extremely valuable because it helps us understand how devices actually perform outside the laboratory and provides important guidance for future product improvements.

During the tests, Daniel also shared practical feedback on:

* Power consumption
* Hardware interaction and usability
* Firmware flashing experience

These suggestions have been shared with our engineering team. We are actively evaluating possible improvements and considering them for future hardware revisions and software updates.

Feedback from community users has always been an important part of our product development process.

Every test helps us better understand user needs and continuously improve the product experience.

---

# Advancing Off-Grid Communication Together

The combination of LoRa technology and Mesh networking continues to demonstrate tremendous potential in:

* Outdoor exploration
* Emergency communications
* Communication in areas without network coverage
* Community-based communication networks

As more users explore decentralized communication systems, real-world testing and feedback from the community are helping drive the technology forward.

Once again, our thanks to Daniel IU6WSC for sharing these detailed test results, photographs, and valuable suggestions with the community.

We look forward to seeing more real-world use cases and to continuing the development of Heltec products together with makers and communication communities around the world.
