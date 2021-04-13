---
title: "First Steps in R"
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u01/header.png
  image_description: "confused"
  caption: "Image by [slon_pics](https://pixabay.com/de/users/www_slon_pics-5203613/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2261021) [from pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2261021)"
---
*Making your first steps in R with simple arithmetic operations.*

<!--more-->

## #Hashtag and Run!

R treats the hashtag character, **#**, in a special way. It will not compile anything that follows a # on a line. This makes hashtags very useful for adding comments and annotations to your code. You will be able to read the comments, but your computer will pass over them.

```r
# This is a comment. Comments are very helpful
# when you want to describe what's going on in your code.
# Use them often!
This is not a comment anymore. Be careful.

hello <- "Welcome to R" #the variable "hello" is storing the information "Welcome to R"
```

To run a chunk, you can hit the "Run" arrow to the right in the first Window (following picture, red box), or put your cursor inside the chunk and then hit `CTRL + ENTER` on Windows/Linux or `CMD + ENTER` on a Mac.

{% include figure image_path="/assets/images/unit_images/u01/gui_rstudio_exp2.png" caption="Hit the Run-Button." %}

The output of the code will print below the chunk in the second Window (Console).

```r
hello <- "Welcome to R"
print(hello)
```
```r
## Welcome to R
```

## Creating scalar objects and simple arithmetic operations

The basic arithmetic operations are addition, subtraction, multiplication and division, furthmore square roots, exponentiation and some other.

Examples of arithmetic operations in R. This is using R like a calculator.
```r
1 + 2
[1] 3
```
```r
2 - 1
[1] 1
```
```r
2 * 3
[1] 6
```
```r
2 / 3
[1] 0,6666666666666667‬
```
```r
2 ^ 3
[1] 8
```

That [1] next to your result is a reminder that this line begins with the first value in your result. Some commands return more than one value, and their results may fill up multiple lines.

## Assigning values to objects
```r
# Assign values to objects
a <- 1+2 # addition/allocation, calculation is stored in object "a"
a <- print the result
[1] 3
```

```r
# adding another object
b <- 2-1
b
[1] 1

a + b # apply operators to objects
[1] 4

c <- (a + b) * 2 # brackets
c
[1] 8
```
And that is how information is stored in objects.
Let's move to the next unit.
