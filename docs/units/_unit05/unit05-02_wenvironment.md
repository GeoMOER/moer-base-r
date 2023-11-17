---
title: Work Environment
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u05/header.png
  image_description: "work environment"
  caption: "Photo by [Lukas Goumbik](https://pixabay.com/de/users/Goumbik-3752482/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2055522) from [Pixabay](https://pixabay.com)"
---
<!--more-->

> “Data is the new oil.” — Clive Humby

---

# What does workspace mean?**
> “A workspace is (often) a file or directory that allows a user to gather various source code files and resources and work with them as a cohesive unit.[1] Often these files and resources represent the complete state of an integrated development environment (IDE) at a given time, a snapshot. Workspaces are very helpful in cases of complex projects when maintenance can be challenging.” — [Wikipedia](https://en.wikipedia.org/wiki/Workspace)

{% include figure image_path="/assets/images/unit_images/u05/gui_rstudio_exp.png" caption="Work Environment in RStudio from Unit 1" %}


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
  <p><strong>Little reminder from Unit 1:</strong>
  This is the Integrated Development Environment (IDE) of RStudio. It contains
  <br>
<ol>
    <li>the script aka text editor,</li>
    <li>the console for executing code,</li>
    <li>the environment aka the workspace and history management,</li>
    <li>the graphical output but also browsing the workspace, managing packages and information about the help functions.</li>
  </ol>
  </p>
</div>
</body>
</html>

Now let's have a closer look at the environment after you have gotten to know the script and the console.

# Project directory structure

If you have a project with many data files, analysis scripts or other it is highly recommended that you create a directory structure under your main project folder to store and organize all these files. For example, you might have a project folder under `C:/geomoer/Project1`, whose directory structure might look like this

{% include figure image_path="/assets/images/unit_images/u05/structure.png" caption="Project directory structure" %}

The key elements of a project folder include:
* a `Data/` folder
* an `Process/` folder and
* an `Output/` folder.

The `Data/` folder contains all data files which include all raw data files as well as all subsets and manipulated versions of these data files.

The `Process/` folder contains sub-directories with analysis files, e.g. R scripts and figures or maps that may be produced by the analyses.

And an `Output/` folder stores the final reports e.g. .docx, .pdf, .Rmd files and presentations e.g. .pptx, or .html files.


## Understanding the directory structures

You need to explicitly instruct R on how to access a file from the R session’s working directory. Because a data file may reside in a different directory than which the R script is calling it.

In an example, user Geomoer has a project folder called Project1 in which reside a `./Data` folder and an `./Process` folder. He opens the R script which contains the following line of code and runs it.

```
data <- read.csv("data.csv")
Error in file(file, "rt"): cannot open the connection
```

But R returns an error message, which states that the file data.csv cannot be found. This is because the session’s working directory is probably set to a directory other than the `C:/geomoer/Project1/Data` directory which contains the data file.

An R session’s working directory can be verified by typing the following command:
```
getwd()
[1] "C:/geomoer/Project1/Process"
```

The working directory is used to instruct R where to look for a file (or where to create one) if the directory path is not explicitly defined. So in the example above, user Geomoer is asking R to open the file data.csv without explicitly telling R in which directory to look so R is defaulting to the current working directory which is `C:/geomoer/Project1/Process` which does not contain the csv file.

There are two options to resolve this problem.

The first is to set the working directory to the folder that contains the data.csv file using the `setwd()` function.
```
setwd("C:/geomoer/Project1/Data")
```
The second is to modify the read.csv call by specifying the path to the data.csv file.

```
dat <- read.csv("C:/geomoer/Project1/Data/data.csv")
```
<html>
<body>
<div class="info">
  <p><strong>Hint:</strong> Pay attention to the quotation marks.</p>
</div>
</body>
</html>


### Relative and absolute paths

However, this approach makes it difficult to share the project folder with someone else who may choose to place it under a different folder such as `D:/Uni/R/Test/Project1/`.

In such a scenario, the user would need to modify every R script that references the directory `C:/geomoer/Project1/`. A better solution is to specify the location of the data folder __relative__ to the location of the Analysis folder such as,

```
dat <- read.csv("../Data/data.csv")
```
The two dots **..** tells R to move up the directory hierarchy relative to the current working directory. So in our working example, `../` tells R to move out of the `Process/` folder and up into the `Project1/` folder. The relative path `../Data/data.csv` tells R to move out of the `Process/` directory and over into the `Data/` directory before attempting to read the contents of the `data.csv` data file.

Using relative paths makes your project folder independent of the full directory structure in which it resides thus facilitating the reproducibility of your work on a different computer or root directory environment.

**Absolute and relative paths**
An absolute (or full) path points to the same location in a file system, regardless of the current working directory. To do that, it must include the root directory. For example: `C:/geomoer/Project1/Data/data.csv`

By contrast, a relative path starts from some given working directory `(C:/geomoer/Project1/)`, avoiding the need to provide the __full__ absolute path. For example: `../Data/data.csv`



<html>
<body>
<div class="info">
  <p><strong>Important Note to Windows Users:</strong><br>
  R gets confused if you use a path in your code like:<br><br>

  c:\mydocuments\myfile.txt<br><br>

  This is because R sees "\" as an escape character. Instead, use:<br><br>

  c:\\my documents\\myfile.txt<br><br>

  or<br><br>

  c:/mydocuments/myfile.txt<br><br>

  Either will work. We use the second convention throughout this platform.
  </p>
</div>
</body>
</html>

## RProjects

Another option is setting the Working Directory with R projects: When you open an R project (typically a file with the .Rproj extension), RStudio automatically sets the working directory to the directory where the R project file is located. This means that all relative paths in your scripts are based on this project directory, making it easier to reference files within the project structure.

Now move to the packages...


<!--
## Further reading

add some day
-->
