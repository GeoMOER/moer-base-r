---
title: write your own function
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "loop"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

You have already used many functions up to this point. Now it's time to write your own functions. A function takes an object *x*, or more, specified within the round brackets. What comes after the curly braces is what should happen with this object. Let's take the well-known function mean as an example. We know that the mean is calculated by summing all elements in a numeric vector and then dividing by the number of elements. So instead of using mean, we can write it as sum(x)/length(x), or, in a function form:

```r
function(x){sum(x)/length(x)}
```
To access this function later, you can also save it as an object in your environment:

```r
my.mean <- function(x){sum(x)/length(x)}
```

For an initial test, let's create a vector X (uppercase), then execute our function my.mean, and afterwards, use the standard mean function for comparison:

```r
X <- c(50:100)

my.mean(X)
mean(X)
```

You can also create default settings:

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


## Test what you've learned so far!

<iframe src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit07-functions.html" width="1090" height="600" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script> 
