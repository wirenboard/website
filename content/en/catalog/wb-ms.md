---
article: "WB-MS"
cover: "wb-ms/cover.png"
catalogCover: "wb-ms/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/index.php/WB-MS_Modbus_Sensor"
meta: "Combined sensor with RS-485, Modbus RTU"
keywords: "RS-485, Modbus RTU"
---
::product
#description

Combined digital sensor for temperature, humidity, light and volatile organic compounds (VOC). It has two inputs that can be used to connect external 1-wire sensors like [DS18B20](https://wirenboard.com/en/product/1wire-DS18B20/), pulse counting or reading discrete signals.

Applicable to control climate parameters in data centers, server rooms, warehouses, technical rooms, as well as inside automation cabinets and other equipment.

WB-MS v.2 is included in the Register of the State System for Ensuring the Uniformity of Measurements of the Republic of Kazakhstan. Reg. No. KZ.02.03.024533-2026/87443-22.


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-ms/wb-ms-1.png"
  width="500px"
  float="right"
}

- 4 measured parameters in one housing.
- Is a measuring instrument for temperature and humidity.
- Connecting 1-wire sensors.
- Connection of discrete and counting signals.
- The housing can be mounted on a 35 mm DIN rail or through holes on any surface.
- Heating the temperature and humidity sensor to remove condensation.
- Adjustable temperature compensation.
- Quick and easy integration into the automation and monitoring system.
::

::product-section{title="Hardware"}
:photo{
  src="wb-ms/wb-ms-2.png"
  width="500px"
  float="right"
}

Measured parameters:

- Temperature: -40°C...+80°C (+-0.5C).
- Humidity: 5...95% (+-3%).
- Illumination: 10...10,000 lux (±20%).
- VOC concentration: 0…60000 ppb.

- Supply voltage: 9…28 VDC.
- Power consumption: 0.1 W.
- Interface: RS-485, Modbus RTU.
- Plastic housing with DIN rail mounting and mounting holes (84x46x29 mm).
::

:include{path="/catalog/includes/voc_control"}

:include{path="/catalog/includes/quality_control"}

::product-section{title="Setup"}
:photo{
  src="wb-ms/wb-ms-4.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- configure auto-calibration of the VOC sensor and temperature compensation,
- configure polling time,
- enable or disable parameter polling.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the dimmer can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available on our website.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-ms/wb-ms-5.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the measured values are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. Only the included channels are displayed in the device card.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
