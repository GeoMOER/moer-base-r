---
title: For loops
order: 5
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "loop"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

{% include self-study-start.html %}

For loops repeat a block of code for each element in a sequence. The sequence is evaluated when the loop starts, so its length determines the number of iterations.

The sequence can be defined directly or stored in a variable before the loop starts. Here, the loop iterates over the values from 7 to 10:

```r
for(i in seq(7,10)){
  print(i)
}
```

```
## [1] 7
## [1] 8
## [1] 9
## [1] 10
```
The loop assigns each value in the sequence to `i` in turn. Avoid changing `i` inside the loop, because the next iteration will assign the next sequence value to it.

Of course, you can nest for loops:

```r
for(i in seq(7, 10)){
  print(paste0("Outer loop value of a: ", i))
  if(i < 10){
    lower_border <- i + 1
  } else {
    lower_border <- i
  }
  for(j in seq(10, lower_border)){
    print(paste0("   Inner loop value of c: ", j))
  }
}
```

```
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
## [1] "   Inner loop value of c: 10"
```

The `if` statement sets `lower_border` to `i + 1` when `i` is smaller than 10, and to 10 otherwise. The inner loop then assigns values from 10 down to `lower_border` to `j`.

You can also store the sequence in a vector before using it in a for loop. The `seq()` function used above returns such a vector:

```r
t <- seq(7, 10)
t
```

```
## [1]  7  8  9 10
```

```r
class(t)
```

```
## [1] "integer"
```

The iteration variable (`i` or `j` above) receives the first element of the sequence in the first iteration, the second element in the next iteration, and so on. The sequence can also contain character values:

```r
a <- c("A", "B", "C", "D")
for(elements in a){
  print(elements)
}
```

```
## [1] "A"
## [1] "B"
## [1] "C"
## [1] "D"
```

You can also iterate over numeric positions and use them to select values from the vector:

```r
for(i in seq(4)){
  print(a[i])
}
```

```
## [1] "A"
## [1] "B"
## [1] "C"
## [1] "D"
```

To obtain the positions of `a`, use `seq_along(a)`. If `a` is empty, it returns no positions, so the loop runs zero times:

```r
for(i in seq_along(a)){
  print(a[i])
}
```

```
## [1] "A"
## [1] "B"
## [1] "C"
## [1] "D"
```

{% include figure image_path="/assets/data/data/for_loop.gif" caption="Animation of the plot process" alt="Animation of a for-loop: i takes successive values from seq2 and print(i) prints each value; the shown third iteration prints 3." %}



For example, `seq_along(character())` and `seq_len(0)` both return `integer(0)`. In contrast, `seq(0)` returns `1, 0`, so `seq(length(a))` would still run a loop when `a` is empty.

## Modifying an existing variable in a loop
A `for` loop can update an existing variable with `<-` in the environment where the loop runs. With `lapply()`, you collect the returned values and assign the result to a variable. Here, we use a `for` loop to add an "x" to each entry of variable `a`:

```r
a <- c("A", "B", "C", "D")
for(i in seq_along(a)){
  a[i] <- paste0(a[i], "x")
}
a
```

```
## [1] "Ax" "Bx" "Cx" "Dx"
```

If you want to get some feedback for each iteration while a loop is running, try to add a line like:

```r
cat("Current iterator: ", i, " | ", "Current content of object: ", a, "\n", sep = "")
```


You can also modify a data frame. Consider the following example:

```r
a <- c("A", "B", "C", "A", "B", "A", "A")
b <- c("X", "X", "X", "X", "Y", "Y", "Y")
c <- c(1, 2, 3, 4, 5, 6, 7)
d <- c(10, 20, 30, 40, 50, 60, 70)
df <- data.frame(Cat1 = a, Cat2 = b, Val1 = c, Val2 = d)
```

We want to convert the character values in `Cat1` and `Cat2` to lowercase and replace the numeric values in `Val1` and `Val2` with their square roots. The loop processes one column at a time, using `tolower()` for character columns and `sqrt()` for numeric columns. Instead of writing `seq(4)`, we can use `seq_len(ncol(df))` to get the column positions, including no positions when the data frame has zero columns:

```r
for(i in seq_len(ncol(df))){
  if(is.character(df[,i])){
    df[,i] <- tolower(df[,i])
    } else if(is.numeric(df[,i])){
      df[,i] <- sqrt(df[,i])
      }
  }
```

