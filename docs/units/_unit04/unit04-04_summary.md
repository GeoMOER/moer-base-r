---
title: "Summary"
unit_summary: true
published: TRUE
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u04/header.png
  image_description: "index"
  caption: "Photo by [Maksym Kaharlytskyi](https://unsplash.com/@qwitka?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) from [Unsplash](https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---

You can now select and replace parts of an object by position, name, or condition, while checking the structure of the result.

<!--more-->

## What you learned

| Task | Syntax | Remember |
|---|---|---|
| Select vector elements | `x[c(1, 3)]` | R positions start at 1. |
| Exclude vector elements | `x[-2]` | Do not mix positive and negative positions, except zero. |
| Select by a condition | `x[x > 10]` | The condition produces a logical vector. Handle missing values explicitly. |
| Select a matrix or data-frame rectangle | `x[rows, columns]` | The comma separates the two dimensions; a blank selects all entries in that dimension. |
| Keep a one-column table | `df[, "height", drop = FALSE]` | Without `drop = FALSE`, selecting one column this way can return a vector. |
| Select one list component | `x[[1]]` or `x[["name"]]` | `x[1]` instead returns a list containing that component. |
| Select a named component | `df$height` | Convenient for a known column name; use `df[[column_name]]` if the name is stored in a variable. |

For a data frame, `df["height"]` selects a column as a data frame; `df[1, ]` selects a row. For a matrix, a single index such as `m[3]` counts through columns. Always consider the object's structure before interpreting brackets.

`which()` returns positions that meet a condition. `%in%` tests membership, while `match()` finds positions of matches. Use `&`, `|`, and `!` for element-by-element AND, OR, and NOT. Test equality with `==`; `<-` assigns a value.

## A short recap in R

```r
observations <- data.frame(
  site = c("A", "B", "C", "D"),
  height_cm = c(12, NA, 18, 9)
)
keep <- !is.na(observations$height_cm) & observations$height_cm >= 12
selected <- observations[keep, c("site", "height_cm"), drop = FALSE]
selected
```

The result contains sites A and C, with heights 12 and 18 cm. The explicit `!is.na()` check excludes the missing measurement. A comparison with an `NA` alone can leave `NA` entries in a logical index and produce missing rows in the result.

You can also put an indexed expression on the left of `<-` to replace selected values. Check the selection first so that you change the intended entries. `subset()` provides another way to select rows and columns; `sample()` selects a random sample. Use `set.seed()` when an example's random selection needs to be reproducible.

## Check your understanding

1. Explain the difference between `observations[1, ]` and `observations[, 1]`.
2. How would you select only site C using its name rather than its row number?
3. Why do `my_list[1]` and `my_list[[1]]` sometimes give very different results?

Revisit [indexing]({{ '/unit04/unit04-02_index.html' | relative_url }}) and [subsetting]({{ '/unit04/unit04-03_subsetting.html' | relative_url }}) for more examples.

## Test

<iframe src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit04-index-vers2.html" width="1090" height="450" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>

<iframe src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit04-indexdrag.html" width="1090" height="792" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
