---
title: Automation and Integration with Wiren Board
---

Wiren Board brings sensors, meters, lighting, HVAC, and other equipment into one automation system. Use the controller to run a standalone installation or to collect data and exchange commands with an existing system. The controller runs Linux and uses built-in drivers and the open MQTT protocol.

:photo{
    src="integrations/connectivity.png"
    caption="Equipment, a Wiren Board controller, and automation software."
    width="100%"
}

## Applications

Wiren Board is used in commercial buildings, shops and restaurants, warehouses, manufacturing, public infrastructure, and homes. See real-world projects in [Solutions](https://wirenboard.com/en/contents/solutions/).

| Sites | Typical tasks |
| --- | --- |
| Commercial buildings | Ventilation, heating, lighting, utility metering, and building services monitoring. |
| Apartment buildings | Meter readings and monitoring of shared building equipment. |
| Shops and restaurants | Refrigeration, power supply, and indoor climate monitoring. |
| Data centers and server rooms | Power supply, cooling, temperature, and water leak monitoring. |
| Manufacturing | Equipment automation, process data collection, and energy monitoring. |
| Agriculture | Climate control in farms and greenhouses, lighting, and irrigation. |
| Warehouses and transport | Monitoring storage and transport conditions. |
| Public infrastructure | Architectural lighting, weather stations, and public facility monitoring. |
| Homes and apartments | Lighting, heating and cooling, blinds, and water leak protection. |

:photo{
    src="integrations/applications.png"
    caption="Wiren Board in a supermarket, a restaurant, and a food warehouse."
    width="100%"
}

## Built-in Capabilities

The controller comes with software for connecting equipment, exchanging data, and running automation logic. Connect your devices and configure them in the web interface.

- **Modbus RTU/TCP devices** — read measurements from sensors and meters, monitor actuator status, and send control commands. Ready-made device templates are available for many models.
- **MQTT** — exchange measurements and commands between connected equipment, applications on the controller, and external software.
- **Modbus RTU/TCP gateway** — make data from connected equipment available to SCADA and other supervisory systems, and receive control commands from them.
- **Scenarios** — configure if-then logic, thermostats, schedules, and other functions without writing code. The built-in wb-rules engine supports custom JavaScript rules.
- **History and notifications** — record measurements, view charts, and send email or SMS notifications. SMS requires a modem and a SIM card.

Automation logic runs on the controller. Local control and configuration work without a cloud service. Use the web interface to configure equipment, manage services, and create dashboards.

:gallery{
    :data='[
        ["integrations/settings-live.png", "Equipment, driver, and service settings in the controller web interface."],
        ["integrations/scenario-live.png", "Thermostat hysteresis and temperature input settings in the Scenarios editor."]
    ]'
}

## Equipment and Integrations

Wiren Board's own [product range](https://wirenboard.com/en/catalog/) includes sensors, relay modules, dimmers, energy meters, and I/O modules. Third-party devices extend the system to HVAC, motorized blinds, refrigeration, and industrial drives.

:photo{
    src="integrations/protocols.png"
    caption="Protocols, software, and ecosystems supported by Wiren Board."
    width="100%"
}

The table below shows the main equipment groups and selected examples. Compatibility depends on the model and interface. To check whether a specific device can be connected and which interface or adapter it requires, contact our technical support team at [support@wirenboard.com](mailto:support@wirenboard.com).

