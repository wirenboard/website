---
article: "WB-MR6CU v.2"
cover: "wb-mr6cu/cover.png"
catalogCover: "wb-mr6cu/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/index.php/WB-MR6CU_v.2_Modbus_Relay_Modules"
meta: "Compact RS-485, Modbus RTU Relay module"
keywords: "Compact RS-485, Modbus RTU Relay module"
---
::product
#description

Designed for switching general-purpose loads up to 2 kW, including inductive loads: lighting, curtain drives, etc.

Rated current: 10 A, inrush current: up to 80 A (20 ms). 
 6 relay outputs, no discrete inputs.


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-mr6cu/wb-mr6cu-1.png"
  width="500px"
  float="right"
}

- Powerful relays that can withstand high inrush currents.
- Indication of the output status on the housing for quick diagnostics and determination of the output status during commissioning.
- Safe mode in case of RS-485 communication failure.
- Compact housing for DIN rail, 2 modules.
- Fast and easy integration into automation and monitoring systems.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡, which allows relay channel states to be instantly delivered to the Wiren Board controller.
::

::product-section{title="Hardware"}
:photo{
  src="wb-mr6cu/wb-mr6cu-2.png"
  width="500px"
  float="right"
}

Specifications:

- 6 relay channels rated 10 A 230 V AC.
- Maximum continuous current: 16 A per channel.
- Maximum starting current: up to 80 A (20 ms).
- The outputs are combined into two groups of 3 relays each, each group can switch a total of no more than 20 A.
- No inputs.

- Supply voltage: 9…28 V direct current.
- Interface: RS-485, Modbus RTU.
- Operating temperature: -40…+80 °C.
- DIN rail enclosure, 2M (36 x 90 x 58 mm).
::

::product-section{title="Hongfa Long Life Relays"}
:photo{
  src="wb-mr6cu/wb-mr6cu-3.png"
  width="500px"
  float="right"
}

Reliable Hongfa relays are used for switching. The relays have silver tin dioxide (AgSnO2) contacts, which ensures operation with high inrush currents up to 80 A (20 ms). Therefore, the WB-MR6CU v.2 moduleFineSuitable for controlling LED lamps.

To ensure the quality of the relay we [tested them with high](https://wirenboard.com/ru/news/proveli-ispytania-rele-na-bolsie-puskovye-toki-458/) inrush current several times higher than nominal.

The relay manufacturer claims a service life of at least 100 000 operations.
::

::product-section{title="Safe mode"}
:photo{
  src="wb-mr6cu/wb-mr6cu-4.png"
  width="500px"
  float="right"
}

If the module is installed at a distance from the switchboard and connected to the RS-485 bus, then there is a risk of loss of control from the head unit. In order not to lose control over an important technological process, the module has a safe mode that allows you to switch the relay outputs to a specified state.

For each output, you can configure its own safe state and the need to switch to it in case of loss of communication. In addition, you can enable or disable control from inputs in safe mode, for example, prohibit control from buttons when communication with the device is lost.
::

::product-section{title="Curtains controlling"}
:photo{
  src="wb-mr6cu/wb-mr6cu-5.png"
  width="500px"
  float="right"
}

The WB-MR6CU v.2 module has a special mode for working with curtains, which eliminates the simultaneous activation of the direction relay and guarantees a pause between switchings. In the settings, you can set the opening/closing time, pause time when changing direction, as well as actions when turning on the power and entering safe mode.

The outputs are individually configurable, so only part of the outputs can be used to control curtains, and the rest can be used for other purposes. You can also configure the curtain action for each of the 4 types of button presses connected to the module inputs.
::

:include{path="/catalog/includes/fast_modbus"}

:include{path="/catalog/includes/quality_control"}

::product-section{title="Setup"}
:photo{
  src="wb-mr6cu/wb-mr6cu-7.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- enable and disable channels and configure the polling period,
- set the state of the outputs when power is applied,
- configure safe mode settings,
- switch the outputs to the curtain drive control mode.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-mr6cu/wb-mr6cu-8.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the output states available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. The device card displays only the channels enabled in the survey settings.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
