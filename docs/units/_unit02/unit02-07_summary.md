---
title: "Summary"
header:
  image: /assets/images/unit_images/u02/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"

---

## Summary
{% include figure image_path="/assets/images/unit_images/u02/types_data.PNG" caption="The Four Types of Data: nominal, ordinal, interval and ratio." %}

Remember that the top-level category is either *quantitative or qualitative* (numerical or not). From there, quantitative data can be grouped into “discrete” or “continuous” data. That covers most of it. 

In summary, nominal variables are used to “name,” or label a series of values.  Ordinal scales provide good information about the order of choices, such as in a customer satisfaction survey.  Interval scales give us the order of values AND the ability to quantify the difference between each one.  Finally, Ratio scales give us the ultimate–order, interval values, plus the ability to calculate ratios since a “true zero” can be defined.

R stores values using types such as integer, double, character, and logical. Integer values represent whole numbers; double values can represent whole numbers and fractions. Character vectors store text, and logical vectors contain TRUE or FALSE (or a missing value). Check that your data has the intended type using functions such as `is.integer()` or `is.character()`, and convert it when needed using functions such as `as.integer()` or `as.character()`.


| Provides                      | Nominal | Ordinal | Interval |  Ratio
|-------------------------------|---------|---------|----------|---------|
| Counts, Frequency of Distribution  |    X     |   X     |     X    |    X    |
| Mode  |     X    |   X     |     X    |    X    |
| The order of values is known  |         |   X     |     X    |    X    |
| Median  |         |   X     |     X    |    X    |
| Mean  |         |         |     X    |    X    |
| Can quantify the difference between each value  |         |         |     X    |    X    |
| Can add or subtract values  |         |         |     X    |    X    |
| Can multiply and divide values  |         |         |          |    X    |
| has a true zero  |         |         |          |    X    |

-----

<!--
## Further reading

add some day
-->
