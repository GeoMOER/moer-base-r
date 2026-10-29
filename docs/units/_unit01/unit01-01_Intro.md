---
title: "Introduction"
header:
  image: /assets/images/unit_images/u01/header.png
  image_description: "Android Market-share Worldwide 2018-2020"
  caption: "Mobile Android operating system market share by version worldwide from 2018 to 2020: [StatCounter](https://gs.statcounter.com/android-version-market-share/mobile/worldwide/#monthly-201907-202001) [via Statista](https://www.statista.com/statistics/921152/mobile-android-version-share-worldwide/)"
---
*Setting up R and auxiliary programs for operating R and introducing a few tools if you get stuck.*
<!--more-->

{% include self-study-start.html %}

R is a programming language designed by Ross Ihaka and Robert Gentleman in 1992. As an open-source language, which means that it is freely available for anyone to use, modify, and distribute, it became a popular tool for statistical analysis and data visualization with an active user community. It includes a wide range of statistical and graphical techniques, provides extensive tools for data manipulation, transformation, and cleaning and is highly extensible, allowing users to write their own functions and packages. This extensibility has led to a vast ecosystem of contributed packages for a wide range of specialized tasks and domains, including geography.
In this course, you will prepare and analyze data by writing R code in scripts and running it in the console. Although this approach may seem intimidating to first-time users, it has the advantage of requiring thoughtful consideration of the analysis while simultaneously documenting all steps. Another advantage is that, in R, many analysis steps can be automated once they are defined.

> “Since then, the popularity of R has grown in leaps and bounds because of its unrivaled flexibility for data analysis and powerful graphical tools, all for the princely sum of *nothing*.”
 -- Tilman M. Davies, The book of R 

## Getting to know R
{% include figure image_path="/assets/images/unit_images/u01/gui_r.png" caption="**User interface of R:** The interpreter provides a blank canvas for statistical analysis. Adapted from Tilman M. Davies, *The Book of R*." alt="Base R graphical interface with a single console for entering commands and reading output." %}



The *[r-project](https://www.r-project.org/)* describes its work as follows:


> One of R’s strengths is the ease with which well-designed publication-quality plots can be produced, including mathematical symbols and formulae where needed. Great care has been taken over the defaults for the minor design choices in graphics, but the user retains full control.
>
> Many users think of R as a statistics system. We prefer to think of it as an environment within which statistical techniques are implemented. R can be extended (easily) via packages. There are about eight packages supplied with the R distribution and many more are available through the CRAN family of Internet sites covering a very wide range of modern statistics.
>
> R is available as Free Software under the terms of the Free Software Foundation’s GNU General Public License in source code form. It compiles and runs on a wide variety of UNIX platforms and similar systems (including FreeBSD and Linux), Windows and MacOS.

-------

## Getting to know RStudio
{% include figure image_path="/assets/images/unit_images/u01/gui_rstudio.png" caption="User Interface of RStudio" alt="RStudio interface combining a script editor, console, environment browser and plot viewer." %}

RStudio is an integrated development environment (IDE) for R. It includes a console, syntax-highlighting editor that supports direct code execution, as well as tools for plotting, history, debugging and workspace management.

---

## What is the difference between R and RStudio?

R executes your commands; RStudio provides the editor, Console and other tools around it. You can use R without RStudio. Install R first, then RStudio for the workflow used here. As a quick check, explain which program performs `1 + 2` and which provides the Run button.

Now that this is clear, we continue with the installation:

<!--
## Further reading

add some day
-->


## Comments?
You can leave comments below if you have questions or remarks about any of the text or code in this unit. 
Please copy the corresponding line into your comment to make it easier to answer your question.

<script src="https://utteranc.es/client.js"
        repo="GeoMOER/moer-base-r"
        issue-term="moer-base-r_unit01"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>



