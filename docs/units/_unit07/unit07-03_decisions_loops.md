---
title: Decisions and Loops
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "loop"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

Decision structures are like junctions in the analysis workflow and decide which way to go during runtime. Loops are the workhorses for repeating the same computations on different subsets of the data.

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
Except for the lapply-loop (representative for R's entire *apply* family), the following loops exist in all programming languages.

### For-loop
Useful if your computation needs the same sequential workflow for different variables or subsets.
```
# Pseudocode
for(<iteration variable> in <control vector>){
    <do something using the iteration variable>
}
```

### Lapply-loop
The *apply* family of loops is special to R. One of the most used loops of this family is `lapply`. It is largely compareable to a for-loop but calls a function for each iteration and returns a list of the function's results. Hence, it is useful if your computation needs the same sequential workflow for different variables or subsets *and* you want the results returned in a list.

```
# Pseudocode
lapply(<control vector>, function(<iteration variable>){
    <do something using the iteration variable>
    return(<result>)
})
```

### While-loop
Useful if your computation needs the same sequential workflow for a variable or subsets but you only know how often it is needed when the loop is already running.

```
# Pseudocode
while("<some logical expression with iteration variable>"){
    <do something using iteration variable and update it>
}
```
------

## What loop to choose?

{% include figure image_path="/assets/images/unit_images/u07/which-loop-to-choose.jpg" alt="Flow chart showing a decision tree which helps to choose the right loop." %}

One rule for choosing between a while- and a for-loop is that __while-loops__ are used when the number of iterations is __unknown__ and __for-loops__ are used when the number is __known__.

Let’s go through a few examples of each:

* Use a for-loop to iterate over an array.
* Use a for-loop when you know the loop should execute *n* times.
* Use a while-loop for reading a file into a variable.
* Use a while-loop when asking for user input.
* Use a while-loop when the increment value is nonstandard.
