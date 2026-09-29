---
article: "WB-MAO4-20mA"
cover: "wb-mao4-20ma/cover.png"
catalogCover: "wb-mao4-20ma/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/WB-MAO4-20mA_Modbus_Analog_Outputs_0-20mA"
meta: "0…20 mA and 4…20 mA current outputs with RS-485 Modbus RTU"
keywords: "0…20 mA, 4…20 mA, current output, Modbus, RS-485"
---
::product
#description

Analog output module with 4 current outputs 4-20 mA and RS-485 interface.

Used to control devices with 0-20 mA, 4-20 mA interfaces - frequency converters, servo drives, air damper drives, valves, etc. in automation systems.


#info

## MAIN FEATURES

::product-section{title="Advantages"}
:photo{
  src="wb-mao4-20ma/wb-mao4-20ma-1.png"
  width="500px"
  float="right"
}

- Galvanic isolation of outputs.
- Flexible configuration of output control from inputs and recognition of types of pressing.
- Diagnostics of line condition for breakage.
- Compact housing on DIN rail.
- Quick and easy integration into the automation and monitoring system.

- Technical support on the portal.
- Russian-language documentation.
- It is possible to apply your company logo.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡, which allows you to instantly deliver the effective voltage value to the Wiren Board controller.
::

::product-section{title="Hardware"}
:photo{
  src="wb-mao4-20ma/wb-mao4-20ma-2.png"
  width="500px"
  float="right"
}

Specifications:

- 4 active outputs 0-20 mA or 4-20 mA.
- Load resistance: up to 500 Ohm.
- 4 discrete inputs.
- Galvanic isolation of inputs.

- Supply voltage: 9…28 V DC.
- Interface: RS-485, Modbus RTU.
- Extended operating temperature range: -40…+80 °C.
- DIN rail housing, 3 modules.
::

:include{path="/catalog/includes/fast_modbus"}

:include{path="/catalog/includes/quality_control"}

::product-section{title="Settings"}
:photo{
  src="wb-mao4-20ma/wb-mao4-20ma-4.png"
  width="500px"
  float="right"
}

When used with the Wiren Board controller, you can use the mouse in the web interface to:

- set the operating range - 0-20 mA, 4-20 mA or custom,
- set the minimum and maximum current values,
- set the rate of change of current,
- set up the processing of button presses on the inputs and the interaction of inputs with outputs,
- enable and disable parameter polling.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-mao4-20ma/wb-mao4-20ma-5.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the channel control functions, input states and press counters are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. The device card displays only the channels enabled in the polling settings.

All data can be read by any equipment or software that supports the RS-485, Modbus RTU protocol: third-party controllers, HMI panels or SCADA.
::


::
