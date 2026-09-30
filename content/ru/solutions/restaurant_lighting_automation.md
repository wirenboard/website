---
title: 'Автоматизация освещения в ресторане'
cover: restaurant_lighting_automation/restaurant_lighting_automation.webp
date: 2026-09-30
category: shops_restaurants_monitoring
---

:photo{
    src="restaurant_lighting_automation/0.jpg"
    caption="Вход в ресторан Embers"
    width="400"
    float="right"
}

Объект: ресторан Embers в отеле Radisson Hotel Astana. Интегратор: Jarqin Jan, Казахстан.

| Оборудование | Функции |
| :---- | :---- |
| [Wiren Board 8](https://wirenboard.com/ru/product/wiren-board-8/) | Контроллер |
| [Sprut.stick ZigBee WBE2R-R-ZIGBEE-SH](https://wirenboard.com/ru/product/WBE2R-R-ZIGBEE-SH/) | Подключение Zigbee-устройств + лицензия Sprut.Hub |
| [WB-LED](https://wirenboard.com/ru/product/WB-LED/) + [WB-AMPLED](https://wirenboard.com/ru/product/WB-AMPLED/) | Диммирование светодиодных лент |
| [WB-MDM3](https://wirenboard.com/ru/product/WB-MDM3/) | Диммирование светильников 230 В |
| [WB-MR6C v.2](https://wirenboard.com/ru/product/WB-MR6C_v2/) | Включение и выключение недиммируемых групп освещения |

> «В ресторане используются самые разные светильники: светодиодные ленты на 24 В, магнитные треки на 48 В, диммируемые и недиммируемые светильники с питанием 230 В. Оборудование Wiren Board управляет всеми этими группами»
>
> **Бисенбеков Даурен, технический специалист интегратора Jarqin Jan**

## Задача

Организовать ручное, сценарное и автоматическое управление освещением ресторана.

:gallery{
    :data='[
        ["restaurant_lighting_automation/1.jpg", "Общий зал ресторана"],
        ["restaurant_lighting_automation/2.jpg", "Потолочные светильники и бра в общем зале"],
        ["restaurant_lighting_automation/3.jpg", "Подвесные светильники в общем зале"],
        ["restaurant_lighting_automation/4.jpg", "Стойка у открытой кухни"]
    ]'
}

## Технические решения

### Архитектура системы

Основой системы стал контроллер [Wiren Board 8](https://wirenboard.com/ru/product/wiren-board-8/). В него установили модуль расширения [Sprut Zigbee](https://wirenboard.com/ru/product/WBE2R-R-ZIGBEE-SH/), а на самом контроллере работает ПО Sprut.Hub.

Светодиодными лентами управляют [WB-LED](https://wirenboard.com/ru/product/WB-LED/) и [WB-AMPLED](https://wirenboard.com/ru/product/WB-AMPLED/), светильники на 230 В диммирует [WB-MDM3](https://wirenboard.com/ru/product/WB-MDM3/), а недиммируемые группы включает и выключает [WB-MR6C v.2](https://wirenboard.com/ru/product/WB-MR6C_v2/).

Для ручного управления используют клавишные выключатели без фиксации, подключенные ко входам диммеров и релейных модулей.

:gallery{
    :data='[
        ["restaurant_lighting_automation/5.jpg", "Щит автоматики"],
        ["restaurant_lighting_automation/6.jpg", "Контроллер Wiren Board 8 и модули в щите"],
        ["restaurant_lighting_automation/7.jpg", "Блоки питания светодиодных лент подписаны по группам освещения"]
    ]'
}

Интерфейс управления создан в Apple HomeKit и выведен на отдельный планшет. В нем можно включать и выключать отдельные группы освещения и регулировать их яркость.

В системе настроены пять сценариев:

- «Доброе утро»;
- «После ужина»;
- «Ужин»;
- «Уход гостей»;
- «Закрытие ресторана».

Каждый сценарий включает нужные группы освещения и устанавливает для них заданную яркость.

:gallery{
    :data='[
        ["restaurant_lighting_automation/8.png", "Интерфейс Apple HomeKit: сценарии и группы освещения"],
        ["restaurant_lighting_automation/9.png", "Регулировка яркости группы освещения в Apple HomeKit"]
    ]'
}

Для двух дизайнерских светильников установили диммируемые источники питания с управлением по Zigbee.

:gallery{
    :data='[
        ["restaurant_lighting_automation/10.jpg", "Дизайнерский светильник в виде атомной решетки"],
        ["restaurant_lighting_automation/11.jpg", "Светильник-решетка вблизи"]
    ]'
}

Самой мощной нагрузкой стало декоративное потолочное панно в фойе — 1,4 кВт. Эту группу подключили через три усилителя WB-AMPLED, работающих параллельно.

:gallery{
    :data='[
        ["restaurant_lighting_automation/12.jpg", "Декоративное потолочное панно в фойе"],
        ["restaurant_lighting_automation/13.jpg", "Потолочное панно вблизи"]
    ]'
}
