---
article: "WBIO-DI-WD-14"
cover: "wbio-di-wd-14/cover.png"
catalogCover: "wbio-di-wd-14/catalog-cover.png"
images: [
  ["wbio-di-wd-14/cover.png"],
  ["wbio-di-wd-14/wbio-di-wd-14-1.png"],
  ["wbio-di-wd-14/wbio-di-wd-14-2.png"],
  ["wbio-di-wd-14/wbio-di-wd-14-3.png"],
  ["wbio-di-wd-14/wbio-di-wd-14-4.png"],
]
documentation: "https://wirenboard.com/wiki/index.php/WBIO-DI-WD-14_I/O_Module"
meta: "Модуль ввода-вывода WBIO-DI-WD-14"
keywords: "DI-WD14, WD14, WD-14, DI-WD-14, WD, WBIO-WD-14, 14, WD 14"
video: [
  ["https://peertube.wirenboard.com/video-playlists/embed/6623c76e-1abe-4728-959c-f5dde919d80c?playlistPosition=9"],
]
---
::product
#description

Предназначен для подключения импульсных счетчиков, кнопок, датчиков с выходом «сухой контакт», ввода дискретных сигналов, контроля целостности цепи. Содержит 14 универсальных входов типа «сухой контакт» и определения наличия низкого напряжения с групповой гальванической развязкой. Режим работы зависит от выбранной схемы подключения.

Если вы планируете подключать к WBIO-DI-WD-14 выключатели, рекомендуем использовать вместо него модуль [WB-MCM8](https://wirenboard.com/product/WB-MCM8/), который может распознавать несколько типов нажатий.


#info

## Технические характеристики

::product-section{title="Дискретные входы"}
- 14 входов;
- групповая гальваническая развязка;
- 2 режима работы: «сухой контакт» или «наличие напряжения». Возможна работа одновременно в двух режимах;
- режим «сухой контакт»: замыкание входа на iGND. Ток срабатывания 1 мА;
- режим «наличия напряжения»: подача 12/24В AC/DC между входом и iGND. Порог срабатывания от 9 В.
::

::product-section{title="Интерфейсы"}
- шина WBIO;
- можно подключать по Modbus RTU и Ethernet при помощи модуля WB-MIO(Е).
::

::product-section{title="Совместимость"}
- Wiren Board 5;
- Wiren Board 6;
- Wiren Board 7;
- Wiren Board 8;
- интерфейсные модули WB-MIO и WB-MIO-E.
::


::
