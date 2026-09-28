---
article: "WB-MAI2-mini / СС"
cover: "wb-mai2-mini-cc-v1/cover.png"
catalogCover: "wb-mai2-mini-cc-v1/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/index.php/WB-MAI2_mini"
meta: "RS-485, Modbus RTU Analog input module"
keywords: "RS-485, Modbus RTU"
---
::product
#description

Two-channel analog input module 0-20 mA. Installed injunction boxes and cable channels, connected via Modbus RTU.

Used to connect sensors with 0-20 and 4-20 mA output in dispatch systems for engineering systems and process control.


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-mai2-mini-cc-v1/wb-mai2-mini-cc-v1-1.png"
  width="500px"
  float="right"
}

- You can connect 0-20 mA and 4-20 mA sensors.
- Can be mounted in junction boxes and cable ducts.
- A filter for channels with an adjustable averaging time allows you to filter out sharp current surges caused by interference.
- Can be used with controllers from other manufacturers.
- Wide range of supply voltages (9-28 V).
- Fast and simple integration into the automation and monitoring system.
::

::product-section{title="Hardware"}
:photo{
  src="wb-mai2-mini-cc-v1/wb-mai2-mini-cc-v1-2.png"
  width="500px"
  float="right"
}

Specifications:

- Power consumption: 0.06 W.
- Number of channels: 2.
- Current measurement: 0-20 mA.
- Input impedance: 49.9 ohms.
- Current measurement error: ±(0.1 mA + 1.5%).

- Supply voltage: 9…28 V.
- Operating temperature: 0…+60 °C.
- Interface: RS-485, Modbus RTU.
- Overall dimensions: 57×18×12 mm.
::

:include{path="/catalog/includes/quality_control"}

::product-section{title="Setup"}
:photo{
  src="wb-mai2-mini-cc-v1/wb-mai2-mini-cc-v1-3.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- enable or disable input polling,
- adjust the exchange speed.

When used with other equipment, the device can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available on our website.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-mai2-mini-cc-v1/wb-mai2-mini-cc-v1-4.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the measured values are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. Only the included channels are displayed in the device card.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
