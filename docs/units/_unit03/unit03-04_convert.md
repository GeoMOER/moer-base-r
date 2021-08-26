---
title: "Converting Objects"
header:
  image: /assets/images/unit_images/u03/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---
<!--more-->

> “Errors using inadequate data are much less than those using no data at all.” – Charles Babbage

---

*How to convert vectors see Unit 2: [Converting Types of Data](/moer-base-r/unit02/unit02-06_convert.html)*

* Use `is.` to test for data type. Returns TRUE or FALSE
* Use `as.` to explicitly convert it.

|   | to vector | to matrix | to dataframe |
|------------|-------------|-------------|-------------|
| <b>from vector</b> | c(x,y) | cbind(x,y) <br>rbind(x,y) | data.frame(x,y) |
| <b>from matrix</b>  | as.vector(mymatrix)  |  | as.data.frame(mymatrix) |
| <b>from dataframe</b>  |  | as.matrix(myframe) | |

The functions `rbind()` and `cbind()` can be used to bind vectors together. rbind (row bind)
arranges the vectors row by row, cbind (column bind) column by column.

```
v1 <- c(1:3)
v2 <- c(4:6)

rbind(v1,v2)
 [,1] [,2] [,3]
v1 1 2 3
v2 4 5 6

cbind(v1,v2)
 v1 v2
[1,] 1 4
[2,] 2 5
[3,] 3 6
```
<!--more-->

<!--
## Further reading

add some day
-->
