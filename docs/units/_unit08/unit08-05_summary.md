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

Check that you can reorder observations, combine tables using an appropriate rule, work with text, and summarize values by group.

<!--more-->

{% include self-study-start.html %}

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

## Try it yourself {#practice}

Work from these small tables. Each measurement row is one observation; `lookup` should have one row per site.

```r
lookup <- data.frame(site = c("A", "B"),
                     habitat = c("forest", "grassland"))
samples <- data.frame(site = c(" b ", "A", "C", "A"),
                      height_cm = c(9, 12, 5, 18))
```

1. Standardise the measurement keys: `trimws()` removes surrounding whitespace and `toupper()` makes letters uppercase. Check the resulting keys.
2. Sort complete rows by site, then height; the two A rows should show the secondary sort. Append a new B measurement of 10 cm to a copy using `rbind()`.
3. Join the original four cleaned measurements to `lookup`, retaining unmatched sites. Check the keys and row count; do not use `cbind()` to attach these differently sized tables.
4. Compute mean height by known habitat. Keep the unmatched observation in the joined table; explicitly select known habitats for this summary and explain what is excluded.

<details markdown="1">
<summary>Compare a possible solution</summary>

```r
samples$site <- toupper(trimws(samples$site))
ordered <- samples[order(samples$site, samples$height_cm), ]
with_extra <- rbind(samples, data.frame(site = "B", height_cm = 10))
anyDuplicated(lookup$site)
samples$site[!samples$site %in% lookup$site]
joined <- merge(samples, lookup, by = "site", all.x = TRUE)
nrow(joined)
known <- joined[!is.na(joined$habitat), ]
aggregate(height_cm ~ habitat, data = known, FUN = mean)
```

`ordered` has A/12, A/18, B/9 and C/5; `with_extra` has five rows. The lookup has no duplicate key (`0`), and C is unmatched. The join keeps four observations; C's habitat is `NA`. The known-habitat means are forest 15 cm and grassland 9 cm, using three observations. This grouping excludes C because its habitat is unavailable, not because its height is invalid.

</details>

For the reshaping outcome, use the `reshape2` package introduced in the lesson. Turn the two seasonal columns below into a four-row long table, then restore the wide table. State what one row means in each layout. This extension requires the installed package; it does not require attaching it.

```r
seasonal <- data.frame(site = c("A", "B"), spring = c(10, 7),
                       autumn = c(12, 9))
```

<details markdown="1">
<summary>Compare the reshape check</summary>

```r
seasonal_long <- reshape2::melt(seasonal, id.vars = "site",
                                measure.vars = c("spring", "autumn"),
                                variable.name = "season", value.name = "height_cm")
seasonal_back <- reshape2::dcast(seasonal_long, site ~ season,
                                 value.var = "height_cm")
seasonal_back <- seasonal_back[names(seasonal)]
dim(seasonal_long)
identical(seasonal, seasonal_back)
```

The long table has four rows and three columns: one row per site–season measurement. The wide table has one row per site. Casting can reorder columns, so the comparison restores their original order explicitly; it returns `TRUE`. No aggregation is needed because each site–season key is unique.

</details>

**Ready to continue:** you can choose binding versus matching, inspect text keys, summarize a declared group and explain a change of table layout.

## Check your understanding

Try these questions before opening the suggested answers.

1. Why would `cbind(measurements, sites)` give incorrect site/habitat combinations in this example?
2. What happens to an unmatched measurement with the default `merge()`, and how could you retain it?
3. How do sorting, aggregation, and wide-to-long reshaping each change a table?

<details markdown="1">
<summary>Suggested answers</summary>

1. `cbind()` aligns by row position, but the site orders differ. Some combinations may happen to match, yet others attach the wrong habitat. Join by `site` to preserve the relationship.
2. The default inner join omits an unmatched measurement. Use `all.x = TRUE` to retain every measurement and inspect the resulting missing lookup fields. Duplicate keys need a separate check because they can multiply rows.
3. Sorting changes row order while retaining observations. Aggregation replaces observations with group summaries. Reshaping moves measurements between columns and rows; identifiers and the meaning of a row must remain explicit.

</details>


Revisit [merging]({{ '/unit08/unit08-04_merging.html' | relative_url }}), [strings]({{ '/unit08/unit08-06-string.html' | relative_url }}), and [aggregation and reshaping]({{ '/unit08/unit08-07-aggregate.html' | relative_url }}) if needed.
