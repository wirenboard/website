---
article: "WB-MCM8"
cover: "wb-mcm8/cover.png"
catalogCover: "wb-mcm8/catalog-cover.png"
images: [
  ["wb-mcm8/cover.png"],
  ["wb-mcm8/wb-mcm8-7.png"],
  ["wb-mcm8/wb-mcm8-8.png"],
  ["wb-mcm8/wb-mcm8-9.png"],
  ["wb-mcm8/wb-mcm8-10.png"],
  ["wb-mcm8/wb-mcm8-11.png"],
]
documentation: "https://wirenboard.com/wiki/index.php/WB-MCM8_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_%D1%81%D1%87%D0%B5%D1%82%D0%BD%D1%8B%D1%85_%D0%B2%D1%85%D0%BE%D0%B4%D0%BE%D0%B2_8-%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9"
meta: "Buy WB-MCM8 pulse counter module with Modbus RTU RS-485"
keywords: "pulse counter module with Modbus RTU RS-485, modbus module, modbus pulse counter"
---
::product
#description

8-channel module of discrete and counting inputs with RS-485 interface. Allows you to receive signals from devices with pulse outputs of the “dry contact” and “open collector” types.

Used for connecting encoders, switches, reed switches and metering devices with pulse output in automation and dispatching systems.


#info

## MAIN FEATURES

::product-section{title="Benefits"}
:photo{
  src="wb-mcm8/wb-mcm8-1.png"
  width="500px"
  float="right"
}

- Counting pulses and measuring frequency at the input.
- Group isolation of inputs.
- Connecting the “dry contact” and “open collector” signals.
- Supports AB and ABZ quadrature encoders.
- Recognizes 4 types of clicks.
- Programmable bounce protection for switch contacts.
- Pulse counter values are stored in non-volatile memory.
- Indication of the status of inputs, except input 8.
- Fast and simple integration into automation and monitoring systems.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡ that allows you to instantly deliver input states and click counter values to the controller Wiren Board.
::

::product-section{title="Hardware"}
:photo{
  src="wb-mcm8/wb-mcm8-2.png"
  width="500px"
  float="right"
}

Specifications:

- 8 discrete dry contact inputs.
- Group galvanic isolation of inputs.
- Counting pulses and measuring frequency at the input.

- Supply voltage: 9…28 V DC.
- Interface: RS-485, Modbus RTU.
- Extended operating temperature range: -40…+80 °C.
- DIN rail housing: 2 modules.
::

::product-section{title="Use with encoders"}
:photo{
  src="wb-mcm8/wb-mcm8-3.png"
  width="500px"
  float="right"
}

The WB-MCM8 module can be used to connect two- and three-pin quadrature AB and ABZ encoders. Using encoders you can control the brightness of the backlight or control the movement of objects.

The encoder operation is configured in the web interface of the Wiren Board controller. Meaning encoder position is available in the corresponding MQTT topic. You can set the initial position and track the rotation angle.
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-mcm8/wb-mcm8-4.png"
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

::product-section{title="Settings"}
:photo{
  src="wb-mcm8/wb-mcm8-5.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- turn channels on and off and set the polling period
- set the operating mode of the inputs
- set the anti-bounce time.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured via the RS-485 bus via writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Reading readings"}
:photo{
  src="wb-mcm8/wb-mcm8-6.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the output states are available in the web interface controller and can be used in automation scenarios or transferred to the system top level. The device card displays only those enabled in the survey settings channels.

The module also transmits all data via Modbus RTU (RS-485), which can be read by anyone equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
