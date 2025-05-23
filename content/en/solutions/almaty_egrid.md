---
title: 'Smart 142 m² Apartment with an Advanced Ventilation and Air Conditioning System'
cover: almaty_egrid/almaty_egrid.webp
date: 2025-01-14
category: apartments_automation
---

_"We chose the Wiren Board controller for our automation projects because of its reliability and flexibility," **says Egor Tarasov, an eGrid integrator**_

## About the Company

:photo{
    src="almaty_egrid/1.jpg"
    caption="Collage of the Apartment"
    width="400"
    float="right"
}

eGrid specializes in turnkey installations of wired smart home systems, offering a comprehensive range of services: design, panel assembly, equipment installation, system commissioning, programming, and equipment sales. Their systems feature functionalities such as lighting control, heating, climate regulation, security systems, integration with wireless devices, and automated blinds.

eGrid has successfully completed projects of varying complexity. For example, in Kazakhstan, eGrid specialists installed dimmable lighting, smart locks, climate control, and leak protection systems, providing seamless management of the home's microclimate and security. These projects highlight the company's ability to tailor solutions to individual needs and incorporate state-of-the-art smart home technologies.

Egor first encountered Wiren Board equipment while working as an installer on smart home projects. After becoming an integrator, he continued using Wiren Board in his projects, citing its unmatched balance of price and quality.

:gallery{
    :data='[
        ["almaty_egrid/2.jpeg", "Apartment building in Almaty, home to Alexander&apos;s apartment"],
        ["almaty_egrid/3.jpeg", "Spacious children&apos;s room. The owner has two daughters; their beds will be on the upper tier"],
        ["almaty_egrid/4.jpeg", "Walk-in closet with a central island. Can you spot the WB-MSW universal sensor?"],
        ["almaty_egrid/5.jpeg", "The walk-in closet connects to the master bedroom"]
    ]'
}

## Challenges

The owner of a 142 m² apartment in Almaty had built a smart home six years ago in a countryside cottage, where all devices operated wirelessly via Wi-Fi and Zigbee. Over time, frequent battery replacements and low-charge notifications became a constant nuisance. Instead of enjoying the convenience of a smart home, maintenance demands took center stage. Determined to avoid this in the new apartment, the owner decided to implement a fully wired solution.

With prior experience in constructing and automating his previous home, the owner personally oversaw every stage of the project, from design to the integration of systems, ensuring optimal results. He collaborated with eGrid, who assembled the automation panel in-house and delivered it to Kazakhstan.

A standout feature of the apartment is its advanced ventilation system, which supplies fresh, humidified, and temperature-controlled air to every room. The apartment includes a spacious living room combined with a kitchen, a master bedroom, a children's room, a walk-in closet, two bathrooms, and a laundry room. For automation, the owner selected Wiren Board equipment, paired with user interfaces powered by Sprut.Hub and Apple HomeKit. Voice control is seamlessly integrated via Alice and Siri.

:gallery{
    :data='[
        ["almaty_egrid/6.jpeg", "Bedside feature wall in the master bedroom"],
        ["almaty_egrid/7.jpeg", "Smart speaker with Alice in the master bedroom"],
        ["almaty_egrid/8.jpeg", "WB-MSW universal sensor and control panels for ventilation and air conditioning in the master bedroom"],
        ["almaty_egrid/9.jpeg", "Spotlights in the walk-in closet, with a large motion sensor visible on the right"]
    ]'
}

## Solution

The automation system panel includes the following components:

