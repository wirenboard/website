---
article: "WB-MRM2-mini"
cover: "wb-mrm2-mini/cover.png"
catalogCover: "wb-mrm2-mini/catalog-cover.png"
images: [
  ["wb-mrm2-mini/cover.png"],
  ["wb-mrm2-mini/wb-mrm2-mini-9.png"],
  ["wb-mrm2-mini/wb-mrm2-mini-10.png"],
  ["wb-mrm2-mini/wb-mrm2-mini-11.png"],
  ["wb-mrm2-mini/wb-mrm2-mini-12.png"]
]
documentation: "https://wirenboard.com/wiki/WB-MRM2-mini_Modbus_Relay_Modules/en"
meta: "Plug-in module WB-MRM2-mini"
keywords: "Plug-in module WB-MRM2-mini"
---
::product
#description

Designed for switching general-purpose loads up to 2 kW, including inductive loads: lighting, curtain drives, etc.

Compact module for installation in junction boxes and cable channels. Versions with normally open (NO) and normally closed (NC) relay contacts are available.

Rated current (NO/NC): 10/2 A, inrush current: up to 80 A (20 ms). 
 2 relay outputs, 2 discrete inputs.


#info

## Key features

::product-section{title="Advantages"}
:photo{
  src="wb-mrm2-mini/wb-mrm2-mini-advantages.png"
  width="500px"
  float="right"
}

- Installation in a junction box and cable channel.
- Powerful relays that withstand high inrush currents.
- Recognition of button presses on inputs and flexible configuration of the response of outputs to presses, allows you to control one or more outputs from any inputs.
- Modbus status indicator on the housing for quick diagnostics during commissioning.
- Pulse counting and frequency measurement at inputs for connecting meters with pulse output and measuring motor speed.
- Safe mode in case of RS-485 communication failure.
- Output timer functions: on and off delay, switching on for a set time, cyclic mode.
- Programmable protection against bounce of switch contacts.
- Fast and easy integration into automation and monitoring systems.

- Technical support on the portal.
- Your company logo can be applied.

Supports [Fast Modbus](https://wiki.wirenboard.com/wiki/Fast_Modbus/en) ⚡, which allows you to instantly deliver input states and button press counter values to the Wiren Board controller.

<br>
::

::product-section{title="Hardware"}
:photo{
  src="wb-mrm2-mini/wb-mrm2-mini-hardware.png"
  width="500px"
  float="right"
}

- 2 relay channels.
- Versions:
  - /NO — normally open contacts, rated 10 A / 230 V AC, maximum continuous current 16 A, inrush up to 80 A (20 ms).
  - /NC — normally closed contacts, rated 2 A / 230 V AC, maximum continuous current 5 A.

- 2 discrete inputs with direct channel control function.
- Press handling: short, long, double and short, then long.

- Supply voltage: 9…28 V direct current.
- Interface: RS-485, Modbus RTU.
- Operating temperature: -40…+50 °C.
- Housing dimensions: 51.5 x 23 x 21.5 mm.
::

::product-section{title="Hongfa Long Life Relays"}
:photo{
  src="wb-mrm2-mini/wb-mrm2-mini-hongfa.jpg"
  width="500px"
  float="right"
}

The /NO version uses reliable Hongfa relays with silver tin oxide contacts (AgSnO2), which ensures operation with high inrush currents up to 80 A (20 ms). Therefore, the WB-MRM2-mini v.2/NO module is well suited for controlling LED lamps.

To make sure of the relay quality, we [tested them](https://wirenboard.com/en/news/tested-the-relays-for-high-starting-currents-467/) with inrush currents several times higher than the rated ones.

The relay manufacturer claims a service life of at least 100 000 operations.
::

::product-section{title="Local control"}
:photo{
  src="wb-mrm2-mini/wb-mrm2-mini-local-control.jpg"
  width="500px"
  float="right"
}

Flexible configuration of the response of outputs to button presses allows you to use the module for local control of loads and implement simple logic without contactors and intermediate relays. Thanks to its compact size, the module can be hidden in junction boxes, deep wall boxes and appliance housings. This is convenient in small installations where there is no controller and no possibility to install an RS-485 bus.

If the module is connected to a bus, local logic can be combined with commands from the controller. The interaction of inputs and outputs is configured in the web interface of the Wiren Board controller or by writing to Modbus registers, and the settings are stored in the module memory.
::

::product-section{title="Safe mode"}
:photo{
  src="wb-mrm2-mini/wb-mrm2-mini-safe-mode.png"
  width="500px"
  float="right"
}

If the module is installed at a distance from the switchboard and connected to the RS-485 bus, then there is a risk of loss of control from the head unit. In order not to lose control over an important technological process, the module has a safe mode that allows you to switch the relay outputs to a specified state.

For each output, you can configure its own safe state and the need to switch to it in case of loss of communication. In addition, you can enable or disable control from inputs in safe mode, for example, prohibit control from buttons when communication with the device is lost.
::

::product-section{title="Curtains controlling"}
:photo{
  src="wb-mrm2-mini/wb-mrm2-mini-curtains.jpg"
  width="500px"
  float="right"
}

The WB-MRM2-mini v.2/NO module has a special mode for working with curtains, which eliminates the simultaneous activation of the direction relays and guarantees a pause between switchings. In the settings, you can set the opening/closing time, pause time when changing direction, as well as actions when turning on the power and entering safe mode.

One drive can be connected to the module — to outputs K1 and K2. You can also configure the curtain action for each of the 4 types of button presses connected to the module inputs.
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-mrm2-mini/wb-mrm2-mini-fast-modbus-support.png"
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
  src="wb-mrm2-mini/wb-mrm2-mini-7.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- Enable and disable channels and configure the polling period.
- Set input operating modes.
- Configure the reaction of outputs to inputs.
- Set the state of the outputs when power is applied.
- Configure safe mode settings.
- Adjust the contact bounce protection time.
- Switch the outputs to the curtain drive control mode.

For configuration without a controller, you can use the Wiren Board Device Editor paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-mrm2-mini/wb-mrm2-mini-8.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, then the states of inputs, outputs and button press counters are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. The device card displays only the channels enabled in the polling settings.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
