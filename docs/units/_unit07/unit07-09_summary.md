---
title: "Summary"
unit_summary: true
toc: TRUE
published: TRUE
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "loop"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

You can now combine comparisons, decisions, repetition, and functions into a reusable sequence of operations.

<!--more-->

## What you learned

| Tool | Purpose | Important check |
|---|---|---|
| Arithmetic and comparison operators | Calculate values and form logical conditions. | Use `==` for equality and `<-` for assignment; inspect missing values. |
| `if` / `else` | Choose a branch for one decision. | The condition must be one non-missing logical value. |
| `for` | Repeat for each value in a sequence. | Make the input sequence and result storage explicit. |
| `while` | Repeat while a condition is true. | Update the condition so the loop can finish. |
| `repeat` with `break` | Repeat until an explicit exit is reached. | Ensure the exit can actually be reached. |
| A function | Give a reusable operation arguments and a return value. | Define inputs, defaults, and the result clearly. |

Use `&` and `|` for element-by-element logical operations. `&&` and `||` are intended for single logical decisions and evaluate their second expression only when needed. A vector condition should not be passed directly to `if`.

## Repetition with the apply family

- `apply(x, 1, FUN)` works over matrix rows; `apply(x, 2, FUN)` works over columns. Applied to a data frame, it first converts it to a matrix, which can change numeric columns to character when text is present.
- `lapply(x, FUN)` returns a list with one result per input element. For a data frame, those elements are its columns.
- `sapply(x, FUN)` tries to simplify the results. Check the result's structure rather than assuming it will always be a vector.
- `tapply(x, group, FUN)` applies a function to values split by groups.

## A short recap in R

This function compares the mean of a numeric input with a threshold. For this small example, the inputs contain no missing values.

```r
classify_mean <- function(x, threshold = 10) {
  if (mean(x) >= threshold) {
    return("at or above threshold")
  } else {
    return("below threshold")
  }
}
measurements <- list(site_A = c(8, 10), site_B = c(12, 16))
result <- lapply(measurements, classify_mean)
result
```

The named list contains `"below threshold"` for site A and `"at or above threshold"` for site B. The default threshold is 10; supply another value as an argument when needed. In a function, ordinary `<-` assignments are local to that call. Return results and assign them in the calling code, as with `result` here.

Do not assume every input is valid. For example, `mean()` returns `NA` for data containing missing values unless you choose a handling rule; an `if` condition based on that result cannot decide a branch. Define how missing or empty input should be handled before reusing a function on a larger dataset.

## Check your understanding

1. What must change inside a `while` loop to allow it to stop?
2. What structure does `lapply(measurements, classify_mean)` return? What would `sapply()` try to do differently?
3. How would you classify both sites using a threshold of 15? Predict both labels before running the code.

Revisit [decisions]({{ '/unit07/unit07-07_if-then-else.html' | relative_url }}), [lapply]({{ '/unit07/unit07-06_lapply.html' | relative_url }}), and [writing functions]({{ '/unit07/unit-07-05d-function.html' | relative_url }}) if needed.
