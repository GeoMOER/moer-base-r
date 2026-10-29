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

{% include self-study-start.html %}

Numerous packages that can be accessed online contain additional functions for analyzing data with regard to questions from various specialist areas; further custom functions can be created.   

Packages are the fundamental units of reproducible R code. They include reusable R functions, the documentation that describes how to use them, and sample data.

Packages allow researchers and scientists to share R functions and data with other users. Some packages come already installed with R, others must be downloaded separately from a CRAN repository or other locations such as GitHub or personal websites.

Most of the time R will download the package from CRAN, so you'll need to be connected to the internet.

# Installing packages

There are two options to install and activate packages:

## First Option: Command line

To install an R package type at the command line:

```
install.packages("<the package's name>")
```

## Second Option: Packages Window

Go to the bottom right window (in other words the fourth window in the image from unit 1) and click on Packages (the orange circle). You will see all installed (but not activated!) packages. When you scroll down you will see some packages with a check mark in front of the name. Only these packages are activated.

{% include figure image_path="/assets/images/unit_images/u05/packages01.png" caption="Searching for and installing packages in R environment" alt="RStudio Packages pane with the Install button highlighted." %}

Press the Install button (red square) and choose from where you want to install your package. You can choose between a local zip-file or from the CRAN online repository.

Then type in the name of the package and suggestions will be displayed, for example `ggplot2` - R's famous package for making beautiful graphics. Finish the installation by clicking `Install`.

{% include figure image_path="/assets/images/unit_images/u05/packages02.png" caption="searching for and installing packages" alt="Install Packages dialog using CRAN, with ggplot2 entered as the package and Install dependencies selected." %}

# Activating packages

As mentioned before, installed is not immediately activated. To use a package you need to activate it. Fortunately there are also two simple options available: the command line and the packages window. Again.

Once you have a package installed, you can make its contents available to use in your current R session (in other words "activating") by typing in the command line:
```
library("<the package's name>")
```
The second option is to activate a package through the window by simply putting a check mark in front of the package name.

{% include figure image_path="/assets/images/unit_images/u05/packages03.png" caption="activating packages" alt="RStudio Packages list with the checkbox beside fansi selected, illustrating how to attach an installed package." %}

# Multiple packages

Install only packages needed for a task, then attach them in each session that uses their short function names. The screenshots above use `ggplot2` as an interface example; specialist packages such as `dismo`, `ggmap` and `randomForest` are not requirements for this Base R course. There is no need to install a catalogue before starting.

For an actual course use, follow the optional `reshape2` example below. It supports the wide/long reshaping task in Unit 08.

<div class="course-info">
  <p><strong>Hint:</strong> Mind the order: first install - then activate through library.</p>
</div>

# Working with a package

Make sure you read the documentation of the package. This gives a brief overview of the functions and some comments about the features of the methods. Note that if you click on a package the package window will move to the Help window. There you can find a description of the method and which arguments are necessary to run the function.

## One package workflow for this course

Most core examples use functions supplied with R. If you plan to do [Unit 08 reshaping]({{ '/unit08/unit08-07-aggregate.html' | relative_url }}), install `reshape2` once if it is not installed yet:

```r
# Run once if needed; this downloads and installs the package.
install.packages("reshape2")
```

In a session where it is already installed, try a small call without attaching the package. The `::` notation selects its exported function explicitly:

```r
wide_example <- data.frame(site = c("A", "B"), spring = c(10, 7),
                            autumn = c(12, 9))
long_example <- reshape2::melt(wide_example, id.vars = "site",
                               variable.name = "season", value.name = "height_cm")
nrow(long_example)
is.data.frame(long_example)
packageVersion("reshape2")
```

The first checks return 4 and `TRUE`; the version depends on the installation. Restart R and rerun this block: `reshape2::melt()` still works when the package is installed, even without `library(reshape2)`. To call it simply as `melt()`, first attach the package with `library(reshape2)` in that session. The reshaping lesson explains the arguments and the meaning of each output row.
