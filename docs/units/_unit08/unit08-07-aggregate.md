---
title: Aggregate and transform data
header:
  image: /assets/images/unit_images/u08/header.png
  image_description: "noodle"
  caption: "Photo by [congerdesign](https://pixabay.com/de/users/congerdesign-509903/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384)"
---

#### Aggregate

Aggregation summarizes several observations within each group, for example with `sum()`, `mean()`, `min()`, or `max()`. The built-in `mtcars` data includes fuel consumption in miles per gallon (`mpg`) and the number of cylinders (`cyl`). The formula `mpg ~ cyl` asks `aggregate()` to calculate the mean `mpg` for each cylinder group:

```r
aggregate(mpg ~ cyl, data = mtcars, FUN = mean)
```

```text
  cyl      mpg
1   4 26.66364
2   6 19.74286
3   8 15.10000
```

#### Reshaping Data: Wide to Long and Vice Versa

In a **wide** table, each measured category has its own column. In a **long** table, one column identifies the category and another holds its value. Here we use `melt()` and `dcast()` from the additional **reshape2** package. If it is not installed yet, run `install.packages("reshape2")` once. The `reshape2::` prefix in the examples calls its functions without attaching the package.

The figure shows a long table being cast to a wide one. Its German labels are **Art** (species) and **Anzahl Individuen** (number of individuals). `Treatment` and `Plot` identify each output row (green); values of `Art` become column headings (orange); the counts fill the cells (blue). The figure displays `0` where a plot has no row for a species. To reproduce those zeros with `dcast()`, specify `fill = 0` *if an absent combination really means zero*. Without that choice, a missing combination is generally shown as `NA`.

{% include figure image_path="/assets/images/unit_images/u08/dcast.png" alt="Long-to-wide reshaping: Treatment and Plot identify rows, species names become columns, and individual counts fill cells; absent combinations are explicitly filled with zero." %}

Here is a smaller, complete example. Each row of `wide` represents one plot, and the two species have separate count columns:

```r
wide <- data.frame(
  Plot = c("A", "B"),
  species_A = c(10, 0),
  species_B = c(0, 30)
)
wide
```

```text
  Plot species_A species_B
1    A        10         0
2    B         0        30
```

`melt()` stacks the count columns into rows. `id.vars` names the columns to retain as identifiers; `measure.vars` names the columns to stack. **`variable.name` names the new column containing the former column names**, while **`value.name` names the new column containing their values**:

```r
long <- reshape2::melt(
  wide,
  id.vars = "Plot",
  measure.vars = c("species_A", "species_B"),
  variable.name = "species",
  value.name = "individuals"
)
long
```

```text
  Plot   species individuals
1    A species_A          10
2    B species_A           0
3    A species_B           0
4    B species_B          30
```

`dcast()` reverses this arrangement. In `Plot ~ species`, the values to the left of `~` identify output rows, and the values to the right become column names. `value.var` selects the column whose values fill the cells:

```r
restored <- reshape2::dcast(long, Plot ~ species, value.var = "individuals")
restored
identical(wide, restored)
```

```text
  Plot species_A species_B
1    A        10         0
2    B         0        30
[1] TRUE
```

This returns the original table because each `Plot`–`species` pair has one count. If several rows would fill the same output cell, `dcast()` aggregates them; without an explicit function, it defaults to counting rows and prints a message. Decide what the counts mean and pass an appropriate `fun.aggregate`, such as `sum`, when needed. See the [reshape2 documentation for `melt()`](https://search.r-project.org/CRAN/refmans/reshape2/html/melt.data.frame.html) and [`dcast()`](https://search.r-project.org/CRAN/refmans/reshape2/html/cast.html) for all arguments.
