---
article: "WBIO-DI-WD-14"
cover: "wbio-di-wd-14/cover.png"
catalogCover: "wbio-di-wd-14/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/index.php/WBIO-DI-WD-14_I/O_Module"
meta: "Universal input-output extension module with 14 universal digital dry contact inputs"
keywords: "Universal input-output extension module with 14 universal digital dry contact inputs"
---
::product
#description

The module has 14 universal inputs with group galvanic isolation. Each input supports two modes: dry contact and voltage presence detection. The operating mode depends on how the input is wired. Both modes can be used simultaneously.


#info

## Technical specifications

::product-section{title="Discrete inputs"}
- 14 inputs
- Group galvanic isolation
- 2 operating modes: dry contact / voltage presence detection. Both modes can be used simultaneously
- Dry contact mode: inputs are triggered when connected to the iGND terminal. Triggering current is 1 mA
- Voltage presence detection mode: inputs are triggered when 12/24V AC/DC is applied between the input and the iGND terminal. Detection threshold is 9 V
::

::product-section{title="Interfaces"}
- WBIO Bus
- Can be connected to Modbus RTU and Ethernet via WB-MIO(E) module
::

:include{path="/catalog/includes/wbio_compatibility_wb5-8"}


::
