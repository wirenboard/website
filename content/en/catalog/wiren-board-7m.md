---
article: "WB7M-ALL"
cover: "wiren-board-7m/cover.jpg"
catalogCover: "wiren-board-7m/catalog-cover.jpg"
meta: "PLC Wiren Board 7 in a metal case"
keywords: "PLC, controller, automation, metal case, data center monitoring, Wiren Board"
---
::product
#description

**Discontinued, recommended replacement [Wiren Board 8M](https://wirenboard.com/product/wiren-board-8M/)**

Wiren Board 7M is a PLC powered by free software.

Wiren Board M series PLC are used in the tasks of monitoring server and climate equipment, dispatching and collecting data from metering devices, as a basis for industrial automation. The metal case with the possibility of grounding protects the controller from electromagnetic interference and mechanical damage.

Different types of mounts allow you to install the device on a DIN rail or in a 19" server rack.


#info

## MAIN FEATURES

::product-section{title="Hardware and software"}
:photo{
  src="wiren-board-7m/wiren-board-7m-1.png"
  width="500px"
  float="right"
}

- 1.2 GHz Quad Core ARM Cortex A7 industrial-grade CPU
- 1 GB DDR3 RAM
- 8 GB industrial-grade eMMC Flash
- Dedicated secure key storage
- Сверхточный RTC с отклонением 0.5с/сутки.
- Built-in 4G modem with support for two SIM cards and GNSS.
- Support for the PTP precise time protocol on both Ethernet ports.
- PPS outputs.

When ordering the PLC, you can choose a version with 2 GB DDR3 RAM and 64 GB eMMC.

The PLC uses the open operating system Debian Linux 11, kernel 5.10, which provides ample opportunities for installing third-party software.

The built-in software allows configuring the PLC and devices connected to it, writing automation scripts, storing and viewing the archive of measurements.
::

::product-section{title="Interfaces and Communications"}
:photo{
  src="wiren-board-7m/wiren-board-7m-2.png"
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
  src="wiren-board-7m/wiren-board-7m-3.png"
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
  src="wiren-board-7m/wiren-board-7m-4.png"
  width="500px"
  float="right"
}

The PLC is made according to the industrial process technology and can work for a long time at air temperatures from -40 to +75 °С. It is often used in outdoor unheated shields.

Port surge protection and watchdog timer make the PLC suitable for applications requiring reliable operation.

The DIN-rail housing and supply voltage range from 9 to 48 volts will help to integrate the PLC into an existing automation panel or assemble a new one without any problems.

The metal case with the possibility of grounding protects the PLC from electromagnetic interference and mechanical damage. Two mounting options: DIN-rail and 19" rack, 1U size.

An open platform makes it possible to install third-party software, or develop your own.

A wide range of external modules will help you build a fault-tolerant automation system for any task, and support for various data transfer protocols will help you integrate the controller into an existing one.
::

::product-section{title="Text dashboards"}
:photo{
  src="wiren-board-7m/wiren-board-7m-5.png"
  width="500px"
  float="right"
}

The main element of the text information panel is a widget. The widget allows you to display information from different sources in one place.

The text dashboard can adapt to the small screen of a mobile device.
::

::product-section{title="Graphic dashboards"}
:photo{
  src="wiren-board-7m/wiren-board-7m-6.png"
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
  src="wiren-board-7m/wiren-board-7m-7.png"
  width="500px"
  float="right"
}

All data received by the controller are saved in an archive, the size of which can be configured.

You can build graphs of historical data for several channels at the same time. You can interact with graphs: change the scale, make cursor measurements, etc.

Data from the archive can be uploaded to CSV for analysis in third-party software.
::

::product-section{title="Automation scripts"}
:photo{
  src="wiren-board-7m/wiren-board-7m-8.png"
  width="500px"
  float="right"
}

The Wiren Board controller firmware contains a flexible scripting tool in Javascript-like language - WB-Rules.

Using scripts, you can automate any action: control lighting, heating or a technological process.

Scripts can be created and edited directly in the web interface, debugging is available in the console.
::


::
