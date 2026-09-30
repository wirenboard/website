---
article: "WB-MAI2-mini/CC v.3"
cover: "wb-mai2-mini-cc/cover.png"
catalogCover: "wb-mai2-mini-cc/catalog-cover.png"
images: [
  ["wb-mai2-mini-cc/cover.png"],
  ["wb-mai2-mini-cc/wb-mai2-mini-cc-5.jpg"],
  ["wb-mai2-mini-cc/wb-mai2-mini-cc-6.jpg"],
  ["wb-mai2-mini-cc/wb-mai2-mini-cc-7.png"],
]
documentation: "https://wirenboard.com/wiki/WB-MAI2-mini/CC_v.3_4-20mA_Modbus_Analog_Inputs"
meta: "RS-485 Modbus RTU Analog input module"
keywords: "RS-485, Modbus RTU"
---
::product
#description

A dual-channel analog input module (0–20 mA). Designed for installation in junction boxes and cable ducts. Communication interface – Modbus RTU.

Used for connecting sensors with interface 0–20 mA and 4–20 mA in dispatching systems for engineering infrastructure and process control systems.


#info

## KEY FEATURES

::product-section{title="Advantages"}
:photo{
  src="wb-mai2-mini-cc/wb-mai2-mini-cc-1.png"
  width="500px"
  float="right"
}

- compatible with both 0–20 mA and 4–20 mA sensors
- can be installed in junction boxes and cable ducts
- channel filtering with configurable averaging time to suppress sharp current spikes caused by interference
- compatible with third-party controllers
- wide power supply range: 9…28 V
- quick and easy integration with automation and monitoring systems
- technical support available on the portal
- complete documentation
- optional branding with your company logo
::

::product-section{title="Hardware"}
:photo{
  src="wb-mai2-mini-cc/wb-mai2-mini-cc-2.jpg"
  width="500px"
  float="right"
}

Specifications:

- power consumption: 0.06 W
- number of channels: 2
- current measurement range: 0–20 mA
- input resistance: 49.9 Ohm
- current measurement accuracy: ±(0.1 mA + 1.5%)
- power supply voltage: 9…28 V
- operating temperature: −40…+80 °C
- interface: RS-485, Modbus RTU
- dimensions: 34 x 20 x 17 mm
::

:include{path="/catalog/includes/quality_control"}

::product-section{title="Configuration"}
:photo{
  src="wb-mai2-mini-cc/wb-mai2-mini-cc-3.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, inputs can be enabled or disabled via the web interface with a mouse click.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with third-party equipment, the module can be configured over RS-485 by writing values to Modbus registers. The register table is open, well-documented, and available on our website.
::

::product-section{title="Reading values"}
:photo{
  src="wb-mai2-mini-cc/wb-mai2-mini-cc-4.png"
  width="500px"
  float="right"
}

If used with a Wiren Board controller, measured values are displayed in the controller’s web interface and can be used in automation scenarios or transferred to a higher-level system. Only enabled channels are shown in the device card.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any device or software that supports this protocol: third-party controllers, HMI panels, or SCADA systems.
::


::
