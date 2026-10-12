---
article: "WB-MR6C v.2"
cover: "wb-mr6c_v2/cover.png"
catalogCover: "wb-mr6c_v2/catalog-cover.png"
images: [
  ["wb-mr6c_v2/cover.png"],
  ["wb-mr6c_v2/wb-mr6c_v2-10.png"],
  ["wb-mr6c_v2/wb-mr6c_v2-11.png"],
  ["wb-mr6c_v2/wb-mr6c_v2-12.png"],
  ["wb-mr6c_v2/wb-mr6c_v2-13.png"],
  ["wb-mr6c_v2/wb-mr6c_v2-14.png"]
]
documentation: "https://wirenboard.com/wiki/WB-MR6C_v.2_Modbus_Relay_Modules"
meta: "RS-485, Modbus RTU Relay module"
keywords: "RS-485, Modbus RTU"
---
::product
#description

Designed for switching general-purpose loads up to 2 kW, including inductive loads: lighting, curtain drives, etc.

Rated current: 10 A, inrush current: up to 80 A (20 ms). 
 6 relay outputs, 7 discrete inputs.


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-1.png"
  width="500px"
  float="right"
}

- Powerful relays that can withstand high inrush currents.
- Recognition of button presses on inputs and flexible configuration of output responses allow you to control one or more outputs from any inputs.
- Output status indication on the housing for quick diagnostics during commissioning.
- Pulse counting and frequency measurement at the inputs for connecting pulse-output meters and measuring motor speed.
- Safe mode in case of RS-485 communication failure.
- Programmable protection against contact bounce.
- Compact DIN rail housing.
- Fast and easy integration into automation and monitoring systems.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡, which allows instant delivery of input states and button press counter values to the Wiren Board controller.
::

::product-section{title="Hardware"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-2.png"
  width="500px"
  float="right"
}

Specifications:

- 6 relay channels rated 10 A 230 V AC.
- Maximum continuous current: 16 A per channel.
- Maximum inrush current: up to 80 A (20 ms).
- The outputs are grouped into two sets of 3 relays; each group can switch a total of no more than 20 A.
- 7 discrete inputs with group galvanic isolation; by default, 6 inputs control their corresponding outputs, and one disables all relay channels.
- Button press handling: short, long, double, and short followed by long.

- Supply voltage: 9…28 V DC.
- Interface: RS-485, Modbus RTU.
- Operating temperature: -40…+80 °C.
- DIN rail housing, 3 modules.
::

::product-section{title="Hongfa Long Life Relays"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-3.jpg"
  width="500px"
  float="right"
}

Reliable Hongfa relays are used for switching. The relays feature silver tin dioxide (AgSnO2) contacts, allowing operation with high inrush currents up to 80 A (20 ms). This makes the WB-MR6C v.2 module ideal for controlling LED lamps.

To verify relay quality, we [tested them with inrush currents](https://wirenboard-com.translate.goog/ru/news/proveli-ispytania-rele-na-bolsie-puskovye-toki-458/?_x_tr_sl=ru&_x_tr_tl=en&_x_tr_hl=ru&_x_tr_pto=wapp/) several times higher than the nominal rating.

The manufacturer claims a lifespan of at least 50,000 operations.
::

::product-section{title="Local control"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-4.png"
  width="500px"
  float="right"
}

Flexible configuration of output responses to button presses allows local control of loads and implementation of simple logic without contactors or intermediate relays. This is convenient in small installations without a controller or RS-485 bus.

If the module is connected to a bus, local logic can be combined with controller commands. Input-output interactions are configured via the Wiren Board web interface or Modbus registers and stored in the module memory.
::

::product-section{title="Safe mode"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-5.png"
  width="500px"
  float="right"
}

If the module is installed remotely and connected via RS-485, there is a risk of losing control from the head unit. The safe mode feature ensures that outputs switch to a predefined state in case of communication loss.

You can configure individual safe states for each output and define whether inputs remain active in safe mode—for example, disabling button control when communication is lost.
::

::product-section{title="Curtain control"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-6.png"
  width="500px"
  float="right"
}

The WB-MR6C v.2 module includes a special curtain control mode that prevents simultaneous activation of directional relays and enforces a pause between switching.

Settings allow you to define opening/closing times, direction-change delays, and behavior during power-on or when entering safe mode. Outputs are configurable individually; some can be used for curtains while others remain available for other loads. Each button press type (4 in total) can trigger its own curtain action.
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-7.png"
  width="500px"
  float="right"
}

All Wiren Board devices, in addition to the standard Modbus RTU, support the [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡ extension, which adds the following features:

- Instant polling of input states and measurements via events.
- Fast detection of devices connected to the controller.
- Address conflict resolution on the bus.

These features are enabled automatically. If the device supports the extension, the controller driver uses Fast Modbus; otherwise, it falls back to standard Modbus RTU.
::

:include{path="/catalog/includes/quality_control"}

::product-section{title="Setup"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-8.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, the web interface allows you to:

- Enable/disable channels and configure polling intervals.
- Set input modes.
- Configure output reactions to inputs.
- Set output states at power-on.
- Adjust safe mode parameters.
- Set contact bounce protection time.
- Enable curtain control mode on specific outputs.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured via RS-485 by writing to Modbus registers. The register map is open, well-documented, and available online.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-mr6c_v2/wb-mr6c_v2-9.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the states of inputs, outputs, and button press counters are available in the web interface. They can be used in automation scripts or sent to higher-level systems. Only channels enabled in the polling settings are displayed.

The module also provides all data via Modbus RTU (RS-485), which can be accessed by any compatible device or software, including third-party controllers, HMI panels, and SCADA systems.
::


::
