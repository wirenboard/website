---
title: Wiren Board Controller Software
---

## Bundled Software

Wiren Board controllers come with a full-fledged Debian Linux operating system and preinstalled software that allows you to solve most automation tasks.

Included software capabilities:

- multilingual adaptive web interface with graphical and text dashboards
- creating automation scripts in a JavaScript-like language using wb-rules
- simple automations with Scenarios without programming
- remote access via [Wiren Board Cloud](/en/contents/cloud)
- notification module via SMS, Email, and Telegram
- storage of values received by the controller with export to CSV and charts
- support for popular device protocols: Modbus RTU/TCP, KNX, Zigbee, Z-Wave, OpenTherm, DLMS/COSEM, etc.
- data exchange with upper-level systems via MQTT, Modbus RTU/TCP, OPC UA, IEC 104, and others
- controller firmware updates and installation of third-party packages from the Debian Linux repository: Docker, NodeJS, Python, etc.

Read about the web interface in the article [Web Interface of Wiren Board Controllers](https://wirenboard.com/en/pages/wiren-board-controller-web-interface/), and see supported protocols in the [documentation](https://wirenboard.com/wiki/Supported_devices).

:gallery{
    :maxColumns="3"
    :data='[
        ["wiren-board-controller-software/text_dashboard_example.webp", "Text dashboard"],
        ["wiren-board-controller-software/modbus_device_setup.webp", "Modbus device configuration"],
        ["wiren-board-controller-software/svg_dashboard_apartment.webp", "Interactive SVG dashboard"],
        ["wiren-board-controller-software/wb_rules_script_editor.webp", "wb-rules editor"],
        ["wiren-board-controller-software/history_tool_interface.webp", "History view"],
        ["wiren-board-controller-software/text_dashboard_mobile.webp", "Mobile device control"]
    ]'
}

## Additional Software

Wiren Board controllers can be programmed in IEC 61131-3 languages (FBD, ST, LD, SFC) using development environments such as MasterSCADA 4D, ISaGRAF, CODESYS, and KLogic. [Learn more](https://wirenboard.com/wiki/IEC_61131-3).

For collecting, processing, and storing information about an object, as well as monitoring and dispatch control based on the obtained data, you can use SCADA systems such as SAYMON, Zabbix, Grafana, IntraSCADA, MasterSCADA, SimpLight SCADA, Rapid SCADA, and others.

Third-party home automation software is supported: Node-RED, Home Assistant, IntraHouse, Apple Home, iRidium Server, and more. The full list of supported software with installation instructions can be found in the [documentation](https://wirenboard.com/wiki/Supported_devices).

:gallery{
    :maxColumns="3"
    :data='[
        ["wiren-board-controller-software/masterscada_4d_fbd.png", "FBD program in MasterSCADA 4D"],
        ["wiren-board-controller-software/node_red.png", "Node-RED"],
        ["wiren-board-controller-software/rapid_scada.png", "Rapid SCADA"],
        ["wiren-board-controller-software/grafana.png", "Grafana"],
        ["wiren-board-controller-software/intrascada.png", "IntraSCADA"],
        ["wiren-board-controller-software/home_assistant.png", "Home Assistant"]
    ]'
}
