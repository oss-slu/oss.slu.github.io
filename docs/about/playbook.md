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

#### Known Challenges

#### Success Metrics

### Software development with enrolled students

#### Overview

In a course that primarily relies on software development projects as a teaching mechanisms, students enrolled in the course act as primary developers for selected projects. In our case, student developers came from the Computer Science capstone course - a two semester sequence, with 2 credit hours per semester.

At the start of the semester, students were presented with project options, and were asked to rank order all projects based on their interest and preferences. The course instructor used these rank orders to form teams. This turned into a multi-objective optimization problem with objectives being: 1) keep team size betwen 2 and 4 people, 2) maximize students' project interest, and 3) balance overall team skill level. While objectives 1 and 2 can be programmed, objective 3 is a subjective and relies heavily on instructor's familiarity with students' skills. In our case, the team formation was done manually. In the future, this process can be improved by programmatically assignming students to teams based on the identified objectives. Once tentative teams were formed, all students interviewed with project-specific tech leads. This served several purposes. Firstly, enrolled students practiced their interviewing skills, tech leads met members of their team and were able to voice concerns they had, and tech leads practiced being an interviewer. Interview feedback allowed the instructor to make team adjustments, if necessary.

Prior to the start of the project, tech leads were asked to create GitHub issues, describing various development tasks that needed to be completed. Once teams were formed, the software development commenced. The work was divided into 2-week sprints. During each sprint, each developer was responsible for resolving one issue in their GitHub repository. We utilized "trunk based" development, to keep the process simple and manageable for the studetns. Each student created a branch from the main branch of their project repo and worked on their selected issue in that branch, pushing their branch to the remote repo occasionally. At the end of week 1, each student was required to submit a draft pull request, demonstrating their progress. At the end of week 2, the work in progress pull request was to be converted to a pull request. The tech lead and other teammates reviewed the pull request, providing comments and requesting changes, if needed. Once all comments were addressed, the tech lead merged the pull request to the main branch. In order to earn credit for week 2, the student's pull request had to be merged to main by the deadline. 

#### Known Challenges
There are several challenges with the described approach. 
1. Fair work distribution: the assessment of students' progress and accomplishments is based on successfull resolution of one issue during the 2-week sprint, with a demonstrable progress at the end of week 1. Therefore, the issues/tasks need to be scoped in roughly equivalent amount of work, to keep work distribution fair across teammates. 
2. Team mentality: our approach highlights individual accountability toward common goal, and initially students working on their individual tasks did not feel like a team. Most students were focused on getting their task completed, to receive class credit for their work. Overtime, students started reaching out to each other for help. I observed such interactions in our Slack workspace. I suspect there were other, in-person interactions, which I was not able to observe, that helped crated a sense of a team. To encourage and support students in helping each other, we crearted an awards system: once a month I recognized students, that were nominated by their tech leads, for their above and beoyond contributions to the team progress. This was an in-class recognition, where the student was issued a regognition sertificate. As a token of appreciation, I also gave each recognized student a coupon that could be redeemd for extra credit or a prize at the end of the semester.
#### Success Metrics


### Software development with volunteers

(Community outreach - recruiting new developers)

#### Overview
Students often approach faculty looking for opportunities to get involved in research and development. Many students are looking for paid work, but some students are interested in opportunities that will help them grow their skills and resumes. Open Source with SLU's mission is to give students realistic software development experience through open-source contributions, and thus is a great way to get such students involved. We refer to such students as volunteers. Volunteers contact us in person and by email, asking how they can get involved. We direct them to our current projects descriptions and ask them to identify a project they would like to contribute to. Once they select a project, we coach volunteers through the standard open-source contribution practice: create a fork of the repository, run the code in the development environment, select an issue they would like to work on (typically, an issue marked as 'good first issue'), make a comment in that issue requesting to assign it to them. The project tech lead assigns the issue to a volunteer, the volunteer works on the issue in their fork. Once completed, the volunteer submits a pull request to merge the code from their forked repo to the main branch of the original repo. The team (people with write access to the original repo) reviews the pull request, makes comments (asks for changes, if appropriate). After all the comments are addressed, the tech lead merges the pull request to the main branch, and the volunteer becomes an official contributor to the project.

We invite our volunteers to join Open Source with SLU slack workspace, and their specific project within that workspace. Slack gives volunteers a faster way to communicate with the main development team.
#### Known Challenges

#### Success Metrics

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
