---
title: "Summary"
unit_summary: true
published: TRUE
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u06/header.png
  image_description: "computer"
  caption: "Photo by [Free-Photos](https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=336373) [Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=336373)"
---

You can now inspect a text file, import it with explicit settings, validate its contents, and choose an appropriate export format.

<!--more-->

## What you learned

1. **Inspect before importing.** Identify the source, reporting period, units, metadata lines, header, delimiter, decimal mark, encoding, and missing-value symbols. A `.csv` extension alone does not specify these settings.
2. **Make the import reproducible.** Keep the raw download and use code that records the settings. `read.table()` and its CSV variants read delimited text; an Excel workbook requires a suitable reader or a documented export to text first.
3. **Validate the result.** Use `head()`, `str()`, and `dim()`. Check column names and types, row counts, missing values, plausible ranges, and the meaning of identifiers.
4. **Clean with a reason.** Preserve identifiers as text when leading zeros matter. Distinguish missing values from zero and identify regional levels and overlapping categories before calculating totals.
5. **Export and check again.** Reimport an exported file to confirm that values and important identifiers survived.

## A short recap in R

Use the [quakes.csv download]({{ '/assets/data/quakes.csv' | relative_url }}) from the import lesson, saved as `Data/quakes.csv` inside your RStudio project. Start from the project root. This particular teaching CSV has four metadata lines, a header, semicolon separators, and decimal commas.

```r
quakes_data <- read.table("Data/quakes.csv",
                          skip = 4, header = TRUE, sep = ";", dec = ",")
dim(quakes_data)
head(quakes_data)
str(quakes_data)
```

The result should have 1,000 rows and five numeric columns: latitude (`lat`), longitude (`long`), depth in kilometers (`depth`), magnitude (`mag`), and number of reporting stations (`stations`). These are checks of this file, not defaults for another dataset.

## Settings and formats to remember

| Setting or format | Why it matters |
|---|---|
| `header`, `skip`, `sep`, `dec` | Identify the table and correctly separate names and values. |
| `fileEncoding`, `na.strings` | Decode text correctly and recognize documented missing-value markers. |
| `colClasses` | Specify column types, for example character for region identifiers. |
| CSV with `write.table()` or `write.csv()` | Exchanges tabular text; choose separators/decimal marks and usually `row.names = FALSE`. R-specific classes are not automatically preserved. |
| RDS with `saveRDS()` and `readRDS()` | Saves and restores one R object, including its structure and classes. |

The [Destatis example]({{ '/unit06/unit06-03b_destatis.html' | relative_url }}) demonstrates why an official source still needs careful preprocessing: a German statistical export includes metadata, coded names, decimal commas, blanks, and several geographic levels. The dictionary and source notes are part of understanding the data, not optional decoration. Do not add Germany to its own states or sum parent categories together with their subcategories.

For batch processing, first test the complete import and validation on one file. Then identify files explicitly with `list.files()` and build paths with `file.path()`. The following unit explains the loops and functions needed to repeat those steps reliably.

## Check your understanding

1. A CSV imports as one column. Which setting would you inspect first, and how would you check the raw file?
2. Why might a region code such as `"01"` require character storage, while an area in hectares requires numeric storage?
3. Why can an import finish without errors and still give an unsuitable dataset for analysis?

Revisit [import and export]({{ '/unit06/unit06-03_data_import.html' | relative_url }}) and [batch processing]({{ '/unit06/unit06-04_batch_processing.html' | relative_url }}) if needed.

## Test what you've learned so far!

<iframe title="Interactive quiz: file paths and importing data" src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit06-pathanddata.html" width="1090" height="450" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
