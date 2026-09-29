---
article: "WB-MAI6"
cover: "wb-mai6/cover.png"
catalogCover: "wb-mai6/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/WB-MAI6_Modbus_Analog_Inputs"
---
::product
#description

Supports all common types of temperature sensors, thermocouples, 4-20mA signals, and other standard analog signals.

6 channels, each of which can be connected to one or two sensors, depending on the type that is selected in the settings. Two 5V DC outputs to power sensors.

The module is built on a precision low-noise 16-bit ADC and operates in the industrial temperature range from -40 to +80 °C.


#info

## MAIN FEATURES

::product-section{title="Hardware"}
:photo{
  src="wb-mai6/wb-mai6-1.png"
  width="500px"
  float="right"
}

Technical specifications:

- 6 differential or 12 unipolar measurement channels.
- Precision, low-noise, 16-bit ADC operating over an extended temperature range.
- Protection of inputs up to ±30 V simultaneously on all channels and, for a short time (up to 10 s), up to ±60 V on one channel.
- Built-in terminating resistors for sensors with 4-20mA signal.
- Two 5V DC outputs to power sensors.
- Group isolation of measurement channels from the RS-485 bus.
- Supply voltage: 9 to 28 VDC.
- Interface: RS-485 with Modbus RTU.
- DIN rail housing, 3 modules (54 x 90 x 58 mm).

Industrial grade and extended temperature range of operating conditions from -40 to +80 °C allows the device to be used in unheated outdoor shields.
::

::product-section{title="Supported sensors"}
:photo{
  src="wb-mai6/wb-mai6-2.png"
  width="500px"
  float="right"
}

The module supports all popular sensors and types of analog signals, for example, you can connect to it:

- 12 sensors 4-20mA without external resistors;
- 12 signals 0-10V without external dividers;
- or 6 Pt100 sensors in 3-wire circuit;
- or 12 NTC 10k sensors;
- or 6 K type thermocouples;
- or 12 Hall effect current sensors, e.g. [HSTS016L 30 A](/product/HSTS016L-D05/) or [HSTS016L 100 A](/product/HSTS016L-D07/);
- or 12 discrete signals;
- or 12 voltage sources up to 30 VDC;
- or 12 voltage sources up to 60 VDC using [WB-VDIV](https://wirenboard.com/product/wb-vdiv/);
- or any combination of these and dozens of other sensors.

The module firmware can automatically recalculate the values of standard signals into physical quantities, you just need to specify the parameters for the calculation.

See the device documentation for a complete list of supported sensors and measurement uncertainties.
::

::product-section{title="Mode selection"}
:photo{
  src="wb-mai6/wb-mai6-3.png"
  width="500px"
  float="right"
}

When used with the Wiren Board controller, you can click on the web interface to:

- set the operating mode for each channel or terminal;
- change the parameters for converting the values of standard signals into physical quantities;
- configure many other parameters that depend on the type of sensor: the number of measurements in a row, signal averaging time, channel polling period, etc.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Reading measured values"}
:photo{
  src="wb-mai6/wb-mai6-4.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, the measured values are available in the controller's web interface and can be used in automation scenarios or transferred to an upper level system. Only enabled channels are displayed in the device card.

The module also sends all data via Modbus RTU (RS-485), which can be read by any equipment or software that supports this protocol: third-party controllers, HMI panels or SCADA.
::


::
