---
article: "WB-MAP3ET"
cover: "wb-map3et/cover.png"
catalogCover: "wb-map3et/catalog-cover.png"
images: [
  ["wb-map3et/cover.png"],
  ["wb-map3et/wb-map3et-8.png"],
  ["wb-map3et/wb-map3et-9.png"],
  ["wb-map3et/wb-map3et-10.png"],
  ["wb-map3et/wb-map3et-11.png"],
  ["wb-map3et/wb-map3et-12.png"],
  ["wb-map3et/wb-map3et-13.png"],
  ["wb-map3et/wb-map3et-14.png"],
  ["wb-map3et/wb-map3et-15.png"],
]
documentation: "https://wirenboard.com/wiki/index.php/Map3et"
meta: "Three-phase meter with RS-485, Modbus RTU"
keywords: "Three-phase meter with RS-485, Modbus RTU"
---
::product
#description

A universal meter for electrical network parameters with one three-phase or 3 single-phase measuring channels and an RS-485 interface. With built-in current transformers 5 (125) A.

It is used for measuring all types of electrical parameters in three-phase and single-phase AC networks, for organizing a technical electricity metering system.


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-map3et/wb-map3et-1.png"
  width="500px"
  float="right"
}

- It is a measuring instrument, suitable for technical accounting.
- Low cost of the measuring channel.
- Stores accumulated readings when power is turned off.
- A large number of measured parameters.
- Customizable phase mapping simplifies installation and commissioning.
- Service life 16 years.
- Fast and easy integration into automation and monitoring systems.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡, which allows you to instantly deliver the effective voltage value to the Wiren Board controller.
::

::product-section{title="Hardware"}
:photo{
  src="wb-map3et/wb-map3et-2.png"
  width="500px"
  float="right"
}

Measured parameters:

- RMS values of current and voltage (Urms).
- Power (active, reactive, apparent, apparent) and power factor.
- Direct and reverse energy (active, reactive, apparent, inactive).
- Total values of power and energy when connecting three-phase loads.
- Amplitude of voltage and current surges. The width of the measured peaks is from 300 μs, determined by filters at the inputs, the peak values are updated periodically, the period is adjustable (minute by default).
- Phase shift angles, frequency.

Specifications:

- Accuracy class 0.5S.
- Rated current 5 А.
- Maximum current 125 А.
- Connection by passing the wire through permanent current transformers.
- Cable diameter up to 9.5 mm.
- Supply voltage: 9…28 V DC and 230 V AC.
- Interface: RS-485, Modbus RTU.
- Extended operating temperature range: -40…+80 °C.
- DIN rail housing, 3 modules.
::

::product-section{title="Power grid monitoring"}
:photo{
  src="wb-map3et/wb-map3et-3.png"
  width="500px"
  float="right"
}

WB-MAP3ET is used in systems [power grid monitoring](https://wirenboard.com/ru/pages/enegro_monitoring/) and at industrial enterprises, office buildings, data centers. Measures all the main parameters of the electrical network, replacing several measuring instruments: voltmeter, ammeter, wattmeter, frequency meter.

The measured parameters can be used to monitor power consumption and quality. As well as identifying emergency situations:

- lack of phases,
- phase voltage unevenness,
- phase angle imbalance,
- voltage fluctuations.

To transmit actual voltage values (Urms), WB-MAP3ET uses Fast Modbus ⚡.This allows you to instantly detect phase voltage deviations from the norm and take timely measures to protect electrical equipment.
::

::product-section{title="Workload priority management"}
:photo{
  src="wb-map3et/wb-map3et-4.png"
  width="500px"
  float="right"
}

The measured parameters are convenient to use in tasks of managing load priorities to control consumption on each line. WB-MAP3ET can continuously measure the current of 3 single-phase channels and transmit the readings to the controller. If the permissible current consumption is exceeded, the low priority load is switched off. To disconnect loads you can use [https://wirenboard.com/ru/catalog/wb-mr-relay-modules/](https://wirenboard.com/ru/catalog/wb-mr-relay-modules/)Wiren Board relay modules.

If you do not need to measure voltage and energy, then to measure current the meter does not have to be connected to power lines, It is enough to put a current transformer with a split core on the measured line. This makes installation and integration into the automation system easier.
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-map3et/wb-map3et-5.png"
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
  src="wb-map3et/wb-map3et-6.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- enter calibration parameters of current transformers,
- configure phase mapping,
- configure the period for resetting peak values,
- enable or disable parameter polling,
- set the data exchange speed.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-map3et/wb-map3et-7.png"
  width="500px"
  float="right"
}

The meter does not have its own screen, so the measured parameters are read via the RS-485, Modbus RTU interface.

If a Wiren Board controller is used, the measured values are available in the controller's web interface and can be transferred to the higher-level system. The device card displays only the channels enabled in the survey settings.

All data can be read by any equipment or software that supports the RS-485, Modbus RTU protocol: third-party controllers, HMI panels or SCADA.
::


::
