---
title: Manipulation of characterstrings
header:
  image: /assets/images/unit_images/u08/header.png
  image_description: "noodle"
  caption: "Photo by [congerdesign](https://pixabay.com/de/users/congerdesign-509903/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384)"
---

R allows you to manipulate character strings. This is a great. After all, no one is free from mistakes, and typos can creep into your strings. Or maybe you have changed your mind and want to use a different spelling. Or you have information as a block of text and want to extract information automatically. These are all cases where string manipulation is useful.

#### getting information 
Let's start with some basic functions: **nchar()** – This function counts the number of characters in your string – it's essentially the **length()** command for the string itself.

```
Statement <- "I never thought about using R to extract information from text"
length(Statement) # This would not be correct as it would give the length of the vector, which is 1
[1] 1
nchar(Statement)
[1] 62
```

#### combine and format expressions 

The **paste()** function in R concatenates vectors after converting them to character strings. This function takes one or more R objects, converts them to characters, and then concatenates them, either with or without a separator string between the elements of the vectors.
The basic usage of **paste()** is as follows:

```
paste(..., sep = " ", collapse = NULL)
```

•	...: Represents the objects that you want to concatenate, which can be character vectors, numbers, or other objects. These objects are then coerced to character strings by paste().
•	sep: The separator string to use between the elements after conversion to characters. The default is a space.
•	collapse: An optional character string to separate collapsed results. If it is NULL, no collapse is done.

Continuing with the concept of vectorization within the paste() function, when you combine a vector with other elements, paste() will apply the operation across all elements of the vector

```
i <- c(1:5)
PlotNumbers <- paste(LETTERS[1:2], i, sep = "")
PlotNumbers
[1] "A1" "B2" "A3" "B4" "A5"
```
In this case, LETTERS is a predefined variable in R that contains a character vector of the alphabet. LETTERS[1:2] will therefore return the first two letters, "A" and "B". When we use paste() with these letters and our vector i, which contains the numbers from 1 to 5, the function will create a new vector where each number is prefixed by "A" and "B" due to vectorization, resulting in "A1", "B2", "A3", "B4", "A5". Notice that we used sep = "" to specify that there should be no space between the letter and the number.  You could write sep= "_" to separate the latter and the number like this: "A_1"; "B_2" and so on. 


You can create formatted strings using **sprintf()**. For example, you can control the number of decimal places for numeric values by writing %0.2f, which tells sprintf() to format the number as a floating-point number with two decimal places.

```
formatted_number <- sprintf("%.2f", 123.456)
formatted_number
[1] "123.46"
```
Note, that it is still a character string!

#### Find expressions

If you need to find a certain expression within a characterstring, or within a vector or list of characterstrings, the following functions will come in handy.

In R, the functions grep, grepl, and regexpr, gregexpr, are all used for matching patterns defined by regular expressions. Here's a brief overview of what each function does:


1.	**grep():**
•	Searches for matches of a pattern within a vector of character strings.
•	Returns the indices of the vector elements that contain the matches.
•	If you use the argument value = TRUE, it returns the actual string values that match the pattern instead of their indices.
2.	**grepl():**
•	Similar to grep(), but instead of returning the indices or values, it returns a logical vector (TRUE or FALSE).
•	Each element of the logical vector indicates whether the corresponding element of the input character vector contains the pattern.
3.	**regexpr():**
•	Matches a regular expression to a character vector and returns detailed information about the first match in each element.
•	The result includes the starting index of the match and the length of the matched string.
•	If there is no match, it returns -1 for that vector element.
4.	**gregexpr():**
•	Extends regexpr() by finding every match within each element of a character vector, not just the first one.
•	Returns a list of the same length as the input vector, with each list element containing the start indices and lengths of all matches.


As an example, we turn to a Terry Pratchett quote, namely the “Sam Vimes Boots theory of socioeconomic unfairness” mentioned in the novel “Men at Arms” (slightly adjusted for this purpose):

> "The reason that the rich were so rich, Vimes reasoned, 
was because they managed to spend less money. Take boots, for example. ... A man who could afford 50 dollars had a pair of boots that'd still be keeping his feet dry in ten years' time, while a poor man who could only afford cheap boots would have spent 100 dollars on boots in the same time and would still have wet feet"
<!--more-->

Let’s see what happens if this Quote sould have been put into a single characterstring (called "Quote" do to lack of creativity), and we use our functions to find the expression “boot”:

```
> grep("boots",Quote)
[1] 1
```
A vector of the indices of the elements of “Quote” that yielded a match is returned. It is 1, because there is only one element in the vector “Quote”

```
> grepl("boots",Quote)
[1] TRUE
```
A  logical value is returned, indicating whether the respective elements (in our case it is only one) contain the searched expression or not. The theory of boots wouldn’t be anything without boots, so of course it is TRUE.

