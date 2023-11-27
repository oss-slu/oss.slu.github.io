---
id: about
title: MeltShiny
custom_edit_url: https://github.com/oss-slu/MeltWin2.0
---

## Overview

MeltShiny is a software application that automates the analysis and visualization of DNA melting curves for researchers in chemistry, biology, and genetics. It is built on tools like MeltWin and MeltR, resulting an intuitive graphical user interface with robust data processing capabilities powered by R. MeltShiny removes the need for manual curve fitting  with just a few clicks, researchers can upload their DNA melting data and automatically generate graphs and tables. Key benefits include automated outlier removal, compatibility with modern operating systems, and accessibility for non-programmers. By streamlining tedious tasks like handling file formats and filtering data, MeltShiny allows researchers to focus their time on scientific analysis and interpretation. Its simple yet powerful interface makes complex computational analysis of DNA thermodynamics accessible to scientists with varied technical skill levels.

### Information

- **Source Code:** <https://github.com/oss-slu/MeltWin2.0>
- **Clients:** 
  - [Dr. Brent Znosko](https://www.slu.edu/science-and-engineering/academics/chemistry/faculty/brent-znosko.php)
  - Sebastian Arteaga(Assistant)
- **Current Tech Lead:** [Sailikhita Pulijala](https://github.com/LikhitaPulijala)
- **Developers:**

  - [Zohaib Ahmed](https://github.com/zohaib-a-ahmed) (capstone)
  - [Ethan Gray](https://github.com/ethan-gray-01) (capstone)
  - [Massimo Evelti](https://github.com/Massi-Papi) (capstone)
  - [Uday Prasad Aitha](https://github.com/aithaprasad) (alumni, previous tech lead)
  - [Shlok Patel](https://github.com/shlokpat6) (alumni)
  - [Colleen Wade](https://github.com/cwade6) (alumni)
  - [Anthony Hampton](https://github.com/adhampton110) (alumni)

- **Start Date:** July 2022
- **Adoption Date:** July 2022
- **Technologies Used:**
  - R
  - Shiny Package
- **Type:** Web Application
- **License:** [GNU General Public License v3.0](https://opensource.org/license/gpl-3-0/)

## User Guide

MeltShiny has some dependencies which will need to be installed for the program to run. R Package installer files have been included, with the names MeltShinyDependenciesInstaller.command and MeltShinyDependenciesInstaller.bat for MacOS and Windows, respectively. These files are found within the MacOS_Scripts and Windows_Scripts folders found within the MeltShiny application bundle.Note, that in order for the Windows version to work, you must add the R bin folder to your PATH variable. For MacOS, the script can be used without any additional work. Double clicking MeltShinyDependenciesInstaller.command or MeltShinyDependenciesInstaller.bat for Mac and Windows, respectively, will open up a terminal. 

## Technical Information

### Overview

![Software Architecture](architecture.png)

### Development Priorities

- Latest R version required
- Knowledge on Shiny server
- Implement user-friendly UI
- Require automated testing
- Version Control and Collaboration

## Get Involved

If you would like to contribute to this project, please visit our [GitHub page](https://github.com/oss-slu/MeltWin2.0) to create your own issues or pull requests.
