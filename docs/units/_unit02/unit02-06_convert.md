---
title: Converting Types of Data
header:
  image: /assets/images/unit_images/u03/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---
<!--more-->

> “Errors using inadequate data are much less than those using no data at all.” – Charles Babbage

---

In R, vectors are automatically assigned to a certain data type, or the data type of a vector can be subsequently converted into another data type. The query, which data type it is, is made with a preceding `is.` (e.g.
`is.numeric()`). With a preceding `as.` one can change the data type of a vector (e.g. `as.numeric()`).

There are multiple classes that are grouped together as "numeric" classes. The two most common of which are double (for double precision floating point numbers) and integer. R will automatically convert between the numeric classes when needed, so for the most part it does not matter to the casual user whether the number 3 is currently stored as an integer or as a double. Most math is done using double precision, so that is often the default storage.

Sometimes you may want to specifically store a vector as integers if you know that they will never be converted to doubles (used as ID values or indexing) since integers require less storage space. But if they are going to be used in any math that will convert them to double, then it will probably be quickest to just store them as doubles to begin with.

The table below gives an overview of the different data types*.

| Data Type  | is.function | as.function |
|------------|-------------|-------------|
| numeric  | is.numeric()  | as.numeric()  |
| integer  | is.integer()  | as.integer() |
| double   | is.double()   | as.double() |
| character | is.character() | as.character() |
| factor    | is.factor() | as.factor() |
| logical   | is.logical() | as.logical() |
| NULL      | is.null() | as.null() |
| NA        | is.na()   | as.na()     |


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
  <p>*Info  <br>
  The generic function <code class="language-plaintext highlighter-rouge">is.na</code> indicates which elements are missing.    <br><br>
  
  The generic function <code class="language-plaintext highlighter-rouge">is.na <-</code> sets elements to NA.  <br><br>

  While factors, which are a unique feature of R, are not a separate data type like characters or numerics, they are a used to manage categorical data and maintain the integrity and order of those categories. 
  </p>
</div>
</body>
</html>

<i>Example</i>
```
value <- 23.5

is.numeric(value)
[1] TRUE

is.character(value)
[1] FALSE
```
```
color <- c("blue","red","red","yellow")
color
[1] "blue"   "red"    "red"    "yellow"

is.character(color)
[1] TRUE

color.factor <- as.factor(color)
color.factor
[1] blue   red    red    yellow
Levels: blue red yellow
```

Putting capital 'L' after an integer forces it to be stored as an integer.
```
is.numeric(1)
[1] TRUE

is.integer(1)
[1] FALSE

is.numeric(1L)
[1] TRUE

is.integer(1L)
[1] TRUE
```
<!--more-->


<!--
## Further reading

add some day
-->
