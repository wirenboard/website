---
title: 'Автоматизация двухэтажного коттеджа из клееного бруса'
cover: /img/solutions/voltazhkin_timber_cottage.webp
date: 2025-01-18
category: apartments_automation
---

_«Wiren Board — это платформа, благодаря которой можно легко интегрировать различные устройства и системы, она обеспечивает гибкость, масштабируемость вашего проекта,  возможность адаптировать систему под изменяющиеся требования», **Артем Андрияшев, генеральный директор «Вольтажкин»**_

## О компании

:photo{
    src="/img/solutions/voltazhkin_timber_cottage/1.jpeg"
    caption="Двор дома, вид на веранду"
    width="400"
    float="right"
}

[«Вольтажкин»](https://voltagkin.ru/) занимается интеграцией систем умного дома в Москве и области на этапе чернового ремонта. Компания автоматизировала более 40 объектов общей площадью 5 тысяч м², из них подавляющая часть на оборудовании Wiren Board. «Вольтажкин» проектирует системы электроснабжения, домашней автоматизации, СКС, системы видеонаблюдения и домофонии. Собирает силовые электрические щиты и щиты автоматизации, выполняет программирование и пусконаладку систем, электромонтажные работы.

Компания [«Эколайф»](https://ecolife-house.ru/) специализируется на создании комфортных и функциональных загородных домов под ключ. Она выполняет полный спектр работ: от проектирования до обустройства инженерных систем и благоустройства участков. Клиенты ценят индивидуальный подход компании и её способность реализовывать проекты любой сложности.

В числе выполненных проектов — дом в стиле минимализм с просторной террасой и панорамными окнами, загородный дом в стиле модерн с современными инженерными решениями, а также дом в стиле винтаж с баней и ландшафтным дизайном

C Wiren Board Артем Андрияшев познакомился в 2017 году, заказав пробный комплект из нескольких устройств. Связаться с Артемом проще всего [через телеграм](https://t.me/Artem82).

:gallery{
    :data='[
        ["/img/solutions/voltazhkin_timber_cottage/2.jpeg", "Вид на веранду с другого ракурса"],
        ["/img/solutions/voltazhkin_timber_cottage/3.jpeg", "Фасад дома подсвечивается"],
        ["/img/solutions/voltazhkin_timber_cottage/4.jpeg", "Красивое дерево во дворе"],
        ["/img/solutions/voltazhkin_timber_cottage/5.jpeg", "Сад камней и генератор"]
    ]'
}


## Задачи и проблемы

Дом выполнен из клееного бруса и у него следующая планировка: на первом этаже расположены гостиная, совмещенная с кухней, детская спальня, кабинет и зона SPA с сауной. На втором этаже находятся еще одна детская спальня и мастер-спальня. Также к дому примыкает веранда с летней кухней.

Интеграция умного дома в этот проект сопровождалась рядом сложностей. На Артема вышел представитель застройщика «[Эколайф](https://eclfe.ru/)». Изначально он выбрал другого интегратора, который проект так и не завершил. Специалистам «Вольтажкин» потребовался месяц, чтобы увязать то, что сделано, с тем, как надо. Щит был уже почти полностью «забит», а заказчик вошел во вкус и захотел больше различной автоматизации в доме. Пришлось изменять положение модулей в щите, где\-то удлинять кабели, какие-то модули просто поменять (причем разбираться в щите с неподписанными кабелями — то еще удовольствие). В частности, заменили 6-канальные модули реле [WB-MR6-LV](https://wirenboard.com/ru/product/WB-MR6/) на более компактные [WB-MR6C v.2](https://wirenboard.com/ru/product/WB-MR6C_v2/). Платой за компактность стала более сложная схема электропроводки, поскольку у этого модуля реле сгруппированы в две группы, то есть у каждой группы есть общий проводник. А счетчик электроэнергии [WB-MAP3E](https://wirenboard.com/ru/product/WB-MAP3E/) для ИБП установили непосредственно внутрь «бесперебойника». В итоге все получилось

:gallery{
    :data='[
        ["/img/solutions/voltazhkin_timber_cottage/6.jpeg", "Вид из гостиной на веранду"],
        ["/img/solutions/voltazhkin_timber_cottage/7.jpeg", "Вид из гостиной на веранду, другой ракурс"],
        ["/img/solutions/voltazhkin_timber_cottage/8.jpeg", "Веранда с камином"],
        ["/img/solutions/voltazhkin_timber_cottage/9.jpeg", "Лестница на второй этаж"]
    ]'
}


## Решение

Котельная построена на базе двух котлов: газового и электрического. Газоснабжающая организация ограничила максимальный расход газа, поэтому у газового котла мощность 36 кВт. Электрический котел мощностью 9 кВт включается, когда тепловая нагрузка выше мощности газового котла, либо когда газовый котел неисправен, либо когда нет газа.

Интеграцию котельной в умный дом реализовали с помощью Home Assistant, работающем на Intel NUC. Непосредственно котлами управляет контроллер Zont, который уже интегрирован в Home Assistant. Поэтому можно управлять котлами из единого интерфейса, без необходимости обращаться к приложению Zont. На новых проектах интегратор планирует отказаться от Zont и полностью реализовать логику управления котлами на базе Wiren Board.

В процессе работы заказчик решил добавить систему снеготаяния. Инженеры добавили дополнительный контур с незамерзающим теплоносителем, который разогревает крыльцо и площадку вокруг дома площадью около 150–180 м². 

Система снеготаяния потребляет значительную мощность — до 30 кВт. Если суммировать потребление всех контуров (контур радиаторов, теплые полы, теплоснабжение вентиляции, ГВС, система снеготаяния), общая нагрузка может превысить 50 кВт, что больше возможностей газового котла. В таких случаях автоматически подключается электрический котел. Алгоритм работы прописали в контроллере Zont: если газовый котел в течение пяти минут работает на максимальной мощности и не достигает требуемой температуры, подключается электрический котел, который помогает достичь нужной температуры и затем отключается.

Настройка системы снеготаяния была непростой задачей. Важно было определить оптимальные условия для ее работы, чтобы избежать лишнего расхода энергии и обеспечить эффективное таяние снега. Интегратор в результате экспериментов пришел к выводу, что систему снеготаяния следует запускать при температуре ниже \+3 °C и поддерживать нагрев теплоносителя до \+15 °C при температуре до \-10 °C. При меньших температурах система переходит в режим «теплого старта», когда поддерживают минимально возможную температуру теплоносителя около \+5 °C, чтобы снизить тепловую нагрузку на котельную. Поскольку мощность котельной ограничена, нужно было избежать недостатка тепловой энергии для обогрева дома при отрицательных температурах.

:gallery{
    :data='[
        ["/img/solutions/voltazhkin_timber_cottage/10.jpeg", "Панель управления Zont в котельной"],
        ["/img/solutions/voltazhkin_timber_cottage/11.jpeg", "Щит автоматизации Zont в котельной"],
        ["/img/solutions/voltazhkin_timber_cottage/12.jpeg", "Электротермические приводы в котельной, они подключены к термостатам Valtec"],
        ["/img/solutions/voltazhkin_timber_cottage/13.jpeg", "Система увлажнения в котельной, к ней подключена система очистки воды на основе обратного осмоса"]
    ]'
}

Данные о температуре наружного воздуха забирают с уличного датчика 1-wire, а информацию о погоде — из сервисов Weather Forecast и Яндекс.Погода. Если хотя бы один источник сообщает о снегопаде, система снеготаяния активируется. Пока систему снеготаяния только тестируют, ее параметры отрегулируют после прохождения зимнего сезона.

Вокруг крыльца предусмотрели дренаж, куда будет стекать и дренировать в землю дождевая вода и тающий снег. Интегратор добавил контроль уровня воды в дренажном колодце: установил два датчика уровня (груши) на разной высоте, которые замыкают контакт при достижении определенного уровня воды. Модуль [WBIO-DI-WD-14](https://wirenboard.com/wiki/WBIO-DI-WD-14_Discrete_Inputs) через сухой контакт получает информацию с датчиков, что позволяет своевременно реагировать на возможное переполнение и предотвратить затопление дренажного колодца.

Здесь возникает проблема: как быть в мороз, ведь ресурсы нагрева ограничены? Система снеготаяния может потреблять до 30 кВт, на нагрев вентиляции уйдет до 15 кВт, мощности даже дополнительного электрического котла может не хватить. Поэтому интегратор планирует дорабатывать сценарии в будущем. Какой-то владелец предпочтет пожертвовать таянием снега, другой уменьшит производительность вентустановки. Здесь сложно придумать универсальное решение, так как приоритеты у всех свои.

### SPA-зона

Другая важная часть проекта — автоматизация процессов в зоне SPA. При активации режима сауны система переводит контроллер протечки [WB-MWAC v2](https://wirenboard.com/ru/product/WB-MWAC/) в режим влажной уборки, чтобы избежать ложных срабатываний из\-за повышенной влажности. Одновременно автоматически запускается приточно-вытяжная вентиляция: система открывает клапан для подачи свежего воздуха в парилку и включает вытяжной вентилятор — в парилке всегда будут комфортные условия, душно не покажется. Причем воздух подается не с улицы, а уже подогретый до комфортной температуры. После завершения процедур система продолжает работать для просушки сауны, а затем возвращает контроллер протечки WB-MWAC v2 в обычный режим.

В сауне стоит печь Sangens со своей автоматизацией и встроенным парогенератором. Если нужно поддать парку — в сауне есть специальная кнопка. Интеграцию с автоматикой Sangens не предусмотрели заранее, так как первый интегратор ничего для этого не сделал, а переделывать было поздно. Поэтому умный дом отслеживает энергопотребление сауны через счетчики электроэнергии WB-MAP. И если уровень превышает 500 Вт, значит печка работает, соответственно, срабатывают описанные выше сценарии.

:gallery{
    :data='[
        ["/img/solutions/voltazhkin_timber_cottage/14.jpeg", "Красивый светильник в SPA-зоне и ванная"],
        ["/img/solutions/voltazhkin_timber_cottage/15.jpeg", "Датчик протечки встроили в пол"],
        ["/img/solutions/voltazhkin_timber_cottage/16.jpeg", "Датчик температуры 1-wire в потолке сауны"],
        ["/img/solutions/voltazhkin_timber_cottage/17.jpeg", "Декоративная подсветка под полками"]
    ]'
}

### Датчики

Для безопасности в доме установили датчики угарного газа и дыма на примыкающей веранде с дровяным камином, их подключили по сухому контакту. В котельной установили датчики загазованности. В местах возможных протечек встроили в пол датчики протечки воды, которые подключили к WB-MWAC v2. При обнаружении протечки система автоматически отключает скважинный насос и перекрывает краны после емкостей (бойлер, система очистки воды).

:gallery{
    :data='[
        ["/img/solutions/voltazhkin_timber_cottage/18.jpeg", "Панель управления кондиционером Hisense, панель термостата Valtec, комбинированный датчик WB-MSW"],
        ["/img/solutions/voltazhkin_timber_cottage/19.jpeg", "Справа вверху над камином можно увидеть датчики угарного газа и дыма"],
        ["/img/solutions/voltazhkin_timber_cottage/20.jpeg", "Комбинированный датчик WB-MSW в мастер-спальне"],
        ["/img/solutions/voltazhkin_timber_cottage/21.jpeg", "Печь Sangens"]
    ]'
}

### Освещение

Освещение в доме разнообразно и продумано до мелочей. Используются как недиммируемые светильники, так и диммируемые, а также светодиодные ленты для декоративной подсветки. Особое внимание уделено освещению зоны SPA, в сауне установили красивую соляную стену с диммируемой подсветкой. Ее дополняет подсветка под полками, тоже диммируемая.

Хозяин сразу же сделал красивое ландшафтное освещение территории вокруг дома. Фасадное и ландшафтное освещение автоматизировали: система включает его при наступлении темноты и выключает на рассвете, используя данные о времени заката и рассвета из интернета. Интересно, что интегратор полностью убрал физические выключатели, связанные с фасадной подсветкой. Но если по какой-то причине подсветку нужно выключить, достаточно нажать соответствующую кнопку в интерфейсе Home Assistant.

К сожалению, дизайнер проекта выбрала поворотные выключатели с фиксацией, пользоваться которыми неудобно. Если свет включили голосом через «Алису» или «Сири», положение выключателя не соответствует фактическому состоянию света. Например, свет включен, а выключатель остается в положении «выключено». Чтобы выключить свет, необходимо щелкнуть выключателем на позицию «включено», а потом на «выключено». В будущем хозяин планирует заменить выключатели на более подходящие для умного дома модели.

Управление воротами гаража для мотоцикла сделали с помощью реле Zigbee, поскольку протянуть провода к приводу было проблематично. Реле подключили к приводу ворот и интегрировали в умный дом через Zigbee-шлюз, который установили в Intel NUC с Home Assistant.

:gallery{
    :data='[
        ["/img/solutions/voltazhkin_timber_cottage/22.jpeg", "Светильники в гостиной"],
        ["/img/solutions/voltazhkin_timber_cottage/23.jpeg", "Спотовые светильники в гостиной"],
        ["/img/solutions/voltazhkin_timber_cottage/24.jpeg", "Поворотные выключатели выбрали неудачно"],
        ["/img/solutions/voltazhkin_timber_cottage/25.jpeg", "Светильник в прихожей"]
    ]'
}

