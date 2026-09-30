---
article: "WBPRO-MRGLED"
cover: "wbpro-mrgled/cover.png"
catalogCover: "wbpro-mrgled/cover.png"
images: [
  ["wbpro-mrgled/cover.png"],
]
meta: "RS-485, Modbus RTU 4-channel dimmer WBPRO-LEDDIM"
keywords: "RS-485, Modbus RTU 4-channel dimmer WBPRO-LEDDIM"
---
::product
#description

4-channel dimmer to control LED strips: colored (RGB, RGB+W), yellow-white (CCT) or white (W). Types of connected strips, PWM frequency and the function of inputs can be changed in device settings.

The dimmer can be configured in web interface of a Wiren Board controller, by third-party controllers or by PC with RS-485 adapter.

The dimmer can work stand-alone or paired with a controller. If you need more power, you can combine dimmer channels or use [WBPRO-AMP](/product/WBPRO-AMP/) amplifier.


#info

## MAIN FEATURES

::product-section{title="Hardware"}
:photo{
  src="wbpro-mrgled/wbpro-mrgled-1.png"
  width="500px"
  float="right"
}

Technical specifications:

- 4 channels of 5 A, up to 48 V DC. The channels can be combined and used as a single channel 20 A dimmer.
- PWM frequency from 100 Hz to 24 kHz, changeable in settings.
- Three universal programmable digital inputs:
  - supported click types: short, double, long, short and then long;
  - various actions can be assigned to each type of click on any input;
  - group galvanic isolation.

- Supply voltage: 9 to 28 VDC.
- Interface: RS-485, Modbus RTU.
- Housing for DIN rail, 2M (36 x 90 x 58 mm).

The dimmer can work stand-alone or paired with a controller.
::

::product-section{title="Supported LED Strips"}
:photo{
  src="wbpro-mrgled/wbpro-mrgled-2.png"
  width="500px"
  float="right"
}

Depending on the selected mode, the dimmer can work with strips:

- colored (RGB, RGB+W),
- yellow and white (CCT),
- and plain white.

In some modes, several strips of the same or different types can be connected to the dimmer and each of them can be controlled separately.

See the documentation for connection diagrams and available modes.
::

::product-section{title="Operation modes and functions"}
:photo{
  src="wbpro-mrgled/wbpro-mrgled-3.png"
  width="500px"
  float="right"
}

Wiren Board controller's web intervace allows to:

- select the operating mode and assign actions to inputs;
- configure input parameters: debounce time, double and long press time, rate of change of brightness and saturation when pressing the button;
- set the lower and upper dimming thresholds for each channel, change the PWM frequency;
- enable or disable polling of channels and inputs.

When used with other equipment, the dimmer can be configured via RS-485 bus using Modbus protocol. The register table is open, well documented and available on our website.
::

::product-section{title="Dimmer control"}
:photo{
  src="wbpro-mrgled/wbpro-mrgled-4.png"
  width="500px"
  float="right"
}

Working stand-alone the dimmer can be controlled by buttons connected to inputs. Working with a controller, both by buttons and via the RS-485 bus.

Regardless of connection method, it is possible to:

- change the brightness and saturation for all types of strips;
- change color of color strips;
- change color temperature of yellow-white strips;
- turn strips on and off.

When working with the Wiren Board controller, the dimmer can be controlled from the web interface and automation scripts, and when used with other equipment, by writing values to Modbus registers.

The dimmer sends status of inputs and outputs as well as other information that can be used in automation via RS-485 bus.
::


::
