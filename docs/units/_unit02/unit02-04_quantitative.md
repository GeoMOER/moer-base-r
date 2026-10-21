---
title: "Quantitative Data"
toc: true
toc_float: true
header:
  image: /assets/images/unit_images/u03/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"

---
Quantitative variables express counts or measured amounts. Their numerical values have a meaning beyond identifying a category: for example, 12 trees are three more than nine trees. A column of numeric category codes is still categorical.

## Quantitative Data ("numerical")
Quantitative variables can be **discrete** or **continuous**. This describes their possible values, separately from whether differences or ratios are meaningful.

**Discrete variables** have a finite or countable set of possible values. Counts such as the number of eggs, wins or trees take whole-number values. Changing units can give non-integer values without changing this property: 18 whole eggs are 1.5 dozen eggs, but the possible values still advance in steps of one egg. “Discrete” describes the variable, not R's integer storage type.

**Continuous variables** are modelled as taking any value within a relevant interval. Height and elapsed running time are examples. Actual instruments have finite precision: a height recorded as 1.82 metres is rounded, not measured infinitely precisely. Rounding the observations does not by itself change the continuous model of the underlying quantity.

**Interval and ratio** describe the measurement level of quantitative variables, not subtypes restricted to continuous variables. Tree count is discrete and ratio-scaled; tree height is usually modelled as continuous and is also ratio-scaled. See [Statistics Canada: Types of variables](https://www150.statcan.gc.ca/n1/edu/power-pouvoir/ch8/5214817-eng.htm) for the discrete/continuous distinction.

### Interval {#intervall}
On an interval scale, equal numerical differences represent equal differences in the measured quantity. For example, 60 °C minus 50 °C and 80 °C minus 70 °C both represent a temperature difference of 10 °C.

The zero point is a reference, not an absence of the quantity. Zero degrees Celsius does not mean “no temperature”. Dates expressed as day numbers from a chosen reference date provide another example: differences count days, while the numerical origin is a convention.

Ratios of interval-scale values depend on the chosen origin. Although 20 divided by 10 is 2, 20 °C does not represent twice the absolute temperature of 10 °C. The same temperatures are 68 °F and 50 °F, whose ratio is different. Arithmetic is possible; the question is whether its interpretation survives a change of scale.

Means, medians and standard deviations can be useful summaries of interval data. Histograms and boxplots show distributions; a line chart is appropriate when observations have a meaningful sequence, such as time.

### Ratio
Ratio scales have meaningful equal differences and a meaningful zero, so ratios also have an interpretation. Zero trees means no trees in the plot; 20 trees are twice as many as ten. A length of two metres is twice a length of one metre, and this ratio stays the same when both lengths are converted to centimetres. Counts, length, mass and elapsed duration are examples.

Both counts and continuous measurements can be ratio-scaled. Means, medians and standard deviations may be useful summaries. Choose graphics for the question and the variables involved: for example, a frequency plot for counts, or a scatterplot for two quantitative variables.

Measurement level alone does not determine a statistical test. The research question, sampling design, dependence between observations and distributional assumptions also matter. For example, the choice of a t-test depends on whether samples are paired and on how their variances are handled; see the [NIST explanation of the two-sample t-test](https://www.itl.nist.gov/div898/handbook/eda/section3/eda353.htm). For a further introduction to the four measurement levels, see [OpenStax: Levels of Measurement](https://openstax.org/books/introductory-statistics-2e/pages/1-3-frequency-frequency-tables-and-levels-of-measurement).



Test what you have learned so far:

<iframe title="Interactive exercise: categorical and numerical data" src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit03-01-object-types.html" width="1090" height="792" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>


Let's move on...

<!--
## Further reading

add some day
-->
