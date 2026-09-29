---
article: "WB-MR6LV/L"
cover: "wb-mr6lvl/cover.png"
catalogCover: "wb-mr6lvl/catalog-cover.png"
documentation: "https://wiki.wirenboard.com/wiki/WB-MR3LV/I(K)_and_WB-MR6LV/I(K)_Modbus_Relay_Modules"
---
::product
#description

Designed for switching general-purpose loads up to 2 kW, including inductive loads: lighting, curtain drives, etc.

Available in two versions: I — with changeover contacts (SPDT) and S — with normally open contacts (SPST).

Rated current: 7 A, inrush current (I/S): up to 120/165 A (20 ms). 
 6 relay outputs, 7 discrete inputs.


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-mr6lvl/wb-mr6lvl-1.png"
  width="500px"
  float="right"
}

- Changeover contacts.
- Powerful relays that can withstand high inrush currents.
- Recognition of button presses on inputs and flexible configuration of the response of outputs to presses allows you to control one or more outputs from any inputs.
- Indication of the output status on the housing for quick diagnostics and determination of the output status during commissioning.
- Pulse counting and frequency measurement at the inputs for connecting counters with pulse output and measuring motor rotation speed.
- Safe mode in case of RS-485 communication failure.
- Programmable protection against bounce of switch contacts.
- Compact housing for DIN rail.
- Fast and easy integration into automation and monitoring systems.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡, which allows you to instantly deliver input states and click counter values to the Wiren Board controller.
::

::product-section{title="Hardware"}
Specifications:

- 6 relay channels rated 7 A 230 V AC.
- Maximum continuous current: 10 A per channel.
- Maximum starting current, /L modification — up to 120 A (20 ms).
- 7 discrete inputs with group galvanic isolation, by default 6 inputs control outputs of the same name, and 1 disables all relay channels.
- Press handling: short, long, double and short, then long.

- Supply voltage: 9…28 V direct current.
- Interface: RS-485, Modbus RTU.
- Operating temperature: -40…+80 °C.
- DIN rail enclosure, 6M (108 x 90 x 58 mm).
::

::product-section{title="Hongfa Long Life Relays"}
:photo{
  src="wb-mr6lvl/wb-mr6lvl-2.jpg"
  width="500px"
  float="right"
}

Reliable Hongfa relays are used for switching. The relays have silver tin dioxide (AgSnO2) contacts, which ensures switching of high starting currents. Therefore, the WB-MR6-LV module is suitable for controlling high-power loads and LED lamps.

To ensure the quality of the relay we [tested them with high](https://wirenboard.com/ru/news/proveli-ispytania-rele-na-bolsie-puskovye-toki-458/) inrush current several times higher than nominal.

The relay manufacturer claims a service life of at least 75 000 operations.
::

::product-section{title="Local control"}
:photo{
  src="wb-mr6lvl/wb-mr6lvl-3.png"
  width="500px"
  float="right"
}

Flexible configuration of the response of outputs to button presses allows you to use the module for local control of loads and implement simple logic without contactors and intermediate relays. This is convenient in small installations where there is no controller and no possibility to install an RS-485 bus.

If the module is connected to a bus, local logic can be combined with commands from the controller. The interaction of inputs and outputs is configured in the web interface of the Wiren Board controller or by writing to Modbus registers, and the settings are stored in the module memory.
::

::product-section{title="Safe mode"}
:photo{
  src="wb-mr6lvl/wb-mr6lvl-4.png"
  width="500px"
  float="right"
}

If the module is installed at a distance from the switchboard and connected to the RS-485 bus, then there is a risk of loss of control from the head unit. In order not to lose control over an important technological process, the module has a safe mode that allows you to switch the relay outputs to a specified state.

For each output, you can configure its own safe state and the need to switch to it in case of loss of communication. In addition, you can enable or disable control from inputs in safe mode, for example, prohibit control from buttons when communication with the device is lost.
::

::product-section{title="Curtains controlling"}
:photo{
  src="wb-mr6lvl/wb-mr6lvl-5.png"
  width="500px"
  float="right"
}

The WB-MR6-LV module has a special mode for working with curtains, which eliminates the simultaneous activation of the direction relay and guarantees a pause between switchings. In the settings, you can set the opening/closing time, pause time when changing direction, as well as actions when turning on the power and entering safe mode.

The outputs are individually configurable, so only part of the outputs can be used to control curtains, and the rest can be used for other purposes. You can also configure the curtain action for each of the 4 types of button presses connected to the module inputs.
::

:include{path="/catalog/includes/fast_modbus"}

:include{path="/catalog/includes/quality_control"}

::product-section{title="Setup"}
:photo{
  src="wb-mr6lvl/wb-mr6lvl-7.png"
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
  src="wb-mr6lvl/wb-mr6lvl-8.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, then the states of inputs, outputs and button press counters available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. The device card displays only the channels enabled in the survey settings.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
