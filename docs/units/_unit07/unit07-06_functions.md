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

You can also define default argument values:

```r
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

X[sample(1:50, 4)] <- NA

my.mean(X)
my.mean(X, na.rm = FALSE)
```
In this example, `na.rm` has the default value `TRUE`, specified in the argument list. If you call `my.mean()` without supplying `na.rm`, the function excludes missing values before calculating the mean. With `na.rm = FALSE`, the function takes the `else` branch. Here is another example:

```r
my_function <- function(x, y = 10) {
  result <- x + y
  return(result)
}

```
If the caller omits `y`, the function uses its default value of 10 and adds it to `x`.

```r
my_function(5)  # This will result in 15 (5 + 10)
```
You can override the default by supplying a value for `y` when calling the function:

```r
my_function(5, 20)  # This will result in 25 (5 + 20)

```

## Test what you've learned so far!

<iframe title="Interactive quiz: R functions" src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit07-functions.html" width="1090" height="600" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
