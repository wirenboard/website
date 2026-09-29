---
article: "WB7.4-ALL"
cover: "wiren-board-7/cover.png"
catalogCover: "wiren-board-7/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/Wiren_Board_7.4"
---
::product
#description

**We recommend using the newer controller [Wiren Board 8](/en/product/wiren-board-8_5/) in new projects.**

Wiren Board 7 is a universal modular controller for automation, powered by the company’s own open-source Linux-based software.

The controller is used in the tasks of monitoring server and climatic equipment, dispatching and collecting data from metering devices, as a heart of a smart home and industrial automation.


#info

## MAIN FEATURES

::product-section{title="Hardware and software"}
:photo{
  src="wiren-board-7/wiren-board-7-1.png"
  width="500px"
  float="right"
}

The controller's base configuration includes:

- 1.2 GHz Quad Core ARM Cortex A7 industrial-grade CPU
- 1 GB DDR3 RAM
- 8 GB industrial-grade eMMC Flash
- Dedicated secure key storage

You can optionally configure the controller with 2 GB DDR3 RAM and 64 GB eMMC.

The controller runs Debian Linux 11 with kernel 5.10, providing extensive opportunities for installing third-party software.

Preinstalled software allows you to configure the controller and connected devices, create automation scripts, store measurement archives, and view data. [More about the controller software](https://wirenboard.com/en/pages/programmirovanie-kontrollerov/).
::

::product-section{title="Interfaces and Communications"}
:photo{
  src="wiren-board-7/wiren-board-7-2.png"
  width="500px"
  float="right"
}

The controller's base configuration includes:

- 1 × microSD slot, up to 60 MB/s
- 2 × Ethernet 10/100
- 1 × USB Host
- Wi-Fi 802.11n (AP, client)
- Bluetooth 4.0
- 2 × RS-485
- 1 × CAN, multiplexed with one of RS-485
- 2 × 1-Wire / discrete inputs
- 4 × discrete / analog inputs / outputs ("open collector")

With extension modules you can add extra interfaces:

- 4G (LTE) dual SIM-card modem, two nano SIM cards
- Z-Wave and Zigbee
- PoE 802.3af, 802.3at or Passive PoE
::

::product-section{title="Supported protocols"}
:photo{
  src="wiren-board-7/wiren-board-7-3.png"
  width="500px"
  float="right"
}

The controller supports a wide range of protocols and devices:

- Modbus RTU – relays, dimmers, I/O modules;
- Somfy, WINDECO, DOOYA, AKKO – electric curtains;
- GOST IEC 61107, DLMS/COSEM, SPODES (GOST R 58940-2020), Mercury – electricity meters;
- Pulsar, IVTM – water and heat meters and sensors;
- 1-Wire – temperature sensors like DS18B20;
- Wi-Fi, Bluetooth – sensors, gateways, and devices;
- Modbus TCP, MQTT, OPC UA, SNMP, Zabbix API – data exchange with other controllers, servers, and SCADA systems;
- Danfoss, Carel, Eliwell – refrigeration controllers such as Danfoss EKC 202B/D, ERC 21x, and Carel BASIC/EASY;
- KNX – integration with existing KNX systems (with add-on modules);
- OpenTherm and eBUS – electric and gas boilers (with add-on modules);
- Z-Wave, Zigbee, DALI – sensors, actuators, and lighting devices (with add-on modules);

[Full list of supported devices and protocols](https://wirenboard.com/wiki/Supported_devices)
::

:include{path="/catalog/includes/fast_modbus"}

::product-section{title="Wiren Board Cloud"}
:photo{
  src="wiren-board-7/wiren-board-7-5.png"
  width="500px"
  float="right"
}

All Wiren Board controllers are fully autonomous and do not require an internet connection. However, you can optionally connect them to the Wiren Board Cloud remote management platform and gain:

- Remote access to the web interface and SSH from any browser on a computer or smartphone;
- Data archive in Grafana — build custom dashboards with charts, indicators, and analytics;
- A unified controller list showing current statuses, serial numbers, firmware versions, and more — helpful for inventory and maintenance;
- Multi-user access and grouping by organizations — convenient for integrators and enterprises managing multiple clients.

An on-premise version is available for deployment on your own infrastructure.

[Full feature description](/en/pages/cloud/).
::

::product-section{title="Features"}
:photo{
  src="wiren-board-7/wiren-board-7-6.jpg"
  width="500px"
  float="right"
}

The controller is built with industrial-grade components and can operate continuously in ambient temperatures from -40 to +75°C.

It features port overvoltage protection and a watchdog timer, making it suitable for applications requiring high reliability.

The DIN-rail housing and wide power supply range (9–48 V) ensure easy integration into new or existing automation cabinets.

The open platform architecture allows you to install third-party software or develop your own solutions.

A broad range of supported modules and communication protocols enables deployment of scalable, fault-tolerant automation systems.
::

:include{path="/catalog/includes/quality_control"}

:include{path="/catalog/includes/controller_text_dashboards"}

:include{path="/catalog/includes/controller_graphic_dashboards"}

:include{path="/catalog/includes/controller_data_archive"}

::product-section{title="Automation scripts"}
:photo{
  src="wiren-board-7/wiren-board-7-10.png"
  width="500px"
  float="right"
}

The Wiren Board controller firmware includes a powerful scripting tool based on a JavaScript-like language — WB-Rules.

You can automate any actions, such as controlling lighting, heating, or production processes.

Scripts can be written and edited directly within the web interface, with built-in console debugging support.
::

::product-section{title="Scenarios"}
:photo{
  src="wiren-board-7/wiren-board-7-11.png"
  width="500px"
  float="right"
}

A visual tool in the web interface that allows for easy configuration of system behavior without writing code.

Scenarios are suitable for quickly solving standard tasks.
::


::
