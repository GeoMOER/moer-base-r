---
title: "Types of Objects"
toc: true
---

<!--more-->

You may like to store information of various data types like character, integer, floating point, Boolean etc. Based on the data type of a variable, the operating system allocates memory and decides what can be stored in the reserved memory.

In contrast to other programming languages like C and java in R, the variables are not declared as some data type. The variables are assigned with R-Objects and the data type of the R-object becomes the data type of the variable. There are many types of R-objects. The frequently used ones are:

*	Vectors
*	Lists
*	Matrices
*	Arrays
*	Factors
*	Data Frames

The simplest of these objects is the vector object and there are six data types of these atomic vectors, also termed as six classes of vectors. The other R-Objects are built upon the atomic vectors.

| Data Type in R   | Example | Data Type from previous lesson |
|------------|----------|----------|
| integer    |1; 15 ; 1984297 | int |
| numeric    |1.15 ; 1007.28 ; 0.0001 | float |
| character  |© ; H ; π ; "Hello World"  ;   "Ursus maritimus"  ;   "black"         | character combines character and strings |
| logical    |true  ;   false         | boolean |

------
# Variables
Variables are the core of any R program. They contain the information we calculate with and also the calculated results. They also offer the possibility to label data with meaningful names, so that the code is easier to understand. It is helpful to think of variables as containers that hold information. Their sole purpose is to label and store data which  then can be used across the code.

**How to name a variable?**

Even though data is very diverse, variables cannot take every name. This is because variables must be unique to the computer. They can contain letters, numbers and underscores (_)_. All other characters are not allowed (no spaces). This restriction is important because R has to understand the input data furthermore it has to be unique for the program. For example, if minus signs (-) were allowed for variables (which they are not!), there would be an ambiguity with the variable name `all-animals`. R would not know whether we meant the variable `all-animals` or whether we wanted to subtract the variable `animals` from the variable `all`.

Instead, we could call our variable `all_animals`, `AllAnimals`, `allanimals`, `Allanimals` or `allAnimals`.

Note that R distinguishes between upper and lower case for variable names. `allAnimals` and `AllAnimals` are not the same variable and it is not possible to switch them.

**How to define variables?**

The assignment operator looks like an arrow (<-) and is used to assign values to variables. It is built through a smaller-than (or greater-than)-symbol and a minus.
In R there are several possibilities to define a variable:

```r
# Assign the value y to variable x
x <- value y
value y -> x
```
These two do the same: they assign a value to the variable x, but the first variant is used much more often than the second.

Second Example:
```r
# Assign the value "Hello World" to variable "greeting"
greeting <- "Hello World."

#show content of variable "greeting"
greeting
[1] Hello World.
```

-----

# Vectors
If you want to store more than one value to a variable you need a vector. It is a basic data structure and contains elements of the same type. The data types can be logical, integer, double and character.

When you want to create a vector with more than one element, you need to use the `c()` function which means to combine the elements into a vector (c for combine).


```r
apple <- c("red", "green","yellow")
apple
```
```r
[1] "red"    "green"  "yellow"
```

A vector’s type can be checked with the `typeof()` function. apple is a word not a number therefore it is a character (in other words a string).

```r
# Ask for the class of the vector
apple <- c("red", "green","yellow")
typeof(apple)
```
```r
[1] "character"
```

Another important property of a vector is its length. This is the number of elements in the vector and can be checked with the function `length()`. In this case the length is 3. Three Values for "red", "green" and "yellow".

```r
#Ask for the length of the vector
apple <- c("red", "green","yellow")
length(apple)
```
```r
[1] 3
```

-----

# Lists
A list is an R-object which can contain many different types of elements inside it like vectors, a matrix, functions and even another list inside it.
The list is created using the `list()` function.

```r
# Create a list.
list1 <- list(c(2,5,3),21.3,sin)

# Print the list.
print(list1)
```

When we execute the above code, it produces the following result:

```r
[[1]]
[1] 2 5 3

[[2]]
[1] 21.3

[[3]]
function (x)  .Primitive("sin")
```

-----

# Matrix
A matrix is a two-dimensional rectangular data set. It can be created using a vector input to the matrix function.

{% include figure image_path="/assets/images/unit_images/u01/u04\Matrix.png" caption="A Matrix." %}
C:\Users\Mandy\Google Drive\Uni\HiWi\PROJECT\base_r_simple\docs\assets\images\unit_images\

```r
# Create a matrix.
M = matrix( c('a','a','b','c','b','a'), nrow = 2, ncol = 3, byrow = TRUE)
print(M)
```

When we execute the above code, it produces the following result −

```r
     [,1] [,2] [,3]
[1,] "a"  "a"  "b"
[2,] "c"  "b"  "a"
```
















Let's move on...

<!--
## Further reading

add some day
-->
