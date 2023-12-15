---
title: While-loops
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "loop"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

As for loops, while loops are repeating structures which enable the execution of certain code blocks for multiple times. The difference is that for while loops the number of necessary repetitions is not known at the starting time of the loop.

While loops are executed until a termination condition is reached. In the following example, this condition is given by `a > b`:

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

Obviously, this condition is executed 4 times (i.e. a = 7, 8, 9, 10). After that `a + 1` gives 11 which is larger than b and the termination condition is reached.
As for any other loop, nested loops are also possible.

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

Variable `c` has to be reseted to its initial value every time the inner loop is completed. Otherwise it would not start a second time since the termination condition is already reached. Of course this behavior can also be useful for a variety of problems.

----

One couls also use the *repeat* statement, which creates  a loop that repeats an action or a set of actions indefinitely until a certain condition is met. The loop continues executing until an explicit break statement is encountered within the loop. Here's how it works:

```r
repeat {
  # Code to be executed in each iteration
  
  if (condition) {
    break  # Terminate the loop if the condition is met
  }
}

```


## Test what you've learned so far!

<iframe src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit07-whilerepeat.html" width="1090" height="600" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script> 
