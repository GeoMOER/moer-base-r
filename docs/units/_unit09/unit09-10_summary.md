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

Check that you can choose a basic plot for a question, label it clearly, and interpret what the display does and does not show.

<!--more-->

{% include self-study-start.html %}

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

## Try it yourself {#practice}

Choose and create a plot for each question: how many observations belong to each land cover; how temperature changes over three days; and how tree height relates to trunk diameter. Use informative labels and units. Explain one feature and one limitation of each display.

```r
cover <- c("forest", "water", "forest", "grassland")
days <- c(3, 1, 2)
temperature_c <- c(12, 10, 9)
diameter_cm <- c(10, 15, 20)
height_m <- c(4, 7, 9)
```

<details markdown="1">
<summary>Compare possible plots</summary>

```r
barplot(table(cover), main = "Land-cover observations",
        xlab = "Land cover", ylab = "Number of observations")
time_order <- order(days)
plot(days[time_order], temperature_c[time_order], type = "b",
     main = "Temperature over three days", xlab = "Day",
     ylab = "Temperature (degrees C)")
plot(diameter_cm, height_m, main = "Tree dimensions",
     xlab = "Trunk diameter (cm)", ylab = "Tree height (m)")
```

The counts are forest 2, grassland 1 and water 1. Temperatures in day order are 10, 9 and 12 °C; connecting the input row order would misrepresent time. The tree points increase together, but three observations do not establish causation or a general population relationship. Run the plots separately and use the Plots history to compare them.

</details>

**Ready to continue:** you can justify a chart choice, produce a labelled plot and describe what its data do and do not support.

## Optional transfer: from a CSV to an explained plot {#optional-transfer}

**Question:** among the supplied seismic events with reported magnitude at least 5, how many events have each reported magnitude? Choose the operations yourself before opening the hints. This practice combines existing skills; there is no submission.

**Start here, even if you entered this unit directly:** use an RStudio project with `Data/` and `Output/` folders, and start a fresh R session. [Download quakes.csv]({{ '/assets/data/quakes.csv' | relative_url }}) into `Data/quakes.csv`. It is the same 1,000-event, five-column teaching file used in Unit 06, with **four metadata lines, a header, semicolon separators and decimal commas**. The columns are latitude (`lat`, degrees), longitude (`long`, degrees), depth (`depth`, km), reported magnitude (`mag`) and number of reporting stations (`stations`). [Source and export notes]({{ '/assets/data/quakes-source.txt' | relative_url }}) document its origin and format.

