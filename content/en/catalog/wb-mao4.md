---
article: "WB-MAO4"
cover: "wb-mao4/cover.png"
catalogCover: "wb-mao4/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/WB-MAO4_0-10V_Modbus_Analog_Outputs"
meta: "Lighting control module with Modbus RTU"
keywords: "Modbus RTU"
---
::product
#description

Analog output module with 4 outputs 0-10 V or PWM and RS-485 interface.

Used to control devices with 0-10V or PWM interfaces — lamps, servos, air damper drives, valves, etc. in automation systems.


#info

## Main characteristics

::product-section{title="Advantages"}
:photo{
  src="wb-mao4/wb-mao4-1.png"
  width="500px"
  float="right"
}

- Group galvanic isolation of inputs, which reduces the influence of interference.
- Two modes of output operation: 0-10 V and PWM.
- Flexible configuration of control of outputs from inputs, and recognition of types of clicks.
- Pulse counting.
- Compact housing for DIN rail.
- Fast and simple integration into automation and monitoring systems.

Supports [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus) ⚡, which allows you to instantly deliver input states and click counter values to the Wiren Board controller.
::

::product-section{title="Hardware"}
:photo{
  src="wb-mao4/wb-mao4-2.png"
  width="500px"
  float="right"
}

Specifications:

- 4 outputs 0-10V or PWM.
- Three discrete inputs.
- Group galvanic isolation of inputs.

- Supply voltage: 9…28 V DC.
- Interface: RS-485, Modbus RTU.
- Extended operating temperature range: -40…+80 °C.
- DIN rail housing, 2 modules.
::

::product-section{title="Manage lighting scenes"}
:photo{
  src="wb-mao4/wb-mao4-3.jpg"
  width="500px"
  float="right"
}

The dimmer allows you to set up preset lighting scenes, which can be controlled using buttons and switches connected to its inputs. For each scene, the channel state, brightness and dimming speed are adjusted. Scenes are switched by pressing buttons, the dimmer inputs recognize 4 types of presses: short, long, double, long + short.

Scenes allow you to flexibly control lighting without using a controller. Thanks to this, local lighting control can be easily and inexpensively implemented without programming. Scene management is configured in the web interface of the Wiren Board controller or by writing to Modbus registers, and the settings are stored in the module memory.
::

::product-section{title="Safe Mode"}
:photo{
  src="wb-mao4/wb-mao4-4.jpg"
  width="500px"
  float="right"
}

If the module is installed at a distance from the switchboard and connected to the RS-485 bus, then there is a risk of loss of control from the head unit. In order not to lose control over an important technological process, the module has a safe mode that allows you to switch the dimmer outputs to a specified state.

For each output, you can configure its own safe state and the need to switch to it in case of loss of communication. In addition, you can enable or disable control from inputs in safe mode, for example, prohibit control from buttons when communication with the device is lost.
::

::product-section{title="Fast Modbus support"}
:photo{
  src="wb-mao4/wb-mao4-5.png"
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
  src="wb-mao4/wb-mao4-6.png"
  width="500px"
  float="right"
}

When used with a Wiren Board controller, you can use the mouse in the web interface:

- set up scenes and safe mode,
- set the operating mode of the outputs,
- set up the interaction of inputs and outputs,
- enable or disable parameter polling.

For configuration without a controller, you can use the [Wiren Board Device Editor](https://wiki.wirenboard.com/wiki/WASM_Device_Editor) paired with a WB-USB485 interface converter or a similar device.

When used with other equipment, the module can be configured via the RS-485 bus by writing values to Modbus registers. The register table is open, well documented and available online in the device documentation.
::

::product-section{title="Reading the readings"}
:photo{
  src="wb-mao4/wb-mao4-7.png"
  width="500px"
  float="right"
}

If a Wiren Board controller is used, input click counters, output states and dimming levels are available in the controller's web interface and can be used in automation scripts or transferred to a higher-level system. The device card displays only the channels enabled in the survey settings.

All data can be read by any equipment or software that supports the RS-485, Modbus RTU protocol: third-party controllers, HMI panels or SCADA.
::


::
