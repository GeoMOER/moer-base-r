---
title: Subsetting
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u04/header.png
  image_description: "index"
  caption: "Photo by [Maksym Kaharlytskyi](https://unsplash.com/@qwitka?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) from [Unsplash](https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---

<!--more-->

> “Big data is at the foundation of all of the megatrends that are happening today, from social to mobile to the cloud to gaming.” – Chris Lynch

---

When you are working with a large data set, you are often only interested in a small part of it for your analysis. So how do you sort out all the variables and observations and extract only the ones you need? Well, R has several ways of doing this in a process it calls "subsetting".

The most basic way of subsetting a data frame in R is by using square brackets such that in:

```
data[x,y]
```
`data` is the data frame we want to subset. `x` consists of the rows we want returned, and `y` consists of the columns we want returned. Let’s pull some data from the built-in dataset `mtcars` and see how this is done on a real data set.

Now, let’s suppose we only need *mpg, hp* and *gear* to show the relationship between fuel consumption, horsepower and number of gears. However, we only need data seperated by the kind of transmission (am): 0 = automatic, 1 = manual. Here’s the basic way to retrieve that data in R:

```
#loading dataset mtcars
data("mtcars")

# extracting data
manual1 <- mtcars[c(mtcars$am == 1),c(1,4, 10)]
automatic1 <- mtcars[c(mtcars$am == 0),c(1,4, 10)]
```

Translated, this means that we want to separate the record (mtcars) according to the type of transmission (mtcars$am==1) and **use only** the first (mpg), fourth (hp) and tenth (gears) columns.

Another way is to say what you don't want and what should be left instead of extracting what you do want. Note the `-c` for dropping data.

```
# dropping data
manual2  <- mtcars[c(mtcars$am == 1),-c(2,3,5:9, 11)]
automatic2 <- mtcars[c(mtcars$am == 0),-c(2,3,5:9, 11)]
```

---

## subset-function
There is another basic function in R that allows us to subset a data frame without knowing the row and column references: `subset()`.

The `subset()` function takes 3 arguments: the data frame you want subsetted, the rows corresponding to the condition by which you want it subsetted, and the columns you want returned. In our case, we take a subset of mtcars where “am” is equal to 1 and then we select the “mpg”, “hp” and “gear” columns again.

```
#subset function
manual3 <- subset(mtcars, am == 1, select = c(mpg, hp, gear))
automatic3 <- subset(mtcars, am == 0, select = c(mpg, hp, gear))
```

In the following example, we select by different values:

First all rows that have a value of horsepower (hp) between 100 and 200.
Second all rows that have a value of horsepower greater or equal to 150 AND are automatic.
Third all rows that have a value of horsepower greater or equal to 250 OR have less than 4 gears.
We keep the mpg, hp and gear columns for all three.

```
# hp between 100 and 200
hp <- subset(mtcars, hp >= 100 & hp < 200, select=c(mpg, hp, gear))

# hp >=150 AND automatic
hp_am <- subset(mtcars, hp >= 150 & am == 0, select=c(mpg, hp, gear, am))

# hp >=250 OR <4 gears
hp_gear <- subset(mtcars, hp >= 250 | gear <4, select=c(mpg, hp, gear, am))
```

---

## Random sample

Generally speaking: Whenever we introduce randomness, we also should set a random seed to make our R code reproducible. The `set.seed()` function sets the starting number used to generate a sequence of random numbers – it ensures that you get the same result if you start with that same seed each time you run the same process. The seed is an arbitrary number. Then use the `sample()` function to take a random sample of size n from a dataset either with or without replacement.

```
set.seed(13)
sample(x, size = n, replace = FALSE)
```
Sample of a vector:
```
sample(my_vector, size = 3)
```

Random sample of a data frame:
```
# seed for reproducibility
set.seed(1234)

# sample syntax
mysample <- dataframe[sample(1:nrow(dataframe), size, replace=FALSE),]

# sample of the mtcars dataframe with 10 samples and without replacement
mysample <- mtcars[sample(1:nrow(mtcars), 10, replace=FALSE),]
```






<!--
## Further reading

add some day
-->
