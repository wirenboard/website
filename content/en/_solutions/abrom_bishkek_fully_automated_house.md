---
title: 'Automation of a 150 m² Private House'
cover: /img/solutions/en/abrom_bishkek_fully_automated_house.webp
date: 2025-02-28
category: apartments_automation
---

_«Wiren Board stands for flexibility and scalability. If the customer decides to add new devices or integrations, the system can be easily expanded without the need to redesign the entire project,» **says Magdi Minullin, CTO of the integration company Abrom.**_

## About the Company

:photo{
    src="/img/solutions/en/abrom_bishkek_fully_automated_house/1.jpeg"
    caption="Furniture Layout Plan"
    width="400"
    float="right"
}

[Abrom](https://abrom.kg/en.html) is a seasoned integrator of smart home systems operating in CIS countries. The company specializes in implementing smart technologies in apartments and houses during the rough construction or renovation stage.

With **53 successful projects** covering a total area of over **10,000 m²**, Abrom provides services that include the design of power supply systems, home automation, and structured cabling systems (SCS), as well as the assembly of automation panels, system programming, and commissioning. Additionally, the company supplies consumables and equipment for smart homes.

To streamline the setup and integration of smart home systems, Abrom offers free software, **Abrom.soft**, which significantly speeds up commissioning processes.

Magdi Minullin first encountered Wiren Board in 2019 while searching for a solution to automate Abrom’s initial project, which now serves as a showroom and testing ground.

:gallery{
    :data='[
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/2.jpeg", "Living Room Fragment"],
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/3.jpeg", "Entrance Hall"],
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/4.jpeg", "Corridor"],
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/5.jpeg", "Living Room"]
    ]'
}

## Challenges

Sergey, a private business owner in Bishkek, built a 150 m² house in a prestigious neighborhood featuring a master bedroom, two children's rooms, and a living room combined with a kitchen. Initially, Sergey was skeptical about smart home technology, seeing it as a novelty. However, he eventually automated the lighting, climate, and roller shutters, reaching out to the integrator [Abrom](https://abrom.kg/en.html) for the installation.

He opted not to make the wood-burning sauna smart. Sergey also chose not to integrate the diesel generator, solar panels, irrigation system, and other devices with the smart home.

As it turned out, that was a mistake. A few months later, Sergey returned to the integrator, asking to add these features to his smart home system. He had grown tired of juggling multiple apps for the TV, robot vacuum cleaner, generator, and irrigation system. He wanted voice control.

## Solution

The central panel of the smart home manages all systems, including lighting, climate, and leak protection. In a separate utility shed, a panel was installed to control the gates, wicket, and solar power system.

Let’s look at the modules in the main panel:

