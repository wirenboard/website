---
title: 'Farm Automation: Incubators, Brooders, and Poultry House'
cover: a787a_ostriches/a787a_ostriches.webp
date: 2025-03-31
category: agriculture_automation
---

_«The Wiren Board controller turned into a true Swiss Army knife on the farm. It now runs everything — from incubators and brooders to lighting, ventilation, and energy monitoring. All automation logic runs on a single platform: flexible, intuitive, and reliable.», **Maxim Fedrak, founder of a787a**_

## About the Company

:photo{
    src="a787a_ostriches/1.jpg"
    caption="Collage of the Ostrich Farm"
    width="400"
    float="right"
}

[a787a](https://t.me/sibmax), based in Almaty, Kazakhstan, tackles engineering challenges across various industries. Back in 2015, the team used Wiren Board 5 controllers for the first time when developing control systems for mobile process units in oil fields. Since then, the platform has become the backbone of dozens of diverse projects. Today, a787a focuses on agricultural automation, delivering complete solutions based on Wiren Board controllers for poultry and farming operations.

## Challenges

About a year and a half ago, Maxim bought a rundown farm. Most of the infrastructure had to be rebuilt from scratch. Heating and lighting in the brooders were operated manually, ventilation worked inconsistently, and incubators couldn't maintain stable conditions. Climate control required constant attention. Automation was missing entirely, and the farm consumed all his time without showing signs of scalable growth.

Maxim decided to fix this. He set out to build a control system from the ground up, with one clear goal: automate the core farm processes and reduce the need for manual work.

:gallery{
    :data='[
        ["a787a_ostriches/2.jpeg", "Ostrich on the farm"],
        ["a787a_ostriches/3.jpeg", "Ostrich on the farm"],
        ["a787a_ostriches/4.jpeg", "Peacocks are also present on the farm"],
        ["a787a_ostriches/5.jpeg", "Ostrich on the farm"]
    ]'
}


## Solution

The system is built in three layers.

**Top layer:** An x86 server handles the main logic and analytics. It runs virtual machines with Node-RED, InfluxDB, Mosquitto, Grafana, and other tools. The server collects data from Wiren Board controllers and stores it locally. Part of this data is forwarded to an external system that aggregates information from multiple sites, including the house, the farm, and nearby facilities.

**Middle layer:** The controllers themselves. Currently, the farm uses three Wiren Board 7 units:

* The first handles the ground floor—ostrich enclosures, brooders, hatchery, heating, and ventilation.

* The second runs the poultry house on the second floor.

* The third operates three ostrich incubators, including one experimental model.

A fourth controller will be added later to automate equipment in the metalworking shop.  
 All controllers run Node-RED, which makes automation scripts easy to develop and modify. They store data locally and push key metrics to the server, which powers Grafana dashboards.

**Bottom layer:** Sensors and actuators—relay modules, dimmers, temperature and humidity sensors, voltage monitors, and other devices.

### First-Floor Switchboard

