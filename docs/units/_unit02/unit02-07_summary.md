---
title: "Summary"
unit_summary: true
toc: TRUE
header:
  image: /assets/images/unit_images/u02/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"

---

Check that you can describe what a variable means, identify its representation in R, and check a conversion before using the result.

<!--more-->

{% include self-study-start.html %}

## Summary

Three questions describe different aspects of your data. **Measurement level** describes the meaning of values. **Discrete or continuous** describes the possible values of a quantitative variable. **R's data type** describes how values are stored. One does not automatically determine the others.

| Measurement level | Meaning | Example |
|---|---|---|
| Nominal | Categories without an inherent order. | Land cover: forest, grassland, water. |
| Ordinal | Ordered categories whose spacing is not defined. | Erosion severity: low, medium, high. |
| Interval | Equal differences are meaningful; zero is a reference point. | Temperature in degrees Celsius: a 10-degree difference is meaningful, but 20 °C is not twice as hot as 10 °C. |
| Ratio | Equal differences and ratios are meaningful; zero indicates absence of the measured quantity. | Length in meters: 20 m is twice 10 m. |

{% include figure image_path="/assets/images/unit_images/u02/types_data.svg" alt="Diagram naming nominal, ordinal, interval and ratio measurement levels. It also connects continuous data to ratio and interval, and discrete data to ordinal and nominal; those pairings are an oversimplification." caption="The four measurement levels. The diagram's discrete/continuous branches are an oversimplification: measurement level and whether a quantitative variable is discrete or continuous describe separate properties. Use the table above for the distinction." %}

A count of trees is **discrete**; measured tree height is treated as **continuous**, even if recorded to the nearest centimeter. Numeric category codes, such as `1 = forest`, remain categories. The choice of a calculation also depends on the question, sampling, and distribution of the data.

## Representation in R

| Type | Example | Remember |
|---|---|---|
| Integer | `3L` | Whole-number storage; the `L` requests an integer literal. |
| Double | `3` or `3.5` | Stores numeric values, including whole numbers. R code uses a decimal point. |
| Character | `"003"` or `"forest"` | Text; useful for identifiers with leading zeros. |
| Logical | `TRUE`, `FALSE` | Truth values, also used for selecting data. |

Use checks such as `is.integer()`, `is.numeric()`, or `is.character()` to inspect a type. Both integer and double vectors count as numeric. Use conversion functions such as `as.numeric()` only when the intended meaning supports the conversion.

## A short recap in R

```r
recorded <- c("12.5", "18.0", NA)
height <- as.numeric(recorded)
is.numeric(height)
is.na(height)
mean(height, na.rm = TRUE)
```

The type check returns `TRUE`. The missing-value check returns `FALSE FALSE TRUE`, and the mean of the two available heights is `15.25`. Removing missing values from a calculation changes which observations contribute; it does not explain why they are missing.

`NA` marks a missing value; use `is.na(x)`, rather than `x == NA`, to find it. `NaN` marks an undefined numeric result, such as `0 / 0`, and is also detected by `is.na()`. `Inf` represents infinity. `NULL` represents the absence of an object or component and is not a placeholder for one missing observation.

## Try it yourself {#practice}

Predict the result of converting the recorded heights below to numbers. Then convert only the heights; keep the station codes unchanged. How can you distinguish the introduced missing value from a recorded zero?

```r
station <- c("003", "004", "005")
recorded_height <- c("12.5", "unknown", "0")
```

<details markdown="1">
<summary>Hint</summary>

Use `as.numeric()` on the height text, then inspect `is.na()` and the original strings. Leave the identifier vector as character data.

</details>
<details markdown="1">
<summary>Compare a possible solution</summary>

```r
height_cm <- as.numeric(recorded_height)
height_cm
is.na(height_cm)
station
```

R warns about the unrecognised text. Heights are `12.5, NA, 0`, the missing-value check is `FALSE, TRUE, FALSE`, and the station labels still start with zeros. The zero is an observed value; the new `NA` records an unsuccessful conversion, whose meaning needs the source text.

</details>

**Ready to continue:** you can separate a variable's meaning from its storage type and explain what changed during a conversion.

## Check your understanding

Try these questions before opening the suggested answers.

1. Classify land cover, erosion severity, temperature in °C, and tree count by measurement level. Which quantitative example is discrete?
2. Why should the station identifier `"003"` usually remain character data?
3. What could happen if a text column containing `"unknown"` is converted to numeric? How would you check the result?

<details markdown="1">
<summary>Suggested answers</summary>

1. Land cover is nominal; erosion severity is ordinal; Celsius temperature is interval; tree count is ratio and discrete. Recording a category as a number does not change its meaning.
2. A station code is an identifier. Numeric conversion changes `"003"` to `3`, losing its leading zeros; arithmetic on the code is not meaningful.
3. `as.numeric()` turns unrecognised text such as `"unknown"` into `NA` and warns. Keep the original text, inspect `is.na()` and compare newly missing positions with the source. An original zero is different from missing information.

</details>


Revisit [data types]({{ '/unit02/unit02-05_types_of_data.html' | relative_url }}) and [conversion]({{ '/unit02/unit02-06_convert.html' | relative_url }}) for the checks and special values.
