---
article: "WB-M1W2 v.3"
cover: "wb-m1w2/cover.png"
catalogCover: "wb-m1w2/catalog-cover.png"
images: [
  ["wb-m1w2/cover.png"],
  ["wb-m1w2/wb-m1w2-6.jpg"],
  ["wb-m1w2/wb-m1w2-7.jpg"],
  ["wb-m1w2/wb-m1w2-8.jpg"],
  ["wb-m1w2/wb-m1w2-9.jpg"],
  ["wb-m1w2/wb-m1w2-10.png"],
  ["wb-m1w2/wb-m1w2-11.png"],
  ["wb-m1w2/wb-m1w2-12.png"],
  ["wb-m1w2/wb-m1w2-13.png"],
]
documentation: "https://wirenboard.com/wiki/WB-M1W2_v.3_1-Wire_to_Modbus_Temperature_Measurement_Module"
meta: "Compact converter with Modbus RTU for 1-Wire temperature sensors"
keywords: "1-Wire, Modbus RTU, DS18B20, switches, socket box, cable channel"
---
::product
#description

Compact module with RS-485 interface and universal inputs for connecting 1-Wire sensors and discrete signals.

Allows connection of up to 40 DS18B20 temperature sensors (20 per input).

Used to poll 1-Wire sensors in conditions of strong interference and at a great distance from the controller. Polling buttons, reed switches, energy meters with pulse output.

The main differences from the previous version are its compact size, which allows the device to be placed in electrical outlets.

WB-M1W2 v.3 is included in the Register of the State System for Ensuring the Uniformity of Measurements of the Republic of Kazakhstan. Reg. No. KZ.02.03.024533-2026/87443-22.


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-m1w2/wb-m1w2-1.png"
  width="500px"
  float="right"
}

- The miniature size allows you to install the module in any socket boxes, cable channels and junction boxes.
- Two 1-Wire channels make it easy to identify sensors and reduce commissioning time.
- Allows connection of up to 40 DS18B20 temperature sensors (20 per input);
- Inputs can operate in mode “dry contact” with trigger counting and click recognition functions.
- It is a measuring instrument for temperature.
- Built-in “suspicious” filter values.
- Counter data is recorded in non-volatile memory, can be used to connect energy meters.
- Fast and simple integration into the automation and monitoring system.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡, which allows you to instantly deliver events about clicks and counter changes.
::

::product-section{title="Hardware"}
:photo{
  src="wb-m1w2/wb-m1w2-2.png"
  width="500px"
  float="right"
}

Specifications:

- 2 universal inputs for 1-Wire sensors or buttons/limit switches.
- 5V output for powering sensors.
- Supply voltage: 9…28 V.
- Operating temperature: -40…+80 °C.
- Interface: RS-485, Modbus RTU.
- Overall dimensions: 34×20×17 mm.
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-m1w2/wb-m1w2-3.png"
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
  src="wb-m1w2/wb-m1w2-4.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- select the input operating mode: 1-wire or discrete,
- configure input parameters: debouncing time, double and long press time,
- enable or disable input polling.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the device can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available on our website.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-m1w2/wb-m1w2-5.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the measured values are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. Only the included channels are displayed in the device card.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
