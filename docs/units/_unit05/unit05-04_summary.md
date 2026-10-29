---
title: "Summary"
unit_summary: true
published: TRUE
toc: TRUE
toc_float: TRUE
collapsed: TRUE
smooth_scroll: TRUE
header:
  image: /assets/images/unit_images/u05/header.png
  image_description: "work environment"
  caption: "Photo by [Lukas Goumbik](https://pixabay.com/de/users/Goumbik-3752482/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2055522) from [Pixabay](https://pixabay.com)"
---

Check that you can organize an R project, distinguish objects in memory from files on disk, and use packages deliberately.

<!--more-->

{% include self-study-start.html %}

## What you learned

| Concept | Meaning | Practical consequence |
|---|---|---|
| Workspace | Objects held in the running R session. | An object in the Environment pane is not automatically a saved data file. |
| Working directory | The folder from which R resolves relative file paths. | Check it with `getwd()` before reading or writing files. |
| RStudio project | A project folder associated with an `.Rproj` file. | Opening it starts work in that folder; a later `setwd()` can change the working directory. |
| Relative path | A location described from the working directory. | `Data/observations.csv` means a file inside its `Data` subfolder. |
| Absolute path | A location beginning at the filesystem root or drive. | A path from your own computer may not work for another person. |
| Package | A collection of functions, documentation, and sometimes data. | Installation and loading are different steps. |

Keep raw data, scripts, and generated output organized in separate folders, for example `Data/`, `Process/`, and `Output/`. Keep the raw data unchanged and record processing steps in scripts. When the project root is the working directory, a script saved in `Process/` still reads `Data/file.csv` relative to the project root, not relative to the script file.

## A short recap in R

These commands inspect the session and construct a path; they do not create or import a file.

```r
getwd()
input_file <- file.path("Data", "observations.csv")
input_file
sessionInfo()
```

`file.path()` joins folder and file names using the appropriate separator. `sessionInfo()` records the R version, platform, and attached or loaded packages, which helps explain differences between computers. The output depends on your session.

## Working with packages

Install an additional package with `install.packages("package_name")`, replacing the placeholder with its actual name. Installation puts it into an R library on disk and is usually needed once per R installation or library, with updates when appropriate. Load it with `library(package_name)` in each session that needs its functions. `package_name::function_name()` calls an exported function explicitly without attaching the whole package; the package must still be installed.

Save scripts and required data rather than relying on a restored workspace to supply objects you forgot to create. Run a script in a fresh session to find hidden dependencies on earlier interactive work.

## Try it yourself {#practice}

In an RStudio project, create `Data/`, `Process/` and `Output/` folders if needed. Save a script as `Process/session-check.R` that creates `marker <- 42` and calls `getwd()` and `sessionInfo()`. Close and reopen the `.Rproj`, restart R, and run the saved script. Construct the path to `Data/observations.csv` without reading a file.

<details markdown="1">
<summary>Compare the checks</summary>

```r
marker <- 42
getwd()
input_file <- file.path("Data", "observations.csv")
input_file
sessionInfo()
```

The working directory should be the folder containing the `.Rproj`, not `Process/`. The constructed path is relative to that root; it does not create a CSV. `marker` is an R object, while `Process/session-check.R` is a file. Session output varies by computer. The [package lesson]({{ '/unit05/unit05-03_packages.html' | relative_url }}) has a separate optional install/call/restart check.

</details>

**Ready to continue:** you can reopen the project, recreate an object from its script and explain where a relative path starts.

## Check your understanding

Try these questions before opening the suggested answers.

1. Does deleting an object from the workspace delete its source CSV file? Explain why.
2. If the working directory is the project root, where does `Data/observations.csv` point when your script is in `Process/`?
3. A package is installed, but a function is unavailable by its short name. What could you check or do next?

<details markdown="1">
<summary>Suggested answers</summary>

1. No. Removing an R object changes the running workspace; its source CSV remains on disk. Conversely, closing R without saving an object does not erase your saved script.
2. It points to `Data/observations.csv` inside the project root. The script's `Process/` location does not determine where a relative path starts; `getwd()` does.
3. Check the spelling and package documentation. Attach an installed package with `library()` or call an exported function using `package::function()`. Also check the library/version when installations differ; reinstalling is not the first solution to every missing function.

</details>


Revisit [the work environment]({{ '/unit05/unit05-02_wenvironment.html' | relative_url }}) and [packages]({{ '/unit05/unit05-03_packages.html' | relative_url }}) if needed.
