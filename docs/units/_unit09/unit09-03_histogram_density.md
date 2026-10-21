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
<img alt="Example histogram of arrivals per minute, with adjoining bars representing frequency in numerical intervals." src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Histogram_of_arrivals_per_minute.svg" width="400" height="338" align="right" vspace="10" hspace="20">
<p>A histogram is a graphical representation of the frequency distribution of cardinally scaled characteristics. It requires the division of the data into bins (classes), which can have a constant or variable width (see image on the right by <a href="https://commons.wikimedia.org/wiki/File:Histogram_of_arrivals_per_minute.svg"><i>DanielPenfield</i></a>) on wikimedia.org. Directly adjacent rectangles of the width of the respective class are drawn, the area of which represents the (relative or absolute) class frequencies. The height of each rectangle then represents the (relative or absolute) frequency density, i.e. the (relative or absolute) frequency divided by the width of the corresponding class.
</p></div>

## Built-in Datasets {#build-in-datasets}
R comes with several built-in data sets, which are generally used as demo data for playing with R functions. These built-in data sets are ideal for practicing plotting. To see the list of pre-loaded data, type the function `data():`

* "mtcars": Motor Trend Car Road Tests
* "iris": measurements for 50 flowers from each of 3 species of iris
* "ToothGrowth": effect of vitamin C on tooth growth in Guinea pigs
* "PlantGrowth": results of an experiment to compare yields
* "USArrests": statistics about violent crime rates by US state
* and many many more...


<div class="course-info">
  <p><strong>Reminder</strong>  <br>
  <ol>
      <li>Load a built-in R data set: <code class="language-plaintext highlighter-rouge">data(“dataset_name”)</code></li>
      <li>Inspect the data set: <code class="language-plaintext highlighter-rouge">head(dataset_name)</code></li>
  </ol>
  </p>
</div>

## Theory
You can create histograms with `hist(x)`, where `x` is a numeric vector. With equal-width bins, the default vertical axis shows counts. With `freq=FALSE`, heights show probability densities: each bar's area is the proportion of observations in its bin, and the total area is one. Use this scale when bin widths differ. The `breaks=` argument can specify exact bin boundaries or suggest a number of bins; R may adjust a suggested number to obtain convenient boundaries. See the [R documentation for `hist()`](https://stat.ethz.ch/R-manual/R-devel/library/graphics/html/hist.html).


Simple Histogram with the dataset mtcars. If you want to learn more about mtcars, type this: `?mtcars`
```r
# Loading dataset
data(mtcars)

# creating histograms with mpg = US Miles per gallon and hp = horsepower
mpg <- hist(mtcars$mpg)
hp <- hist(mtcars$hp)
```
{% include figure image_path="/assets/data/data/histo1.png" caption="Print of Code chunk above" alt="Histograms of mtcars mpg and horsepower. Most mpg observations lie between 10 and 25; horsepower is concentrated toward the lower end with a tail toward 350." %}


Histogram with Breaks (Bins) and Color
```r
hist(mtcars$mpg, breaks=10, col="red")
hist(mtcars$hp, breaks=6, col="blue")
```
{% include figure image_path="/assets/data/data/histo2.png" caption="Print of Code chunk above" alt="The mpg and horsepower histograms are redrawn with red and blue fills; the mpg histogram uses narrower bins." %}

A histogram's appearance depends on both the widths and the positions of its bin boundaries. Narrow bins show more local detail but may exaggerate random variation; wide bins can hide features. Compare several reasonable choices before interpreting peaks, gaps or skewness. In the example above, `breaks=10` is a suggestion, not a guarantee of exactly ten bins.

## Kernel Density Plots
A kernel density plot gives a smooth estimate of a numeric variable's probability density. Create one with `plot(density(x))`. It is another view of the distribution, whose appearance depends on the smoothing bandwidth: smaller bandwidths give more detail and larger bandwidths more smoothing. Use `bw=` to set the bandwidth or `adjust=` to multiply the automatically chosen bandwidth. Neither a histogram nor a density plot is always preferable; check whether the features you describe persist across reasonable bin or bandwidth choices. See the [R documentation for `density()`](https://stat.ethz.ch/R-manual/R-patched/library/stats/html/density.html).

```r
d <- density(mtcars$mpg) # returns the density data
plot(d, main="Kernel Density of Miles/Gallon") # Unfilled Density Plot
polygon(d, col="red", border="blue") # Filled Density Plot
```
{% include figure image_path="/assets/data/data/kdmpg.gif" caption="Print of Code chunk above" alt="Animation of a kernel-density estimate for mtcars mpg; the smooth distribution peaks near 20 mpg with a smaller shoulder around 30." %}

The vertical axis shows density, not a count or the probability of an exact value. Probability is represented by area over an interval. The estimated curve can extend beyond the observed minimum and maximum because the default Gaussian kernels spread mass around each observation. To explore bandwidth sensitivity, compare `plot(density(mtcars$mpg, adjust=0.5))` with `plot(density(mtcars$mpg, adjust=2))`.
