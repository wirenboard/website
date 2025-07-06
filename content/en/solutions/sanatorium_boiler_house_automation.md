---
title: 'Sanatorium Boiler House Automation and Dispatching Systems'
cover: sanatorium_boiler_house_automation/boiler_house_cover.webp
date: 2025-07-07
category: industrial_dispatching_monitoring
---

## Why Wiren Board

The ability to remotely configure and program the controller without specialized devices or software was the key factor in our decision.

_Anton Stepanov, Director of a local engineering company_

## About the Company

This regional contractor has been working in the field for over 20 years, specializing in the development and maintenance of modern boiler house systems: designing, constructing, commissioning, and providing long-term service maintenance. Their most popular solutions are autonomous boiler houses dedicated to heating a single building, usually with a power output of several megawatts. These are modern, unattended installations equipped with Automated Process Control Systems (APCS) and Automated Dispatch Control Systems (ADCS). Their main functions include providing heating and hot water (DHW).

## Project Goals

Development and implementation of APCS and ADCS for a standalone 2 MW autonomous gas boiler house serving a sanatorium.

:photo{
    src="sanatorium_boiler_house_automation/01.jpg"
    caption="The boiler house and the sanatorium under construction at the time of the photo."
}

The boiler house operates without permanent on-site personnel. It supplies heat to the heating, ventilation, and domestic hot water systems of the sanatorium.

## Solutions

