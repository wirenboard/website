---
article: "WB-MAP3EV"
cover: "wb-map3ev/cover.png"
catalogCover: "wb-map3ev/catalog-cover.png"
images: [
  ["wb-map3ev/cover.png"],
  ["wb-map3ev/wb-map3ev-7.png"],
]
documentation: "https://wirenboard.com/wiki/Map3ev"
meta: "Three-phase voltmeter with Modbus"
keywords: "Three-phase voltmeter with Modbus"
---
::product
#description

Three-phase voltmeter on DIN rail with RS-485 interface.

Used to monitor power quality and detect voltage surges in single- or three-phase AC networks.


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-map3ev/wb-map3ev-1.png"
  width="500px"
  float="right"
}

- Three-phase voltage measurement.
- Power surge detection.
- Measurement of peak voltage values and interfacial angles.
- Compact housing for DIN rail.
- Service life 16 years.
- Fast and simple integration into automation and monitoring systems.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡, which allows you to instantly deliver the effective voltage value to the Wiren Board controller
::

::product-section{title="Hardware"}
:photo{
  src="wb-map3ev/wb-map3ev-2.png"
  width="500px"
  float="right"
}

Measured parameters:

- Phase voltage root mean square (Urms).
- Phase angle of voltage shift between phases.
- Frequency.

- Supply voltage: 9…28 V DC.
- Interface: RS-485, Modbus RTU.
- Extended operating temperature range: -40…+80 °C.
- DIN rail housing, 2 modules.
::

::product-section{title="Power grid monitoring"}
:photo{
  src="wb-map3ev/wb-map3ev-3.png"
  width="500px"
  float="right"
}

WB-MAP3EV is used in power grid monitoring systems at industrial enterprises, office buildings, and data centers.

The measured parameters can be used to control phase voltage. As well as identifying emergency situations:

- lack of phases
- phase voltage unevenness
- phase angle imbalance
- voltage drops.

To transmit actual voltage values (Urms) WB-MAP3EV uses Fast Modbus ⚡. This allows you to instantly detect phase voltage deviations from the norm and take timely measures to protect electrical equipment.
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-map3ev/wb-map3ev-4.png"
  width="500px"
  float="right"
}

All Wiren Board devices, in addition to the standard Modbus RTU, can work with its extension [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which adds new features:

- instant polling of input states and measured values via events;
- quick search for devices connected to the controller;
- resolving address collisions on the bus.

Additional features are enabled automatically - if the device supports extension, the controller driver will work with the device quickly Modbus if the device does not know anything about the extension - it will work using standard Modbus RTU.
::

:include{path="/catalog/includes/quality_control"}

::product-section{title="Setup"}
:photo{
  src="wb-map3ev/wb-map3ev-5.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- configure the period for resetting peak values,
- enable or disable parameter polling.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-map3ev/wb-map3ev-6.png"
  width="500px"
  float="right"
}

The voltmeter does not have its own screen, so reading the connected parameters is carried out via the RS-485, Modbus RTU interface.

If a Wiren Board controller is used, the measured values are available in the controller's web interface and can be transferred to the higher-level system. The device card displays only the channels enabled in the survey settings.

All data can be read by any equipment or software that supports the RS-485, Modbus RTU protocol: third-party controllers, HMI panels or SCADA.
::


::
