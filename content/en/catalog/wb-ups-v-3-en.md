---
article: WB-UPS v.3
name: WB-UPS v.3
type: Battery module
title: UPS module
sub_title: on DIN rail
cover: wb-ups-v-3-en/2OB3-lLPFq9hVB1O5aKaS9VKxGyb7iOU.png
documentation: https://wirenboard.com/wiki/UPS3
images: [
  ["wb-ups-v-3-en/9TKRRq5D66wy5AzpHOI_4E8ma9D10uUj.png"],
  ["wb-ups-v-3-en/CxaKjo0rPYkXxY6DL3fUIv8AQ5swxNG3.png"],
  ["wb-ups-v-3-en/yP_KSq4kHt8ofNQTt0POTLjIF8iMQf-_.png"],
  ["wb-ups-v-3-en/AgcF-AUN7T6DtEABPBlgzOCVRnyL2W9c.png"],
  ["wb-ups-v-3-en/jkpqFeWdZzGL5XrNGqrbemJL1lEOXrGY.png"],
  ["wb-ups-v-3-en/qGRa6zOMPxyCSRtbBYHDeeqTVRMdSyxT.png"],
  ["wb-ups-v-3-en/AEg850kRahvMoJK-ZaW2vZ5kSJZxO7Jn.png"],
  ["wb-ups-v-3-en/bxkz7k7rrhgckCyOi8a_gQqRMfVgElLh.png"],
  ["wb-ups-v-3-en/2OB3-lLPFq9hVB1O5aKaS9VKxGyb7iOU.png"]
]
---
::product
#description
Lithium-ion Battery Uninterruptible Power Supply (2×18650).

During a loss of input power, it provides 9 V to 25 V output to loads not exceeding 15 W.
#info
## Основные характеристики
::product-section{title="Advantages"}
:photo{
  src="wb-ups-v-3-en/l2elkKVghi8chPK3MPuD1wRh3v61wctz.png"
  width="500px"
  float="right"
}
- Power supply and batteries integrated in a single enclosure;
- DIN rail mounting;
- Modbus RTU interface;
- Supplied with two time-tested 18650 batteries;
- Built-in safety features;
- Extended battery lifespan;
- Parallel operation mode for multiple WB-UPS v.3 units powering a single load.
::
::product-section{title="Technical Specifications"}
:photo{
  src="wb-ups-v-3-en/am_zrp8IO9Tbi9qhPkuN4L2jP6KA7VB4.png"
  width="500px"
  float="right"
}
- Input voltage: 10–27 V;
- Backup mode output: fixed voltage adjustable from 9 V to 25 V when input power is unavailable;
- Rated / peak power: 15 W / 20 W;
- Rated capacity: 15 Wh;
- Backup time at 15 W load: 60 minutes;
- Operating ambient temperature: −20 to +45 °C;
- Warranty period: 2 years;
- Service life: 5 years;
- Dimensions (L × W × H): 36 × 90 × 58 mm.
::
::product-section{title="Safety"}
:photo{
  src="wb-ups-v-3-en/VSTJEwU1n_ZLj3uCuZmNoQbNOnmPbaup.png"
  width="500px"
  float="right"
}
Four independent battery overvoltage protection levels:

1. The microcontroller gradually stops charging when the battery voltage reaches 8.1 V;
2. Hardware protection A prevents charging above 8.2 V;
3. Protection B stops charging if the voltage of any cell exceeds 4.25 V;
4. Protection C blows a “sacrificial” fuse if the voltage of any cell exceeds 4.3 V.
Three independent overcurrent protection levels:

- Charge and discharge currents are limited;
- The battery is disconnected if the current exceeds 4 A;
- The fuse blows in case of a short-circuit current.
The battery is protected against overheating both by hardware and software mechanisms.
::
::product-section{title="Prolonged Battery Service Life"}
:photo{
  src="wb-ups-v-3-en/4CBysTW2x470tqxaXlSFgj_v4BarruqO.png"
  width="500px"
  float="right"
}
Battery temperature is monitored during both charging and discharging to prevent accelerated wear and dendrite formation.