The APCS and ADCS are built on the [Wiren Board 7](https://wirenboard.com/en/product/wiren-board-7/) controller and its expansion modules.

### Equipment Used:

- [Wiren Board 7](https://wirenboard.com/en/product/wiren-board-7/) – 1 unit
- [WBIO-DI-WD-14](https://wirenboard.com/en/product/WBIO-DI-WD-14/) – 2 units
- [WBIO-DO-SSR-8](https://wirenboard.com/en/product/WBIO-DO-SSR-8/) – 1 unit
- [WBIO-DO-R1G-16](https://wirenboard.com/en/product/WBIO-DO-R1G-16/) – 1 unit
- [WB-MR6C v.2](https://wirenboard.com/en/product/WB-MR6C_v2/) – 1 unit
- [WB-MAI6](https://wirenboard.com/en/product/wb-mai6/) – 2 units
- [WB-MAO4](https://wirenboard.com/en/product/WB-MAO4/) – 1 unit
- [WB-MAP3ET](https://wirenboard.com/en/product/WB-MAP3ET/) – 13 units

:gallery{
    :data='[
        ["sanatorium_boiler_house_automation/06.jpg", "Boiler house control panel exterior"],
        ["sanatorium_boiler_house_automation/07.jpg", "and interior"]
    ]'
}

All logic is implemented using the `wb-rules` scripting engine, without any third-party software. The user interface is developed through the controller's built-in web interface.

### Gas Leak Detection

Detection of natural and carbon monoxide gas is handled by a stationary gas detector. Its dry contact outputs are connected to the inputs of the [WB-MR6C v.2](https://wirenboard.com/en/product/WB-MR6C_v2/) relay module. The following are also wired into this module:

- Fire alarm output  
- Gas overpressure relay  
- Emergency shutdown button for the main gas valve  

The main gas valve (MGV) is connected to the relay module's output. The controller's [mapping matrix](https://wirenboard.com/wiki/index.php?title=I/O_Mapping_Matrix) helped to ensure the MGV closes if any of the input contacts on the relay module is disconnected. This logic operates independently of the controller.

Additionally, the MGV closes if the module loses power. The controller reads the state of the module's inputs and outputs over Modbus RTU.

Control over MGV opening is implemented via a `wb-rules` script and is only possible (via physical button or web interface) if all safety conditions are satisfied.

### Pump Control

The boiler house includes 16 pumps: 13 circulation, 2 feed, and 1 dosing pump.

:photo{
    src="sanatorium_boiler_house_automation/03.jpg"
    caption="Circulation pumps"
}

The dosing pump has its own automation and the controller only reads fault signals via a WBIO-DI-WD-14 module (dry contact). For the remaining pumps, phase-by-phase voltage, current, and power factors are monitored.

Power quality is measured using [WB-MAP3ET](https://wirenboard.com/en/product/WB-MAP3ET/) electrical measuring devices. A script was implemented which uses the measurements to protect motors from:

- Overcurrent and undercurrent  
- Current imbalance  
- Voltage anomalies  
- Phase loss  
- Incorrect phase sequence  

Hydraulic faults (e.g. closed valve, jammed impeller) are also detected based on power factor.

Most pumps have backups. A script switches to the reserve pump upon failure of the main one. To ensure even motor wear, the operation is switched between the main and reserve pump every 24 hours.

For pumps without an active backup, an auto-restart script attempts limited restarts with timeouts in case of a fault. After all attempts fail, the pump is locked until manual reset. Successful continuous operation for an established timeout resets the attempt counter.

### Make-up Water Control

The boiler system includes a water storage tank, which is filled automatically.

:photo{
    src="sanatorium_boiler_house_automation/08.jpg"
    caption="Water storage tank and feed pumps"
}

Four level sensors (dry contact) are used here:

- High emergency (overflow)  
- High operating (close fill valve)  
- Low operating (open fill valve)  
- Low emergency (tank empty)  

Sensors are connected to WBIO-DI-WD-14. The valve is wired to the same relay module as the MGV.

Feed pumps maintain pressure in the heating system using a hysteresis algorithm. A 4–20 mA analog pressure sensor is connected to a 12 channel [WB-MAI6](https://wirenboard.com/en/product/wb-mai6/) module.

### Temperature Control

Heating loop temperature is adjusted within a heating schedule held according to the outdoor temperature. DHW temperature is maintained constant via hysteresis.

Three-way motorized valves mix return flow into the supply to control temperature (in DHW, this refers to heating fluid before the heat exchanger). More mixing = lower output temperature.

Temperature sensors (RTDs) are wired in 3-wire mode to WB-MAI6 (which becomes 6-channel in this mode).

Valve actuators are controlled by a WBIO-DO-SSR-8 module. Its opto-relay output allows short control pulses, minimizing wear compared to mechanical relays.

### Boiler Control

The facility houses four Thermex Coloss M condensing boilers with built-in control panels and modulating burners that independently maintain temperature.

:photo{
    src="sanatorium_boiler_house_automation/02.jpg"
    caption="Thermex Coloss M boilers"
}

Temperature setpoints are delivered via 0–10 V signals from the [WB-MAO4](https://wirenboard.com/en/product/WB-MAO4/) analog output module. Setpoints are maintained slightly above the highest required loop temperature.

Boiler lockout signals (dry contact) are generated upon low fluid and/or gas pressure using WBIO-DO-SSR-8.

In case of boiler faults, the boiler panel emits a 230 V "alarm" signal read by the WBIO-DI-WD-14 via an intermediate relay.

Boilers operate in cascade. A script computes the integral of deviation between the output temperature and setpoint over time. When the integral exceeds a threshold, another boiler is engaged; when it drops, one is disengaged. Faulted boilers are excluded. Boilers rotate regularly to balance run time and wear.

Before ignition, the boiler pump starts. Ignition begins only once the pump reaches working condition, based on current and power factor. After shutdown, the pump continues running to cool the heat exchanger.

### User Interface

User interface panels are placed on the boiler house automation cabinet door and in the guardroom. These [HMI panels](https://wirenboard.com/en/product/YC-SM08P/) communicate with the controller over Ethernet. The user interface is implemented using the controller's built-in web interface.

Audible and visual alarms are triggered by a signaling device mounted outside the boiler building, directly controlled by the controller.

In the guardroom, the [MQTT Alert for IOT](https://play.google.com/store/apps/details?id=gigiosoft.MQTTAlert) app runs on the panel, playing sounds triggered by MQTT topic changes. The app only plays specific ringtones and is not used for visual alerts, including one for loss of controller connection.

Maintenance personnel can access the controller's web interface remotely via the [Wiren Board Cloud](https://wirenboard.com/en/pages/cloud/), which ensures secure remote access. Alerts are also sent to a dedicated Telegram group. However, since message delivery isn’t guaranteed, guard personnel are instructed to manually notify engineers if no message or response is seen.

### Event Logging

All system events that affect equipment operation are recorded with timestamps in the `wb-rules` system log. This enables full traceability of actions and responses.

### Manual Control Mode

Every component of the boiler house (except safety-critical ones) can be switched to manual mode. This disables automation for that device, and an entry is made in the system log. This is intended for commissioning and maintenance purposes.

:photo{
    src="sanatorium_boiler_house_automation/04.jpg"
    caption="Service personnel convenience features"
}

:include{path="en/solutions/includes/footer"}
