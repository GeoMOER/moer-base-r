---
title: "Levels of Measurement"
header:
  image: /assets/images/unit_images/u02/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---
**The Four Horsemen of Measurement** - hear their names: Nominal, Ordinal, Interval, Ratio.
<!--more-->

{% include self-study-start.html %}

> “The Four Horsemen whose Ride presages the end of the world are known to be Death, War, Famine, and Pestilence. But even less significant events have their own Horsemen. For example, the Four Horsemen of the Common Cold are Sniffles, Chesty, Nostril, and Lack of Tissues; the Four Horsemen whose appearance foreshadows any public holiday are Storm, Gales, Sleet, and Contra-flow.” — Terry Pratchett, Interesting Times: The Play

---

## How can phenomena be measured? {#how-can-phenomenons-be-measured}
The four measurement levels are *nominal, ordinal, interval and ratio*. They describe what the values of a variable mean: whether they identify categories, express an order, or support comparisons of differences and ratios. This helps you choose summaries and graphics, together with the question you want to answer and how the data were collected.

{% include figure image_path="/assets/images/unit_images/u02/4horsemen-masson-krichevsky.jpg" alt="Four horsemen labelled nominal, ordinal, interval and ratio. The discrete/continuous labels above them are an oversimplification; see the explanation below." caption="The Four Horsemen of Measurement © 2018 Artwork by [J. Krichevsky & D. Masson](https://www.artstation.com/artwork/x1Xm2), edited. A mnemonic for the four names; the discrete/continuous pairing at the top is not a general classification of measurement levels." %}

Keep three questions separate:

* **What do the values represent?** Qualitative (categorical) variables identify categories. Quantitative variables express amounts or counts for which numerical differences have a meaning.
* **Which quantitative values are possible?** Discrete variables have a finite or countable set of possible values; continuous variables are modelled as taking any value within an interval. This distinction does not determine the measurement level: a tree count is both discrete and ratio-scaled.
* **How are the values stored?** R can store category labels as text or numeric codes. Coding land cover as `1 = forest`, `2 = grassland`, `3 = water` does not turn it into a quantitative variable. The code definitions, rather than the appearance of the values, determine their meaning.

| Variable | Measurement level | Kind of variable |
|---|---|---|
| Land cover: forest, grassland, water | Nominal: no inherent order | Categorical, even when stored as numeric codes |
| Erosion severity: low, medium, high | Ordinal: ordered categories | Categorical; category spacing is not defined |
| Temperature in degrees Celsius | Interval: equal differences, reference zero | Quantitative, usually modelled as continuous |
| Number of trees in a plot | Ratio: meaningful zero and ratios | Quantitative and discrete |
| Tree height in metres | Ratio: meaningful zero and ratios | Quantitative, usually modelled as continuous |

For a description of category codes and discrete/continuous variables, see [Statistics Canada: Types of variables](https://www150.statcan.gc.ca/n1/edu/power-pouvoir/ch8/5214817-eng.htm). The following two lessons explain the four measurement levels in more detail.


Let's move on to the description of qualitative data ...

<!--
## Further reading

add some day
-->
