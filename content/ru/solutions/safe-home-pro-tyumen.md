---
title: 'Управление климатом, освещением и шторами в городской квартире 140 м²'
cover: safe-home-pro-tyumen/safe-home-pro-tyumen.webp
date: 2025-06-29
category: apartments_automation
---

:photo{
    src="safe-home-pro-tyumen/0.jpeg"
    caption="Кухня-гостиная"
    width="400"
    float="right"
}

Квартира площадью 140 м² расположена в жилом комплексе «Новин» в г. Тюмень. В рамках проекта реализована автоматизация вентиляции с энтальпийным рекуператором, увлажнения воздуха, отопления, тёплых полов, освещения, штор и защиты от протечек. Проект выполнен компанией [SAFE-HOME.PRO](http://safe-home.pro/).

| Оборудование | Функции |
| :---- | :---- |
| [Wiren Board 7.4.2](https://wirenboard.com/ru/catalog/kontrollery/) | Контроллер |
| [WB-MR6C v.2](https://wirenboard.com/ru/product/WB-MR6C_v2/) | Управление приводами отопления Valtec; управление точечным освещением |
| [WB-MRWL3](https://wirenboard.com/ru/product/wb-mrwl3/) | Управление электрическими теплыми полами |
| [WB-M1W2](https://wirenboard.com/ru/product/WB-M1W2/) | Подключение датчиков температуры пола DS18B20 (1-Wire) |
| [WB-LED](https://wirenboard.com/ru/product/WB-LED/) \+ [WB-AMPLED](https://wirenboard.com/ru/product/WB-AMPLED/) | Управление светодиодными лентами Dim-To-Warm |
| [WB-MWAC v.2](https://wirenboard.com/ru/product/WB-MWAC/) | Контроль протечек воды и управление кранами Neptun |
| [WB-MRM2-mini v.2](https://wirenboard.com/ru/product/WB-MRM2-mini/) | Управление рулонной шторой на мансардном окне |
| [WBE2R-R-ZIGBEE-SH](https://wirenboard.com/ru/product/WBE2R-R-ZIGBEE-SH/) | Интеграция Zigbee-датчиков (температура, влажность, присутствие) |

_«В этом проекте мы постарались показать, что умный дом — это не только комфорт, но и инженерная надежность. Управление вентиляцией, увлажнением, отоплением, освещением и шторами интегрировано в единую систему на базе Wiren Board. Все работает стабильно, логично и прозрачно для пользователя. Такой подход — основа нашей работы», **Александр Михалев, директор SAFE-HOME.PRO**_


:gallery{
    :data='[
        ["safe-home-pro-tyumen/1.jpeg", "Прихожая"],
        ["safe-home-pro-tyumen/2.jpeg", "Подсветка коридора"],
        ["safe-home-pro-tyumen/3.png", "План квартиры с расстановкой мебели"],
        ["safe-home-pro-tyumen/4.jpeg", "Кондиционер в детской"]
    ]'
}

## Технические решения

### Климат

В квартире установлена приточно-вытяжная установка Turkov Zenit 500 с энтальпийным рекуператором и HEPA-фильтрами. Для поддержания влажности подключён парогенератор Carel, интегрированный в вентиляцию. Обе установки имеют комплектную автоматику, управление ими осуществляется через Sprut.Hub, установленный на контроллер Wiren Board.

Управление кондиционерами Haier — через шлюзы ONOKOM,  по RS-485. 

Регулирование системы отопления реализовано с помощью термоэлектрических приводов Valtec. Электрические теплые полы на базе нагревательных матов включаются/отключаются при помощи [WB-MRWL3](https://wirenboard.com/ru/product/wb-mrwl3/). Для контроля температуры поверхности пола в стяжку установлены датчики [1-wire DS18B20](https://wirenboard.com/ru/product/1wire-DS18B20/), которые подключены к модулям [WB-M1W2](https://wirenboard.com/ru/product/WB-M1W2-v3/), установленным в подрозетники. 

:gallery{
    :data='[
        ["safe-home-pro-tyumen/5.jpeg", "ПВУ за материалом Термозвукоизол"],
        ["safe-home-pro-tyumen/6.jpeg", "Кладовая. Можно увидеть датчик присутствия и вытяжную вентиляцию"],
        ["safe-home-pro-tyumen/7.jpeg", "Воздухораспределитель перед кладовой"],
        ["safe-home-pro-tyumen/8.jpeg", "Первая детская"]
    ]'
}

### Освещение и шторы

Подсветка реализована с использованием светодиодных лент Arlight Dim-To-Warm, управляемых через [WB-LED](https://wirenboard.com/ru/product/WB-LED/) \+ [WB-AMPLED](https://wirenboard.com/ru/product/WB-AMPLED/). Подсветка включается по сигналу от потолочных датчиков присутствия Zigbee и регулируется с учетом времени суток. 

Основное освещение — светодиодные светильники. Они управляются классически — релейными модулями [WB-MR6C v.2](https://wirenboard.com/ru/product/WB-MR6C_v2/). 

Электрокарнизы штор Onviz с моторами Dooya имеют интерфейс RS-485, по которому и управляются. Рулонная штора на мансардном окне подключена через модуль [WB-MRM2-mini v.2](https://wirenboard.com/ru/product/WB-MRM2-mini/).

:gallery{
    :data='[
        ["safe-home-pro-tyumen/9.jpeg", "Вторая детская с мансардным окном"],
        ["safe-home-pro-tyumen/10.jpeg", "Мансардное окно во второй детской"],
        ["safe-home-pro-tyumen/11.jpeg", "Гардеробная"],
        ["safe-home-pro-tyumen/12.jpeg", "По центру можно увидеть датчик присутствия"]
    ]'
}

## Дополнительные материалы

- [Рецепт успеха: найти интегратора на вечеринке и сделать умный дом](https://habr.com/ru/companies/wirenboard/articles/917078/)

Прочее

- [Примеры других внедрений](../solutions/)
- [Статьи о подборе оборудования и рассказы пользователей](../articles)
