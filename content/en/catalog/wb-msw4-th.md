---
article: "WB-MSW4-TH"
cover: "wb-msw4-th/cover.png"
catalogCover: "wb-msw4-th/catalog-cover.png"
images: [
  ["wb-msw4-th/cover.png"],
  ["wb-msw4-th/wb-msw4-th-6.png"],
  ["wb-msw4-th/wb-msw4-th-7.png"],
  ["wb-msw4-th/wb-msw4-th-8.png"]
]
documentation: "https://wirenboard.com/wiki/WB-MSW_v.4_Modbus_Sensor"
meta: "RS-485, Modbus RTU Wall-mounted sensor"
keywords: "RS-485, Modbus RTU Wall-mounted sensor"
---
::product
#description

Combined digital sensor for temperature and humidity.

A wireless version: [WB-MSW-ZIGBEE v.4](https://wirenboard.com/ru/product/wb-msw4-zigbee/).


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-msw4-th/wb-msw4-th-1.png"
  width="500px"
  float="right"
}

- 2 measured parameters in one housing.
- Heated temperature and humidity sensor for operation in high humidity conditions.
- Fast and simple integration into the automation and monitoring system.
- It is possible to apply your company logo.

Supports Fast Modbus, allowing motion sensor events to be instantly delivered to the Wiren Board controller.
::

::product-section{title="Hardware"}
:photo{
  src="wb-msw4-th/wb-msw4-th-2.png"
  width="500px"
  float="right"
}

Measured parameters:

- Temperature: -40°С…+80°С (±0.5°С).
- Humidity: 0…95% (±3%).
- Two-color indication controlled via Modbus.
- Sensor heating for operation in high humidity conditions.
- Supply voltage: 9 to 28 VDC.
- Power consumption: from 0.5 to 4 W.
- Interface: RS-485, Modbus RTU.
- Plastic case with the possibility of mounting on a socket box (80x80x19 mm).
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-msw4-th/wb-msw4-th-3.png"
  width="500px"
  float="right"
}

All Wiren Board devices, in addition to the standard Modbus RTU, can work with its extension [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which adds new features:

- instant polling of input states and measured values via events;
- quick search for devices connected to the controller;
- resolving address collisions on the bus.

Additional features are enabled automatically — if the device supports the extension, the controller driver will use Fast Modbus. If the device does not support the extension, it will operate over standard Modbus RTU.
::

:include{path="/catalog/includes/quality_control"}

::product-section{title="Setup"}
:photo{
  src="wb-msw4-th/wb-msw4-th-4.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can configure the device in the web interface using a mouse:

- Enable or disable parameter polling.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the sensor can be configured via RS-485 by writing values to Modbus registers. The register table is open, well-documented, and available on our website.
::

::product-section{title="Readings"}
:photo{
  src="wb-msw4-th/wb-msw4-th-5.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, measured values are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. Only enabled channels are shown in the device card.

The module also transmits all data over Modbus RTU (RS-485), which can be read by any equipment or software that supports the protocol: third-party controllers, HMI panels, or SCADA.
::


::
