---
article: "WB-MR6C v.2"
cover: "wb-mr6c_v2/cover.png"
catalogCover: "wb-mr6c_v2/catalog-cover.png"
images: [
  ["wb-mr6c_v2/wb-mr6c_v2-front.png"],
  ["wb-mr6c_v2/wb-mr6c_v2-34.png"],
  ["wb-mr6c_v2/wb-mr6c_v2-13.png"],
  ["wb-mr6c_v2/wb-mr6c_v2-14.png"],
  ["wb-mr6c_v2/wb-mr6c_v2-10.png"],
  ["wb-mr6c_v2/wb-mr6c_v2-11.png"],
  ["wb-mr6c_v2/wb-mr6c_v2-12.png"]
]
meta: "RS-485, Modbus RTU Relay module"
keywords: "RS-485, Modbus RTU"
---
::product
#description

Designed for switching general-purpose loads up to 2 kW, including inductive loads: lighting, curtain drives, etc.

Rated current: 10 A, inrush current: up to 80 A (20 ms). 
 6 relay outputs, 7 discrete inputs.


#info

## Key features

::product-section{title="Advantages"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-advantages.png"
  width="500px"
  float="right"
}

- Powerful relays that can withstand high inrush currents.
- Recognition of button presses on inputs and flexible configuration of output responses allow you to control one or more outputs from any inputs.
- Output status indication on the housing for quick diagnostics and checking output states during commissioning.
- Pulse counting and frequency measurement at the inputs for connecting pulse-output meters and measuring motor speed.
- Safe mode in case of RS-485 communication failure.
- Output timer functions: on and off delay, switching on for a set time, cyclic mode.
- Programmable protection against switch contact bounce.
- Compact DIN rail housing.
- Fast and easy integration into automation and monitoring systems.

- Technical support on the portal.
- Your company logo can be applied.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which allows instant delivery of input states and button press counter values to the Wiren Board controller.

<br>
::

::product-section{title="Hardware"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-hardware.png"
  width="500px"
  float="right"
}

- 6 relay channels rated 10 A 230 V AC.
- Maximum switching current: 16 A per channel.
- Maximum inrush current: up to 80 A (20 ms).
- The outputs are grouped into two sets of 3 relays; each group can switch a total of no more than 30 A.
- 7 discrete inputs with group galvanic isolation; by default, 6 inputs control the outputs with the same numbers, and one input turns off all relay channels.
- Button press handling: short, long, double, and short followed by long.

- Supply voltage: 9…28 V DC.
- Interface: RS-485, Modbus RTU.
- Operating temperature: -40…+80 °C.
- DIN rail housing, 3 modules (53 x 90 x 58 mm).

<br>
::

::product-section{title="Hongfa Long Life Relays"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-hongfa.jpg"
  width="500px"
  float="right"
}

Reliable Hongfa relays are used for switching. The relays have silver tin oxide (AgSnO2) contacts, which allow operation with high inrush currents up to 80 A (20 ms). This makes the WB-MR6C v.2 module well suited for controlling LED lamps.

To verify the relay quality, we [tested them](https://wirenboard.com/en/news/tested-the-relays-for-high-starting-currents-467/) with inrush currents several times higher than the rated ones.

The relay manufacturer claims a service life of at least 100 000 operations.
::

::product-section{title="Local control"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-local-control.jpg"
  width="500px"
  float="right"
}

Flexible configuration of output responses to button presses allows you to use the module for local control of loads and to implement simple logic without contactors or intermediate relays. This is convenient in small installations where there is no controller and no way to run an RS-485 bus.

If the module is connected to a bus, local logic can be combined with commands from the controller. The interaction of inputs and outputs is configured in the Wiren Board controller web interface or by writing to Modbus registers, and the settings are stored in the module memory.
::

::product-section{title="Safe mode"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-safe-mode.png"
  width="500px"
  float="right"
}

If the module is installed far from the switchboard and connected to the RS-485 bus, there is a risk of losing control from the head unit. To keep control over an important technological process, the module has a safe mode that switches the relay outputs to a specified state.

For each output, you can configure its own safe state and whether to switch to it when communication is lost. You can also enable or disable control from the inputs in safe mode, for example, to prohibit control from buttons when communication with the device is lost.
::

::product-section{title="Curtain control"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-curtains.jpg"
  width="500px"
  float="right"
}

The WB-MR6C v.2 module has a special curtain mode that prevents simultaneous activation of the direction relays and guarantees a pause between switchings. In the settings, you can set the opening/closing time, the pause when changing direction, as well as actions at power-on and when entering safe mode.

The outputs are configured individually, so only some of the outputs can be used for curtains, and the rest can be used for other purposes. You can also configure a curtain action for each of the 4 types of presses of buttons connected to the module inputs.
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-fast-modbus-support.png"
  width="500px"
  float="right"
}

All Wiren Board devices, in addition to the standard Modbus RTU, support the [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡ extension, which adds the following features:

- Instant polling of input states and measured values via events.
- Fast search for devices connected to the controller.
- Address collision resolution on the bus.

For the user, the additional features are enabled seamlessly: if the device supports the extension, the controller driver will work with it via Fast Modbus; if the device knows nothing about the extension, it will work via standard Modbus RTU.
::

<br>

:include{path="/catalog/includes/quality_control" withSeparator="true"}

::product-section{title="Setup"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-setup.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface to:

- Enable and disable channels and configure the polling period.
- Set input operating modes.
- Configure the reaction of outputs to inputs.
- Set the state of the outputs at power-on.
- Configure safe mode settings.
- Adjust the contact bounce protection time.
- Switch the outputs to the curtain drive control mode.
- Configure the power-on delay and the restart delay.
- Configure output timer functions.

For configuration without a controller, you can use the Wiren Board Device Editor paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register map is open, well documented and available online in the device documentation.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-readings.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the states of inputs, outputs and button press counters are available in the controller web interface and can be used in automation scripts or transferred to a higher-level system. The device card displays only the channels enabled in the polling settings.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
