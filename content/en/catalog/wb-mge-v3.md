---
article: WB-MGE v.3
name: WB-MGE v.3
title: Interface Converter
type: Multi-Protocol Gateway
sub_title: RS-485, Ethernet, Wi‑Fi, WBIO Interface Converter
cover: wb-mge-v3/wb-mge-v3-top.png
catalogCover: wb-mge-v3/wb-mge-v3-main.png
documentation: https://wirenboard.com/wiki/WB-MGE_v.3_Modbus_Ethernet_Gateway
meta: RS-485, Ethernet, Wi‑Fi, WBIO Interface Converter
keywords: Modbus TCP, RS-485, Ethernet, Wi-Fi, WBIO
images: [
  ["wb-mge-v3/wb-mge-v3-main.png"],
  ["wb-mge-v3/wb-mge-v3-main-2.png"],
  ["wb-mge-v3/wb-mge-v3-top.png"],
  ["wb-mge-v3/wb-mge-v3-pcb-1.png"],
  ["wb-mge-v3/wb-mge-v3-pcb-2.png"],
  ["wb-mge-v3/wb-mge-v3-webui-1.png"],
  ["wb-mge-v3/wb-mge-v3-webui-2.png"],
  ["wb-mge-v3/wb-mge-v3-webui-3.png"],
  ["wb-mge-v3/wb-mge-v3-webui-4.png"],
  ["wb-mge-v3/wb-mge-v3-webui-5.png"],
  ["wb-mge-v3/wb-mge-v3-webui-6.png"],
  ["wb-mge-v3/wb-mge-v3-with-box.jpg"]
]
use_cases: []
---
::product
#description

The WB-MGE v.3 gateway is designed to connect devices with RS‑485 and WBIO (I/O modules) interfaces over Ethernet and Wi‑Fi.

It provides two independent RS‑485—TCP channels; each can operate in one of the following modes:
1. Modbus TCP — for working with RS‑485 Modbus RTU devices.
2. Raw TCP Bridge — for any serial RS‑485 protocol (e.g., Modbus RTU, DOOYA, AKKO, etc.).

WBIO modules connect via the side I/O Bus connector and are exposed as a Modbus device on the RS485‑2 bus with an address printed on the module label. WBIO support can be disabled in the web interface to free the port for any protocols.

#info
## Main Features
::product-section{title="Ethernet and Wi‑Fi"}
:photo{
  src="wb-mge-v3/1_WB-MGEv3_Ethernet_Wi-Fi_ENG.png"
  width="500px"
  float="right"
}

Two network interfaces:
1. **Wi‑Fi** — enabled by default with an access point and password. Modes available: “access point”, “client”, and “disabled”.
2. **Ethernet** — configured to obtain an IP address via DHCP.

If the device you use to connect to the gateway supports mDNS, the module is reachable as **wb-mge-XXXXXX.local** on any network interface.

You can change the hostname, Wi‑Fi mode, and network settings. Default values are available in the documentation.

::

::product-section{title="2 × RS‑485"}
:photo{
  src="wb-mge-v3/2_WB-MGEv3_RS-485_ENG.png"
  width="500px"
  float="right"
}

Two independent RS‑485 ports, exposed as channels with the following modes:
- **Modbus TCP** — Modbus RTU frames are converted to Modbus TCP and served over the network interfaces.
- **Raw TCP Bridge** — frames are forwarded “as is” without conversion. In this mode you can connect classic Modbus RTU devices (Modbus RTU over TCP) as well as devices using arbitrary protocols over RS‑485.

For each RS‑485 port you can set its TCP port and mode, then poll it over any network interface.

::

::product-section{title="Termination and Failsafe Bias on RS‑485 Ports"}
:photo{
  src="wb-mge-v3/3_WB-MGEv3_Terminator_ENG.png"
  width="500px"
  float="right"
}

Each RS‑485 port provides software‑switchable:
- **Termination** — 120 Ω resistor between A and B. Enable if the module is at the end of the bus; disable if it’s in the middle.
- **Failsafe bias** — 560 Ω pull resistors that bias the line to avoid undefined levels when all transmitters are idle. Enable if the module acts as a master; otherwise disable.

