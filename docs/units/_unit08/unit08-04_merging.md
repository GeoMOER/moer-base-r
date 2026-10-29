---
title: Merging
header:
  image: /assets/images/unit_images/u08/header.png
  image_description: "noodle"
  caption: "Photo by [congerdesign](https://pixabay.com/de/users/congerdesign-509903/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384)"
---

{% include self-study-start.html %}
`merge()` combines data frames by matching values in *key columns*, regardless of row order. We will use the following two data frames; run the code blocks in order:

```r
df1 <- data.frame(
  X = 1:5,
  Y = c(1.4, 2.5, 3.6, 4.0, 5.5),
  Z = c("A", "B", "C", "D", "E")
)
df2 <- data.frame(
  X = c(100, 200, 300, 400, 500),
  Y = c(14, 25, 36, 40, 55),
  Z = c("A", "C", "E", "D", "B")
)
```

Without a `by` argument, `merge()` uses **every column name shared by both data frames** as a key. Here, those names are `X`, `Y`, and `Z`. Although the `Z` values match, no row has matching values in *all three* columns, so this call returns zero rows:

```r
merge(df1, df2)
```

To match on the identifiers in `Z`, specify that column explicitly:

```r
dfc <- merge(df1, df2, by = "Z")
dfc
```

```text
  Z X.x Y.x X.y Y.y
1 A   1 1.4 100  14
2 B   2 2.5 500  55
3 C   3 3.6 200  25
4 D   4 4.0 400  40
5 E   5 5.5 300  36
```

Both inputs also have columns named `X` and `Y`. In the result, `.x` marks a column from the first input (`df1`), and `.y` marks one from the second (`df2`). These suffixes refer to the *inputs*, not to the columns named `X` and `Y`.

If the key columns have different names, use `by.x` for the first input and `by.y` for the second. Here we rename a **copy** of `df2`, so `df2` remains available for the earlier example:

```r
df2_renamed <- df2
names(df2_renamed) <- c("H", "I", "J")
dfc <- merge(df1, df2_renamed, by.x = "Z", by.y = "J")
dfc
```

```text
  Z X   Y   H  I
1 A 1 1.4 100 14
2 B 2 2.5 500 55
3 C 3 3.6 200 25
4 D 4 4.0 400 40
5 E 5 5.5 300 36
```

The key from the first input (`Z`) appears once in the result. The remaining names differ across the inputs, so R does not need `.x` or `.y` suffixes.

If the inputs have **no column names in common**, the default key is empty. `merge()` then produces a *Cartesian product*: every row of the first input is paired with every row of the second. For example, these two-row tables produce four rows:

```r
left <- data.frame(site = c("A", "B"), height = c(10, 20))
right <- data.frame(habitat = c("forest", "grassland"))
merge(left, right)
```

The following illustration also shows all row combinations when there is no shared column name:

{% include figure image_path="/assets/images/unit_images/u08/Merge_LOTR2.svg" alt="Without a common key or an explicit by argument, each of five character rows is paired with all four weapon rows, producing 20 combinations." %}

Check whether your intended key is unique in each input. When a key value occurs more than once on **both** sides, `merge()` returns every matching pair. Here, site `A` has two visits and two samples, producing four rows for `A` and one for `B`:

```r
visits <- data.frame(site = c("A", "A", "B"), visit = c(1, 2, 1))
samples <- data.frame(site = c("A", "A", "B"), sample = c("soil", "water", "soil"))
anyDuplicated(visits$site) > 0
anyDuplicated(samples$site) > 0
merge(visits, samples, by = "site")
```

Both checks return `TRUE`, and the merged table has five rows. If you expected one row per site, determine which observations belong together or choose a more specific key before merging.

When you merge on a key, `merge()` keeps only rows whose key values match in both inputs by default. Use `all = TRUE` to retain unmatched rows from *both* inputs, `all.x = TRUE` for all rows from the first input, or `all.y = TRUE` for all rows from the second. Unmatched columns contain `NA`; Unit 04 explains how to find and handle missing values. The illustration below shows matching by the shared `name` column and what happens to unmatched rows when they are retained:

{% include figure image_path="/assets/images/unit_images/u08/Merge_LOTR1.svg" alt="Joining characters and weapons by name matches Frodo, Aragorn, Legolas and Gimli. A full join retains Gandalf with NA for his weapon; an inner join drops him." %}

See the [R documentation for `merge()`](https://stat.ethz.ch/R-manual/R-devel/library/base/html/merge.html) for the complete argument list and matching rules.


## Test what you've learned so far!

<iframe title="Interactive quiz: merging data frames" src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit08-merging.html" width="1090" height="450" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>

<!--
## Further reading

add some day
-->
