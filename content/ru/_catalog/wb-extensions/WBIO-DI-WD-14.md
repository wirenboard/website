---
article: WBIO-DI-WD-14
name: WBIO-DI-WD-14
title: Модуль ввода-вывода
sub_title: 14 дискретных входов
cover: 1.jpg
documentation: https://wirenboard.com/wiki/WBIO-DI-WD-14_Discrete_Inputs
support_link:
meta: Модуль ввода-вывода WBIO-DI-WD-14
keywords: DI-WD14, WD14, WD-14, DI-WD-14, WD, WBIO-WD-14, 14, WD 14
images:
  - 1.jpg
  - 2.jpg
  - 3.jpg
  - 4.jpg
  - 5.jpg
  - 6.jpg
video:
  - https://peertube.wirenboard.com/w/2DwV6Qd7xSqU6autzeaTMz?start=6s
type: io_module
sort: 100
weight: 0.08
show_type: all
available: true
withdraw: false
---

::product

#description
Предназначен для подключения импульсных счетчиков, кнопок, датчиков с выходом «сухой контакт», ввода дискретных сигналов, контроля целостности цепи. Содержит 14 универсальных входов типа «сухой контакт» и определения наличия низкого напряжения с групповой гальванической развязкой. Режим работы зависит от выбранной схемы подключения.

Если вы планируете подключать к WBIO-DI-WD-14 выключатели, рекомендуем использовать вместо него модуль [WB-MCM8](https://wirenboard.com/ru/product/WB-MCM8/), который может распознавать несколько типов нажатий.


#info
## Технические характеристики

::product-section{title="Дискретные входы"}
- 14 входов
- Групповая гальваническая развязка
- 2 режима работы: «сухой контакт» / наличие напряжения
- Возможна работа одновременно в двух режимах.
- Режим «сухой контакт»: замыкание входа на iGND. Ток срабатывания 1 мА
- Режим наличия напряжения: подача 12/24В AC/DC между входом и iGND. Порог срабатывания от 9 В
::

::product-section{title="Интерфейсы"}
- Шина WBIO
- Можно подключать по Modbus RTU и Ethernet при помощи модуля WB-MIO(Е)
::

::product-section{title="Совместимость"}
- Wiren Board 5.
- Wiren Board 6.
- Wiren Board 7.
- Wiren Board 8.
- Интерфейсные модули WB-MIO и WB-MIO-E
::

::