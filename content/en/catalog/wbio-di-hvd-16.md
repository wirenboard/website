---
article: "WBIO-DI-HVD-16"
cover: "wbio-di-hvd-16/wbio-di-hvd-16-top.png"
catalogCover: "wbio-di-hvd-16/wbio-di-hvd-16-main.png"
documentation: "https://wiki.wirenboard.com/wiki/index.php/Модуль_наличия_220В_(WBIO-DI-HVD-16)"
meta: "WBIO-DI-HVD-16 I/O module — 16 discrete 230V presence inputs with group galvanic isolation."
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

The WBIO-DI-HVD-16 module is designed for monitoring circuit breaker status, polling indicator lamps, and similar tasks.

The device contains sixteen discrete inputs with group galvanic isolation, split into two isolated groups of 8 inputs each. An input triggers when AC voltage of 110V or higher is applied.

#info
## Key features

::product-section{title="Discrete inputs"}
- 16 discrete inputs, split into 2 isolated groups of 8 inputs each;
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
