---
title: 'Monitoring of Office Engineering Systems'
cover: itvision_office/itvision_office.webp
date: 2025-01-04
category: commercial_estate_monitoring
---

_«Wiren Board is more than just hardware; it is a comprehensive platform that combines hardware and software. We've gained a convenient and flexible tool to address our clients' needs,» **says Vladimir Gorchevsky, Director of IT Vision LLC.**_

## About the Company

:photo{
    src="itvision_office/1.jpeg"
    caption="Current transformers on the input cable"
    width="400"
    float="right"
}

[IT Vision](https://itvision.kg/en/) is an innovative company specializing in automation and IT solutions. It designs intelligent systems for automating processes, develops software services for equipment management, and upgrades infrastructure. Additionally, IT Vision offers end-to-end services for equipping data centers, including equipment supply, deployment of engineering management systems, and integration of turnkey solutions.

The company collaborates with leading manufacturers to deliver modern, reliable technologies that can be tailored to specific customer requirements. IT Vision’s expertise spans the entire solution lifecycle, from concept and implementation to maintenance and modernization. This comprehensive approach ensures efficiency, reliability, and technological excellence in every project.

In late 2022, Vladimir Gorchevsky began exploring the market for new automation equipment suppliers to provide more efficient and adaptable solutions for private homes and office spaces. This search led him to discover Wiren Board. The first project using Wiren Board involved monitoring physical environment parameters in a server room at a state enterprise.

During implementation, IT Vision’s specialists immediately recognized the system’s user-friendly setup and flexibility. Wiren Board seamlessly integrated with the customer’s existing IT monitoring infrastructure, allowing the team to preserve existing workflows while enhancing functionality without excessive time or resource expenditures.

This project marked a turning point for IT Vision. Vladimir became convinced of Wiren Board’s reliability and efficiency, realizing its potential for automating, monitoring, and managing engineering systems. The positive experience formed the foundation of a new company focus—developing and integrating solutions for managing engineering systems and aligning them with IT infrastructures.

:gallery{
    :data='[
        ["itvision_office/2.jpeg", "Floor plan showing office spaces"],
        ["itvision_office/3.jpeg", "Floor-level leak detection panel"],
        ["itvision_office/4.jpeg", "Panel with WB-MAP3E power meters"],
        ["itvision_office/5.png", "Load monitoring on the input cables"]
    ]'
}


## Challenges

An interesting project emerged in Bishkek: transforming an entire hotel floor into office space. IT Vision was tasked with monitoring and managing the engineering systems. The chosen solution utilized Wiren Board controllers and modules. The system provided real-time monitoring of water leaks, electricity consumption tracking, and management of air conditioners in the server room. Additionally, an experimental integration with Turkov air handling units was included.

The office spanned an elongated area of approximately 100 x 15 meters on the hotel’s second floor. Twenty service shafts, running from the basement to the upper floors, housed pipelines for water, sewage, and chilled water for fan coil units. These pipelines posed potential risks in the event of leaks, a concern heightened by the hotel staff’s restricted access to these shafts without tenant approval. The solution required monitoring for leaks in each shaft (and three kitchen areas) and promptly notifying hotel staff about any incidents.

Another critical task was energy monitoring. The building’s power supply was capped by the utility company, and initial calculations suggested insufficient capacity for the offices. However, there was a possibility of managing within the allocated limits, as the air handling units’ documented capacity corresponded to their maximum usage, which was rarely reached in practice.

To address this, IT Vision installed power meters on group supply lines, collected usage data over time, and analyzed the results. The findings revealed that the building’s main power supply was adequate, but the cable cross-section supplying the office floor was insufficient. The team addressed this by rerouting additional cables from floors with surplus capacity, redistributing the load among cables, and balancing the phases. This approach successfully met the allocated power limits.

The project also faced construction challenges. Transoms at a height of 2.3 meters from the floor level complicated cable installation in the corridor. The team had to ensure that all utilities, including cables, fit within a 150-mm clearance. Despite these obstacles, the system was implemented successfully, demonstrating the flexibility and adaptability of the chosen solutions.

:gallery{
    :data='[
        ["itvision_office/6.png", "Monitoring power consumption on input cables"],
        ["itvision_office/7.png", "Cumulative power consumption graph"],
        ["itvision_office/8.png", "Power consumption graphs by input lines"],
        ["itvision_office/9.png", "Turkov ventilation system widget"]
    ]'
}

