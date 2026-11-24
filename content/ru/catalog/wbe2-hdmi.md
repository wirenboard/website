---
article: "WBE2-HDMI"
cover: "wbe2-hdmi/cover.png"
catalogCover: "wbe2-hdmi/catalog-cover.png"
images: [
  ["wbe2-hdmi/cover.png"],
  ["wbe2-hdmi/wbe2-hdmi-5.png"],
  ["wbe2-hdmi/wbe2-hdmi-6.png"],
  ["wbe2-hdmi/wbe2-hdmi-7.png"],
  ["wbe2-hdmi/wbe2-hdmi-8.png"],
  ["wbe2-hdmi/wbe2-hdmi-9.png"],
  ["wbe2-hdmi/wbe2-hdmi-10.png"],
  ["wbe2-hdmi/wbe2-hdmi-11.png"],
  ["wbe2-hdmi/wbe2-hdmi-12.png"],
  ["wbe2-hdmi/wbe2-hdmi-13.png"]
]
documentation: "https://wirenboard.com/wiki/WBE2-HDMI_v.1_HDMI_Extension_Module"
meta: "Модуль расширения WBE2-HDMI для Wiren Board 8.5"
keywords: "Модуль расширения WBE2-HDMI для Wiren Board 8.5"
---
::product
#description

Устанавливается в слот MOD4. Добавляет контроллеру HDMI-порт 
для вывода изображения на мониторы, панели, дисплеи и другие устройства с интерфейсом HDMI.

Возможно использование панелей с сенсорными экранами, 
при этом сам экран подключается к USB-порту контроллера.

Если раньше вы были ограничены веб-интерфейсом, то теперь вы можете вывести на экран изображение любого приложения, работающего на контроллере. Это удобно при организации интерфейса пользователя зарядной станции, постамата, щита управления технологической установкой и любых других систем автоматизации, в которых контроллер и дисплей находятся рядом.

Совместим с контроллером Wiren Board 8.5 начиная с ревизии 8.5.2E, 
а также [с некоторыми более ранними ревизиями](https://wiki.wirenboard.com/wiki/WBE2-HDMI_v.1_HDMI_Extension_Module#%D0%A1%D0%BE%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C).


#info

## Основные характеристики

::product-section{title="Технические характеристики"}
:photo{
  src="wbe2-hdmi/wbe2-hdmi-1.png"
  width="500px"
  float="right"
}

- максимальное разрешение: 4K (3840x2160) - 30 fps;
- тип разъема: Micro-HDMI type D;
- передача звука: поддерживается;
- управление CEC: не поддерживается.
::

::product-section{title="Программное обеспечение"}
:photo{
  src="wbe2-hdmi/wbe2-hdmi-2.png"
  width="500px"
  float="right"
}

При старте контроллера запускается браузер Firefox в режиме киоска, 
на который выводится веб-интерфейс контроллера. Это можно отключить 
и средствами Linux вывести на экран необходимое приложение 
или текстовый/графический интерфейс самой операционной системы.
::

::product-section{title="Подключение"}
:photo{
  src="wbe2-hdmi/wbe2-hdmi-3.png"
  width="500px"
  float="right"
}

При заказе контроллера с HDMI все подключения и настройки 
выполняются на производстве. При покупке модуля отдельно, подключение 
выполнять в соответствии с [документацией](https://wiki.wirenboard.com/wiki/WBE2-HDMI_v.1_HDMI_Extension_Module#%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0). В комплекте с модулем поставляется кабель Micro-HDMI — HDMI, длиной 0,5 м.

Сенсорный экран подключается к контроллеру по USB.
::

::product-section{title="Настройка"}
:photo{
  src="wbe2-hdmi/wbe2-hdmi-4.png"
  width="500px"
  float="right"
}

Настроить модуль можно как в веб-интерфейсе контроллера Wiren Board, 
так и в консоли.

Настраивается:

- разрешение экрана;
- ориентация экрана;
- отображение курсора мыши;
- URL стартовой страницы браузера.
::

:include{path="/catalog/includes/quality_control"}


::
