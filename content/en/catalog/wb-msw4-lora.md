---
article: "WB-MSW4-LORA"
cover: "wb-msw4-lora/cover.png"
catalogCover: "wb-msw4-lora/catalog-cover.png"
images: [
  ["wb-msw4-lora/cover.png"],
  ["wb-msw4-lora/wb-msw4-lora-9.png"],
  ["wb-msw4-lora/wb-msw4-lora-10.png"],
  ["wb-msw4-lora/wb-msw4-lora-11.jpg"],
  ["wb-msw4-lora/wb-msw4-lora-12.png"],
  ["wb-msw4-lora/wb-msw4-lora-13.png"]
]
documentation: "https://wirenboard.com/wiki/WB-MSW-LORA_v.4_Sensor"
---
::product
#description

**Discontinued** due to low demand. As a replacement, we suggest using the model [WB-MSW-ZIGBEE v.4](https://wirenboard.com/product/wb-msw4-zigbee/). Don’t put it into projects; leftovers are being sold out in the warehouse. The model is available for order within three months.

Combined digital sensor for temperature, humidity, light, motion, noise, CO2 and volatile organic compounds. Has a built-in receiver and transmitter of IR signals for controlling household appliances. Uses the LoRa wireless protocol to transmit data.

It is used to measure climate parameters in difficult radio environments, for example, basements with thick walls, remote warehouses and change houses, rooms on different floors of a building.

Connects to the Wiren Board controller via LoRa or RS-485. The connection method is selected by a switch on the board; in all cases, the device requires external power. When using LoRa, you need to install the [WBE2R-R-LORA](https://wirenboard.com/product/WBE2R-R-LORA/) adapter into the controller.


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-msw4-lora/wb-msw4-lora-1.png"
  width="500px"
  float="right"
}

- 8 measured parameters in one housing.
- Wireless transmission of readings over a distance of up to 1.5 km
- Heated temperature and humidity sensor for operation in high humidity conditions.
- Auto calibration of CO2 and VOC sensors.
- Controlled sound and light indication.
- Powerful IR transmitter with a range of up to 10 m.
- Paintable body.
- You can select the options you need.
- Fast and simple integration into the automation and monitoring system.
- It is possible to apply your company logo.
::

::product-section{title="Hardware"}
:photo{
  src="wb-msw4-lora/wb-msw4-lora-2.png"
  width="500px"
  float="right"
}

Measured parameters:

- Temperature: -40°C...+80°C (±0.5°C).
- Humidity: 0…95% (±3%).
- Illumination: 0.02…145000 lux.
- Noise level: 39...90 dBA.
- CO2 concentration: 400...10000 ppm.
- VOC concentration: 0...60000 ppb.
- Movement: up to 8 m, angle up to 120°.
- Transmission of IR commands: up to 10 m.
- Controlled buzzer.
- Two-color indication controlled via Modbus.
- Sensor heating for operation in high humidity conditions.

- Supply voltage: 9...28 VDC.
- Power consumption: 0.5...4 W.
- Interface: RS-485, Modbus RTU.
- Plastic case with the possibility of mounting on a socket box (80x80x19 mm).
::

::product-section{title="LoRa technology"}
:photo{
  src="wb-msw4-lora/wb-msw4-lora-3.jpeg"
  width="500px"
  float="right"
}

For data transmission, LoRa wireless data transmission technology is used with a frequency of 869.125 MHz, which provides a range of up to 1.5 km in open areas, as well as high signal penetration through obstacles.

Due to the high signal penetration, the sensor can be installed in difficult conditions:

- basements with thick walls;
- remote warehouses and cabins;
- rooms on different floors of the building.

The data transfer rate in the LoRa network is 2.4 kbit/s, and typical transmission time of one Modbus packet— approximately 0.3 s. This is quite sufficient for climate control tasks.
::

::product-section{title="Management devices via IR"}
:photo{
  src="wb-msw4-lora/wb-msw4-lora-4.jpeg"
  width="500px"
  float="right"
}

WB-MSW-LORA v.4 has an infrared transceiver for recording signals from IR remote controls of household devices and further control of household appliances: air conditioners, TVs, thermal curtains etc.

The sensor's non-volatile memory can store up to 80 IR commands. Commands are recorded using the remote control equipment.

Working with IR commands is described in detail in documentation.
::

::product-section{title="Level control CO2"}
:photo{
  src="wb-msw4-lora/wb-msw4-lora-5.jpg"
  width="500px"
  float="right"
}

CO2 (carbon dioxide) is a colorless gas with a slight sour odor, heavier than air. It is always present in the air and is harmless to humans in small quantities. CO2 does not support breathing, so at high concentrations it negatively affects a person’s condition and can lead to death from suffocation.

WB-MSW-LORA v.4 uses a non-dispersive infrared (NDIR) sensor to measure CO2 concentration. It allows measurements with an error of 100 ppm + 5% of the measured value.
::

::product-section{title="VOC control"}
:photo{
  src="wb-msw4-lora/wb-msw4-lora-6.jpg"
  width="500px"
  float="right"
}

Volatile organic substances (VOCs, VOC) are substances released into the atmosphere in the form of gases: evaporation of varnishes/paints and elements of interior decoration (phenol, formaldehyde, toluene, styrene), alcohols, benzene, rotting vegetables, gases emitted by humans, household gas. High concentrations of hazardous VOCs pose a threat to human life and health.

The VOC sensor determines the total concentration of these substances with a typical error of ±15%.
::

::product-section{title="Setup"}
:photo{
  src="wb-msw4-lora/wb-msw4-lora-7.png"
  width="500px"
  float="right"
}

When connecting the sensor to the Wiren Board controller via RS-485, you can use the mouse in the web interface:

- configure auto-calibration of the CO2 sensor and self-heating compensation,
- set the averaging time for noise and motion,
- enable or disable parameter polling.

When used with other equipment, the sensor can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available on our website.
::

::product-section{title="Reading and control"}
:photo{
  src="wb-msw4-lora/wb-msw4-lora-8.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the measured values are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. Only the included channels are displayed in the device card.

The module also transmits all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
