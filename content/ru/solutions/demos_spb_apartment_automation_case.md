---
title: 'Автоматизация квартиры 90 м² с перепланировкой'
cover: demos_spb_apartment_automation_case/demos_spb_apartment_automation_case.webp
date: 2026-02-21
category: apartments_automation
---

:photo{
    src="demos_spb_apartment_automation_case/0.jpg"
    caption="Коллаж"
    width="400"
    float="right"
}

Объект: 2-комнатная квартира площадью 90 м² в Санкт-Петербурге, выполнена перепланировка по дизайн-проекту [Архитектурного бюро Картун](https://vk.com/abkartun?from=groups). Интегратор: «Демос».

| Оборудование | Функции |
| :---- | :---- |
| [Wiren Board 7](https://wirenboard.com/ru/catalog/kontrollery/) | Контроллер с [модулем Zigbee Sprut.Stick](https://wirenboard.com/ru/product/WBE2R-R-ZIGBEE-SH/) |
| [WB-MR6C v.2](https://wirenboard.com/ru/product/WB-MR6C_v2/) | Управление группами освещения и другими электрическими нагрузками |
| [WB-MRWL3](https://wirenboard.com/ru/product/wb-mrwl3/) | Управление электрическими теплыми полами. |
| [WB-MDM3](https://wirenboard.com/ru/product/WB-MDM3/) | Диммирование светильников 230 В |
| [WBIO-DO-R10R-4](https://wirenboard.com/ru/product/WBIO-DO-R10R-4/) | Управление приводами штор  |
| [WB-MWAC](https://wirenboard.com/ru/product/WB-MWAC/) | Защита от протечек в зонах кухни и санузлов. Управляет электроприводами кранов на вводе водопровода |
| [WB-MCM8](https://wirenboard.com/ru/product/WB-MCM8/) | Подключение настенных клавишных выключателей |
| [WB-LED](https://wirenboard.com/ru/product/WB-LED/) | Диммирование светодиодных лент |
| [WB-MIR](https://wirenboard.com/ru/product/WB-MIR/) | ИК-передатчик для дистанционного управления телевизорами |

_«В этом проекте оборудование Wiren Board закрыло задачи по освещению, управлению шторами, теплыми полами и защите от протечек», — **Олег Войлов, интегратор «Демос».**_

## Технические решения

### Архитектура системы

В основе системы стоит контроллер Wiren Board 7\. Программный уровень работает на Sprut.Hub, где настроены сценарии управления климатом, освещением и шторами. Голосовое управление через Алису подключено как дополнительный интерфейс.

Электрические нагрузки коммутируют релейные модули и диммеры: релейные модули управляют недиммируемыми светильниками, шторами и теплыми полами, диммеры — диммируемыми группами освещения. Защиту от протечек обеспечивает модуль [WB-MWAC](https://wirenboard.com/ru/product/WB-MWAC/) с датчиками и электроприводными кранами на вводах водопровода.

Настенные клавишные выключатели подключены через [WB-MCM8](https://wirenboard.com/ru/product/WB-MCM8/). Модули поддерживают разные типы нажатий и [Быстрый Modbus](https://wiki.wirenboard.com/wiki/Fast_Modbus).

Домофон подключен к контроллеру через модуль ESPdomofon по RS-485. Управление замком входной двери доступно из приложения и через голосового ассистента.

Телевизоры подключены через ИК-передатчики [WB-MIR](https://wirenboard.com/ru/product/WB-MIR/), что позволяет управлять ими из системы автоматизации.

:gallery{
    :data='[
        ["demos_spb_apartment_automation_case/1.png", "План квартиры"],
        ["demos_spb_apartment_automation_case/2.jpeg", "Зона кухни"],
        ["demos_spb_apartment_automation_case/3.jpeg", "Перегородка из вращающихся зеркал"],
        ["demos_spb_apartment_automation_case/4.jpeg", "Перегородка визуально отделяет прихожую"]
    ]'
}

### Климат и шторы

Для кондиционирования установили мультисплит-систему Haier с тремя внутренними блоками и одним наружным. Кондиционеры подключены к системе автоматизации через Zigbee-модули [Cool.Stick](https://sprut.ai/catalog/item/defaro-coolstick).

Электрические теплые полы уложили почти во всех помещениях. Управление реализовано на контроллере Wiren Board без отдельных настенных термостатов. Радиаторы дополнительно оснастили термостатическими Zigbee-головками Aqara.

Квартира расположена на солнечной стороне, поэтому установили моторизованные шторы. Приводы карнизов подключены через модуль [WBIO-DO-R10R-4](https://wirenboard.com/ru/product/WBIO-DO-R10R-4/).

:gallery{
    :data='[
        ["demos_spb_apartment_automation_case/5.jpeg", "Спальня"],
        ["demos_spb_apartment_automation_case/6.jpeg", "Санузел с ванной"],
        ["demos_spb_apartment_automation_case/7.jpeg", "Отапливаемая лоджия"],
        ["demos_spb_apartment_automation_case/8.jpeg", "Гостиная"]
    ]'
}

### Освещение

Проект включает многозонное освещение с диммированием. Диммируемые светильники подключены через диммеры [WB-MDM3](https://wirenboard.com/ru/product/WB-MDM3/).

Во время монтажа выяснилось, что часть светильников оснащена драйверами DALI, хотя в документации это не указали. Сейчас эти группы работают в ключевом режиме — только включение и выключение. В щите зарезервировано место под DALI-модуль Wiren Board; после его выхода в продажу диммирование восстановят.

Светодиодные ленты управляются модулями [WB-LED](https://wirenboard.com/ru/product/WB-LED/).

:gallery{
    :data='[
        ["demos_spb_apartment_automation_case/9.jpeg", "Щит автоматизации. Внизу — модуль ESPdomofon"],
        ["demos_spb_apartment_automation_case/10.jpeg", "Краны с электроприводами на вводе горячей и холодной воды в квартиру"],
        ["demos_spb_apartment_automation_case/11.jpeg", "Датчик протечки"],
        ["demos_spb_apartment_automation_case/12.jpeg", "Дизайнерский светильник в спальне"]
    ]'
}


## Дополнительные материалы

- [Из съемного жилья в свою квартиру: автоматизация с нуля](https://habr.com/ru/companies/wirenboard/articles/995564/)

Прочее

- [Примеры других внедрений](../solutions/)
- [Статьи о подборе оборудования и рассказы пользователей](../articles)
