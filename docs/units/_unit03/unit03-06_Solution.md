---
title: "Solution to Exercise 1"
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u03/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---

See if you were right in exercise 1!

<!--more-->

<!-- ### Task 1
use `help(mean)`, `help(sqrt)`, `?log`

| function | meaning | example |
|---------|-------|---------|
| mean()  | Generic function for the (trimmed) arithmetic mean. | mean(size) |
| sqrt()        | The elementwise square root.      |   sqrt(10+6) |
| log()         | Computes logarithms     |    log(x, base); log(a, 10) |
| min()         | Returns the minima of the input values   | min(dataframe1)  |
| max()         | Returns the maxima of the input values  | max(dataframe1)  |
| range()       | Returns the range of the input values  | range(dataframe1)  |
| sum()         | Returns the sum of the input values  | sum(dataframe1) |
| summary()     | A generic function used to produce result summaries of the results of various model fitting functions  | summary(object, ...)  |
| plot()        | Draw a scatter plot with decorations such as axes and titles in the active graphics window.   |
| boxplot()     | Produce box-and-whisker plot(s) of the given (grouped) values.   |


 -->
<!-- ### Task2
```r
# square root  of 10 + 6
root <- sqrt(10+6)
root

[1] 4
```

```r
# square root of 10 + 6
root <- (10+6)^(1/2)
root

[1] 4
```
 -->
### Task: Data about height and weight {#task--data-about-size-and-weight}

Use `c()` to create the three vectors. Here, `height` is in metres, `weight` is in kilograms, and `state` contains the state labels in the same order as the exercise.

```r
height <- c(1.67, 1.8, 1.58, 1.83, 1.65,
            1.74, 1.8, 1.6, 1.76, 1.8)
weight <- c(62, 78, 56, 85, 58, 70, 70, 120, 62, 90)
state <- c("NRW", "Bayern", "Sachsen", "Hessen", "Hessen",
           "MV", "Hessen", "Brandenburg", "Hessen", "Berlin")
```

Print each vector. Run the R commands; the separate output blocks show the results. Line wrapping may vary with the width of your R console.

```r
height
```

```text
 [1] 1.67 1.80 1.58 1.83 1.65 1.74 1.80 1.60 1.76 1.80
```

```r
weight
```

```text
 [1]  62  78  56  85  58  70  70 120  62  90
```

```r
state
```

```text
 [1] "NRW"         "Bayern"      "Sachsen"     "Hessen"      "Hessen"
 [6] "MV"          "Hessen"      "Brandenburg" "Hessen"      "Berlin"
```
---

<!-- Congratulations! This was the last exercise for this chapter. -->
