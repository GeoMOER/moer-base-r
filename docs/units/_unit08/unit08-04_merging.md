---
title: Merging
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u08/header.png
  image_description: "noodle"
  caption: "Photo by [congerdesign](https://pixabay.com/de/users/congerdesign-509903/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384)"
---
<!--more-->

> “In God we trust, all others bring data.” — W Edwards Deming

---
To merge two data frames, you have to specify the column containing the values
which should be used in the matching. In this example, we use the values of
the column Z to merge the two data frames.

```
dfc <- merge(df1, df2, by = "Z")
dfc

##   Z X.x Y.x X.y Y.y
## 1 A   1 1.4 100  14
## 2 B   2 2.5 500  55
## 3 C   3 3.6 200  25
## 4 D   4 4.0 400  40
## 5 E   5 5.5 300  36
```
Since both data frames have identical column names, X and Y is added to the
column names in the resulting data frame to indicate if the column is from the
first (i.e. X) or second (i.e. Y) data frame. You can easily rename the columns
using the `colnames` function.

If the columns which should be used for mergin have different names, no problem:
just supply the column names separately for the first (i.e. X) and second (i.e. Y)
data frame:

```
colnames(df2) <- c("H", "I", "J")
dfc <- merge(df1, df2, by.x = "Z", by.y = "J")
dfc

##   Z X   Y   H  I
## 1 A 1 1.4 100 14
## 2 B 2 2.5 500 55
## 3 C 3 3.6 200 25
## 4 D 4 4.0 400 40
## 5 E 5 5.5 300 36
```
Since not only the names of the columns used for merging but all column names are
different, no X or Y is added in the output column names.


<!--
## Further reading

add some day
-->
