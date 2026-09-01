---
title: Веб-конфигуратор устройств Wiren Board
---
:photo{
  src="deveditor/deveditor.png"
  width="300px"
  float="right"
}

Для настройки устройств Wiren Board без контроллера мы создали веб-конфигуратор. Он доступен в формате сайта по адресу:
[deveditor.wirenboard.com](https://deveditor.wirenboard.com)

Чтобы подключиться к устройствам, понадобится преобразователь интерфейса USB → RS‑485, например [WB‑USB485](https://wirenboard.com/ru/product/WB-USB485/).

Конфигуратор работает только в браузерах с поддержкой Web Serial API: Google Chrome, Yandex Browser, Microsoft Edge и Opera.

Вы можете подключать одно или несколько устройств на один порт.
Для работы с регистрами используются те же шаблоны, что и в драйвере wb‑mqtt‑serial. 

Подробнее о подключении и настройке читайте в документации: «[Веб-конфигуратор устройств Wiren Board](https://wiki.wirenboard.com/wiki/WASM_Device_Editor)».