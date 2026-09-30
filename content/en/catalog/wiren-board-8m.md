---
article: "WB8M"
cover: "wiren-board-8m/cover.png"
catalogCover: "wiren-board-8m/catalog-cover.png"
images: [
  ["wiren-board-8m/cover.png"],
  ["wiren-board-8m/wiren-board-8m-14.png"],
  ["wiren-board-8m/wiren-board-8m-15.png"],
  ["wiren-board-8m/wiren-board-8m-16.png"],
  ["wiren-board-8m/wiren-board-8m-17.png"],
  ["wiren-board-8m/wiren-board-8m-18.png"],
]
documentation: "https://wirenboard.com/wiki/Wiren_Board_8M"
meta: "PLC Wiren Board 8 n a metal case"
keywords: "PLC, controller, automation, metal case, data center monitoring, Wiren Board"
---
::product
#description

Wiren Board 8M is a universal modular controller for automation, powered by the company’s own open-source Linux-based software.

Wiren Board M series controllers are used for monitoring server and climate equipment, dispatching, and collecting data from metering devices, as well as serving as a foundation for industrial automation. The metal enclosure with grounding capability protects the controller from electromagnetic interference and mechanical damage.

The controller can be mounted on a DIN rail both horizontally and vertically, as well as on a mounting panel using screws.


#info

## MAIN FEATURES

::product-section{title="Hardware and Software"}
:photo{
  src="wiren-board-8m/wiren-board-8m-1.png"
  width="500px"
  float="right"
}

The controller is equipped with an industrial-grade 4-core 64-bit ARM Cortex A53 processor with a frequency of 1.5 GHz, 4 GB LPDDR4 RAM, and 64 GB eMMC, with an industrial temperature range from -40 to +75 °C. It runs an open Debian Linux 11 operating system, kernel 6.8, providing broad possibilities for installing third-party software. Additionally, it includes a hardware-protected key storage that can be used for controller authentication in your services or for software license binding.
::

::product-section{title="Interfaces and Communications"}
:photo{
  src="wiren-board-8m/wiren-board-8m-2.jpg"
  width="500px"
  float="right"
}

In the base configuration, the controller includes:

- 2 x RS-485 ports without isolation;
- Real-time clock (RTC) with an accuracy of ±0.5 seconds per day;
- 2 x Ethernet 10/100;
- 1 x USB Host;
- Wi-Fi 802.11n (AP, client), dual-band 2.4 and 5 GHz;
- Bluetooth 4.2 + BLE;
- 2 x 1-Wire/discrete inputs;
- 4 x discrete/analog inputs/outputs with "open collector";
- 1 x MicroSD slot, up to 50 MB/s;

With expansion modules, you can add additional interfaces:

- Z-Wave and Zigbee;
- 2G + 3G + 4G (LTE) modem with support for two nano SIM cards;
- 2 x RS-485 ports with individual isolation (mod3, mod4);
- Supercapacitor-based uninterruptible power module;
- OpenTherm, EBUS and other interfaces;
- PoE, CAN (under development, contact us if needed).
::

