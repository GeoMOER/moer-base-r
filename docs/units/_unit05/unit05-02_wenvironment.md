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

# What does workspace mean? {#what-does-workspace-mean}
In R, the **workspace** contains the objects you have created in the global environment during your session, such as vectors, data frames, and functions. RStudio shows these objects in the Environment pane.

The **working directory** is a folder on your computer. R uses it as the starting point for relative file paths. The files in a folder and the R objects in your workspace are different things: reading a CSV file creates an object in R, while the CSV file remains on disk.

An **RStudio project** organizes your work in a project folder and stores project settings in an `.Rproj` file. Opening the project sets the working directory to that folder. We return to projects at the end of this page.

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
    <li>the Environment pane for R objects and the History pane for previous commands,</li>
    <li>the Files pane for browsing files on disk, along with panes for plots, packages, and help.</li>
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
* a `Process/` folder and
* an `Output/` folder.

The `Data/` folder contains all data files which include all raw data files as well as all subsets and manipulated versions of these data files.

The `Process/` folder contains sub-directories with analysis files, e.g. R scripts and figures or maps that may be produced by the analyses.

And an `Output/` folder stores the final reports e.g. .docx, .pdf, .Rmd files and presentations e.g. .pptx, or .html files.


## Understanding the directory structures

R resolves a relative file path from the current working directory. Saving or opening an R script in another folder does not by itself change the working directory.

In this example, user Geomoer has a project folder called `Project1` containing a `Data/` folder and a `Process/` folder. The file `data.csv` is in `Data/`, and the R session's working directory is `C:/geomoer/Project1/Process`. Running the following line produces an error:

```r
data <- read.csv("data.csv")
```

```text
Error in file(file, "rt"): cannot open the connection
```

R looks for `data.csv` in `Process/`, where it does not exist.

An R session’s working directory can be verified by typing the following command:
```r
getwd()
```

```text
[1] "C:/geomoer/Project1/Process"
```

The working directory is also the starting point for relative paths when writing files. A path such as `Data/data.csv` is still relative; including a folder name does not make it an absolute path.

There are two options to resolve this problem.

The first is to set the working directory to the folder that contains `data.csv` using the `setwd()` function, then read the file:
```r
setwd("C:/geomoer/Project1/Data")
dat <- read.csv("data.csv")
```
The second is to specify an absolute path in the `read.csv()` call. This works regardless of the current working directory:

```r
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

Hard-coded absolute paths make it difficult to share the project folder with someone else who may place it under a different folder such as `D:/Uni/R/Test/Project1/`.

The user would need to modify paths that refer to `C:/geomoer/Project1/`. A relative path can avoid this. For the following example, first reset the working directory to `Process/` if you changed it above:

```r
setwd("C:/geomoer/Project1/Process")
dat <- read.csv("../Data/data.csv")
```
The two dots **..** tell R to move up the directory hierarchy relative to the current working directory. So in our working example, `../` tells R to move out of the `Process/` folder and up into the `Project1/` folder. The relative path `../Data/data.csv` tells R to move out of the `Process/` directory and over into the `Data/` directory before attempting to read the contents of the `data.csv` data file.

After moving the project, the same relative path works as long as `Data/` and `Process/` keep the same arrangement and the working directory is again `Process/`. You still need to select that working directory at its new location. An RStudio project can help establish a consistent starting directory, as shown below.

**Absolute and relative paths**
An absolute (or full) path points to the same location in a file system, regardless of the current working directory. To do that, it must include the root directory. For example: `C:/geomoer/Project1/Data/data.csv`

By contrast, a relative path starts from the current working directory. From `C:/geomoer/Project1/Process`, use `../Data/data.csv`. From `C:/geomoer/Project1`, use `Data/data.csv`.



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

## RStudio projects {#rprojects}

When you open an `.Rproj` file in RStudio, the working directory is set to the folder containing that file. For example, if `Project1.Rproj` is in `C:/geomoer/Project1/`, use a path relative to this project folder:

```r
dat <- read.csv("Data/data.csv")
```

This also works after moving the whole project folder and opening the `.Rproj` file at its new location. Keep the working directory at the project folder while running these examples. If you change it with `setwd()`, relative paths are resolved from the new working directory. Use `getwd()` to check your current location.

The `.Rproj` file stores project settings; your scripts and data remain separate files in the project folder. See the [RStudio Projects documentation](https://docs.posit.co/ide/user/ide/guide/code/projects.html) for more information.

Now move to the packages...


<!--
## Further reading

add some day
-->
