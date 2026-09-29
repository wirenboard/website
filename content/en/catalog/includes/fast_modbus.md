::product-section{title="Fast Modbus support"}
:photo{
  src="images/fast_modbus.png"
  width="500px"
  float="right"
}

In addition to the standard Modbus RTU, all Wiren Board devices can work with its extension [Fast Modbus](https://wirenboard.com/wiki/Fast_Modbus/en) ⚡, which adds new capabilities:

- instant polling of input states and measured values via events;
- fast discovery of devices connected to the controller;
- address collision resolution on the bus.

For the user, enabling the additional capabilities is seamless — if the device supports the extension, the controller driver communicates with it over Fast Modbus; if the device knows nothing about the extension, it works over the standard Modbus RTU.
::
