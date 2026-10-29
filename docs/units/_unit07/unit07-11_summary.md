---
title: "Summary"
order: 11
unit_summary: true
toc: TRUE
published: TRUE
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "loop"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

Check that you can combine comparisons, decisions, repetition, and functions into a reusable sequence of operations.

<!--more-->

{% include self-study-start.html %}

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

## Try it yourself {#practice}

Use the [worksheet]({{ '/unit07/unit07-10_loop_exercise.html' | relative_url }}) for branches, stored loop results and a reusable function. For a separate `while` check, start a counter at 0, record its value while it is less than 6, and increase it by 2 on each iteration. Predict the recorded values and the final counter before running it.

<details markdown="1">
<summary>Compare the while-loop check</summary>

```r
counter <- 0
recorded <- numeric()
while (counter < 6) {
  recorded <- c(recorded, counter)
  counter <- counter + 2
}
recorded
counter
```

The recorded vector is `0, 2, 4`, and the final counter is 6. Removing the update would prevent termination; do not run that variant. With a starting counter of 6, the body runs zero times. Use RStudio's Stop button or Esc if a loop runs unintentionally.

</details>

**Ready to continue:** you can trace a condition, write a function, compare list/vector results and explain how a loop exits.

## Check your understanding

Try these questions before opening the suggested answers.

1. What must change inside a `while` loop to allow it to stop?
2. What structure does `lapply(measurements, classify_mean)` return? What would `sapply()` try to do differently?
3. How would you classify both sites using a threshold of 15? Predict both labels before running the code.

<details markdown="1">
<summary>Suggested answers</summary>

1. Something that determines the condition must eventually change so the condition becomes `FALSE`, or an explicit `break` must be reached. An initially false condition gives zero iterations. An unchanged true condition without an exit can run indefinitely.
2. `lapply()` returns a named list with one label per site here. `sapply()` would try to simplify these single-string results into a named character vector; inspect the structure instead of assuming simplification always succeeds.
3. Use `lapply(measurements, classify_mean, threshold = 15)`. The means are 9 and 14, so both labels are `"below threshold"`. Arguments after the function are passed to each call.

</details>


Revisit [decisions]({{ '/unit07/unit07-04_if-then-else.html' | relative_url }}), [lapply]({{ '/unit07/unit07-08_lapply.html' | relative_url }}), and [writing functions]({{ '/unit07/unit07-06_functions.html' | relative_url }}) if needed.
