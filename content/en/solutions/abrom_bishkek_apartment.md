---
title: 'Automation of a One-Bedroom Apartment in a New Development'
cover: abrom_bishkek_apartment/abrom_bishkek_apartment.webp
date: 2025-01-18
category: apartments_automation
---

_«Thanks to the modular architecture of Wiren Board and its compatibility with various devices, we created a convenient and reliable automation infrastructure that met the client’s needs perfectly,» **says Magdi Minullin, CTO of the integration company Abrom.**_

## About the Company

:photo{
    src="abrom_bishkek_apartment/1.jpeg"
    caption="Bedroom Rendering"
    width="400"
    float="right"
}

[Abrom](https://abrom.kg/en.html) is a seasoned integrator of smart home systems operating in CIS countries. The company specializes in implementing smart technologies in apartments and houses during the rough construction or renovation stage.

With **53 successful projects** covering a total area of over **10,000 m²**, Abrom provides services that include the design of power supply systems, home automation, and structured cabling systems (SCS), as well as the assembly of automation panels, system programming, and commissioning. Additionally, the company supplies consumables and equipment for smart homes.

To streamline the setup and integration of smart home systems, Abrom offers free software, **Abrom.soft**, which significantly speeds up commissioning processes.

Magdi Minullin first encountered Wiren Board in 2019 while searching for a solution to automate Abrom’s initial project, which now serves as a showroom and testing ground.

:gallery{
    :data='[
        ["abrom_bishkek_apartment/2.jpeg", "Apartment Layout"],
        ["abrom_bishkek_apartment/3.jpeg", "Living Room Rendering"],
        ["abrom_bishkek_apartment/4.jpeg", "Bedroom Rendering"],
        ["abrom_bishkek_apartment/5.jpeg", "Hallway Rendering"]
    ]'
}

## Challenges

Modern homebuyers increasingly desire apartments that are not only visually appealing but also technologically advanced. For aesthetics, they hire designers; for smart features, they turn to integrators. This project highlights the collaboration between a designer and an integrator in a **77 m² one-bedroom apartment** with high ceilings measuring 3.02 meters.

Located in a modern residential complex in the center of Bishkek, the apartment consists of three rooms: a bedroom, a living room, and a kitchen.

The owner tasked the designer with creating a functional yet elegant living space for a family with one child. The design was to be modern, moderately strict, and efficient. Furniture placement needed to maximize the use of available space while ensuring practicality. Materials such as porcelain stoneware, plasterboard, decorative moldings, and 3D panels were selected. Ceilings were a combination of matte stretch materials and plasterboard.  

Electrical outlets were installed at a height of 30 cm from the floor, with switches positioned at 90 cm, placed 20 cm away from doorways. In the kitchen, outlet placement was coordinated with the furniture layout. In areas with electric underfloor heating, the thermostat was mounted at 120 cm from the floor.

