---
title: 'Restaurant Lighting Automation'
cover: restaurant_lighting_automation/restaurant_lighting_automation.webp
date: 2026-09-30
category: shops_restaurants_monitoring
---

:photo{
    src="restaurant_lighting_automation/0.jpg"
    caption="Entrance to Embers Restaurant"
    width="400"
    float="right"
}

Site: [Embers Restaurant](https://www.instagram.com/embers.ast/) at Radisson Hotel Astana. Integrator: [Jarqin Jan](https://www.instagram.com/jarqin_jan/), Kazakhstan.

| Equipment | Function |
| :---- | :---- |
| [Wiren Board 8](https://wirenboard.com/en/product/wiren-board-8/) | Controller |
| [Sprut.stick ZigBee WBE2R-R-ZIGBEE-SH](https://wirenboard.com/en/product/WBE2R-R-ZIGBEE-SH/) | Zigbee device connectivity + Sprut.Hub license |
| [WB-LED](https://wirenboard.com/en/product/WB-LED/) + [WB-AMPLED](https://wirenboard.com/en/product/WB-AMPLED/) | LED strip dimming |
| [WB-MDM3](https://wirenboard.com/en/product/WB-MDM3/) | Dimming 230 V luminaires |
| [WB-MR6C v.2](https://wirenboard.com/en/product/WB-MR6C_v2/) | Switching non-dimmable lighting groups on and off |

> “The restaurant uses a wide variety of lighting: 24 V and 48 V LED strips, 48 V magnetic track lights, and dimmable and non-dimmable 230 V luminaires. Wiren Board equipment controls all of these groups.”
>
> **Dauren Bisenbekov, Technical Specialist at Jarqin Jan**

## Task

Set up manual, scene-based, and automated control of the restaurant lighting. The top priority set by the designers was scene-based brightness control of the decorative ceiling panel in the foyer.

:gallery{
    :data='[
        ["restaurant_lighting_automation/1.jpg", "Main dining area"],
        ["restaurant_lighting_automation/2.jpg", "Ceiling lights and wall sconces in the main dining area"],
        ["restaurant_lighting_automation/3.jpg", "Pendant lights in the main dining area"],
        ["restaurant_lighting_automation/4.jpg", "Counter by the open kitchen"]
    ]'
}

## Technical Solutions

### System Architecture

The system is built around a [Wiren Board 8](https://wirenboard.com/en/product/wiren-board-8/) controller. A [Sprut Zigbee](https://wirenboard.com/en/product/WBE2R-R-ZIGBEE-SH/) expansion module is installed in the controller, while Sprut.Hub software runs directly on it.

[WB-LED](https://wirenboard.com/en/product/WB-LED/) modules together with [WB-AMPLED](https://wirenboard.com/en/product/WB-AMPLED/) amplifiers control the LED strips. A [WB-MDM3](https://wirenboard.com/en/product/WB-MDM3/) dims the 230 V luminaires, while a [WB-MR6C v.2](https://wirenboard.com/en/product/WB-MR6C_v2/) switches the non-dimmable lighting groups on and off.

For manual control, the system uses momentary wall switches connected to the inputs of the dimmers and relay modules.

:gallery{
    :data='[
        ["restaurant_lighting_automation/5.jpg", "Automation panel"],
        ["restaurant_lighting_automation/6.jpg", "Wiren Board 8 controller and modules in the panel"],
        ["restaurant_lighting_automation/7.jpg", "LED strip power supplies labeled by lighting group"]
    ]'
}

The control interface is implemented in Apple HomeKit and displayed on a dedicated tablet. Users can switch individual lighting groups on and off and adjust their brightness.

Five lighting scenes are configured in the system:

- “Good Morning”;
- “After Dinner”;
- “Dinner”;
- “Guests Leave”;
- “Restaurant Closing”.

Each scene switches on the required lighting groups and sets them to the specified brightness levels.

:gallery{
    :data='[
        ["restaurant_lighting_automation/8.png", "Apple HomeKit interface: scenes and lighting groups"],
        ["restaurant_lighting_automation/9.png", "Adjusting the brightness of a lighting group in Apple HomeKit"]
    ]'
}

Two designer luminaires use dimmable power supplies controlled over Zigbee.

:gallery{
    :data='[
        ["restaurant_lighting_automation/10.jpg", "Designer luminaire shaped like an atomic lattice"],
        ["restaurant_lighting_automation/11.jpg", "Close-up of the lattice luminaire"]
    ]'
}

### Ceiling Panel

The decorative ceiling panel is the centerpiece of the foyer and the highest-power load in the restaurant at 1.4 kW. Its brightness is set in every scene.

At 24 V, the line currents would exceed permissible limits. In addition, the power supplies are located far from the panel, so losses on the long cable runs would be too high. That is why special 48 V LED strips were ordered for the panel: at the same power, they draw half the current. The panel is connected through three WB-AMPLED amplifiers operating in parallel.

:gallery{
    :data='[
        ["restaurant_lighting_automation/12.jpg", "Decorative ceiling panel in the foyer"],
        ["restaurant_lighting_automation/13.jpg", "Close-up of the ceiling panel"]
    ]'
}
