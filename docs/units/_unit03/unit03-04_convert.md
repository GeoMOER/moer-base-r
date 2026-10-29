---
title: "Converting Objects"
header:
  image: /assets/images/unit_images/u03/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---
<!--more-->

{% include self-study-start.html %}

> “Errors using inadequate data are much less than those using no data at all.” – Charles Babbage

---

*For vector conversions, see Unit 02: [Converting Types of Data]({{ '/unit02/unit02-06_convert.html' | relative_url }}).*

* Use `is.` to test for data type. Returns TRUE or FALSE
* Use `as.` to explicitly convert it.

|   | to vector | to matrix | to dataframe |
|------------|-------------|-------------|-------------|
| <b>from vector</b> | c(x,y) | cbind(x,y) <br>rbind(x,y) | data.frame(x,y) |
| <b>from matrix</b>  | as.vector(mymatrix)  |  | as.data.frame(mymatrix) |
| <b>from dataframe</b>  |  | as.matrix(myframe) | |

## Combining vectors into rows or columns

`rbind()` stacks the vectors as rows; `cbind()` places them side by side as columns. Predict the dimensions before running each call. The more detailed [Unit 08 binding lesson]({{ '/unit08/unit08-03_binding.html' | relative_url }}) later asks whether observations, names and units are compatible.

```r
v1 <- 1:3
v2 <- 4:6
by_rows <- rbind(v1, v2)
by_columns <- cbind(v1, v2)
dim(by_rows)
dim(by_columns)
```

The dimensions are `2 3` and `3 2`. Both remain numeric. A different type can change the result:

## Check what a conversion changes

Before running this example, predict which columns can remain numeric after the conversion.

```r
sites <- data.frame(site = c("A", "B"), height_cm = c(12, 18))
site_matrix <- as.matrix(sites)
str(sites)
typeof(site_matrix)
site_matrix
```

The data frame has a character column and a numeric column. The matrix needs one atomic type, so both columns become character; heights appear as `"12"` and `"18"`. Returning to a data frame with `as.data.frame(site_matrix)` does not automatically recover the numeric type. Keep the original object and inspect the result before calculating.

## Factor codes and labels

A factor stores codes that point into its levels. Numeric-looking labels need special care:

```r
category <- factor(c("20", "10", "20"), levels = c("10", "20"))
as.numeric(category)
as.character(category)
as.numeric(as.character(category))
```

The three results are `2, 1, 2`; `"20", "10", "20"`; and `20, 10, 20`. Only use the final conversion if the labels really represent numeric quantities. For categories or identifiers, preserve the labels instead. This is why the same storage conversion can be appropriate for a measurement and inappropriate for a site code.
