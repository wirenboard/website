---
article: "00115"
cover: "wb-mr3/cover.png"
catalogCover: "wb-mr3/catalog-cover.png"
images: [
  ["wb-mr3/wb-mr3-front.png"],
  ["wb-mr3/wb-mr3-side.png"],
  ["wb-mr3/wb-mr3-12.png"],
  ["wb-mr3/wb-mr3-11.png"]
]
meta: "RS-485, Modbus RTU Relay module WB-MR3-LV"
keywords: "RS-485, Modbus RTU"
---
::product
#description

Designed for switching general-purpose loads up to 2 kW, including inductive loads: lighting, curtain drives, etc.

Available in two versions: I — with changeover contacts (SPDT) and S — with normally open contacts (SPST).

Rated current: 10 A, inrush current (I/S): up to 120/165 A (20 ms). 
 3 relay outputs, 4 discrete inputs.


#info

## Key Features

::product-section{title="Advantages"}
:photo{
  src="wb-mr3/wb-mr3-photo-34.png"
  width="500px"
  float="right"
}

- Changeover contacts in the /I version.
- Powerful relays that withstand high inrush currents.
- Recognition of button presses on inputs and flexible configuration of the response of outputs to presses, allows you to control one or more outputs from any inputs.
- Indication of output status on the housing for quick diagnostics and determination of output status during commissioning.
- Pulse counting and frequency measurement at inputs for connecting meters with pulse output and measuring motor speed.
- Safe mode in case of RS-485 communication failure.
- Output timer functions: on and off delay, switching on for a set time, cyclic mode.
- Programmable protection against bounce of switch contacts.
- Compact housing for DIN rail.
- Fast and easy integration into automation and monitoring systems.

- Technical support on the portal.
- Your company logo can be applied.

Supports [Fast Modbus](https://wiki.wirenboard.com/wiki/Fast_Modbus/en) ⚡, which allows you to instantly deliver input states and button press counter values to the Wiren Board controller.

<br>
::

::product-section{title="Hardware"}
:photo{
  src="wb-mr3/wb-mr3-hardware.png"
  width="500px"
  float="right"
}

- 3 relay channels rated 10 A 230 V AC.
- Maximum continuous current: 16 A per channel.
- Maximum inrush current:
  - /I version — up to 120 A (20 ms);
  - /S version — up to 165 A (20 ms), up to 500 A (1.5 ms).

- 4 discrete inputs with group galvanic isolation; by default, 3 inputs control the outputs with the same numbers, and one input turns off all relay channels.
- Press handling: short, long, double and short, then long.

- Supply voltage: 9…28 V direct current.
- Interface: RS-485, Modbus RTU.
- Operating temperature: -40…+80 °C.
- DIN rail housing, 3 modules (53 x 90 x 58 mm).
::

::product-section{title="Hongfa Long Life Relays"}
:photo{
  src="wb-mr3/wb-mr3-hongfa.jpg"
  width="500px"
  float="right"
}

Reliable Hongfa relays that withstand high inrush currents are used for switching. Therefore, the WB-MR3LV module is suitable for controlling high-power loads and LED lamps.

- In the /I version — silver tin oxide contacts (AgSnO2), the relay manufacturer claims a service life of at least 75 000 operations.
- In the /S version — W+AgSnO2 contacts (tungsten and silver tin oxide), inrush current up to 500 A (1.5 ms), the relay manufacturer claims a service life of at least 12 000 operations.

To make sure of the relay quality, we [tested them](https://wirenboard.com/en/news/tested-the-relays-for-high-starting-currents-467/) with inrush currents several times higher than the rated ones.
::

::product-section{title="Local control"}
:photo{
  src="wb-mr3/wb-mr3-local-control.jpg"
  width="500px"
  float="right"
}

Flexible configuration of the response of outputs to button presses allows you to use the module for local control of loads and implement simple logic without contactors and intermediate relays. This is convenient in small installations where there is no controller and no possibility to install an RS-485 bus.

If the module is connected to a bus, local logic can be combined with commands from the controller. The interaction of inputs and outputs is configured in the web interface of the Wiren Board controller or by writing to Modbus registers, and the settings are stored in the module memory.
::

::product-section{title="Safe mode"}
:photo{
  src="wb-mr3/wb-mr3-safe-mode.png"
  width="500px"
  float="right"
}

If the module is installed at a distance from the switchboard and connected to the RS-485 bus, then there is a risk of loss of control from the head unit. In order not to lose control over an important technological process, the module has a safe mode that allows you to switch the relay outputs to a specified state.

For each output, you can configure its own safe state and the need to switch to it in case of loss of communication. In addition, you can enable or disable control from inputs in safe mode, for example, prohibit control from buttons when communication with the device is lost.
::

::product-section{title="Curtains controlling"}
:photo{
  src="wb-mr3/wb-mr3-curtains.jpg"
  width="500px"
  float="right"
}

The WB-MR3LV module has a special mode for working with curtains, which eliminates the simultaneous activation of the direction relays and guarantees a pause between switchings. In the settings, you can set the opening/closing time, pause time when changing direction, as well as actions when turning on the power and entering safe mode.

The outputs are individually configurable, so only part of the outputs can be used to control curtains, and the rest can be used for other purposes. One drive can be connected to the module — to outputs K1 and K2. You can also configure the curtain action for each of the 4 types of button presses connected to the module inputs.
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-mr3/wb-mr3-fast-modbus-support.png"
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
  src="wb-mr3/wb-mr3-setup.png"
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
  src="wb-mr3/wb-mr3-readings.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, then the states of inputs, outputs and button press counters are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. The device card displays only the channels enabled in the polling settings.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
