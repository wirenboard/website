---
title: Wiren Board Cloud
---

## Description  
[Wiren Board Cloud](https://wirenboard.cloud/) is a remote administration service for automation systems based on Wiren Board controllers.  

It does not use VPN, reducing the risk of accidental blocking. Data is encrypted and transmitted through tunnels between the controller and the service. A public IP address is not required for access, and the controller can operate behind NAT.  

The free basic plan includes:  
- Access to the controller’s web interface and SSH  
- Graphs in Grafana  
- Status display  
- Unlimited number of controllers per organization  
- A single user can be part of multiple organizations  

In addition to the public version of Wiren Board Cloud, there is an On-premise option for installation on the customer's server.  

## Inventory Management  
Track software versions and controller statuses. Add additional information such as location, responsible person, last maintenance date, and more.  

:gallery{
    :data='[
        ["img/pages/cloud/list-controllers.webp", "List of controllers"],
        ["img/pages/cloud/controller.webp", "Controller page"]
    ]'
}

## Control  
Manage the system using dashboards, graphical mimic panels, or the SSH console. All you need is a modern browser and an internet connection or access to a local server with the On-premise version of the service.  

:gallery{
    :data='[
        ["img/pages/cloud/dashboard.webp", "Web interface"],
        ["img/pages/cloud/console.webp", "Browser-based SSH console"]
        ["img/pages/cloud/electrical-dashboard.webp", "SVG graphical panels"]
    ]'
}

## Monitoring  
Use the powerful built-in open-source tool **Grafana** to set up situation centers. Customize dashboards with graphs, indicators, and analytics.  

Combine data from multiple controllers into a single dashboard for an overview of field equipment across multiple installations.  

:photo{
    src="img/pages/cloud/graphana.webp"
    caption="Grafana graphs"
    width=""
    float="left"
}

## Multi-user Access  
Invite colleagues to the organization and share access to controllers. A single user can belong to multiple organizations, making it convenient for companies managing multiple installations.  

:gallery{
    :data='[
        ["img/pages/cloud/invite-org.webp", "User invitation"],
        ["img/pages/cloud/organizations.webp", "List of organizations"]
    ]'
}

## Mobile Interface  
Access the service from anywhere—its web interface automatically adapts to different screen resolutions, ensuring a seamless experience across all functions.  

You can bookmark specific tools and open them with a single click.  

:gallery{
    :data='[
        ["img/pages/cloud/mobile-list-controllers.webp", "Mobile list of controllers"],
        ["img/pages/cloud/mobile-controller.webp", "Mobile controller page"]
        ["img/pages/cloud/mobile-graphs.webp", "Mobile graphs"]
        ["img/pages/cloud/mobile-dashboard.webp", "Mobile web interface"]
        ["img/pages/cloud/mobile-console.webp", "Mobile ssh console"]
        ["img/pages/cloud/mobile-graphana.webp", "Mobile Graphana graphs"]
    ]'
}

## Data Control  
Connect only the controllers you want to the service. New controllers do not send data to the service by default; users must create an account, set up an organization, and manually add controllers.  

Wiren Board controllers authenticate in the service using a hardware key, preventing duplicate entries and unauthorized access to other controllers.  

:photo{
    src="img/pages/cloud/mobile-graphana.webp"
    caption="Adding a controller to the cloud"
    width=""
    float="left"
}

## Autonomy  
Wiren Board controllers always operate autonomously and do not depend on external internet services. Wiren Board Cloud adds new functionalities without affecting the standalone operation of the automation system.  

If you have a similar service or do not need Wiren Board Cloud features, simply do not connect your controller to it.  

## On-premise  
Control not only the data transmitted to the service but also the infrastructure where the service is hosted.  

This option is ideal for system integrators working with Wiren Board products as well as OEM clients developing solutions based on our products under their own brand.  

## How to Connect  
The public version of the service is free - just follow [the instructions](https://wirenboard.com/wiki/Wiren_Board_Cloud) to add your controller to Wiren Board Cloud.  

If you are interested in the On-premise version, contact us at [info@wirenboard.com](mailto:info@wirenboard.com).  

## Try It  
A demo environment with a real controller is available:  

- **[https://wirenboard.cloud/](https://wirenboard.cloud/)**
- **Login:** demo+public@wirenboard.com  
- **Password:** demopublic  

## Special Offer for Companies  
If you're interested in Wiren Board Cloud, want to implement it, but need additional features—contact us at [info@wirenboard.com](mailto:info@wirenboard.com), and we will do our best to assist you.
