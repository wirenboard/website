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

An 8-channel mains voltage presence detector module with an RS-485 interface, designed for monitoring circuit breaker status, polling indicator lamps, and similar tasks.

#info
## Key features

::product-section{title="Advantages"}
:photo{
  src="wb-mcm8hv/wb-mcm8hv-main.png"
  width="250px"
  float="right"
}
- programmable debounce filter;
- recognition of 4 press types;
- input state indication;
- pulse counter values are stored in non-volatile memory;
- fast and simple integration into automation and monitoring systems;
- technical support via the portal;
- your company logo can be applied on request.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡, which delivers input states and press counter values to the Wiren Board controller instantly.

::

::product-section{title="Hardware"}
:photo{
  src="wb-mcm8hv/wb-mcm8hv-pcb-a.png"
  width="250px"
  float="right"
}
- RS-485 interface, Modbus RTU protocol;
- 8 discrete voltage presence inputs;
- group galvanic isolation of inputs;
- supply voltage: 9…28 V DC;
- extended operating temperature range: -40…+80 °C;
- DIN-rail enclosure: 2M (36 x 90 x 58 mm).
::

::product-section{title="Compatibility"}
- Wiren Board controllers (configured via the web interface);
- any equipment supporting Modbus RTU: third-party controllers, HMI panels, SCADA;
- [Wiren Board web-based device configurator.](https://wiki.wirenboard.com/wiki/WASM_Device_Editor)
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-mcm8hv/wb-mcm8hv-fast-modbus-support.png"
  width="500px"
  float="right"
}
In addition to standard Modbus RTU, all Wiren Board devices support the [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡ extension, which adds:
- instant polling of input states and counters via events;
- fast discovery of devices connected to the bus;
- resolution of address collisions on the bus.

Enabling these extra capabilities is seamless for the user — if a device supports the extension, the controller's driver communicates with it over Fast Modbus; if the device knows nothing about the extension, it works over standard Modbus RTU.
::

::product-section{title="Configuration"}
:photo{
  src="wb-mcm8hv/wb-mcm8hv-configuration.png"
  width="500px"
  float="right"
}
When used with a Wiren Board controller, you can use the web interface to:

- set the debounce protection time;
- set the channel polling period.

To configure the device without a controller, use the [Wiren Board web-based device configurator](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) with a WB-USB485 or another interface converter.
::

::product-section{title="Reading data"}
:photo{
  src="wb-mcm8hv/wb-mcm8hv-interface.png"
  width="500px"
  float="right"
}
When used with a Wiren Board controller, output states are available in the controller's web interface and can be used in automation scenarios or forwarded to a higher-level system. The device card only shows the channels enabled in the polling settings.

The module also outputs all data over Modbus RTU (RS-485), which can be read by any equipment or software supporting this protocol: third-party controllers, HMI panels, or SCADA.
::

:include{
  path="/catalog/includes/quality_control"
}

::