* [**Wiren Board 7**](https://wirenboard.com/en/catalog/kontrollery/): The central controller for the entire smart home system, responsible for processing data from sensors and controlling lighting, climate, and curtains.  
* [**WB-MWAC**](https://wirenboard.com/en/product/WB-MWAC/): A water leak detection module that receives signals from leak sensors and automatically shuts off the water supply.  
* [**WB-MR6C v.2**](https://wirenboard.com/en/product/WB-MR6C_v2/): Relay modules that control lighting groups and exhaust fans.  
* [**WB-MRGBW-D**](https://wirenboard.com/en/product/WB-MRGBW-D/): Modules for dimming LED strips.  
* [**WBIO-DI-WD-14**](https://wirenboard.com/en/product/WBIO-DI-WD-14/): Discrete input module for switches and sensors.  
* [**WBIO-DO-R10A-8**](https://wirenboard.com/en/product/WBIO-DO-R10A-8/): Relay modules to control electrothermal heating actuators.  
* [**WBIO-DO-R10R-4**](https://wirenboard.com/en/product/WBIO-DO-R10R-4/): Relay module to control roller shutters.

Now, let's move on to the second panel in the utility shed:

* [**WB-MR6C v.2**](https://wirenboard.com/en/product/WB-MR6C_v2/): Relay modules controlling street and landscape lighting. A contactor is used to activate the de-icing system for the pathway.  
* [**WB-M1W2**](https://wirenboard.com/en/product/WB-M1W2/): Module for connecting the outdoor temperature sensor.  
* [**WB-MRM2-mini**](https://wirenboard.com/en/product/WB-MRM2-mini/): Compact relay module for controlling the gates and wicket.

In wet areas, leak sensors were installed that automatically shut off the water supply when a leak is detected. These sensors are connected to the [**WB-MWAC**](https://wirenboard.com/en/product/WB-MWAC/) module, as are the Neptune servo drives. A second **WB-MWAC** module was installed in the shed to monitor water consumption, connected to a pulse meter. Sergey can now view the meter readings on his smartphone to send them to the utility company.

:gallery{
    :data='[
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/6.jpeg", "Kitchen"],
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/7.jpeg", "Bathroom"],
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/8.jpeg", "Son&rsquo;s Room"],
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/9.jpeg", "Daughter&rsquo;s Room"]
    ]'
}

### Lighting

The house is equipped with 35 lighting zones, including wall and shelf lighting. It includes both dimmable LED strips and standard, non-dimmable lamps. The LED strips are connected via **WB-MRGBW-D** dimmers, while the regular lights are controlled by **WB-MR6C** relays.

In every room, a long press on a switch turns off all the lights in that room. A long press on the hallway switch will turn off the lights throughout the entire house.

The exterior features lighting for the facade, fence, and awnings. This lighting is on a timer, turning on after sunset and off in the morning. The porch lighting is activated by a motion sensor.

Additionally, Sergey has installed an anti-icing system for the walkway, which he currently switches on and off manually.

### Curtains

Six sliding curtains (with **Dooya dt82tv** motors) are installed in the living rooms, and two Roman blinds (with **Dooya dm35eq** motors) are in the bathrooms. The motors are powered by a 230V mains supply and connected via Modbus, allowing two-way communication. The curtains can be automatically opened and closed through voice commands to **Alice** or via a mobile app. Curtain control has been integrated into lighting scenarios to create a comfortable atmosphere, which we will discuss below.

Roller shutters were added to all windows and doors, which the owner closes when the house is empty. The roller shutter motors are connected to the [**WBIO-DO-R10R-4**](https://wirenboard.com/en/product/WBIO-DO-R10R-4/) relay. To open or close all roller shutters, Sergey can press the corresponding button in the app or issue a voice command to Alice.

The [**WB-MRM2-mini**](https://wirenboard.com/en/product/WB-MRM2-mini/) relay module controls the wicket and gates, and is integrated with the intercom. When Sergey drives up to the house, he can give Alice a command to open the gates.

:gallery{
    :data='[
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/10.jpeg", "Master Bedroom"],
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/11.jpeg", "Wiren Board Modules in the Second Panel in the Utility Shed"],
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/12.jpeg", "Porch Lighting During Our Visit (Winter)"],
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/13.jpeg", "Fence Lighting"]
    ]'
}

### Climate

Sergey opted not to install a supply ventilation unit but chose to install three Norvind Pro wall inlets in the children's rooms and the master bedroom. These inlets are equipped with filters, and the valves are mechanical, requiring manual operation. Exhaust fans were added in the bathrooms, and when the lights are turned on, the smart home system starts the fan via a relay. After the lights are switched off, the fan continues to run for a while. There is also an exhaust fan in the kitchen, but it is not automated.

For heating, water-based underfloor heating was installed, complemented by electric underfloor heating in the bathrooms and boiler room. This duplication allows the electric underfloor heating to be used in summer when the heating boiler's load is insufficient. There are no heating radiators, as the heat provided by the underfloor heating is sufficient. Cityron thermostats with built-in temperature sensors were installed in each room to control the warm water floors. The thermostats are connected via Modbus RTU. The electrothermal actuators of the water floors are controlled via [**WBIO-DO-R10A-8**](https://wirenboard.com/en/product/WBIO-DO-R10A-8/) modules. Temperature sensors, [1-wire DS18B20](https://wirenboard.com/en/product/1wire-DS18B20/), were integrated into the underfloor heating for temperature control and connected via [**WB-M1W2**](https://wirenboard.com/en/product/WB-M1W2/) modules.

The temperature can be set on the thermostat, in the app, or through voice commands. In winter, Sergey keeps the indoor temperature at 23-24°C.

Four split air conditioning systems are installed in the living rooms, and they are controlled via IR and [**WB-MIR**](https://wirenboard.com/en/product/WB-MIR/) modules.

### Additional Equipment Not Integrated into the Smart Home

Now, let’s take a look at systems that Sergey initially chose not to integrate into the smart home but later decided to add and turned to the integrator for assistance.

The automatic irrigation system has its own controller, which is responsible for watering the garden and lawn.

Solar panels with a capacity of up to 5 kW were installed on the roof of the house. They provide power for the home automation devices, server, video surveillance cameras, and network infrastructure. The solar panels also charge batteries that provide power during the night when there is no sunlight. If the solar panels don’t produce enough power, electricity from the grid is used. This system also has its own automation controller.

A backup power generator was installed, which can be turned on during long power outages via the vendor’s app.

:gallery{
    :data='[
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/14.jpeg", "Workspace Backlighting"],
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/15.jpeg", "Rolling Shutters Down, View of the House from the Covered Porch"],
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/16.jpeg", "Wicket Door with Intercom"],
        ["/img/solutions/en/abrom_bishkek_fully_automated_house/17.jpeg", "Cityron Thermostat"]
    ]'
}


### Software

The Yandex Smart Home platform with Alice voice assistant integration is used to manage all of the house systems.

Here are examples of automation scenarios:

* **“Alice, hello”**: This scenario turns on the hallway lights, starts background music, and opens the living room curtains. Optionally, it can also turn on the air conditioners in the summer.  
* **“Good morning”**: Opens the bedroom curtains, turns on soft lighting, and changes the temperature setting from economy mode (night mode) to comfort.  
* **“Good night”**: Closes the bedroom curtains, turns off the main lights, and turns on nightlights for safe movement.  
* **“Dinner”**: Starts background music in the living room-kitchen, closes the curtains, and adjusts the lighting to warm white to create a cozy atmosphere at the dinner table.  
* **“Alice, goodbye”**: Turns off lights throughout the house, turns off air conditioners, and closes the curtains. The hallway lights turn on for five minutes to allow safe dressing and leaving.

Of course, the homeowner can modify these scenarios or create their own in the app. The **Sprut.Hub** shell was also installed on the controller, so scenarios can now be created through it as well. Additionally, a bridge to Alice was added via **Sprut.Hub**, and a Zigbee module was installed, allowing the smart home to be expanded with wireless devices in the future.

### **Integrator Modules**

The **Wiren Board controller** was equipped with software modules developed by Abrom. The modular design simplifies setup for integrators. These modules can be deployed on other projects by merely adjusting configuration parameters, without requiring programming skills. This means a standard electrician can launch the smart home system. The modules significantly reduce the time needed to commission the project. Notably, Abrom provides these modules to other integrators for free upon request.

* The **first module** manages lighting by linking switches to specific lighting groups.  
* The **second module** handles climate control, setting operating parameters for radiators, underfloor heating, and air conditioning.

Для управления всеми системами дома служит платформа «Яндекс Умный дом» с интеграцией голосового ассистента Алисы. 

## Advantages

:photo{
    src="/img/solutions/en/abrom_bishkek_fully_automated_house/18.jpeg"
    caption="Wiren Board Modules in the Main Automation Panel"
    width="400"
    float="right"
}

The integrator completed the project and handed it over, but Sergey wanted more features. He was tired of using separate apps for the robot vacuum, auto irrigation system, diesel generator, solar power system, and TV. Now, he wants to control all the functions by voice, as he’s accustomed to Alice. Sergey contacted the integrator to add all these devices to the smart home—and for free. However, integrating additional devices takes time and resources, so there will be additional charges.

The next question is: how feasible is this integration? Some devices can be added at the platform level (Yandex Smart Home, Sprut.Hub, or Wiren Board). But what if there’s no support for such devices? In this case, the integrator would need to create custom templates, requiring even more time and resources. It might even be necessary to install the **Home Assistant** system on the **Wiren Board** controller if it offers the required integration.

This case is not unique. A smart home should not be seen as a final solution. New devices will inevitably be introduced, and sooner or later, integration will become necessary. More and more integrators are likely to provide services for adding devices to existing smart homes. This could lead to the emergence of a new market.

This aspect should be considered when choosing a smart home ecosystem. The ability to expand features and integrate new devices in the future is becoming increasingly important. Therefore, a home must not only be smart but also flexible and expandable.

### About Wiren Board
 
Wiren Board designs and provides a wide range of devices for automation and dispatching, from programmable controllers and climate sensors to energy meters, refrigerator network cards, and relay modules. These devices are built to fit customer needs, integrate easily with existing systems, and allow for future upgrades.

The company provides a two-year warranty on all equipment, offering replacement without the need for prior dispatch to a service center. Their technical support engineers are readily available to assist with both standard and unique challenges.

## Additional Materials

- [Automation of a One-Bedroom Apartment in a New Development](https://wirenboard.com/en/contents/solutions/abrom_bishkek_apartment)
