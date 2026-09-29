---
article: "WBPRO-DTHERM v.3"
cover: "wbpro-dtherm-v3/cover.png"
catalogCover: "wbpro-dtherm-v3/catalog-cover.png"
meta: "Plug-in module for digital thermometers WBPRO-DTHERM v.3"
keywords: "Plug-in module for digital thermometers WBPRO-DTHERM v.3"
---
::product
#description

A compact module with an RS-485 interface and universal inputs for connecting 1-Wire sensors and discrete signals. Size 34 x 19 x 17 mm.

It is used for polling 1-Wire sensors in conditions of strong interference and at a considerable distance from the controller, as well as for polling buttons, reed switches and utility meters with a pulse output. It is a measuring instrument.

The main difference from the previous version is the compact size, which allows the device to be installed in wall boxes.


#info

## MAIN CHARACTERISTICS

::product-section{title="Advantages"}
:photo{
  src="wbpro-dtherm-v3/wbpro-dtherm-v3-1.jpg"
  width="500px"
  float="right"
}

- The miniature size allows the module to be installed in any wall box, cable duct or junction box.
- 2 1-Wire channels make it easy to identify sensors and reduce commissioning time.
- The inputs can operate in "dry contact" mode with event counting and press recognition.
- Is a measuring instrument for temperature.
- Built-in filter of "suspicious" values.
- Counter data is written to non-volatile memory, so the module can be used to connect utility meters.
- Fast and simple integration into the automation and monitoring system.

- It is possible to apply your company logo.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which allows press and counter change events to be delivered instantly.
::

::product-section{title="Hardware"}
:photo{
  src="wbpro-dtherm-v3/wbpro-dtherm-v3-1.jpg"
  width="500px"
  float="right"
}

Specifications:

- 2 universal inputs for 1-Wire sensors or buttons/limit switches.
- 5 V output for powering sensors.
- Supply voltage: 9…28 V.
- Operating temperature: 0…+60 °C.
- Interface: RS-485, Modbus RTU.
- Dimensions: 57×18×12 mm.
::

:include{path="/catalog/includes/fast_modbus"}

:include{path="/catalog/includes/quality_control"}

::product-section{title="Setup"}
When used with a [WBPRO-PLC7-2G-64G](https://wirenboard.com/en/product/WBPRO-PLC7-2G-64G/) controller, you can use the mouse in the web interface to:

- select the input operating mode: 1-Wire or discrete, and configure input parameters: debounce time, double and long press time;
- enable and disable input polling.

When used with other equipment, the device can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available on our website.
::

::product-section{title="Reading the readings"}
If a Wiren Board controller is used, the measured values are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. The device card displays only the enabled channels.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
