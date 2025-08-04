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
        ["cloud/list-controllers.webp", "List of controllers"],
        ["cloud/controller.webp", "Controller page"]
    ]'
}

## Control  
Manage the system using dashboards, graphical mimic panels, or the SSH console. All you need is a modern browser and an internet connection or access to a local server with the On-premise version of the service.  

:gallery{
    :data='[
        ["cloud/dashboard.webp", "Web interface"],
        ["cloud/console.webp", "Browser-based SSH console"],
        ["cloud/electrical-dashboard.webp", "SVG graphical panels"]
    ]'
}

## Monitoring  
Use the powerful built-in open-source tool **Grafana** to set up situation centers. Customize dashboards with graphs, indicators, and analytics.  

Combine data from multiple controllers into a single dashboard for an overview of field equipment across multiple installations.  

:photo{
    src="cloud/graphana.webp"
    caption="Grafana graphs"
    width="500"
}

## Multi-user Access  
Invite colleagues to the organization and share access to controllers. A single user can belong to multiple organizations, making it convenient for companies managing multiple installations.  

:gallery{
    :data='[
        ["cloud/invite-org.webp", "User invitation"],
        ["cloud/organizations.webp", "List of organizations"]
    ]'
}

## Mobile Interface  
Access the service from anywhere — its web interface automatically adapts to different screen resolutions, ensuring a seamless experience across all functions.  

You can bookmark specific tools and open them with a single click.  

:gallery{
    :data='[
        ["cloud/mobile-list-controllers.webp", "Mobile list of controllers"],
        ["cloud/mobile-controller.webp", "Mobile controller page"],
        ["cloud/mobile-graphs.webp", "Mobile graphs"],
        ["cloud/mobile-dashboard.webp", "Mobile web interface"],
        ["cloud/mobile-console.webp", "Mobile ssh console"],
        ["cloud/mobile-graphana.webp", "Mobile Graphana graphs"]
    ]'
}

## Data Control  
Connect only the controllers you want to the service. New controllers do not send data to the service by default; users must create an account, set up an organization, and manually add controllers.  

Wiren Board controllers authenticate in the service using a hardware key, preventing duplicate entries and unauthorized access to other controllers.  

:photo{
    src="cloud/add-to-cloud.webp"
    caption="Adding a controller to the cloud"
    width="500"
}

## Autonomy  
Wiren Board controllers always operate autonomously and do not depend on external internet services. Wiren Board Cloud adds new functionalities without affecting the standalone operation of the automation system.  

If you have a similar service or do not need Wiren Board Cloud features, simply do not connect your controller to it.  

## How to Connect  

### Public on Our Servers
The public service option is free — just add your controller to Wiren Board Cloud.  

### On-Premise  
Control not only the data sent to the service but also the infrastructure where it’s hosted.  

This option is suitable both for companies integrating Wiren Board products and for OEM customers building solutions based on our products under their own brand.  

[Repository and installation guide](https://github.com/wirenboard/cloud-on-premise/blob/main/README_EN.md).

## Try It Out  
There’s a demo cabinet with a real controller:
1. Go to the link [https://wirenboard.cloud/](https://wirenboard.cloud/).
2. Click “Demo”.

:gallery{
  :data='[
    ["cloud/demo.png", "Login Form"],
    ["cloud/demo-2.png", "Demo Controller"]
  ]'
}

## Special Offer for Companies  
If you're interested in Wiren Board Cloud, want to implement it, but need additional features — contact us at [info@wirenboard.com](mailto:info@wirenboard.com), and we will do our best to assist you.
