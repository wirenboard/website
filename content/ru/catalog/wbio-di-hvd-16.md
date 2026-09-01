---
article: "WBIO-DI-HVD-16"
cover: "wbio-di-hvd-16/wbio-di-hvd-16-top.png"
catalogCover: "wbio-di-hvd-16/wbio-di-hvd-16-main.png"
documentation: "https://wiki.wirenboard.com/wiki/index.php/Модуль_наличия_220В_(WBIO-DI-HVD-16)"
meta: "Модуль ввода-вывода WBIO-DI-HVD-16 — 16 дискретных входов наличия 230В с групповой гальванической развязкой."
keywords: "Wiren Board, WBIO, WBIO-DI-HVD-16, дискретные входы, детектор напряжения 230В, модуль ввода-вывода"
images: [
  ["wbio-di-hvd-16/wbio-di-hvd-16-top.png"],
  ["wbio-di-hvd-16/wbio-di-hvd-16-main.png"],
  ["wbio-di-hvd-16/wbio-di-hvd-16-connection.png"],
  ["wbio-di-hvd-16/wbio-di-hvd-16-pcb.png"]
]
use_cases: ["rostics", "liten_magnit", "techsensor_module_cafe"]
---
::product
#description

Модуль WBIO-DI-HVD-16 предназначен для контроля состояния автоматических выключателей, опроса сигнальных ламп и т.п.

Устройство содержит шестнадцать дискретных входов с групповой гальванической развязкой, разделённых на две изолированные группы по 8 входов. Срабатывание входа происходит при подаче переменного напряжения от 110В.

#info
## Основные характеристики

::product-section{title="Дискретные входы"}
- 16 дискретных входов, разделённых на 2 изолированные группы по 8 входов;
- напряжение срабатывания входов — от 110 В переменного тока;
- напряжение изоляции между входами и интерфейсом — 5000 В.
::

::product-section{title="Интерфейсы"}
- Шина WBIO. 
- Возможность подключения по Modbus RTU и Ethernet при помощи модулей WB-MIO и WB-MIO-E, WB-MGE v.3.
::


::product-section{title="Совместимость"}
- контроллеры Wiren Board 5, 6, 7, 8;
- преобразователи интерфейсов WB-MIO, WB-MIO-E, WB-MGE v.3.
::

:include{path="/catalog/includes/quality_control"}
:include{path="/catalog/includes/certificates"}

::
