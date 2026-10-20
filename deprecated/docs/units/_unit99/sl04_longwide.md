---
title: "Long and wide format"
published: FALSE
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/spotlights/header.png
  image_description: "A spotlight"
  caption: "Image by [Julia Schwab](https://pixabay.com/de/users/sweetaholic-296788/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=802634) [on Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=802634)"
---

<!--more-->

Under construction...

The following is a short note on converting wide to long format required e.g. for some lattice or ggplot visualizations. The following examples are based on the readily known data set showing the percentage fraction of settlement, recreational, agricultural, and forest areas for each rural district in Germany. The data has been provided through the [Regional Database Germany](https://www.regionalstatistik.de/genesis/online/).


That's what the data looks like in it's original format:

```r
head(lu)
```

```
##   ID Year                  A          B    C Agriculture Forest Recreation
## 1 01 1996 Schleswig-Holstein Bundesland <NA>        73.0    9.3        0.7
## 2 01 2000 Schleswig-Holstein Bundesland <NA>        72.2    9.5        0.7
## 3 01 2004 Schleswig-Holstein Bundesland <NA>        71.0   10.0        0.8
## 4 01 2008 Schleswig-Holstein Bundesland <NA>        70.0   10.4        0.9
## 5 01 2009 Schleswig-Holstein Bundesland <NA>        69.9   10.5        0.9
## 6 01 2010 Schleswig-Holstein Bundesland <NA>        69.8   10.5        0.9
##   Settlement
## 1       10.8
## 2       11.2
## 3       11.9
## 4       12.4
## 5       12.5
## 6       12.6
```

And this is the data after conversion to long format using the ``reshape2::melt`` function:

```r
lul <- reshape2::melt(lu, id.vars = c("Year", "ID", "A", "B", "C"))
head(lul)
```

```
##   Year ID                  A          B    C    variable value
## 1 1996 01 Schleswig-Holstein Bundesland <NA> Agriculture  73.0
## 2 2000 01 Schleswig-Holstein Bundesland <NA> Agriculture  72.2
## 3 2004 01 Schleswig-Holstein Bundesland <NA> Agriculture  71.0
## 4 2008 01 Schleswig-Holstein Bundesland <NA> Agriculture  70.0
## 5 2009 01 Schleswig-Holstein Bundesland <NA> Agriculture  69.9
## 6 2010 01 Schleswig-Holstein Bundesland <NA> Agriculture  69.8
```

Afterwards, the data can also be used e.g. for producing boxplots in lattice:

```r
bwplot(value ~ variable, data = lul)
```

![]({{ site.baseurl }}/assets/images/rmd_images/e11-04/unnamed-chunk-6-1.png)<!-- -->

Just in case, back to wide format.

```r
lul_wide_again = dcast(lul, ID + Year + A + B + C ~ variable, value.var = "value")
head(lul)
```

```
##   Year ID                  A          B    C    variable value
## 1 1996 01 Schleswig-Holstein Bundesland <NA> Agriculture  73.0
## 2 2000 01 Schleswig-Holstein Bundesland <NA> Agriculture  72.2
## 3 2004 01 Schleswig-Holstein Bundesland <NA> Agriculture  71.0
## 4 2008 01 Schleswig-Holstein Bundesland <NA> Agriculture  70.0
## 5 2009 01 Schleswig-Holstein Bundesland <NA> Agriculture  69.9
## 6 2010 01 Schleswig-Holstein Bundesland <NA> Agriculture  69.8
```