This simplifies wiring and adds flexibility during design and commissioning.

::

::product-section{title="I/O Bus (WBIO)"}

:photo{
  src="wb-mge-v3/4_WB-MGEv3_WBIO.png"
  float="right"
  width="500px"
}

The **I/O Bus** is the interface for side‑mounted WBIO modules designed for the Wiren Board controller.

Inside the gateway, the I/O Bus is exposed as a Modbus device on the **RS485‑2** port with the address printed on the label. This allows polling WBIO modules via RS‑485 using Modbus RTU, or via network interfaces using Modbus TCP / Modbus RTU over TCP.

If WBIO support is not required and you want to use **RS485‑2** for other protocols, you can disable the I/O Bus in settings.
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

Supply fed into the module via dedicated terminals is provided to devices connected to the RS‑485 ports. There is a **2.5 A** current protection common to both ports, as well as software on/off with state retention across reboots. When powered via PoE, the output provides **24 VDC**, with a maximum current of **500 mA** on Vout.

All this enables compact installations without extra terminal blocks — and, when using PoE, without a separate power supply.

::

::product-section{title="Indicators"}
:photo{
  src="wb-mge-v3/6_WB-MGEv3_Indication_ENG.png"
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
  src="wb-mge-v3/7_WB-MGEv3_Web-UI_ENG.png"
  float="right"
  width="500px"
}

The modern web UI adapts to any screen size and lets you configure network interfaces, port settings, modes, etc. Access is protected with login and password.

If WB‑MGE v.3 is connected to one of the network interfaces of a Wiren Board controller that is linked to Wiren Board Cloud, you can proxy the module’s web UI through the cloud and access it remotely. See the documentation for details.

::

::product-section{title="Fast Modbus Support"}

:photo{
  src="wb-mge-v3/8_WB-MGEv3_Fast_Modbus_ENG.png"
  float="right"
  width="500px"
}

All Wiren Board devices, in addition to standard Modbus RTU, can operate with the extended [**Fast Modbus**](https://wiki.wirenboard.com/wiki/Fast_Modbus/en) ⚡ protocol, which adds:
- instant reading of input states and measured values via events;
- fast discovery of devices connected to the controller;
- address collision resolution on the bus.

WB‑MGE v.3 supports Fast Modbus in all modes: **transparent gateway** and **Modbus TCP**.

::

::product-section{title="Reset to Defaults and Factory Mode"}

:photo{
  src="wb-mge-v3/9_WB-MGEv3_Reset_ENG.png"
  float="right"
  width="500px"
}

If you forget the module settings, you can always reset them to factory defaults using the **Config** button. The same can be done from the web interface.

For edge cases when the firmware cannot boot, **Factory mode** is available to reliably flash the latest stable firmware.

::

::product-section{title="Firmware Updates"}

:photo{
  src="wb-mge-v3/10_WB-MGEv3_Update_ENG.png"
  float="right"
  width="500px"
}

We occasionally release new firmware to fix issues or add features.

Users can upload a new version directly through the web interface — no programmer required.

::

::product-section{title="DIY — Experiment with Firmware"}

:photo{
  src="wb-mge-v3/11_WB-MGEv3_DIY.png"
  float="right"
  width="500px"
}

WB‑MGE v.3 is based on an **ESP32** microcontroller and ships with our stock firmware that implements gateway functionality.

However, you can use the hardware with your own firmware and turn the gateway into a compact smart‑home server with the features you need. For convenience we’ve added a **USB‑C** connector, so you only need a computer and a USB‑C cable to flash your software.

The documentation provides full GPIO descriptions and examples for the popular **ESPHome** platform. Of course, you can use any tool or language you prefer: ***C, MicroPython, Lua, etc***.

Whatever you try, you can always restore our stock gateway firmware and use the device as intended. The warranty remains valid.

::

:include{
  path="/catalog/includes/quality_control"
}

::
