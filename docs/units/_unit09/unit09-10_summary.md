---
title: "Summary"
unit_summary: true
published: TRUE
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u09/header.png
  image_description: "statistics"
  caption: "Photo by [Gerd Altmann](https://pixabay.com/de/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4705451) [from Pixabay](https://pixabay.com/)"
---

You can now choose a basic plot for a question, label it clearly, and interpret what the display does and does not show.

<!--more-->

## What you learned

| Plot | Useful for | Interpretation check |
|---|---|---|
| Histogram | The distribution of one numeric variable. | Bin boundaries affect the appearance. Counts or density must be labeled appropriately. |
| Density curve | A smoothed numeric distribution. | Bandwidth controls smoothness; the curve is an estimate, not individual observations. |
| Cleveland dot chart (`dotchart()`) | Comparing numeric values across named items or groups. | Ordering items can make comparisons easier. |
| Bar plot | Comparing category counts or other stated summaries. | Use `table()` for counts; explain what bar heights represent. |
| Box plot | Comparing numeric distributions across groups. | The center line is the median, not the mean. |
| Line chart | Changes over time or another ordered variable. | Sort the horizontal variable appropriately; connecting unrelated observations implies an order. |
| Pie chart | Category shares of a single whole. | Categories should be mutually exclusive parts of that whole; similar slices are hard to compare. |
| Scatterplot | A relationship between two numeric variables. | An association alone does not establish causation. |

## Creating a readable plot

Use informative titles, axis labels, and units. Add a legend when colors or symbols encode groups. Functions such as `points()`, `lines()`, `abline()`, and `legend()` add to an existing plot; a new high-level call such as `plot()` starts a new plot. Check axis limits and whether missing observations were omitted. Choose colors and symbols that keep groups distinguishable.

## A short recap in R

These illustrative measurements describe soil depth in centimeters. Run the calls separately to compare two views of the same values; in RStudio, use the Plots pane's history arrows to move between them.

```r
soil_depth_cm <- c(8, 9, 10, 10, 12, 13, 30)
hist(soil_depth_cm,
     main = "Distribution of soil depth",
     xlab = "Soil depth (cm)", ylab = "Frequency",
     col = "lightblue")
boxplot(soil_depth_cm,
        main = "Summary of soil depth",
        ylab = "Soil depth (cm)", col = "lightblue")
```

The histogram shows frequencies in intervals. The box plot compresses the distribution into a median, box, whiskers, and separately drawn points. Here the median is 10 cm and the value 30 cm is plotted beyond the upper whisker. It should prompt investigation, not automatic deletion.

By default, R's box plot box spans its lower and upper hinges, which summarize the lower and upper quarters of the data. Hinges can differ slightly from `quantile()` quartiles in small samples. Whiskers extend to the most extreme observations within 1.5 times the hinge spread from the box; they do not necessarily reach the minimum and maximum. Points beyond the whiskers are potential outliers, not proof of a measurement error.

## Check your understanding

1. Which plot would you choose for land-cover counts, a temperature time series, and the relationship between tree height and trunk diameter?
2. Why can changing histogram bins or a density curve's bandwidth change your impression of a distribution?
3. What would you check in the source data before explaining a point beyond a box plot whisker?

Revisit [plot creation]({{ '/unit09/unit09-02_creating.html' | relative_url }}), [histograms and density]({{ '/unit09/unit09-03_histogram_density.html' | relative_url }}), and [box plots]({{ '/unit09/unit09-06_boxplot.html' | relative_url }}) if needed.

## Test what you've learned so far!

<iframe title="Interactive quiz: boxplots and histograms" src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit09-boxplothistogram.html" width="1090" height="600" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>

<div class="h5p-activity-zoom" data-h5p-zoom="unit09-boxplot">
  <button class="h5p-zoom-toggle" type="button" aria-controls="unit09-boxplot-activity" aria-pressed="false" hidden>Enlarge activity</button>
  <div class="h5p-zoom-region" id="unit09-boxplot-activity" role="region" aria-label="Boxplot labels drag-and-drop activity" tabindex="-1">
    <iframe title="Interactive drag-and-drop exercise: parts of a boxplot" src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit09-markboxplot.html" width="1090" height="600" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe>
  </div>
</div>
<script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
