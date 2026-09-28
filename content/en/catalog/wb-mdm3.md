---
article: "WB-MDM3"
cover: "wb-mdm3/cover.jpg"
catalogCover: "wb-mdm3/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/index.php/WB-MDM3_230V_Dimmer"
meta: "Three channel dimmer for LED bulbs and incandescent lamps, 230 V"
keywords: "Three channel dimmer for LED bulbs and incandescent lamps, 230 V"
---
::product
#description

Three-channel dimmer with RS-485 interface. DIN rail mounted, has 6 inputs to control outputs. Allows you to control dimmable lighting using push-button switches.

Used for dimming incandescent lamps, as well as LED lamps that support the dimming function, LED strip drivers, electronic power transformers for halogen lamps, etc.


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-mdm3/wb-mdm3-1.png"
  width="500px"
  float="right"
}

- Power up to 300 W per channel.
- Flexible configuration of button control and press recognition allows flexible configure control of outputs from inputs.
- Selection of control mode: trailing edge and leading edge, for different types of loads.
- Independent control of each channel.
- Smooth change in brightness and adjust the speed of change.
- Key mode, for control instead of a relay, but without clicks.
- Indication of channel status and protection activation for diagnostics.
- Can be used to adjust the speed of fans up to 30 W.
- Compact housing for DIN rail.
- Fast and simple integration into automation and monitoring systems.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡, which allows you to instantly deliver input states and click counter values to the Wiren Board controller.
::

::product-section{title="Hardware"}
:photo{
  src="wb-mdm3/wb-mdm3-2.png"
  width="500px"
  float="right"
}

Specifications:

- 3 dimming channels with up to 300 W per channel.
- 6 discrete inputs.
- Phase cut-off at leading edge or falling edge.
- Dimming step - 1%.
- Protection against short circuit, overheating and fire.
- Group galvanic isolation of inputs.
- Dry contact inputs

- Supply voltage: 9…28 V DC.
- Interface: RS-485, Modbus RTU.
- Extended operating temperature range: -40…+80 °C.
- DIN rail housing, 3 modules.
::

::product-section{title="Local control"}
:photo{
  src="wb-mdm3/wb-mdm3-3.jpg"
  width="500px"
  float="right"
}

Flexible configuration of output response to button presses allows you to use the module for local lighting control without a controller. This is convenient in small installations where it is not possible to install an RS-485 bus.

If the module is connected to a bus, then local logic can be combined with commands from the controller. The interaction of inputs and outputs is configured in the web interface of the Wiren Board controller or by writing to Modbus registers, and the settings are stored in the module memory.
::

::product-section{title="Leading and trailing edge dimming"}
:photo{
  src="wb-mdm3/wb-mdm3-4.png"
  width="500px"
  float="right"
}

For each channel, you can set one of two dimming modes: leading edge or trailing edge.

The leading edge mode is used to dim inductive loads: fans, electric motors. The trailing edge mode is used to dim LED lamps and dimmable LED lamp drivers.

MOSFET transistors are used for phase cutting, which provide low heating and higher response speed compared to triacs (TRIAC).
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-mdm3/wb-mdm3-5.png"
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
  src="wb-mdm3/wb-mdm3-6.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- switch dimming type: leading edge or trailing edge,
- set minimum and maximum dimming ranges
- adjust the dimming speed
- configure the processing of button presses on inputs and the interaction of inputs with outputs,
- enable or disable parameter polling.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-mdm3/wb-mdm3-7.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, then the channel control functions, input states and click counters are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. The device card displays only the channels enabled in the survey settings.

All data can be read by any equipment or software that supports the RS-485, Modbus RTU protocol: third-party controllers, HMI panels or SCADA.
::


::
