---
article: WB8-ALL
name: Wiren Board 8.4
title: Модульный подход к возможностям и цене
sub_title: Модульный программируемый контроллер для автоматизации и мониторинга с открытым ПО на базе Linux
cover: 1.webp
documentation: https://wirenboard.com/wiki/Wiren_Board_8
support_link:
meta: Мощный универсальный свободно программируемый контроллер в промышленном исполнении
keywords: контроллер для автоматизации, wiren board, диспетчеризация, PLC на Linux, ПЛК
images:
  - 1.webp
video:
  - https://peertube.wirenboard.com/w/bX7A9UTvBaNzx2Qm1pe7ms?start=1s
type: controller
sort: 100
weight: 0.08
show_type: all
available: true
withdraw: false
---

::product

#description
Wiren Board 8 — это универсальный модульный контроллер автоматизации, работающий под управлением свободного программного обеспечения.

Контроллеры Wiren Board применяются в задачах мониторинга серверного и климатического оборудования, диспетчеризации и сбора данных с приборов учёта, в качестве основы для «умного дома» и автоматизации производств. [Примеры внедрений](https://wirenboard.com/ru/contents/solutions/).

Основные отличия от [Wiren Board 7](https://wirenboard.com/ru/product/wiren-board-7/): 64-битный ARM процессор 1.5 ГГц 28 нм, до 4 Гбайт оперативной памяти, а CAN теперь модулем расширения.
**В ревизии 8.4 в MOD1 можно установить только модули дискретных входов и выходов, MOD2 и MOD3 без ограничений, а MOD4 недоступен.**

#info
![](img/catalog/controllers/wiren-board-8/wide.png)

## Основные характеристики

::product-section{title="Аппаратная часть и ПО"}
:photo{
  src="/img/catalog/controllers/wiren-board-8/po.png"
  float="right"
}
В любой комплектации стоит промышленный 4-ядерный 64-битный процессор ARM Cortex A53 с частотой 1.5 ГГц, но от исполнения зависит доступная оперативная и постоянная память:

- от −25 до +75 °С: до 4 Гбайт LPDDR4 RAM и до 64 Гбайт eMMC;
- от −40 до +75 °С: 1 Гбайт LPDDR4 RAM и 8 Гбайт eMMC.

В контроллере используется открытая операционная система Debian Linux 11, kernel 6.8, что даёт широкие возможности по установке стороннего ПО. Также есть аппаратное защищённое хранилище ключей, которое можно использовать для авторизации контроллера в своих сервисах или для привязки лицензий ПО.

Встроенное программное обеспечение бесплатно, открыто и позволяет настраивать контроллер и подключённые к нему устройства, писать сценарии автоматизации, хранить и просматривать архив измерений. [Подробнее о ПО контроллера](https://wirenboard.com/ru/pages/programmirovanie-kontrollerov/).
::

::product-section{title="Интерфейсы и коммуникации"}
:photo{
  src="/img/catalog/controllers/wiren-board-8/interface.png"
  float="right"
}
В базовой комплектации контроллера есть:
- 1 × слот для MicroSD, до 60 Мбайт/с;
- 2 × Ethernet 10/100;
- 1 × USB Host;
- Wi-Fi 802.11n (AP, client), два диапазона 2.4 и 5 ГГц;
- Bluetooth 4.2 + BLE;
- 2 × RS-485;
- 2 × 1-Wire/дискретные входы;
- 4 × дискретные/аналоговые входы/выходы «открытый коллектор».

С помощью модулей расширения вы можете добавить дополнительные интерфейсы:
- 4G (LTE) модем на две SIM-карты формата nano SIM;
- Z-Wave и Zigbee;
- PoE 802.3af, 802.3at или Passive PoE;
- CAN и HDMI (в разработке, если нужно, напишите нам).
::

::product-section{title="Совместимость"}
- Wiren Board 5.
- Wiren Board 6.
- Wiren Board 7.
- Wiren Board 8.
- Интерфейсные модули WB-MIO и WB-MIO-E
::

::