If needed, revisit [project-relative paths]({{ '/unit05/unit05-02_wenvironment.html' | relative_url }}#rprojects), [import/export]({{ '/unit06/unit06-03_data_import.html' | relative_url }}), [table selection]({{ '/unit04/unit04-02_index.html' | relative_url }}#start-with-a-small-table) and [group summaries]({{ '/unit08/unit08-07-aggregate.html' | relative_url }}#aggregate). You do not need objects saved from those units or any additional package.

1. Import and inspect the file. Check its dimensions and column types before filtering.
2. Add `source_row`, numbering the imported data rows from 1 to 1,000. Keep this column when selecting events with a known magnitude of at least 5. It is a reference to a row in this particular CSV, **not an official earthquake-event identifier**. Create it before filtering so that it still points back to the input record.
3. Count the selected events within each distinct reported magnitude. State what one row of the count table represents, and check that the counts add to the number of selected events.
4. Choose and make a plot of those counts with a title and labelled axes. Explain what its largest count means and one limitation of the data.
5. Save the selected records and counts as two CSV files, and your plot as a PNG under `Output/`. Read the CSVs back and check that the values and source-row references are preserved. Keep the input file unchanged.

<details markdown="1">
<summary>Hint 1: import and retain row references</summary>

Use `read.table()` with `skip = 4`, `header = TRUE`, `sep = ";"` and `dec = ","`. `dim()` should give `1000 5`. `seq_len(nrow(x))` generates one position per row of table `x`; assign those positions to a new column before making a filtered copy. Use a known-value check and `>= 5` together for the row condition.

</details>

<details markdown="1">
<summary>Hint 2: count observations rather than summing magnitudes</summary>

Use `aggregate(source_row ~ mag, data = your_selected_table, FUN = length)`. For each magnitude group, `length()` counts its row references. Rename the resulting second column to `n_events`: those values are counts, rather than source-row identifiers. A bar plot can show one count for each observed magnitude category.

</details>

<details markdown="1">
<summary>Hint 3: save tables and a plot</summary>

Use `write.csv(..., row.names = FALSE)` so that R does not add a row-name column. `png("Output/your-plot.png", ...)` opens a PNG graphics device: make the plot next, then call `dev.off()` to finish writing the image. When comparing an exported table, check its values and identifiers; ordinary row labels may be regenerated when reading a CSV.

</details>

<details markdown="1">
<summary>Compare a complete worked solution</summary>

Run this script from the project root with the downloaded file in `Data/`. It creates every object it uses and creates `Output/` if necessary:

```r
dir.create("Output", showWarnings = FALSE)
quakes_all <- read.table("Data/quakes.csv", skip = 4, header = TRUE,
                         sep = ";", dec = ",")
dim(quakes_all)
str(quakes_all)

quakes_all$source_row <- seq_len(nrow(quakes_all))
keep <- !is.na(quakes_all$mag) & quakes_all$mag >= 5
quakes_selected <- quakes_all[keep, ]
dim(quakes_selected)

magnitude_counts <- aggregate(source_row ~ mag, data = quakes_selected,
                              FUN = length)
names(magnitude_counts)[2] <- "n_events"
magnitude_counts
sum(magnitude_counts$n_events) == nrow(quakes_selected)

write.csv(quakes_selected, "Output/quakes-selected.csv", row.names = FALSE)
write.csv(magnitude_counts, "Output/quakes-counts.csv", row.names = FALSE)
selected_back <- read.csv("Output/quakes-selected.csv")
counts_back <- read.csv("Output/quakes-counts.csv")
identical(quakes_selected$source_row, selected_back$source_row)
isTRUE(all.equal(quakes_selected, selected_back, check.attributes = FALSE))
identical(magnitude_counts, counts_back)

png("Output/quakes-magnitude-counts.png", width = 900, height = 500)
barplot(magnitude_counts$n_events,
        names.arg = format(magnitude_counts$mag, nsmall = 1),
        main = "Supplied seismic events with reported magnitude >= 5",
        xlab = "Reported magnitude", ylab = "Number of supplied events",
        col = "lightblue")
dev.off()
```

**Check the results:** the input has 1,000 rows and five numeric columns; `depth` and `stations` are integers. Adding `source_row` gives six columns. The selection has **198 rows and six columns**, retaining integer source-row references; the count table has **12 rows and two columns**, one row per observed magnitude and an integer event count. All four comparisons in the script should return `TRUE`. CSV reading can regenerate ordinary row labels; the explicit `source_row` values retain the connection to the input.

| Reported magnitude | Number of supplied events |
|---|---|
| 5.0 | 47 |
| 5.1 | 43 |
| 5.2 | 29 |
| 5.3 | 21 |
| 5.4 | 20 |
| 5.5 | 14 |
| 5.6 | 9 |
| 5.7 | 8 |
| 5.9 | 2 |
| 6.0 | 3 |
| 6.1 | 1 |
| 6.4 | 1 |

A bar plot compares these counts without implying a time sequence. Each bar is an observed magnitude category; magnitudes absent from the selection are omitted. The largest count is **47 supplied events reported at magnitude 5.0**. This describes the supplied historical dataset near Fiji, not a complete worldwide earthquake catalogue or a current earthquake rate. The grouped counts do not establish why the events occurred.

Open the three files under `Output/` and inspect the labels on the saved image. If the counts differ, check the import format and the `>= 5` condition before changing the plot. If row references differ, check that you created them before filtering and retained them during export.

</details>

## Check your understanding

Try these questions before opening the suggested answers.

1. Which plot would you choose for land-cover counts, a temperature time series, and the relationship between tree height and trunk diameter?
2. Why can changing histogram bins or a density curve's bandwidth change your impression of a distribution?
3. What would you check in the source data before explaining a point beyond a box plot whisker?

<details markdown="1">
<summary>Suggested answers</summary>

1. Use a bar plot of category counts, a line chart with time in order, and a scatterplot of diameter against height, respectively. State the units and what each point or bar represents.
2. Bins and bandwidths control how much local detail is visible. Compare reasonable settings before treating a peak or gap as a stable feature; neither display alone establishes a population pattern.
3. Check units, source records, transcription, duplicates, missingness and the sampling context. The point may be valid. A boxplot flag is a reason to investigate, not an instruction to delete it.

</details>


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
