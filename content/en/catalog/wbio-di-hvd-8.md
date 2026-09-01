---
article: "WBIO-DI-HVD-8"
cover: "wbio-di-hvd-8/wbio-di-hvd-8-top.png"
catalogCover: "wbio-di-hvd-8/wbio-di-hvd-8-main.png"
documentation: "https://wiki.wirenboard.com/wiki/WBIO-DI-HVD-8_8-Channel_230V_Detector_Module"
meta: "WBIO-DI-HVD-8 I/O module — 8 discrete 230V presence inputs with group galvanic isolation."
keywords: "Wiren Board, WBIO, WBIO-DI-HVD-8, discrete inputs, 230V voltage detector, I/O module"
images: [
  ["wbio-di-hvd-8/wbio-di-hvd-8-top.png"],
  ["wbio-di-hvd-8/wbio-di-hvd-8-main.png"],
  ["wbio-di-hvd-8/wbio-di-hvd-8-connection.png"],
  ["wbio-di-hvd-8/wbio-di-hvd-8-pcb.png"]
]
use_cases: []
---
::product
#description

The WBIO-DI-HVD-8 module is designed for monitoring circuit breaker status, polling indicator lamps, and similar tasks.

The device contains eight discrete inputs with group galvanic isolation, split into two isolated groups. An input triggers when AC voltage of 110V or higher is applied.

#info
## Key features

::product-section{title="Discrete inputs"}
- 8 discrete inputs, split into 2 isolated groups;
- input trigger voltage — from 110 V AC;
- isolation voltage between inputs and the interface — 5000 V rms.
::

::product-section{title="Interfaces"}
- WBIO bus.
- Connection via Modbus RTU and Ethernet is possible using the WB-MIO, WB-MIO-E, and WB-MGE v.3 modules.
::

::product-section{title="Compatibility"}
- Wiren Board 5, 6, 7, 8 controllers;
- WB-MIO, WB-MIO-E, WB-MGE v.3 interface converters.
::

:include{
  path="/catalog/includes/quality_control"
}

::
