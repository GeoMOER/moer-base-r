---
title: "First Steps in R"
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u01/header.png
  image_description: "confused"
  caption: "Image by [slon_pics](https://pixabay.com/de/users/www_slon_pics-5203613/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2261021) [from pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2261021)"
---
*Taking your first steps in R with simple arithmetic operations.*

<!--more-->

## #Hashtag and Run!

Outside quoted text, **#** starts a comment in R. The text after it on the same line is not executed. Use comments to explain your code to yourself and others.

```r
# This is a comment. Comments are very helpful
# when you want to describe what's going on in your code.
# Use them often!
This is not a comment anymore. Be careful.

hello <- "Welcome to R" #the variable "hello" is storing the information "Welcome to R"
```

To run a line in an R script, place the cursor on that line and click the "Run" button in the script editor (red box in the following picture). Alternatively, press `CTRL + ENTER` on Windows/Linux or `CMD + ENTER` on a Mac. Select several lines first to run them together.

{% include figure image_path="/assets/images/unit_images/u01/gui_rstudio_exp2.png" caption="Hit the Run-Button." alt="RStudio script editor with the Run button highlighted; running selected code sends it to the console." %}

RStudio sends the selected code to the Console, where you see the commands and their output.
It looks like this:
```r
> hello <- "Welcome to R"
> hello
[1] "Welcome to R"
>
```
Here, you’ll also see on the left hand side the “>” symbol which means that R is ready to receive a new command. If a “+” is visible instead, this means that the command has not yet been completed, e.g. a parenthesis has not been closed.

## Creating scalar objects and simple arithmetic operations

The basic arithmetic operations are addition, subtraction, multiplication and division. Further, more complex operations include square roots, exponentiation and other operations. To control the order of operations, use parentheses "()". Note that square brackets "[]" cannot be used, because they are reserved for subsetting or indexing data structures like vectors, lists, data frames, and matrices, as you will see in Unit 04.

Examples of mathematical operations in R. This is using R like a calculator.


| Operator  | Description                          | Example   |
|-----------|--------------------------------------|-----------|
| **Arithmetic Operators** ||
| +         | Addition                             | `x + y` |
| -         | Subtraction                          | `x - y` |
| *         | Multiplication                       | `x * y` |
| /         | Division                             | `x / y` |
| ^ or **   | Exponentiation                       |  `x^y`  |
| x %% y    | Modulus (x mod y)                    | `x %% y` |
| %/%       | Integer division                     | `x %/% y`|
| **Math Functions** ||
| log()     | Logarithms, by default natural       | `log(x)` |
| exp()     | Exponential function                 | `exp(x)` |
| sqrt()    | Square-root                          | `sqrt(x)`|
| ^(1/n)    | nth roots                            | `x^(1/n)`|
| abs()     | Absolute value                       | `abs(x)` |
| sin()     | Sine                                 | `sin(x)` |
| cos()     | cosine                              | `cos(x)` |
| tan()     | Tangent                              | `tan(x)` |

This is what it looks like in R:

```
> 1 + 2
[1] 3
```
```
> 2 - 1
[1] 1
```
```
> 2 * 3
[1] 6
```
```
> 2 / 3
[1] 0,6666666666666667‬
```
```
> 2 ^ 3
[1] 8
```
```
> cos(2 ^ (3+2))
[1] 0.8342234
```


That [1] next to your result is a reminder that this line begins with the first value in your result. Some commands return more than one value, and their results may fill up multiple lines.



### Assigning values to objects

And now you have reached the core concept of every object-based programming language: assigning objects. This fundamental operation is remarkably straightforward. You type in the name of the object-to-be, an assignment operator, and the content you'd like to assign. In R, there are two assignment operators: <- and =. The <- operator is the more common and recommended way to assign objects in R. It's considered good practice because it makes your code more readable and is less likely to be confused with the equality operator ==, which is used for comparison.


```
> # Assign values to objects
> a <- 1+2 # addition/allocation, calculation is stored in object "a"
> a <- print the result
[1] 3
```

```
> # adding another object
> b <- 2-1
> b
[1] 1
>
> a + b # apply operators to objects
[1] 4
>
> c <- (a + b) * 2 # brackets
> c
[1] 8
```
And that is how information is stored in objects in an object-oriented programming language.
