---
article: "WB-MR6CU v.2"
cover: "wb-mr6cu/cover.png"
catalogCover: "wb-mr6cu/catalog-cover.png"
images: [
  ["wb-mr6cu/cover.png"],
  ["wb-mr6cu/wb-mr6cu-9.png"],
  ["wb-mr6cu/wb-mr6cu-10.png"],
  ["wb-mr6cu/wb-mr6cu-11.png"],
  ["wb-mr6cu/wb-mr6cu-12.png"]
]
meta: "Сompact RS-485, Modbus RTU Relay module"
keywords: "Сompact RS-485, Modbus RTU Relay module"
---
::product
#description

Designed for switching general-purpose loads up to 2 kW, including inductive loads: lighting, curtain drives, etc.

Rated current: 10 A, inrush current: up to 80 A (20 ms). 
 6 relay outputs, no discrete inputs.


#info

## Key features

::product-section{title="Advantages"}
:photo{
  src="wb-mr6cu/wb-mr6cu-advantages.png"
  width="500px"
  float="right"
}

- Powerful relays that can withstand high inrush currents.
- Indication of output status on the housing for quick diagnostics and determination of output status during commissioning.
- Safe mode in case of RS-485 communication failure.
- Output timer functions: on and off delay, switching on for a set time, cyclic mode.
- Compact housing for DIN rail, 2 modules.
- Fast and easy integration into automation and monitoring systems.

- Technical support on the portal.
- Your company logo can be applied.

Supports [Fast Modbus](https://wiki.wirenboard.com/wiki/Fast_Modbus/en) ⚡, which allows you to instantly deliver relay channel states to the Wiren Board controller.
::

::product-section{title="Hardware"}
:photo{
  src="wb-mr6cu/wb-mr6cu-hardware.png"
  width="500px"
  float="right"
}

- 6 relay channels rated 10 A 230 V AC.
- Maximum continuous current: 16 A per channel.
- Maximum inrush current: up to 80 A (20 ms).
- The outputs are combined into two groups of 3 relays, each group can switch a total of no more than 20 A.
- No discrete inputs.

- Supply voltage: 9…28 V direct current.
- Interface: RS-485, Modbus RTU.
- Operating temperature: -40…+80 °C.
- DIN rail housing, 2 modules (36 x 90 x 58 mm).
::

::product-section{title="Hongfa Long Life Relays"}
:photo{
  src="wb-mr6cu/wb-mr6cu-hongfa.jpg"
  width="500px"
  float="right"
}

Reliable Hongfa relays are used for switching. The relays have silver tin oxide contacts (AgSnO2), which ensures operation with high inrush currents up to 80 A (20 ms). Therefore, the WB-MR6CU v.2 module is well suited for controlling LED lamps.

To make sure of the relay quality, we [tested them](https://wirenboard.com/en/news/tested-the-relays-for-high-starting-currents-467/) with inrush currents several times higher than the rated ones.

The relay manufacturer claims a service life of at least 100 000 operations.
::

::product-section{title="Safe mode"}
:photo{
  src="wb-mr6cu/wb-mr6cu-safe-mode.png"
  width="500px"
  float="right"
}

If the module is installed at a distance from the switchboard and connected to the RS-485 bus, then there is a risk of loss of control from the head unit. In order not to lose control over an important technological process, the module has a safe mode that allows you to switch the relay outputs to a specified state.

For each output, you can configure its own safe state and the need to switch to it in case of loss of communication. When communication is restored, the module returns to normal operation.
::

::product-section{title="Curtains controlling"}
:photo{
  src="wb-mr6cu/wb-mr6cu-curtains.jpg"
  width="500px"
  float="right"
}

The WB-MR6CU v.2 module has a special mode for working with curtains, which eliminates the simultaneous activation of the direction relays and guarantees a pause between switchings. In the settings, you can set the opening/closing time, pause time when changing direction, as well as actions when turning on the power and entering safe mode.

The outputs are individually configurable, so only part of the outputs can be used to control curtains, and the rest can be used for other purposes. Up to three drives can be connected to one module: to outputs K1 and K2, K3 and K4, K5 and K6.
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-mr6cu/wb-mr6cu-fast-modbus-support.png"
  width="500px"
  float="right"
}

All Wiren Board devices, in addition to the standard Modbus RTU, can work with its extension [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which adds new features:

- instant polling of input states and measured values via events;
- quick search for devices connected to the controller;
- resolving address collisions on the bus.

For the user, the additional features are enabled seamlessly: if the device supports the extension, the controller driver will work with it via Fast Modbus; if the device knows nothing about the extension, it will work via standard Modbus RTU.
::

<br>

:include{path="/catalog/includes/quality_control" withSeparator="true"}

::product-section{title="Setup"}
:photo{
  src="wb-mr6cu/wb-mr6cu-7.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- Enable and disable channels and configure the polling period.
- Set the state of the outputs when power is applied.
- Configure safe mode settings.
- Switch the outputs to the curtain drive control mode.

For configuration without a controller, you can use the Wiren Board Device Editor paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-mr6cu/wb-mr6cu-8.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, then the output states are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. The device card displays only the channels enabled in the polling settings.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