* [**Wiren Board 7**](https://wirenboard.com/en/catalog/kontrollery/) – an automation controller that coordinates the operation of all connected modules and devices.  
* [**WB-MR6C v2**](https://wirenboard.com/en/product/WB-MR6C_v2/) **and [WB-MRWL3](https://wirenboard.com/en/product/wb-mrwl3/)** – relays for controlling lights and sockets.  
* [**WB-MDM3**](https://wirenboard.com/en/product/WB-MDM3/)**, [WB-LED](https://wirenboard.com/en/product/WB-LED/), and [WB-AMPLED](https://wirenboard.com/en/product/WB-AMPLED/)** – modules for controlling and dimming LED strips and exhaust fans.  
* [**WBIO-DO-R10A-8**](https://wirenboard.com/en/product/WBIO-DO-R10A-8/) – a discrete output module for managing electromechanical actuators (such as curtains, floor heating, and radiators).  
* [**WBIO-DI-WD-14**](https://wirenboard.com/en/product/WBIO-DI-WD-14/) – a discrete input module for connecting reed switches, buttons, and other discrete signals.

The automation panel also manages socket groups: 10 individual sockets were connected through the WB-MRWL3 relays for precise control. The entire apartment, except for non-switchable groups, can be powered down using an **ABB EN40 contactor**, either manually on-site or remotely. All power-related equipment, including the cabinets, is sourced from ABB.

Additionally, [**WB-MSW**](https://wirenboard.com/en/product/WB-MSW-v4-Case/) **sensors** are installed in each room to monitor temperature, humidity, and CO₂ levels, enabling precise climate control.

Leakage protection is implemented using the Ensystec system. In the event of a leak, the system shuts off the cold/hot water and heating inlet valves. Each valve is controlled independently since leakage sensors are installed in both wet areas and in-floor convectors. All sensors are wired, with cables routed inside the walls. In visible areas, the sensors are mounted within square grates for a clean and aesthetic appearance. The Ensystec controller is connected to the **Wiren Board 7** via RS-485.

:gallery{
    :data='[
        ["almaty_egrid/10.jpeg", "First panel with automation modules and LED strip power supplies"],
        ["almaty_egrid/11.jpeg", "Second automation panel"],
        ["almaty_egrid/12.jpeg", "Close-up view of the left side of the panel"],
        ["almaty_egrid/13.jpeg", "Close-up view of the right side of the panel"]
    ]'
}

### Lighting

The apartment's lighting system is fully dimmable — no group operates on a simple "on/off" basis. A total of 44 light groups have been configured:

* **25 dimmable groups**, controlled by WB-MDM3 modules.  
* **19 LED strip groups**, connected via WB-LED modules.

In the living room, for example, lighting is divided into 12 independent groups, each of which can be controlled separately. This setup allows for tailored lighting scenarios, from bright illumination for work to soft lighting for relaxation.

All 19 LED strips feature color temperature adjustment (CCT), allowing for a range from warm to cool tones. In total, 170 meters of LED strips with a combined power of 3.5 kW were installed throughout the apartment. To power the strips, Mean Well HLG series power supplies were used, connected through inrush current limiters.

A challenge arose with the chandeliers. The designer selected three "semi-smart" chandeliers with remote controls, which could not be integrated with the home automation system. To resolve this, the integrator replaced the chandeliers' internal components, including the LED modules. The inner surfaces of the shades were lined with aluminum tape to enhance light reflection, and CCT LED strips — matching those used elsewhere in the apartment — were installed. Interestingly, although the chandeliers were identical in design, their LED matrices had different specifications, leading to mismatched light tones.

Now, the chandeliers have the same color temperature as the other lights in the apartment and can be controlled via smartphone, wall switches, voice commands, or pre-configured scenarios. This solution satisfied everyone: the customer, the designer, and the integrator's team. The chandeliers are now both stylish and fully integrated into the smart home system.

Bticino call switches were installed to manage the lighting. These switches are directly connected to the inputs of the relay modules, ensuring simple and reliable operation, even without the controller. Additionally, a few scenario keys were added to enable custom lighting modes.

:gallery{
    :data='[
        ["almaty_egrid/14.jpeg", "Chandelier in the living room"],
        ["almaty_egrid/15.jpeg", "Spotlights, air diffusers, and Ubiquiti access point in the living room"],
        ["almaty_egrid/16.jpeg", "Lighting fixtures in the living room"],
        ["almaty_egrid/17.jpeg", "WB-MSW combination sensor in the bathroom"]
    ]'
}

### Climate Control and Heating

The climate control system was one of the most complex aspects of the project.

The apartment combines water-based and electric heating to ensure year-round comfort. Water underfloor heating and wall-mounted radiators were installed. The piping was done using a radial method, with thermoelectric actuators in the collector cabinets controlled via the **WBIO-DO-R10A-8** module. Control of the circulation pump for the water-based underfloor heating was also integrated into the smart home system.

In tiled areas, the water-based underfloor heating is complemented by electric underfloor heating, which can be activated during the off-heating season. Temperature control relies on **1-Wire sensors** embedded in the floor screed, and all thermostats were implemented programmatically.

Beneath the windows, Varmann in-floor fan convectors with three-speed fans were installed. Fan speed is managed via **WBIO-DO-R10A-8 modules**.

The centerpiece of the apartment’s comfort system is the Komfovent C5 Air Handling Unit (AHU). The integrator developed templates for both the **wb-mqtt-serial driver** and **Sprut.Hub**, enabling seamless integration. This unit filters and heats fresh air. The ventilation system is equipped with airflow controllers, which regulate the air supply to individual rooms based on data from wall-mounted CO₂ sensors. These sensors can control VAV valves using a 0–10V signal and feature RS-485 interfaces, allowing for future template development to enhance integration.

:gallery{
    :data='[
        ["almaty_egrid/18.jpeg", "WB-MSW universal sensor and control panels for the AHU and air conditioner in the living room"],
        ["almaty_egrid/19.jpeg", "Mechanical air diffusers, spotlights, and curtain actuators in the living room"],
        ["almaty_egrid/20.jpeg", "View from another angle"],
        ["almaty_egrid/21.jpeg", "Numerous air diffusers in the living room"]
    ]'
}

Two additional modules were added to expand the AHU's functionality:

* Carel HumiSteam Xplus Humidification Module: Connected to the ventilation ducts, this module delivers steam through a specialized chamber. The humidifier is synchronized with the ventilation system, ensuring that after the humidifier stops, the AHU continues operating briefly to remove excess humidity from the ducts. While the humidifier is currently controlled by the AHU automation, a future template may be developed to track error codes. 
* Air Cooling Module: This module cools the supply air during hot seasons. The outdoor cooling unit is installed on the roof.

The apartment's air conditioning system features an LG ARUN050GSS0 outdoor unit from the Multi V S series. It connects to three indoor units: two cassette-style LG ARNU09GTRB4 units and one LG ARNU24GTRB4. Each indoor unit is integrated into the smart home system through a Modbus PDRYCB500 gateway, with one gateway per unit. The integrator created templates for the wb-mqtt-serial driver using WB-Rules and for Sprut.Hub. Climate control relies on WB-MSW sensors, which monitor temperature, humidity, and CO₂ levels. These sensors enable the system to automatically maintain comfortable indoor conditions, with 24°C identified as the owner’s ideal temperature.

In the living room, combined with the kitchen, specialized air inlets feature a mechanical system that directs fresh air where it's needed. Once the furniture is installed, the owner will fine-tune the deflectors to optimize airflow. Additionally, the AHU provides efficient exhaust air removal, maintaining fresh indoor conditions. 

Three duct exhaust fans, connected via **WB-MDM3 modules**, allow adjustable speed control based on the user’s needs. For added convenience, the switches for these fans include illuminated indicators: the backlight turns on when the fan is active. These indicator lights are powered through the **WBIO-DO-R10A-8 module**.

The owner prioritized functionality by leaving several access hatches throughout the apartment to facilitate maintenance of the ventilation system, even at the expense of aesthetic appeal. We will showcase an example in the photos.

:gallery{
    :data='[
        ["almaty_egrid/22.jpeg", "Air diffusers in the hallway, a ventilation maintenance hatch on the right, and spotlights further down"],
        ["almaty_egrid/23.jpeg", "Exhaust fan in the bathroom"],
        ["almaty_egrid/24.jpeg", "Electrothermal actuators for underfloor heating, with the circulation pump on the left"],
        ["almaty_egrid/25.jpeg", "Comfovent air handling unit"]
    ]'
}

### Controls and Additional Features

The owner had a clear goal: to manage the smart home using HomeKit and Alice, as these platforms were already familiar and convenient. However, the Wiren Board controller does not natively support creating bridges to HomeKit or Yandex, presenting an initial challenge in the project’s implementation.

To address this, the team installed a Sprut.stick ZigBee and configured all automation through Sprut.Hub. Bridges were set up within Sprut.Hub to integrate with HomeKit and Yandex, enabling seamless communication with the voice assistants Siri and Alice. Some additional templates were also written for the Wiren Board controller.

One significant challenge was integrating the air conditioners. The TargetHeatingCoolingState widget was used to switch modes:

* 0 — Off,  
* 1 — Heating,  
* 2 — Cooling,  
* 3 — Automatic Mode.

However, the air conditioners’ on/off states and mode selection were controlled by two separate registers. To merge these parameters and ensure proper integration into Sprut.Hub, the eGrid integrator developed a custom driver for the Wiren Board.

The apartment’s four windows were equipped with eight drives for tulle and blackout curtains. Akko drives, connected via RS-485, provide precise, reliable control with feedback. These curtains are used in predefined scenarios such as “Good Morning” and “Good Evening.”

Reed switches were installed on every window and door. Recessed models were used for doors, while surface-mounted ones were used for windows. For a sleek look, the reed switches for windows were hidden within the LED strip profiles, and the mating parts were glued inside the window frames. These switches play a critical role in both light automation and security scenarios.

Motion sensors are essential in a smart home, especially in high-traffic areas. While they may appear to be simple devices, the choice of sensors for this project required careful consideration.

:gallery{
    :data='[
        ["almaty_egrid/26.jpeg", "Curtain drives in the living room"],
        ["almaty_egrid/27.jpeg", "View from the children&apos;s room to the balcony"],
        ["almaty_egrid/28.jpeg", "Curtains drawn in the children&apos;s room, with a light fixture on the right"],
        ["almaty_egrid/29.jpeg", "Two ventilation maintenance hatches, a camera, spotlights, and an access point"]
    ]'
}

The project utilized Hikvision DS-PDCL12DT-EG2 wall and ceiling motion sensors. These security-grade sensors offer excellent response angles and reliably detect motion. However, their 12 cm diameter makes them noticeable on the ceiling, which can sometimes cause dissatisfaction among designers and homeowners. Despite this, these sensors were chosen for their high quality, reliability, and compatibility with the smart home system.

The market offers other alternatives, such as compact recessed models, which are functionally suitable but often prohibitively expensive. Other options tend to be bulky, contain noisy clicking relays, or require exaggerated movements to trigger. In this project, the Hikvision sensors were integrated into the automation system and are used in light control scenarios, ensuring consistent and comfortable lighting in passage areas.

Aqara cameras were selected for their HomeKit compatibility. Four cameras were installed, powered by MEAN WELL HDR units, ensuring full integration into HomeKit. This video surveillance system not only meets functional requirements but also maintains the aesthetic integrity of the interior.

An Aqara D100 smart lock was installed on the front door, allowing the owner to remotely generate and manage access codes for guests.

The apartment’s network infrastructure is built on UniFi equipment, with the CloudKey Gen2 Plus acting as the central hardware controller for managing all devices. The network backbone is powered by a Ubiquiti Security Gateway router, while a UniFi Switch Lite 16 PoE switch handles power distribution and connectivity. To ensure robust Wi-Fi coverage, U7-Pro access points supporting the Wi-Fi 7 standard were installed. UTP Category 6 cables were used for wiring, guaranteeing stable and high-speed data transmission.

## Advantages

:photo{
    src="almaty_egrid/30.jpeg"
    caption="Master bedroom: Door to the walk-in closet is open; WB-MSW universal sensor and control panels for the AHU and air conditioner are visible on the right"
    width="400"
    float="right"
}

The smart apartment in Almaty showcases how modern technology can seamlessly integrate into everyday life, enhancing comfort and convenience. The owner selected the versatile **Wiren Board controller**, utilized the **Sprut.Hub interface** for automation and control, and ensured compatibility with popular platforms like **Apple HomeKit** and **Yandex**.

As a result, all engineering systems were successfully incorporated into the smart home ecosystem. Special attention was given to the ventilation system, which, while some might consider excessive, stands out as an innovative and thoughtful solution.

The market offers a wide range of equipment, but not all devices can be integrated into a smart home without additional customization. In this project, the eGrid integrator had to develop templates for the Komfovent C5 air handling unit and the LG air conditioner gateway. As smart homes become increasingly popular, such challenges are likely to become more common.

### About Wiren Board
 
Wiren Board designs and provides a wide range of devices for automation and dispatching, from programmable controllers and climate sensors to energy meters, refrigerator network cards, and relay modules. These devices are built to fit customer needs, integrate easily with existing systems, and allow for future upgrades.

The company provides a two-year warranty on all equipment, offering replacement without the need for prior dispatch to a service center. Their technical support engineers are readily available to assist with both standard and unique challenges.
