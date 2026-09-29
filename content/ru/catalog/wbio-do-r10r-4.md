---
article: "WBIO-DO-R10R-4"
cover: "wbio-do-r10r-4/cover.png"
catalogCover: "wbio-do-r10r-4/catalog-cover.png"
documentation: "https://wirenboard.com/wiki/index.php/%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_%D1%80%D0%B5%D0%BB%D0%B5%D0%B9%D0%BD%D1%8B%D1%85_%D0%B2%D1%8B%D1%85%D0%BE%D0%B4%D0%BE%D0%B2_10A_(roller_shutter)_(WBIO-DO-R10R-4)"
meta: "Модуль ввода-вывода WBIO-DO-R10R-4"
keywords: "Модуль ввода-вывода WBIO-DO-R10R-4"
video: [
  ["https://peertube.wirenboard.com/video-playlists/embed/6623c76e-1abe-4728-959c-f5dde919d80c?playlistPosition=9"],
]
---
::product
#description

Специальная конфигурация выходов для управления электроприводом штор и роллет. Логику переключения и задержку нужно задавать правилами на контроллере.

Модуль сложен в эксплутации, поэтому **не рекомендуем его использовать в новых проектах. Вместо него используйте [модули реле](/catalog/wb-mr-relay-modules/) со специальным режимом «Управление шторами»**, который автоматически контролирует задержку переключения направления и обеспечивает поочерёдное включение каналов Открыть и Закрыть.


#info

## Технические характеристики

::product-section{title="Релейные выходы"}
- 4 группы выходов;
- номинальный ток на канал - 10 А NC/NO;
- конфигурация контактов - SPCO/SPTT (см. [схему](https://wirenboard.com/wiki/WBIO-DO-R10R-4_Relay_Module_For_Roller_Shutter#/media/Файл:Roll.png))
::

:include{path="/catalog/includes/wbio_interfaces"}

:include{path="/catalog/includes/wbio_compatibility_wb5-8"}


::
