---
title: Dotplot
toc: true
toc_float: true
header:
  image: /assets/images/unit_images/u09/header.png
  image_description: "statistics"
  caption: "Photo by [Gerd Altmann](https://pixabay.com/de/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4705451) [from Pixabay](https://pixabay.com/)"
---

## What is a Dotplot?
<style>.unit p {text-align: justify;}</style>
<div class="unit">
<img src="dotplot4.png" alt="Comic showing books counted as stacked dots over time." width="515" height="283" align="right" vspace="10" hspace="20">
<p><b>Short Version:</b> A Cleveland dotchart compares numeric values for named items. Each item has its own row, and the horizontal position of its dot shows its value. <br> <br>
<b>Long Version:</b> The term “dot plot” is used for several kinds of chart. In a stacked frequency dot plot, dots above the same value or bin count observations. The comic uses stacked dots to count books over time. The R examples below instead use Cleveland dotcharts: each car model has a separate row, and its dot shows miles per gallon on a numeric horizontal axis. The vertical positions identify the models; they do not measure frequencies. A strip plot is another arrangement, which places individual observations along a numeric axis, optionally separated into groups.
</p></div>

Create Cleveland dotcharts with `dotchart(x, labels=)`, where `x` is a numeric vector and `labels` supplies a label for each point. The `groups=` option takes a factor specifying the groups. Use `gcolor=` for the group labels, `color=` for the points and item labels, and `cex=` for their size. See the [R documentation for `dotchart()`](https://stat.ethz.ch/R-manual/R-devel/library/graphics/html/dotchart.html).

## Example with mtcars:
__Not grouped or coloured; original row order:__

```r
data(mtcars) #loading mtcars
dotchart(mtcars$mpg,labels=row.names(mtcars),cex=.7,
         main="Gas Milage for Car Models",
         xlab="Miles Per Gallon")

```

{% include figure image_path="/assets/images/unit_images/u09/dotplot1.png" caption="Dotplots without grouping and colouring." alt="Cleveland dotchart of mpg for all mtcars models, with one labelled row per car and mpg on the horizontal axis." %}


### Dotplot by gears
__Grouped, Sorted and Colored, sort by mpg, group and color by gears:__

```r
x <- mtcars[order(mtcars$mpg),] # sort by mpg
x$gear <- factor(x$gear) # it must be a factor
x$color_gear[x$gear==3] <- "red"
x$color_gear[x$gear==4] <- "blue"
x$color_gear[x$gear==5] <- "darkgreen"
dotchart(x$mpg,labels=row.names(x),cex=.7,groups= x$gear,
         main="Gas Milage for Car Models\ngrouped by gear",
         xlab="Miles Per Gallon", gcolor="black", color=x$color_gear)
```

### Dotplot by cylinder
__Grouped, Sorted and Colored, sort by mpg, group and color by cylinders:__

```r
x <- mtcars[order(mtcars$mpg),] # sort by mpg
x$cyl <- factor(x$cyl) # must be a factor
x$color_cyl[x$cyl==4] <- "red" # setting red for 4 cylinder
x$color_cyl[x$cyl==6] <- "blue" #setting blue for 6 cylinder
x$color_cyl[x$cyl==8] <- "darkgreen" # setting green for 8 cylinder
dotchart(x$mpg,labels=row.names(x),cex=.7,groups= x$cyl,
         main="Gas Milage for Car Models\ngrouped by cylinder",
         xlab="Miles Per Gallon", gcolor="black", color=x$color_cyl)
```

{% include figure image_path="/assets/images/unit_images/u09/dotplot2.png" caption="Cleveland dotcharts grouped and coloured by gear (left) or cylinder count (right), with mpg sorted within each group." alt="Two Cleveland dotcharts group and colour mtcars by gear count or cylinder count; mpg is sorted within each group." %}

### Difference between Dotplot and Scatterplot:
* The **Cleveland dotchart** below compares one numeric variable, miles per gallon, across named car models. Each row identifies a car model; the dot's horizontal position gives its mpg value. It is not a stacked frequency plot.

* A **scatterplot** shows two numeric variables for each observation. Here, each point represents one car, with horsepower on the horizontal axis and miles per gallon on the vertical axis. The pattern can reveal trends, clusters and unusual observations. The axes do not by themselves establish a causal relationship.

{% include figure image_path="/assets/images/unit_images/u09/dotplot3.png" caption="Difference between Dotplot and Scatterplot." alt="Comparison: the dotchart shows labelled car models against mpg; the scatterplot shows mpg against horsepower, with generally lower mpg at higher horsepower." %}
