---
title: If-then-else
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "loop"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

If-then-else statements are the controlling structures in each program. The simplest form is:

```r
a <- 5.0
b <- 10.0
if (a < b) {
  print("a is smaller than b")
}
```

```
## [1] "a is smaller than b"
```

Such an if-statement can be extended by *n* if-else statements and - optionally - an else-statement. To illustrate this, let us start with another if-statement as the one above but include it later:

```r
if (a < b/2) {
  print("a is much smaller than b")
} else if (a < b) {
  print("a is smaller than b")
} else if (a == b) {
  print("a equals b")
}
```

```
## [1] "a is smaller than b"
```

In such a structure, the first if-statment is evaluated. If it is true, all following else-if- (or else-)statements are skipped and the execution continues below the decision structure.

The above example would not print anything if a is larger than b. For this case, other else-if statements could be used but if no differentiation should be made for any case of a larger than b, this can also be solved by a final else-statement.

```r
a <- 15.0
b <- 10.0
if (a < b/2) {
  print("a is much smaller than b")
} else if (a < b) {
  print("a is smaller than b")
} else if (a == b) {
  print("a equals b")
} else {
  print("a is larger than b.")
}
```

```
## [1] "a is larger than b."
```

Of course, boolean expressions could also be used within such structures:

```r
c <- 20.0
if (a < b & a == c) {
  print("a is smaller than b and equal to c")
} else if (a > b & a == c) {
  print("a is larger than b and equal to c")
} else {
  print("a non-equal to c.")
}
```

```
## [1] "a non-equal to c."
```

The above examples document if-statements which are executed if the condition is true since this is the default action for something like `a < b`. Of course, one can also check if a condition is false:

```r
test <- a < b
if (test == FALSE) {
  print("a is larger than b")
} else {
  print("a is smaller than or equal b.")
}
```

```
## [1] "a is larger than b"
```

If-then-else decisions are useful if your computation needs different workflows for different variable values.

```yaml
# Pseudocode
if("<some logical (and boolean) expression>"){
    "<do something>"
} else {
    "<do something else>"
}
```
## Test what you've learned so far!

<iframe src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit07-ifelse.html" width="1090" height="600" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script> 