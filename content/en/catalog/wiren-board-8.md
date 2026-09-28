---
article: "WB8.5-ALL"
cover: "wiren-board-8/cover.png"
catalogCover: "wiren-board-8/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/Wiren_Board_8.5"
meta: "Powerful universal freely PLC in industrial design"
keywords: "controller for automation, wiren board, dispatching, PLC on Linux, PLC"
---
::product
#description

Wiren Board 8 is a universal modular controller for automation, powered by the company’s own open-source Linux-based software.

Wiren Board PLC are used in the tasks of monitoring server and climate equipment, dispatching and collecting data from metering devices, as the basis for "smart home" and industrial automation.

In Wiren Board 8.5, all four slots for MOD1...MOD4 modules have terminal block outputs and allow the installation of WBE2 and WBE2R expansion modules, the Debug Console and Debug Network functions are combined in a single USB-C connector, and the built-in heating of the processor board allows the controller to start and operate at temperatures from -40°C.


#info

## MAIN FEATURES

::product-section{title="Hardware and software"}
:photo{
  src="wiren-board-8/wiren-board-8-1.png"
  width="500px"
  float="right"
}

Any configuration includes an industrial 4-core 64-bit ARM Cortex A53 processor with a frequency of 1.5 GHz, but the available RAM and permanent memory depend on the version:

- from −40 to +75 °C: up to 4 GB LPDDR4 RAM and up to 64 GB eMMC;
- from −40 to +75 °C: 1 GB LPDDR4 RAM and 8 GB eMMC.

The controller uses the open operating system Debian Linux 11, kernel 6.8, which provides ample opportunities to install third-party software. There is also hardware protected a key store that can be used to authorize the controller in its services or to link software licenses.

The built-in software is free, open and allows you to configure the controller and devices connected to it, write automation scripts, store and view archives measurements.
::

::product-section{title="Interfaces and Communications"}
:photo{
  src="wiren-board-8/wiren-board-8-2.png"
  width="500px"
  float="right"
}

In the basic configuration of the controller:

- 1 × MicroSD slot, up to 60 MB/s
- 2 × Ethernet 10/100
- 1 x USB Host
- Wi-Fi 802.11n (AP, client), two bands 2.4 and 5 GHz
- Bluetooth 4.2 + BLE
- 2 × RS-485
- 2 × 1-Wire/digital inputs
- 4 × digital/analog open collector inputs/outputs

Additionally, using extension modules:

- 4G (LTE) modem for two SIM cards in nano SIM format
- Z-Wave and Zigbee
- PoE 802.3af, 802.3at or Passive PoE
- HDMI
- CAN (in development, if needed, write to us)
::

::product-section{title="Supported protocols"}
:photo{
  src="wiren-board-8/wiren-board-8-3.png"
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

::product-section{title="Fast Modbus support"}
:photo{
  src="wiren-board-8/wiren-board-8-4.png"
  width="500px"
  float="right"
}

All Wiren Board devices, in addition to the standard Modbus RTU, can work with its extension [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which adds new features:

- instant polling of input states and measured values via events;
- quick search for devices connected to the controller;
- resolving address collisions on the bus.

Additional features are enabled automatically - if the device supports extension, the controller driver will work with the device quickly Modbus if the device does not know anything about the extension - it will work using standard Modbus RTU.
::

::product-section{title="Features"}
:photo{
  src="wiren-board-8/wiren-board-8-5.jpg"
  width="500px"
  float="right"
}

The controller can operate at air temperatures from -40 to +75 °C. It is often used in unheated outdoor panels.

Port overvoltage protection and a watchdog timer allow the controller to be used for solutions that require reliable operation.

The DIN rail housing and supply voltage range from 9 to 48 volts will help you integrate the controller into an existing automation panel or easily assemble a new one.

The open platform makes it possible to install third-party software or develop your own.

A wide range of external modules will help you build a fault-tolerant automation system for any task, and support for various data transfer protocols will help you integrate the controller into an existing one.
::

:include{path="/catalog/includes/quality_control"}


## WEB INTERFACE

::product-section{title="Quickly search for devices on the bus"}
:photo{
  src="wiren-board-8/wiren-board-8-6.png"
  width="500px"
  float="right"
}

Thanks to the support of [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en)⚡ in devices of Wiren Board and partners, you can instantly find all devices on the bus and add them to the configuration in one click drivers.

In the future we plan to add the ability to automatically resolve address collisions on bus and set the required connection settings.

Devices with regular Modbus and other protocols can be added to the configuration manually using templates with register descriptions. The standard driver package includes more than 150 templates and their number continues to grow.
::

::product-section{title="Text dashboards"}
:photo{
  src="wiren-board-8/wiren-board-8-7.png"
  width="500px"
  float="right"
}

The main element of the text information panel is a widget. The widget allows you to display information from different sources in one place.

The text dashboard can adapt to the small screen of a mobile device.
::

::product-section{title="Graphic dashboards"}
:photo{
  src="wiren-board-8/wiren-board-8-8.png"
  width="500px"
  float="right"
}

You can create interactive graphic dashboards based on SVG drawings.

You can output information to text elements of SVG-picture, change the visibility and design of elements. You can also customize the reaction to user action: turn on the light, turn off the alarm, etc.

To set up a graphical dashboard, the controller's web interface has a visual editor.
::

::product-section{title="Data archive"}
:photo{
  src="wiren-board-8/wiren-board-8-9.png"
  width="500px"
  float="right"
}

All data received by the controller are saved in an archive, the size of which can be configured.

You can build graphs of historical data for several channels at the same time. You can interact with graphs: change the scale, make cursor measurements, etc.

Data from the archive can be uploaded to CSV for analysis in third-party software.
::

::product-section{title="Automation scripts"}
:photo{
  src="wiren-board-8/wiren-board-8-10.png"
  width="500px"
  float="right"
}

The Wiren Board controller firmware contains a flexible scripting tool in Javascript-like language - WB-Rules.

Using scripts, you can automate any action: control lighting, heating or a technological process.

Scripts can be created and edited directly in the web interface, debugging is available in the console.
::

::product-section{title="Scenarios"}
:photo{
  src="wiren-board-8/wiren-board-8-11.png"
  width="500px"
  float="right"
}

A visual tool in the web interface that allows for easy configuration of system behavior without writing code.

Scenarios are suitable for quickly solving standard tasks.
::


::
