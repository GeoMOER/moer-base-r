---
title: Indexing
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u04/header.png
  image_description: "index"
  caption: "Photo by [Maksym Kaharlytskyi](https://unsplash.com/@qwitka?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) from [Unsplash](https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---

<!--more-->

> “Big data is at the foundation of all of the megatrends that are happening today, from social to mobile to the cloud to gaming.” – Chris Lynch

---

There are multiple ways to access or replace values in vectors or other data structures. The most common approach is to use “indexing”. This is also referred to as “slicing”.

Note that brackets `[]` are used for indexing, whereas parentheses `( )` are used to call a function.

## Vector
Here are some examples that show how elements of vectors can be obtained by indexing.

Consider vector `v`:
```
# Generating some data
v <- 10:15
v

## [1] 10 11 12 13 14 15
```
Note the square bracket. It shows the number in whose place the value is placed.

```
# Get the first element of a vector
v[1]

## [1] 10


# Get the second element of a vector
v[2]

## [1] 11


# Get elements 2 and 3
v[2:3]      # this means position two to three
v[c(2,3)]   # and this means position two and three

## [1] 11 12


# Now a more advanced example, return all elements except the second

v[c(1,3:6)] # this is one possible way
v[-2]       # and this is the much simpler way

## [1] 10 12 13 14 15
```

You can also use an index to change values

```
v[1] <- 11 # Change position 1 from 10 to 11
v

## [1] 11 11 12 13 14 15

v[3:6] <- -99  # change the positions 3 to 6 to -99
v

## [1]  11  11 -99 -99 -99 -99
```

## Matrix
Consider matrix `m`.
```
m <- matrix(1:9, nrow=3, ncol=3, byrow=TRUE)
colnames(m) <- c('a', 'b', 'c')
m

##      a b c
## [1,] 1 2 3
## [2,] 4 5 6
## [3,] 7 8 9
```

Like vectors, values of matrices can be accessed through indexing. There are different ways to do this, but it is generally easiest to use two numbers in a double index, the first for the row number(s) and the second for the column number(s).

```
# one value in row 2, column 2
m[2,2]

## b
## 5

# another one in row 1, column 3
m[1,3]

## c
## 3
```

You can also get multiple values at once.

```
# 2 columns and rows
m[1:2,1:2]

##      a b
## [1,] 1 2
## [2,] 4 5

# entire row
m[2, ]

## a b c
## 4 5 6

# entire column
m[ ,2]

## [1] 2 5 8
```

Or use the column names for sub-setting.

```
#single column
m[, 'b']

## [1] 2 5 8

# two columns
m[, c('a', 'c')]

##      a c
## [1,] 1 3
## [2,] 4 6
## [3,] 7 9
```

Instead of indexing with two numbers, you can also use a single number. You can think of this as a “cell number”. Cells are numbered column-wise (i.e., first the rows in the first column, then the second column, etc.). Thus,

```
m[2,2]

## b
## 5

# is equivalent to
m[5]

## [1] 5
```

Note that the example below returns a vector.

```
m[ ,2]
## [1] 2 5 8
```

 This is because a single-column matrix can be simplified to a vector. In that case the matrix structure is ‘dropped’. This is not always desirable, and to keep this from happening, you can use the `drop=FALSE` argument.

```
m[ , 2, drop=FALSE]

##      b
## [1,] 2
## [2,] 5
## [3,] 8
```

Setting values of a matrix is similar to how you would do that for a vector, except that you now need to deal with two dimensions.

```
# one value
m[1,1] <- 5
m

##      a b c
## [1,] 5 2 3
## [2,] 4 5 6
## [3,] 7 8 9


# a row
m[3,] <- 10
m

##       a  b  c
## [1,]  5  2  3
## [2,]  4  5  6
## [3,] 10 10 10
```

