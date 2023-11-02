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
That means when programming, the variables generally have a specific type, and they should be selected the appropriate type according to what you want to use the variable for.

Common data types include:
* integer
* double or floating-point number
* character string
* logical or boolean

In contrast to other programming languages like C and java in R, you do not have to declare what data type your newly created object has to have. Instead, when you assign a value to a variable, R determines the data type of that variable based on the assigned value. This means that the data type of the object is determined dynamically at runtime – but you might have to change that using the “as.” -function if necessary.

Data types are used within type systems, which offer various ways of defining, implementing and using them. Different type systems ensure varying degrees of type safety.

### Integer
int is short for "integer", which means whole numbers. It is used to specify that the variable contains only whole numbers. For example, 3 is an integer but 3.25 is not an integer. The range goes from -2,147,483,648 to 2,147,483,647.

### Double or Floating-point number
float is short for "floating-point number", which is a fractional number, eg, 3.25907. This can be a number between roughly 1.5 x 10^45 to 3.4 10^38, in floating point format.

**Note: Watch your decimal separator!**
The decimal separator is a symbol used to separate the integer part from the fractional part of a number written in decimal form. Different countries officially designate different symbols for use as the separator. The choice of symbol also affects the choice of symbol for the thousands separator used in digit grouping.

Currently there are three ways to group the number ten thousand with digit group separators.

| Seperator  | Meaning |
|------------|----------|
| 10 000,00  |  Space, the internationally recommended thousands separator  |
| 10.000,00  |  Period (spoken as point), the thousands separator in many non-English speaking countries. |
| 10,000.00  |  Comma, the thousands separator used in most English speaking countries. |

The first one is not suitable for data entry because of the space character.

With the second and third selection, it is very important to pay attention to the decimal separator with which the original data is saved. In Europe the point is preferred for thousands and the comma for decimals. In English-speaking countries, the comma is selected for thousands and the point is being used for decimals.
Accordingly, care must be taken when importing the data.

More information on this in Chapter 6: In- and Output of Data

### Character
characters basically behave like words. They can be stringed together, they can be compared, but they can't be used for calculations.

Examples of characters include letters, numerical digits, common punctuation marks (such as "." or "-"), and whitespace. The concept also includes control characters, which do not correspond to visible symbols but rather to instructions to format or process the text. Examples of control characters include carriage return or tab, as well as instructions to printers or other devices that display or otherwise process text.

### String
Characters are typically combined into strings. A string is a sequence of characters, e.g. "Hello World."
It is used to represent text rather than numbers. It is comprised of a set of characters that can also contain spaces and numbers. For example, the word "hamburger" and the phrase "I ate 3 hamburgers" are both strings, consisting of characters.

### Logical or boolean
Logical values or boolean values can only contain either the value **true** or **false**.

### When things are lost …NULL-values
When there are missing or undefined values in your data, they’ll be indicated by different so-called NULL-Values

 **NA** is a logical constant of length 1 and stands for "Not Available". It is used to represent missing or undefined values in a dataset where a value should be present but is unknown or unavailable.

**NULL** represents the null object : It is a value that typically represents a complete absence of data or a value that cannot be defined. It is often returned when a function results in an undefined value. 

**NaN** (Not-a-Number): is a logical vector of a length 1 and represents the result of an undefined or unrepresentable mathematical operation. It applies to numerical values, but not to values of integer vector and is often encountered in numeric calculations where the result is not a valid number.

**Inf / - Inf** represents positive (or negative) infinity in R. It is used when a value is too large to be represented as a finite number. Typically, it results from mathematical operations like dividing a number by zero.



| Data Type  | Examples |
|------------|----------|
| integer        |1; 15 ; 1984297       |
| float      |1.15 ; 1007.28 ; 0.0001       |
| character  |© ; H ; π ; A; B; C        |
| string     |"Hello World"  ;   "Ursus maritimus"  ;   "black" |  
| boolean    |true  ;   false         |

----

Take the test, to check if you understand everything correctly:

<iframe src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit02-05-data-types.html" width="1090" height="792" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
-----

Let's move on...
