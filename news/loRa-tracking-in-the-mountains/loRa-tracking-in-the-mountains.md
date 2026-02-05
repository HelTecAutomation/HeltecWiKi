---
title: "LoRa Tracking in the Mountains"
description: "How We Tracked Paragliders Without Cellular Coverage"
category: "News"
author: "Hilbert Wang"
date: "2025-11-27"
image: "img/5.png"
productCategory: ["LoRa32", "nRF", "LoRaWAN"]
---

![](img/1.png)

Imagine this: you need to track 40 athletes in real-time over a 250 km distance in the mountains, where there isn't a single cell tower in sight. That was the exact challenge I faced at the RusXFly paragliding race. In this article, I'll tell you how we solved it with LoRa, Heltec modules, and a whole lot of enthusiasm.

<!-- truncate -->

Hey everyone! You might know [**Eugeny Shlyagin**](https://www.linkedin.com/in/shlyagin/) from the AGLoRa project, where he was messing around with a simple GPS LoRa tracker prototype on Arduino. But this time, he want to share a new and exciting experience he had using LoRa for object tracking.

:::note P.S.
The following is narrated from Eugeny Shlyagin’s first-person perspective.
:::

This spring, I was asked to provide safety tracking for the [**RusXFly**](https://rusxfly.ru/) paragliding race. It's a competition for top-tier paragliders, kinda like the X-Alps. The athletes have to cover a 250 km route through tough mountain terrain, either on foot or by paraglider. The big challenge for tracking them? There's basically no cell phone coverage out there.

In my day job, I run a small company that does GPS tracking for vehicles. I agreed to take part because I was really curious to see if I could get a functional tracking system working in the wild, without relying on cellular networks. The important thing here is that for both me and the race organisers, this was an experimental, non-commercial project. So, the goal was to set everything up as simply and cheaply as possible. We just wanted to test how well LoRa technology works in real-world conditions and see if it's actually practical to use.

### The Challenge: Where This Was Happening

The natural environment for this race is no joke. My task was real-time tracking, so the organisers could see where every athlete was. The main complication was that most of the route had zero cellular reception.

![](img/2.png)

I needed a way to get the athletes' coordinates in real-time to a place with cell service, and then send them to the backend server. So, I needed the trackers themselves, receiver devices with GSM modules (let's call them gateways), and the software to make it all work.

### What We Needed: A Quick List
**Trackers** - Some needed to be simple transmitters for max battery life (48+ hours in an emergency).
Others needed to be...<br /> **Tracker-Repeaters** - To extend the network range by relaying signals. These needed to last 24 hours on a charge.<br />**Gateways** - Devices to receive LoRa packets and forward them to the internet via GSM.<br />**Software** - Custom firmware for the devices and a backend server to map everything.

To let organisers and viewers see the athletes, we had to get the data onto the internet. Cell service was mostly unavailable along the entire 250 km route, but there were a few cell towers in some spots along the way. I plannedMy to place LoRa receivers with GSM modules near those towers, up high, to send the data back to the backend.

### The Gear

For the trackers, Heltec modules like the [**T114**](https://heltec.org/project/mesh-node-t114/) or an ESP32-based [**LoRa module with GPS**](https://heltec.org/project/wireless-tracker/) would be perfect. I got a bit lucky—a local manufacturer agreed to make me 40 low-power trackers based on the STM32 for free, as part of this experiment. If you're not that lucky, just use Heltec modules! They have a great price and can do everything you need!

![](img/3.png)

### My Top Lessons from the Build:

**1.Data Efficiency is King:** In LoRa, every extra byte is a real problem. I stripped the data down to the bare essentials, creating a custom 21-byte packet. This is why I didn't use Meshtastic—my goal was the shortest packet possible for higher success rates and less airtime.<br />**2.GSM Modems Need Power Buffers:** Don't be cheap with capacitors on the GSM modem power supply! A 1.5 Farad supercapacitor is a great idea to smooth out the current draw from the GSM module. <br />**3.Simple Relaying Works:** I used a basic Flooding algorithm with a limited hop count. The device re-broadcasts a packet only once. For 40 trackers, this was perfectly sufficient.<br />**4.Heltec for the Win:** For the 10 gateways, I used [**Heltec LoRa Wireless Stick Lite V3 modules**](https://heltec.org/project/wireless-stick-lite-v2/). They are fantastic, cheap, reliable, and simplified assembly immensely.<br />**5.Antennas Matter:** For the gateways, I used external car antennas (with magnetic mounts) for much better performance than the small stock ones that come with the modules.

For the gateways, I soldered on those popular, cheap “red” GSM modules (like the SIM800L). The gateways were placed on mountain peaks or in support cars, powered by power banks. 

![](img/4.png)

### The Software

The firmware for both tracker and gateway was custom-written for this race. (I plan to open-source it soon after fixing the known issues).
For the backend, I used the open-source [**Traccar server**](https://www.traccar.org/). It's easy to deploy and I already had a client app that I adapted for the race by adding an altitude display.

### Apps for the Participants
I used the built-in Traccar web interface mostly for admin stuff.
For the participants and organisers, I used my own apps:<br />[**Another Tracking Client for viewers to see athletes on a map with direction and altitude**](https://apps.apple.com/ru/app/another-tracking-client/id6657993181).<br />[**LoRa RADAR for support crews to get data directly from trackers via Bluetooth, using pre-cached maps offline**](https://github.com/Udj13/AGLoRa/wiki/Lora-Radar-app).<br />The nice thing about a native app is that it uses the phone's own coordinates and compass to clearly show the direction to the athlete and the difference in altitude.

### The Nitty-Gritty: Coding and Building
I sacrificed looks for this test project and used external LoRa and GPS antennas because they just work better. In the end, the devices looked a bit like gadgets from Counter-Strike, and I was a little worried about what the police would think if they saw them in my trunk.
I lost a lot of time writing the gateway firmware. I had issues with some "blue" modules and ended up standardizing on the "red" (SIM8xx) ones.

**The HTTP Bottleneck**<br />Unfortunately, standard vehicle tracking protocols aren't designed for sending batch messages from multiple devices in a single data packet. Since this was a test project, I didn't want to overcomplicate things by adding intermediate services. But sending packets via individual HTTP requests was s-l-o-o-o-w (about 2 seconds each).
This was a critical issue at the start, but for the spread-out race later on, it wasn't a problem anymore. For a permanent system, use MQTT or batched requests.

![](img/5.png)

To avoid the bottleneck at the race start, I wrote a quick Python script to parse logs from a USB-connected gateway and send them via my laptop's LTE connection. A hack, but it worked!

### The Trip: An Adventure in Itself

Even though I'm an experienced outdoorsman, I'm a flatlander at heart, more into kayaks and fishing. So, I was a bit shocked by the scale of the mountains where the race was held. For example, for the race start, we drove up to a plateau at 2600 meters above sea level, with an amazing view of Mount Elbrus. I set up my temporary workstation right on the edge of a huge cliff, above a waterfall and a rushing mountain river.

But the organisers wanted more. While the athletes were acclimatizing, they took one of the gateways up to the top of a nearby mountain. Then the weather turned, and it got buried in snow.We thought it would die in a couple of hours. But it kept going... one day, two, three... For a whole week, it kept reporting from the snow-covered peak until its power bank finally ran out. A real trooper!

![](img/6.png)

I was really happy with my choice of Heltec modules. The concept of cheap, homemade gateways meant I didn't have to worry about them. If a cheap gateway was lost or broken, I'd just block the SIM card. I wouldn't have been so relaxed with an expensive LoRaWAN gateway!
The relaying solution was a lifesaver. I received some coordinates after 3 or 4 hops, especially when signals from athletes behind a mountain were relayed by other flying participants.

### How It All Turned Out
Was it worth it? Absolutely! For the first time ever at such an event, the organisers could see where every single athlete was.

![](img/7.png)

On the third day, the weather got really bad — snow, then heavy rain, many roads became impassable. Without knowing their location, keeping the athletes safe would have been very difficult.Yes, you could use satellite messengers, but providing them for 40 participants would have been a very expensive solution. I was also happy with the tests. I managed to deploy a temporary monitoring system in the wild with minimal effort and cost.

### Wrapping Up
This concept opens the door to some really cool projects. For example, using solar-powered repeaters to deploy lightweight, cheap LoRa GPS monitoring networks anywhere. You could even set up a completely local tracking system on just a laptop in the middle of nowhere.

![](img/8.png)

LoRa opens up incredible possibilities for monitoring in places where it was either too difficult or too expensive before. And as our experiment showed, you can get started with little more than a handful of Heltec modules and a willingness to improvise. Stay tuned for updates—I'll be releasing the code as open source soon!

