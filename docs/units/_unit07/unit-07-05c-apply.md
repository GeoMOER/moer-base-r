---
title: apply
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "apply"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

For-loops are very flexible and a good start to get to know the principle, but there's another way to repeat tasks, which can be a bit more effective and reduces the amount of code. Introducing the *apply*-family.

The apply functions are specific to the data type or have a specific data type as output.

A quick review of data types:

```r
vector.letter <- LETTERS[1:10]
vector.number <- 1:10
matrixM <- matrix(1:10, 10, byrow = TRUE)
dataframe <- as.data.frame(matrixM)
dataframe$Name <- vector.letter
list.all <- list(vector.number, matrixM, dataframe)
names(list.all) <- c("vector", "matrix", "dataframe")

```

**lapply** is commonly used with vectors and lists, and its output is a list.
It will apply the function, which is given in the curly brackets, to each element of a list:


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

**sapply** simplifies the output into a vector. However, it's not always applicable and might just as well return a list:

```r
sapply(1:10, function(x) x + 1)

```
**apply** can be used for arrays, data frames and matrices. Important is to add the MARGIN - apply will then apply the function along that, e.g. if you set the MARGIN to 2, R would apply the function along the rows of your data frame/array.

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

**tapply** is used for group-based calculations:

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

<iframe src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit07-apply.html" width="1090" height="600" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script> 
