---
article: WB-MGU v.1
name: WB-MGU v.1
title: Interface Converter
type: Multi-Protocol Gateway
sub_title: RS-485, Ethernet, Wi‑Fi Interface Converter
cover: wb-mgu-v1/wb-mgu-v1-top.png
catalogCover: wb-mgu-v1/wb-mgu-v1-main.png
documentation: https://wiki.wirenboard.com/wiki/WB-MGU_Modbus_Multi_Protocol_Gateway
meta: RS-485, Ethernet, Wi‑Fi Interface Converter
keywords: Modbus TCP, RS-485, Ethernet, Wi-Fi
images: [
  ["wb-mgu-v1/wb-mgu-v1-top.png"],
  ["wb-mgu-v1/wb-mgu-v1-main.png"],
  ["wb-mgu-v1/wb-mgu-v1-pcb.png"],
  ["wb-mgu-v1/wb-mgu-v1-open.png"]
]
video: []
use_cases: []
---
::product
#description
Designed for connecting devices with an RS-485 interface to an automation server via Ethernet or Wi-Fi. The server can be any controller / computer supporting the required protocols.

The device has one RS-485 (Modbus RTU) port and one slot for WBE2 extension modules. Examples of those modules include wired interfaces like isolated RS-485, CAN, KNX, OpenTherm and so on, or wireless interfaces like Z-Wave LR, Zigbee or Matter. Extension modules are communicating with the main ESP32 MCU via UART.

Two modes are available for the RS-485 port:

1. Modbus TCP — for Modbus devices only;
2. Transparent gateway — suitable for any protocols running over RS-485.
The device is flashed and ready to use as a gateway, but you can write your own firmware for it and use it for other tasks. 

#info
::product-section{title="Interfaces and Communications"}
:photo{
  src="wb-mgu-v1/wb-mgu-v1-pcb.png"
  width="500px"
  float="right"
}

In the basic configuration of the gateway:

- 1 × RS-485;
- 1 × Ethernet 10/100;
- Wi-Fi 2.4 GHz.

Additionally, using extension modules:

- Z-Wave, Zigbee;
- KNX;
- RS-485 (isolated), RS-232, CAN;
- OpenTherm;
- PoE 802.3af, 802.3at or Passive PoE;
- and others.

::

::product-section{title="Termination and Failsafe Bias on RS‑485 Port"}
:photo{
  src="wb-mgu-v1/wb-mgu-v1-terminator.png"
  width="500px"
  float="right"
}

On the RS-485 port, there are software-software‑switchable:

- **termination** — 120 Ω resistor between A and B. Enable if the module is at the end of the bus; disable if it’s in the middle.
- **failsafe bias** — 560 Ω pull resistors that bias the line to avoid undefined levels when all transmitters are idle. Enable if the module acts as a master; otherwise disable.

This simplifies wiring and adds flexibility during design and commissioning.

::

::product-section{title="Power for the Module and Connected Devices"}
:photo{
  src="wb-mge-v3/5_WB-MGEv3_MR6Cv2_MWACv2.png"
  width="500px"
  float="right"
}


By default, the module is powered from **9…28 VDC**.

Optionally, a PoE module can be installed with support for:

- **802.3af, 802.3at** — active PoE up to 48 V;
- **Passive PoE** — delivering up to 24 V over four pairs.

Supply fed into the module via dedicated terminals is provided to devices connected to the RS‑485 ports. There is a **2.5 A** current protection common to both ports, as well as software on/off with state retention across reboots. When powered via PoE, the output provides **24 VDC**, with a maximum current of **500** mA on Vout.

All this enables compact installations without extra terminal blocks — and, when using PoE, without a separate power supply.

::

::product-section{title="Indicators"}
:photo{
  src="wb-mgu-v1/wb-mgu-v1-indication.png"
  width="500px"
  float="right"
}

Front‑panel indicators:

- module status;
- Ethernet and Wi‑Fi activity;
- Vout state for powering connected devices;
- RS‑485 port traffic.

They let you assess the module state without opening the web interface.

::

::product-section{title="Web Interface for Configuration"}

:photo{
  src="wb-mgu-v1/wb-mgu-v1-web-ui.png"
  float="right"
  width="500px"
}

The modern web UI adapts to any screen size and lets you configure network interfaces, port settings, modes, etc. Access is protected with login and password.

If WB‑MGU v.1 is connected to one of the network interfaces of a Wiren Board controller that is linked to Wiren Board Cloud, you can proxy the module’s web UI through the cloud and access it remotely. See the documentation for details.

::

::product-section{title="Fast Modbus Support"}

:photo{
  src="wb-mgu-v1/wb-mgu-v1-fast-modbas.png"
  float="right"
  width="500px"
}

All Wiren Board devices, in addition to standard Modbus RTU, can operate with the extended [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡protocol, which adds:
- instant reading of input states and measured values via events;
- fast discovery of devices connected to the controller;
- address collision resolution on the bus.

WB-MGU v.1 supports Fast Modbus in all modes: **transparent gateway** and **Modbus TCP**.

::

::product-section{title="Reset to Defaults and Factory Mode"}

:photo{
  src="wb-mgu-v1/wb-mgu-v1-reset.png"
  float="right"
  width="500px"
}

If you forget the module settings, you can always reset them to factory defaults using the **Config** button. The same can be done from the web interface.

For edge cases when the firmware cannot boot, **Factory mode** is available to reliably flash the latest stable firmware.

::

::product-section{title="Firmware Updates"}

:photo{
  src="wb-mgu-v1/wb-mgu-v1-update.png"
  float="right"
  width="500px"
}

We occasionally release new firmware to fix issues or add features.

Users can upload a new version directly through the web interface — no programmer required.

::

::product-section{title="DIY — Experiment with Firmware"}

:photo{
  src="wb-mgu-v1/wb-mgu-v1-diy.png"
  float="right"
  width="500px"
}

**WB-MGU v.1** is based on an **ESP32** microcontroller and ships with our stock firmware that implements gateway functionality.

However, you can use the hardware with your own firmware and turn the gateway into a compact smart‑home server with the features you need. For convenience we’ve added a USB‑C connector, so you only need a computer and a **USB‑C** cable to flash your software.

The documentation provides full GPIO descriptions and examples for the popular **ESPHome** platform. Of course, you can use any tool or language you prefer: **C, MicroPython, Lua, etc**.

Whatever you try, you can always restore our stock gateway firmware and use the device as intended. The warranty remains valid.
::

:include{
  path="/catalog/includes/quality_control"
  withSeparator="true"
}

::