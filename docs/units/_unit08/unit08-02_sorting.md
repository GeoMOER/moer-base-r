---
title: Sorting
header:
  image: /assets/images/unit_images/u08/header.png
  image_description: "noodle"
  caption: "Photo by [congerdesign](https://pixabay.com/de/users/congerdesign-509903/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384)"
---


> “It is a capital mistake to theorize before one has data.” — Sherlock Holmes
<!--more-->

{% include self-study-start.html %}


#### Sorting vectors or lists
Vectors can be sorted using the `sort` function. If you want to sort a list,
you have to access the actual elements since sort requires atomic vectors.

```r
x <- c(7,5,8,2,10)
sort(x)
```

```text
[1]  2  5  7  8 10
```

```r
l <- list(x)
sort(l[[1]])
```

```text
[1]  2  5  7  8 10
```


#### Sorting data frames
The logic of sorting data frames is different from the `sort` function shown
above. Instead of directly getting a sorted output, one has to get the
permutation of the ordering i.e. a vector which gives the position of the
elements in ascending or descending order. This is realized by the `order`
function, which can also be applied to vectors or lists.

```r
y <- c("Z", "D", "R", "A", "O")
z <- c(10, 40, 20, 30, 50)

df <- data.frame(X = x, Y = y, Z = z)
df
```

```text
X Y  Z
1  7 Z 10
2  5 D 40
3  8 R 20
4  2 A 30
5 10 O 50
```

```r
df[order(df$X),]  # order by column X
```

```text
X Y  Z
4  2 A 30
2  5 D 40
1  7 Z 10
3  8 R 20
5 10 O 50
```

```r
df[order(df$Y),]  # order by column Y
```

```text
X Y  Z
4  2 A 30
2  5 D 40
5 10 O 50
3  8 R 20
1  7 Z 10
```

A secondary key matters only when the first key is tied. The original Y values are unique, so use this copy to make the difference visible:

```r
tied <- df
tied$X <- c(2, 1, 2, 1, 2)
tied$Y <- c("B", "A", "B", "A", "B")
tied[order(tied$Y), ]
tied[order(tied$Y, tied$Z), ]
```

Sorting only by Y keeps the A rows in input order: Z is 40 then 30. Adding Z orders those rows as 30 then 40. The complete Y/Z order is A/30, A/40, B/10, B/20, B/50. All other values travel with their rows; sorting only one column would separate the observations.


```r
# sorting would only be applicable for one row/column (i.e. one vector)
sort(df[,2])
```

```text
[1] "A" "D" "O" "R" "Z"
```

```r
# for the vector and list example above, the followig would apply
x[order(x)]
```

```text
[1]  2  5  7  8 10
```

```r
l[[1]][order(l[[1]])]
```

```text
[1]  2  5  7  8 10
```
Please note that the above examples are not the only way and that you might
find other solutions for the same problem - this is something quite typical for
very high level programming languages. Just to illustrate it, here comes the
`with` function, which evaluates an expression in the context of the given data
structure. In this example, `order(X, Z)` produces the row indices used to
subset the data frame inside the square brackets.

```r
# The same operation with an explicit data-frame context
tied[with(tied, order(X, Z)), ]
```

The X/Z order is 1/30, 1/40, 2/10, 2/20, 2/50. `with()` supplies the column-name context; the operation still returns whole rows. The original `df` remains unchanged for the factor examples below.



#### Sorting factors
A quick note on sorting factors. Factors are categorical variables which can take
on a value which is part of a predefined (and limited) set. Factors consist
of two parts, the actual value at some position and the set of possible values
called levels. This implies that two aspects of a factor can be ordered separately:
the factor values which we see when printing the content of a data frame and
the levels which we do not see when we print it (but which might affect the
printing and plotting or some statistical operations).


Column Y is currently a character vector. To demonstrate sorting factors, first convert it to a factor:

```r
df$Y <- factor(df$Y)
```

Let's have a look at the data frame df again:

```r
df
```

```text
X Y  Z
1  7 Z 10
2  5 D 40
3  8 R 20
4  2 A 30
5 10 O 50
```

```r
str(df)
```

```text
'data.frame':	5 obs. of  3 variables:
 $ X: num  7 5 8 2 10
 $ Y: Factor w/ 5 levels "A","D","O","R",..: 5 2 4 1 3
 $ Z: num  10 40 20 30 50
```

```r
levels(df$Y)
```

```text
[1] "A" "D" "O" "R" "Z"
```

```r
df$Y  # alternatively to levels(df$Y) to print both the values and the levels
```

```text
[1] Z D R A O
Levels: A D O R Z
```
As you see, column Y is not sorted but looking at its structure we see that the
column is of type Factor and using the `levels` function, we note that the
factor levels are obviously ordered in an increasing order.

Let's sort column Y in a decreasing order and have a look at the factor levels
afterwards.

```r
df <- df[order(df$Y, decreasing = TRUE),]
levels(df$Y)
```

```text
[1] "A" "D" "O" "R" "Z"
```

```r
df$Y
```

```text
[1] Z R O D A
Levels: A D O R Z
```
Obviously, the value ordering in column Y has changed but not the ordering of
its levels. To actually change the ordering of factor levels, we have to sort
them explicitly.

```r
df$Y <- factor(df$Y, levels(df$Y)[order(levels(df$Y), decreasing = TRUE)])
levels(df$Y)
```

```text
[1] "Z" "R" "O" "D" "A"
```

```r
df$Y
```

```text
[1] Z R O D A
Levels: Z R O D A
```


For more information have a look at e.g. the respective
[sorting](http://www.statmethods.net/management/sorting.html) site at Quick R.


<!--
## Further reading

add some day
-->
