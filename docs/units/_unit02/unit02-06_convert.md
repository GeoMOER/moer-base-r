---
title: Converting Types of Data
header:
  image: /assets/images/unit_images/u03/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---
<!--more-->

{% include self-study-start.html %}

> “Errors using inadequate data are much less than those using no data at all.” – Charles Babbage

---

In R, vectors are automatically assigned to a certain data type, or the data type of a vector can be subsequently converted into another data type. The query, which data type it is, is made with a preceding `is.` (e.g.
`is.numeric()`). With a preceding `as.` one can change the data type of a vector (e.g. `as.numeric()`).

There are multiple classes that are grouped together as "numeric" classes. The two most common are double (for double precision floating point numbers) and integer. R will automatically convert between the numeric classes when needed, so for the most part it does not matter to the casual user whether the number 3 is currently stored as an integer or as a double. Most math is done using double precision, so that is often the default storage.

Sometimes you may want to specifically store a vector as integers if you know that they will never be converted to doubles (used as ID values or indexing) since integers require less storage space. But if they are going to be used in any math that will convert them to double, then it will probably be quickest to just store them as doubles to begin with.

The table below summarizes common checks and conversions*. The last row shows how to detect and assign missing values.

| Type or value | Test | Conversion or assignment |
|------------|-------------|-------------|
| numeric  | is.numeric()  | as.numeric()  |
| integer  | is.integer()  | as.integer() |
| double   | is.double()   | as.double() |
| character | is.character() | as.character() |
| factor    | is.factor() | as.factor() |
| logical   | is.logical() | as.logical() |
| NULL      | is.null() | as.null() |
| NA        | is.na()   | Assign `NA`, e.g. `x[2] <- NA` |


<div class="course-info">
  <p>*Info  <br>
  The generic function <code class="language-plaintext highlighter-rouge">is.na</code> indicates which elements are missing.    <br><br>
  
  There is no Base R function <code class="language-plaintext highlighter-rouge">as.na()</code>. To mark a value as missing, assign <code class="language-plaintext highlighter-rouge">NA</code>, for example <code class="language-plaintext highlighter-rouge">x[2] &lt;- NA</code>. The replacement form <code class="language-plaintext highlighter-rouge">is.na(x) &lt;- 2</code> also marks the second element as missing.  <br><br>

  While factors, which are a unique feature of R, are not a separate data type like characters or numerics, they are used to manage categorical data and maintain the integrity and order of those categories.
  </p>
</div>

<i>Example</i>
```r
value <- 23.5

is.numeric(value)
```

```text
[1] TRUE
```

```r
is.character(value)
```

```text
[1] FALSE
```
```r
color <- c("blue","red","red","yellow")
color
```

```text
[1] "blue"   "red"    "red"    "yellow"
```

```r
is.character(color)
```

```text
[1] TRUE
```

```r
color.factor <- as.factor(color)
color.factor
```

```text
[1] blue   red    red    yellow
Levels: blue red yellow
```
Putting capital 'L' after an integer forces it to be stored as an integer.
```r
is.numeric(1)
```

```text
[1] TRUE
```

```r
is.integer(1)
```

```text
[1] FALSE
```

```r
is.numeric(1L)
```

```text
[1] TRUE
```

```r
is.integer(1L)
```

```text
[1] TRUE
```
<!--more-->


<!--
## Further reading

add some day
-->
