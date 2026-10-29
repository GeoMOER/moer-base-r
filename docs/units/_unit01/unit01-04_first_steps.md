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

hello <- "Welcome to R" #the variable "hello" is storing the information "Welcome to R"
```

Text such as `This is not a comment anymore.` without a leading `#` or quotation marks is not valid R code. Running it produces a syntax error. To keep a note in your script, add `#` at the start of the line; to store text as a value, put it in quotation marks as in `hello` above.

To run a line in an R script, place the cursor on that line and click the "Run" button in the script editor (red box in the following picture). Alternatively, press `CTRL + ENTER` on Windows/Linux or `CMD + ENTER` on a Mac. Select several lines first to run them together.

{% include figure image_path="/assets/images/unit_images/u01/gui_rstudio_exp2.png" caption="Hit the Run-Button." alt="RStudio script editor with the Run button highlighted; running selected code sends it to the console." %}

RStudio sends the selected code to the Console, where you see the commands and their output.
The following is a console transcript, not a block to paste into a script. The `>` symbols are prompts supplied by R:
```text
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

Run these commands separately. Each R code block is followed by its console output:

```r
1 + 2
```
```text
[1] 3
```
```r
2 - 1
```
```text
[1] 1
```
```r
2 * 3
```
```text
[1] 6
```
```r
2 / 3
```
```text
[1] 0.6666667
```
```r
2 ^ 3
```
```text
[1] 8
```
```r
cos(2 ^ (3 + 2))
```
```text
[1] 0.8342234
```

R code uses a decimal point. The number of digits printed depends on the display settings; the stored result is more precise than this default output.

That [1] next to your result is a reminder that this line begins with the first value in your result. Some commands return more than one value, and their results may fill up multiple lines.



### Assigning values to objects

And now you have reached the core concept of every object-based programming language: assigning objects. This fundamental operation is remarkably straightforward. You type in the name of the object-to-be, an assignment operator, and the content you'd like to assign. In R, there are two assignment operators: <- and =. The <- operator is the more common and recommended way to assign objects in R. It's considered good practice because it makes your code more readable and is less likely to be confused with the equality operator ==, which is used for comparison.


```r
# Store the result of the addition in a, then display it
a <- 1 + 2
a
```
```text
[1] 3
```

```r
# Store another result
b <- 2 - 1
b
```
```text
[1] 1
```

```r
a + b
```
```text
[1] 4
```

```r
c <- (a + b) * 2
c
```
```text
[1] 8
```

Assignment stores a result under a name. Typing that name, or calling `print(a)`, displays the stored value.
