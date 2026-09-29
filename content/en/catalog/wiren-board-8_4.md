---
article: "WB8-ALL"
cover: "wiren-board-8_4/cover.png"
catalogCover: "wiren-board-8_4/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/Wiren_Board_8.4"
meta: "Powerful universal freely PLC in industrial design"
keywords: "controller for automation, wiren board, dispatching, PLC on Linux, PLC"
---
::product
#description

**The remaining stock of the old revision is being sold.** In new projects, please use the [revision 8.5](/en/product/wiren-board-8_5/).

Wiren Board 8 is a PLC powered by free software.

Wiren Board PLC are used in the tasks of monitoring server and climate equipment, dispatching and collecting data from metering devices, as the basis for "smart home" and industrial automation.

Main differences from Wiren Board 7: 64-bit ARM processor 1.5 GHz 28 nm, up to 4 GB of RAM, CAN is now an expansion module. **In revision 8.4, only discrete input and output modules can be installed in MOD1, MOD2 and MOD3 without restrictions, and MOD4 is not available**.


#info

## MAIN FEATURES

::product-section{title="Hardware and software"}
:photo{
  src="wiren-board-8_4/wiren-board-8_4-1.png"
  width="500px"
  float="right"
}

Any configuration includes an industrial 4-core 64-bit ARM Cortex A53 processor with a frequency of 1.5 GHz, but the available RAM and permanent memory depend on the version:

- from −25 to +75 °C: 4 GB LPDDR4 RAM and 64 GB eMMC;
- from −25 to +75 °C: 2 GB LPDDR4 RAM and 16 GB eMMC.

The controller uses the open operating system Debian Linux 11, kernel 6.8, which provides ample opportunities to install third-party software. There is also hardware protected a key store that can be used to authorize the controller in its services or to link software licenses.

The built-in software is free, open and allows you to configure the controller and devices connected to it, write automation scripts, store and view measurement archives. [More about the controller software](https://wirenboard.com/en/pages/programmirovanie-kontrollerov/).
::

::product-section{title="Interfaces and Communications"}
:photo{
  src="wiren-board-8_4/wiren-board-8_4-2.png"
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
- CAN and HDMI (in development, if needed, write to us)
::

::product-section{title="Supported protocols"}
:photo{
  src="wiren-board-8_4/wiren-board-8_4-3.png"
  width="500px"
  float="right"
}

The basic controller supports a large number of protocols:

- Modbus RTU - a wide range of devices: relays, dimmers, I / O modules
- Somfy, WINDECO, DOOYA, AKKO, Dauerhaft, A-OK - electric curtains
- GOST IEC 61107, DLMS / COSEM, SPODES (GOST R 58940-2020), Mercury, Milur - electricity meters
- Pulsar, IVTM - water and heat meters and sensors
- 1-Wire - temperature sensors DS18B20
- Wi-Fi, Bluetooth - sensors, gateways and devices
- Modbus TCP, MQTT, SNMP, Zabbix API - data exchange with other controllers, servers and SCADA
- Danfoss / Carel / Eliwell - refrigeration controllers used in display cases, chest freezers and freezer rooms

With add-on modules, you can add support for:

- KNX - the controller can be integrated into existing KNX integrations
- OpenTherm and eBUS - electric and gas boilers
- Z-Wave, Zigbee - a wide range of sensors and actuators
- DALI - two-wire lighting control protocol (in development)

[Full list of supported devices and protocols](https://wirenboard.com/wiki/Supported_devices)
::

:include{path="/catalog/includes/fast_modbus"}

undefined
::product-section{title="Features"}
:photo{
  src="wiren-board-8_4/wiren-board-8_4-5.jpg"
  width="500px"
  float="right"
}

Depending on the version, the controller can operate at air temperatures from -40 to +75 °C. It is often used in unheated outdoor panels.

Port overvoltage protection and a watchdog timer allow the controller to be used for solutions that require reliable operation.

The DIN rail housing and supply voltage range from 9 to 48 volts will help you integrate the controller into an existing automation panel or easily assemble a new one.

The open platform makes it possible to install third-party software or develop your own.

A wide range of external modules will help you build a fault-tolerant automation system for any task, and support for various data transfer protocols will help you integrate the controller into an existing one.
::

:include{path="/catalog/includes/quality_control"}


## WEB INTERFACE

::product-section{title="Quickly search for devices on the bus"}
:photo{
  src="wiren-board-8_4/wiren-board-8_4-6.png"
  width="500px"
  float="right"
}

Thanks to the support of [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en)⚡ in devices of Wiren Board and partners, you can instantly find all devices on the bus and add them to the configuration in one click drivers.

In the future we plan to add the ability to automatically resolve address collisions on bus and set the required connection settings.

Devices with regular Modbus and other protocols can be added to the configuration manually using templates with register descriptions. The standard driver package includes more than 150 templates and their number continues to grow.
::

:include{path="/catalog/includes/controller_text_dashboards"}

:include{path="/catalog/includes/controller_graphic_dashboards"}

:include{path="/catalog/includes/controller_data_archive"}

:include{path="/catalog/includes/controller_automation_scripts"}


::
