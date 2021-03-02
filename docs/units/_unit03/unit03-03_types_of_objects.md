---
title: "Object Types"
toc: true
header:
  image: /assets/images/unit_images/u03/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---

<!--more-->

You may like to store information of various data types like character, integer, floating point, Boolean etc. Based on the data type of a object, the operating system allocates memory and decides what can be stored in the reserved memory.

In contrast to other programming languages like C and java in R, the objects are not declared as some data type. The objects are assigned with R-Objects and the data type of the R-object becomes the data type of the object. There are many types of R-objects. The frequently used ones are:

*	Vectors
*	Data Frames
*	Matrices
*	Arrays
*	Lists
*	Factors


The simplest of these objects is the vector object and there are six data types of these atomic vectors, also termed as six classes of vectors. The other R-Objects are built upon the atomic vectors.

| Data Type in R   | Example | Data Type from previous lesson |
|------------|----------|----------|
| integer    |1; 15 ; 1984297 | int |
| numeric    |1.15 ; 1007.28 ; 0.0001 | float |
| character  |© ; H ; π ; "Hello World"  ;   "Ursus maritimus"  ;   "black"         | character combines character and strings |
| logical    |true  ;   false         | boolean |

------

# Objects
Objects are the core of any R program. They contain the information we calculate with and also the calculated results. They also offer the possibility to label data with meaningful names, so that the code is easier to understand. It is helpful to think of objects as containers that hold information. Their sole purpose is to label and store data which then can be used across the code.

**How to name an object?**

Even though data is very diverse, objects cannot take every name. This is because they must be unique to the computer. They can contain letters, numbers and underscores ( _ )_. All other characters and spaces are not allowed. This restriction is important because R has to understand the input data, furthermore it has to be unique for the program. For example, if minus signs (-) were allowed for naming (which they are not!), there would be an ambiguity with the name `all-animals`. R would not know whether we meant the object `all-animals` or whether we wanted to subtract the object `animals` from the object `all`.

Instead, we could call it `all_animals`, `AllAnimals`, `allanimals`, `Allanimals` or `allAnimals`.

Note that R distinguishes between upper and lower case for names. `allAnimals` and `AllAnimals` are not the same object and it is not possible to switch them.

**How to define objects?**

The assignment operator looks like an arrow (<-) and is used to assign values to objects. It is built through a smaller-than (or greater-than)-symbol and a minus.
In R there are several possibilities to define an object:

```r
# Assign the value y to object x
x <- value y
value y -> x
```
These two do the same: they assign a value to the object x, but the first variant is used much more often than the second.

Second Example:
```r
# Assign the value "Hello World" to object "greeting"
greeting <- "Hello World."

#show content of object "greeting"
greeting
[1] Hello World.
```
In objects it is possible to mix data types.

-----

# Vectors
If you want to store more than one value to a object you need a vector. It is a basic data structure and contains elements of the same type. The data types can be logical, integer, double and character.

When you want to create a vector with more than one element, you need to use the `c()` function which means to combine the elements into a vector (c for combine).


```r
apple <- c("red", "green","yellow")
apple

[1] "red"    "green"  "yellow"
```

A vector’s type can be checked with the `typeof()` function. apple is a word not a number therefore it is a character (in other words a string).

```r
# Ask for the class of the vector
apple <- c("red", "green","yellow")
typeof(apple)

[1] "character"
```

Another important property of a vector is its length. This is the number of elements in the vector and can be checked with the function `length()`. In this case the length is 3. Three Values for "red", "green" and "yellow".

```r
#Ask for the length of the vector
apple <- c("red", "green","yellow")
length(apple)

[1] 3
```

A vector can only contain values of the same data type.

-----

# Dataframe
A data frame is a two dimensional data structure. It is a special case of a list which has each component of __equal length__.
Each component form the column and contents of the component form the rows. Data frames are build with the `data.frame()` function. The same data type within each column is necessary.
For example: A data frame is build through several vectors. Within each vector the same data type must be present (see below).

