---
id: playbook
title: Playbook for creating a university open-source program
custom_edit_url: null
---

# Playbook
## Purpose

## Resources needed

1. Courses that primarily rely on hands-on software development as a teaching mechanism.
2. Tech leads
3. Program director (budget to support program director salary)
4. Computing resources - some projects need more stuff
5. Software project requests
6. Partners - faculty needing software, industry willing to sponsor projects
7. Collaboration tools:
   * GitHub organization account with teacher benefits
   * Slack instance
   * Physical space for meetings and co-development

## Processes

### Project selection, delivery, and support

#### Overview

We have developed a [rubrik](https://oss-slu.github.io/docs/about/software) for project selection. Since the majority of the developers on the selected projects come from computer science project courses, the rubrik evaluates the projects in terms of value to students, value to the research community, and value to promoting Open Source with SLU. The rubrik is applied to all submitted projects, and the number of 'yes' responses counts as the project score. Projects with higher scores are offered to students, who submit their rank ordered lists of interest. Students are matched to projects based on their interest. Details of the team formation and management are described in the [Software development with enrolled students](#Software-development-with-enrolled-students) section.

Prior to engaging the development team, Open Source with SLU staff creates a brief (1-2 pages) statement of work for each selected project. The statement of work includes a project overview, known high level requirements, desired outcomes, expected deliverables, and success criteria. The statement of work serves as the starting points for the team, with the understanding that consistent communication with all stakeholders is necessary to ensure that the end result is valuable.

Client feedback is solicited on various iterations of the project: the working functionality is presented to the client and client has the opportunity to try it out and report on what is working, what is not working, and what is lacking. This feedback is used to plan out future efforts.

We emphasize that Open Source with SLU builds and maintains software, and can help with deploying the software as necessary. We help clients come up with a deployment plan, and deploy the software for them. However, we do not commit to providing operational support for monitoring deployed services and making sure that they are available and accessible.

#### Known Challenges

#### Success Metrics

1. Number of projects that are being actively used by clients

### Software development with enrolled students

#### Overview
The two-semester Computer Science senior capstone course serves as a platform where students transition from being learners to active contributors in the open-source domain. Beyond imparting technical skills, the course focuses on refining collaborative abilities and cultivating a shared understanding of building upon collective knowledge. In this section, we unravel the processes through which students, enrolled in the two-semester sequence, engage with open-source projects. From strategic team formation to meticulous project management on GitHub, the capstone course reflects our dedication to providing students with a comprehensive, hands-on experience that extends beyond conventional classroom boundaries. The methodology described in this section can be applied and adapted to any course that primarily relies on software development projects as a teaching mechanisms.

At the start of the semester, students were presented with project options, and were asked to rank order all projects based on their interest and preferences. The course instructor used these rank orders to form teams. This turned into a multi-objective optimization problem with objectives being: 1) keep team size betwen 2 and 4 people, 2) maximize students' project interest, and 3) balance overall team skill level. While objectives 1 and 2 can be programmed, objective 3 is a subjective and relies heavily on instructor's familiarity with students' skills. In our case, the team formation was done manually. In the future, this process can be improved by programmatically assignming students to teams based on the identified objectives. Once tentative teams were formed, all students interviewed with project-specific tech leads. This served several purposes. Firstly, enrolled students practiced their interviewing skills, tech leads met members of their team and were able to voice concerns they had, and tech leads practiced being an interviewer. Interview feedback allowed the instructor to make team adjustments, if necessary.

Prior to the start of the project, tech leads were asked to create GitHub issues, describing various development tasks that needed to be completed. Once teams were formed, the software development commenced. The work was divided into 2-week sprints. During each sprint, each developer was responsible for resolving one issue in their GitHub repository. We utilized "trunk based" development, to keep the process simple and manageable for the studetns. Each student created a branch from the main branch of their project repo and worked on their selected issue in that branch, pushing their branch to the remote repo occasionally. At the end of week 1, each student was required to submit a draft pull request, demonstrating their progress. At the end of week 2, the work in progress pull request was to be converted to a pull request. The tech lead and other teammates reviewed the pull request, providing comments and requesting changes, if needed. Once all comments were addressed, the tech lead merged the pull request to the main branch. In order to earn credit for week 2, the student's pull request had to be merged to main by the deadline. 

