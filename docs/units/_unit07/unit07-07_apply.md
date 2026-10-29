---
title: The apply family
order: 7
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "apply"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

{% include self-study-start.html %}

For loops are a flexible way to repeat tasks. The apply family offers another approach that can make the code shorter and easier to read.

Functions in the apply family differ in the input structures they accept and the output structures they return.

A quick review of data structures:

```r
vector.letter <- LETTERS[1:10]
vector.number <- 1:10
matrixM <- matrix(1:10, 10, byrow = TRUE)
dataframe <- as.data.frame(matrixM)
dataframe$Name <- vector.letter
list.all <- list(vector.number, matrixM, dataframe)
names(list.all) <- c("vector", "matrix", "dataframe")

```

**`lapply()`** applies a function to each element of a list or vector and returns a list. In this example, the supplied function calculates the mean tree height for each data frame in the list:


```r
# Sample forest data
forest_data <- list(
  deciduous = data.frame(tree_type = "deciduous", tree_height = c(15, 20, 18, 22, 19)),
  coniferous = data.frame(tree_type = "coniferous", tree_height = c(25, 28, 24, 30, 27)),
  mixed = data.frame(tree_type = "mixed", tree_height = c(18, 22, 20, 24, 21))
)

# Name the list elements
names(forest_data) <- c("deciduous", "coniferous", "mixed")

# Calculate the mean tree height for each forest type using lapply
mean_heights <- lapply(forest_data, function(x) {
  mean(x$tree_height)
})

print(mean_heights)
```

For more examples, have a look at the next page.

**`sapply()`** tries to simplify the results to a vector or matrix. If the results cannot be simplified, it returns a list:

```r
sapply(1:10, function(x) x + 1)

```
**`apply()`** applies a function over selected dimensions of a matrix or array. For a matrix, `MARGIN = 1` applies the function to each row, and `MARGIN = 2` applies it to each column.

When you pass a data frame to `apply()`, R first converts it to a matrix. All values in a matrix have the same type. If the data frame contains both numeric and character columns, the matrix contains character values, so functions such as `sum()` cannot be used directly. Select only the numeric columns before calculating sums.

```r
# Create a sample matrix
mat <- matrix(1:12, nrow = 3, byrow = TRUE)

# Print the matrix
print(mat)
# Output:
#      [,1] [,2] [,3] [,4]
# [1,]    1    2    3    4
# [2,]    5    6    7    8
# [3,]    9   10   11   12

# Calculate row sums using apply
row_sums <- apply(mat, 1, sum)

# Calculate column sums using apply
col_sums <- apply(mat, 2, sum)

# Print the row sums
cat("Row Sums: ", row_sums, "\n")

# Print the column sums
cat("Column Sums: ", col_sums, "\n")


```

**`tapply()`** applies a function to values split into groups:

```r
# Sample forest data
forest_data <- data.frame(
  tree_type = c("deciduous", "coniferous", "deciduous", "coniferous", "deciduous"),
  tree_height = c(15, 25, 18, 28, 22)
)

# Calculate the mean tree height for each tree type using tapply
mean_heights <- tapply(forest_data$tree_height, forest_data$tree_type, mean)

# Print the result
print(mean_heights)

```
## Test what you've learned so far!

<iframe title="Interactive quiz: the apply family" src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit07-apply.html" width="1090" height="600" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
