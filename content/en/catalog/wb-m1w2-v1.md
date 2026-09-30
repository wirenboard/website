---
article: "WB-M1W2"
cover: "wb-m1w2-v1/cover.png"
catalogCover: "wb-m1w2-v1/catalog-cover.png"
images: [
  ["wb-m1w2-v1/cover.png"],
  ["wb-m1w2-v1/wb-m1w2-v1-5.png"],
  ["wb-m1w2-v1/wb-m1w2-v1-6.png"],
  ["wb-m1w2-v1/wb-m1w2-v1-7.png"],
  ["wb-m1w2-v1/wb-m1w2-v1-8.png"],
]
documentation: "https://wirenboard.com/wiki/WB-M1W2_1-Wire_to_Modbus_Temperature_Measurement_Module"
---
::product
#description

**The module has been discontinued. Recommended replacement**[**WB-M1W2 v.3**](https://wirenboard.com/product/WB-M1W2-v3/)

Compact adapter with RS-485 interface and universal inputs for connecting 1-Wire sensors and discrete signals.

Used to poll 1-Wire sensors in conditions of strong interference and at a great distance from the controller. Polling buttons, reed switches, energy meters with pulse output.

There is a more compact version [WB-M1W2 v.3](https://wirenboard.com/product/WB-M1W2-v3/)


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-m1w2-v1/wb-m1w2-v1-1.png"
  width="500px"
  float="right"
}

- Installed in junction boxes and cable ducts.
- Two 1-Wire channels make it easy to identify sensors and reduce commissioning time.
- Inputs can operate in mode “dry contact” with trigger counting and click recognition functions.
- It is a measuring instrument for temperature.
- Built-in “suspicious” filter values.
- Counter data is recorded in non-volatile memory, can be used to connect energy meters.
- Fast and simple integration into the automation and monitoring system.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡, which allows you to instantly deliver events about clicks and counter changes.
::

::product-section{title="Hardware"}
Specifications:

- 2 universal inputs for 1-Wire sensors or buttons/limit switches.
- 5V output for powering sensors.
- Supply voltage: 9…28 V.
- Operating temperature: 0…+60 °C.
- Interface: RS-485, Modbus RTU.
- Overall dimensions: 57×18×12 mm.
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-m1w2-v1/wb-m1w2-v1-2.png"
  width="500px"
  float="right"
}

All Wiren Board devices, in addition to the standard Modbus RTU, can work with its extension [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which adds new features:

- instant polling of input states and measured values via events;
- quick search for devices connected to the controller;
- resolving address collisions on the bus.

Additional features are enabled automatically - if the device supports extension, the controller driver will work with the device quickly Modbus if the device does not know anything about the extension - it will work using standard Modbus RTU.
::

:include{path="/catalog/includes/quality_control"}

::product-section{title="Setup"}
:photo{
  src="wb-m1w2-v1/wb-m1w2-v1-3.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- select the input operating mode: 1-wire or discrete,
- configure input parameters: debouncing time, double and long press time,
- enable or disable input polling.

When used with other equipment, the device can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available on our website.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-m1w2-v1/wb-m1w2-v1-4.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the measured values are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. Only the included channels are displayed in the device card.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
