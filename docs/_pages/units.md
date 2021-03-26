---
layout: splash
title: Course Units
permalink: /units.html
sidebar:
        nav: "units"

feature_row:
  - image_path: assets/images/unit_images/u01/grid.png
    alt: "Unit 1"
    title: "Unit 01: Introduction to R"
    excerpt: "Setting up R and introducing some help tools."
    url: "/unit01/unit01-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u02/grid.png
    alt: "Unit 2"
    title: "Unit 02: Types of Data"
    excerpt: "Introduction to different levels of measurements."
    url: "/unit02/unit02-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u03/grid.png
    alt: "Unit 3"
    title: "Unit 03: Types of Objects"
    excerpt: "Introduction to different types of data storing in objects."
    url: "/unit03/unit03-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u04/grid.png
    alt: "Unit 4"
    title: "Unit 04: Indexing"
    excerpt: "Introduction to Indexing."
    url: "/unit04/unit04-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u05/grid.png
    alt: "Unit 5"
    title: "Unit 05: Work Environment"
    excerpt: "Introduction to the R Work Environment."
    url: "/unit05/unit05-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u06/grid.png
    alt: "Unit 6"
    title: "Unit 06: In- & Output of Data"
    excerpt: "Introduction to In- and Output of Data in R."
    url: "/unit06/unit06-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"  

  - image_path: assets/images/unit_images/u07/grid.png
    alt: "Unit 07"
    title: "Unit 07: Operations"
    excerpt: "Introduction to operators, if-then-else and loops."
    url: "/unit07/unit07-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u08/grid.png
    alt: "Unit 8"
    title: "Unit 08: Sorting & Merging"
    excerpt:  "Introduction to sorting Data."
    url: "/unit08/unit08-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u09/grid.png
    alt: "Unit 09"
    title: "Unit 09: Simple Visualizations"
    excerpt: "Introduction to simple graphic outputs."
    url: "/unit09/unit09-01_Intro.html"
    btn_label: "Show me more"
    btn_class: "btn--primary"

  - image_path: assets/images/spotlights/grid.png
    alt: "Spotlights"
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

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

---

<!---
your comment goes here
and here
{% include units_page %}
-->
