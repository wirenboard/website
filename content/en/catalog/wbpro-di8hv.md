---
article: "WBPRO-DI8HV"
images: [
  ["wbpro-di8hv/wbpro-di8hv-5.png"],
  ["wbpro-di8hv/wbpro-di8hv-6.png"],
]
documentation: "https://wiki.wirenboard.com/wiki/WB-MCM8HV_v.1_Modbus_AC_Detector"
---
::product
#description

**The device is currently under development. The estimated start of deliveries is the second half of 2026.**

An 8-channel mains voltage presence detector module with an RS-485 interface, designed for monitoring the status of circuit breakers, polling indicator lamps, and similar applications.


#info

## MAIN FEATURES

  ## MAIN FEATURES

  
::product-section{title="Advantages"}
:photo{
  src="wbpro-di8hv/wbpro-di8hv-1.png"
  width="500px"
  float="right"
}

- programmable debounce;
- recognition of 4 types of presses;
- input status indication, except for input 8;
- pulse counter values are stored in non-volatile memory;
- fast and simple integration into automation and monitoring systems;

- technical support on the portal;
- Russian-language documentation;
- your company logo can be applied.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡, which allows input states and press counter values to be delivered instantly to the Wiren Board controller.
::

::product-section{title="Hardware"}
Technical specifications:

- channel current: ~0.3 mA;
- 8 discrete voltage presence inputs;
- group galvanic isolation of inputs;

- supply voltage: 9…28 V DC;
- interface: RS-485, Modbus RTU;
- extended operating temperature range: -40…+80 °C;
- DIN-rail enclosure: 2M (36 x 90 x 58 mm).
::

:include{path="/catalog/includes/quality_control"}

::product-section{title="Fast Modbus support"}
:photo{
  src="wbpro-di8hv/wbpro-di8hv-2.png"
  width="500px"
  float="right"
}

In addition to standard Modbus RTU, all Wiren Board devices can work with its extension [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡, which adds new capabilities:

- instant polling of input states and measured values via events;
- fast discovery of devices connected to the controller;
- address collision resolution on the bus.

For the user, enabling additional capabilities is seamless — if the device supports the extension, the controller driver will communicate with the device via Fast Modbus; if the device knows nothing about the extension, it will operate via standard Modbus RTU.
::

::product-section{title=""}
:photo{
  src="wbpro-di8hv/wbpro-di8hv-3.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface to:

- configure debounce protection time;
- configure the channel polling interval.

For configuration without a controller, you can use the [Wiren Board Web Device Configurator](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) with a WB-USB485 interface converter or another converter.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented, and available online in the device documentation.
::

::product-section{title=""}
:photo{
  src="wbpro-di8hv/wbpro-di8hv-4.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the output states are available in the controller’s web interface and can be used in automation scripts or transferred to an upper-level system. The device card displays only the channels enabled in the polling settings.

The module also provides all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels, or SCADA.
::


::
