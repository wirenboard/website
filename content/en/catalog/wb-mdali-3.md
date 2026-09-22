---
article: WB-DALI3
cover: wb-mdali/wb-dali-frontal-view.png
catalogCover: wb-mdali/wb-dali-side-view.png
meta: 3-Channel
keywords: 3-Channel, DALI, WBPRO, Modbus-DALI
images: [
  ["wb-mdali/wb-dali-frontal-view.png"],
  ["wb-mdali/wb-dali-board.png"],
  ["wb-mdali/wb-dali-side-view.png"]
]
use_cases: []
---
::product
#description
A 3-channel RS-485 gateway for controlling DALI-2 (IEC 62386) devices with Wiren Board controllers.
It lets you integrate modern lighting systems (LED drivers, sensors, switches, ballasts) into industrial automation and smart home projects.
#info
## Key features
::product-section{title="Advantages"}
:photo{
  src="wb-mdali/wb-dali-side-view.png"
  width="400px"
  float="right"
}
- three independent DALI buses;
- protection against short circuit, overheating, and overvoltage;
- support for DALI-2 devices (LED drivers, ballasts, sensors, buttons);
- 7 discrete inputs for connecting buttons;
- recognition of 4 press types (short, long, double, short+long);
- isolated RS-485 interface;
- operating temperature range: -40 to +60 °C;
- compact DIN-rail enclosure (3 modules).
Supports Fast Modbus ⚡, which delivers input states and press counter values to the Wiren Board controller instantly.
::
::product-section{title="Hardware"}
:photo{
  src="wb-mdali/wb-dali-board.png"
  width="500px"
  float="right"
}
Technical specifications:

- 3 outputs for connecting DALI buses
(DA1: 200 mA, DA2: 100 mA, DA3: 100 mA);
- 7 discrete inputs (dry contact);
- output voltage 19 V;
- group galvanic isolation of inputs;
- protection of each bus against short circuit, overheating, and overvoltage;
- supply voltage:
    - 9…28 V DC,
    - 230 V AC;
- interface: RS-485, Modbus RTU.
::
::product-section{title="Fast Modbus support"}
:photo{
  src="wb-mdali/wb-dali-fast-modbus-support.png"
  width="500px"
  float="right"
}
In addition to standard Modbus RTU, all Wiren Board devices support the [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡ extension, which adds:
- instant polling of input states and counters via events;
- fast discovery of devices connected to the bus;
- resolution of address collisions on the bus.

Enabling these extra capabilities is seamless for the user — if a device supports the extension, the controller's driver communicates with it over Fast Modbus; if the device knows nothing about the extension, it works over standard Modbus RTU.
::
:include{
  path="/catalog/includes/quality_control"}
::
::product-section{title="Configuration"}
:photo{
  src="wb-mdali/wb-dali-configuration.png"
  width="500px"
  float="right"
}
On a Wiren Board controller, you can use the web interface to:
- enable the internal power supply for each DALI bus;
- set button press behavior and input trigger reactions;
- control DALI devices: assign addresses, groups, scenes;
- configure the brightness control curve (linear / DALI standard);
- run device identification (light flashing);
- view bus status and diagnostics.
::