## List
Indexing lists can be a bit confusing as you can both refer to the elements of the list, or the elements of the data (perhaps a matrix) in one of the list elements. Note the difference that double brackets make. `e[3]` returns a list (of length 1), but `e[[3]]` returns what is inside that list element (a matrix in this case).

```
m <- matrix(1:9, nrow=3, ncol=3, byrow=TRUE)
colnames(m) <- c('a', 'b', 'c')
e <- list(list(1:3), c('a', 'b', 'c', 'd'), m)
```

We can access data inside a list element by combining double and single brackets. By using the double brackets, the list structure is dropped.

```
e[2]
## [[1]]
## [1] "a" "b" "c" "d"
e[[2]]
## [1] "a" "b" "c" "d"
```

List elements can have names.

```
names(e) <- c('zzz', 'xyz', 'abc')
```

And the elements can be extracted by their name, either as an index, or by using the `$` (dollar) operator.

```
e$xyz
## [1] "a" "b" "c" "d"

e[['xyz']]
## [1] "a" "b" "c" "d"
```
The `$` can also be used with data.frame objects (a special list, after all), but not with matrices.



## Data.frame
Indexing a data.frame can generally be done as for matrices and for lists.

First create a data.frame from matrix `m`.

```
d <- data.frame(m)
class(d)

## [1] "data.frame"
```

You can extract a column by column number.

```
d[,2]

## [1] 2 5 8
```
Here is an alternative way to address the column number in a data.frame.

```
d[2]

##   b
## 1 2
## 2 5
## 3 8
```

Note that whereas `[2]` would be the second element in a matrix, it refers to the second column in a `data.frame`. This is because a `data.frame` is a special kind of list and not a special kind of matrix.

You can also use the column name to get values. This approach also works for a matrix.

```
d[, 'b']

## [1] 2 5 8
```

But with a data.frame you can also do

```
d$b
## [1] 2 5 8

# or this

d[['b']]
## [1] 2 5 8
```
All these return a vector. That is, the complexity of the data.frame structure was dropped. This does not happen when you do

```
d['b']

##   b
## 1 2
## 2 5
## 3 8
```
or

```
d[ , 'b', drop=FALSE]

##   b
## 1 2
## 2 5
## 3 8
```

Why should you care about this drop business? Well, in many cases R functions want a specific data type, such as a matrix or data.frame and report an error if they get something else. One common situation is that you think you provide data of the right type, such as a data.frame, but that in fact you are providing a vector, because the structure dropped.

## Which, %in% and match
Sometimes you do not have the indices you need, and so you need to find them. For example, what are the indices of the elements in a vector that have values above 15?

```
x <- 10:20
i <- which(x > 15)
x
##  [1] 10 11 12 13 14 15 16 17 18 19 20

i
## [1]  7  8  9 10 11

x[i]
## [1] 16 17 18 19 20
```

Note, however, that you can also use a logical vector for indexing (values for which the index is TRUE are returned).

```
x <- 10:20
b <- x > 15
x
##  [1] 10 11 12 13 14 15 16 17 18 19 20

b
##  [1] FALSE FALSE FALSE FALSE FALSE FALSE  TRUE  TRUE  TRUE  TRUE  TRUE

x[b]
## [1] 16 17 18 19 20
```

A very useful operator that allows you to ask whether a set of values is present in a vector is %in%.

```
x <- 10:20
j <- c(7,9,11,13)
j %in% x

## [1] FALSE FALSE  TRUE  TRUE

which(j %in% x)
## [1] 3 4
```
Another handy similar function is match:

```
match(j, x)
## [1] NA NA  2  4
```
telling us that the third value in j is equal to the second value in x and that the fourth value in ‘j’ is equal to the fourth value in x.

match is asymmetric: match(j,x) is not the same as match(x,j).

```
match(x, j)
##  [1] NA  3 NA  4 NA NA NA NA NA NA NA
```

This tells us that the second value in x is equal to the third value in ‘j’, etc.


<!--
## Further reading

add some day
-->
