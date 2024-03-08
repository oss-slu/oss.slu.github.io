---
title: Pi4Micronaut - A new recipe from Open Source with SLU
description: Is it a 'Pi'e? Yes, we made a recipe named **Pi4Micronaut** with the base of Java using the ingredients like Micronaut and Pi4J. This is baked at Open Source with SLU research lab and served hot on a Raspberry Pi. Confused? Let me explain what is this all about.
slug: blog_pi4micronaut
authors: [ruthvik]
tags: [announcement, news]
image: ./pi4micronaut-20240314/Baking_Pi4Micronaut.png
hide_table_of_contents: false
---

Is it a 'Pi'e? Yes, we made a recipe named **Pi4Micronaut** with the base of Java using the ingredients like Micronaut and Pi4J. This is baked at Open Source with SLU research lab and served hot on a Raspberry Pi. Confused? Let me explain what is this all about.

![Baking Pi4Micronaut at Open Source with SLU](./pi4micronaut-20240314/Baking_Pi4Micronaut.png)

<!--truncate-->

Welcome to the world of Pi4Micronaut, a powerful Java library designed to simplify the interaction between Java developers and electronic components connected to the Raspberry Pi. Here, we are going to explore features, benefits, and how to get started with Pi4Micronaut.

Pi4Micronaut is versatile and can be employed in various real-world scenarios. Some use cases include:
- Home Automation
- IoT Projects
- Educational Purposes

## How this is started?
This project came to life with the collaboration of Open Source with SLU and Unity Foundation. Working with electronic components on the Raspberry Pi using Java has its challenges. Pi4Micronaut aims to address these challenges by providing  an efficient way for Java developers to interface with hardware connected through GPIO extension board.

## Why should you use Pi4Micronaut?
It's hard to write functionalities for an electronic components like lcd's, RFID's etc., that you want to control them using your software. We took that hardest part of the job on us and providing you the functionalities of them to directly integrate with your code.

<i>"As a developer, I have struggled to understand how these components actually work, and implementing their functionalities has been the most difficult part of this project"</i> said Adrian Swindle, a student developer at OSS-SLU, pointing out how hard it is to understand electrical circuits and developing appropriate functionalities to work for a component.

## What special about Pi4Micronaut?
We use Micronaut framework that allows us to run a local server on the Raspberry Pi to interact with the components and also provides micro-service architecture. We bind this with Pi4J Library to establish communication with GPIO on Raspberry Pi.

## Is this a boon to Java Developers?
Yes, now a days we have a huge reliability on python when it comes to dealing with Raspberry Pi, there are tons and tons of applications that are developed using python. Are you comfortable with Java and want to develop some IOT applications? Don't worry we got you covered.

To make it easier to incorporate our library into your projects, we have published Pi4Micronaut v1.0 on to the Maven Central Repository. Integrate our library and just call the functions of the components which we made it available for you.

## Let's get started!

### Discover the seamless integration between Pi4Micronaut and your application, enhancing the development which is efficient and scalable.

Let's dive into Pi4Micronaut library usage by following these simple steps:

1. Create your Project using [Micronaut](https://micronaut.io/launch) Framework.
2. Add Pi4Micronaut and other dependencies to your project
    Ex:  implementation 'io.github.oss-slu:pi4micronaut-utils:v1.0'
3. Create a circuit board with electronic components which we provide support for
4. Add your configuration details into Application.yml file.
5. Create a java class file and implement the functions based on your requirements and call our functions based on the functionalities required for the components which you have setup.
6. Build, copy and Run the jar file on Raspberry Pi. Make sure the Micronaut server is up and running.
7. Connect to the same network and SSH on to Raspberry Pi to use curl commands.
8. Boom! Now you can control your electronic components through your application.


## Stay Tuned!
We are coming up with support for more components and improvements in Pi4Micronaut. We're committed to enhancing the library based on user feedback and community contributions.

## Wanna contribute to Pi4Micronaut?
You are most welcome! Whether you're a hobbyist or a professional, explore the possibilities and contribute to the growth of the Pi4Micronaut community.

Ready to get started? Visit the Pi4Micronaut [GitHub](https://github.com/oss-slu/Pi4Micronaut) repository for [documentation](https://oss-slu.github.io/Pi4Micronaut/), code samples, and more. Your feedback and contributions are highly valued!

## Our Community
- Thanking Dr. Kate Holdener and Daniel Shown from Open Source with SLU for taking up this initiative.
- Thanking Jeff Brown and Jen Weise from Unity Foundation for providing the technical support whenever required.
- Thanks to our Developers here at Open Source with SLU, community, contributors, and supporters who have made Pi4Micronaut possible.

![Pi4Micronaut Team](./pi4micronaut-20240314/pi4micronaut_team.jpg)

![Pi4Micronaut Team Working](./pi4micronaut-20240314/pi4micronaut_team_working.jpg)

### Let's build a future where interacting with electronic components on the Raspberry Pi is simpler and more enjoyable!!