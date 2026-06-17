---
article: "WBE2-I-RS232-ISO"
cover: "wbe2-i-rs232-iso-en/wbe2-i-rs232-iso_front.png"
catalogCover: "wbe2-i-rs232-iso-en/wbe2-i-rs232-iso_front.png"
documentation: "https://wiki.wirenboard.com/wiki/WBE2-I-RS232-ISO_RS-232_Extension_Module"
meta: "Extension module with a galvanically isolated RS-232 interface for Wiren Board controllers."
keywords: "Wiren Board, RS-232, WBE2-I-RS232, extension module, galvanic isolation, MAX232"
images: [
  ["wbe2-i-rs232-iso-en/wbe2-i-rs232-iso_front.png"],
  ["wbe2-i-rs232-iso-en/wbe2-i-rs232-iso_back.png"]
]
---
::product
#description
The module adds a galvanically isolated RS-232 interface to Wiren Board controllers. It plugs into an internal slot on the controller board. Built around the MAX232 physical-layer transceiver.

#info
## Key features

::product-section{title="Specifications"}
* physical-layer chip: MAX232;
* line overvoltage protection: ±15 V;
* galvanic isolation: 1000 V;
* power consumption: 0.1 W.
::

::product-section{title="Compatibility and setup"}
Compatible with Wiren Board 6...8 controllers of all revisions.

The module is configured in the controller's web interface under "Settings → Configuration files → Extension modules and ports". Once enabled, the port becomes available in Linux as `/dev/ttyMODx` and works just like a regular serial port.
::
:include{path="/catalog/includes/quality_control" withSeparator="true"}
:include{path="/catalog/includes/certificates"}
::
