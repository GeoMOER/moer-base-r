---
layout: splash
title: Course Units
permalink: /units.html
sidebar:
        nav: "units"

feature_row:
  - image_path: assets/images/unit_images/u01/grid.png
    alt: ""
    title: "Unit 01: Introduction to R"
    excerpt: "Setting up R and introducing some help tools."
    url: "/unit01/unit01-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u02/grid.png
    alt: ""
    title: "Unit 02: Types of Data"
    excerpt: "Introduction to different levels of measurement."
    url: "/unit02/unit02-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u03/grid.png
    alt: ""
    title: "Unit 03: Types of Objects"
    excerpt: "Introduction to different ways of storing data in objects."
    url: "/unit03/unit03-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u04/grid.png
    alt: ""
    title: "Unit 04: Indexing"
    excerpt: "Introduction to Indexing."
    url: "/unit04/unit04-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u05/grid.png
    alt: ""
    title: "Unit 05: Work Environment"
    excerpt: "Introduction to the R Work Environment."
    url: "/unit05/unit05-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u06/grid.png
    alt: ""
    title: "Unit 06: Data Input and Output"
    excerpt: "Introduction to data input and output in R."
    url: "/unit06/unit06-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"  

  - image_path: assets/images/unit_images/u07/grid.png
    alt: ""
    title: "Unit 07: Operations"
    excerpt: "Introduction to operators, if-then-else and loops."
    url: "/unit07/unit07-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u08/grid.png
    alt: ""
    title: "Unit 08: Sorting & Merging"
    excerpt:  "Introduction to sorting data."
    url: "/unit08/unit08-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u09/grid.png
    alt: ""
    title: "Unit 09: Simple Visualizations"
    excerpt: "Introduction to simple graphic outputs."
    url: "/unit09/unit09-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/spotlights/grid.png
    alt: ""
    title: "Spotlights"
    excerpt: "Some Spotlights to make your life easier."
    url: "/unit99/sl01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--danger"
---

# Overview of Course Units

{% for post in site.posts limit: 5 %}
  {% include archive-single.html %}
{% endfor %}

## Find a task {#find-a-task}

| I want to… | Start here |
|---|---|
| Install R/RStudio and run commands | [First steps and setup]({{ '/unit01/unit01-01_Intro.html' | relative_url }}) |
| Interpret types, categories and missing values | [Data types]({{ '/unit02/unit02-01_Intro.html' | relative_url }}) |
| Choose a vector, table, matrix or list | [Object structures]({{ '/unit03/unit03-01_Intro.html' | relative_url }}) |
| Select or change rows/columns | [Indexing]({{ '/unit04/unit04-01_Intro.html' | relative_url }}) |
| Understand project paths and packages | [Work environment]({{ '/unit05/unit05-01_Intro.html' | relative_url }}) |
| Import/export a table | [Data input and output]({{ '/unit06/unit06-01_Intro.html' | relative_url }}) |
| Write a decision, loop or function | [Operations]({{ '/unit07/unit07-01_Intro.html' | relative_url }}) |
| Sort, bind, join, edit text, group or reshape | [Table operations]({{ '/unit08/unit08-01_Intro.html' | relative_url }}) |
| Choose and make a labelled plot | [Visualization]({{ '/unit09/unit09-01_Intro.html' | relative_url }}) |

## Check your starting point {#check-your-starting-point}

Already familiar with some R? Attempt a summary’s independent task before deciding which lessons to revisit. Each summary supplies checks and explanations; no submission is required.

- [Unit 01]({{ '/unit01/unit01-07_summary.html' | relative_url }}#practice)
- [Unit 02]({{ '/unit02/unit02-07_summary.html' | relative_url }}#practice)
- [Unit 03]({{ '/unit03/unit03-07_Summary.html' | relative_url }}#practice)
- [Unit 04]({{ '/unit04/unit04-04_summary.html' | relative_url }}#practice)
- [Unit 05]({{ '/unit05/unit05-04_summary.html' | relative_url }}#practice)
- [Unit 06]({{ '/unit06/unit06-05_summary.html' | relative_url }}#practice)
- [Unit 07]({{ '/unit07/unit07-11_summary.html' | relative_url }}#practice)
- [Unit 08]({{ '/unit08/unit08-05_summary.html' | relative_url }}#practice)
- [Unit 09]({{ '/unit09/unit09-10_summary.html' | relative_url }}#practice)

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

---

<!---
your comment goes here
and here
{% include units_page %}
-->
