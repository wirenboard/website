---
title: 'Apartment Automation with Ventilation, Leak Protection, and Motorized Curtain Control'
cover: smart_apartment_automation_wiren_board/smart_apartment_automation_wiren_board.webp
date: 2026-09-01
category: apartments_automation
---

:photo{
    src="smart_apartment_automation_wiren_board/0.jpg"
    caption="Apartment automation system"
    width="400"
    float="right"
}

Project: a smart apartment in Astana. The automation system was designed and assembled by the apartment owner, Nurgisa.

| Equipment | Function |
| :---- | :---- |
| [Wiren Board 6](https://wirenboard.com/en/catalog/kontrollery/) | Controller |
| [WB-MSW v.4](https://wirenboard.com/en/product/WB-MSW-v4-Case/) | Indoor climate monitoring |
| [WB-MAO4](https://wirenboard.com/en/product/WB-MAO4/) | Exhaust fan control |
| [WB-MWAC](https://wirenboard.com/en/product/WB-MWAC/) | Leak protection |
| [WB-MRM2-mini v.2](https://wirenboard.com/en/product/WB-MRM2-mini/) | Lighting control |

> “What I liked about Wiren Board is the relatively low barrier to entry: you can add components gradually as you become familiar with the controller software. I started with ventilation, then added CO₂ monitoring, leak protection, lighting, and curtain control”
>
> **Nurgisa, apartment owner**

## Technical Solutions

### Ventilation

The apartment is equipped with a Royal Clima Vento RCV-500 LUX supply ventilation unit. It is operated from the supplied control panel. For integration with the smart home system, the panel provides an RS-485 interface, allowing the controller to send commands to switch the unit on and off and change its operating modes.

A Hon&Guan HDD-150PE duct fan with an EC motor and a 0–10 V control input is installed in the bathroom. The controller regulates the fan through a WB-MAO4 analog output module.

A wired WB-MSW v.4 sensor is installed in the open-plan kitchen and living room to monitor indoor air quality by measuring CO₂ concentration.

### Leak Protection

The leak protection system is built around a WB-MWAC module. Three leak sensors are installed in the apartment: in the kitchen, toilet, and bathroom. Motorized shut-off valves are installed on the water supply lines.

The sensors and valve actuators are connected directly to the WB-MWAC. The module detects leaks and shuts off the water autonomously. The controller receives status information from the module via Modbus RTU, sends leak notifications, and allows the valves to be closed remotely when necessary.

:gallery{
    :data='[
        ["smart_apartment_automation_wiren_board/1.jpeg", "Royal Clima Vento RCV-500 LUX supply ventilation unit — where the project began"],
        ["smart_apartment_automation_wiren_board/2.jpeg", "Automation control panel"],
        ["smart_apartment_automation_wiren_board/3.jpeg", "Control panels for the supply and exhaust ventilation systems"],
        ["smart_apartment_automation_wiren_board/4.jpeg", "WB-MSW v.4 sensor in the open-plan kitchen and living room"]
    ]'
}

### Lighting

The apartment uses conventional electrical wiring, with cables running directly from the wall switches to the light fixtures.

For remote lighting control, nine WB-MRM2-mini v.2 relay modules are installed in the wall boxes behind the switches, with the switches connected to the module inputs. An RS-485 bus was added for communication with the controller.

This arrangement allows the lighting to operate both autonomously and as part of automation scenarios. The module firmware can control outputs directly from its inputs and recognize different types of button presses, while the controller can also send commands as part of predefined scenarios.

### Curtains

All windows are fitted with Dooya motorized curtain tracks controlled via RS-485.

### User Interface and Automation Scenarios

The user interface and automation scenarios are implemented using the controller’s standard software: its built-in web interface and the wb-rules rule engine.

Residents access the controller’s web interface from their mobile devices.

:gallery{
    :data='[
        ["smart_apartment_automation_wiren_board/5.jpeg", "Hon&Guan HDD-150PE duct fan"],
        ["smart_apartment_automation_wiren_board/6.jpeg", "Supply air ceiling diffuser in the entrance hall"],
        ["smart_apartment_automation_wiren_board/7.jpeg", "Leak sensor in the bathroom"],
        ["smart_apartment_automation_wiren_board/8.jpeg", "ZHIWU recessed lights in the hallway"]
    ]'
}

### Voice Control

Voice control is implemented using the built-in Wiren Board integration with Yandex Alice, included with the controller software.

Three smart speakers are installed in the apartment: in the living room, bedroom, and children’s room.

A “Good Night” scenario is configured. When the voice command is issued, any open curtains are closed, all lights except the nightlights are switched off, and a lullaby starts playing on the speaker in the children’s room.

::related-materials

::
