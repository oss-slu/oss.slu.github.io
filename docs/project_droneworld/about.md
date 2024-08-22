---
id: about
title: Drone World
custom_edit_url: null
---

## Overview
Drone World, developed by Dr. Ankit Agrawal and his team, is an advanced simulation platform for testing small unmanned aerial systems (sUAS). It enables users to configure detailed test scenarios by specifying environmental conditions (e.g., weather, terrain), sUAS capabilities (e.g., sensors, hardware), and mission objectives. The platform generates a realistic 3D simulation environment and monitors data to ensure safety and detect issues, producing comprehensive test reports with detailed analysis.

By automating and streamlining the testing process, Drone World improves safety, reliability, and efficiency for drone developers. It allows comprehensive pre-flight testing in ultra-realistic environments, helping developers refine their systems and iterate more rapidly on complex missions. Our team at OSS is dedicated to enhancing Drone World’s capabilities, including refining environmental settings, drone configurations, and integrating new features.

### Information

- **Source Code:**  https://github.com/oss-slu/DroneWorld [<img src="/img/git-alt.svg" alt="git" width="25" height="25" />](https://github.com/oss-slu/DroneWorld)
- **Client:** [Dr. Ankit Agrawal](https://www.slu.edu/science-and-engineering/academics/computer-science/faculty-and-staff/ankit-agrawal.php) [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/ankyAgrawal)
- **Current Tech Lead:** Mohammad Al-Hanoosh [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/mohamdlog)  <!--[<img src="/img/linkedin.svg" alt="linkedin" width="25" height="25" />](https://www.linkedin.com/in/)-->
- **Developers:**
    - Student [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/)
    - Student [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/)
    - Student [<img src="/img/github.svg" alt="github" width="25" height="25" />](https://github.com/) 
- **Start Date:** 9th Feb 2023
- **Adoption Date:** 25 Aug 2023

### Technologies and Dependencies

- **Key Languages:** Python, TypeScript, JavaScript
- **Key Technologies:** React (Frontend), Flask (Backend APIs), Unreal Engine with AirSim (Simulation)
- **Databases:** MongoDB
- **Critical Dependencies:** PX4, ArduPilot, Unreal Engine
- **Type:** Desktop
- **License:** [MIT](https://opensource.org/license/mit)

### User Guide

The user sets up a test scenario via the web interface by specifying the number of drones, their sensors, mission objectives, and operating environment. They also define critical safety properties, such as minimum separation distances between drones, based on system requirements or regulations. After the test, Drone World provides a comprehensive report that includes logs, telemetry data, property violation analysis, and visualizations of key metrics.

## Technical Information

### Technical Overview

![Architecture](DroneWorld%20Architecture.png)

The test scenario utilizes a testbed, represented by the "DRV Testbed" box, which includes sensor models, GPS models, plugins, and shadow models. Initially, the environment is configured and tests are defined through the "Configure Environment" and "Configure Application & Define Tests" boxes. The environment configuration sets system properties, settings, and features, while the application configuration sets drone parameters, simulation settings, and safety/test properties. After configuring the environment and tests, the scenario is executed using the "Execute Test Scenario" box. The testbed runs the tests, collecting monitoring data from various monitors tracking humans, drones, and the environment. Following the test, the data is consolidated and analyzed using the "Consolidate & Analyze Monitoring Data" box, which helps diagnose the system under test and generate the "Acceptance Test Result."

### Development Priorities

- Implement UI changes to enhance the display of simulation responses, including images and graphs.
- Develop Unreal Engine support for various drone types.
- Integrate MongoDB for storing predefined values.
- Add a new property for monitoring drone torque battery.

## Get Involved

Contribution and participation overview, with a [contributor's guide.](https://github.com/oss-slu/DroneWorld/wiki/Contributing-Guide)