---
article: "WB-MCM8HV"
cover: "wb-mcm8hv/wb-mcm8hv-top.png"
catalogCover: "wb-mcm8hv/wb-mcm8hv-main.png"
documentation: "https://wiki.wirenboard.com/wiki/WB-MCM8HV_v.1_Modbus_AC_Detector"
meta: "WB-MCM8HV is an 8-channel mains voltage presence detector module with an RS-485 interface."
keywords: "Wiren Board, WB-MCM8HV, RS-485, Modbus RTU, 230V voltage detector, discrete inputs"
images: [
  ["wb-mcm8hv/wb-mcm8hv-top.png"],
  ["wb-mcm8hv/wb-mcm8hv-main.png"],
  ["wb-mcm8hv/wb-mcm8hv-pcb-a.png"],
  ["wb-mcm8hv/wb-mcm8hv-pcb-b.png"]
]
use_cases: []
---
::product
#description

WB-MCM8HV is an 8-channel mains AC voltage presence detector with an RS-485 interface. It is designed for monitoring circuit breaker status, polling indicator lamps, working with push-button switches that carry mains voltage, and other tasks where you need to detect the presence of 230V.

Unlike WBIO modules, which plug into the controller's side connector, WB-MCM8HV is a standalone device on the RS-485 bus (Modbus RTU) and can be used both with Wiren Board controllers and with any equipment that supports this protocol.

#info
## Key features

::product-section{title="Discrete inputs"}
- 8 voltage presence inputs, combined into a single isolated group;
- trigger voltage — from 150 V AC;
- maximum input voltage — up to 260 V AC;
- channel current — about 0.3 mA at 230 V AC;
- input-to-controller isolation voltage — 5000 V rms;
- input trigger delay — up to 2000 ms, configurable.
::

::product-section{title="Terminal layout"}
Power and interface terminal block (3.5 mm pitch):
- **V+**, **GND** — 9…28 V DC power supply;
- **A**, **B** — RS-485 bus lines.

Input terminals:
- inputs **1–8** are connected between the input terminal and the common **N** terminal;
- all 8 inputs share a single common N wire (one isolated group).
::

::product-section{title="Interface and protocol"}
- RS-485 interface, Modbus RTU protocol;
- default settings — 9600 bps, 8 data bits, no parity, 2 stop bits (for faster response, we recommend raising the baud rate to 115200 bps);
- the Modbus address is set programmatically, range 1–247, and is printed on the device label;
- ready to operate about 2 seconds after power-up.
::

::product-section{title="Indication"}
On the front panel of the module:
- **S** indicator (green) — Modbus exchange status: lit when powered, blinking while being polled;
- input indicators **1–7** (orange) — state of the corresponding input, lit when the voltage exceeds 150 V (there is no indicator for input 8).
::

::product-section{title="Debounce filter and press-type recognition"}
Each input can be configured with a debounce filter — a suppression time from 0 to 2000 ms (50 ms by default). This suppresses false triggering from induced voltage and contact bounce on push-button switches.

The module recognizes and counts push-button presses by type:
- single short press;
- long press;
- double short press;
- short press followed by a long press.

The long-press duration and the second-press waiting time are configured separately. Counter values are stored in non-volatile memory.
::

::product-section{title="Fast Modbus support"}
In addition to standard Modbus RTU, all Wiren Board devices support the [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡ extension, which adds:
- instant polling of input states and counters via events;
- fast discovery of devices connected to the bus;
- resolution of address collisions on the bus.

Not all device registers support event generation — those are marked with the ⚡ icon in the register map in the documentation.
::

::product-section{title="Other specifications"}
| Parameter | Value |
|---|---|
| Supply voltage | 9…28 V DC |
| Power consumption | less than 0.8 W |
| Operating temperature range | −40 to +80 °C |
| Relative humidity | up to 95%, non-condensing |
| Dimensions (L×W×H) | 36 × 90 × 58 mm |
| Width | 2 DIN units |
| Weight with box | 98 g |
| Warranty period | 2 years |
| Service life | 5 years |
::

::product-section{title="Compatibility"}
- Wiren Board controllers (configured via the web interface);
- any equipment supporting Modbus RTU: third-party controllers, HMI panels, SCADA;
- the Wiren Board web-based device configurator (WASM Device Editor).
::

:include{
  path="/catalog/includes/quality_control"
}

::
