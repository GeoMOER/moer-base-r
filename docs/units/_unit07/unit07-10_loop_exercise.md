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