#### Known Challenges
There are several challenges with the described approach. 
1. Fair work distribution: the assessment of students' progress and accomplishments is based on successfull resolution of one issue during the 2-week sprint, with a demonstrable progress at the end of week 1. Therefore, the issues/tasks need to be scoped in roughly equivalent amount of work, to keep work distribution fair across teammates. Occasionally, a task ends up being too challenging to be resolved withou one 2-week sprint. Timely communication between all involved parties becomes a primary tool for identifying these cases. In these cases, the task continues into the next sprint and the student receives credit for their effort. 
1. Team mentality: our approach highlights individual accountability toward common goal, and initially students working on their individual tasks did not feel like a team. Most students were focused on getting their task completed, to receive class credit for their work. Overtime, students started reaching out to each other for help. I observed such interactions in our Slack workspace. I suspect there were other, in-person interactions, which I was not able to observe, that helped crated a sense of a team. To encourage and support students in helping each other, we crearted an awards system: once a month I recognized students, that were nominated by their tech leads, for their above and beoyond contributions to the team progress. This was an in-class recognition, where the student was issued a regognition sertificate. As a token of appreciation, I also gave each recognized student a coupon that could be redeemd for extra credit or a prize at the end of the semester.

#### Success Metrics
1. Grades - grades are based on students' contributions, therefore using students grades is a valuable success metric.
1. Students' feedback - we have developed a student survey, where students are asked to rate various aspects of the process. While these ratings are subjective, they provide a useful perspective on which aspects of the process are more successful than others. The specific areas students are asked to rate are:
    1. Clarity of project goals
    1. Team communication
    1. Tech leads
    1. Value of the course
    1. Thier own involvement in the course
The Spring 2024 student survey report is available [here](https://slu.az1.qualtrics.com/reports/public/c2x1LTY2MzdmMzQ4MWZhNTA1MDAwOGU1NjJmYy1VUl8wd2h1M2Q1eFpaR2lkelU=).

### Software development with volunteers

(Community outreach - recruiting new developers)

#### Overview
Students often approach faculty looking for opportunities to get involved in research and development. Many students are looking for paid work, but some students are interested in opportunities that will help them grow their skills and resumes. Open Source with SLU's mission is to give students realistic software development experience through open-source contributions, and thus is a great way to get such students involved. We refer to such students as volunteers. Volunteers contact us in person and by email, asking how they can get involved. We direct them to our current projects descriptions and ask them to identify a project they would like to contribute to. Once they select a project, we coach volunteers through the standard open-source contribution practice: create a fork of the repository, run the code in the development environment, select an issue they would like to work on (typically, an issue marked as 'good first issue'), make a comment in that issue requesting to assign it to them. The project tech lead assigns the issue to a volunteer, the volunteer works on the issue in their fork. Once completed, the volunteer submits a pull request to merge the code from their forked repo to the main branch of the original repo. The team (people with write access to the original repo) reviews the pull request, makes comments (asks for changes, if appropriate). After all the comments are addressed, the tech lead merges the pull request to the main branch, and the volunteer becomes an official contributor to the project.

We invite our volunteers to join Open Source with SLU slack workspace, and their specific project within that workspace. Slack gives volunteers a faster way to communicate with the main development team.

In addition to student volunteers looking to grow their skills, we have used Open Source with SLU projects as a basis for technical interviews for gradutate assistant jobs and PostDoc jobs offered by various faculty through their other grant funds. We invite the job candidate to select a 'good first issue' from any of the ongoing projects, and resolve the ussue (using the same process as student volunteers). It is a valuable tool that helps us evaluate the candidate's development skills, and this is a service we do for the faculty in our deparment. Successful contributions get merged to the main branch of the candidate-selected repo, which is a benefit for Open Source with SLU.

#### Known Challenges
It is challenging to find student developers who are interested in serving as a 'volunteer' contributor. Many students are looking to get monetary compensation for their work, and walk away when they learn that this is a 'volunteer' role. 

Integrating external developers with the internal team is also a challenge. We need a better process that will help external developers feel like they are part of the team.

We've had a challenging time in keeping external developers interested: they typically join by resolving one 'good first issue', and then we never hear back from them. Better engagement with external developers could help overcome this challenge.

#### Success Metrics
1. Number of issues (across all projects) resolved by all external developers
2. Number of issues resolved per external developer

### Community training

Students in courses and outside of courses (reusable materials)

#### Overview

#### Known Challenges

#### Success Metrics

### Faculty outreach

Getting research faculty to come to OSS for software needs
Include OSS development in grant budgets

#### Overview

#### Known Challenges

#### Success Metrics

### Industry outreach

#### Overview

#### Known Challenges

#### Success Metrics

## Case Studies

### Successful projects

#### LRDA

Continued funding

#### Speech Transcription

Papers, presentations

### Failed projects

### Mixed bags
