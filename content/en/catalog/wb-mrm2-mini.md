---
article: "WB-MRM2-mini"
cover: "wb-mrm2-mini/cover.png"
catalogCover: "wb-mrm2-mini/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/index.php/WB-MRM2-mini"
meta: "Plug-in module WB-MRM2-mini"
keywords: "Plug-in module WB-MRM2-mini"
---
::product
#description

Designed for switching general-purpose loads up to 2 kW, including inductive loads: lighting, curtain drives, etc.

Compact module for installation in junction boxes and cable trays. Versions with normally open (NO) and normally closed (NC) relay contacts are available.

Rated current (NO/NC): 10/2 A, inrush current: up to 80 A (20 ms). 
 2 relay outputs, 2 discrete inputs.


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-mrm2-mini/wb-mrm2-mini-1.png"
  width="500px"
  float="right"
}

- Installation in junction box and cable channel.
- Powerful relays that can withstand high inrush currents.
- Recognition of button presses on inputs and flexible configuration of the response of outputs to presses allows you to control one or more outputs from any inputs.
- Pulse counting and frequency measurement at the inputs for connecting counters with pulse output and measuring motor rotation speed.
- Safe mode in case of RS-485 communication failure.
- Programmable protection against bounce of switch contacts.
- Fast and easy integration into automation and monitoring systems.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡, which allows you to instantly deliver input states and click counter values to the Wiren Board controller.
::

::product-section{title="Hardware"}
Specifications:

- 2 relay channels.
- Modifications:
  - NO — Normally Open relay, 10 A / 230 VAC (up to 80 A for 20 ms).
  - NC — Normally Closed Relay, 2 A / 230VAC.

- 2 discrete inputs with direct channel control function.
- Press handling: short, long, double and short, then long.

- Supply voltage: 9…28 V direct current.
- Interface: RS-485, Modbus RTU.
- Extended operating temperature range: -40…+50 °C.
- Case dimensions: 52 x 24 x 20.5 mm.
::

::product-section{title="Hongfa Long Life Relays"}
:photo{
  src="wb-mrm2-mini/wb-mrm2-mini-2.png"
  width="500px"
  float="right"
}

The /NO version uses reliable Hongfa relays with silver tin dioxide (AgSnO) contacts, which ensures operation with high inrush currents up to 80 A (20 ms). Therefore, the WB-MRM2-mini v.2/NO module is well suited for controlling LED lamps.

To ensure the quality of the relay we [tested them with high](https://wirenboard.com/ru/news/proveli-ispytania-rele-na-bolsie-puskovye-toki-458/) inrush current several times higher than nominal.

The relay manufacturer claims a service life of at least 50 000 operations.
::

::product-section{title="Local control"}
:photo{
  src="wb-mrm2-mini/wb-mrm2-mini-3.png"
  width="500px"
  float="right"
}

Flexible configuration of the response of outputs to button presses allows you to use the module for local control of loads and implement simple logic without contactors and intermediate relays. And thanks to its compact size module can be hidden in junction boxes, deep socket boxes and electrical appliance housings.This is convenient in small installations, where there is no controller and no possibility to lay an RS-485 bus.

If the module is connected to a bus, local logic can be combined with commands from the controller. The interaction of inputs and outputs is configured in the web interface of the Wiren Board controller or by writing to Modbus registers, and the settings are stored in the module memory.
::

::product-section{title="Safe mode"}
:photo{
  src="wb-mrm2-mini/wb-mrm2-mini-4.png"
  width="500px"
  float="right"
}

If the module is installed at a distance from the switchboard and connected to the RS-485 bus, then there is a risk of loss of control from the head unit. In this case, the module will continue to operate from the built-in power source even if the cable is completely broken. In order not to lose control over an important technological process, the module has a safe mode that allows you to switch the relay outputs to a specified state.

For each output, you can configure its own safe state and the need to switch to it in case of loss of communication. In addition, you can enable or disable control from inputs in safe mode, for example, prohibit control from buttons when communication with the device is lost.
::

::product-section{title="Curtains controlling"}
:photo{
  src="wb-mrm2-mini/wb-mrm2-mini-5.png"
  width="500px"
  float="right"
}

In the module WB-MRM2-mini v.2/NO is a special mode of operation with curtains, which eliminates the simultaneous activation of the direction relay and guarantees a pause between switchings. In the settings, you can set the opening/closing time, pause time when changing direction, as well as actions when turning on the power and entering safe mode.

The outputs are individually configurable, so only part of the outputs can be used to control curtains, and the rest can be used for other purposes. You can also configure the curtain action for each of the 4 types of button presses connected to the module inputs.
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-mrm2-mini/wb-mrm2-mini-6.png"
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
  src="wb-mrm2-mini/wb-mrm2-mini-7.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- enable and disable channels and configure the polling period,
- set input operating modes,
- configure the reaction of outputs to inputs,
- set the state of the outputs when power is applied,
- configure safe mode settings,
- adjust the contact bounce protection time,
- switch the outputs to the curtain drive control mode.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-mrm2-mini/wb-mrm2-mini-8.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, then the states of inputs, outputs and button press counters available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. The device card displays only the channels enabled in the survey settings.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
