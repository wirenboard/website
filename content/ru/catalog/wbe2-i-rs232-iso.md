---
article: "WBE2-I-RS232-ISO"
cover: "wbe2-i-rs232-iso/wbe2-i-rs232-iso_front.png"
catalogCover: "wbe2-i-rs232-iso/wbe2-i-rs232-iso_front.png"
documentation: "https://wiki.wirenboard.com/wiki/WBE2-I-RS232-ISO_RS-232_Extension_Module"
meta: "Модуль расширения с гальванически изолированным интерфейсом RS-232 для контроллеров Wiren Board."
keywords: "Wiren Board, RS-232, WBE2-I-RS232, модуль расширения, гальваническая изоляция, MAX232"
images: [
  ["wbe2-i-rs232-iso/wbe2-i-rs232-iso_front.png"],
  ["wbe2-i-rs232-iso/wbe2-i-rs232-iso_back.png"]
]
---
::product
#description
Модуль добавляет гальванически изолированный интерфейс RS-232 в контроллеры Wiren Board. Устанавливается во внутренний слот на плате контроллера. Построен на микросхеме физического уровня MAX232.

#info
## Основные характеристики

::product-section{title="Технические характеристики"}
* микросхема физического уровня: MAX232;
* уровни сигнала: ±15 В;
* защита от перенапряжения на линии: ±15В 
* гальваническая развязка: 1000 В
* потребляемая мощность: 0,1 Вт
::

::product-section{title="Совместимость и настройка"}
Совместим с контроллерами Wiren Board 6...8 всех ревизий.

Настройка выполняется в веб-интерфейсе контроллера: «Настройки → Конфигурационные файлы → Модули расширения и порты». После включения модуля порт становится доступен в Linux, как `/dev/ttyMODx` и работает так же, как обычный serial. 

:include{path="/catalog/includes/quality_control" withSeparator="true"}
:include{path="/catalog/includes/certificates"}
::
