---
title: "Batch processing"
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u06/header.png
  image_description: "computer"
  caption: "Photo by [Free-Photos](https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=336373) [Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=336373)"
---

<!--more-->

Below is an example for batch processing of multiple files in a for-loop.
Each file in the "input" directory is sequentially processed (in this example getting the file size)
and the result is written into a corresponding file with the same file name in the "output" directory.

Note that the management of file names and file paths is crucial for batch processing.
So know the path to your working directory, the paths to your input and output folders, the paths to your files, the names of your files and their extention.

<!-- some nice graphic showing root, path, working directory, filename, and file extension -->



### Setting up your working environment

```r
# set working directory with input and output folders
path_dir <- "~/data/test"
setwd(path_dir)

# get file names and path names
file_names <- list.files(file.path(path_dir, "input")) # only file names
file_paths <- list.files(file.path(path_dir, "input"), full.names = TRUE) # complete paths to files. Necessary to open files.
```

### Batch process your files


```r
# loop over all files. Note that files are identified by their file paths.
for (file_path in file_paths){
  # Some calculation for each input file
  size <- file.info(file_path)$size # Get file size for each file referred to in file_paths
  # Use the results and write out. One output file for one input file
  write(size, file = file.path(path_dir, "output", paste0(basename(file_path), ".out")))
  # Show status of each iteration
  cat("Processing:", file_path, "\t", "result of operation: ", size, "\n")
}
```

This is all it takes for also performing more complex operations using multiple input files.

###  Functions you should know

```r
setwd()
file.path()
list.files()
basename()
dirname()
substr(basename(file_path), 1, nchar(basename(file_path))-4) # for removing the file extension, i.e. the last four characters.

library("tools")
file_ext(file_path) # get file extension
file_path_sans_ext(file_path) # get file path without extension
file_path_as_absolute(file_path) # get full file path

# The regex way for getting the pure file name without path and extension
sub(pattern = "(.*)\\..*$", replacement = "\\1", basename(file_path))
```
