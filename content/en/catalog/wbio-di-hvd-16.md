---
article: "WBIO-DI-HVD-16"
cover: "wbio-di-hvd-16/wbio-di-hvd-16-top.png"
catalogCover: "wbio-di-hvd-16/wbio-di-hvd-16-main.png"
documentation: "https://wiki.wirenboard.com/wiki/WBIO-DI-HVD-16_8-Channel_230V_Detector_Module"
meta: "WBIO-DI-HVD-16 is an I/O module with 8 discrete 230V presence inputs and group galvanic isolation."
keywords: "Wiren Board, WBIO, WBIO-DI-HVD-16, discrete inputs, 230V voltage detector, I/O module"
images: [
  ["wbio-di-hvd-16/wbio-di-hvd-16-top.png"],
  ["wbio-di-hvd-16/wbio-di-hvd-16-main.png"],
  ["wbio-di-hvd-16/wbio-di-hvd-16-connection.png"],
  ["wbio-di-hvd-16/wbio-di-hvd-16-pcb.png"]
]
use_cases: []
---
::product
#description

The module is designed for monitoring circuit breaker status, polling indicator lamps, and similar tasks.

#info
## Key features

::product-section{title="Discrete inputs"}
:photo{
  src="wbio-di-hvd-16/wbio-di-hvd-16-connection.png"
  width="250px"
  float="right"
}
- 16 discrete inputs, split into 2 isolated groups;
- trigger voltage from ~110 V;
- can operate on three-phase ~380/400 V networks;
- isolation voltage between the inputs and the controller ~5000 V.
::


::product-section{title="Connecting to the controller"}
The module connects to a Wiren Board controller over the WBIO bus. It can also be connected over Modbus RTU using a WB-MIO interface converter, or over Modbus RTU and Ethernet using WB-MIO-E or WB-MGE v.3 interface converters.
::

::product-section{title="Compatibility"}
- Wiren Board 5, 6, 7, 8 controllers;
- WB-MIO, WB-MIO-E, WB-MGE v.3 interface converters.
::

:include{path="/catalog/includes/quality_control"}
::
