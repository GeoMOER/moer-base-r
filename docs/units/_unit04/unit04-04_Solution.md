---
title: "Solution to Exercise 1"
---

See if you were right in exercise 1!

<!--more-->
### Task 1
*in development*

| function | meaning | example |
|---------|-------|---------|
| mean()  | Generic function for the (trimmed) arithmetic mean. | mean(size) |
| sqrt()        | The elementwise square root.      |   sqrt(10+6) |
| log()         | computes logarithms     |    log(x, base); log(a, 10) |
| min()         |   |   |
| max()         |   |   |
| range()       |   |   |
| sum()         |   |   |
| summary()     |   |   |
| cor()         |   |   |
| plot()        |   |   |
| boxplot()     |   |   |



### Task2
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

### Task 3: Data about size and weight

create objects: object  <-  c(..., ..., ...)

```r
size <- c(1.67,1.8,1.58,1.83,1.65,1.74,1.8,1.6,1.76,1.8)
height <- c(62,78,56,85,58,70,70,120,62,90)
state <- c("NRW","Bayern","Hessen","Hessen","Hessen","MV","Hessen","Hessen","Hessen","Berlin")

size
height
state

[1 ] 1.67, 1.8, 1.58, 1.83, 1.65, 1.74, 1.8, 1.6, 1.76, 1.8

[1] 62, 78, 56, 85, 58, 70, 70, 120, 62, 90

[1] NRW, Bayern, Hessen, Hessen, Hessen, MV, Hessen, Hessen, Hessen, Berlin
```
