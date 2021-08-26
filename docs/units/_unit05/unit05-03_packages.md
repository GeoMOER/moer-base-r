---
title: Installing Packages in R
toc: TRUE
toc_float: TRUE
collapsed: TRUE
smooth_scroll: TRUE
header:
  image: /assets/images/unit_images/u05/header.png
  image_description: "work environment"
  caption: "Photo by [Lukas Goumbik](https://pixabay.com/de/users/Goumbik-3752482/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2055522) from [Pixabay](https://pixabay.com)"
---

> “Good things come in small packages.” — Proverb
<!--more-->

Numerous packages that can be accessed online contain additional functions for analyzing data with regard to questions from various specialist areas; further custom functions can be created.   

Packages are the fundamental units of reproducible R code. They include reusable R functions, the documentation that describes how to use them, and sample data.

Packages allow researchers and scientists to share R functions and data with other users. Some packages come already installed with R, others must be downloaded separately from a CRAN repository or other locations such as GitHub or personal websites.

Most of the time R will download the package from CRAN, so you'll need to be connected to the internet.

# Installing packages

There are two options to install and activate packages:

## First Option: Command line

To install a R package type at the command line:

```
install.packages("<the package's name>")
```

## Second Option: Packages Window

Go to the bottom right window (in other words the fourth window in the image from unit 1) and click on Packages (the orange circle). You will see all installed (but not activated!) packages. When you scroll down you will see some packages with a check mark in front of the name. Only this packages are activated.

{% include figure image_path="/assets/images/unit_images/u05/packages01.png" caption="Searching for and installing packages in R environment" %}

Press the Install button (red square) and choose from where you want to install your package. You can choose between a local zip-file or from the CRAN online repository.

Then type in the name of the package and suggestions will be displayed, for example `ggplot2` - R's famous package for making beautiful graphics. Finish the installation with hitting `Install`.

{% include figure image_path="/assets/images/unit_images/u05/packages02.png" caption="searching for and installing packages" %}

# Activating packages

As mentioned before, installed is not immediately activated. To use a package you need to activate it. Fortunately there are also two simple options available: the command line and the packages window. Again.

Once you have a package installed, you can make its contents available to use in your current R session (in other words "activating") by typing in the command line:
```
library("<the package's name>")
```
The seconds option is to activate a package through the window by simply putting a check mark in front of the package name.

{% include figure image_path="/assets/images/unit_images/u05/packages03.png" caption="activating packages" %}

# Multiple packages

For In the end it will look like this. When you combine both lines it will install and activating in one step.

```
install.packages("ggplot2")
library("ggplot2")
```
You can also line up every important package you will need for your project.
But be patient. Fetching and installing packages may take some time.

```
install.packages("ggplot2")
install.packages("dismo")
install.packages("ggmap")
install.packages("randomForest")
library("dismo")
library("ggmap")
library("ggplot2")
library("randomForest")
```

<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
div {
  margin-bottom: 15px;
  padding: 4px 12px;
}

.info {
  background-color: #e7f3fe;
  border-left: 6px solid #2196F3;
}

</style>
</head>
<body>
<div class="info">
  <p><strong>Hint:</strong> Mind the order: first install - then activate through library.</p>
</div>
</body>
</html>

# Working with a package

Make sure you read the documentation of the package. This gives a brief overview of the functions and some comments about the features of the methods. Note that if you click on a package the package window will move to the Help window. There you can find a description of the method and which arguments are necessary to run the function.
