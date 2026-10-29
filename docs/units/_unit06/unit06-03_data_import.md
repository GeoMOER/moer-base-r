---
title: Importing Data
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u06/header.png
  image_description: "computer"
  caption: "Photo by [Free-Photos](https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=336373) [Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=336373)"
---

<!--more-->

{% include self-study-start.html %}


## Importing data via buttons

The data import features can be accessed from the environment pane or from the tools menu. The importers are grouped into 3 categories: Text data, Excel data and statistical data. To access this feature, use the "Import Dataset" dropdown from the "Environment" pane:

{% include figure image_path="/assets/images/unit_images/u06/602_data-import-via-envi.png" caption="Data import via environment. ©[Javier Luraschi](https://support.rstudio.com/hc/en-us/articles/218611977-Importing-Data-with-RStudio)" alt="RStudio Environment pane: the Import Dataset menu offers text, Excel, SPSS, SAS and Stata importers." %}


Or through the "File" menu, followed by the "Import Dataset" submenu:
{% include figure image_path="/assets/images/unit_images/u06/602_data-import-via-file.png" caption="Data import via File menu. ©[Javier Luraschi](https://support.rstudio.com/hc/en-us/articles/218611977-Importing-Data-with-RStudio)" alt="RStudio File menu with Import Dataset expanded to show the available file-format importers." %}


The `From Text (readr)` option uses the additional `readr` package; follow RStudio's installation prompt if you choose it. This is an optional import route. The code workflow below uses functions supplied with R, so it does not require `readr`.

The readr text importer supports CSV and other character-delimited files, with options to:

* Import from the file system or a URL
* Change column data types
* Skip or include-only columns
* Rename the data set
* Skip the first n rows
* Use the header row for column names
* Trim spaces in names
* Change the column delimiter
* Encoding selection
* Select quote, escape, comment and NA identifiers


{% include figure image_path="/assets/images/unit_images/u06/602_data-import-rstudio-overview.gif" caption="Data import via environment. ©[Javier Luraschi](https://support.rstudio.com/hc/en-us/articles/218611977-Importing-Data-with-RStudio)" alt="Animation of importing a text dataset through RStudio, previewing its columns and importing it into the Environment pane." %}


## Importing data via code
Reading or writing tabular data is a common task in data analysis. Use `read.table()` or `read.csv()` to import a text file into a data frame.

The following code blocks are templates. Replace `"path/to/your/file.csv"` with the path to your own file before running them. `read.csv()` assumes comma-separated columns and a decimal point; `read.csv2()` assumes semicolon-separated columns and a decimal comma.

```r
df <- read.csv("path/to/your/file.csv")
```

With `read.table()`, you can specify the format explicitly. This template reads whitespace-separated values without a header. Adjust `header`, `sep`, `dec`, and `skip` to match your file:

```r
df <- read.table("path/to/your/file.csv", header = FALSE, sep = "",
                 dec = ".", skip = 0)
```

## Reading data from csv files

