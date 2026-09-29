---
article: "WB-MIR"
cover: "wb-mir-v1/cover.png"
catalogCover: "wb-mir-v1/catalog-cover.png"
documentation: "http://wirenboard.com/wiki/index.php/Устройство_IR-управления_WB-MIR"
meta: "IR control device with RS-485, Modbus RTU"
keywords: "RS-485, Modbus RTU"
---
::product
#description

Learning module with remote infrared transmitter and RS-485 interface. IR commands are programmed using the original remote control or via the RS-485 interface.

Used in automation systems for residential and commercial premises to control air conditioners, fan coils, air curtains, TVs, etc. Installed in the body of the controlled device.


#info

## MAIN FEATURES

::product-section{title="Benefits"}
:photo{
  src="wb-mir-v1/wb-mir-v1-1.png"
  width="500px"
  float="right"
}

- Compact case, can be installed in the device case.
- The module memory stores up to 80 commands.
- Learns from the control panel, so there is no need to search for commands in databases.
- There is a 1-wire input for connecting a temperature sensor, which can be used as dry contact input
- Supports Fast Modbus.
- External IR transmitter included.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡ that allows you to instantly deliver input states and click counter values to the controller Wiren Board.
::

::product-section{title="Hardware"}
Specifications:

- Supports remote 1-wire digital temperature sensor.
- Supports recording of complex IR signals.
- Ready configuration templates for Wiren Board.
- 3.5 mm jack for connecting a transmitter.
- External IR transmitter included.

- Supply voltage: 9…28 V DC.
- Interface: RS-485, Modbus RTU.
- Small size: 45x35x14 mm.
::

::product-section{title="Manage IR commands without additional devices"}
:photo{
  src="wb-mir-v1/wb-mir-v1-2.jpg"
  width="500px"
  float="right"
}

WB-MIR allows you to record signals from IR remote controls of household devices for further control of household appliances: air conditioners, TVs, thermal curtains, etc. At In this case, the module is installed hidden inside the body of the controlled device and does not damage the interior does not take up space.

The sensor's non-volatile memory can store up to 80 IR commands, which are recorded from using the equipment's remote control. Working with IR commands is described in detail in the documentation.
::

::product-section{title="Universal solution for climate control"}
:photo{
  src="wb-mir-v1/wb-mir-v1-3.jpg"
  width="500px"
  float="right"
}

By connecting an external 1-wire temperature sensor to the WB-MIR module, you can realize accurate control of climate equipment, for example, air conditioning. External temperature sensor can be installed in a location where it will provide more truthful readings and logic work must be programmed in the web interface of the Wiren Board controller.

The wb-rules rules engine built into the controller allows you to implement algorithms regulation, more accurate than those included in climate control devices default. Thanks to this, you can improve the quality of indoor climate control.
::

:include{path="/catalog/includes/fast_modbus"}

:include{path="/catalog/includes/quality_control"}

::product-section{title="Settings"}
:photo{
  src="wb-mir-v1/wb-mir-v1-5.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- turn channels on and off and set the polling period
- control the mode of recording commands from the remote control,
- play IR commands
- switch the input operating mode.

When used with other equipment, the module can be configured via the RS-485 bus via writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Reading readings"}
:photo{
  src="wb-mir-v1/wb-mir-v1-6.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the output states are available in the web interface controller and can be used in automation scenarios or transferred to the system top level. The device card displays only those enabled in the survey settings channels.

The module also transmits all data via Modbus RTU (RS-485), which can be read by anyone equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
