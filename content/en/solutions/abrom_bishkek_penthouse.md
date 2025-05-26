---
title: 'Smart Automation for a Three Storey Apartment'
cover: abrom_bishkek_penthouse/abrom_bishkek_penthouse.webp
date: 2025-05-25
category: apartments_automation
---

_«Wiren Board is a robust, open-architecture platform that is easy to configure and debug directly on-site.», **says Magdi Minullin, CTO of the integration company Abrom.**_

## About the Company

:photo{
    src="abrom_bishkek_penthouse/1.jpeg"
    caption="Spacious double-height entrance hall"
    width="400"
    float="right"
}

[Abrom](https://abrom.kg/en.html) is a seasoned integrator of smart home systems operating in CIS countries. The company specializes in implementing smart technologies in apartments and houses during the rough-in or renovation stage.

With **53 successful projects** covering a total area of over **10,000 m²**, Abrom provides services that include the design of power supply systems, home automation, and structured cabling systems (SCS), as well as the assembly of automation panels, system programming, and commissioning. Additionally, the company supplies consumables and equipment for smart homes.

To streamline the setup and integration of smart home systems, Abrom offers free software, **Abrom.soft**, which significantly speeds up commissioning processes.

Magdi Minullin first came across Wiren Board in 2019 while looking for a solution to automate Abrom’s first project, which now serves as a showroom and testing ground.

:gallery{
    :data='[
        ["abrom_bishkek_penthouse/2.jpeg", "Staircase to the second floor with accent lighting; the flowers are a house-warming gift"],
        ["abrom_bishkek_penthouse/3.jpeg", "Seven-meter-tall curtains require motorised tracks — hand-pulling isn’t an option"],
        ["abrom_bishkek_penthouse/4.jpeg", "Spiral stairway to the top floor"],
        ["abrom_bishkek_penthouse/5.jpeg", "Living room viewed from the mezzanine"]
    ]'
}


## Goals and Challenges

The client engaged an integrator to automate a three-level, 324 m² apartment in the Malina residential complex in Bishkek, Kyrgyzstan. The task began with a lower floor of roughly 120 m² laid out in a conventional way: two bedrooms, two bathrooms, a storage room, a kitchen-living room, and a hall. Seeking a brighter, more open environment, the owner asked the team to rework the plan. The integrator merged the kitchen and living room into a 36 m², double-height great room that now anchors the entire home. One former bedroom became a 15 m² study with space for both work and relaxation, while the second bedroom turned into a 21 m² guest suite. Service areas were streamlined as well: visitors now have a dedicated shower room and WC, and the hall features generous storage beside a stylish entryway.

On the second level, the integrator created a fully private zone by fusing two smaller rooms into a 26 m² master suite. Large windows and a sitting nook give the space an airy feel. Adjacent to the bedroom, a nearly 12 m² en-suite contains a bathtub, a walk-in shower, and a double vanity. A 17 m² walk-in closet sits next door, providing ample room for clothing and personal items. A broad staircase links the first two floors, while a spiral stair rises to the roof terrace.

The third level devotes about 32 m² to a home office and an additional bathroom. From the office, occupants step onto two separate terraces: one serves as a solarium with a hot tub, and the other functions as a barbecue deck with a full dining area.

The great room’s seven-metre ceiling made motorised curtains essential, and the owner also requested electric drives for two retractable awnings that shield the terraces from sun and rain. Beyond these shade controls, the smart-home brief covers climate management, lighting, leak prevention, and energy metering.

Implementing the system took roughly eighteen months. The integrator ran new cabling, assembled three control panels, and commissioned dozens of devices. Thanks to a generous budget, the team selected best-in-class equipment, and the remainder of this article explores those choices in depth.

:gallery{
    :data='[
        ["abrom_bishkek_penthouse/6.jpeg", "Kitchen-side view into the living room"],
        ["abrom_bishkek_penthouse/7.png", "Level 1 furniture layout"],
        ["abrom_bishkek_penthouse/8.png", "Level 2 furniture layout"],
        ["abrom_bishkek_penthouse/9.png", "Upper-level furniture layout"]
    ]'
}

## Solution

The integrator placed an automation panel on every floor to shorten cable runs, yet the total wiring still runs nearly 7 km. Each panel hides in a purpose-built recess behind a designer door, having a clean appearance while maintaining easy access.

