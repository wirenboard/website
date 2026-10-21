---
article: "WB-MDM3"
cover: "wb-mdm3/cover.png"
catalogCover: "wb-mdm3/catalog-cover.png"
images: [
  ["wb-mdm3/cover.png"],
  ["wb-mdm3/wb-mdm3-side.png"],
  ["wb-mdm3/wb-mdm3-8.png"],
  ["wb-mdm3/wb-mdm3-9.png"]
]
meta: "Three channel dimmer for LED bulbs and incandescent lamps, 230 V"
keywords: "Three channel dimmer for LED bulbs and incandescent lamps, 230 V"
---
::product
#description

Three-channel dimmer with RS-485 interface. DIN rail mounted, has 6 inputs to control outputs. Allows you to control dimmable lighting using push-button switches.

Used for dimming incandescent lamps, as well as LED lamps that support dimming, LED strip drivers, electronic power transformers for halogen lamps, etc.


#info

## Key features

::product-section{title="Advantages"}
:photo{
  src="wb-mdm3/wb-mdm3-advantages.png"
  width="500px"
  float="right"
}

- Power up to 300 W per channel for incandescent lamps.
- Flexible configuration of button control and press recognition lets you configure control of outputs from inputs.
- Choice of control mode: leading edge or trailing edge, for different types of loads.
- Independent control of each channel.
- Smooth brightness change with adjustable fade speed.
- Switching mode to use instead of a relay, but without clicks.
- Indication of channel status and protection triggering for diagnostics.
- Can be used to control the speed of fans up to 30 W.
- Compact housing for DIN rail.
- Fast and easy integration into automation and monitoring systems.

- Technical support on the portal.
- Your company logo can be applied.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which allows you to instantly deliver input states and press counter values to the Wiren Board controller.

<br>
::

::product-section{title="Hardware"}
:photo{
  src="wb-mdm3/wb-mdm3-hardware.png"
  width="500px"
  float="right"
}

- 3 dimming channels.
- Maximum power per channel: 300 W for incandescent lamps, 180 W for dimmable LED lamps.
- 6 discrete inputs.
- Phase cutting at the leading edge or at the trailing edge.
- Dimming step: 1 %.
- Short circuit, overheat and fire protection.
- Group galvanic isolation of inputs.
- Dry contact inputs.

- Supply voltage: 9…28 V DC.
- Interface: RS-485, Modbus RTU.
- Extended operating temperature range: -40…+80 °C.
- DIN rail housing, 3 modules (53 x 90 x 58 mm).

<br>
::

::product-section{title="Local control"}
:photo{
  src="wb-mdm3/wb-mdm3-local-control.jpg"
  width="500px"
  float="right"
}

Flexible configuration of how outputs respond to button presses allows you to use the module for local lighting control without a controller. This is convenient in small installations where it is not possible to lay an RS-485 bus.

If the module is connected to the bus, local logic can be combined with commands from the controller. The interaction of inputs and outputs is configured in the web interface of the Wiren Board controller or by writing to Modbus registers, and the settings are stored in the module memory.
::

::product-section{title="Leading and trailing edge dimming"}
:photo{
  src="wb-mdm3/wb-mdm3-edges.png"
  width="500px"
  float="right"
}

For each channel, you can set one of two dimming modes: leading edge or trailing edge.

The leading edge mode is used to dim inductive loads: fans, electric motors. The trailing edge mode is used to dim LED lamps and dimmable LED lamp drivers.

Phase cutting is done by MOSFET transistors, which provide low heating and faster response compared to triacs (TRIAC).
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-mdm3/wb-mdm3-fast-modbus-support.png"
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
  src="wb-mdm3/wb-mdm3-6.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- Switch the dimming type: leading edge or trailing edge.
- Set the minimum and maximum dimming ranges.
- Adjust the dimming speed.
- Configure the processing of button presses on inputs and the interaction of inputs with outputs.
- Enable and disable parameter polling.

For configuration without a controller, you can use the Wiren Board Device Editor paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-mdm3/wb-mdm3-7.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the channel control functions, input states and press counters are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. The device card displays only the channels enabled in the polling settings.

All data can be read by any equipment or software that supports the RS-485, Modbus RTU protocol: third-party controllers, HMI panels or SCADA.
::


::