```
> regexpr("boots",Quote)
[1] 110
attr(,"match.length")
[1] 5
attr(,"index.type")
[1] "chars"
attr(,"useBytes")
[1] TRUE
```
Returns the position of the match (here: starting at the 110th character position) and the length of the expression (here: 5 characters long), but only for the first “boots”.

```
> gregexpr("boots",Quote)
[[1]]
[1] 108 180 287 331
attr(,"match.length")
[1] 5 5 5 5
attr(,"index.type")
[1] "chars"
attr(,"useBytes")
[1] TRUE
```
Returns the position of the match (here: starting at the 110th character position) and the length of the expression (here: 5 characters long), but for all  “boots”.

#### Divide and Conquer

If you want to extract information based on fixed positions within the character string, you can use **substr(x, start, stop)**.  The start and stop arguments define the range of characters to extract. For example, substr(Quote,start=108, stop=112) should return ”boots” (here, we knew beforehand, that the 110 position is the one where the word “boots” starts and that it is 5 long, so the end position is 110+4). Verification:

```
> substr(Quote,start=108, stop=112)
[1] "boots"
```

If you want to replace an expression, you can use **gsub**. The synthax is gsub(pattern, replacement, x, fixed = FALSE ...). Let’s say, we want to replace “feet” with socks:

```
> SockQuote <- gsub("feet", "socks", Quote)
> SockQuote
[1] "The reason that the rich were so rich, Vimes reasoned, \nwas because they managed to spend less money. Take boots, for example. ... A man who could afford 50 dollars had a pair of boots that'd still be keeping his socks dry in 10 years' time, while a poor man who could only afford cheap boots would have spent a hundred dollars on boots in the same time and would still have wet socks.
```
great success!

If you want to divide characterstring (basically, doing the opposite of paste), you can utilize **strsplit()** function. It splits the elements of a character vector x into substrings according to the matches to substring split within them. This is particularly useful when you have strings that contain structured data and you want to break them down into their component parts.
Let’s say we want to divide the quote into the single sentences. Sentences are divided by “. “

```
> sentences <- strsplit(Quote, ". ", fixed=TRUE)
> sentences
[[1]]
[1] "The reason that the rich were so rich, Vimes reasoned, \nwas because they managed to spend less money"
[2] "Take boots, for example"  
[3] ".."
[4] "A man who could afford 50 dollars had a pair of boots that'd still be keeping his feet dry in 10 years' time, while a poor man who could only afford cheap boots would have spent a hundred dollars on boots in the same time and would still have wet feet."
```
The result is a list with the different sentences.

### Regular expressions

If you do target one specific word, but certain positions or characters, you can use regular expressions. Regular expressions are a sequence of characters that define a search pattern, mainly for the use in pattern matching with strings, or string matching. In R, regular expressions are used with several functions to identify, replace, or split strings according to specified patterns.


Metacharacter/Construct	Description
1. **^**	Matches the beginning of a line
2. **$**	Matches the end of a line
3. **.**	Matches any single character except newline
4. **[...]**	Matches any one of the enclosed characters
5. **[^...]**	Matches any character not enclosed
6. **\*** 	Matches 0 or more occurrences of the preceding element
7. **\+** 	Matches 1 or more occurrences of the preceding element
8. **?**	Matches 0 or 1 occurrence of the preceding element
9. **{n}**	Matches exactly n occurrences of the preceding element
10. **{n,}**	Matches n or more occurrences of the preceding element
11. **{n,m}**	Matches at least n and no more than m occurrences of the preceding element
12. **()**	Groups regular expressions and remembers matched text
13. **\s**	Matches whitespace characters
14. **\S**	Matches non-whitespace characters
15. **\d**	Matches digits. Equivalent to [0-9]
16. **\D**	Matches non-digits
17. **\w**	Matches word characters (letters, digits, and underscores)
18. **\W**	Matches non-word characters
19. **\b**	Matches a word boundary
20. **\B**	Matches a non-word boundary
21. **\\**	Escapes a metacharacter of its special meaning

Here's a visualization of the principle:

{% include figure image_path="/assets/images/unit_images/u08/Regexpr1.png" %}

{% include figure image_path="/assets/images/unit_images/u08/Regexpr2.png" %}

#### The practical use

The process of extracting specific information from structured text is known as text mining or text data mining. It involves the analysis of large quantities of natural language text looking for patterns, keywords, or specific structures that provide valuable information. 
Suppose we have a database of digitized text containing species descriptions. Each entry includes the name of the species, its characteristics, and information about where it is found. If the text follows a predictable structure and uses consistent terminology—for instance, always using "Habitat:" to indicate the natural home of the species—we can design an automated process to identify and extract this information. 
