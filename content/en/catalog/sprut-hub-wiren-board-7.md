---
article: "WB7-1G-SH"
cover: "sprut-hub-wiren-board-7/cover.jpg"
catalogCover: "sprut-hub-wiren-board-7/catalog-cover.jpg"
documentation: "https://wirenboard.com/wiki/Wiren_Board_7"
---
::product
#description

Wiren Board 7 is a universal automation controller powered by open-source software.

The controller is used in the tasks of monitoring server and climatic equipment, dispatching and collecting data from metering devices, as a heart of a smart home and industrial automation.

This is a customized version of [Wiren Board 7](/en/product/wiren-board-7/).


#info

## MAIN FEATURES

::product-section{title="Hardware and software"}
:photo{
  src="sprut-hub-wiren-board-7/sprut-hub-wiren-board-7-1.png"
  width="500px"
  float="right"
}

Basic configuration:

- 1.2 GHz Quad Core ARM Cortex A7 industrial-grade CPU
- 1 GB DDR3 RAM
- 8 GB Flash
- Dedicated secure key storage

When ordering the controller, you can choose a version with 2 GB DDR3 RAM and 64 GB Flash.

The controller uses the open operating system Debian Linux 9, kernel 5.10, which provides ample opportunities for installing third-party software.

The built-in software allows configuring the controller and devices connected to it, writing automation scripts, storing and viewing the archive of measurements.
::

::product-section{title="Interfaces and Communications"}
:photo{
  src="sprut-hub-wiren-board-7/sprut-hub-wiren-board-7-2.png"
  width="500px"
  float="right"
}

- 1 × microSD slot, up to 25 MB / s
- 2 × Ethernet 10/100
- 1 × USB Host
- Wi-Fi 802.11n (AP, client)
- Bluetooth 4.0
- 2 × RS-485
- 1 × CAN, multiplexed with one of RS-485
- 2 × 1-Wire / discrete inputs
- 3 × discrete / analog inputs / outputs "open collector"
- 1 × discrete input / output "open collector"

Additionally, using extension modules:

- NBIoT and 4G (LTE) dual SIM-card modems
- Z-Wave and Zigbee
::

::product-section{title="Supported protocols"}
:photo{
  src="sprut-hub-wiren-board-7/sprut-hub-wiren-board-7-3.jpg"
  width="500px"
  float="right"
}

In its basic configuration, the controller supports a large number of protocols:

- Modbus RTU - a wide range of devices: relays, dimmers, I / O modules
- Somfy, WINDECO, DOOYA, AKKO - electric curtains
- GOST IEC 61107, DLMS / COSEM, SPODES (GOST R 58940-2020), Mercury, Milur - electricity meters
- Pulsar, IVTM - water and heat meters and sensors
- 1-Wire - temperature sensors DS18B20
- Wi-Fi, Bluetooth - sensors, gateways and devices
- Modbus TCP, MQTT, SNMP, Zabbix API - data exchange with other controllers, servers and SCADA
- Danfoss / Carel - refrigeration controllers Danfoss EKC 202B / D, Danfoss ERC 21x, Carel BASIC / EASY

With add-on modules, you can add support for:

- KNX - the controller can be integrated into existing KNX integrations
- OpenTherm and eBUS - electric and gas boilers
- Z-Wave, Zigbee - a wide range of sensors and actuators

[List of supported devices](https://wirenboard.com/wiki/Supported_devices)
::

::product-section{title="Features"}
:photo{
  src="sprut-hub-wiren-board-7/sprut-hub-wiren-board-7-4.jpg"
  width="500px"
  float="right"
}

The controller is made according to an industrial process technology and can operate for a long time at air temperatures from -40 to +75 ° C. It is often used in outdoor unheated billboards.

Port overvoltage protection and watchdog timer allow the controller to be used for solutions requiring reliable operation.

The DIN-rail housing and the supply voltage range from 9 to 48 volts will help you integrate the controller into an existing automation panel or assemble a new one without any problems.

The open platform makes it possible to install third-party software, or develop your own.

A wide range of external modules will help you build a fault-tolerant automation system for any task, and support for various data transfer protocols will help you integrate the controller into an existing one.
::

:include{path="/catalog/includes/controller_text_dashboards"}

:include{path="/catalog/includes/controller_graphic_dashboards"}

:include{path="/catalog/includes/controller_data_archive"}

:include{path="/catalog/includes/controller_automation_scripts"}


::
