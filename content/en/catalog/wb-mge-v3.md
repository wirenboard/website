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

Two independent RS‑485 ports, and each of them can do:
- **Modbus RTU gateway** — Modbus TCP ⇄ Modbus RTU conversion, up to 8 clients per port.
- **Transparent mode** — any protocol over RS‑485 (Modbus RTU, DOOYA, AKKO and so on) is passed through as-is.
- **Sniffer and master emulator** — real-time decoding of the bus exchange and manual request sending.
- **Caching multimaster** — non-invasive data collection from someone else's line, served through a separate Modbus TCP server.
- **Repeater** — relaying between the RS‑485 ports: range extension, branching, noise isolation.
- **Transmission disable (TX)** — receive-only mode for a safe connection to a live system.

WBIO modules connect via the side I/O Bus connector and are exposed as a Modbus device on the RS485‑2 bus with an address printed on the module label. WBIO support can be disabled in the web interface to free the port for any protocols.

#info
::product-section{title="Modbus RTU gateway"}

:photo{
  src="wb-mge-v3/16_WB-MGEv3_Gateway_ENG.png"
  float="right"
  width="500px"
}

The core job of the device is to put an RS‑485 bus on the network. The gateway accepts **Modbus TCP** requests over Ethernet or Wi‑Fi, converts them to **Modbus RTU** and sends them to the line, then converts the device's reply back to Modbus TCP and returns it to the client.
- **Standard Modbus TCP** — works with any PLC, SCADA or software that speaks Modbus TCP: no drivers, no middleware.
- **Two independent channels** — each RS‑485 port has its own TCP port (502 and 503 by default), its own mode and its own line settings.
- **Up to 8 clients per port** — several systems can talk to the same port at once (in Modbus TCP mode only).

If RS‑485 carries something other than Modbus, the port can be switched to transparent mode — packets are then passed through as-is.

::

::product-section{title="Sniffer and master emulator"}

:photo{
  src="wb-mge-v3/12_WB-MGEv3_Sniffer_ENG.png"
  float="right"
  width="500px"
}

A built-in bus analyser: in sniffer mode WB‑MGE v.3 passively listens to the RS‑485 line and shows the whole exchange in the web interface in real time — decoded into packets, not raw bytes.
- **Modbus and Fast Modbus decoding** — for every packet you see the sender (master or slave), the device address, the function code, the data and the CRC check result.
- **Filters and statistics** — filter by Slave ID and function code, packet and error counters: you immediately see who went silent and where CRC errors pile up.
- **Master emulator** — you can send a read or write request by hand and look at the device's reply; the CRC is calculated automatically.
- **CSV export** — a capture can be exported, analysed later or attached to a support request.

Commissioning and troubleshooting on site no longer need a separate bus analyser and a laptop with an adapter.

::

::product-section{title="Caching multimaster"}

:photo{
  src="wb-mge-v3/13_WB-MGEv3_Cache_ENG.png"
  float="right"
  width="500px"
}

A classic RS‑485 limitation is that a line may have only **one master**. If a controller is already polling the bus, a second master breaks the exchange.

WB‑MGE v.3 removes that limit: it passively listens to someone else's traffic, remembers register values and serves them through a separate Modbus TCP server — without putting a single packet on the line.
- **Non-invasive connection** — you can add SCADA, analytics or a second controller to a system that is already running, changing nothing in it.
- **Zero extra bus load** — data is served from the cache instead of being polled again, so the main master's polling rate does not suffer.
- **Freshness control** — values have a timeout: if the data is stale the client gets an error instead of a stale number.
- **Register map** — the web interface shows which devices and registers were discovered on the bus and the statistics for them; the map can be exported to CSV or JSON.

::

::product-section{title="RS-485 line repeater"}

:photo{
  src="wb-mge-v3/14_WB-MGEv3_Repeater_ENG.png"
  float="right"
  width="500px"
}

The two RS‑485 ports can be linked together: the gateway transparently relays packets from RS485‑1 to RS485‑2 and back, working as a line repeater.
- **Longer bus** — a segment beyond the allowed length is attached through the repeater instead of being stretched as a single line.
- **Branching** — a separate branch with its own devices can be taken off the trunk without breaking the topology.
- **Noise isolation** — each segment gets its own clean line with its own terminators, and noise from one segment does not travel into the other.

Relaying works byte by byte and does not depend on the protocol, and the web interface shows live relay statistics.

::

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

::product-section{title="Transmission disable (TX)"}

:photo{
  src="wb-mge-v3/15_WB-MGEv3_TX_ENG.png"
  float="right"
  width="500px"
}

On any RS‑485 port the transmitter can be disabled in software — the gateway physically switches to receive-only and cannot put a single bit on the line.

This gives you a **guaranteed safe connection to a live system**: even if a setting is wrong or the software misbehaves, the gateway will not interfere with someone else's exchange or bring down the bus at a working site.

The mode is especially useful together with the sniffer and the caching multimaster — when you need to pull data off someone else's line without disturbing anything.

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

The module can power connected devices, controlled via software. When powered from a power supply, the maximum current is 2.5 A and the voltage equals the supply voltage. When powered via PoE, the output provides 24 VDC with a maximum current of 500 mA on Vout.

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

::product-section{title="Open‑Source Firmware — Sources on GitHub"}

:photo{
  src="wb-mge-v3/11_WB-MGEv3_DIY.png"
  float="right"
  width="500px"
}

The stock firmware of WB‑MGE v.3 is **fully open source** (MIT‑WB license); its source code is published on [GitHub](https://github.com/wirenboard/wb-mge).

Open source is your safeguard and independence:
- **Transparency and trust** — the firmware can be reviewed and security‑audited: you see exactly what the gateway does and how the code is written. We have over 1,600 automated tests, for example — our code quality is backed by evidence.
- **No vendor lock‑in** — need special logic, your own protocol, or a custom integration? You extend the firmware yourself instead of waiting on the manufacturer or being tied to its roadmap.
- **Grow it for your tasks** — it's easy to add your own functionality: MQTT support, non‑standard protocols, or your own business logic.

Everything you need is already inside: a **USB‑C** connector and a USB-UART bridge, so flashing your own build takes only a computer and a **USB‑C** cable. The documentation provides a full GPIO description.

And at any time you can restore our stock gateway firmware and use the device as intended — **the warranty remains valid**.

::

:include{
  path="/catalog/includes/quality_control"
}

::
