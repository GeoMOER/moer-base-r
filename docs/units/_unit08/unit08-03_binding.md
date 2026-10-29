---
title: Binding
header:
  image: /assets/images/unit_images/u08/header.png
  image_description: "noodle"
  caption: "Photo by [congerdesign](https://pixabay.com/de/users/congerdesign-509903/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384)"
---

> “In God we trust, all others bring data.” — W Edwards Deming
<!--more-->

{% include self-study-start.html %}

When thinking about combining two data frames one has to distinguish between
merging them by the values given in a specific column or consecutively putting
them together row by row.

Unit 03 used binding to construct objects. Here, first decide whether you are adding observations or matching attributes, and check column names, types and units. Matching belongs in the [merge lesson]({{ "/unit08/unit08-04_merging.html" | relative_url }}).

For the following examples, we will use these two data frames.

```
x <- c(1, 2, 3, 4, 5)
y <- c(1.4, 2.5, 3.6, 4.0, 5.5)
z <- c("A", "B", "C", "D", "E")

df1 <- data.frame(X = x, Y = y, Z = z)
df1

##   X   Y Z
## 1 1 1.4 A
## 2 2 2.5 B
## 3 3 3.6 C
## 4 4 4.0 D
## 5 5 5.5 E
```

```
y <- c(14, 25, 36, 40, 55)
x <- c(100, 200, 300, 400, 500)
z <- c("A", "C", "E", "D", "B")
df2 <- data.frame(X = x, Y = y, Z = z)
df2

##     X  Y Z
## 1 100 14 A
## 2 200 25 C
## 3 300 36 E
## 4 400 40 D
## 5 500 55 B
```

To combine two data frames, use the `rbind` function provided that both
data frames have the same column names and the same number of columns.

```
dfr <- rbind(df1, df2)
dfr

##      X    Y Z
## 1    1  1.4 A
## 2    2  2.5 B
## 3    3  3.6 C
## 4    4  4.0 D
## 5    5  5.5 E
## 6  100 14.0 A
## 7  200 25.0 C
## 8  300 36.0 E
## 9  400 40.0 D
## 10 500 55.0 B
```

Note that it is not necessary that the columns are in the same order since the
concatenation is done by the column names, not the column sequence:

```
df3 <- df2[,c(1,3,2)]
df3

##     X Z  Y
## 1 100 A 14
## 2 200 C 25
## 3 300 E 36
## 4 400 D 40
## 5 500 B 55
```

```
dfr <- rbind(df1, df3)
dfr

##      X    Y Z
## 1    1  1.4 A
## 2    2  2.5 B
## 3    3  3.6 C
## 4    4  4.0 D
## 5    5  5.5 E
## 6  100 14.0 A
## 7  200 25.0 C
## 8  300 36.0 E
## 9  400 40.0 D
## 10 500 55.0 B
```

<!--
## Further reading

add some day
-->

## Check row correspondence before adding columns

The Z labels in `df1` and `df2` have different row orders. Before running the following call, predict which second-table value it would attach to the B row in the first table:

```r
by_position <- cbind(df1, second_X = df2$X)
by_position
```

It attaches 200, whose Z label in `df2` is C. The matching B value is 500. `cbind()` aligns positions; it does not match Z. If Z identifies the same entities in both tables, use `merge(df1, df2, by = "Z")` and check key uniqueness. If you are adding observations with compatible columns instead, use `rbind()`. Similar names alone do not establish that units or observation meanings agree.