### Климат

Климатическая система дома включает теплые полы на первом этаже и в санузлах второго этажа, внутрипольные конвекторы и радиаторы. В каждой комнате установили термостаты Valtec, но интегрировать их в умный дом не удалось из\-за несовместимости программного обеспечения (первый интегратор обещал, что на github есть интеграция Valtec под Home Assistant, но она не заработала, так как проект давно заброшен). Заказчик уже потратил приличную сумму на Valtec, поэтому решил их оставить. Тем более провода к ним уже проложили, дом деревянный, и что-то переделывать сложно. Все контуры отопления снабжены электротермическими приводами, которые подключили к термостатам Valtec. На термостатах можно выставить нужную температуру, после чего они будут поддерживать ее автономно, регулируя электротермические приводы контура в комнате. Конечно, в других проектах «Вольтажкин» использует решения, с помощью которых можно полностью интегрировать систему отопления в умный дом.

Интегратор применил интересное решение для повышения энергоэффективности — останавливать циркуляционный насос ГВС, когда в доме никого нет.

Приточно-вытяжную вентиляционную установку Turkov интегрировали в умный дом по протоколу Modbus. Через клапаны можно регулировать приток воздуха в каждую комнату. Что касается вытяжки, то интегратор установил в каждую комнату вентилятор, управляет которыми через диммеры [WB-MDM3](https://wirenboard.com/ru/product/WB-MDM3/). Вентиляторы подобраны с запасом по производительности, в штатном режиме выставлены на 75% и работают очень тихо (на 100% они уже ощутимо шумят и раздражают). Система вентиляции подогревает приточный воздух с помощью теплоносителя.

В доме установили систему форсуночного увлажнения со своей автоматикой и датчиками в каждой комнате, к умному дому ее подключили через сухие контакты. Управлять увлажнением можно через Home Assistant отдельно для первого и второго этажа. В мастер-спальне и гостиной-кухне установили датчики [WB-MSW](https://wirenboard.com/ru/product/wb-msw-v4/), по показаниям которых система регулирует влажность. Однако здесь есть свои ограничения: мы можем включить увлажнение первого или второго этажа, но если влажность превышает 50% по собственным датчикам системы увлажнения, то увлажнитель не включится. Собственная автоматика увлажнения работает циклами: 3 минуты — увлажнение, 7 минут — пауза. Если мы выключим систему увлажнения через сухой контакт, она все равно отработает цикл.

Кондиционирование обеспечивает VRF-система Hisense с одним внешним блоком, в гостиной установили канальный кондиционер, в остальных комнатах — внутренние блоки. За управление отвечает модуль [ONOKOM](https://onokom.ru/) для VRF-системы.

:gallery{
    :data='[
        ["/img/solutions/voltazhkin_timber_cottage/26.jpeg", "Внутрипольный конвектор в детской и колонка с Алисой"],
        ["/img/solutions/voltazhkin_timber_cottage/27.jpeg", "Блок кондиционирования в детской"],
        ["/img/solutions/voltazhkin_timber_cottage/28.jpeg", "Форсунка системы увлажнения в детской"],
        ["/img/solutions/voltazhkin_timber_cottage/29.jpeg", "Вентиляционные решетки над лестницей"]
    ]'
}

### Видеонаблюдение

Для обеспечения безопасности по периметру дома установили камеры видеонаблюдения Hikvision со своим регистратором. Поток с камер видеонаблюдения интегрировали в Home Assistant, можно просматривать видео с камер в реальном времени через интерфейс умного дома. Но для просмотра записей придется обращаться к собственному интерфейсу Hikvision.

### Электропитание

Система электропитания включает источник бесперебойного питания (UPS) мощностью 8 кВт, c LiFePO4 аккумуляторами емкостью 10.24 кВт·ч. Он обеспечивает резервное питание важных систем дома. Модуль Wiren Board измеряет потребленное от UPS количество кВт·ч, и когда аккумуляторы UPS отдадут 80% своей емкости, контроллер автоматически запускает генератор мощностью 12 кВт. Генератор мощнее UPS и способен обеспечить электричеством весь дом, за исключением сауны. Управление генератором сделали через Wiren Board и Home Assistant, и система рассчитывает уровень топлива, уведомляя владельца при снижении уровня до 20%. Такое уведомление позволяет вовремя заправить генератор и избежать его неожиданной остановки. Конечно, генератор можно запустить и кнопкой в интерфейсе, если требуется. Генератор отдает порядка 5 кВт на зарядку UPS, на дом остается 7 кВт, чего для резервного питания вполне достаточно. По расчетам интегратора, UPS хватит примерно на 6 часов питания дома, и этого времени достаточно, чтобы перекрыть большую часть отключений электроэнергии, генератор запускать не придется.

Интегратор также реализовал систему контроля работы насоса скважины, генератора, SPA-зоны через датчики энергопотребления WB-MAP. В случае отсутствия владельцев дома можно активировать режим «Отпуск», который останавливает циркуляционный насос горячей воды. В Home Assistant есть соответствующая кнопка включить/выключить, которая связана с контроллером Zont, чтобы останавливать циркуляционный насос вручную.

:gallery{
    :data='[
        ["/img/solutions/voltazhkin_timber_cottage/30.jpeg", "ИБП в гараже"],
        ["/img/solutions/voltazhkin_timber_cottage/31.jpeg", "Щит умного дома в гараже"],
        ["/img/solutions/voltazhkin_timber_cottage/32.png", "Состояние электропитания дома (правый скриншот) в интерфейсе Home Assistant"],
        ["/img/solutions/voltazhkin_timber_cottage/33.png", "Управление ИБП и генератором в интерфейсе Home Assistant"]
    ]'
}

### Интерфейс и голосовое управление

Как мы уже говорили, владелец поначалу относился к голосовому управлению скептически, но все изменила его дочь, поэтому для голосового управления можно использовать ассистентов «Алису» или «Сири». В каждой комнате установили умную колонку Яндекса для «Алисы», а с «Сири» можно общаться через iPhone и iPad. Голосовое управление повышает комфорт, взаимодействие с умным домом становится интуитивнее.

:gallery{
    :data='[
        ["/img/solutions/voltazhkin_timber_cottage/35.jpeg", "Колонка с Алисой в гостиной"],
        ["/img/solutions/voltazhkin_timber_cottage/36.png", "Интерфейс Home Assistant"],
        ["/img/solutions/voltazhkin_timber_cottage/37.png", "Интерфейс Home Assistant"],
        ["/img/solutions/voltazhkin_timber_cottage/38.png", "Интерфейс Home Assistant"]
    ]'
}

