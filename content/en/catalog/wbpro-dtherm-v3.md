---
article: "WBPRO-DTHERM v.3"
cover: "wbpro-dtherm-v3/cover.png"
catalogCover: "wbpro-dtherm-v3/catalog-cover.png"
images: [
  ["wbpro-dtherm-v3/cover.png"],
  ["wbpro-dtherm-v3/wbpro-dtherm-v3-3.png"],
  ["wbpro-dtherm-v3/wbpro-dtherm-v3-4.png"]
]
---
::product
#description

Compact module with an RS-485 interface and universal inputs for connecting 1-Wire sensors and discrete signals. Size 34×20×17 mm.

Allows connecting up to 40 DS18B20 temperature sensors (20 per input).

Used to poll 1-Wire sensors in conditions of strong interference and at a great distance from the controller, as well as to poll buttons, reed switches and energy meters with a pulse output.

The main difference from the previous version is the compact size, which allows the device to be installed in wall boxes.


#info

## Key features

::product-section{title="Advantages"}
:photo{
  src="wbpro-dtherm-v3/wbpro-dtherm-v3-4.png"
  width="500px"
  float="right"
}

- The miniature size allows the module to be installed in any wall boxes, cable channels and junction boxes.
- Two 1-Wire channels make it easy to identify sensors and reduce commissioning time.
- Allows connecting up to 40 DS18B20 temperature sensors (20 per input).
- Inputs can operate in “dry contact” mode with trigger counting and press recognition.
- Built-in filter of “suspicious” values.
- Counter data is stored in non-volatile memory, so the module can be used to connect energy meters.
- Fast and simple integration into automation and monitoring systems.

- Technical support on the portal.
- Your company logo can be applied.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which allows events about presses and counter changes to be delivered instantly.
::

::product-section{title="Hardware"}
Specifications:

- 2 universal inputs for 1-Wire sensors or buttons/limit switches.
- 5 V output for powering sensors.
- Supply voltage: 9…28 V.
- Operating temperature: −40…+80 °C.
- Interface: RS-485, Modbus RTU.
- Dimensions: 34×20×17 mm.
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wbpro-dtherm-v3/wbpro-dtherm-v3-fast-modbus-support.png"
  width="500px"
  float="right"
}

In addition to standard Modbus RTU, all Wiren Board devices can work with its extension [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which adds new features:

- instant polling of input states and measured values via events;
- fast search for devices connected to the controller;
- resolving address collisions on the bus.

For the user, the additional features are enabled transparently: if the device supports the extension, the controller driver works with it over Fast Modbus; if the device knows nothing about the extension, it works over standard Modbus RTU.
::

:include{path="/catalog/includes/quality_control"}

::product-section{title="Setup"}
:photo{
  src="wbpro-dtherm-v3/wbpro-dtherm-v3-setup.png"
  width="500px"
  float="right"
}

When used with the [WBPRO-PLC8-4G-64G](https://wirenboard.com/en/contents/product/wbpro-plc8-4g-64g) controller, you can use the mouse in the web interface to:

- select the input operating mode: 1-Wire or discrete;
- configure input parameters: debounce time, double and long press time;
- enable and disable input polling.

When used with other equipment, the device can be configured over the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available on our website.
::

::product-section{title="Reading values"}
:photo{
  src="wbpro-dtherm-v3/wbpro-dtherm-v3-readings.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the measured values are available in the controller's web interface and can be used in automation scenarios or transferred to a higher-level system. The device card shows only enabled channels.

The module also provides all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