## Solution

The specialists selected the [Wiren Board 7 controller](https://wirenboard.com/en/catalog/kontrollery/) as the central hub for the project. It coordinates the operation of connected I/O modules and external devices. The additional peripherals include:

* [WBMZ4-BATTERY](https://wirenboard.com/en/product/wbmz4-battery/) backup power module to ensure uninterrupted operation;

* [WBC-4G v.2](https://wirenboard.com/en/product/wbc-4g-v2/) GSM modem as a backup data transmission channel;

* [WBE2-I-RS485-ISO](https://wirenboard.com/en/product/WBE2-I-RS485-ISO/) expansion modules for future scalability;

* [WB-MWAC](https://wirenboard.com/en/product/WB-MWAC/) leak detection modules (8 units) to monitor 24 potential leakage points;

* [WB-MAP3E](https://wirenboard.com/en/product/WB-MAP3E/) power meters (3 units) along with various current transformers for metering energy consumption across three input lines.

The team deployed Docker on the controller, set up InfluxDB for data storage, and used Grafana for visualization. They developed a Python script to process MQTT messages from the broker in real time and insert the data into InfluxDB. Grafana visualizes the data through dashboards, showing dynamic changes. For emergency notifications (e.g., leaks or rising temperatures in the server room), the Telegram messenger is used.

Wiren Board Cloud proved invaluable, enabling integrators to connect to the controller remotely, analyze system performance, tweak scripts, and implement customer requests. The cloud’s security is managed by Wiren Board experts, ensuring peace of mind for both customer staff and integrators.

:gallery{
    :data='[
        ["itvision_office/10.jpeg", "Server room panel for air conditioner rotation"],
        ["itvision_office/11.jpeg", "IR control unit (BRKV)"],
        ["itvision_office/12.png", "Air conditioner rotation management"],
        ["itvision_office/13.png", "Alerts via Telegram bot"]
    ]'
}

### Rotation of Air Conditioning Units

Later, the customer requested a solution for alternating the air conditioners in the server room. Initially, BRKV-04 units were installed for IR-channel control, but this setup proved unreliable. Toshiba air conditioner receivers often failed to interpret commands from the IR transmitters, leaving units non-operational. Moreover, the BRKV-04 units lacked feedback, so they didn’t resend commands.

The decision was made to replace the BRKV-04 units with Wiren Board 7 controllers. The IR sensors, using the Modbus protocol, were retained from the original setup. To introduce feedback, the team utilized the current consumption of each air conditioner as an indicator. They created a script in wb-rules to alternate between air conditioners, using the WB-MAP3E meters to monitor power consumption. The algorithm checks whether the air conditioner successfully starts (based on power consumption). If it doesn’t, the script sends another start command, repeating the process until the unit activates. This rotation system ensures even usage of the air conditioners and automatically engages the backup unit in case of failure.

The server room was equipped with a dedicated air conditioner control panel featuring a Wiren Board 7 controller and a WB-MAP3E power meter.

Additionally, the integrator tested the connection of a Turkov air handling unit via Modbus RTU. They successfully retrieved operational parameters, issued commands for activation, and adjusted fan speeds, laying the groundwork for further integration of air handling units into the automation system.

## Advantages

:photo{
    src="itvision_office/14.png"
    caption="Air conditioner operation can be monitored based on power consumption"
    width="400"
    float="right"
}

These improvements significantly streamlined the work of the engineering team. Previously, staff could only detect leaks after substantial water damage had occurred. Now, the system sends instant notifications. Real-time energy monitoring displays current consumption metrics and enables prompt responses to emergencies.

The Wiren Board controller demonstrated exceptional reliability, scalability, and ease of configuration. The integrator highlighted the system’s stability and 100% uptime. The customer expressed satisfaction with the solution’s flexibility and the transparency of the process. Future plans include integrating air handling units and expanding functionality to achieve more precise control over various parameters while minimizing human intervention.

### About Wiren Board
 
Wiren Board designs and provides a wide range of devices for automation and dispatching, from programmable controllers and climate sensors to energy meters, refrigerator network cards, and relay modules. These devices are built to fit customer needs, integrate easily with existing systems, and allow for future upgrades.

The company provides a two-year warranty on all equipment, offering replacement without the need for prior dispatch to a service center. Their technical support engineers are readily available to assist with both standard and unique challenges.



