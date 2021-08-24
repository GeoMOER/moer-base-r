---
title: Histogram & Density Plot
toc: true
toc_float: true
header:
  image: /assets/images/unit_images/u09/header.png
  image_description: "statistics"
  caption: "Photo by [Gerd Altmann](https://pixabay.com/de/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4705451) [from Pixabay](https://pixabay.com/)"
---

<!--more-->


## What is a Histogram?
<style>.unit p {text-align: justify;}</style>
<div class="unit">
<img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Histogram_of_arrivals_per_minute.svg" width="400" height="338" align="right" vspace="10" hspace="20">
<p>A histogram is a graphical representation of the frequency distribution of cardinally scaled characteristics. It requires the division of the data into bins (classes), which can have a constant or variable width (see image on the right by <a href="https://commons.wikimedia.org/wiki/File:Histogram_of_arrivals_per_minute.svg"><i>DanielPenfield</i></a>) on wikimedia.org. Directly adjacent rectangles of the width of the respective class are drawn, the area of which represents the (relative or absolute) class frequencies. The height of each rectangle then represents the (relative or absolute) frequency density, i.e. the (relative or absolute) frequency divided by the width of the corresponding class.
</p></div>

## Build in Datasets
R comes with several built-in data sets, which are generally used as demo data for playing with R functions. These built-in data sets are ideal for practising plotting. To see the list of pre-loaded data, type the function `data():`

* "mtcars": Motor Trend Car Road Tests
* "iris": measurements for 50 flowers from each of 3 species of iris
* "ToothGrowth": effect of vitamin C on tooth growth in Guinea pigs
* "PlantGrowth": results of an experiment to compare yields
* "USArrests": statistics about violent crime rates by us state
* and many many more...


<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
div {
  margin-bottom: 15px;
  padding: 4px 12px;
}

.info {
  background-color: #e7f3fe;
  border-left: 6px solid #2196F3;
}

</style>
</head>
<body>
<div class="info">
  <p><strong>Reminder</strong>  <br>
  <ol>
      <li>Load a built-in R data set: <code class="language-plaintext highlighter-rouge">data(“dataset_name”)</code></li>
      <li>Inspect the data set: <code class="language-plaintext highlighter-rouge">head(dataset_name)</code></li>
  </ol>
  </p>
</div>
</body>
</html>

## Theory
You can create histograms with the function `hist(x)` where x is a numeric vector of values to be plotted. The option `freq=FALSE` plots probability densities instead of frequencies. The option `breaks=` controls the number of bins.


Simple Histogram with the dataset mtcars. If you want to learn more about mtcars, type this: `?mtcars`
```
# Loading dataset
data(mtcars)

# creating histograms with mpg = US Miles per gallon and hp = horsepower
mpg <- hist(mtcars$mpg)
hp <- hist(mtcars$hp)
```
{% include figure image_path="/assets/data/data/histo1.png" caption="Print of Code chunk above" %}


Histogram with Breaks (Bins) and Color
```
hist(mtcars$mpg, breaks=10, col="red")
hist(mtcars$hp, breaks=6, col="blue")
```
{% include figure image_path="/assets/data/data/histo2.png" caption="Print of Code chunk above" %}

Histograms can be a poor method for determining the shape of a distribution because it is so strongly affected by the number of bins used.

## Kernel Density Plots
Kernal density plots are usually a much more effective way to view the distribution of a variable. Create the plot using plot(density(x)) where x is a numeric vector.

```
d <- density(mtcars$mpg) # returns the density data
plot(d, main="Kernel Density of Miles/Gallon") # Unfilled Density Plot
polygon(d, col="red", border="blue") # Filled Density Plot
```
{% include figure image_path="/assets/data/data/kdmpg.gif" caption="Print of Code chunk above" %}
