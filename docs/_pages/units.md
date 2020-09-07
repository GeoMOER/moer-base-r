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
    excerpt: "Setting up the program and auxiliary programs for operating R and introduce a few tools if you get stuck."
    url: "/unit01/unit01-01_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u02/grid.png
    alt: "Unit 2"
    title: "Unit 02: Data Input"
    excerpt: "First own steps with R: from scalar to table."
    url: "/unit02/unit02-01_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u03/grid.png
    alt: "Unit 3"
    title: "Unit 03: Types of Data"
    excerpt: "You will learn about different levels of measurements."
    url: "/unit03/unit02-03_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u04/grid.png
    alt: "Unit 4"
    title: "Unit 04: Types of Objects"
    excerpt: "You will learn about different types of data storing in objects."
    url: "/unit04/unit04-01_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u05/grid.png
    alt: "Unit 5"
    title: "Unit 05: Operations"
    excerpt: "You will learn what operators and loops do and how to write a if-then-else construct."
    url: "/unit05/unit05-01_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u06/grid.png
    alt: "Unit 6"
    title: "Unit 06: In- & Output"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "/unit06/unit06-01_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"  

  - image_path: assets/images/unit_images/u07/grid.png
    alt: "Unit 7"
    title: "Unit 07: Indexing"
    excerpt: "Setting up the program and auxiliary programs for operating R and introduce a few tools if you get stuck."
    url: "/unit07/unit07-01_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u08/grid.png
    alt: "Unit 8"
    title: "Unit 08: Environment"
    excerpt: "Setting up the program and auxiliary programs for operating R and introduce a few tools if you get stuck."
    url: "/unit08/unit08-01_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u09/grid.png
    alt: "Unit 9"
    title: "Unit 09: Partial Data"
    excerpt: "Setting up the program and auxiliary programs for operating R and introduce a few tools if you get stuck."
    url: "/unit09/unit09-01_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u10/grid.png
    alt: "Unit 10"
    title: "Unit 10: Sorting Data"
    excerpt: "Setting up the program and auxiliary programs for operating R and introduce a few tools if you get stuck."
    url: "/unit10/unit10-01_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u11/grid.png
    alt: "Unit 11"
    title: "Unit 11: Simple Graphics"
    excerpt: "Setting up the program and auxiliary programs for operating R and introduce a few tools if you get stuck."
    url: "/unit11/unit11-01_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u12/grid.png
    alt: "Unit 12"
    title: "Unit 12: Combining Data"
    excerpt: "Setting up the program and auxiliary programs for operating R and introduce a few tools if you get stuck."
    url: "/unit12/unit12-01_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u13/grid.png
    alt: "Unit 13"
    title: "Unit 13: Converting Data"
    excerpt: "Setting up the program and auxiliary programs for operating R and introduce a few tools if you get stuck."
    url: "/unit13/unit13-01_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u14/grid.png
    alt: "Unit 14"
    title: "Unit 14: Functions"
    excerpt: "Setting up the program and auxiliary programs for operating R and introduce a few tools if you get stuck."
    url: "/unit14/unit14-01_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u15/grid.png
    alt: "Unit 15"
    title: "Unit 15: Ext. Graphics"
    excerpt: "Setting up the program and auxiliary programs for operating R and introduce a few tools if you get stuck."
    url: "/unit15/unit15-01_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"

  - image_path: assets/images/unit_images/u16/grid.png
    alt: "Unit 16"
    title: "Unit 16: Exam"
    excerpt: "Setting up the program and auxiliary programs for operating R and introduce a few tools if you get stuck."
    url: "/unit16/unit16-01_Intro.html"
    btn_label: "Show me"
    btn_class: "btn--primary"

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