The variable `i` selects the current column with `df[,i]`. If the column contains character values, `tolower()` replaces them with lowercase values. If it is numeric, `sqrt()` replaces its values with their square roots.
In the end, the data frame looks like this:

```r
df

##   Cat1  Cat2    Val1     Val2
## 1    a    x   1.000000   3.162278
## 2    b    x   1.414214   4.472136
## 3    c    x   1.732051   5.477226
## 4    a    x   2.000000   6.324555
## 5    b    y   2.236068   7.071068
## 6    a    y   2.449490   7.745967
## 7    a    y   2.645751   8.366600
```


## Building a new variable with a loop

To keep the original values and store the results separately, create a result variable before the loop and update it during each iteration.

For example, convert the elements of `a` to lowercase and store them in a new vector:

```r
test <- character()   # this is an empty character vector
for(i in seq_along(a)){
  test <- c(test, tolower(a[i]))
}

test

## [1] "a" "b" "c" "a" "b" "a" "a"
```
This task can also be implemented without a loop; here it illustrates how to collect results.

To collect results in a data frame, return to the original example:

```r
a <- c("A", "B", "C", "A", "B", "A", "A")
b <- c("X", "X", "X", "X", "Y", "Y", "Y")
c <- c(1, 2, 3, 4, 5, 6, 7)
d <- c(10, 20, 30, 40, 50, 60, 70)
df <- data.frame(Cat1 = a, Cat2 = b, Val1 = c, Val2 = d)
```

For this example, initialize a new data frame with one column and the required number of rows:

```r
df_new <- data.frame(Col1 = rep(NA, nrow(df)))

df_new

##   Col1
## 1   NA
## 2   NA
## 3   NA
## 4   NA
## 5   NA
## 6   NA
## 7   NA
```
The new data frame has the same number of rows as `df`, given by `nrow(df)`. Its first column is filled with `NA` values as placeholders.

Let's start with the loop:

```r
for(i in seq_len(ncol(df))){
  if(is.character(df[,i])){
    df_new[,i] <- tolower(df[,i])
    } else if(is.numeric(df[,i])){
      df_new[,i] <- sqrt(df[,i])
      }
  }
```

The converted values are now stored in `df_new`, leaving `df` unchanged. Inspect the result:

```r
df_new

##   Col1 V2       V3       V4
## 1    a  x 1.000000 3.162278
## 2    b  x 1.414214 4.472136
## 3    c  x 1.732051 5.477226
## 4    a  x 2.000000 6.324555
## 5    b  y 2.236068 7.071068
## 6    a  y 2.449490 7.745967
## 7    a  y 2.645751 8.366600
```

Columns two to four (`V2`, `V3`, and `V4`) were created when `i` in `df_new[,i]` was 2, 3, or 4.

Restore the original column names from `df`:

```r
colnames(df_new) <- colnames(df)
str(df_new)
```

```
## 'data.frame':	7 obs. of  4 variables:
##  $ Cat1: chr  "a" "b" "c" "a" ...
##  $ Cat2: chr  "x" "x" "x" "x" ...
##  $ Val1: num  1 1.41 1.73 2 2.24 ...
##  $ Val2: num  3.16 4.47 5.48 6.32 7.07 ...
```
## DIY loops - some tips {#diy-loops---some-tipps}

Sometimes it can be a little overwhelming to write a loop from top to bottom. That's why it makes sense to tackle the whole thing piece by piece. The following approach might be helpful.

1) Start with the structure of a for loop: `for (...) { ... }`. Indent the code inside the braces.

2) Take one piece of your data and define it as your data source.

3) Write down all the operations you want to perform within the loop. 

4) Identify which values change during each iteration and represent them with variables.

5) Think about how you want to save the output of each iteration. Create a result container, such as a list or matrix, outside the loop, and store the results there.

6) Consider using vectorized operations when possible to improve loop efficiency and reduce code complexity.

7) Debug and test the loop incrementally. Check for errors and unexpected behavior after each iteration. An invalid index can cause a "subscript out of bounds" error; missing values can also cause errors in conditions or calculations. Use `cat(i, "\n")` to identify the iteration where the loop stops, then inspect its input and operations.


{% include figure image_path="/assets/data/data/for_loop2.gif" caption="Animation of the plot process" alt="Animation of iterating over named data frames to fit a model, store its summary and save a plot for each data frame. The complete loop is given in the preceding code." %}


## Test what you've learned so far!

<iframe title="Interactive quiz: for-loops" src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit07-forloops.html" width="1090" height="600" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>