| Equipment | Examples and connections | What you can do |
| --- | --- | --- |
| Ventilation and air conditioning | Komfovent ventilation units with C3/C4 controllers and a PING2 interface module; Systemair air handling units with Corrigo E controllers; Daikin, Mitsubishi Electric, Mitsubishi Heavy Industries, Toshiba, Hitachi, Haier, Hisense, Gree, Midea (MDV), TCL, and AUX air conditioners with a Modbus adapter; and other compatible Modbus HVAC controllers. | Switch operating modes, set temperature setpoints, and read measured values. |
| Heating and thermostats | Siemens RDF302 and ENGO EFAN fan coil thermostats. | Change setpoints and operating modes, and monitor temperature and heating status. Boilers can be integrated using OpenTherm or eBUS with a suitable interface. |
| Electricity, water, and heat meters | Eastron SDM120M/SDM220M electricity meters, water and heat meters with pulse outputs, and [Wiren Board energy meters](https://wirenboard.com/en/catalog/wb-map-energy-meters/). | Collect readings in one system to track and analyze consumption. |
| Lighting | [WB-DALI3](https://wirenboard.com/en/product/wb-mdali-3/) and compatible DALI-2 lighting equipment; [WB-LED](https://wirenboard.com/en/contents/product/WB-LED/) dimmers for LED strips. | Control luminaires, dim LED strips, and include lighting sensors and switches in automation logic. |
| Curtains and blinds | Dooya DT82, A-OK AM68/LM100, and Somfy SDN (Sonesse, Glydea) drives in supported RS-485 versions. Drives with separate open and close wires connect through [WB-MR relay modules](https://wirenboard.com/en/catalog/wb-mr-relay-modules/). | Open and close blinds or curtains, set their position, and combine them with other automation functions. |
| Sensors | DS18B20 temperature sensors, for example through a [WB-M1W2 v.3](https://wirenboard.com/en/contents/product/WB-M1W2/) module. With [WB-MAI6](https://wirenboard.com/en/contents/product/wb-mai6/): Type K thermocouples, Pt100/Pt1000 resistance temperature detectors (RTDs), NTC thermistors, 4–20 mA and 0–10 V sensors, and compatible Hall-effect current sensors. | Measure temperature and current, and acquire analog signals for monitoring and control. |
| Refrigeration | Selected Carel and Eliwell refrigeration controllers with a [WB-REF-U](https://wirenboard.com/en/product/WB-REF-U/) network card, Danfoss ERC 211/213/214 controllers with a [WB-REF-DF-ERC21](https://wirenboard.com/en/product/WB-REF-DF-ERC21/) network card, and Danfoss EKC 202/204 controllers with a [WB-REF-DF-178A](https://wirenboard.com/en/contents/product/WB-REF-DF-178A/) network card. | Monitor temperature and operating status, adjust setpoints, and control defrost cycles. |
| Water leak protection | [WB-MWAC](https://wirenboard.com/en/product/WB-MWAC/) with compatible leak sensors and shutoff valves. | Detect leaks, shut off the water supply, and report status to the automation system. |
| Motors and variable frequency drives | Danfoss VLT Micro Drive FC 51 and Vacon 10. | Control motors and exchange operating data, for example in pumping or ventilation systems. |

Interfaces include Modbus RTU over RS-485, Modbus TCP, 1-Wire, Zigbee, Z-Wave, KNX, and DALI-2. Some protocols require an additional interface module or gateway. For Modbus devices with a ready-made template, select the device type, set its address, and adjust the settings in the web interface instead of mapping Modbus registers manually.

:photo{
    src="integrations/device-config-live.png"
    caption="Selecting a device and configuring sensor parameters in the web interface."
    width="75%"
    float="center"
}

## Automation Logic

Use these tools to write custom logic, build visual flows, or develop applications:

| Tool | Purpose |
| --- | --- |
| **wb-rules** | Built-in rules engine for custom JavaScript automation. |
| **Node-RED** | Installable environment for building automation logic and data flows from visual nodes. |
| **Custom applications** | Programs in Python, JavaScript, C/C++, and other languages; compatible Linux packages and Docker containers. |
| **PLC languages** | FBD, ST, LD, and SFC in third-party environments such as CODESYS and ISaGRAF. Runtime availability and licensing depend on the controller and software. |

Applications can access equipment data through MQTT without implementing each sensor or meter protocol themselves.

:gallery{
    :data='[
        ["integrations/wb-rules-editor.png", "The wb-rules editor: logging a message when CPU temperature exceeds a threshold."],
        ["integrations/nodered-flow.png", "Node-RED: a flow that sorts CPU temperature readings from MQTT into ranges."]
    ]'
}

## Additional Software and External Systems

Add applications to the controller or connect it to an existing control and monitoring system.

**[Home Assistant](https://www.home-assistant.io/)** provides dashboards, automations, and a wide range of integrations. It can run on a compatible controller or on a separate server.

:photo{
    src="integrations/home-assistant.png"
    caption="A Home Assistant dashboard showing temperature, humidity, lighting, and blinds."
    width="75%"
    float="center"
}

**Apple HomeKit** makes selected devices available in the Apple Home app and through Siri. HomeKit is not preconfigured on the controller and requires a software bridge, for example Node-RED with the [node-red-contrib-homekit-bridged](https://flows.nodered.org/node/node-red-contrib-homekit-bridged) module or the [HomeKit Bridge](https://www.home-assistant.io/integrations/homekit/) integration in Home Assistant.

**SCADA and monitoring.** Zabbix and Grafana provide infrastructure monitoring and dashboards. [Rapid SCADA](https://rapidscada.org/product/documentation/) provides tools for monitoring and supervisory control. FUXA provides SCADA and HMI screens in a web browser. Connect external systems using MQTT, Modbus RTU/TCP, or an OPC UA gateway.

:photo{
    src="integrations/scada.png"
    caption="A FUXA SCADA process diagram with pumps, valves, a tank, and a compressor."
    width="75%"
    float="center"
}

## Wiren Board Cloud

[Wiren Board Cloud](https://wirenboard.com/en/contents/cloud/) brings controllers from multiple sites into one account for inventory, remote maintenance, and monitoring.

**Controller inventory.** View connection status and software versions, and organize controllers by site or customer. Store descriptions, notes, and locations, and export the inventory to CSV or Excel.

:photo{
    src="integrations/cloud-inventory.png"
    caption="Controller inventory with connection status and software versions."
    width="100%"
}

**Remote maintenance.** From a browser, configure controllers, use an SSH terminal, manage files, and open web applications running on the controller. Share access with colleagues and download diagnostic archives. No public IP address or router port forwarding is required.

**Metrics and alerts.** Turn on data upload to get controller health dashboards in Grafana. Create charts for readings from connected equipment and set alert thresholds. Receive alerts in Telegram, Discord, or email.

:photo{
    src="integrations/cloud-grafana-news.png"
    caption="Power, controller temperatures, and mains measurements in Grafana."
    width="75%"
    float="center"
}

Wiren Board Cloud is available as a hosted service or as an on-premise installation on your own server. Explore the [demo account](https://wirenboard.cloud/) without registering or connecting a controller.

## Choosing a Solution

Start with your requirements: what to measure, what to control, and where the data needs to go. Browse the [controller range](https://wirenboard.com/en/catalog/kontrollery/) to choose a suitable model. If you need help with selection, configuration, or purchasing, [contact the Wiren Board team](https://wirenboard.com/en/pages/contacts/).
