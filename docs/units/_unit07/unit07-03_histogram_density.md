---
title: Histogram / Density Plot
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "statistics"
  caption: "Photo by [Gerd Altmann](https://pixabay.com/de/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4705451) [from Pixabay](https://pixabay.com/)"
---

<!--more-->
R comes with several built-in data sets, which are generally used as demo data for playing with R functions. To see the list of pre-loaded data, type the function `data():`

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
