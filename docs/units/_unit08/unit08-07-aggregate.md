---
title: Aggregate and transform data
header:
  image: /assets/images/unit_images/u08/header.png
  image_description: "noodle"
  caption: "Photo by [congerdesign](https://pixabay.com/de/users/congerdesign-509903/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1312384)"
---

#### Aggregate

Aggregate functions in R are used to perform operations on subsets of data, summarizing multiple values into a single value. Common aggregate functions include **sum()**, **mean()**, **min()**, **max()**, and **length()**. These functions are often used in conjunction with the **aggregate(x, by, FUN)** function. X stands for the data frae, by is the list of grouping elements, often factors, and FUN is the function to be applied (e.g., mean, sum).

Let's take the dataset mtcars, which comes with R. This calculates the average mpg for each group of cyl (cylinders)

```
aggregate(mpg ~ cyl, data = mtcars, FUN = mean)
```
#### Reshaping Data: Wide to Long and Vice Versa

In R, data can be transformed between wide and long formats using functions such as **melt()** and **dcast()** from the **reshape2 package**. There are other packages available, but here we will focus on the functions provided by reshape2. **dcast(data, columns.keep ~ columns.spread, value.var)** converts long data to wide, creating separate columns for different values. Important arguments are, of course, the data object and the formula, where all columns left of the **"~"** are columns to keep as they are (green columns in the image below), while those right of the **"~"** are spread, i.e. they form the new column header (orange cells in the image below). Meanwhile, *value.var* specifies the values to be used to fill these new columns (here: "Anzahl Individuen").

{% include figure image_path="/assets/images/unit_images/u08/dcast.png" %}

**melt(data, id.vars, measure.vars)** converts wide data to long by melting multiple columns into key-value pairs. Where *id.vars* is the columns to keep as they are, *measure.vars* is the column names to merge into a new column (in the image above, this would be the orange column names in the bottom half of the image) and *variable.name* is the name of the new column in which the values (here: in blue) are now presented in long format. In the image above, this would be "Anzahl Individuen". 
