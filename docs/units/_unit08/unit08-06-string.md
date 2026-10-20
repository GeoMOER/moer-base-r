---
title: Manipulation of character strings
header:
  image: /assets/images/unit_images/u08/header.png
  image_description: "noodle"
  caption: "Photo by [congerdesign](https://pixabay.com/de/users/congerdesign-509903/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384)"
---

R allows you to manipulate character strings. This is useful. After all, no one is free from mistakes, and typos can creep into your strings. Or maybe you have changed your mind and want to use a different spelling. Or you have information as a block of text and want to extract information automatically. These are all cases where string manipulation is useful.

#### getting information

The `length()` function counts elements of a vector, while `nchar()` counts characters in each string. `Statement` is a character vector with one element, even though that element contains many characters:

```r
Statement <- "I never thought about using R to extract information from text"
length(Statement)
nchar(Statement)
```

```text
[1] 1
[1] 62
```

#### combine and format expressions

`paste()` combines values into character strings. In `paste(..., sep = " ", collapse = NULL)`, `...` stands for the values you supply, `sep` goes between values combined at each position, and `collapse` can join the resulting vector into one string. The default separator is a space; without `collapse`, the result remains a vector.

When the input vectors have different lengths, R repeats the shorter one. `LETTERS` is a built-in vector of uppercase letters, so `LETTERS[1:2]` gives `"A"` and `"B"`:

```r
i <- 1:5
PlotNumbers <- paste(LETTERS[1:2], i, sep = "")
PlotNumbers
```

```text
[1] "A1" "B2" "A3" "B4" "A5"
```

Here `sep = ""` leaves no space between the letter and number. For example, `sep = "_"` would produce `"A_1"`, `"B_2"`, and so on.

Use `sprintf()` when you need a specific output format. `%.2f` displays a number with two decimal places; the result is still a character string:

```r
formatted_number <- sprintf("%.2f", 123.456)
formatted_number
```

```text
[1] "123.46"
```

#### Find expressions

`grep()`, `grepl()`, `regexpr()`, and `gregexpr()` all search character vectors, but return different information:

1. `grep()` returns the indices of elements containing a match. With `value = TRUE`, it returns those elements instead.
2. `grepl()` returns one `TRUE` or `FALSE` per element.
3. `regexpr()` returns the position and length of the first match in each element. A position of `-1` means no match.
4. `gregexpr()` returns a list containing the positions and lengths of *all* matches for each element.

We use this slightly adjusted passage about the “Sam Vimes Boots theory of socioeconomic unfairness” from Terry Pratchett's *Men at Arms*:

> "The reason that the rich were so rich, Vimes reasoned, was because they managed to spend less money. Take boots, for example. ... A man who could afford 50 dollars had a pair of boots that'd still be keeping his feet dry in ten years' time, while a poor man who could only afford cheap boots would have spent 100 dollars on boots in the same time and would still have wet feet"
<!--more-->

First, create `Quote` from exactly that text. `paste()` inserts one space between each part; the line breaks in the R code do not become part of the string. Run this block before the searches below:

```r
Quote <- paste(
  "The reason that the rich were so rich, Vimes reasoned,",
  "was because they managed to spend less money. Take boots, for example.",
  "... A man who could afford 50 dollars had a pair of boots that'd still",
  "be keeping his feet dry in ten years' time, while a poor man who could",
  "only afford cheap boots would have spent 100 dollars on boots in the",
  "same time and would still have wet feet"
)
nchar(Quote)
```

```text
[1] 376
```

The searches below use `"boots"` and the *same* `Quote` throughout. R counts character positions from 1.

```r
grep("boots", Quote)
grepl("boots", Quote)
```

```text
[1] 1
[1] TRUE
```

`grep()` returns `1` because the only element of `Quote` contains the word. `grepl()` confirms a match in that element; neither result gives the position *within* the text.

```r
first_boots <- regexpr("boots", Quote)
as.integer(first_boots)
attr(first_boots, "match.length")
```

```text
[1] 107
[1] 5
```

The first `"boots"` starts at character 107 and is five characters long. The match length is an attribute of the result. To find every occurrence, take the first list element returned by `gregexpr()` because `Quote` contains one string:

```r
all_boots <- gregexpr("boots", Quote)[[1]]
as.integer(all_boots)
attr(all_boots, "match.length")
```

```text
[1] 107 179 287 325
[1] 5 5 5 5
```

#### Divide and Conquer

`substr(x, start, stop)` extracts characters from `start` through `stop`, including both positions. The first match starts at 107 and has length 5, so it ends at 111 (`107 + 5 - 1`):

```r
substr(Quote, start = 107, stop = 111)
```

```text
[1] "boots"
```

`gsub()` replaces *all* matches. Here `fixed = TRUE` treats `"feet"` as literal text rather than a regular expression. We can confirm that the new string contains `"socks"` and no longer contains `"feet"`:

```r
SockQuote <- gsub("feet", "socks", Quote, fixed = TRUE)
grepl("feet", SockQuote, fixed = TRUE)
grepl("socks", SockQuote, fixed = TRUE)
```

```text
[1] FALSE
[1] TRUE
```

`strsplit()` returns a list with one element per input string. The first element contains the pieces from `Quote`. Splitting at the literal sequence `". "` gives four pieces:

```r
sentences <- strsplit(Quote, ". ", fixed = TRUE)[[1]]
length(sentences)
sentences[2]
sentences[3]
```

```text
[1] 4
[1] "Take boots, for example"
[1] ".."
```

The `".."` fragment comes from the ellipsis in the passage. A simple split on a period and space does not necessarily identify grammatical sentences.

### Regular expressions

If you want to match a pattern rather than one specific word, and target certain positions or characters, you can use regular expressions. Regular expressions are a sequence of characters that define a search pattern, mainly for the use in pattern matching with strings, or string matching. In R, regular expressions are used with several functions to identify, replace, or split strings according to specified patterns.


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
