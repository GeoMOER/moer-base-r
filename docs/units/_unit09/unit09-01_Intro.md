---
title: Introduction to creating graphs
header:
  image: /assets/images/unit_images/u09/header.png
  image_description: "statistics"
  caption: "Photo by [Gerd Altmann](https://pixabay.com/de/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4705451) [from Pixabay](https://pixabay.com/)"
---

You will remember from **Unit 02** that each type of data requires its own specific techniques for description and visualization.

**Qualitative data** includes non-numeric categories or labels.
Important information is Frequency Counts. This can be effectively assessed using the __table()__ function in R (see section **“barplot”** for more details).
Recommended Plots are
- Bar Plots: Ideal for displaying the frequency of different categories.
- Pie Charts: Useful for showing the proportion of each category.
- Cleveland Dotcharts: Compare a supplied numeric value, such as a count, across named categories. Each category gets its own row; sort the values to make comparisons easier.

**Quantitative data** is numerical and permits a wider array of statistical analyses, such as mean (the average value), the median (the middle value in ordered data) and quantiles (indicating data spread).
The __summary()__ function in R provides a quick statistical summary of these metrics.

Recommended Plots are:
- Histograms: Excellent for the distribution of a single numerical variable.
- Density Plots: Useful for understanding the distribution's shape.
- Boxplots: Visualize medians, quartiles, and outliers.
- Scatterplots: Ideal for relationships between two quantitative variables.
- Line Charts: Best for trends over time.
- Cleveland Dotcharts: Compare one numeric value across named items, such as miles per gallon for car models. The dotchart lesson distinguishes these from stacked frequency dot plots and strip plots.

The choice of plot should align with your data’s nature (continuous, categorical) and the specific insights you aim to communicate. 

At the end of this unit you should know how to choose and create plots yourself

Let's dive into the different plot types!

* histograms
* dotplots
* barplots
* boxplots
* linecharts
* piecharts and
* scatterplots.
## Comments?
You can leave comments below if you have questions or remarks about any of the text or code in this unit.
Please copy the corresponding line into your comment to make it easier to answer your question.

<script src="https://utteranc.es/client.js"
        repo="GeoMOER/moer-base-r"
        issue-term="moer-base-r_unit09"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