Charging the battery to 8.1 V instead of the standard 8.4 V significantly increases its lifespan with only a minor reduction in usable capacity.

Full discharge is prevented — the load is disconnected when battery voltage drops to 6 V.

A balancing circuit equalizes the voltage across the cells, ensuring uniform charge levels.
::
::product-section{title="Parallel Operation Mode"}
:photo{
  src="wb-ups-v-3-en/Ldo93g0ADsNJW3ciKsHjkZUtfJP8GWn8.png"
  width="500px"
  float="right"
}
If the power or capacity of a single WB-UPS v.3 is insufficient, multiple units can be connected in parallel, with this mode enabled in the settings. The devices will automatically share the load between them.
::
::product-section{title="Transport Mode"}
:photo{
  src="wb-ups-v-3-en/9JeLyxeR7q-hVwOmKKezjAMs9AcZ0qQx.png"
  width="500px"
  float="right"
}
Engaging the hidden button cuts off the battery to avoid discharge. The battery is re-enabled automatically once external power is available. This prevents UPS battery depletion during delivery.
::
::product-section{title="Modbus RTU"}
:photo{
  src="wb-ups-v-3-en/X90ZjbBR4n4sRbKuaxkWJt4ylBhs10TQ.png"
  width="500px"
  float="right"
}
The device status information available via Modbus RTU includes:

- Operating mode;
- Battery charge level;
- Input and output voltages;
- Battery temperature;
- Battery current;
- Input current;
- Input current used for battery charging;
- Output current when running on battery;
- Front panel button status and counters for button presses (short, long, double short, short + long).
Moreover, device parameters can be configured via Modbus RTU:

- Operating mode;
- Output voltage;
- Maximum battery charge and discharge currents.
It also enables turning the load on or off when external power is absent.
::
::product-section{title="Configuration"}
:photo{
  src="wb-ups-v-3-en/6h2yxweOFd_Om1YjVWn2LY7DXR6a7zZa.png"
  width="500px"
  float="right"
}
The device can be configured via the Wiren Board controller’s web interface.

When used with other equipment, configuration is performed by writing setup parameters to the corresponding Modbus registers.
::
::product-section{title="Interface"}
:photo{
  src="wb-ups-v-3-en/Z4AW6j8aO8iOX3UYPP4Zefj1hSDNeX13.png"
  width="500px"
  float="right"
}
The device card in the Wiren Board controller’s web interface displays all channels enabled in the settings.
::
::product-section{title="Fast Modbus support"}
:photo{
  src="wb-ups-v-3-en/a_iN3eaAyqksvtKMdi02a65yfmRJ-Pfa.png"
  width="500px"
  float="right"
}
All Wiren Board devices, in addition to standard Modbus RTU, can operate with its extension [Fast Modbus](https://wiki.wirenboard.com/wiki/Fast_Modbus/en) ⚡, which adds new capabilities:

- instant polling of input states and measured values via events;
- quick discovery of devices connected to the controller;
- automatic resolution of address conflicts on the bus.
These features are enabled automatically — if the device supports Fast Modbus, the controller will use it. Otherwise, it falls back to standard Modbus RTU.
::
::product-section{title="Quality control at every stage production"}
:photo{
  src="wb-ups-v-3-en/lwkeIHZ8M0GwJHb3T3GQWQmEbY1OFQKj.jpg"
  width="500px"
  float="right"
}
We develop and manufacture all Wiren Board devices ourselves. All devices undergo multi-stage quality control:

- During development — checking the components used for compliance with the declared characteristics and testing the prototype device at extreme operating conditions.
- After installing SMD components — automated optical inspection.
- After soldering the lead components — visual inspection of soldering.
- After assembling the device — functional testing on an automated stand.
- When shipped to the warehouse — control of completeness, stickers, appearance.
Thanks to this approach, the failure rate is no more than 0.5% of all released devices. Read more in the article About device reliability.

If the device fails within two years from the date of purchase, we will replace it for free without the need to send it to a service center.
::
::