```r
a <- c("A", "B", "C", "A", "B", "A", "A") # create a vector called a
b <- c("X", "X", "X", "X", "Y", "Y", "Y") # create a vector called b
c <- c(1, 2, 3, 4, 5, 6, 7) # create a vector called c
d <- c(10, 20, 30, 40, 50, 60, 70) # create a vector called d

# create a data frame from previous vectors with assigned column names to vectors.
df <- data.frame(Cat1 = a, Cat2 = b, Val1 = c, Val2 = d)

print(df)

   Cat1 Cat2 Val1 Val2
1    A    X    1   10
2    B    X    2   20
3    C    X    3   30
4    A    X    4   40
5    B    Y    5   50
6    A    Y    6   60
7    A    Y    7   70
>
```

-----

# Matrix
A matrix is a two-dimensional rectangular data set. It can be created using a vector input to the `matrix()` function.
`nrow` stands for 2 rows and `ncol` for 3 columns. All data within a matrix must be of the same data type.

```r
# Create a matrix.
M = matrix(c('a','a','b','c','b','a'), nrow = 2, ncol = 3, byrow = TRUE)
print(M)
```

When we execute the above code, it produces the following result −
Notice that the columns are filled first, then the rows.

```r
     [,1] [,2] [,3]
[1,] "a"  "a"  "b"
[2,] "c"  "b"  "a"
```

---

# Array
Arrays are the objects which can store data in more than two dimensions. For example − If we create an array of dimension (2, 3, 4) then it creates 4 rectangular matrices each with 2 rows and 3 columns. Arrays can store only one data type.

An array is created using the array() function. It takes vectors as input and uses the values in the dim parameter to create an array.

```r
# create an array with numbers from 1 to 24 with the dimensions of 3 rows, 4 columns and 2 "tables".
my.array <- array(1:24, dim=c(3,4,2))

my.array
, , 1
   [,1] [,2] [,3] [,4]
[1,]  1  4  7  10
[2,]  2  5  8  11
[3,]  3  6  9  12
, , 2
   [,1] [,2] [,3] [,4]
[1,]  13  16  19  22
[2,]  14  17  20  23
[3,]  15  18  21  24
```

This array has three dimensions. Notice that, although the rows are given as the first dimension, the tables are filled column-wise. So, for arrays, R fills the columns, then the rows, and then the rest.

----
**Visualized difference between vector, matrix and array:**

{% include figure image_path="/assets/images/unit_images/u03/Array.png" caption="Note the structural difference between vectors, matrices and arrays." %}

A vector is one-dimensional, a matrix is two-dimensional and an array is more than two dimensional.

----

# Lists
A list is an object which can contain many different types of elements inside it like vectors, a matrix, functions and even another list inside it.
The list is created using the `list()` function. Unlike matrices list elements do not need equal length and same data types.

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
It prints one list with three elements. The first element  [[1]] is an vector containing values. The second element [[2]] is a value and the third [[3]] is a function.

----

# Factors
Factor is a data structure used for fields that takes only predefined, finite number of values (categorical data). For example: a data field such as marital status may contain only values from single, married, separated, divorced or widowed.

In such case, we know the possible values beforehand and these predefined, distinct values are called levels.

A factor is created using the function `factor()`. Levels of a factor are inferred from the data if not provided.

```r
marital_status <- factor(c("single", "married", "married", "single"))
marital_status

[1] single  married married single
Levels: married single
```

Here, we can see that factor *marital_status* has four elements and two levels. We can check if a object is a factor or not using `class()` function.

Similarly, levels of a factor can be checked using the `levels()` function.

```r
class(marital_status)
[1] "factor"

> levels(marital_status)
[1] "married" "single"
```

Factors are also created when non-numerical columns are read into a data frame. By default, `data.frame()` function converts character vector into factor.

-----

# What we learned so far:


{% include figure image_path="/assets/images/unit_images/u03/types_objects.PNG" caption="Visualization of the connection of data types and objects." %}

Raw data is categorized in different scales, which are expressed in different data types, which can be stored in different object types.

{% include figure image_path="/assets/images/unit_images/u03/objects.PNG" caption="Note the different data types which can be stored in the objects." %}

Note the specific data types of objects:
* Vectors must be of the same data type.
* Matrices must be of the same data type.
* Data frames must be arranged that columns are of the same data type.
* Lists can contain any data type.
* Factors can contain only strings.

Let's move on to Loops...

<!--
## Further reading
{% include figure image_path="/assets/images/unit_images/u03/grid.png" caption="A Matrix by [?](?)" %}

add some day
-->
