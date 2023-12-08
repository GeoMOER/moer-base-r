---
title: Barplot
toc: true
toc_float: true
header:
  image: /assets/images/unit_images/u09/header.png
  image_description: "statistics"
  caption: "Photo by [Gerd Altmann](https://pixabay.com/de/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4705451) [from Pixabay](https://pixabay.com/)"
---

<!--more-->
## What is a Barplot?
<p>The barplot is for <b>comparative representation</b> that illustrates the <b>frequency distribution</b> of a discrete (random) variable by means of non-contiguous columns standing vertically on the x-axis. The bar chart is particularly suitable for illustrating up to approx. 15 characteristics. With more categories, the clarity suffers and line charts are to be preferred. The bar chart is also not suitable in the case of metrically continuous data; then a histogram is preferable.
</p></div>

Create barplots with the `barplot(values)` function, where *values* is a vector or matrix.
* If *values* is a vector, the values determine the heights of the bars in the plot.
* If *values* is a matrix and the option `beside=FALSE` then each bar of the plot corresponds to a column of height, with the values in the column giving the heights of stacked “sub-bars”.
* If height is a matrix and beside=TRUE, then the values in each column are juxtaposed rather than stacked.
* Include option `names.arg=(character vector)` to label the bars.
* The option `horiz=TRUE` to createa a horizontal barplot.

## Example with mtcars:

```
data(mtcars)
counts <- table(mtcars$cyl)
barplot(counts, main="Car Distribution",
        xlab="Number of Cylinders")
```
{% include figure image_path="/assets/images/unit_images/u09/barplot1.png" caption="Simple Barplot without grouping and colouring." %}

### Simple Horizontal Barplot with Added Labels
```
counts <- table(mtcars$cyl)
barplot(counts, main="Car Distribution", horiz=TRUE,
        names.arg=c("4 Cylinder", "6 Cylinder", "8 Cylinder"))

```
{% include figure image_path="/assets/images/unit_images/u09/barplot2.png" caption="Horizontal barplot with labels and without grouping and colouring." %}

### Stacked Barplot with Colors and Legend
```
# Stacked Bar Plot with Colors and Legend
counts <- table(mtcars$vs, mtcars$gear)
barplot(counts, main="Car Distribution by Gears and VS",
        xlab="Number of Gears", col=c("steelblue","darkgreen"),
        legend = rownames(counts))
```
{% include figure image_path="/assets/images/unit_images/u09/barplot3.png" caption="Barplot with legend and colouring." %}

### Grouped and colored Barplot
```
counts <- table(mtcars$cyl, mtcars$gear)
barplot(counts, main="Car Distribution by Gears and Cylinder",
        xlab="Number of Gears", col=c("darkgreen","steelblue", "darkred"),
        legend = rownames(counts), beside=TRUE)
```
{% include figure image_path="/assets/images/unit_images/u09/barplot4.png" caption="Barplot with grouping, colouring and legend." %}


### Difference between Barplot and Histogram:
Barplots are good when your data is in categories (such as "Comedy", "Drama", etc). But when you have continuous data (such as a person's height) then use a Histogram. It is best to leave gaps between the bars of a Bar Graph, so it doesn't look like a Histogram.
{% include figure image_path="/assets/images/unit_images/u09/barplot5.png" caption="Difference between Barplot and Histogram: Barplot are used for categories (e.g. number of cylinders); Histograms for continuous data ranges (e.g. horsepower)." %}

## Test your knowledge!
<iframe src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit09-barplot.html" width="1090" height="600" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script> 