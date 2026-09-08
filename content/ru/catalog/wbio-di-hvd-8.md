---
article: "WBIO-DI-HVD-8"
cover: "wbio-di-hvd-8/wbio-di-hvd-8-top.png"
catalogCover: "wbio-di-hvd-8/wbio-di-hvd-8-main.png"
documentation: "https://wiki.wirenboard.com/wiki/WBIO-DI-HVD-8_8-Channel_230V_Detector_Module"
meta: "Модуль ввода-вывода WBIO-DI-HVD-8 — 8 дискретных входов наличия 230В с групповой гальванической развязкой."
keywords: "Wiren Board, WBIO, WBIO-DI-HVD-8, дискретные входы, детектор напряжения 230В, модуль ввода-вывода"
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

Модуль предназначен для контроля состояния автоматических выключателей, опроса сигнальных ламп и т.п.

#info
## Основные характеристики

::product-section{title="Дискретные входы"}
:photo{
  src="wbio-di-hvd-8/wbio-di-hvd-8-connection.png"
  width="250px"
  float="right"
}
- 8 дискретных входов, разделённых на 2 изолированные группы;
- напряжение срабатывания от ~110 В;
- возможность работы в трёхфазных сетях ~380/400 В;
- напряжение изоляции между входами и контроллером ~5000 В.
::


::product-section{title="Подключение к контроллеру"}
Модуль подключается к контроллеру Wiren Board по шине WBIO. Также возможно подключение по Modbus RTU при помощи преобразователей интерфейсов WB-MIO или подключение по Modbus RTU и Ethernet при помощи преобразователей интерфейсов WB-MIO-E, WB-MGE v.3.
::

::product-section{title="Совместимость"}
- контроллеры Wiren Board 5, 6, 7, 8;
- преобразователи интерфейсов WB-MIO, WB-MIO-E, WB-MGE v.3.
::

:include{path="/catalog/includes/quality_control"}
:include{path="/catalog/includes/certificates"}

::
