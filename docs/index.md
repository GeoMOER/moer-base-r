---
title: Base R - no statistics, no fancy packages, just plain R
layout: splash
google_site_verification: "YUryV-9eiF-F3EmYUGc-_Bc4wpKVjMeH9AgvBFjKy-k"
date: '2020-06-30 13:00:00 +0100'
header:
  google-site-verification: googlecbcb487a237fee78.html
  overlay_color: "#000"
  overlay_filter: 0.6
  overlay_image: "/assets/images/teaser.jpeg"
  caption: 'Artwork: Thinkstock / InfoWorld, Do more with R. [Current source page](https://www.infoworld.com/article/2262023/top-r-tips-and-news-from-rstudio-global-2021.html)'
  cta_label: Go to course units
  cta_url: "/units.html"
excerpt: Learn the essentials for working with R.
feature_row_intro:
- excerpt: This course is brought to you by the Lab of Environmental Informatics (University of Marburg, Germany) and was funded by the "digLL" initiative of the Hessian Ministry of Higher Education, Research, Science and the Arts.
# Optional image metadata; learning outcomes are rendered as Markdown below.
feature_row_ilos:
- image_path: "/assets/images/envobs_ilos.jpg"
  alt: PC monitor laying in the garden of the institute.
  title: Intended learning outcomes
---

{% include feature_row id="feature_row_intro" type="center" %}

A life without the free programming language R is no longer imaginable for many people and those who do not know R often do not know what they are missing.
Unfortunately, the widespread belief that R is difficult to learn still exists,
which makes it unnecessarily difficult for many newcomers to enter the world of R.
We would like to change this with this course.




# Intended learning outcomes
At the end of this course you should

* create, inspect and manipulate R objects using suitable data types and structures,
* flexibly use your knowledge and understanding in various programming contexts, and
* have the basic programming skills for working in more complex subject-specific projects.


# Course features

This material is designed primarily for self-study and preparation for subsequent courses. Other courses may link directly to a lesson. There are no scheduled teaching sessions, required submissions or formal examination in this material.

Start with the route that matches your needs:

- **New to R:** begin with [Unit 01]({{ "/unit01/unit01-01_Intro.html" | relative_url }}) and follow the units in order. Try each example, then use the independent tasks and suggested answers in the unit summaries.
- **Returning to R:** try a [unit summary]({{ "/units.html" | relative_url }}#check-your-starting-point) first. If a check is difficult, follow its revisit links rather than repeating every familiar page.
- **Looking up one task:** use the [task index]({{ "/units.html" | relative_url }}#find-a-task) or the site search. A lesson’s Before you start box names its prerequisites, setup and a concrete goal. Run the setup on that page before later code blocks.

Work in R scripts; hints and possible solutions are available after you attempt the tasks. A matching result is a check, not a grade: explain why it is appropriate before moving on. Spotlights are optional. The batch-processing lesson is a preview to revisit after Unit 07.


# Syllabus

| Unit | Topic | Content |
|------|-------|---------|
| 01 | Overview and the very Basics | Set up everything for operating R, take your own first steps in R, and learn how to get help |
| 02 | Types of Data                | How data is measured and organized from an R perspective                                     |
| 03 | Types of Objects             | How data types are structured within different object types in R                             |
| 04 | Indexing                     | Learn how to access your data in R objects                                                   |
| 05 | Work Environment             | Set up your directory structure and get control over your paths to directories and files  |
| 06 | Data Input and Output        | Get your data in and out of R           |
| 07 | Operations                   | Operations with operators, decision structures, and loops  |
| 08 | Sorting and Combining Data   | Sort, bind and merge data; manipulate strings, aggregate groups and reshape tables |
| 09 | Simple Visualizations        | Quickly and simply visualize your data  |
|    | Spotlights                   | Additional resources on selected topics |


<!--
# Deliverables
The exam in unit 16 will be used for self-assessment and as a prerequisite for more subject-specific courses.
-->

# Preparation and prerequisites
No previous R programming experience is required. You should be comfortable creating folders and saving files on your computer. Unit 01 explains how to install R and RStudio; later units build on the object, indexing and file-path skills introduced earlier.

The course focuses on programming with functions supplied with R, including basic summaries and plots. A few examples introduce additional packages explicitly: RStudio's optional readr importer in Unit 06 and reshape2 for reshaping in Unit 08. Unit 05 explains package installation. Internet access is needed for installing software and packages and for the hosted interactive exercises.

R scripts are sufficient for the core units. R Markdown and the Git/GitHub and CSS spotlights are optional extensions; the R Markdown section assumes that you can already create and render a document. The batch-processing example in Unit 06 previews loops from Unit 07 and can be revisited after that unit.


# Instructor
{% for author in site.data.authors %} {% include author-profile.html %}
{% endfor %}


<!-- chunky


% include author-profile.html %

Course contents are among other things:

* scientific theoretical basics,
* R environment and syntax,
* data and object types,
* data management,
* import and export of data,
* simple functions,
* high- and low-level plotting functions and their arguments and
* various statistical analysis methods.

google search: https://search.google.com/search-console/
still registered to Mandy Gimpels Google Account
-> transfer to Geomoer@google.com???

("digital literacy")
-->
