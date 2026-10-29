---
title: "Types of Data"
toc: true
header:
  image: /assets/images/unit_images/u03/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---

<!--more-->

> “You can have data without information, but you cannot have information without data”  —  Daniel Keys Moran

Almost all programming languages explicitly include the notion of data type, though different languages may use different terminology.
That means when programming, the variables generally have a specific type, and an appropriate type should be selected according to what you want to use the variable for.

Common data types include:
* integer
* double or floating-point number
* character string
* logical or boolean

In contrast to other programming languages like C and Java in R, you do not have to declare what data type your newly created object has to have. Instead, when you assign a value to a variable, R determines the data type of that variable based on the assigned value. This means that the data type of the object is determined dynamically at runtime – but you might have to change that using the “as.” -function if necessary.

Data types are used within type systems, which offer various ways of defining, implementing and using them. Different type systems ensure varying degrees of type safety.

### Integer
In R, `integer` stores whole numbers. Add `L` to a number to create an integer explicitly: for example, `3L`. Without `L`, the number `3` is normally stored as a double. The range of non-missing integer values is -2,147,483,647 to 2,147,483,647.

### Double or Floating-point number
R uses double-precision floating-point numbers for most numerical calculations. A double can represent whole numbers such as `3` as well as fractional values such as `3.25`. The largest finite positive double is approximately `1.8e308`; it can be inspected with `.Machine$double.xmax`. The term `float` is common in other programming languages, but `double` is the R data type used here.

**Note: Watch your decimal separator!**
The decimal separator is a symbol used to separate the integer part from the fractional part of a number written in decimal form. Different countries officially designate different symbols for use as the separator. The choice of symbol also affects the choice of symbol for the thousands separator used in digit grouping.

Currently there are three ways to group the number ten thousand with digit group separators.

| Separator  | Meaning |
|------------|----------|
| 10 000,00  |  Space, the internationally recommended thousands separator  |
| 10.000,00  |  Period (spoken as point), the thousands separator in many non-English speaking countries. |
| 10,000.00  |  Comma, the thousands separator used in most English speaking countries. |

The first one is not suitable for data entry because of the space character.

With the second and third selection, it is very important to pay attention to the decimal separator with which the original data is saved. In Europe the point is preferred for thousands and the comma for decimals. In English-speaking countries, the comma is selected for thousands and the point is being used for decimals.
Accordingly, care must be taken when importing the data.

More information on this in Chapter 6: In- and Output of Data

### Character
In R, `character` stores text. Character values are written in quotes, for example `"H"`, `"3"`, or `"Ursus maritimus"`. The value `"3"` is text, whereas `3` is a number; they cannot be used interchangeably in arithmetic.

### String
A string is a sequence of characters, such as `"Hello World"` or `"I ate 3 hamburgers"`. R uses the same `character` data type for a single letter and for a longer string; it does not have separate `character` and `string` data types. Text can also contain whitespace and escape sequences such as `\n` for a newline or `\t` for a tab.

### Logical or boolean
The R data type `logical` stores the values `TRUE` and `FALSE`. These names must be written in uppercase. A logical vector can also contain `NA` when a value is missing.

### Missing and special values {#when-things-are-lost-null-values}
R distinguishes between a missing value, the null object, an undefined numerical result, and infinity. These values have different meanings and should not all be called "NULL-values".

**NA** means "Not Available" and marks a missing value. For example, `c(4, NA, 8)` is a numeric vector whose second value is missing. Use `is.na()` to find missing values. Missing values can occur in different vector types, including numeric, character, and logical vectors.

**NULL** is R's null object. It has length zero and is different from an element marked `NA`. Use `is.null()` to test whether an object is `NULL`.

**NaN** means "Not a Number" and can result from an undefined numerical calculation such as `0 / 0`. Use `is.nan()` to test for `NaN`. Note that `is.na()` also returns `TRUE` for `NaN`.

**Inf / -Inf** represent positive and negative infinity. For example, `1 / 0` returns `Inf`, and `-1 / 0` returns `-Inf`. Use `is.infinite()` to identify these values; infinity is not a missing value.

| Data Type in R | Examples |
|----------------|----------|
| integer | `1L`, `15L`, `1984297L` |
| double | `1`, `1.15`, `1007.28`, `0.0001` |
| character | `"H"`, `"π"`, `"Hello World"`, `"Ursus maritimus"` |
| logical | `TRUE`, `FALSE` |

----

Take the test to check if you understand everything correctly:

The quiz uses R storage-type names: `integer`, `double`, `character` and `logical`. Choose a suitable type for the information described, rather than the default type of every possible R expression. For example, a whole-number count can use `integer`, but `typeof(3)` is `"double"`; use `3L` for an integer literal. Text needs quotation marks, and logical literals are `TRUE` and `FALSE`.

<iframe title="Interactive quiz: data types" src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit02-05-data-types.html" width="1090" height="792" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
-----

Let's move on...
