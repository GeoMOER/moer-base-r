---
title: "Summary"
unit_summary: true
toc: TRUE
toc_float: TRUE
published: TRUE
header:
  image: /assets/images/unit_images/u03/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---

You can now choose an R object for a task, inspect its structure, and recognize when combining or converting values changes their type.

<!--more-->

## What you learned

A data type describes values; an object structure describes how they are organized. Measurement level describes their meaning in your study. For example, a numeric station code can still represent a nominal category.

| Object | Structure | Typical use or caution |
|---|---|---|
| Atomic vector | A sequence of values of one type. | `c(1, 2, 3)` stores numeric values; combining numbers and text produces character values. |
| Matrix | Two dimensions: rows and columns. | A matrix made from an atomic vector has one type throughout. By default, `matrix()` fills columns first. |
| Array | Dimensions specified by `dim`, potentially more than two. | An array made from an atomic vector also has one type throughout. |
| Data frame | A table with equal-length columns. | Ordinary atomic columns each have one type, but different columns may have different types. |
| List | A collection of components. | Components can have different types, structures, and lengths, including other lists. |
| Factor | Categorical values with defined levels. | Internally uses integer codes and level labels; ordered factors additionally record an order. |

`str()` gives a compact overview. Use `class()` for an object's class, `typeof()` for its internal type, `length()` for its length, and `dim()`, `nrow()`, or `ncol()` for dimensions where applicable. For a data frame, `length()` counts columns, not rows.

## A short recap in R

```r
observations <- data.frame(
  site = c("A", "B", "C", "D"),
  height_cm = c(12.5, 18, 15, 9),
  habitat = factor(c("forest", "grassland", "forest", "grassland")),
  stringsAsFactors = FALSE
)
str(observations)
dim(observations)
length(observations)
```

The data frame has four rows and three columns: `dim(observations)` returns `4 3`, while `length(observations)` returns `3`. `site` is character, `height_cm` is numeric, and `habitat` is a factor with two levels.

## Before converting

Conversions can change meaning or lose information. Combining numbers and text in an atomic vector converts the numbers to text. Converting a mixed data frame to a matrix can do the same. `as.numeric()` applied directly to a factor returns its internal codes, not numeric values represented by its labels. Inspect the object and the result before continuing.

## Check your understanding

1. Which object would hold numeric measurements, site names, and habitat categories in one table?
2. Which object would hold that table together with a separate description and a vector of a different length?
3. Predict the type of `c(1, "two")`. Why is a factor's integer code different from its category label?

Revisit [object types]({{ '/unit03/unit03-03_types_of_objects.html' | relative_url }}) and [converting objects]({{ '/unit03/unit03-04_convert.html' | relative_url }}) if needed.

## Test

<iframe src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit03-object-types-vers2.html" width="1090" height="400" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
