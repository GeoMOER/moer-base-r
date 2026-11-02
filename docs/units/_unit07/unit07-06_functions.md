---
title: Writing your own functions
order: 6
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "loop"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

{% include self-study-start.html %}

You have already used many functions. Now it is time to write your own. A function can accept one or more arguments, listed in parentheses. Its body, enclosed in curly braces, contains the operations to perform. For example, the mean of a numeric vector without missing values is its sum divided by its length. We can write `sum(x) / length(x)` as a function:

```r
function(x){sum(x)/length(x)}
```
To access this function later, you can also save it as an object in your environment:

```r
my.mean <- function(x){sum(x)/length(x)}
```

For an initial test, create a vector `X` (uppercase), call `my.mean()`, and compare the result with `mean()`:

```r
X <- c(50:100)

my.mean(X)
mean(X)
```

## Add a default argument

A default supplies a value when the caller omits an argument. Start with a function that adds two numbers:

```r
my_function <- function(x, y = 10) {
  result <- x + y
  return(result)
}
my_function(5)
my_function(5, 20)
```

```text
[1] 15
[1] 25
```

`x` receives `5`. In the first call, `y` uses its default of `10`; the second call supplies `20` instead. `return(result)` sends the calculated value back to the caller.

**Try a change:** predict `my_function(2, y = 3)` before running it. Expect `5`. You changed the arguments in the call; the function definition still has the same default.

## Extend a function to handle missing values

**Optional extension:** the following example adds decisions and missing-value handling to `my.mean()`. First check that the initial version above and `mean()` both return `75` for `X <- 50:100`. If decisions are unfamiliar, revisit [if-then-else]({{ '/unit07/unit07-04_if-then-else.html' | relative_url }}).

Here `na.rm` defaults to `TRUE`. Create `X` again so this extension has its own complete setup:

```r
X <- 50:100
my.mean <- function(x, na.rm = TRUE){
  if(na.rm == TRUE){
    sum(x, na.rm = TRUE)/length(x[!is.na(x)])
  } else {
    if(any(is.na(x) == TRUE)){
      cat("Error: you need to change your NA settings!")
    }
    
    sum(x)/length(x)
  }
}

X[1:2] <- NA

my.mean(X)
my.mean(X, na.rm = FALSE)
```
The fixed replacement removes `50` and `51`, leaving the values from `52` to `100`. With the default, the function divides their sum by the number of non-missing values and returns `76`. With `na.rm = FALSE`, it keeps the missing values, prints the diagnostic sentence and returns `NA`; the word “Error” in that printed text does not stop R. Compare the two results with `mean(X, na.rm = TRUE)` and `mean(X, na.rm = FALSE)`.

This is a teaching function for numeric vectors. If all values are missing, removing them leaves no values to average: the calculation gives `NaN`. Use the documented `mean()` function in your own analyses.

## Test what you've learned so far!

<iframe title="Interactive quiz: R functions" src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit07-functions.html" width="1090" height="600" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
