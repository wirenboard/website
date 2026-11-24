---
article: "WBPRO-WATER"
cover: "wbpro-water/cover.png"
catalogCover: "wbpro-water/catalog-cover.png"
images: [
  ["wbpro-water/cover.png"]
]
meta: "RS-485, Modbus RTU Water metering and leakage control module WBPRO-WATER"
keywords: "RS-485, Modbus RTU Water metering and leakage control module WBPRO-WATER"
---
::product
#description

Everything you need for a typical task of monitoring the “wet zone” of an apartment, house or industrial facility:

- water leak detection,
- automatic control of shut-off valves,
- counting pulses from water meters even in the absence of electricity.

Up to 6 monitoring zones, “dry contact” outputs, “wet cleaning” mode and easy integration into an automation system.

The main differences from the previous version: by default, five inputs are configured for connecting sensors, input activation indicators, two buttons on the front panel, support for Larnitech sensors and the “wet cleaning” mode.


#info

## Key features

::product-section{title="Advantages"}
:photo{
  src="wbpro-water/wbpro-water-advantages.png"
  width="500px"
  float="right"
}

There are many leak protection systems on the market; here is how ours differs:

- Up to 6 monitoring zones and isolated inputs for connecting active or passive leak sensors.
- Meter pulses are counted even during a power failure for up to 12 months.
- Changeover “dry contact” relays — connection of shut-off valve actuators with supply voltages up to 30 V DC and up to 250 V AC.
- Local control of relay channels for forced opening of shut-off valve actuators.
- Quick response to a leak regardless of the central controller.
- Works without the Internet, and leak protection does not require an automation system.
- Support for Larnitech floor-mounted sensors.
- Fast and simple integration into automation and monitoring systems.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which allows events to be delivered instantly from the module to the [WBPRO-PLC8-4G-64G](https://wirenboard.com/en/contents/product/wbpro-plc8-4g-64g) controller.
::

::product-section{title="Hardware"}
:photo{
  src="wbpro-water/wbpro-water-1.png"
  width="500px"
  float="right"
}

Specifications:

- 6 universal isolated inputs for connecting leak sensors or buttons.
- 2 non-isolated inputs for connecting pulse water meters.
- 2 outputs of 3 A each for controlling shut-off valve actuators.
- Group isolation of inputs from the RS-485 bus.
- Supply voltage: 9 to 28 VDC.
- Interface: RS-485 with Modbus RTU.
- DIN rail enclosure, 3 modules (54 x 90 x 58 mm).

Operating temperature from 0 to +60 °C; the requirements are dictated by the use of a Li-ION battery.
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wbpro-water/wbpro-water-fast-modbus-support.png"
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

::product-section{title="Mode settings"}
When used with the [WBPRO-PLC8-4G-64G](https://wirenboard.com/en/contents/product/wbpro-plc8-4g-64g) controller, you can use the mouse in the web interface to:

- switch input operating modes: leak sensor or button;
- configure the response of outputs and the alarm signal to input triggering;
- set other module parameters.

Direct control from the buttons on the front panel of the module is also available.

When used with other equipment, the module can be configured over the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Status reading and control"}
If the [WBPRO-PLC8-4G-64G](https://wirenboard.com/en/contents/product/wbpro-plc8-4g-64g) controller is used, the counter values, as well as the state of the outputs and the alarm signal, are available in the controller's web interface and can be used in automation scenarios or transferred to a higher-level system. The device card displays only the channels enabled in the polling settings.

The module also provides all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
