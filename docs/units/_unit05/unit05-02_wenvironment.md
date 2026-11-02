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

{% include self-study-start.html %}

> “Data is the new oil.” — Clive Humby

---

# What does workspace mean? {#what-does-workspace-mean}
In R, the **workspace** contains the objects you have created in the global environment during your session, such as vectors, data frames, and functions. RStudio shows these objects in the Environment pane.

The **working directory** is a folder on your computer. R uses it as the starting point for relative file paths. The files in a folder and the R objects in your workspace are different things: reading a CSV file creates an object in R, while the CSV file remains on disk.

An **RStudio project** organizes your work in a project folder and stores project settings in an `.Rproj` file. Opening the project sets the working directory to that folder. Use this as your starting point for the course's file examples.

{% include figure image_path="/assets/images/unit_images/u05/gui_rstudio_exp.png" caption="Work Environment in RStudio from Unit 1" alt="RStudio with four labelled panes: script editor at upper left, console at lower left, environment at upper right, and graphical output at lower right." %}


For a reminder of the panes, revisit the [Unit 01 interface guide]({{ '/unit01/unit01-03_GUI.html' | relative_url }}). Here the new distinction is between objects in memory and files on disk: identify one of each in your own project before continuing.

## Start with an RStudio project {#rprojects}

If you already followed [First Steps]({{ '/unit01/unit01-04_first_steps.html' | relative_url }}#save-and-rerun-your-first-script), open that project's `.Rproj` file. Otherwise, choose **File > New Project > New Directory > New Project**, name the new directory `base-r-practice`, choose a location you can find again and click **Create Project**. If your course already provides a project, open that one instead.

Create a `Data/` folder inside the project folder. <a href="{{ '/assets/data/example.csv' | relative_url }}" download="example.csv">Download example.csv</a> and save it there, keeping its name. This is the same small practice file used in [R Syntax]({{ '/unit01/unit01-04a_r_syntax.html' | relative_url }}), with comma-separated columns and decimal points. Save your `.R` script beside the `.Rproj` file.

```text
base-r-practice/
├── base-r-practice.Rproj
├── first-import.R
└── Data/
    └── example.csv
```

Run these commands from the project folder:

```r
getwd()
file.exists("Data/example.csv")
trees <- read.table(file = "Data/example.csv", header = TRUE, sep = ",")
dim(trees)
```

`getwd()` should show your own project folder. `file.exists()` should return `TRUE`, and `dim(trees)` should return `3 2`: three rows and two columns. If the file check is `FALSE`, reopen the correct `.Rproj` and check the filename and folder, including capitalization and an accidental extra extension. Keep the working directory at the project folder; `Data/` in the path already selects the data folder.

**Check portability:** save your script, close and reopen the project via its `.Rproj`, then run the script from the top. The same relative path should work. Moving or sharing the whole project folder keeps that path usable as long as the internal arrangement stays the same. Create `Output/` inside the project folder when a later lesson asks you to save results.

The remaining sections explain larger folder arrangements and alternative path choices. They use illustrative paths such as `C:/geomoer/Project1/`; adapt them to your computer if you try them. The supplied-file workflow above is the recommended starting route.

# Project directory structure

If you have a project with many data files, analysis scripts or other it is highly recommended that you create a directory structure under your main project folder to store and organize all these files. For example, you might have a project folder under `C:/geomoer/Project1`, whose directory structure might look like this

{% include figure image_path="/assets/images/unit_images/u05/structure.svg" caption="Project directory structure" alt="Project1 directory tree: Data stores input files; Process contains Figures and Scripts; Output stores exported results." %}

The key elements of a project folder include:
* a `Data/` folder
* a `Process/` folder and
* an `Output/` folder.

Keep unchanged downloaded inputs in `Data/`. Save prepared tables and other generated results under different filenames in `Output/`, as in Unit 06, so that running a script does not overwrite its input.

`Process/` is an optional arrangement for larger projects. It can contain scripts, intermediate working files and subfolders for figures or maps while you develop an analysis. In a small practice project, keeping the `.R` script beside the `.Rproj` file, as above, is sufficient.

Use `Output/` for generated exports, plots, reports and presentations, for example CSV, RDS, PNG, PDF or HTML files. An `.Rmd` is an editable source document; keep it with your scripts and place its rendered report in the chosen output location. You do not need all these formats or subfolders for every task. Keep the working directory at the project root and use the same folder capitalization in your paths.


## Understanding the directory structures

The following reference example uses an illustrative file named `data.csv`, rather than the supplied `example.csv`. Its code and computer-specific paths are templates; the deliberately failing import explains why the starting folder matters.

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

Besides opening a project and using a path relative to its root as above, there are two alternatives to resolve this illustrative problem.

The first is to set the working directory to the folder that contains `data.csv` using the `setwd()` function, then read the file:
```r
setwd("C:/geomoer/Project1/Data")
dat <- read.csv("data.csv")
```
The second is to specify an absolute path in the `read.csv()` call. This works regardless of the current working directory:

```r
dat <- read.csv("C:/geomoer/Project1/Data/data.csv")
```
<div class="course-info">
  <p><strong>Hint:</strong> Pay attention to the quotation marks.</p>
</div>


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



<div class="course-info">
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

## Further project details

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
