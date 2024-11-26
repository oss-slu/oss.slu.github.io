---
title: Where's Religion? MVP Launch
description: This semester, our Where's Religion Desktop and Mobile teams achieved a major milestone by completing the MVP and launching the app domain live, overcoming challenges and refining the user experience.
slug: wheres-religion-mvp
authors: [team_wheres_religion]
tags: [announcement, news, project]
image: ./oss-wheres-religion/launch.jpeg
hide_table_of_contents: false
---

This semester, the *Where's Religion* Desktop and Mobile teams reached an incredible milestone by completing the Minimum Viable Product (MVP) and launching the app's domain live. From refining the user interface to addressing technical challenges, this journey was filled with collaboration and problem-solving.

<!--truncate-->

**What:** Completion of MVP and public launch of *Where's Religion*<br/>
**Who:** The *Where's Religion* Desktop and Mobile development teams<br/>
**When:** Fall Semester<br/>
**Where:** Live across web and mobile platforms<br/>
**Resources:** [Where's Religion Website](https://wheresreligion.org)

*Where's Religion* is a platform that allows users to document and share multimedia annotations of places where religion is encountered in everyday life. With features like interactive mapping, multimedia uploads, and a robust search system, the app bridges faith traditions, cultural insights, and human experiences.

---

### **Key Highlights of Development**

#### **UI and UX Enhancements**
We listened closely to user feedback and made significant updates to improve the app's design and functionality:
- **Redesigned Navigation:** Improved layout and streamlined user flows made the app more intuitive.
- **Onboarding Tour:** Added an interactive walkthrough for new users to help them understand key features like location search, media uploads, and annotations.

#### **Evolving Media Uploads**
The media upload feature underwent a complete overhaul to accommodate user needs:
- **Bulk Uploads:** Added functionality to upload multiple files at once, making the process faster and more efficient.
- **Enhanced Annotation Tools:** Users can now tag and organize their uploads with greater flexibility.

#### **Archiving Instead of Deleting**
An early issue with database relationships led to a critical decision:
- Instead of deleting data, we implemented an archiving system to preserve records without breaking database connections. This feature also gave users the ability to restore content when needed.

#### **Fixing Memory Leaks in Tests**
Testing revealed a recurring memory leak due to unresolved promises:
- By restructuring our test cases and implementing a robust cleanup process, we resolved stack overflow issues and ensured our CI pipeline runs smoothly.

---

### **Impact and Reflections**
Launching the app domain has already had a noticeable impact. Users have embraced the platform's capabilities, and institutions are exploring how they can leverage the tools for their communities. This success is a testament to the hard work and dedication of our teams.

#### **Lessons Learned**
- Prioritize user feedback and iterate quickly.
- Build for scalability from the start to reduce technical debt.
- Embrace challenges as opportunities for growth and innovation.

![Where's Religion Dashboard Screenshot](./oss-wheres-religion/dashboard.png)
![Onboarding Tour Example](./oss-wheres-religion/onboarding.png)

---

### **Looking Ahead**
While this semester’s achievements are monumental, we are just getting started. Our roadmap includes:
- **Advanced Features:** Expanding functionalities like real-time collaboration and push notifications.
- **User Engagement:** Regular updates based on community feedback to keep the app relevant and engaging.
- **Performance Optimization:** Ensuring scalability as the user base grows.

We’re proud of what we’ve built and excited to continue growing *Where’s Religion* into a tool that enriches the way people experience and document their encounters with religion.
