---
title: Программное обеспечение контроллеров Wiren Board
---

## Программное обеспечение в комплекте

Контроллеры Wiren Board поставляются с полноценной операционной системой Debian Linux и предустановленным ПО, с помощью которого можно решить большинство задач автоматизации.

Возможности ПО в комплекте:

- мультиязычный адаптивный веб-интерфейс с графическими и текстовыми дашбордами;
- создание скриптов автоматизации на JavaScript-подобном языке с помощью wb-rules;
- простые автоматизации с помощью Сценариев без программирования;
- удалённый доступ через [Wiren Board Cloud](/ru/contents/cloud);
- интеграция с платформой «Дом с Алисой» (Яндекс) для голосового и облачного управления;
- модуль уведомлений по SMS, Email и Telegram;
- хранение истории полученных контроллером значений с выгрузкой в CSV и графиками;
- поддержка популярных протоколов устройств: Modbus RTU/TCP, KNX, Zigbee, Z-Wave, OpenTherm, DLMS/COSEM и др.;
- обмен данным с системами верхнего уровня по протоколам MQTT, Modbus RTU/TCP, OPC UA, МЭК 104 и др.;
- обновление прошивки контроллера и установка сторонних пакетов из репозитория Debian Linux: Docker, NodeJS, Python и т.п.

О веб-интерфейсе читайте в статье [Веб-интерфейс контроллеров Wiren Board](https://wirenboard.com/ru/pages/wb-software/), а поддерживаемые протоколы смотрите в [документации](https://wirenboard.com/wiki/Supported_devices).

:gallery{
    :maxColumns="3"
    :data='[
        ["programmirovanie-kontrollerov/text_dashboard_example.webp", "Текстовый дашборд"],
        ["programmirovanie-kontrollerov/modbus_device_setup.webp", "Настройка Modbus-устройства"],
        ["programmirovanie-kontrollerov/svg_dashboard_apartment.webp", "Интерактивный SVG-дашборд"],
        ["programmirovanie-kontrollerov/wb_rules_script_editor.webp", "Редактор правил wb-rules"],
        ["programmirovanie-kontrollerov/history_tool_interface.webp", "Просмотр истории значений"],
        ["programmirovanie-kontrollerov/text_dashboard_mobile.webp", "Управление с мобильного устройства"]
    ]'
}

## Дополнительно

Контроллеры Wiren Board можно программировать на языках МЭК 61131-3 (FBD, ST, LD, SFC), используя среды разработки MasterSCADA 4D, ISaGRAF, CODESYS и KLogic. [Подробнее](https://wirenboard.com/wiki/IEC_61131-3).

Для сбора, обработки и хранения информации об объекте, а также мониторинга и диспетчерского контроля на основе полученных данных, можно использовать SCADA-системы SAYMON, Zabbix, Grafana, IntraSCADA, MasterSCADA, SimpLight SCADA, Rapid SCADA и другие.

Поддерживается сторонее ПО для домашней автоматизации: Node-RED, Home Assistant, IntraHouse, Apple Home, iRidium Server и другие. Полный список поддерживаемого ПО с инструкциями по установке смотрите в [документации](https://wirenboard.com/wiki/Supported_devices).

:gallery{
    :maxColumns="3"
    :data='[
        ["programmirovanie-kontrollerov/masterscada_4d_fbd.png", "FBD программа в MasterSCADA 4D"],
        ["programmirovanie-kontrollerov/node_red.png", "Node-RED"],
        ["programmirovanie-kontrollerov/rapid_scada.png", "Rapid SCADA"],
        ["programmirovanie-kontrollerov/grafana.png", "Grafana"],
        ["programmirovanie-kontrollerov/intrascada.png", "IntraSCADA"],
        ["programmirovanie-kontrollerov/home_assistant.png", "Home Assistant"]
    ]'
}
