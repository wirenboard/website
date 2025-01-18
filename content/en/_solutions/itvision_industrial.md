---
title: 'Automation of Air Conditioner Rotation in a Server Room of an Industrial Facility'
cover: /img/solutions/en/itvision_industrial.webp
date: 2025-01-18
category: industrial_dispatching_monitoring
---

_«Wiren Board is ideal for both industrial and commercial facilities. It allows us to easily scale the system, add new modules, and run services directly on the controller,» **says Vladimir Gorchevsky, Director of IT Vision LLC.**_

## About the Company

:photo{
    src="/img/solutions/en/itvision_industrial/9.png"
    caption="Temperature graphs from multiple sensors"
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
        ["/img/solutions/en/itvision_industrial/1.jpg", "WB-MS sensor for temperature and humidity monitoring"],
        ["/img/solutions/en/itvision_industrial/2.jpg", "Wiren Board modules installed in the server rack"],
        ["/img/solutions/en/itvision_industrial/3.jpg", "One of the air conditioners in the server room"],
        ["/img/solutions/en/itvision_industrial/4.png", "Automation rules configured on the Wiren Board controller"]
    ]'
}

## Challenges

The customer aimed to upgrade their IT infrastructure and digital services. They purchased rack servers, designated a separate room as the server room, and installed an air conditioning system.

Initially, the customer used the BRKV-04 air conditioner rotation unit with IR channel control. However, it proved unreliable, as the air conditioners frequently disconnected or failed to turn on.

:gallery{
    :data='[
        ["/img/solutions/en/itvision_industrial/6.jpg", "Air conditioners in the server room equipped with IR sensors"],
        ["/img/solutions/en/itvision_industrial/7.png", "Dashboard displayed in the web interface of the Wiren Board controller"],
        ["/img/solutions/en/itvision_industrial/10.jpg", "Server room"],
        ["/img/solutions/en/itvision_industrial/8.png", "Telegram channel for system alerts and notifications"]
    ]'
}

## Solution

The integrator deployed the [Wiren Board 7 controller](https://wirenboard.com/en/catalog/kontrollery/) to manage the air conditioners, detect condensate leaks under the units (using the [WB-MWAC module](https://wirenboard.com/en/product/WB-MWAC/)) in case of clogged drain pipes, monitor room temperature (via [WB-MS sensors](https://wirenboard.com/en/product/WB-MS/)), and track energy consumption (using the [WB-MAP3E module](https://wirenboard.com/en/product/WB-MAP3E/)). The existing IR sensors, operating via the Modbus protocol, were retained from the BRKV-04 system.

A **wb-rules script** was developed to sequentially activate the air conditioners while monitoring their performance through current consumption measured by the WB-MAP3E. Since obtaining feedback from the air conditioners via IR control is challenging, the script ensures operation by resending start commands until the unit successfully powers on. This rotation system ensures even distribution of operating hours across the air conditioners.

The IT Vision team configured the Wiren Board controller for autonomous operation without Internet access. For data visualization and historical parameter analysis, they implemented **InfluxDB** and **Grafana**, running them in containers directly on the controller. This setup provided engineers with a user-friendly environment for monitoring engineering systems without the need for additional servers or complex setups.

To integrate data into Grafana, IT Vision used **MQTT** along with a custom **Python script**. They also implemented automated notification rules for **Telegram**, enabling instant alerts in case of issues. This allows the responsible personnel to respond swiftly and take corrective actions as needed.

## Advantages

:photo{
    src="/img/solutions/en/itvision_industrial/5.png"
    caption="Server room monitoring dashboard"
    width="400"
    float="right"
}

The engineers delivered a fully autonomous solution on a **universal controller**, equipping it with all necessary software. The controller not only collects telemetry data but also manages air conditioner rotation, ensuring reliable performance and consistent temperature regulation in the server room. Additionally, the system is highly scalable, allowing for the integration of other engineering systems or the installation of additional software as future needs arise.

### About Wiren Board
 
Wiren Board designs and provides a wide range of devices for automation and dispatching, from programmable controllers and climate sensors to energy meters, refrigerator network cards, and relay modules. These devices are built to fit customer needs, integrate easily with existing systems, and allow for future upgrades.

The company provides a two-year warranty on all equipment, offering replacement without the need for prior dispatch to a service center. Their technical support engineers are readily available to assist with both standard and unique challenges.
