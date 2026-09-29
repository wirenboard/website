---
article: "WB-MWAC"
cover: "wb-mwac/cover.png"
catalogCover: "wb-mwac/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/WB-MWAC_v.2_Modbus_Water_Consumption_Metering_and_Leak_Monitoring"
meta: "Module with RS-485, Modbus RTU for metering water consumption and monitoring leaks for an apartment, house or industrial facility."
keywords: "RS-485, Modbus RTU, leakage protection, autonomous, six zones, isolated inputs, dry contact outputs, wiren board"
---
::product
#description

Everything you need for a typical task of monitoring the “wet zone”:

- water leak detection
- automatic control of shut-off valves
- counting pulses from water meters even in the absence of electricity.

Up to 6 monitoring zones, “dry contact” outputs, “wet cleaning” mode and easy integration into the automation system.

The main differences from the previous version: by default, five inputs are configured for connecting sensors, input activation indicators, two buttons on the front panel, support for Larnitech sensors and a “wet cleaning” mode.


#info

## MAIN FEATURES

::product-section{title="Advantages"}
:photo{
  src="wb-mwac/wb-mwac-1.png"
  width="500px"
  float="right"
}

There are many leakage protection systems on the market, our differences:

- Up to 6 monitoring zones and isolated inputs for connecting active or passive leakage sensors.
- Accounting of meter pulses even in the event of a power failure (for up to 12 months).
- Changeover relays with dry contact type outputs - connection of shut-off valve actuators with supply voltages up to 30 V DC and up to 250 V AC.
- Local control of relay channels for forced opening of valve actuators or triggering scripts.
- Quick response to a leak regardless of the central controller.
- Works without the Internet, and to protect against leaks it is not necessary to have an automation system
- Supports Larnitec floor-mounted sensors.
- Fast and simple integration into automation and monitoring systems.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which allows you to instantly deliver events from the module to the Wiren Board controller.
::

::product-section{title="Hardware"}
:photo{
  src="wb-mwac/wb-mwac-2.png"
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

Operating temperature from 0 to +60 °C - requirements are dictated by the use of Li-MnO2 batteries.
::

::product-section{title="Local control and indication"}
:photo{
  src="wb-mwac/wb-mwac-3.png"
  width="500px"
  float="right"
}

The module contains:

- 6 indicators of input states: activation of leakage sensors or closing of buttons;
- two buttons with green and red indicators that control the relays and show their status;
- leak indicator;
- indicator of the status of being in the bootloader or exchange via RS-485.

The module also reports the status of inputs, the presence of leaks and relays via Modbus and can be controlled remotely.
::

::product-section{title="Setup"}
:photo{
  src="wb-mwac/wb-mwac-4.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- switch input operating modes: leakage sensor or button;
- configure the reaction of outputs and alarm signals to triggered inputs;
- set other module parameters.

Direct control from the buttons on the front of the module is also available.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Status reading and control"}
:photo{
  src="wb-mwac/wb-mwac-5.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, then the counter values, as well as the status of the outputs and alarms, are available in the web interface controller and can be used in automation scripts or transferred to a higher-level system. The device card displays only the channels enabled in the survey settings.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
