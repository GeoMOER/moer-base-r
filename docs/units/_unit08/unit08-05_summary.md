---
title: "Summary"
unit_summary: true
toc: TRUE
published: TRUE
header:
  image: /assets/images/unit_images/u08/header.png
  image_description: "noodle"
  caption: "Photo by [congerdesign](https://pixabay.com/de/users/congerdesign-509903/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384)"
---

You can now reorder observations, combine tables using an appropriate rule, work with text, and summarize values by group.

<!--more-->

## What you learned

| Task | Tool | Main distinction |
|---|---|---|
| Sort values | `sort(x)` | Returns sorted values. Factor order depends on the levels. |
| Reorder a table | `df[order(df$column), ]` | `order()` supplies positions; reorder whole rows to preserve relationships between columns. |
| Append observations | `rbind()` | Stacks compatible tables; check names, types, and units. |
| Put columns side by side | `cbind()` | Aligns by position, not by a shared identifier; check row correspondence first. |
| Match tables by identifiers | `merge(..., by = "site")` | Matches key values even when row orders differ. |
| Work with text | `nchar()`, `paste()`, `sprintf()`, `grep()`, `sub()`, `strsplit()` | Inspect, construct, find, replace, or split strings. |
| Summarize by group | `aggregate()` | Reduces observations to group summaries. |
| Change table layout | Wide/long reshaping | Changes how measurements are arranged in rows and columns. |

For `merge()`, specify the key explicitly. By default, all common column names are used as keys and only matching combinations are retained. `all.x = TRUE` keeps every row from the first table, adding missing values where there is no match; `all = TRUE` keeps unmatched rows from both. Duplicate keys can create multiple matches and increase the number of rows, so check keys and the result.

## A short recap in R

These illustrative observations arrive in a different site order from the lookup table. The site identifier, not row position, determines the match.

```r
sites <- data.frame(
  site = c("A", "B", "C"),
  habitat = c("forest", "grassland", "forest")
)
measurements <- data.frame(
  site = c("C", "A", "B"),
  height_cm = c(18, 12, 9)
)
combined <- merge(measurements, sites, by = "site")
combined <- combined[order(combined$height_cm), ]
combined
aggregate(height_cm ~ habitat, data = combined, FUN = mean)
```

The sorted table contains sites B, A, and C with heights 9, 12, and 18 cm. The mean height is 15 cm for forest and 9 cm for grassland. Aggregation produces one row per habitat; it does not retain each original observation.

## Text and table layout

Check spelling, capitalization, and whitespace before matching text keys, and document any changes. Regular expressions describe patterns: characters such as `.` or `*` have special meanings. Use literal matching, such as `fixed = TRUE` where supported, when you mean the exact characters. `grep()` returns matching positions by default; `grepl()` returns a logical vector. `sub()` replaces the first match in each string; `gsub()` replaces all matches.

In a **wide** table, repeated measurements can occupy separate columns; in a **long** table, a variable identifies the measurement and another column holds its value. The lesson demonstrates `melt()` and `dcast()` from the additional package **reshape2**. Reshaping and aggregation serve different purposes, although casting may also aggregate when several observations belong to one output cell. Check the identifiers and intended unit of observation before either operation.

## Check your understanding

1. Why would `cbind(measurements, sites)` give incorrect site/habitat combinations in this example?
2. What happens to an unmatched measurement with the default `merge()`, and how could you retain it?
3. How do sorting, aggregation, and wide-to-long reshaping each change a table?

Revisit [merging]({{ '/unit08/unit08-04_merging.html' | relative_url }}), [strings]({{ '/unit08/unit08-06-string.html' | relative_url }}), and [aggregation and reshaping]({{ '/unit08/unit08-07-aggregate.html' | relative_url }}) if needed.
