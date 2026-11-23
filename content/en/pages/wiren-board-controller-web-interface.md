---
title: Wiren Board Controllers Web Interface
---

## Capabilities

[Wiren Board controllers](https://wirenboard.com/en/catalog/kontrollery/) come with a preinstalled web interface that lets you:

- create information panels (Dashboards) to control the controller and peripheral devices;
- view data from the archive;
- exchange data with upper-level software and other devices via the Modbus TCP and Modbus RTU protocols;
- automate actions using scenarios;
- configure the controller as well as connected modules and devices;
- set up SMS and email event notifications;
- update the controller software;
- multilingual interface

The controller’s web interface interacts with the outside world via the [MQTT](https://wirenboard.com/wiki/MQTT) protocol, which makes it possible to exchange data with any devices connected to the controller, automation rules, and external software that supports this protocol.

To access the controller’s web interface, connect to it via Wi-Fi or Ethernet, open a browser, and enter the controller’s IP address in the address bar. In this article, we’ll cover the main capabilities; for connection instructions and the full description, see [our documentation](https://wirenboard.com/wiki/Wiren_Board_Web_Interface).

## Information Panels (Dashboards)

Information panels are convenient for viewing and analyzing data, as well as for controlling the controller and connected devices. There’s no limit to the number of panels, so you can split a large amount of data into groups: terrace, first and second floors, etc.

### Text Panel

The main element of a text information panel is a widget. A widget allows you to display information from different sources in one place.

Besides displaying information, a widget can contain controls: toggles, buttons, and sliders to select a value from a range. When creating a widget, you give it a name, choose which data it will display, and how they will be labeled.

The number of widgets on a single panel is not limited.

:gallery{
    :maxColumns="2"
    :data='[
        ["wiren-board-controller-web-interface/widget_demo.gif", "A widget lets you combine information from different devices in one place and control them"],
        ["wiren-board-controller-web-interface/widget_create.webp", "You can create a widget in the web interface: set a name and select channels to display information or control a device"],
        ["wiren-board-controller-web-interface/text_dashboard_example.webp", "Example of a text information panel"],
        ["wiren-board-controller-web-interface/text_dashboard_mobile.webp", "Mobile version of the text panel — widget size and position adapt to the screen width"]
    ]'
}

### Interactive SVG Panel

An SVG panel is an interactive graphical panel. With SVG panels you can create virtual control consoles for an object’s automation and mimic diagrams of process installations.

To create an SVG panel, draw an SVG image in any vector graphics editor, upload it to the Wiren Board software, and bind graphical and text elements to data sources or controls. Any MQTT topics can serve as data sources.

The web interface includes a visual editor that simplifies panel creation — select an element on the SVG image and specify what data to display in it, how to react to them, and what to do if a user interacts with the element.

Capabilities:

- displaying textual or logical information;
- changing the appearance of an SVG element depending on the received information: you can change fill and stroke colors, element opacity, substitute the received value with your own, or hide/show the element;
- controlling actuators: turning loads on/off, changing device operating modes.

SVG panels work on mobile devices, but you need to consider the image size. If elements are too small, they’ll be hard to use. A good solution may be to split graphical panels into desktop and mobile versions designed with mobile specifics in mind.

Read more about creating an interactive SVG panel in the article [SVG-Dashboards](https://wirenboard.com/wiki/SVG-Dashboards).

:gallery{
    :maxColumns="2"
    :data='[
        ["wiren-board-controller-web-interface/svg_element_binding.webp", "Binding an SVG element: we will display the temperature from a sensor"],
        ["wiren-board-controller-web-interface/svg_dashboard_apartment.webp", "Apartment"],
        ["wiren-board-controller-web-interface/svg_dashboard_shop.webp", "Store"],
        ["wiren-board-controller-web-interface/svg_dashboard_boiler_room.webp", "Boiler room"]
    ]'
}

## Data Archive

You can analyze how the data received by the controller changes over time using charts. Any MQTT topics and widgets can serve as sources of archived data.

Capabilities:

- selecting a time period;
- simultaneous display of data from multiple sources;
- automatic coloring of charts in different colors;
- cursor measurements on one or multiple charts;
- chart zooming and panning;
- viewing value deltas;
- taking screenshots.

The tool is located in the “History” section.

:gallery{
    :maxColumns="2"
    :data='[
        ["wiren-board-controller-web-interface/history_tool_interface.webp", "Interface of the “History” tool. Three channels from the WB-MSW3 sensor are selected: temperature, humidity, and illumination"],
        ["wiren-board-controller-web-interface/history_point_value.webp", "Viewing the value at one of the points on the illumination chart"]
    ]'
}

## Sending Data to Upper-Level Software

A Wiren Board controller can act as a gateway and exchange data with upper-level software: software of other devices, SCADA systems, cloud MQTT brokers.

From the web interface you can configure data exchange with external devices and software via the Modbus TCP and Modbus RTU protocols. In this case, the controller will act as a Modbus Slave device, and you will be able not only to read data from the controller, but also send commands to the devices connected to it.

Data exchange via other protocols can be configured in the console; read about it in the documentation: [SNMP](https://wirenboard.com/wiki/SNMP), [MQTT](https://wirenboard.com/wiki/MQTT#.D0.A0.D0.B0.D0.B1.D0.BE.D1.82.D0.B0_.D1.81_.D1.81.D0.BE.D0.BE.D0.B1.D1.89.D0.B5.D0.BD.D0.B8.D1.8F.D0.BC.D0.B8_MQTT_.D1.81_.D0.B2.D0.BD.D0.B5.D1.88.D0.BD.D0.B5.D0.B3.D0.BE_.D1.83.D1.81.D1.82.D1.80.D0.BE.D0.B9.D1.81%D1%82%D0%B2%D0%B0), [Zabbix](https://wirenboard.com/wiki/Zabbix_support).

:gallery{
    :maxColumns="2"
    :data='[
        ["wiren-board-controller-web-interface/modbus_gateway_demo.gif", "A Wiren Board controller can be used as a gateway for bidirectional data exchange with other devices"],
        ["wiren-board-controller-web-interface/modbus_tcp_gateway_setup.webp", "Configuring a Modbus TCP gateway on a controller with RS-485-connected equipment: dimmer channels selected for export"]
    ]'
}

## Automations

An automation system is not only about collecting and analyzing data, but also about automatically responding to events.

### Rule Editor

The built-in software of the Wiren Board controller includes a flexible scripting tool in a JavaScript-like language — WB-Rules. Scripts can be created and edited right in the web interface, with console debugging available.

Capabilities:

- automation of any actions with data or connected devices;
- reading and publishing MQTT topics;
- working with timers;
- working with notification and alert services;
- creating virtual devices with custom logic;
- working with the controller’s file system.

The tool can be found in the “Rules” section; you can read the full description in our [GitHub repository](https://github.com/wirenboard/wb-rules) and in the [documentation](https://wirenboard.com/wiki/%D0%94%D0%B2%D0%B8%D0%B6%D0%BE%D0%BA_%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB_wb-rules).

:photo{src="wiren-board-controller-web-interface/wb_rules_script_editor.webp" caption="Script editor"}

Creating a heater automation in the script editor available in the controller’s web interface

### Scenarios

For quickly creating logic without programming, you can use Scenarios. This is a visual tool in the web interface that makes it easy to set up system behavior without writing code. Scenarios are suitable for typical tasks and allow you to:

- control lighting using motion sensors, door sensors, and switches;
- maintain a set temperature by automatically adjusting it using a sensor and a relay;
- set up simple “Event-Action” scenarios;
- create your own templates;
- work in the graphical interface or connect modules in WB-Rules code;

The tool can be found in “Rules → Scenarios”; you can read the full description in our [GitHub repository](https://github.com/wirenboard/wb-scenarios) and in the [documentation](https://wirenboard.com/wiki/Scenarios).

:photo{src="wiren-board-controller-web-interface/scenarios_editor.webp" caption="Creating underfloor heating automation in the Scenarios editor available in the controller’s web interface"}

## Controller Settings

Wiren Board controllers use the free Debian Linux operating system, so most settings are stored in configuration files.

The controller’s web interface has a tool for editing them, which lets you configure:

- the controller’s network interfaces;
- NTP client parameters;
- [expansion and I/O modules](/en/catalog/wb-extensions/) connected to the controller;
- equipment connected via RS-485;
- the KNX device connection service;
- the controller’s analog and digital inputs/outputs;
- data archive parameters;
- the Modbus TCP/RTU gateway;
- the SMS and email notification service.

For example, to configure a Modbus device connected to the controller, you need to complete three steps:

1. Open the serial port settings.
2. Add a new Modbus device: select a template with a description of Modbus registers, specify the device’s Modbus address, and set the required parameters.
3. Save the settings.

After saving the settings, the device card will automatically appear on the “*Devices*” tab. You can now use its data in automation scripts and widgets, and also control the device from the web interface or scripts.

:gallery{
    :maxColumns="2"
    :data='[
        ["wiren-board-controller-web-interface/settings_list.webp", "List of settings that can be changed via the web interface"],
        ["wiren-board-controller-web-interface/modbus_device_add.webp", "To add a new Modbus device, select a template and specify the device’s Modbus address"],
        ["wiren-board-controller-web-interface/modbus_device_settings.webp", "In the Modbus device settings you can disable polling of unnecessary channels and change factory parameter values"],
        ["wiren-board-controller-web-interface/device_tab_view.webp", "Device representation in the web interface on the “Devices” tab"]
    ]'
}

## System Log

Wiren Board controllers use the journald system logging service, which processes log write events and saves them to binary files. If errors occur during operation of the controller or connected devices, the first thing to check is the system log messages.

In the web interface, system log messages are available via the “System Log” tool located on the “Settings” tab.

Capabilities:

- viewing system log messages;
- filtering messages by services;
- exporting loaded messages to a text file.

:photo{src="wiren-board-controller-web-interface/system_log.webp" caption="System Log"}

Viewing the System Log: messages from the wb-mqtt-serial driver

## Software Update

You can update the controller software in several ways:

- via apt — the standard Debian Linux OS utility;
- using a USB drive;
- through the web interface.

To update software through the web interface, download the firmware file from our repository to your computer and select it in the web interface using the “Select File” button. The update will run automatically in a few minutes.

Read more about update methods in the article [Updating the Wiren Board controller firmware](https://wirenboard.com/wiki/Wiren_Board_Firmware_Update).

:photo{src="wiren-board-controller-web-interface/firmware_update_process.gif" caption="Software update process"}

Updating the controller software via the web interface

## Useful Links

Here we’ve gathered links to articles that will help you continue getting acquainted with our hardware and software:

- [Web interface documentation](https://wirenboard.com/wiki/Wiren_Board_Web_Interface)
- [Guide to creating SVG panels with examples](https://wirenboard.com/wiki/SVG-Dashboards)
- [Wiren Board software architecture](https://wirenboard.com/wiki/Wiren_Board_Software)
- [Controller firmware update](https://wirenboard.com/wiki/Wiren_Board_Firmware_Update)
- [Description of the wb-rules rules engine](https://wirenboard.com/wiki/%D0%94%D0%B2%D0%B8%D0%B6%D0%BE%D0%BA_%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB_wb-rules)
- [An article about how we make our devices](https://wirenboard.com/en/pages/reliability/)

*Alexander Degtyarev*

