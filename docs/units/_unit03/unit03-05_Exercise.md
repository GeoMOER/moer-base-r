---
title: "Exercise 1"
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u03/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---
Try Exercise 1 yourself!

<!--more-->

{% include self-study-start.html %}
Now it's your turn.

<!-- <iframe src="https://h5p.org/h5p/embed/956362" width="1090" height="300" frameborder="0" allowfullscreen="allowfullscreen"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script> -->

## Tasks
See the solution to the following task on the next page.

<!-- ### Task 1:
Summarize in your own words what these functions do and how they work:
* mean()
* sd()
* sqrt()
* log()
* min()
* max()
* range()
* sum()
* summary()
* plot()
* boxplot()

<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
div {
  margin-bottom: 15px;
  padding: 4px 12px;
}

.info {
  background-color: #e7f3fe;
  border-left: 6px solid #2196F3;
}

</style>
</head>
<body>
<div class="info">
  <p><strong>Hint</strong>
  <br>
      You may need some ?help...
  </p>
</div>
</body>
</html>


### Task 2: Root Square
Calculate the root square of 10 + 6

 -->
### Task: Data about height and weight {#task--data-about-size-and-weight}
Create three vectors named `height`, `weight` and `state`. For this exercise, interpret the heights in metres and the weights in kilograms; `state` contains German federal-state labels.

* `height` (m): 1.67, 1.8, 1.58, 1.83, 1.65, 1.74, 1.8, 1.6, 1.76, 1.8
* `weight` (kg): 62, 78, 56, 85, 58, 70, 70, 120, 62, 90
* `state`: NRW, Bayern, Sachsen, Hessen, Hessen, MV, Hessen, Brandenburg, Hessen, Berlin

Each vector has ten entries. Entries in the same position belong to the same person, so keep the given order. Print each vector to inspect its contents.

<div class="info">
  <p><strong>Hint</strong>
  <br>
      Use the lowercase object names given above. Combine values with <code>c(...)</code>. Write heights and weights as numbers, using a decimal point where needed, and put each state label in quotation marks.
  </p>
</div>

## Choose and inspect structures

Use the three ten-entry vectors above. Keep entries for each person together.

1. Create `people`, a data frame with numeric columns `height_m` and `weight_kg` and a factor column `state`. Inspect `str()`, `dim()` and the levels; expect ten rows, three columns and seven state labels.
2. Create a numeric matrix from just the height and weight vectors. Predict its dimensions and type, and explain why the mixed table is better kept as a data frame. Separately create an array from `1:12` with dimensions `2, 3, 2`; what does each dimension count?
3. Make a list containing `people` and a separate character vector naming the two measurement units. Predict the list's length and why its components need not have equal lengths.
4. Predict the type of `c(height[1], state[1])` and `as.matrix(people)` before trying them. What meaning or type information needs care when combining numbers with labels? Explain why `as.numeric(people$state)` does not recover state names.

<details markdown="1">
<summary>Hints</summary>

Use `data.frame()`, `factor()`, `cbind()`, `array()` and `list()`. The matrix has two numeric columns; the mixed table does not. A factor code points to a level label. `str()` and `typeof()` help check your predictions.

</details>

**Self-check:** every original height and weight still belongs to the same state entry. Compare with the [worked solution]({{ '/unit03/unit03-06_Solution.html' | relative_url }}) after attempting the tasks; equivalent correct code is welcome.
