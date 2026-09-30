---
article: "WBE2-I-OPENTHERM"
cover: "wbe2-i-opentherm/cover.png"
catalogCover: "wbe2-i-opentherm/catalog-cover.png"
images: [
  ["wbe2-i-opentherm/cover.png"],
  ["wbe2-i-opentherm/wbe2-i-opentherm-1.png"],
]
documentation: "https://wirenboard.com/wiki/WBE2-I-OPENTHERM_OpenTherm_Extension_Module"
meta: "Шлюз OpenTherm для Wiren Board 6…8"
keywords: "автоматизация, Wiren Board, OpenTherm, Lemax, WARM, BAXI, Bosch, Buderus, DeDietrich, Ferroli, Fondital, Lamborghini, Novaflorida, Thermona, Viessmann"
video: [
  ["https://peertube.wirenboard.com/video-playlists/embed/6623c76e-1abe-4728-959c-f5dde919d80c?playlistPosition=9"],
]
---
::product
#description

Модуль управления электрическими и газовыми котлами по протоколу OpenTherm. Производится компанией [Невотон](http://nevoton.ru).

Устанавливается в разъём на плате контроллера и имитирует работу внешнего термостата. Подходит для Wiren Board 6…8.

Поддерживает котлы с протоколом OpenTherm: ACV, Buderus, Beretta, Bosch, Baltur, BaltGaz, BAXI, DeDietrich, Fondital, Ferroli, Federica Bugatti, IMMERGAS, Viessmann, Thermona, Lamborghini, Lemax, WARM и др. Полный список моделей смотрите в документации. Так же есть прозрачный режим для передачи необработанных команд.

С помощью модуля вы сможете:

- устанавливать один из четырёх режимов работы котла;
- получать информацию с датчиков, статус котла и код ошибки;
- изменять уставки температуры;
- задействовать котёл в сценариях автоматизации.

Модуль нельзя подключать вместе с родной панелью управления — на шине может быть только одно управляющее устройство. Также модуль может управлять только одним котлом на шине.


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
- адрес устройства по умолчанию: 11;
- оптимальная частота опроса устройства: 1 раз в сек.
::

::product-section{title="Прочее"}
- габариты: 39х26х9 мм;
- масса: 30 г.
::


::