One [**Wiren Board 7**](https://wirenboard.com/en/catalog/) controls all key modules and collects sensor data. It manages brooders, heating, ventilation, and lighting:

* [**WBIO-DO-R10A-8**](https://wirenboard.com/en/product/WBIO-DO-R10A-8/) **(3 units):** Relay output modules for switching heaters, fans, and lights. Each relay supports loads up to 10 A.
* [**WBIO-DI-HVD-16**](https://wirenboard.com/en/product/WBIO-DI-HVD-16/) **(2 units):** Voltage input modules. These detect power failures in incubators and brooders and trigger alerts via a Telegram bot. Maxim plans to add audible alarms in frequently visited areas.
* [**WB-MAP12E**](https://wirenboard.com/en/product/WB-MAP12E/)**:** Multi-channel power meter. Not yet connected, but once online, it will track power usage in real time to evaluate energy efficiency for incubators and brooders.

After launching the system, Maxim ran into an unexpected issue: mice. They chewed through twisted pair cables *inside* the switchboard but left the outer wiring untouched. Sealing the cable entries fixed the problem.

In the hatchery—which includes ostrich and chicken brooder rooms plus separate incubators—another panel houses a [**WB-MR6C v3**](https://wirenboard.com/en/product/WB-MR6C_v3/) relay module that turns off general lighting at night or when no motion is detected. Similar modules handle automated lighting across other parts of the farm.

An intermediate panel in the ostrich enclosure uses [**WBIO-DO-R10A-8**](https://wirenboard.com/en/product/WBIO-DO-R10A-8/) and [**WBIO-DO-R1G-16**](https://wirenboard.com/en/product/WBIO-DO-R1G-16/) to control circulation pumps. In the boiler room, another **WBIO-DO-R1G-16** switches the boiler, pumps, and exhaust fans.

### Second-Floor Switchboard (Poultry House)

Another [**Wiren Board 7**](https://wirenboard.com/en/catalog/) manages devices on the second floor and collects data from sensors:

* [**WBIO-DO-R1G-16**](https://wirenboard.com/en/product/WBIO-DO-R1G-16/)**:** A 16-channel relay module for UV lamps and other loads.
* [**WB-MDM3**](https://wirenboard.com/en/product/WB-MDM3/) **(3 units):** Dimmers for LED lamps and light strips.
* [**WB-MIO-E v.2**](https://wirenboard.com/en/product/WB-MIO-E/)**:** A Modbus-to-Ethernet gateway, currently offline. Maxim plans to remove the second-floor controller and wire the modules directly to the first-floor unit.

:gallery{
    :data='[
        ["a787a_ostriches/6.jpeg", "Ground floor switchboard"],
        ["a787a_ostriches/7.jpeg", "Automation switchboard on the second floor"],
        ["a787a_ostriches/8.jpeg", "Summer pens"],
        ["a787a_ostriches/9.jpeg", "More ostriches"]
    ]'
}

### Ostriches

When Maxim took over the farm, it came with a flock of African ostriches—towering birds nearly three meters tall and weighing up to 120 kilograms. With zero prior experience, he had to learn on the fly. Over time, he figured out the specifics of ostrich care and is now working toward stable, long-term breeding.

Ostriches can live up to 75 years but require close attention. Foot issues are especially dangerous: since they don’t have teeth, they rely on a gizzard filled with small stones to grind food. Any decline in mobility slows digestion, which can lead to serious health problems. During colder months, the birds stay indoors in large heated enclosures. Temperature and humidity are strictly controlled. In warmer seasons, they move to outdoor pens and graze freely on pastureland.

To ensure stable heating, Maxim installed a “Gorynych” automated coal boiler. It supplies hot coolant to all heating loops in the ostrich building. Instead of installing mixing valves, he chose quantitative regulation—keeping the same supply temperature for all circuits and adjusting the heating output by changing the pump speeds.

Typically, each circulation pump is controlled by a manual three-position switch. Maxim rewired them and connected the pump motors to a [**WBIO-DO-R1G-16**](https://wirenboard.com/en/product/WBIO-DO-R1G-16/) relay module. This setup lets him switch pump speeds automatically without frequency drives. The three discrete speeds have been more than enough for his application.

Although the enclosures don’t yet have supply ventilation, the exhaust fans are already part of the automation system. They’re controlled by the main controller and respond dynamically to temperature, humidity, and CO₂ readings.

:gallery{
    :data='[
        ["a787a_ostriches/10.jpeg", "Winter pens"],
        ["a787a_ostriches/11.jpeg", "Incubators"],
        ["a787a_ostriches/12.jpeg", "Test stand with Wiren Board"],
        ["a787a_ostriches/13.jpeg", "Temperature sensors for evaluating incubation quality"]
    ]'
}

### Incubation

Poultry incubation involves hatching chicks from eggs under controlled conditions. For ostriches, the process starts with workers collecting eggs and storing them for a week at 14–16 °C to accumulate enough for a full batch. The eggs then go into incubators where humidity begins at 20–30%, rising to 50–60% in the final 3–4 days before hatching. Temperature and egg-turning frequency follow a detailed schedule and are adjusted gradually.

Once hatched, chicks move to brooders—enclosed chambers with controlled heating and lighting. There, they grow stronger before transitioning to pens or coops for further development. This staged approach ensures optimal conditions throughout the early stages of growth. Each bird species requires specific incubation parameters: ostriches, for example, need low humidity, maintained with dehumidifiers, while waterfowl demand much higher moisture levels.

Maxim allocated a large 12×18-meter room for incubation, divided into several sections. He installed three ostrich incubators and five for chickens—two of the latter hold 4,000 eggs each, while the remaining three are sized for 700 eggs. Incoming air is filtered and sterilized with a UV lamp to maintain hygiene.

Each ostrich pair lays 2–3 eggs per week. Maxim selects breeding pairs based on productivity and offspring quality. Eggs are stored in a refrigerator until incubation begins. The ostrich incubation cycle lasts 42 days. Throughout this period, a specialist candlesticks the eggs weekly—checking fertilization, air sac positioning, cracks, and signs of abnormal development. Non-viable eggs are discarded immediately.

The farm’s previous owner had installed Chinese automation systems in the incubators, but unreliable temperature sensors led to large-scale embryo losses. Even a deviation of 0.5 °C is critical, and humidity must stay within 20–30%. To improve reliability, Maxim added a custom dehumidification system. The incubators also include mechanical trays that tilt periodically to simulate natural egg-turning.

Despite solid build quality, the incubators had design flaws. To diagnose hatching failures, Maxim conducted his own measurements: he attached dozens of 1-Wire sensors directly to the eggs, installed a psychrometer, and mapped temperature variations across the chamber. He found that internal heating and ventilation caused uneven warming, which disrupted successful hatching.

To fix this, he installed tangential fans and began testing airflow patterns to achieve uniform temperature distribution. If his modifications prove effective, he plans to begin manufacturing his own incubators—coinciding with the launch of his metalworking shop.

Chicken incubation also requires precision, though humidity control is less demanding. In one case, 720 Czech eggs were ruined by a 1.5–2 °C overheating due to calibration errors. The system displayed normal readings, but the eggs effectively cooked—resulting in a €500 loss.

Ostrich incubation has been even more challenging. Out of 100 eggs, fewer than 20 chicks hatched, and none survived. Some losses resulted from rearing errors, others from natural mortality, which is notoriously high in young ostriches. Several embryos died during incubation. Maxim continues investigating the causes, including potential genetic factors.

To prevent outages from affecting incubation, all incubators are backed by a 10 kVA uninterruptible power supply (UPS). A Wiren Board controller, connected via RS-232, monitors the UPS and checks its status regularly.

:gallery{
    :data='[
        ["a787a_ostriches/14.jpeg", "Combined sensor in the incubator"],
        ["a787a_ostriches/15.jpeg", "Room for roosters"],
        ["a787a_ostriches/16.jpeg", "This number of roosters isn&apos;t needed on the farm, so they will soon be slaughtered for meat"],
        ["a787a_ostriches/17.jpeg", "But for now, the roosters are fed and watered"]
    ]'
}

### Brooders

Right after hatching, chicks are moved into brooders — self-contained chambers where they continue to grow under controlled conditions. Maxim separates species by keeping ostrich and poultry brooders in two dedicated rooms. Each space has its own supply and exhaust ventilation system with integrated heating, air filtration, and UV lamps for air disinfection.

A brooder looks like a large box divided into individual sections, each with its own lid. Temperature and lighting in each section follow a predefined schedule. Transparent front panels give the brooders an aquarium-like appearance. Inside, Maxim mounted two IP cameras per section to monitor chicks in real time and troubleshoot any issues as they arise.

Each brooder room maintains its own microclimate: temperature, humidity, and CO₂ levels. To manage this, Maxim installed [**WB-MSW**](https://wirenboard.com/en/product/wb-msw-v4/) combination sensors, which feed environmental data into the automation system. The ambient room temperature stays 3–4 °C lower than the internal brooder temperature.

A dedicated Wiren Board controller, installed in an automation cabinet, regulates the heating system. It controls the supply of hot coolant and engages electric heaters when needed. The same system also manages dehumidifiers, exhaust ventilation, and UV lamps.

Inside the brooders, Maxim installed six 250 W infrared heating lamps connected to [**WB-MDM3**](https://wirenboard.com/en/product/WB-MDM3/) dimmer channels (across two modules). Lighting is controlled via [**WB-LED**](https://wirenboard.com/en/product/WB-LED/) dimmers and RGBW LED strips. Temperature is monitored using [**WB-M1W2**](https://wirenboard.com/en/product/WB-M1W2-v3/) modules with 1-Wire sensors. All devices are linked to the controller via RS-485. The control logic runs on a two- or three-week cycle, gradually reducing temperature and simulating day-night cycles with a dynamic lighting schedule.

Maxim tested the setup with a batch of 100 chicken chicks from four different breeds. At first, he kept them all in one section, then separated them by breed. The brooders are installed in three-tier racks, with each rack holding three units. Each brooder can be split into two sections, and the lighting for each section is independently controlled using six [**WB-LED**](https://wirenboard.com/en/product/WB-LED/) channels per rack. The chicks quickly adapted, showing normal activity, feeding, and rest cycles. Once mature, Maxim relocated them to the first-floor poultry house.

The second batch — 720 Czech eggs — was lost entirely due to overheating. The incubator ran 1.5–2 °C too hot, even though the automation system reported normal values. The third batch, from Hungarian eggs, had a much better outcome: about 86% of the 300 eggs hatched successfully, and the chicks moved to the second-floor poultry house. Currently, a new batch of 720 Czech eggs is in incubation under a revised setup based on a [**Wiren Board 7**](https://wirenboard.com/en/catalog/kontrollery/), [**WB-MDM3**](https://wirenboard.com/en/product/WB-MDM3/), [**WBIO-DO-R1G-16**](https://wirenboard.com/en/product/WBIO-DO-R1G-16/), and eight [**DS18B20**](https://wirenboard.com/en/product/1wire-DS18B20/) sensors directly monitoring egg temperatures.

Ostrich chicks, however, presented unique challenges. To prevent leg injuries, Maxim originally lined the brooder floors with carpet. But autopsies of deceased chicks revealed stomachs clogged with synthetic fibers — they had been eating the carpet. He replaced it with perforated rubber mats, but survival rates didn’t improve.

Now, Maxim suspects inbreeding. The previous owner allowed free mating without selective pairing. To test the hypothesis, he plans to order ostrich eggs from South Africa for a controlled trial. Although his current flock is also of African origin, he believes the local breeding stock has lost genetic diversity over time. He’s now seriously considering a full refresh of the gene pool.

:gallery{
    :data='[
        ["a787a_ostriches/18.jpeg", "Ostrich hatch"],
        ["a787a_ostriches/19.jpeg", "Intermediate monitoring of the incubator&apos;s conditions"],
        ["a787a_ostriches/20.jpeg", "Lighting control in all hatchery rooms"],
        ["a787a_ostriches/21.jpeg", "WB-MSW sensor in the brooder rooms"]
    ]'
}

### Poultry House Automation

Maxim recently built a poultry house on the building’s second floor. During our visit, it housed around 150 laying hens and five roosters. The remaining roosters had been moved downstairs — soon to be served for the holidays.

The poultry house focuses on egg production. Maxim sells the eggs to friends and acquaintances as an eco-friendly product, selecting breeds to produce a colorful variety: green, beige, white, and brown shells.

A [**WB-MSW**](https://wirenboard.com/en/product/wb-msw-v4/) multi-sensor monitors temperature, humidity, CO₂ concentration, and light levels. We were surprised to learn how crucial lighting — both in brightness and duration — is for chicken welfare. Even slight deviations can trigger stress and lead to pecking behavior, sometimes with fatal consequences. Maxim programmed the lighting according to breed-specific recommendations: each day includes a gentle 30-minute “sunrise” and “sunset,” with the controller gradually adjusting brightness.

Rows of drinkers and feeders hang from ceiling-mounted cables. To clean the floors, Maxim simply lifts them. Water is dispensed automatically from two tanks, one of which can be pre-filled with vitamin supplements. Once the first tank is empty, the system switches to the second, which holds plain water.

Feed delivery is automated as well. The Wiren Board controller triggers a relay that powers a screw drive, evenly distributing feed into troughs.

Heating is provided by radiators, with temperature managed automatically. Although supply ventilation hasn’t yet been installed, an exhaust system currently handles humidity control. In the summer, Maxim plans to add supply ventilation with evaporative cooling — essential in Almaty, where temperatures often exceed 30 °C, while chickens prefer conditions below 27 °C.

Ideal humidity in the poultry house is 50–60%. At this level, birds drink less, droppings stay firmer, and cleaning becomes less frequent. It also supports microbial activity in the litter, accelerating waste decomposition.

:gallery{
    :data='[
        ["a787a_ostriches/22.jpeg", "Poultry house"],
        ["a787a_ostriches/23.jpeg", "Feeders and drinkers raised for cleaning"],
        ["a787a_ostriches/24.jpeg", "Brooder. The IP camera is visible, and behind the back panel, temperature sensors are installed"],
        ["a787a_ostriches/25.jpeg", "Different breeds of hens lay eggs of different colors"]
    ]'
}


## Advantages

Every engineer needs a dependable tool to tackle complex challenges. For Maxim, that tool is the Wiren Board controller. He tailored the system to the specific needs of different farm areas — poultry house, ostrich enclosures, brooder rooms, and incubators. The next step is to expand automation into the metalworking shop and dairy production.

When diagnosing issues — say, with an incubator — Maxim can quickly connect sensors, collect real-time data, and analyze performance without guesswork. The system’s flexibility, open architecture, and seamless integration with tools like Node-RED, Grafana, and Docker allow him to bring new processes online in weeks instead of months. Backed by robust hardware modules, the Wiren Board platform scales easily with the farm’s growth.

### About Wiren Board

Wiren Board designs and provides a wide range of devices for automation and dispatching, from programmable controllers and climate sensors to energy meters, refrigerator network cards, and relay modules. These devices are built to fit customer needs, integrate easily with existing systems, and allow for future upgrades.

The company provides a two-year warranty on all equipment, offering replacement without the need for prior dispatch to a service center. Their technical support engineers are readily available to assist with both standard and unique challenges.
