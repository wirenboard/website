---
article: "WBE2-I-EBUS"
cover: "wbe2-i-ebus/cover.png"
catalogCover: "wbe2-i-ebus/catalog-cover.png"
images: [
  ["wbe2-i-ebus/cover.png"],
  ["wbe2-i-ebus/wbe2-i-ebus-1.png"],
  ["wbe2-i-ebus/wbe2-i-ebus-2.jpg"]
]
documentation: "https://wirenboard.com/wiki/WBE2-I-EBUS_eBus_Extension_Module"
meta: "Шлюз eBus для Wiren Board 6…8"
keywords: "eBus, Wiren Board, Vaillant, Protherm, автоматизация"
video: [
  ["https://peertube.wirenboard.com/video-playlists/embed/6623c76e-1abe-4728-959c-f5dde919d80c?playlistPosition=9"]
]
---
::product
#description

Модуль управления электрическими и газовыми котлами по протоколу eBus. Производится компанией [Невотон](http://nevoton.ru).

Устанавливается в разъём на плате контроллера и имитирует работу внешнего термостата. Подходит для Wiren Board 6…8.

Поддерживает котлы с протоколом eBus: Vaillant и Protherm. Работу с котлами других производителей не гарантируем.

С помощью модуля вы сможете:

- устанавливать один из четырёх режимов работы котла;
- получать информацию с датчиков, статус котла и код ошибки;
- изменять уставки температуры;
- задействовать котёл в сценариях автоматизации.

Модуль может управлять только одним котлом на шине.


#info

## Технические характеристики

::product-section{title="Характеристики питания"}
- номинальное напряжение питания: 5 В;
- максимальный потребляемый ток: 0.5 А.
::

::product-section{title="Настройки RS-485 / Modbus"}
- скорость передачи данных: 19200 бит/с;
- количество стоп-бит: 1;
- контроль четности: без контроля четности;
- бит при передаче: 8;
- адрес устройства по умолчанию: 12;
- оптимальная частота опроса устройства: 1 раз в сек.
::

::product-section{title="Прочее"}
- габариты: 39х26х9 мм;
- масса: 30 г.
::


::
