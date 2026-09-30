---
article: "WBIO-DO-R10R-4"
cover: "wbio-do-r10r-4/cover.png"
catalogCover: "wbio-do-r10r-4/catalog-cover.png"
images: [
  ["wbio-do-r10r-4/cover.png"],
  ["wbio-do-r10r-4/wbio-do-r10r-4-1.png"],
  ["wbio-do-r10r-4/wbio-do-r10r-4-2.png"],
]
documentation: "https://wirenboard.com/wiki/index.php/%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_%D1%80%D0%B5%D0%BB%D0%B5%D0%B9%D0%BD%D1%8B%D1%85_%D0%B2%D1%8B%D1%85%D0%BE%D0%B4%D0%BE%D0%B2_10A_(roller_shutter)_(WBIO-DO-R10R-4)"
meta: "I/O Module WBIO-DO-R10R-4"
keywords: "I/O Module WBIO-DO-R10R-4"
---
::product
#description

Special configuration of outputs for controlling the electric drive of curtains and roller shutters. Switching logic and delay must be set by rules on the controller.

The module is difficult to use, so **we do not recommend using it in new projects**. Instead, use [relay modules](/catalog/wb-mr-relay-modules/) with a special “Curtain Control” mode, which automatically controls the delay of direction switching and ensures alternate activation of the Open and Close channels.


#info

## Technical specifications

::product-section{title="Relay outputs"}
- 4 groups of outputs
- Rated current per channel: 3A (NC) / 10A (NO)
- Pin configuration: SPCO/SPTT (see diagram)
::

::product-section{title="Interfaces"}
- WBIO Bus
- Can be connected to Modbus RTU and Ethernet via the WB-MIO module
::

::product-section{title="Compatibility"}
- Wiren Board 5 controllers
- Wiren Board 6 controllers
- Wiren Board 7 controllers
- Bus couplers WB-MIO and WB-MIO-E
::


::
