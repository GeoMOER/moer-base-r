---
title: If-then-else
order: 4
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "loop"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

{% include self-study-start.html %}

If-then-else statements select which code to run based on a condition. The simplest form is:

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

An `if` statement can be extended with `else if` branches and an optional final `else` branch. In this example, a more specific condition is checked first:

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

Conditions are checked in order. The first condition that is `TRUE` selects its branch; later branches are skipped. If none is `TRUE`, the final `else` branch runs, if present.

The example prints nothing when `a` is larger than `b`, because none of its conditions is `TRUE`. Add a final `else` branch to handle that case:

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

You can combine comparisons with logical operators:

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

An `if` branch runs when its condition is `TRUE`. You can also test whether a stored logical value is `FALSE`:

```r
test <- a < b
if (test == FALSE) {
  print("a is greater than or equal to b")
} else {
  print("a is smaller than b")
}
```

```
## [1] "a is greater than or equal to b"
```

With `test <- a < b`, a `FALSE` result includes equality: `a` can be greater than **or equal to** `b`. Try values smaller than, equal to and greater than `b` to check both branches.

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

<iframe title="Interactive quiz: conditional statements" src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit07-ifelse.html" width="1090" height="600" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
