---
article: "WB7.4-ALL"
cover: "wiren-board-7/cover.png"
catalogCover: "wiren-board-7/catalog-cover.png"
images: [
  ["wiren-board-7/cover.png"],
  ["wiren-board-7/wiren-board-7-12.png"],
  ["wiren-board-7/wiren-board-7-13.png"],
  ["wiren-board-7/wiren-board-7-14.png"],
  ["wiren-board-7/wiren-board-7-15.png"],
  ["wiren-board-7/wiren-board-7-16.png"],
  ["wiren-board-7/wiren-board-7-17.png"],
  ["wiren-board-7/wiren-board-7-18.png"],
  ["wiren-board-7/wiren-board-7-19.png"],
  ["wiren-board-7/wiren-board-7-20.png"]
]
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

- 1.2 GHz Quad Core ARM Cortex A7 industrial-grade CPU
- 1 GB DDR3 RAM
- 8 GB industrial-grade eMMC Flash
- Dedicated secure key storage

You can optionally configure the controller with 2 GB DDR3 RAM and 64 GB eMMC.

The controller runs Debian Linux 11 with kernel 5.10, providing extensive opportunities for installing third-party software.

Preinstalled software allows you to configure the controller and connected devices, create automation scripts, store measurement archives, and view data.
::

::product-section{title="Interfaces and Communications"}
:photo{
  src="wiren-board-7/wiren-board-7-2.png"
  width="500px"
  float="right"
}

- 1 × microSD slot, up to 60 MB/s
- 2 × Ethernet 10/100 (1 × PoE)
- 1 × USB Host
- Wi-Fi 802.11n (AP, client)
- Bluetooth 4.0
- 2 × RS-485
- 1 × CAN, multiplexed with one of RS-485
- 2 × 1-Wire / discrete inputs
- 4 × discrete / analog inputs / outputs ("open collector")

Additionally, with extension modules:

- 4G (LTE) dual SIM-card modem
- Z-Wave and Zigbee
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
- IEC 61107, DLMS/COSEM – electricity meters;
- 1-Wire – temperature sensors like DS18B20;
- Wi-Fi, Bluetooth – sensors, gateways, and devices;
- Modbus TCP, MQTT, OPC UA, SNMP, Zabbix API – data exchange with other controllers, servers, and SCADA systems;
- Danfoss, Carel, Eliwell – refrigeration controllers such as Danfoss EKC 202B/D, ERC 21x, and Carel BASIC/EASY;
- KNX – integration with existing KNX systems (with add-on modules);
- OpenTherm and eBUS – electric and gas boilers (with add-on modules);
- Z-Wave, Zigbee, DALI – sensors, actuators, and lighting devices (with add-on modules);
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wiren-board-7/wiren-board-7-4.png"
  width="500px"
  float="right"
}

All Wiren Board devices, in addition to standard Modbus RTU, can operate with its extension [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which adds new capabilities:

- instant polling of input states and measured values via events;
- quick discovery of devices connected to the controller;
- automatic resolution of address conflicts on the bus.

These features are enabled automatically — if the device supports Fast Modbus, the controller will use it. Otherwise, it falls back to standard Modbus RTU.
::

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

[Full feature description](/en/contents/cloud/).
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

::product-section{title="Text dashboards"}
:photo{
  src="wiren-board-7/wiren-board-7-7.png"
  width="500px"
  float="right"
}

The primary building block of the text information panel is a widget. It allows you to combine data from different sources in a single view.

The dashboard is adaptive and adjusts to the screen size of mobile devices.
::

::product-section{title="Graphic dashboards"}
:photo{
  src="wiren-board-7/wiren-board-7-8.png"
  width="500px"
  float="right"
}

You can create interactive graphic dashboards using SVG drawings.

Data can be displayed in text elements, while the visibility and design of graphical elements can be customized. You can also assign reactions to user actions — like turning on a light or deactivating an alarm.

The controller’s web interface includes a visual editor to simplify dashboard setup.
::

::product-section{title="Data archive"}
:photo{
  src="wiren-board-7/wiren-board-7-9.png"
  width="500px"
  float="right"
}

All data received by the controller is stored in an archive with a configurable size.

You can build historical graphs for multiple channels simultaneously. Interactions like zooming and cursor-based measurements are supported.

Archived data can be exported to CSV format for analysis using external tools.
::

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
