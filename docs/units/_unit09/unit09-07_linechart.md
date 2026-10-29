---
title: Line Chart
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u09/header.png
  image_description: "statistics"
  caption: "Photo by [Gerd Altmann](https://pixabay.com/de/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4705451) [from Pixabay](https://pixabay.com/)"
---

## What is a Line Chart?
<style>.unit p {text-align: justify;}</style>
<div class="unit">
<img alt="Comic comparing expected automation savings with the reality of debugging and ongoing development, shown as work-over-time charts." src="{{ '/assets/images/unit_images/u09/linechart1.png' | relative_url }}" width="404" height="409" align="right" vspace="10" hspace="20">
<p>A line chart connects observations in a meaningful order, often time. Within each series, sort the horizontal variable before drawing the connecting lines. The order should represent a sequence or progression in the data; do not connect unordered categories merely because there are many of them. Several series can share a plot when their lines are clearly identified.
</p></div>

<div class="course-info">
  <p><strong>Info</strong>  <br>
  The <code class="language-plaintext highlighter-rouge">lines()</code> function adds information to a graph. It can not produce a graph on its own.   <br><br> Usually it follows a <code class="language-plaintext highlighter-rouge">plot(x, y)</code> command that produces a graph.
  </p>
</div>

By default, `plot( )` plots the (x,y) points. Use the `type="n"` option in the `plot( )` command, to create the graph with axes, titles, etc., but without plotting the points.

 `type=` can take the following values:

| type | description |
|---------|-------|
| p | points |
| l | lines |
| o | overplotted lines and points |
| b | points joined by lines |
| c | no visible points (empty) joined by lines  |
| s, S | line-like stair steps |
| h | histogram-like vertical lines |
| n | does not produce any points or lines |

## Example with pressure: {#example-with-mtcars}
For these numeric vectors, `plot(x, y)` draws points by default. Set `type = "l"` to connect the observations with lines. The following calls compare the available types using the same ordered temperature series:
```
plot(x = pressure$temperature, y = pressure$pressure)                  # 0.
plot(x = pressure$temperature, y = pressure$pressure, type = "p")      # 1.
plot(x = pressure$temperature, y = pressure$pressure, type = "l")      # 2.
plot(x = pressure$temperature, y = pressure$pressure, type = "o")      # 3.
plot(x = pressure$temperature, y = pressure$pressure, type = "b")      # 4.
plot(x = pressure$temperature, y = pressure$pressure, type = "c")      # 5.
plot(x = pressure$temperature, y = pressure$pressure, type = "s")      # 6.
plot(x = pressure$temperature, y = pressure$pressure, type = "h")      # 7.
plot(x = pressure$temperature, y = pressure$pressure, type = "n")      # 8.
```
{% include figure image_path="/assets/images/unit_images/u09/linechart2.svg" caption="First row from left to right: 0. scatterplot without specification, 1. chart with points (equal to no specification), 2. line chart, 3. overplotted lines and point; second row from left to right: 4. points joined by lines, 5. no visible points (empty) joined by lines, 6. line-like stair steps: third row from left to right: 7. histogram-like vertical points, 8. no visible points or lines since it does not produce any." alt="Nine panels compare plot types for the same increasing series: default points, p, l, o, b, c, s, h and n; n draws no data." %}


To include **multiple lines** or to plot the points, first call plot() for the first line, then add additional lines and points with lines() and points() respectively:
```
# base graphic
plot(x = pressure$temperature, y = pressure$pressure,
  type = "l", col = "steelblue")

# add points
points(x = pressure$temperature, y = pressure$pressure, col = "steelblue")

# add second line in dark green
lines(x = pressure$temperature, y = pressure$pressure/2, col = "darkgreen")

# add points to second line
points(x = pressure$temperature, y = pressure$pressure/2, col = "darkgreen")
```

{% include figure image_path="/assets/images/unit_images/u09/linechart3.gif" caption="Line chart with multiple colored lines." alt="Animated pressure-versus-temperature line plot from the pressure dataset; pressure rises sharply at higher temperatures." %}

## Example with Orange: {#example-with-orange}
To demonstrate the creation of a more complex line chart, let's plot the growth of 5 orange trees over time. Each tree will have its own distinctive line. The data come from the dataset `Orange`. `Tree` is an ordered factor: its level order is `3, 1, 5, 2, 4`, not numeric label order. Converting it directly with `as.numeric()` would return internal codes and relabel the trees. Keep the labels for selection and for the legend:
```
# Keep the original tree labels; use i only as a position
trees <- levels(Orange$Tree)
ntrees <- length(trees)
```
```
# get the range for the x and y axis
xrange <- range(Orange$age)
yrange <- range(Orange$circumference)
```
```
# set up the plot
plot(xrange, yrange, type="n", xlab="Age (days)",
     ylab="Circumference (mm)" )
colors <- rainbow(ntrees)
linetype <- seq_len(ntrees)
plotchar <- 17 + seq_len(ntrees)
```
```
# add lines via for-loop
for (i in seq_along(trees))
{
  tree <- Orange[Orange$Tree == trees[i], ]
  tree <- tree[order(tree$age), ]
  lines(tree$age, tree$circumference, type="b", lwd=1.5,
        lty=linetype[i], col=colors[i], pch=plotchar[i])
}
```
```
# add a title and subtitle
title("Tree Growth")


# add a legend
legend(xrange[1], yrange[2], legend=trees, cex=0.8, col=colors,
       pch=plotchar, lty=linetype, title="Tree")
```

The existing animation below illustrates the drawing steps using loop-position labels 1–5. Those positions correspond to original tree labels 3, 1, 5, 2 and 4, respectively. The corrected code above displays the original tree labels in its legend.

{% include figure image_path="/assets/images/unit_images/u09/linechart4.gif" caption="Line chart with multiple colored lines." alt="Animated Orange dataset plot: five coloured lines connect trunk circumference measurements over age, with a Tree legend." %}
