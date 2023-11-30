---
title: Drone World
custom_edit_url: https://github.com/oss-slu/DroneWorld
---

## Overview
DroneWorld is a platform developed by Dr.Ankit Agrawal and his team for testing small unmanned aerial systems (sUAS) applications by simulating realistic test scenarios based on specified requirements. Our team at OSS is actively contributing to the ongoing development of DroneWorld. DroneWorld allows users to configure test scenarios by specifying environmental conditions (e.g. weather, terrain), sUAS capabilities (sensors, hardware), and test properties derived from system requirements. It generates a realistic 3D simulation environment using digital shadow models and runs the user's sUAS application within it. DroneWorld monitors and collects data to check if safety properties are violated. It produces test reports analyzing simulation results. DroneWorld allows comprehensive testing of drone applications in ultra-realistic simulated environments before real-world flights, helping improve safety and reliability, by automating simulation-based testing against requirements, the application enables drone developers to iterate faster and build robust systems for complex missions.

### Information

- **Source Code:**  https://github.com/oss-slu/DroneWorld [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/DroneWorld)
- **Client** Dr.Ankit Agrawal [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/ankyAgrawal)
- **Current Tech Lead:** Yashaswini Shivalingaiah [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/yashaswini-slu)  [<img src="/img/linkedin.svg" alt="linkedin" width="25" height="25" />](https://www.linkedin.com/in/yashaswini-shivalingaiah-467a9652/)
- **Developers:**
    - Kaleb Yu [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/kalyus)
    - Szymon Rostkowski [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/sr259)
    - Hebron Bekele [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/hebronh) 
- **Start Date:** 9th Feb 2023
- **Adoption Date:** 25 Aug 2023
- **Technologies Used:**
    - Tech Stack: Simulation, Testing, Visualization, Autonomous Systems
    - Key Languages: Python, TypeScript with JavaScript
    - Key Frameworks: React (Frontend), Flask (Backend APIs), Unreal Engine (Simulation)
    - Databases: MongoDB 
    - Critical Dependencies: 
        - PX4 and Ardupilot
        - Unreal Engine 
- **Type:** Desktop
- **License:**

### User Guide

- The user will configure a test scenario through the web interface by specifying details like the number of drones, their sensors, the mission objectives, and the operating environment.
- The user define critical safety properties that must be monitored during the test, such as minimum separation distance between drones. These properties are based on your system requirements or regulations.
- DroneWorld generates a detailed test report analyzing the execution. This includes logs, telemetry data, analysis of property violations, and visualizations of key metrics

## Technical Information

### Technical Overview

Overview of the software architecture.
![Architecture](DroneWorld%20Architecture.png)

The test scenario uses a testbed, represented by the "DRV Testbed" box. The testbed includes things like sensor models, GPS models, plugins, and shadow models. First, the environment is configured and the tests are defined. The "Configure Environment" and "Configure Application & Define Tests" boxes do this. The environment configuration sets system properties, settings, and features. The application configuration sets drone configuration, simulation settings, and safety/test properties. Once the environment and tests are configured, the test scenario is run using the "Execute Test Scenario" box. The testbed runs the tests and collects monitoring data. The monitoring data comes from monitors that track humans, drones, and the environment. After running the test, the monitoring data is combined and analyzed using the "Consolidate & Analyze Monitoring Data" box. Analyzing the data can diagnose the system under test and generate a test result. The test result is represented by the "Acceptance Test Result" box.

### Development Priorities

- There is UI changes for the displaying the simulation response, which contains image and graphs.
- Unrealengine implementation for the drone types.
- Implementing MongoDB for the storing the pre defined values.
- Adding new property for drone Torque Battery Monitor.

## Get Involved

Overview of contribution and participation information, [contributors guide](https://github.com/oss-slu/DroneWorld/blob/main/readme.md)
 

 