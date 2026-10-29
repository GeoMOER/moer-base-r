---
title: Loops with lapply
order: 8
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "loop"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

{% include self-study-start.html %}


This page develops the examples from the apply family using `lapply()`.

## Basic structure
The `lapply()` function is useful for processing data frames. To use it effectively, you need to understand how it processes input elements and collects results.

`lapply()` returns a list with one element for each input element. Each list element contains the value returned by one call to the supplied function. An explicit `return()` is optional: a function also returns the value of its last evaluated expression.

Each function call has its own local environment, where it stores its arguments and local variables. In the examples below, assignments with `<-` inside the function create local variables. They leave variables with the same names outside the function unchanged. To keep the transformed values, assign the result returned by `lapply()` to a variable.

Let's have a look at an example for which we will use the following data frame:

```r
a <- c("A", "B", "C", "A", "B", "A", "A")
b <- c("X", "X", "X", "X", "Y", "Y", "Y")
c <- c(1, 2, 3, 4, 5, 6, 7)
d <- c(10, 20, 30, 40, 50, 60, 70)
df <- data.frame(Cat1 = a, Cat2 = b, Val1 = c, Val2 = d)
```

We want a new data frame with the same columns, with character values in `Cat1` and `Cat2` converted to lowercase and numeric values in `Val1` and `Val2` replaced by their square roots. This deliberately repeats the [for-loop task]({{ "/unit07/unit07-05_for-loops.html" | relative_url }}) so you can compare result collection. Before running it, predict the return structure and whether the original data frame changes.

Supply a function to `lapply()` that processes one column at a time. The input sequence `seq_len(ncol(df))` supplies the column positions; here, it is equivalent to `seq(4)`:

```r
result <- lapply(seq_len(ncol(df)), function(x){
  act_column <- df[,x]
  if(is.character(act_column)){
    return(tolower(act_column))
  } else if(is.numeric(act_column)){
    return(sqrt(act_column))
  }
})
```

The second argument is an anonymous function, introduced by `function(x)`. Its body is enclosed in curly braces. The final `})` closes the function body and the `lapply()` call.

Inspect the returned values stored in `result`:

```r
result
```

<details markdown="1">
<summary>Inspect the detailed output</summary>

```text
[[1]]
[1] "a" "b" "c" "a" "b" "a" "a"

[[2]]
[1] "x" "x" "x" "x" "y" "y" "y"

[[3]]
[1] 1.000000 1.414214 1.732051 2.000000 2.236068 2.449490 2.645751

[[4]]
[1] 3.162278 4.472136 5.477226 6.324555 7.071068 7.745967 8.366600
```

</details>

```r
str(result)
```

```text
List of 4
 $ : chr [1:7] "a" "b" "c" "a" ...
 $ : chr [1:7] "x" "x" "x" "x" ...
 $ : num [1:7] 1 1.41 1.73 2 2.24 ...
 $ : num [1:7] 3.16 4.47 5.48 6.32 7.07 ...
```
The result is a list of four vectors, one for each transformed column. Convert it to a data frame:

```r
result_df <- data.frame(result)
result_df
```

<details markdown="1">
<summary>Inspect the detailed output</summary>

```text
c..a....b....c....a....b....a....a..
1                                    a
2                                    b
3                                    c
4                                    a
5                                    b
6                                    a
7                                    a
  c..x....x....x....x....y....y....y..
1                                    x
2                                    x
3                                    x
4                                    x
5                                    y
6                                    y
7                                    y
  c.1..1.4142135623731..1.73205080756888..2..2.23606797749979..
1                                                      1.000000
2                                                      1.414214
3                                                      1.732051
4                                                      2.000000
5                                                      2.236068
6                                                      2.449490
7                                                      2.645751
  c.3.16227766016838..4.47213595499958..5.47722557505166..6.32455532033676..
1                                                                   3.162278
2                                                                   4.472136
3                                                                   5.477226
4                                                                   6.324555
5                                                                   7.071068
6                                                                   7.745967
7                                                                   8.366600
```

</details>

```r
str(result_df)
```

```text
'data.frame':	7 obs. of  4 variables:
 $ c..a....b....c....a....b....a....a..                                      : chr "a" "b" "c" "a" ...
 $ c..x....x....x....x....y....y....y..                                      : chr "x" "x" "x" "x" ...
 $ c.1..1.4142135623731..1.73205080756888..2..2.23606797749979..             : num  1 1.41 1.73 2 2.24 ...
 $ c.3.16227766016838..4.47213595499958..5.47722557505166..6.32455532033676..: num  3.16 4.47 5.48 6.32 7.07 ...
```

The conversion creates column names from the values. Restore the original column names:

```r
colnames(result_df) <- colnames(df)
str(result_df)
```

```text
'data.frame':	7 obs. of  4 variables:
 $ Cat1: chr "a" "b" "c" "a" ...
 $ Cat2: chr "x" "x" "x" "x" ...
 $ Val1: num  1 1.41 1.73 2 2.24 ...
 $ Val2: num  3.16 4.47 5.48 6.32 7.07 ...
```

The result now has the original column names.

## Compare the two approaches

Use the original `df` defined above, and compare this loop's table with `result_df` after its column names have been restored:

