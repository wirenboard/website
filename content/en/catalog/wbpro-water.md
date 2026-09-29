---
article: "WBPRO-WATER"
cover: "wbpro-water/cover.png"
catalogCover: "wbpro-water/catalog-cover.png"
meta: "RS-485, Modbus RTU Water metering and leakage control module WBPRO-WATER"
keywords: "RS-485, Modbus RTU Water metering and leakage control module WBPRO-WATER"
---
::product
#description

Everything you need for a typical task of monitoring the “wet zone” of an apartment, house or industrial facility:

- water leak detection
- automatic control of shut-off valves
- counting pulses from water meters even in the absence of electricity.

Up to 6 monitoring zones, “dry contact” outputs, “wet cleaning” mode and easy integration into the automation system.

The main differences from the previous version: by default, five inputs are configured for connecting sensors, input activation indicators, two buttons on the front panel, support for Larnitech sensors and a “wet cleaning” mode.


#info

## MAIN FEATURES

::product-section{title="Advantages"}
There are many leakage protection systems on the market, our differences:

- Up to 6 monitoring zones and isolated inputs for connecting active or passive leakage sensors.
- Accounting of meter pulses even in the event of a power failure (for up to 12 months).
- Changeover relays with dry contact type outputs - connection of shut-off valve actuators with supply voltages up to 30 V DC and up to 250 V AC.
- Local control of relay channels for forced opening of valve actuators.
- Quick response to a leak regardless of the central controller.
- Works without the Internet, and to protect against leaks it is not necessary to have an automation system
- Supports Larnitech floor-mounted sensors.
- Fast and simple integration into automation and monitoring systems.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which allows you to instantly deliver events from the module to the WBPRO-PLC7-2G-64G controller.
::

::product-section{title="Hardware"}
:photo{
  src="wbpro-water/wbpro-water-1.png"
  width="500px"
  float="right"
}

Specifications:

- 6 universal channels for connecting leak sensors or buttons.
- 2 channels for connecting pulse water meters.
- 2 channels of 3 A each for controlling shut-off valve actuators.
- Group isolation of inputs from the RS-485 bus.
- Supply voltage: 9 to 28 VDC.
- Interface: RS-485 with Modbus RTU.
- DIN rail housing, 3 modules (54 x 90 x 58 mm).

Operating temperature from 0 to +60 °C - requirements are dictated by the use of Li-ION batteries.
::

::product-section{title="Setup"}
When used with a WBPRO-PLC7-2G-64G controller, you can use the mouse in the web interface:

- switch input operating modes: leakage sensor or button;
- configure the reaction of outputs and alarm signals to triggered inputs;
- set other module parameters.

Direct control from the buttons on the front of the module is also available.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Status reading and control"}
If a WBPRO-PLC7-2G-64G controller is used, then the counter values, as well as the status of the outputs and alarms, are available in the controller's [web interface](https://wirenboard.com/en/pages/wb-software/) and can be used in automation scripts or transferred to a higher-level system. The device card displays only the channels enabled in the survey settings.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
