---
title: Scatterplot
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u09/header.png
  image_description: "statistics"
  caption: "Photo by [Gerd Altmann](https://pixabay.com/de/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4705451) [from Pixabay](https://pixabay.com/)"
---

## What is a Scatterplot?
<style>.unit p {text-align: justify;}</style>
<div class="unit"><img alt="Comic scatterplot positioning foods by taste and ease of eating, rather than measured physical quantities." src="{{ '/assets/images/unit_images/u09/scatterplot1.png' | relative_url }}" width="454" height="388" align="right" vspace="10" hspace="20">
<p>A scatter plot is a graphical representation of observed pairs of values of two statistical characteristics. These pairs of values are plotted in a Cartesian coordinate system, resulting in a scatter plot. The points can be represented by different symbols. It is hoped that the pattern of points in the scatter plot will provide information about the dependency structure of the two features represented by the coordinates.</p></div>

There are many ways to create a scatterplot in R. The basic function is `plot(x, y)`, where x and y are numeric vectors denoting the (x,y) points to plot.

## Example with mtcars:
```
plot(mtcars$wt, mtcars$mpg, main="Scatterplot Example",
     xlab="Car Weight ", ylab="Miles Per Gallon ", pch=19)
```
### Optional preview: fitted and smoothed lines

The scatterplot above is sufficient for this unit's core task. Continue here if you want to preview tools used in later analysis courses. First run that plot: `abline()`, `lines()` and `legend()` add to an existing graph.

`lm(y ~ x)` fits a straight-line model; the formula puts the response on the left and predictor on the right. The line below is a descriptive overlay, not evidence of causation. Drawing it does not check the model's assumptions. Formal inference requires checking the model and its residuals; see [R's linear-model documentation](https://stat.ethz.ch/R-manual/R-patched/library/stats/html/lm.html).

```
# adding Regression lines and a legend
abline(lm(mtcars$mpg~mtcars$wt), col="steelblue") # regression line (y~x)
lines(lowess(mtcars$wt,mtcars$mpg), lty=2, col="darkgreen") # LOWESS/LOESS line (x,y)
legend("topright", legend=c("Regression", "LOWESS"),
       col=c("steelblue", "darkgreen"), lty=1:2, cex=0.8)
```
{% include figure image_path="/assets/images/unit_images/u09/scatterplot2.svg" caption="Simple scatterplot." alt="Scatterplot of mtcars weight against miles per gallon: heavier cars generally have lower mpg; linear regression and LOWESS curves are overlaid." %}

<div class="course-info">
  <p><strong>Info</strong>  <br>
  LOWESS (Locally Weighted Scatterplot Smoothing) draws a descriptive smooth through the observed relationship. It is related to LOESS, but <code>lowess()</code> and <code>loess()</code> are different R functions. The smooth depends on its settings and does not establish causation or justify forecasting beyond the observed data. See <a href="https://stat.ethz.ch/R-manual/R-patched/library/stats/html/lowess.html">the R documentation for lowess()</a>.
  </p>
</div>



## Test your knowledge!
<iframe title="Interactive quiz: scatterplots" src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit09-scatterplot.html" width="1090" height="600" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