```r
loop_result <- df
for (i in seq_len(ncol(df))) {
  if (is.character(df[[i]])) {
    loop_result[[i]] <- tolower(df[[i]])
  } else if (is.numeric(df[[i]])) {
    loop_result[[i]] <- sqrt(df[[i]])
  }
}
identical(loop_result, result_df)
```

The comparison is `TRUE`. `lapply()` first collected a list that you converted to a table; the loop filled a copy of the table. Both retained the original `df`. Use the detailed outputs as a reference after making your prediction.

## Using variables defined outside the lapply loop
The function supplied to `lapply()` can read variables from the surrounding environment. Here, we define `var_outside` before the call and use it inside the function to multiply the square roots by 10:

```r
var_outside <- 10
result <- lapply(seq_len(ncol(df)), function(x){
  act_column <- df[,x]
  if(is.character(act_column)){
    return(tolower(act_column))
  } else if(is.numeric(act_column)){
    sqrt_mult <- sqrt(act_column) * var_outside
    return(sqrt_mult)
  }
})
result <- as.data.frame(result)
colnames(result) <- colnames(df)

result
```

```text
Cat1 Cat2     Val1     Val2
1    a    x 10.00000 31.62278
2    b    x 14.14214 44.72136
3    c    x 17.32051 54.77226
4    a    x 20.00000 63.24555
5    b    y 22.36068 70.71068
6    a    y 24.49490 77.45967
7    a    y 26.45751 83.66600
```

**Watch out:** Reading a variable from the surrounding environment and assigning to a local variable are different operations. In this example, `act_column <- df[,x]` reads the data frame `df` from the surrounding environment. The later assignment `df <- tolower(act_column)` creates a local variable named `df` for that function call; it leaves the original data frame unchanged. The assignment to `test` in the numeric branch is also local. Both branches return their calculated values:

```r
test <- 1
result <- lapply(seq_len(ncol(df)), function(x){
  act_column <- df[,x]
  if(is.character(act_column)){
    df <- tolower(act_column)
    return(df)
  } else if(is.numeric(act_column)){
    test <- sqrt(act_column) * var_outside
    return(test)
  }
})
result <- as.data.frame(result)
colnames(result) <- colnames(df)

result
```

```text
Cat1 Cat2     Val1     Val2
1    a    x 10.00000 31.62278
2    b    x 14.14214 44.72136
3    c    x 17.32051 54.77226
4    a    x 20.00000 63.24555
5    b    y 22.36068 70.71068
6    a    y 24.49490 77.45967
7    a    y 26.45751 83.66600
```

Now inspect `df` and `test` outside the function:

```r
test
```

```text
[1] 1
```

```r
df
```

```text
Cat1 Cat2 Val1 Val2
1    A    X    1   10
2    B    X    2   20
3    C    X    3   30
4    A    X    4   40
5    B    Y    5   50
6    A    Y    6   60
7    A    Y    7   70
```

The local variable `df` holds the result of `tolower()`, and the local variable `test` holds the square roots multiplied by `var_outside`. Outside the function, `df` still contains the original data and `test` is still `1`. The returned values have been collected and converted to the data frame `result`.

To replace the original data frame with these transformed values, use `df <- result` after the function call and conversion. This assignment happens in the surrounding environment. For the next example, we keep `df` unchanged.

## Returning data frames within the lapply loop
In the earlier examples, each function call returns a vector, so the result list can be converted to a data frame with `as.data.frame()`. If each call returns a data frame, combine those data frames explicitly:

Here is an example that combines columns Cat1 and Cat2, and columns Val1 and Val2, into new columns. We change the iteration sequence passed to `lapply()` so that the function processes one row at a time. This example can also be implemented without a loop; it serves as an illustration:

```r
result <- lapply(seq_len(nrow(df)), function(x){
  new_structure <- data.frame(Col1 = paste(df[x,1], df[x,2]),
                              Col2 = df[x,3] * df[x,4])
  return(new_structure)
})

str(result)
```

<details markdown="1">
<summary>Inspect the detailed output</summary>

```text
List of 7
 $ :'data.frame':	1 obs. of  2 variables:
  ..$ Col1: chr "A X"
  ..$ Col2: num 10
 $ :'data.frame':	1 obs. of  2 variables:
  ..$ Col1: chr "B X"
  ..$ Col2: num 40
 $ :'data.frame':	1 obs. of  2 variables:
  ..$ Col1: chr "C X"
  ..$ Col2: num 90
 $ :'data.frame':	1 obs. of  2 variables:
  ..$ Col1: chr "A X"
  ..$ Col2: num 160
 $ :'data.frame':	1 obs. of  2 variables:
  ..$ Col1: chr "B Y"
  ..$ Col2: num 250
 $ :'data.frame':	1 obs. of  2 variables:
  ..$ Col1: chr "A Y"
  ..$ Col2: num 360
 $ :'data.frame':	1 obs. of  2 variables:
  ..$ Col1: chr "A Y"
  ..$ Col2: num 490
```

</details>

The result is a list of data frames. Combine them by rows with `do.call("rbind", result)`:

```r
result <- do.call("rbind", result)

str(result)
```

```text
'data.frame':	7 obs. of  2 variables:
 $ Col1: chr "A X" "B X" "C X" "A X" ...
 $ Col2: num  10 40 90 160 250 360 490
```
----


