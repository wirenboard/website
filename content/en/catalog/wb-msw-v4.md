---
article: "WB-MSW4"
cover: "wb-msw-v4/cover.png"
catalogCover: "wb-msw-v4/catalog-cover.png"
images: [
  ["wb-msw-v4/cover.png"],
  ["wb-msw-v4/wb-msw-v4-9.png"],
  ["wb-msw-v4/wb-msw-v4-10.jpg"],
  ["wb-msw-v4/wb-msw-v4-11.jpg"],
  ["wb-msw-v4/wb-msw-v4-12.png"],
  ["wb-msw-v4/wb-msw-v4-13.jpg"],
  ["wb-msw-v4/wb-msw-v4-14.png"],
  ["wb-msw-v4/wb-msw-v4-15.png"],
  ["wb-msw-v4/wb-msw-v4-16.png"],
  ["wb-msw-v4/wb-msw-v4-17.png"],
  ["wb-msw-v4/wb-msw-v4-18.png"],
]
documentation: "https://wirenboard.com/wiki/WB-MSW_v.4_Modbus_Sensor"
meta: "RS-485, Modbus RTU Hybrid wall-mounted sensor"
keywords: "RS-485, Modbus RTU"
---
::product
#description

Combined digital sensor for temperature, humidity, light, motion, noise, CO2 and volatile organic compounds. Has a built-in receiver and transmitter of IR signals for controlling household appliances. Designed for climate control.

There are wireless version [WB-MSW-ZIGBEE v.4](https://wirenboard.com/product/wb-msw4-zigbee/).

WB-MSW v.4 is included in the Register of the State System for Ensuring the Uniformity of Measurements of the Republic of Kazakhstan. Reg. No. KZ.02.03.024533-2026/87443-22.


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-msw-v4/wb-msw-v4-1.png"
  width="500px"
  float="right"
}

- 8 measured parameters in one housing.
- Heated temperature and humidity sensor for operation in high humidity conditions.
- Auto calibration of CO2 and VOC sensors.
- Controlled sound and light indication.
- Powerful IR transmitter with a range of up to 10 m.
- Paintable body.
- You can select the options you need.
- Fast and simple integration into the automation and monitoring system.
- It is possible to apply your company logo.

Supports Fast Modbus, allowing motion sensor events to be instantly delivered to the Wiren Board controller.
::

::product-section{title="Hardware"}
:photo{
  src="wb-msw-v4/wb-msw-v4-2.png"
  width="500px"
  float="right"
}

Measured parameters:

- Temperature: -40°С…+80°С (±0.5°С).
- Humidity: 0…95% (±3%).
- Illumination: 0.02…145000 lux.
- Noise level: 39…90 dBA.
- CO2 concentration: 400…10000 ppm.
- VOC concentration: 0…60000 ppb.
- Movement: up to 8 m, angle up to 120°.
- Transmission of IR commands: up to 10 m.
- Controlled buzzer.
- Two-color indication controlled via Modbus.
- Sensor heating for operation in high humidity conditions.

- Supply voltage: 9 to 28 VDC.
- Power consumption: from 0.5 to 4 W.
- Interface: RS-485, Modbus RTU.
- Plastic case with the possibility of mounting on a socket box (80x80x19 mm).
::

::product-section{title="Management devices via IR"}
:photo{
  src="wb-msw-v4/wb-msw-v4-3.png"
  width="500px"
  float="right"
}

WB-MSW v.4 has an infrared transceiver for recording signals from IR remote controls of household devices and further control of household appliances: air conditioners, TVs, thermal curtains etc.

The sensor's non-volatile memory can store up to 80 IR commands. Commands are recorded using the remote control equipment.

Working with IR commands is described in detail in documentation.
::

::product-section{title="Level control CO2"}
:photo{
  src="wb-msw-v4/wb-msw-v4-4.jpg"
  width="500px"
  float="right"
}

CO2 (carbon dioxide) is a colorless gas with a slight sour odor, heavier than air. It is always present in the air and is harmless to humans in small quantities. CO2 does not support breathing, so at high concentrations it negatively affects a person’s condition and can lead to death from suffocation.

WB-MSW v.4 uses a non-dispersive infrared (NDIR) sensor to measure CO2 concentration. It allows measurements with an error of 100 ppm + 5% of the measured value.
::

::product-section{title="VOC control"}
:photo{
  src="wb-msw-v4/wb-msw-v4-5.jpg"
  width="500px"
  float="right"
}

Volatile organic substances (VOCs, VOC) are substances released into the atmosphere in the form of gases: evaporation of varnishes/paints and elements of interior decoration (phenol, formaldehyde, toluene, styrene), alcohols, benzene, rotting vegetables, gases emitted by humans, household gas. High concentrations of hazardous VOCs pose a threat to human life and health.

The VOC sensor determines the total concentration of these substances with a typical error of ±15%.
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-msw-v4/wb-msw-v4-6.png"
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

::product-section{title="Setup"}
:photo{
  src="wb-msw-v4/wb-msw-v4-7.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- configure auto-calibration of the CO2 sensor and self-heating compensation,
- set the averaging time for noise and motion,
- enable or disable parameter polling.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the sensor can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available on our website.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-msw-v4/wb-msw-v4-8.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the measured values are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. Only the included channels are displayed in the device card.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