The main panel on Level 1 houses a [Wiren Board 7.4](https://wirenboard.com/en/catalog/kontrollery/) controller that coordinates every subsystem over an RS-485 Modbus network. Inside the same enclosure sit:

* [WB-MR6C v.3](https://wirenboard.com/en/product/WB-MR6C_v3/) relay modules for lighting and HVAC,  
* [WBIO-DI-WD-14](https://wirenboard.com/en/product/WBIO-DI-WD-14/) discrete-input modules, and  
* a [WB-MAP3E](https://wirenboard.com/en/product/WB-MAP3E/) power-quality meter.

Level 2 carries additional WB-MR6C v.3 relays plus a [WB-MWAC v.2](https://wirenboard.com/en/product/WB-MWAC/) leak-detection module. The terrace panel combines WB-MR6C v.3 and [WB-MR3LV/I](https://wirenboard.com/en/product/WB-MR3/) relays to drive exterior lights and awnings.

Seven SW007 leak sensors guard wet zones, while two GIDROLOCK ULTIMATE valves shut off the supply if water appears. Another WB-MAP3E tracks consumption and power quality; its readings are displayed in the controller’s web interface and in mobile apps.

:gallery{
    :data='[
        ["abrom_bishkek_penthouse/10.jpeg", "Main automation panel on Level 1"],
        ["abrom_bishkek_penthouse/11.jpeg", "Wiren Board controller with discrete-input modules"],
        ["abrom_bishkek_penthouse/12.jpeg", "Automation panel on Level 2"],
        ["abrom_bishkek_penthouse/13.jpeg", "Relay modules"]
    ]'
}

### Lighting & Curtains

The apartment splits its illumination into 78 independent circuits. The owner skipped dimmable LED strips, preferring fixed-output fixtures grouped by function: sconces and nightlights for after-dark paths, soft accent lamps for evening ambience, and dedicated stair lighting. Relay modules switch each group, so dimming was unnecessary given the functional grouping.

Ceilings soar to seven metres in the double-height living space, which makes manual curtain control impractical. The integrator installed ten Dooya DT82TV motors on RS-485 curtain tracks. Voice commands — “Alice, open the living-room curtains” — and the Apple Home and Yandex apps handle day-to-day operation, while wall switches provide a fallback.

### Climate Control

The HVAC mix includes 11 electric under-floor zones and 8 water radiators. WB-MS v.2 multisensors read temperature and humidity in bedrooms and baths; cost-effective DS18B20 probes, wired through WB-M1W2 modules, cover the rest. The integrator tucked the sensors into wall boxes and finished them with perforated plates that match the switch hardware. While this setup looks aesthetically pleasing, placing sensors inside wall boxes is questionable, as it may not reflect the actual room temperature — but the client was satisfied.

Central heating feeds the radiators, and VALTEC VT.TE3043.A.220 electro-thermal actuators let the system fine-tune each room. Thermostats fix the floor surface at a steady set-point.

The team planned to integrate the Daikin split systems through ONOKOM gateways, but the specific indoor units lacked support. After weeks of trials the client postponed integrating the AC units until compatible ONOKOM modules reach the market.

### Awning Control

Terrace awnings run on three-wire actuators (L, N, control). Connecting the control lead to L drives the fabric one way; tying it to N reverses the motion. Two WB-MR3LV/I relay modules implement that logic and slot neatly into the terrace panel.

:gallery{
    :data='[
        ["abrom_bishkek_penthouse/14.jpeg", "Pair of GIDROLOCK ULTIMATE shut-off valves (left and right)"],
        ["abrom_bishkek_penthouse/15.jpeg", "Wall sconces in the living room"],
        ["abrom_bishkek_penthouse/16.jpeg", "Independent lighting groups in the living room"],
        ["abrom_bishkek_penthouse/17.jpeg", "Seven-meter curtains in the living room"]
    ]'
}

### Management Interfaces

The system offers several control options to keep operation effortless for the owner:

* Voice assistants: Yandex Alice and Apple Siri  
* Mobile apps: Yandex Smart Home and Apple Home

When deeper access is needed, the owner can open the built-in web interfaces of Wiren Board or Sprut.Hub. For remote work the integrator connects through the Wirenboard Cloud service and never has to visit the apartment.

### Examples of Automation Scenarios

* “Alice, hello\!” — turns on the hallway lights, starts background music, and opens the living-room curtains.  
* “Good morning” — opens the bedroom curtains, switches on gentle lighting, and raises the temperature from night-time economy to a comfort set-point.  
* “Good night” — closes the bedroom curtains, turns off the main lights, and leaves night-lights for safe movement.  
* “Dinner” — plays background music in the kitchen-living room, closes the curtains, and switches on warm-white dining lights.  
* “Alice, bye\!” — turns off every light, closes all curtains, and keeps the hallway lit for five minutes so the owner can leave safely.

The owner can edit these scenes or build new ones in the Yandex Smart Home and Apple Home apps, as well as in Sprut.Hub. A Zigbee radio module added alongside Sprut.Hub keeps the door open for future wireless devices.

### Abrom’s Modular Add-ons

The integrator loaded two plug-in packages onto the Wiren Board controller:

* Lighting module handles mapping wall switches to their corresponding lighting circuits.  
* Climate module — sets operating modes for radiators, under-floor heat, and (later) air conditioners.

Because these modules rely only on simple configuration files, even a site electrician can fully commission the system without programming skills. Abrom shares the packages free of charge with other integrators on request, which keeps commissioning time to a minimum.

## Advantages

:photo{
    src="abrom_bishkek_penthouse/18.jpeg"
    caption="Terrace awning fully extended"
    width="400"
    float="right"
}

Automation now delivers exactly what the client wanted: comfort without extra effort. Lights switch by zone, curtains and awnings move by voice or phone, and each room holds its own temperature while the logic shuts off heating or cooling the moment it reaches the target.

The whole setup runs quietly and seamlessly without requiring user involvement. When they want changes, they tweak scenes, add devices, or connect through the cloud—no service call required.

### About Wiren Board

Wiren Board designs and provides a wide range of devices for automation and dispatching, from programmable controllers and climate sensors to energy meters, refrigerator network cards, and relay modules. These devices are built to fit customer needs, integrate easily with existing systems, and allow for future upgrades.

The company provides a two-year warranty on all equipment, offering replacement without the need for prior dispatch to a service center. Their technical support engineers are readily available to assist with both standard and unique challenges.