Once the design phase was complete, the integrator [Abrom](https://abrom.kg/en.html) was brought in. The team made several adjustments to the design, including the placement of the automation panel, sensors, and switches. The apartment’s wiring plan included both low-voltage twisted pair cables and 230 V power lines. Since the curtains and air conditioners were automated, additional wiring was required for their operation.


## Solution

The automation panel for the apartment utilized **Wiren Board modules** to manage various systems:

* [WB-MR6C](https://wirenboard.com/en/product/WB-MR6C_v2/) – 6-channel relay modules for controlling lighting groups and motorized curtains.  
* [WB-MWAC](https://wirenboard.com/en/product/WB-MWAC/) – Water leakage detection module that receives signals from leak sensors and automatically shuts off the water supply.  
* [WB-MAP6S](https://wirenboard.com/en/product/WB-MAP6S/) – Electricity meter for monitoring power consumption.  
* [WBIO-DI-WD-14](https://wirenboard.com/en/product/WBIO-DI-WD-14/) – Discrete input module for monitoring the status of switches and sensors.  
* [WBIO-DO-R10A-8](https://wirenboard.com/en/product/WBIO-DO-R10A-8/) – Relay output module for controlling lights and other devices.  
* [WB-LED](https://wirenboard.com/en/product/WB-LED/) – Modules for managing LED lighting, including dimmable and RGB lights.  
* [Wiren Board 7](https://wirenboard.com/en/catalog/kontrollery/) – A programmable controller that oversees all the apartment’s systems.

These modules unify the control of **lighting, climate, leak detection, and other systems** into a single cohesive infrastructure.

:gallery{
    :data='[
        ["abrom_bishkek_apartment/6.jpeg", "Automation panel hidden behind the left door in the hallway"],
        ["abrom_bishkek_apartment/7.jpeg", "Apartment Automation Panel"],
        ["abrom_bishkek_apartment/8.jpeg", "Close-up of Wiren Board Modules"],
        ["abrom_bishkek_apartment/9.jpeg", "Elegant Light Fixtures Above the Dining Table"]
    ]'
}

The following sections will delve into the automation of the smart home’s systems, starting with lighting.

### **Lighting and Curtains**

All lighting in the apartment is smart, meaning all **35 groups** can be controlled not only locally but also remotely and automatically. The integrator installed both dimmable and non-dimmable fixtures.

Each room features several groups of lights, including ceiling, wall, and cabinet lighting. This setup allows for creating customized lighting scenarios to match the occupants' mood and needs. Examples of these scenarios are provided below.

The TV area is equipped with special lighting that creates a cozy atmosphere for watching shows and movies.

**Master buttons** were added in each room, allowing users to quickly turn on or off all lighting groups. For instance, a single button press can turn off all five lighting groups in a room.

All windows are fitted with **230V motorized curtains**, controlled via Modbus. The curtains can be opened and closed using wall switches, a mobile app, or voice commands through **Alice**.

:gallery{
    :data='[
        ["abrom_bishkek_apartment/10.jpeg", "Kitchen Lighting"],
        ["abrom_bishkek_apartment/11.jpeg", "Hallway Lighting"],
        ["abrom_bishkek_apartment/12.jpeg", "Living Room Lighting"],
        ["abrom_bishkek_apartment/13.jpeg", "Sofa in the Living Room"]
    ]'
}

### **Climate Control**

The smart home system manages:

* **Electric underfloor heating** in the hallway and bathrooms,  
* **Water radiators** in the rooms, and  
* **Air conditioners**, controlled via **WB-MIR IR modules**.

All radiators are equipped with **wired thermoelectric actuators**. The system allows users to set a specific temperature for each room, which is then automatically maintained by heating or cooling as needed.

:gallery{
    :data='[
        ["abrom_bishkek_apartment/14.jpeg", "Thermoelectric Radiator Actuator"],
        ["abrom_bishkek_apartment/15.jpeg", "Air Conditioner in the Living Room"],
        ["abrom_bishkek_apartment/16.jpeg", "Lighting Fixtures in the Living Room"],
        ["abrom_bishkek_apartment/17.jpeg", "Turning on the Light Fixture"]
    ]'
}

### **Sensors**

The apartment features **leak detection** sensors installed in wet areas. These sensors, along with shut-off actuators, are connected to the [WB-MWAC](https://wirenboard.com/en/product/WB-MWAC/) module, which automatically cuts off the water supply in case of a leak.

An **electricity meter (**[WB-MAP6S](https://wirenboard.com/en/product/WB-MAP6S/)**)** was installed based on the integrator’s recommendation to monitor power consumption. This will allow the owner to analyze the apartment’s energy usage over time.

For temperature monitoring, [1-Wire DS18B20 sensors](https://wirenboard.com/en/product/1wire-DS18B20/) were installed in the rooms. The integrator placed these sensors inside installation boxes, concealed by pre-milled plugs matching the selected series of electrical accessories. While this solution blends seamlessly with the apartment’s design, it compromises the accuracy of temperature readings.

:gallery{
    :data='[
        ["abrom_bishkek_apartment/18.jpeg", "Temperature Sensor in the Kitchen"],
        ["abrom_bishkek_apartment/19.jpeg", "Temperature Sensor in the Bathroom"],
        ["abrom_bishkek_apartment/20.jpeg", "Kitchen with Open Curtains"],
        ["abrom_bishkek_apartment/21.jpeg", "Closing the Curtains"]
    ]'
}

### **Software**

The apartment’s systems are controlled using the **Yandex Smart Home platform**, integrated with the **Alice voice assistant**. Lighting, curtains, climate, and other systems can be managed via the mobile app or voice commands.

**Examples of automation scenarios:**

* **"Alice, hello":** Turns on the hallway lights, plays background music, and opens the curtains. Optionally, air conditioners can be added to the scenario during summer.  
* **"Good morning":** Opens bedroom curtains, activates soft lighting, and switches the temperature from energy-saving (night mode) to a comfortable setting.  
* **"Good night":** Closes bedroom curtains, turns off main lights, and activates nightlights for safe movement.  
* **"Clean the house":** Starts the robot vacuum cleaner.  
* **"Dinner":** Plays background music in the kitchen, closes the kitchen curtains, and adjusts lighting to warm white for a cozy dining atmosphere.  
* **"Alice, bye":** Turns off all lights, air conditioners, and closes the curtains. Starts the robot vacuum cleaner. Keeps the hallway light on for five minutes to allow easy exit.

The homeowner can modify these scenarios or create custom ones in the app.

### **Integrator Modules**

The **Wiren Board controller** was equipped with software modules developed by Abrom. The modular design simplifies setup for integrators. These modules can be deployed on other projects by merely adjusting configuration parameters, without requiring programming skills. This means a standard electrician can launch the smart home system. The modules significantly reduce the time needed to commission the project. Notably, Abrom provides these modules to other integrators for free upon request.

* The **first module** manages lighting by linking switches to specific lighting groups.  
* The **second module** handles climate control, setting operating parameters for radiators, underfloor heating, and air conditioning.

The controller also includes the **Sprut.Hub interface**, enabling users to manage scenarios through it if desired. Additionally, a **bridge to Alice** was established via Sprut.Hub. The inclusion of a **Zigbee module** allows for future expansion of the smart home system with wireless devices.

:gallery{
    :data='[
        ["abrom_bishkek_apartment/22.jpeg", "Zigbee Smart Outlet Installed in the Bedroom"],
        ["abrom_bishkek_apartment/23.jpeg", "Bedroom with Open Curtains"],
        ["abrom_bishkek_apartment/24.jpeg", "Curtain Actuator"],
        ["abrom_bishkek_apartment/25.jpeg", "Closet Lighting in the Living Room"]
    ]'
}

## Advantages

:photo{
    src="abrom_bishkek_apartment/27.jpeg"
    caption="Curtains in the Living Room"
    width="400"
    float="right"
}

It’s encouraging to see more homeowners embracing smart technology alongside elegant design for their apartments. This project started with a design blueprint, followed by the installation of smart home engineering systems, and concluded with the programming of automation scenarios.

The foundation of the smart home is built on **wired solutions**, which ensure reliability. For example, relay modules include built-in logic, so lights can still be turned on manually even if the controller is unavailable. For those who prefer, wireless **Zigbee devices** can also be integrated into the system.

### About Wiren Board
 
Wiren Board designs and provides a wide range of devices for automation and dispatching, from programmable controllers and climate sensors to energy meters, refrigerator network cards, and relay modules. These devices are built to fit customer needs, integrate easily with existing systems, and allow for future upgrades.

The company provides a two-year warranty on all equipment, offering replacement without the need for prior dispatch to a service center. Their technical support engineers are readily available to assist with both standard and unique challenges.
