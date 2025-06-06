---
title: 'Зональное освещение цеха крупного промышленного объекта на DALI'
cover: dali_zavod/dali_zavod_logo.webp
date: 2024-11-02
category: industrial_dispatching_monitoring
---

_«Здесь, как и во всех наших новых проектах, мы устанавливаем Home Assistant непосредственно на контроллер Wiren Board, производительности хватает», **Юрий Дёмочкин, совладелец группы компаний Etherize**_

## О компании

:photo{
    src="dali_zavod/1.jpg"
    caption="Промышленный объект с освещением DALI"
    width="400"
    float="right"
}

[Группа Etherize](https://etherize.ru/) включает в себя несколько компаний, опыт работы в сфере интеграции систем умного дома и офиса составляет более 12 лет — за это время специалисты компании реализовали более 250 проектов автоматизации. На протяжении последних трех лет Etherize старается выполнять полный цикл ремонта квартир/домов от дизайн-проекта до чистовой отделки, в том числе внедряет системы автоматизации в жилых и офисных помещениях. Это помогает ускорить процесс строительства и упростить взаимодействие всех участников между собой и заказчиком.

Etherize разрабатывает и внедряет инновационные решения умного дома и офиса, используя различные современные технологии, предоставляя своим клиентам услуги от подбора, разработки и проектирования решений до реализации и сервисного сопровождения. Основная специализация: проектирование, сборка и настройка щитов автоматики, программирование оборудования автоматики согласно техническим заданиям, причем как для конечного заказчика, так и для партнеров-инсталляторов.

Etherize работает как в Беларуси, так и в России: головной офис расположен в Минске, дочерний — в Москве. В двух городах есть шоурумы в виде квартиры, где потенциальный заказчик всегда может оценить качество работы и выбрать решения/сценарии, которые будут полезны в их квартирах или офисах.

С Wiren Board Юрий познакомился в 2021 году, нашел информацию в интернете и буквально через несколько недель приехал в офис компании на ежегодное мероприятие WBCE по знакомству с брендом. Там он купил первый комплект для тестов.


## Задачи и проблемы

Автоматизация производственных процессов стала неотъемлемой частью современного предприятия. Оптимизация затрат — ключ к успеху любого бизнеса, и умное освещение играет в этом важную роль. Благодаря эффективному управлению освещением предприятия могут существенно снизить энергопотребление, сократив расходы на электроэнергию.

Рассмотрим эту оптимизацию на примере крупного промышленного объекта площадью 4000 м² в Минской области в Беларуси. На территории функционирует ремонтно-покрасочный цех, который специализируется на покраске крупногабаритной техники.

Задача состояла в гибком управлении освещением на обширной производственной территории. Требовалось разделить пространство на зоны и организовать возможность независимого включения, выключения и изменения интенсивности освещения в каждой из них. Это помогло бы снизить энергопотребление и создать комфортные условия для одновременной работы различных бригад на разных участках производства. Проект предусматривал создание 10 независимых зон освещения.

Изначально проект и монтаж системы освещения выполнили сторонние организации. К компании Etherize обратились, когда выяснилось, что 4 из 10 шин DALI не функционировали — были превышены как максимальная длина шины, так и максимальное количество устройств на шине.

:gallery{
    :data='[
        ["dali_zavod/2.jpg", "Промышленный объект с освещением DALI"],
        ["dali_zavod/3.jpg", "Промышленный объект с освещением DALI"],
        ["dali_zavod/5.jpg", "Щит автоматизации с контроллером Wiren Board"]
    ]'
}

## Решение

Перекладывать кабели было уже невозможно. Интегратор предложил использовать только broadcast-команды, при которых все устройства на шине исполняют полученную команду. Это решало проблему «лишних» устройств на шине, а проблему с длиной шины протестировали в «боевых» условиях.  Индивидуальное управление светильниками на шине при таком решении было невозможным, как и получение обратной связи от устройств на шине. Но сроки горели, и заказчика решение вполне устраивало.

Для реализации задуманного интегратор выбрал [контроллер Wiren Board](https://wirenboard.com/ru/catalog/kontrollery/) и программное обеспечение Home Assistant. Поддержка шины KNX в контроллере помогла эффективно управлять модулями DALI. А благодаря запасу прочности шины DALI стабильно может работать много устройств, что подтвердили испытания и последующая эксплуатация.

### Особенности реализации

Традиционных выключателей или интерактивных панелей для управления освещением нет —  помещение огромное, свободной планировки, рабочие места организуются под каждую техническую задачу. Выключатели можно установить только на наружных стенах, а они расположены далеко от рабочих мест. Зато у персонала есть постоянная радиосвязь с диспетчером, который все время находится на своем рабочем месте. Оптимальным решением было установить компьютер на рабочем месте диспетчера с программой для управления освещением. С помощью программы можно включать нужные группы светильников по зонам и регулировать их яркость по запросам рабочих бригад.

## Преимущества

:photo{
    src="dali_zavod/4.jpg"
    caption="Промышленный объект с освещением DALI"
    width="400"
    float="right"
}

* **Оптимизация энергопотребления**. Зональное управление освещением существенно снизило расходы на электроэнергию, так как светильники теперь включают только в необходимых зонах, а их интенсивность можно регулировать.  
* **Повышение комфорта работы**. Освещение в каждой зоне можно индивидуально настраивать, что создает благоприятные условия для выполнения различного вида работ, повышая производительность труда.  
* **Гибкость и масштабируемость системы**. Благодаря контроллеру Wiren Board и программному обеспечению Home Assistant можно легко адаптировать и расширять систему под будущие потребности предприятия.

Заказчик остался доволен результатом, отметив, что созданная система освещения полностью соответствует его ожиданиям и техническому заданию. 

В ассортименте компании Wiren Board есть устройства для решения любой задачи автоматизации: датчики климата, счетчики электроэнергии, модули защиты от протечек, диммеры светодиодных лент и ламп, мощные реле для светодиодного освещения, модули дискретных входов-выходов и т.д.

Компания Wiren Board дает на все оборудование двухлетнюю гарантию с заменой оборудования без предварительной отправки в сервисный центр, а инженеры технической поддержки готовы помочь в решении как типовых, так и нестандартных задач.


## Дополнительные материалы

Прочее

- [Примеры других внедрений](../solutions/)
- [Статьи о подборе оборудования и рассказы пользователей](../articles)
