---
title: Loop and conquer
order: 10
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "loop"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

{% include self-study-start.html %}

This worksheet provides practice with conditional statements and loops.

## Things you need for this worksheet
  * [R](https://cran.r-project.org/){:target="_blank"} — the interpreter can be installed on any operating system.
  * [RStudio](https://www.rstudio.com/){:target="_blank"} — we recommend using RStudio for (interactive) programming with R.

## Loop till you drop
This is a self-study exercise; no submission is required. Work through the tasks in R or RStudio and save your code in an R script (`.R`). If you already use R Markdown, you can use a `.Rmd` document and render it to HTML instead:

1. Implement an if-then-else statement that prints "larger" if the number provided as variable `n` is larger than 1 and "equal or smaller" otherwise.
1. Extend a copy of the above statement (i.e. copy the entire if-then-else statement and include it a second time in your script in order to preserve both versions) that prints "equal" and "smaller" separately, in addition to "larger".
1. Implement an if-then-else statement that prints "even" if the number provided as variable `n` is even and prints "odd" otherwise.
1. Place a copy of the extended larger/equal/smaller statement in a for loop. Iterate over values of `n` that are less than 1, equal to 1, and greater than 1 to demonstrate all three branches.
1. Extend a copy of the loop so that the labels ("larger", "equal", or "smaller") are stored in a vector instead of being printed during each iteration. Print the vector after the loop.
1. Extend a copy of the modified loop to store the results in a list instead of a vector. Print the list after the loop.
1. Change the modified loop to use `lapply()` instead of a for loop. Save the returned results in a variable and print them after the call.
1. Finally, add one line after the call to flatten the returned list into a vector. Leave the call itself unchanged.

Save your work in a local project folder. Run the code again to check all branches of your conditions, inspect the stored results, and compare the list and vector outputs. If you chose R Markdown, render the document to check that it runs from beginning to end.

## Hints and expected results

Use `values <- c(0, 1, 2)` for the three-way comparisons. Expect `"smaller", "equal", "larger"` in that order. For the parity task, use whole numbers; a remainder of zero after division by 2 identifies an even integer. The vector/list tasks should preserve one result per input value.

<details markdown="1">
<summary>Hint for tasks 1–3</summary>

An `if` tests one value. Compare `n > 1`, then `n == 1` where needed. For parity, use `n %% 2 == 0`; the input should be an integer-valued number.

</details>
<details markdown="1">
<summary>Hint for tasks 4–8</summary>

Use `seq_along(values)` when writing results by position. Create a character vector or list before filling it. `lapply()` collects returned labels in a list; `unlist()` flattens this simple list of single strings into a vector.

</details>
<details markdown="1">
<summary>One worked solution to tasks 1–8</summary>

### Tasks 1–3: branches

```r
n <- 2
if (n > 1) print("larger") else print("equal or smaller")

n <- 1
if (n > 1) {
  print("larger")
} else if (n == 1) {
  print("equal")
} else {
  print("smaller")
}

n <- 2
if (n %% 2 == 0) print("even") else print("odd")
```

These calls print `larger`, `equal` and `even`. Also try 0 and 1 in the parity test; they give even and odd. Keep the three-way comparison at the boundary 1, not at 0.

### Task 4: repeat all branches

```r
values <- c(0, 1, 2)
for (n in values) {
  if (n > 1) print("larger") else if (n == 1) print("equal") else print("smaller")
}
```

### Tasks 5–6: collect the results

```r
labels <- character(length(values))
for (i in seq_along(values)) {
  n <- values[i]
  if (n > 1) labels[i] <- "larger" else if (n == 1) labels[i] <- "equal" else labels[i] <- "smaller"
}
labels
label_list <- vector("list", length(values))
for (i in seq_along(values)) {
  n <- values[i]
  if (n > 1) label_list[[i]] <- "larger" else if (n == 1) label_list[[i]] <- "equal" else label_list[[i]] <- "smaller"
}
label_list
```

The labels are the same, but `labels` is character and `label_list` is a list. `[[i]]` stores one component in the list.

### Tasks 7–8: return and flatten

```r
applied <- lapply(values, function(n) {
  if (n > 1) return("larger")
  if (n == 1) return("equal")
  return("smaller")
})
flattened <- unlist(applied)
identical(labels, flattened)
identical(label_list, applied)
```

Both comparisons return `TRUE`. The loop and `lapply()` are alternative ways to collect the same labels; flattening changes the structure, not the label meanings.

</details>

## Practise writing a reusable function

Without copying the solution, turn the three-way comparison into a function with arguments `n` and `threshold`, defaulting to 1. For this task, `n` is one non-missing numeric value. Test smaller/equal/larger values and a different threshold, then call your function with `lapply()`.

<details markdown="1">
<summary>Compare a function solution</summary>

```r
classify_number <- function(n, threshold = 1) {
  if (n > threshold) return("larger")
  if (n == threshold) return("equal")
  return("smaller")
}
lapply(c(0, 1, 2), classify_number)
lapply(c(0, 1, 2), classify_number, threshold = 2)
```

The first result contains smaller/equal/larger; the second contains smaller/smaller/equal. This simple function assumes one known numeric value per call. Before extending it to missing values or empty input, decide whether to return a missing label or report an error; neither policy follows automatically from this example.

</details>

**Ready to continue:** run your saved script in a fresh R session and explain why its list/vector comparisons succeed. There is no submission or examination.
