---
article: "WB-MIR v.3"
cover: "wb-mir/cover.png"
catalogCover: "wb-mir/catalog-cover.png"
images: [
  ["wb-mir/cover.png"],
  ["wb-mir/wb-mir-1.png"],
  ["wb-mir/wb-mir-2.png"],
  ["wb-mir/wb-mir-3.png"],
  ["wb-mir/wb-mir-4.png"],
  ["wb-mir/wb-mir-5.png"],
  ["wb-mir/wb-mir-6.png"],
  ["wb-mir/wb-mir-7.png"]
]
meta: "IR control device with RS-485, Modbus RTU"
keywords: "RS-485, Modbus RTU"
---
::product
#description

A learning module with a remote infrared transmitter and an RS-485 interface. IR commands are programmed using a remote control from household appliances or via the RS-485 interface.

It is used in automation systems for controlling air conditioners, fan coils, heat curtains, televisions, etc. It is installed in the housing of the controlled device.


#info

## Key Features

::product-section{title="Advantages"}
:photo{
  src="wb-mir/wb-mir-advantages.png"
  width="500px"
  float="right"
}

- Compact housing that can be installed inside the controlled device.
- Stores up to 80 commands in the module memory.
- Learns from the remote control, so there is no need to search for commands in databases.
- 1-Wire input for connecting up to 20 DS18B20 temperature sensors, which can also be used as a dry contact input.
- Supports Fast Modbus.
- External IR transmitter included.

- Technical support on the portal.
- Your company logo can be applied.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which allows instant delivery of input states and button press counter values to the Wiren Board controller.

<br>
::

::product-section{title="Hardware"}
:photo{
  src="wb-mir/wb-mir-hardware.png"
  width="500px"
  float="right"
}

- Supports up to 20 DS18B20 digital temperature sensors (1-Wire).
- Supports recording of complex IR signals.
- Ready-made configuration templates for Wiren Board.
- 3.5 mm jack for connecting the transmitter.

- Supply voltage: 9…28 V DC.
- Interface: RS-485, Modbus RTU.
- Dimensions: 34 × 20 × 17 mm.
::

::product-section{title="IR Command Control Without Additional Devices"}
:photo{
  src="wb-mir/wb-mir-ir-commands.jpg"
  width="500px"
  float="right"
}

WB-MIR records signals from the IR remote controls of household appliances so that you can then control the appliances themselves: air conditioners, TVs, heat curtains, etc. The module is installed out of sight inside the housing of the controlled device, so it does not spoil the interior or take up space.

The non-volatile memory of the module can store up to 80 IR commands, which are recorded using the equipment's remote control. Working with IR commands is described in detail in the documentation.
::

::product-section{title="Universal Climate Control Solution"}
:photo{
  src="wb-mir/wb-mir-climate.jpg"
  width="500px"
  float="right"
}

By connecting external 1-Wire temperature sensors to the WB-MIR module, you can implement precise control of climate equipment such as an air conditioner. The external sensors can be placed where they give more accurate readings, and the control logic can be programmed in the web interface of the Wiren Board controller.

The wb-rules engine built into the controller allows you to implement control algorithms that are more precise than those built into climate devices by default. This improves the quality of indoor climate control.
::

<br>

:include{path="/catalog/includes/quality_control" withSeparator="true"}

::product-section{title="Fast Modbus Support"}
:photo{
  src="wb-mir/wb-mir-fast-modbus-support.png"
  width="500px"
  float="right"
}

All Wiren Board devices, in addition to the standard Modbus RTU, support the [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡ extension, which adds the following features:

- Instant polling of input states and measured values via events.
- Fast search for devices connected to the controller.
- Address collision resolution on the bus.

For the user, the additional features are enabled seamlessly: if the device supports the extension, the controller driver will work with it via Fast Modbus; if the device knows nothing about the extension, it will work via standard Modbus RTU.
::

::product-section{title="Setup"}
:photo{
  src="wb-mir/wb-mir-setup.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface to:

- Enable and disable channels and set the polling period.
- Control the mode of recording commands from the remote control.
- Play back IR commands.
- Switch the input operating mode.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured over the RS-485 bus by writing values to Modbus registers. The register map is open, well documented and available online in the device documentation.
::

::product-section{title="Reading Values"}
:photo{
  src="wb-mir/wb-mir-readings.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the temperature sensor readings and the input state are available in the controller's web interface and can be used in automation scenarios or sent to a higher-level system. Only the channels enabled in the polling settings are shown in the device card.

The module also provides all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
