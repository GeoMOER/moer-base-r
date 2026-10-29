---
title: Boxplot
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u09/header.png
  image_description: "statistics"
  caption: "Photo by [Gerd Altmann](https://pixabay.com/de/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4705451) [from Pixabay](https://pixabay.com/)"
---

{% include self-study-start.html %}

## What is a Boxplot?
<style>.unit p {text-align: justify;}</style>
<div class="unit"><p>
A boxplot (also called a box-and-whisker plot) summarises the location and spread of a numeric variable. The box shows the median and the central part of the data; whiskers and separately drawn points show the tails. In R's default boxplot, the whisker ends need not be the minimum and maximum of the sample.</p></div>

{% include figure image_path="/assets/images/unit_images/u09/boxplot1.png" caption="Comic by Randall Munroe [(xkcd)](https://xkcd.com/)." alt="Comic: someone uses a boxplot comparing time spent together to argue that a relationship is statistically significant." %}

Examine the following items to learn more about the location and spread of the sample data:
<div class="unit"><p>
The <b>Median</b> is represented by the line in the box. The median is a common measure of the location of the data. Half of the observations are less than or equal to the value, the other half of the observations are greater than or equal to the value. <br>
<br>
The <b>box</b> covers approximately the middle 50% of the data. The interquartile range (IQR) is Q3 minus Q1. R uses Tukey's <i>hinges</i> as the box edges; these approximate Q1 and Q3 but can differ from the values returned by <code>quantile()</code>, especially in small samples. In the rules below, IQR means the box length: upper hinge minus lower hinge.<br>
<br>
The <b>whiskers</b> extend to the smallest and largest observed values within 1.5 × IQR of the corresponding box edge. The limits are the lower hinge minus 1.5 × IQR and the upper hinge plus 1.5 × IQR. A whisker ends at an observed value, not necessarily at the limit itself. These are the defaults of <code>boxplot()</code> (<code>range = 1.5</code>).<br>
<br>
<b>Potential outliers</b> beyond these limits are drawn individually. This flags observations for investigation; it does not establish that they are data errors or should be removed. Several observations with the same value may overlap in the plot.<br>
<br>
<b>Optional preview — notches:</b> the <b>notch</b>, when requested, extends from the median by ±1.58 × IQR / √n, where n is the group sample size. Non-overlapping notches provide approximate evidence that two population medians differ at roughly the 5% level. This comparison relies on an approximation, and is less reliable with small samples; the notches are not guaranteed 95% confidence intervals for individual medians. Overlapping notches do not establish equal medians.</p></div>

These conventions are described in the R documentation for [<code>boxplot()</code>](https://stat.ethz.ch/R-manual/R-patched/library/graphics/html/boxplot.html) and [<code>boxplot.stats()</code>](https://stat.ethz.ch/R-manual/R-devel/library/grDevices/html/boxplot.stats.html).

{% include figure image_path="/assets/images/unit_images/u09/boxplot_summary.svg" alt="Annotated R boxplot showing hinges, median, observed whisker ends, the 1.5 times IQR limits, a potential outlier and approximate notches." caption="R's default whisker rule and optional notches, illustrated with generated example data. Dashed limits determine which observations are drawn separately; whiskers stop at observed values." %}


## Example with mtcars:

Boxplot of MPG by Car Cylinders
```r
boxplot(mpg~cyl,data=mtcars, main="Car Milage Data",
        xlab="Number of Cylinders", ylab="Miles Per Gallon")
```



### Optional preview: notched and coloured boxplots

The plain boxplot above covers the core task. The next example previews a comparison used in later statistics courses. Read the qualification about notches above before interpreting it; you do not need this comparison to understand medians, hinges and whiskers.
```r
boxplot(mpg~cyl,data=mtcars, main="Car Milage Data", notch=TRUE,
        col=(c("steelblue","darkgreen", "darkred")),
        xlab="Number of Cylinders", ylab="Miles Per Gallon")
```
{% include figure image_path="/assets/images/unit_images/u09/boxplot3.svg" caption="Simple Boxplot and notched and colored Boxplot." alt="Mtcars mpg by 4, 6 and 8 cylinders, first as plain boxplots and then with coloured notches. Four-cylinder cars have the highest median mpg and eight-cylinder cars the lowest." %}

In the eight-cylinder group, the lower whisker is at 13.3 mpg, while two observations at 10.4 mpg are flagged by the 1.5 × IQR rule. Their symbols overlap, so only one circle is visible. For the six-cylinder group, R warns that some notches extend outside the hinges: there are only seven observations, and the notch interval extends beyond the box. Interpret these small-sample comparisons cautiously.
