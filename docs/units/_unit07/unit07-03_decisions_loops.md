---
title: Decisions and loops
order: 3
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "loop"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

Conditional statements choose which code to run based on a logical condition. Loops repeat operations for different values or subsets of data.

## If-then-else
If-then-else decisions are useful if your computation needs different workflows for different variable values.
```
# Pseudocode
if("<some logical (and boolean) expression>"){
    "<do something>"
} else {
    "<do something else>"
}
```

## Loops
For loops and while loops are common control structures in many programming languages. In R, the apply family provides functions for repeating operations over data structures.

### For loops {#for-loop}
Useful if your computation needs the same sequential workflow for different variables or subsets.
```
# Pseudocode
for(<iteration variable> in <control vector>){
    <do something using the iteration variable>
}
```

### Loops with lapply {#lapply-loop}
The apply family is part of R. One frequently used member is `lapply()`, which calls a function for each input element and returns a list of results. Use it when you want to repeat an operation and collect the results in a list.

```
# Pseudocode
lapply(<control vector>, function(<iteration variable>){
    <do something using the iteration variable>
    return(<result>)
})
```

### While loops {#while-loop}
Useful when an operation must be repeated while a condition remains true and the number of iterations may not be known in advance.

```
# Pseudocode
while("<some logical expression with iteration variable>"){
    <do something using iteration variable and update it>
}
```
------

## What loop to choose?

{% include figure image_path="/assets/images/unit_images/u07/which-loop-to-choose.svg" alt="Decision tree: for a known sequence of iterations use a for-loop; when applying a function and collecting a list use lapply; when repetition depends on a condition use a while-loop." %}

As a general guide, use a for loop to iterate over a known sequence. Use a while loop when repetition depends on a condition checked during execution.

Let’s go through a few examples of each:

* Use a for loop to iterate over a known sequence of values.
* Use a for loop when you know the loop should execute *n* times.
* Use a while loop when reading records until the end of a file.
* Use a while loop when asking for user input until it meets a condition.
* Use a while loop when the next step depends on the current result.
