---
article: "WB-MSW4-ZIGBEE"
cover: "wb-msw4-zigbee/cover.png"
catalogCover: "wb-msw4-zigbee/catalog-cover.png"
images: [
  ["wb-msw4-zigbee/cover.png"],
  ["wb-msw4-zigbee/wb-msw4-zigbee-9.png"],
  ["wb-msw4-zigbee/wb-msw4-zigbee-10.png"],
  ["wb-msw4-zigbee/wb-msw4-zigbee-11.png"],
  ["wb-msw4-zigbee/wb-msw4-zigbee-12.png"],
  ["wb-msw4-zigbee/wb-msw4-zigbee-13.jpg"],
  ["wb-msw4-zigbee/wb-msw4-zigbee-14.png"]
]
documentation: "https://wirenboard.com/wiki/WB-MSW-ZIGBEE_v.4_Sensor"
meta: "WB-MSW4-ZIGBEE"
keywords: "WB-MSW4-ZIGBEE"
---
::product
#description

Combined digital sensor for temperature, humidity, light, motion, noise, CO2 and volatile organic compounds. Has a built-in receiver and transmitter of IR signals for controlling household appliances. Uses the ZigBee wireless protocol for data transmission.

It is used to control climate parameters as part of ZigBee networks.

Connects to the Wiren Board controller via ZigBee or RS-485. The connection method is selected by a switch on the board; in all cases, the device requires external power. When using ZigBee, you need to install the [WBE2R-R-ZIGBEE-V.2](https://wirenboard.com/ru/product/WBE2R-R-ZIGBEE-v2) adapter into the controller.

Supported in zigbee2mqtt from version 1.32.2 and in Sprut.hub.


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-msw4-zigbee/wb-msw4-zigbee-1.png"
  width="500px"
  float="right"
}

- 8 measured parameters in one housing.
- Work via the ZigBee wireless protocol or via RS-485 using the Modbus RTU protocol
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
  src="wb-msw4-zigbee/wb-msw4-zigbee-2.png"
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

::product-section{title="ZigBee technology"}
:photo{
  src="wb-msw4-zigbee/wb-msw4-zigbee-3.jpeg"
  width="500px"
  float="right"
}

ZigBee technology is designed for use in wireless sensor networks, home automation and industrial monitoring and control systems. ZigBee networks do not require frequency resolution, provide high noise immunity and low power consumption. Thanks to their cellular topology, they have the ability to self-organize and self-heal.

The built-in ZigBee module allows you to use the sensor when it is not possible to lay an RS-485 bus. And also acts as ZigBee router and can be used to expand the network in wireless smart homes.
::

::product-section{title="Management devices via IR"}
:photo{
  src="wb-msw4-zigbee/wb-msw4-zigbee-4.png"
  width="500px"
  float="right"
}

WB-MSW-ZIGBEE v.4 has an infrared transceiver for recording signals from IR remote controls of household devices and further control of household appliances: air conditioners, TVs, thermal curtains etc.

The sensor's non-volatile memory can store up to 80 IR commands. Commands are recorded using the remote control equipment.

Working with IR commands is described in detail in documentation.
::

::product-section{title="Level control CO2"}
:photo{
  src="wb-msw4-zigbee/wb-msw4-zigbee-5.jpg"
  width="500px"
  float="right"
}

CO2 (carbon dioxide) is a colorless gas with a slight sour odor, heavier than air. It is always present in the air and is harmless to humans in small quantities. CO2 does not support breathing, so at high concentrations it negatively affects a person’s condition and can lead to death from suffocation.

WB-MSW-ZIGBEE v.4 uses a non-dispersive infrared (NDIR) sensor to measure CO2 concentration. It allows measurements with an error of 100 ppm + 5% of the measured value.
::

::product-section{title="VOC control"}
:photo{
  src="wb-msw4-zigbee/wb-msw4-zigbee-6.jpg"
  width="500px"
  float="right"
}

Volatile organic substances (VOCs, VOC) are substances released into the atmosphere in the form of gases: evaporation of varnishes/paints and elements of interior decoration (phenol, formaldehyde, toluene, styrene), alcohols, benzene, rotting vegetables, gases emitted by humans, household gas. High concentrations of hazardous VOCs pose a threat to human life and health.

The VOC sensor determines the total concentration of these substances with a typical error of ±15%.
::

:include{path="/catalog/includes/quality_control"}

::product-section{title="Setup"}
:photo{
  src="wb-msw4-zigbee/wb-msw4-zigbee-7.png"
  width="500px"
  float="right"
}

You can configure the device in the zigbee2mqtt web interface, as well as by writing JSON commands to the MQTT-topics of the device using MQTT Explorer or wb-rules.

If the sensor is connected via Modbus RTU, then the configuration is performed in the controller’s web interface.
::

::product-section{title="Reading and control"}
:photo{
  src="wb-msw4-zigbee/wb-msw4-zigbee-8.png"
  width="500px"
  float="right"
}

The sensor can be used with the Wiren Board controller and other devices with SprutHub or zigbee2mqtt 1.32.2.

If a Wiren Board controller is used, the measured values are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system.

The sensor can also transmit data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::

:include{path="/catalog/includes/certificates"}


::
