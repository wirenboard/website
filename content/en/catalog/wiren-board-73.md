---
article: "WB7-ALL"
cover: "wiren-board-73/cover.png"
catalogCover: "wiren-board-73/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/Wiren_Board_7.3"
meta: "Automation controller Wiren Board 7"
keywords: "Automation controller Wiren Board 7"
---
::product
#description

Wiren Board 7 is a universal automation controller powered by open-source software.

The controller is used in the tasks of monitoring server and climatic equipment, dispatching and collecting data from metering devices, as a heart of a smart home and industrial automation.

Features:

- 1.2 GHz 4-core ARM Cortex A7 / up to 2 GB DDR3 RAM / up to 64 GB eMMC;
- built-in microSD card slot;
- port surge protection, watchdog timer and DIN rail enclosure;
- supports a wide variety of protocols;
- wide range of internal and external extension modules
- Linux-based open source software


#info

## MAIN FEATURES

::product-section{title="Hardware and software"}
:photo{
  src="wiren-board-73/wiren-board-73-1.png"
  width="500px"
  float="right"
}

- 1.2 GHz Quad Core ARM Cortex A7 industrial-grade CPU
- 1 GB DDR3 RAM
- 8 GB industrial-grade eMMC Flash
- Dedicated secure key storage

When ordering the controller, you can choose a version with 2 GB DDR3 RAM and 64 GB eMMC.

The controller uses the open operating system Debian Linux 9, kernel 5.10, which provides ample opportunities for installing third-party software.

The built-in software allows configuring the controller and devices connected to it, writing automation scripts, storing and viewing the archive of measurements.
::

::product-section{title="Interfaces and Communications"}
:photo{
  src="wiren-board-73/wiren-board-73-2.png"
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

- 4G (LTE) dual SIM-card modem
- Z-Wave and Zigbee
::

::product-section{title="Supported protocols"}
:photo{
  src="wiren-board-73/wiren-board-73-3.png"
  width="500px"
  float="right"
}

The controller supports a large number of protocols:

- Modbus RTU - a wide range of devices: relays, dimmers, I / O modules
- Somfy, WINDECO, DOOYA, AKKO - electric curtains
- IEC 61107, DLMS / COSEM electricity meters
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
  src="wiren-board-73/wiren-board-73-4.png"
  width="500px"
  float="right"
}

The controller is made according to an industrial process technology and can operate for a long time at air temperatures from -40 to +75 ° C. It is often used in outdoor unheated billboards.

Port overvoltage protection and watchdog timer allow the controller to be used for solutions requiring reliable operation.

The DIN-rail housing and the supply voltage range from 9 to 48 volts will help you integrate the controller into an existing automation panel or assemble a new one without any problems.

The open platform makes it possible to install third-party software, or develop your own.

A wide range of external modules will help you build a fault-tolerant automation system for any task, and support for various data transfer protocols will help you integrate the controller into an existing one.
::

::product-section{title="Text dashboards"}
:photo{
  src="wiren-board-73/wiren-board-73-5.png"
  width="500px"
  float="right"
}

The main element of the text information panel is a widget. The widget allows you to display information from different sources in one place.

The text dashboard can adapt to the small screen of a mobile device.
::

::product-section{title="Graphic dashboards"}
:photo{
  src="wiren-board-73/wiren-board-73-6.png"
  width="500px"
  float="right"
}

You can create interactive graphic dashboards based on SVG drawings.

You can output information to text elements of SVG-picture, change the visibility and design of elements. You can also customize the reaction to user action: turn on the light, turn off the alarm, etc.

To set up a graphical dashboard, the controller's web interface has a visual editor.

Read more about dashboards and other features of the web interface in the article [Controller web interface Wiren Board](https://wirenboard.com/en/pages/wb-software/)
::

::product-section{title="Data archive"}
:photo{
  src="wiren-board-73/wiren-board-73-7.png"
  width="500px"
  float="right"
}

All data received by the controller are saved in an archive, the size of which can be configured.

You can build graphs of historical data for several channels at the same time. You can interact with graphs: change the scale, make cursor measurements, etc.

Data from the archive can be uploaded to CSV for analysis in third-party software.
::

::product-section{title="Automation scripts"}
:photo{
  src="wiren-board-73/wiren-board-73-8.png"
  width="500px"
  float="right"
}

The Wiren Board controller firmware contains a flexible scripting tool in Javascript-like language - WB-Rules.

Using scripts, you can automate any action: control lighting, heating or a technological process.

Scripts can be created and edited directly in the web interface, debugging is available in the console.
::


::
