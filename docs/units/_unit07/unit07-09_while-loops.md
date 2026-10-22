---
title: While loops
order: 9
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "loop"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

Like for loops, while loops repeat a block of code. A while loop checks a condition before each iteration and continues while it is `TRUE`. The number of iterations does not need to be known in advance.

In this example, the loop continues while `a <= b` and stops once `a > b`:

```r
a <- 7
b <- 10
while(a <= b){
  print(a)
  a <- a + 1
}

## [1] 7
## [1] 8
## [1] 9
## [1] 10
```

The loop body runs four times, with `a` equal to 7, 8, 9, and 10. After the fourth iteration, `a` becomes 11, so `a <= b` is `FALSE` and the loop stops.
You can also nest while loops:

```r
a <- 7
b <- 10
c <- 10
while(a <= b){
  print(paste0("Outer loop value of a: ", a))
  while(c > a){
    print(paste0("   Inner loop value of c: ", c))
    c <- c - 1
  }
  c <- 10
  a <- a + 1

}

## [1] "Outer loop value of a: 7"
## [1] "   Inner loop value of c: 10"
## [1] "   Inner loop value of c: 9"
## [1] "   Inner loop value of c: 8"
## [1] "Outer loop value of a: 8"
## [1] "   Inner loop value of c: 10"
## [1] "   Inner loop value of c: 9"
## [1] "Outer loop value of a: 9"
## [1] "   Inner loop value of c: 10"
## [1] "Outer loop value of a: 10"
```

The variable `c` is reset to 10 after each inner loop. Otherwise, later inner loops would start with the value left by the previous one and could skip iterations.

----

A `repeat` loop continues until an explicit `break` statement exits it. Unlike a while loop, it does not check a condition before entering the body. Here is the basic structure:

```r
repeat {
  # Code to be executed in each iteration
  
  if (condition) {
    break  # Terminate the loop if the condition is met
  }
}

```


## Test what you've learned so far!

<iframe title="Interactive quiz: while and repeat loops" src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit07-whilerepeat.html" width="1090" height="600" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
