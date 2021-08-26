---
title: Boxplot
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u09/header.png
  image_description: "statistics"
  caption: "Photo by [Gerd Altmann](https://pixabay.com/de/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4705451) [from Pixabay](https://pixabay.com/)"
---

## What is a Boxplot?
<style>.unit p {text-align: justify;}</style>
<div class="unit"><p>
The box plot (also box-whisker plot) is a diagram used to graphically represent the distribution of a characteristic that is at least ordinally scaled. It thereby combines various robust measures of dispersion and location in one representation. A box plot is intended to give a quick impression of the range in which the data lie and how they are distributed over this range. Therefore, all values of the so-called five-point summary, i.e. the median, the two quartiles and the two extreme values, are shown.</p></div>

{% include figure image_path="/assets/images/unit_images/u09/boxplot1.png" caption="Comic by Randall Munroe [(xkcd)](https://xkcd.com/)." %}

Examine the following items to learn more about the location and spread of the sample data:
<div class="unit"><p>
The <b>Median</b> is represented by the line in the box. The median is a common measure of the location of the data. Half of the observations are less than or equal to the value, the other half of the observations are greater than or equal to the value. <br>
<br>
The <b>interquartile range box</b> interquartile range box represents the middle 50% of the data. It indicates the distance between the first and the third quartile (Q3-Q1).<br>
<br>
The <b>Whiskers</b> start from both sides of the box. They represent the ranges for the bottom 25 % and the top 25 % of the data values excluding the outliers.<br>
<br>
<b>Outliers</b>, i.e. data values that are far away from the other data values, can have a strong impact on your results. Often, the easiest way to identify outliers is in a boxplot, where they are marked with dots or circles under and over the whiskers.<br>
<br>
The <b>Notch</b> displays the 95% confidence interval around the median.</p></div>
{% include figure image_path="/assets/images/unit_images/u09/boxplot2.png" caption="Boxplot by [David's Statistics](https://sites.google.com/site/davidsstatistics/)." %}


## Example with mtcars:

Boxplot of MPG by Car Cylinders
```
boxplot(mpg~cyl,data=mtcars, main="Car Milage Data",
        xlab="Number of Cylinders", ylab="Miles Per Gallon")
```



Notched and coloured Boxplot of MPG by Car Cylinders
```
boxplot(mpg~cyl,data=mtcars, main="Car Milage Data", notch=TRUE,
        col=(c("steelblue","darkgreen", "darkred")),
        xlab="Number of Cylinders", ylab="Miles Per Gallon")
```
{% include figure image_path="/assets/images/unit_images/u09/boxplot3.png" caption="Simple Boxplot and notched and colored Boxplot." %}
