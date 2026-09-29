---
article: "WB-MIR v.3"
cover: "wb-mir/cover.png"
catalogCover: "wb-mir/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/WB-MIR_v3_-_Modbus_IR_Remote_Control"
meta: "IR control device with RS-485, Modbus RTU"
keywords: "RS-485, Modbus RTU"
---
::product
#description

A learning module with a remote infrared transmitter and an RS-485 interface. IR commands are programmed using a remote control from household appliances or via the RS-485 interface.

It is used in automation systems for controlling air conditioners, fan coils, heat curtains, televisions, etc. It is installed in the housing of the controlled device.

#info

## MAIN CHARACTERISTICS

::product-section{title="Advantages"}
- Compact case, can be installed inside the device enclosure.
- The module memory stores up to 80 commands.
- Learns from the remote control, so there is no need to search for commands in databases.
- There is a 1-Wire input for connecting a temperature sensor, which can also be used as a "dry contact" input.
- Supports Fast Modbus.
- External IR transmitter included.

- It is possible to apply your company logo.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which allows input states and press counter values to be delivered instantly to the Wiren Board controller.
::

::product-section{title="Hardware"}
Specifications:

- Supports a remote 1-Wire digital temperature sensor.
- Supports recording of complex IR signals.
- Ready-made configuration templates for Wiren Board.
- 3.5 mm jack for connecting the transmitter.
- External IR transmitter included.

- Supply voltage: 9…28 V DC.
- Interface: RS-485, Modbus RTU.
- Dimensions: 34 x 20 x 17 mm.
::

::product-section{title="Manage IR commands without additional devices"}
WB-MIR allows you to record signals from the IR remote controls of household devices to further control home appliances: air conditioners, TVs, heat curtains, etc. The module is installed out of sight inside the enclosure of the controlled device, so it does not spoil the interior and does not take up space.

The non-volatile memory of the sensor can store up to 80 IR commands, which are recorded using the equipment's remote control. Working with IR commands is described in detail in the documentation.
::

::product-section{title="Universal solution for climate control"}
By connecting an external 1-Wire temperature sensor to the WB-MIR module, you can implement precise control of climate equipment, for example an air conditioner. The external temperature sensor can be installed where it provides more accurate readings, and the control logic can be programmed in the web interface of the Wiren Board controller.

The wb-rules engine built into the controller allows you to implement control algorithms that are more precise than those built into climate devices by default. This makes it possible to improve the quality of indoor climate control.
::

:include{path="/catalog/includes/quality_control"}

:include{path="/catalog/includes/fast_modbus"}

::product-section{title="Setup"}
When used with a Wiren Board controller, you can use the mouse in the web interface to:

- turn channels on and off and set the polling period;
- control the mode for recording commands from the remote control;
- play back IR commands;
- switch the input operating mode.

To configure the module without a controller, you can use the [Wiren Board device web configurator](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) with a WB-USB485 interface converter or another one.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Reading the readings"}
If a Wiren Board controller is used, the output states are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. The device card displays only the channels enabled in the polling settings.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