::product-section{title="Supported protocols"}
:photo{
  src="wiren-board-8m/wiren-board-8m-3.png"
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
- IEC 60870-5-104 – protocol used in power systems and industrial SCADA integration;
- Danfoss, Carel, Eliwell – refrigeration controllers such as Danfoss EKC 202B/D, ERC 21x, and Carel BASIC/EASY;
- KNX – integration with existing KNX systems (with add-on modules);
- OpenTherm and eBUS – electric and gas boilers (with add-on modules);
- Z-Wave, Zigbee, DALI – sensors, actuators, and lighting devices (with add-on modules);
::

::product-section{title="Precise Real-Time Clock (RTC)"}
:photo{
  src="wiren-board-8m/wiren-board-8m-4.png"
  width="500px"
  float="right"
}

The built-in real-time clock ensures high accuracy of ±5 ppm (deviation no more than ±5×10⁻⁶, ±3 minutes per year, ±15 seconds per month, ±0.5 seconds per day) across the entire operating temperature range, guaranteeing synchronization and precise timestamps for your applications.
::

::product-section{title="Universal Mounting and Durable Enclosure"}
:photo{
  src="wiren-board-8m/wiren-board-8m-5.jpg"
  width="500px"
  float="right"
}

Wiren Board 8M is designed for easy installation on a DIN rail in both horizontal and vertical positions, as well as for mounting on a panel using screws.

The robust black anodized aluminum housing can be grounded to ensure high resistance to electromagnetic interference.
::

::product-section{title="Fast Modbus Support"}
:photo{
  src="wiren-board-8m/wiren-board-8m-6.png"
  width="500px"
  float="right"
}

All Wiren Board devices, in addition to standard Modbus RTU, can operate with its extension [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which adds new capabilities:

- instant polling of input states and measured values via events;
- quick search for devices connected to the controller;
- resolution of address collisions on the bus.

For users, enabling additional features happens seamlessly—if a device supports the extension, the controller driver will operate using Fast Modbus. If the device does not support the extension, it will continue to work with standard Modbus RTU.
::

::product-section{title="Wiren Board Cloud"}
:photo{
  src="wiren-board-8m/wiren-board-8m-7.png"
  width="500px"
  float="right"
}

All Wiren Board controllers are fully autonomous and do not depend on internet access. However, you can connect them to the remote administration service Wiren Board Cloud and gain:

- remote access to the web interface and SSH from a computer or phone via a standard browser;
- data archive in Grafana — create custom dashboards with graphs, indicators, and analytics;
- a unified list of controllers with current statuses, serial numbers, software versions, etc. — useful for inventory management;
- multi-user access and grouping by organizations — beneficial for companies managing controllers across different clients.

In addition to the public Wiren Board Cloud version, there is an On-premise option for installation on the customer's server.
::


## WEB INTERFACE

::product-section{title="Quickly search for devices on the bus"}
:photo{
  src="wiren-board-8m/wiren-board-8m-8.png"
  width="500px"
  float="right"
}

Thanks to the support of [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en)⚡ in devices of Wiren Board and partners, you can instantly find all devices on the bus and add them to the configuration in one click drivers.

In the future we plan to add the ability to automatically resolve address collisions on bus and set the required connection settings.

Devices with regular Modbus and other protocols can be added to the configuration manually using templates with register descriptions. The standard driver package includes more than 150 templates and their number continues to grow.
::

::product-section{title="Text dashboards"}
:photo{
  src="wiren-board-8m/wiren-board-8m-9.png"
  width="500px"
  float="right"
}

The main element of the text information panel is a widget. The widget allows you to display information from different sources in one place.

The text dashboard can adapt to the small screen of a mobile device.
::

::product-section{title="Graphic dashboards"}
:photo{
  src="wiren-board-8m/wiren-board-8m-10.png"
  width="500px"
  float="right"
}

You can create interactive graphic dashboards based on SVG drawings.

You can output information to text elements of SVG-picture, change the visibility and design of elements. You can also customize the reaction to user action: turn on the light, turn off the alarm, etc.

To set up a graphical dashboard, the controller's web interface has a visual editor.
::

::product-section{title="Data archive"}
:photo{
  src="wiren-board-8m/wiren-board-8m-11.png"
  width="500px"
  float="right"
}

All data received by the controller are saved in an archive, the size of which can be configured.

You can build graphs of historical data for several channels at the same time. You can interact with graphs: change the scale, make cursor measurements, etc.

Data from the archive can be uploaded to CSV for analysis in third-party software.
::

::product-section{title="Automation scripts"}
:photo{
  src="wiren-board-8m/wiren-board-8m-12.png"
  width="500px"
  float="right"
}

The Wiren Board controller firmware contains a flexible scripting tool in Javascript-like language - WB-Rules.

Using scripts, you can automate any action: control lighting, heating or a technological process.

Scripts can be created and edited directly in the web interface, debugging is available in the console.
::

::product-section{title="Scenarios"}
:photo{
  src="wiren-board-8m/wiren-board-8m-13.png"
  width="500px"
  float="right"
}

A visual tool in the web interface that allows for easy configuration of system behavior without writing code.

Scenarios are suitable for quickly solving standard tasks.
::


::