For the following example, use the course's [quakes.csv]({{ '/assets/data/quakes.csv' | relative_url }}). This replacement teaching dataset is a CSV export of R's built-in `quakes` data: 1,000 seismic events near Fiji, with five columns. The data come from the Harvard PRIM-H project, which obtained them from Dr. John Woodhouse at Harvard University. See the [R dataset documentation](https://stat.ethz.ch/R-manual/R-devel/library/datasets/html/quakes.html) and the [CSV source and export notes]({{ '/assets/data/quakes-source.txt' | relative_url }}).

Create `Data/` and `Output/` folders inside your RStudio project folder. Download `quakes.csv` and save it as `Data/quakes.csv`. Open your `.Rproj` file so that the working directory is the project folder; check it with `getwd()`.

The CSV export keeps all original data values and adds four metadata lines before the column header. It uses semicolons between columns and decimal commas. Import it with `read.table()`:

```r
df <- read.table("Data/quakes.csv",
                 skip = 4, header = TRUE, sep = ";", dec = ",")
```

As you can see, the `read.table` function gets several arguments (which is common for many functions). The first one gives the filename including the path to the file.
* `skip = 4` tells the function to skip the four metadata lines added to this teaching CSV
* `header = TRUE` tells the function, that the csv file has a header line which is used by `read.table` to name the columns of the returning data frame
* `sep = ";"` defines the separator of the individual columns in the data frame
* `dec = ","` defines the decimal separator used in the dataset

A note on the sequence of the arguments: the sequence of the arguments does
not matter as long as you name them explicitly. If you do not use the argument
identifier as it is the case for the first argument, the filename, in the example
then the sequence matters. To get information on the default sequence and of
course the general application of each R function, type `?<function name>`
(e.g. `?read.table`) in an R console.

After running the import, `df` contains a data frame with 1,000 rows and five columns: latitude (`lat`), longitude (`long`), depth in kilometers (`depth`), reported magnitude (`mag`), and the number of reporting stations (`stations`). Inspect the column types with `str()`:

```r
str(df)
```

```text
'data.frame': 1000 obs. of  5 variables:
 $ lat     : num  -20.4 -20.6 -26 -18 -20.4 ...
 $ long    : num  182 181 184 182 182 ...
 $ depth   : int  562 650 42 626 649 195 82 194 211 622 ...
 $ mag     : num  4.8 4.2 5.4 4.1 4 4 4.8 4.4 4.7 4.3 ...
 $ stations: int  41 15 43 19 11 12 43 15 35 19 ...
```

Use `head(df, 2)` to display the first two rows of the imported data frame. Without an explicit row count, `head(df)` shows the first six rows, or all rows if there are fewer than six. This is a useful first inspection; it does not by itself confirm that every column was imported correctly.

```r
head(df, 2)
```

```text
     lat   long depth mag stations
1 -20.42 181.62   562 4.8       41
2 -20.62 181.03   650 4.2       15
```

## Writing data to csv files
Use `write.table()` to export `df` to the `Output/` folder you created above. This example uses comma-separated columns and a decimal point. `row.names = FALSE` omits R's row names from the file:

```r
write.table(df, file = "Output/quakes-export.csv", sep = ",", dec = ".",
            row.names = FALSE)
```
The exported file starts directly with the column header; it does not include the four metadata lines from the input file. Read it back with `read.csv()` and compare the imported and exported data frames:

```r
df_csv <- read.csv("Output/quakes-export.csv")
identical(df, df_csv)
```

```text
[1] TRUE
```

For this numeric dataset, the values, column types, and names match after export and re-import. CSV does not preserve every kind of R object or attribute; use RDS when you want to store an R object for use in R.

For more information, see the [R manual: data import](https://cran.r-project.org/doc/manuals/r-release/R-data.html#Spreadsheet_002dlike-data), the [R manual: text export](https://cran.r-project.org/doc/manuals/r-release/R-data.html#Export-to-text-files), or the help pages for `read.table()` and `write.table()`.


## Alternative data I/O using RDS
CSV is useful for exchanging tabular data with other programs. To save a single R object for later use in R, use `saveRDS()` and restore it with `readRDS()`. RDS preserves the object's R structure and attributes, such as column types and factor levels. The file extension `.rds` is commonly used for this format.

The following code writes `quakes.rds` in `Output/` and reads the object back into `df2`:

```r
saveRDS(df, file = "Output/quakes.rds")

# Restore the saved object under a different name
df2 <- readRDS("Output/quakes.rds")
identical(df, df2)
```

```text
[1] TRUE
```

See `?saveRDS` and `?readRDS` for more details.

## Example: Importing Destatis data {#cleaning-official-land-use-data}

Continue with [Example: Importing Destatis data]({{ '/unit06/unit06-03b_destatis.html' | relative_url }}), a separate worked example using the official 2024 land-use report.

<span id="land-use-import-and-inspect"></span>
The [import and inspection steps]({{ '/unit06/unit06-03b_destatis.html' | relative_url }}#land-use-import-and-inspect) show how to preserve identifiers and inspect empty cells in the current source table.

<span id="land-use-cleaning-decisions"></span>
The [column selection and conversion steps]({{ '/unit06/unit06-03b_destatis.html' | relative_url }}#land-use-cleaning-decisions) include detailed English explanations of the German names, codes, units, and geographic levels.


## Test what you've learned so far!

<iframe title="Interactive quiz: file paths and importing data" src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit06-pathanddata.html" width="1090" height="450" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>





<!--
## Further reading

add some day
-->
