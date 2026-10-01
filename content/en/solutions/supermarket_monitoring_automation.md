---
title: 'Monitoring and Automation of Supermarket Building Systems'
cover: supermarket_monitoring_automation/supermarket_monitoring_automation.webp
date: 2026-09-30
category: shops_restaurants_monitoring
---

:photo{
    src="supermarket_monitoring_automation/0.jpeg"
    caption="Open refrigerated display case. A 1-Wire DS18B20 sensor is hidden behind the grille and connected to a WB-M1W2 v.3 converter in the gray enclosure beneath the display case"
    width="400"
    float="right"
}

Site: a supermarket belonging to a retail chain in Kazakhstan. Integrator: [VEHI.KZ](http://VEHI.KZ).

| Equipment | Function |
| :---- | :---- |
| [Wiren Board 8](https://wirenboard.com/en/product/wiren-board-8/) | Controller |
| [WB-M1W2 v.3](https://wirenboard.com/en/product/WB-M1W2/) | 1-Wire to Modbus RTU converter for connecting temperature sensors and freezer-room door reed switches |
| [WB-MAP12E](https://wirenboard.com/en/product/WB-MAP12E/) | Electricity consumption metering |
| [WB-MRWM2](https://wirenboard.com/en/product/wb-mrwm2/) | Heated air curtain control |
| [WB-MIR](https://wirenboard.com/en/product/WB-MIR/) | Fan coil unit control |
| [WB-MS v.2](https://wirenboard.com/en/product/WB-MS/) | Indoor climate and illuminance monitoring in the sales area |

> "In this project, the Wiren Board controller is used primarily as a communications gateway: CUBA IoT communicates with the field equipment through it."
>
> **Egor Khikhlushko, Director, VEHI.KZ**

## Project Objectives

The customer needed to reduce the supermarket's operating costs and automatically monitor staff compliance with operating procedures.

## Technical Solutions

DS18B20 sensors connected through WB-M1W2 v.3 modules measure temperatures in cold rooms and refrigerated display cases. Reed switches on freezer-room doors are connected to the same modules.

WB-MAP12E power meters measure the electricity consumption of refrigeration units, ovens, an electric cooking kettle, and other high-power loads.

Fan coil units are controlled by a WB-MIR module via infrared.

Combined WB-MS v.2 sensors monitor the indoor climate and illuminance in the sales area.

Hot- and cold-water meters with pulse outputs are connected to spare discrete inputs on Modbus modules.

:gallery{
    :data='[
        ["supermarket_monitoring_automation/1.jpeg", "One of the freezer rooms: the alarm was triggered manually, and the red indicator is on"],
        ["supermarket_monitoring_automation/2.jpeg", "WB-MAP12E power meter"],
        ["supermarket_monitoring_automation/3.jpeg", "WB-MAP12E power meter and WB-MRWM2 relay module used to control the heated air curtain"],
        ["supermarket_monitoring_automation/4.jpeg", "A 1-Wire temperature sensor installed at the fan coil outlet monitors its operation, while a WB-MIR module provides automatic control"],
        ["supermarket_monitoring_automation/5.jpeg", "WB-MS v.2 sensor in the sales area"]
    ]'
}

The Wiren Board controller collects all data and sends it to CUBA IoT, where the data is displayed on dashboards, analyzed, and used to generate notifications when operating procedures are violated.

:gallery{
    :data='[
        ["supermarket_monitoring_automation/6.jpeg", "Wiren Board 8 controller branded as CUBA IoT"],
        ["supermarket_monitoring_automation/7.png", "CUBA IoT interface: interactive store map with equipment status, device list, and alarm log"],
        ["supermarket_monitoring_automation/8.png", "CUBA IoT interface: temperature monitoring for a refrigerated display case"]
    ]'
}

The controller also handles a small amount of local automation. The heated air curtain is connected through a WB-MRWM2 relay module, and a temperature sensor is installed in the entrance vestibule. A script running on the controller maintains the target temperature in the vestibule, taking the outdoor temperature into account, and disables the air curtain outside business hours.

## Results

After the system was commissioned, analysis of the collected data revealed the following operating-procedure violations:

- refrigeration equipment doors were left open longer than permitted, disrupting the required temperature regime, increasing compressor load, and raising electricity costs;
- high-power electrical loads were not always switched off on time and were sometimes left on altogether;
- lighting and ventilation systems periodically continued operating outside business hours;
- the entrance vestibule was generally overheated.

The notification system for staff and managers helped eliminate these incidents and reduce operating costs.

:gallery{
    :data='[
        ["supermarket_monitoring_automation/9.png", "Examples of violations recorded in CUBA IoT: a stove left on in warming mode, lighting operating outside business hours, and a freezer-room door left open longer than permitted"],
        ["supermarket_monitoring_automation/10.png", "Notifications and event log in CUBA IoT, along with messages in the Telegram channel"]
    ]'
}