## Преимущества

:photo{
    src="/img/solutions/voltazhkin_timber_cottage/34.jpeg"
    caption="Модули Wiren Board крупным планом"
    width="400"
    float="right"
}

Проект оказался весьма непростым, но на его примере хорошо видно, что аппетит приходит во время еды. Поначалу владелец был согласен только на ландшафтное освещение и управление котельной, но интегратор совместно с застройщиком смогли его убедить в пользе автоматизации других систем.

Проект стал важным шагом в практике интегратора на пути полной интеграции инженерных систем в умный дом. Несмотря на возникшие сложности с первоначальным проектом и монтажом оборудования, команда смогла успешно реализовать все задуманные функции и продолжает совершенствовать систему. Интегратор планирует использовать полученный опыт в будущих проектах, разрабатывая универсальное решение для автоматизации инженерных систем. Мы обязательно рассмотрим такой проект в будущем.  

В ассортименте компании Wiren Board есть устройства для решения как простых, так и сложных задач автоматизации и диспетчеризации: программируемые логические контроллеры, датчики климата, счетчики электроэнергии, сетевые карты для холодильников, мощные релейные модули и т.д. Все это позволяет подстроиться под любые требования заказчика и использовать оборудование Wiren Board в его экосистеме. При этом обеспечивается возможность расширения экосистемы в будущем.

Компания Wiren Board даёт на всё оборудование двухлетнюю гарантию с заменой оборудования без предварительной отправки в сервисный центр, а инженеры технической поддержки готовы помочь в решении как типовых, так и нестандартных задач.

## Дополнительные материалы

- [Как сделать умный дом, если заказчик не уверен в том, что ему нужно](https://habr.com/ru/companies/wirenboard/articles/869818/)
- [Умный коттедж 500 м² на Home Assistant с разделением на несколько зон](https://wirenboard.com/ru/pages/cottage-artem-home-assistant/)

Прочее

- [Примеры других внедрений](../solutions/)
- [Статьи о подборе оборудования и рассказы пользователей](../articles)