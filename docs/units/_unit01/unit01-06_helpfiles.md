---
title: "R Help-Files?!"
toc: FALSE
toc_float: TRUE
published: TRUE
header:
  image: /assets/images/unit_images/u01/header.png
  image_description: "Android Market-share Worldwide 2018-2020"
  caption: "Mobile Android operating system market share by version worldwide from 2018 to 2020: [StatCounter](https://gs.statcounter.com/android-version-market-share/mobile/worldwide/#monthly-201907-202001) [via Statista](https://www.statista.com/statistics/921152/mobile-android-version-share-worldwide/)"
---
*What to do if you get lost in R?*

<!--more-->

{% include self-study-start.html %}

## Open a help page {#open-the-help-page}

Enter `?read.table` or `help("read.table")` in the Console. RStudio opens the documentation in its **Help** pane. You can also use the [official online help for read.table()](https://stat.ethz.ch/R-manual/R-devel/library/utils/html/read.table.html); prefer the installed help for details specific to your R version.

The [R Syntax lesson]({{ '/unit01/unit01-04a_r_syntax.html' | relative_url }}) uses this function with a supplied file and explains its arguments. If you arrived directly here, that lesson also supplies the project setup. You can read the help without downloading the file.

## A quick route through the help {#find-your-way-around-the-help-page}

The heading identifies `read.table` and its package, **utils**; **Data Input** is the title. Several functions share this help page, including `read.csv()` and `read.csv2()`. Locate the `read.table` entry in **Usage**.

| Section | Question it answers |
|---|---|
| **Description** | What does the function do? Here it reads tabular data into a data frame. |
| **Usage** | How can I call it? Look for argument names, their order and default values. |
| **Arguments** | What does each input mean, and which values are accepted? Connect `file`, `header` and `sep` to the syntax example. |
| **Value** | What does the function return? Here it returns the imported data frame. |
| **Details**, **Note** or **Warning** | Which special rules or limitations affect my use? |
| **Examples** | What can I inspect and adapt? Check the inputs and comments before running the code. |

Start with **Description**, connect **Usage** to **Arguments**, and check **Value**. Use **Details** for questions those sections leave open. The illustrated guide below also shows **References** and **See Also**; sections can vary between functions.

### Defaults are starting settings {#defaults-are-starting-settings}

In **Usage**, `skip = 0` specifies a parameter and its **default value**: when you omit `skip`, this function starts without skipping lines. `dec = "."` means decimal points; `sep = ""` means separation by whitespace, such as spaces or tabs. A parameter such as `file` has no default shown: the local-file call needs you to supply its value.

Check the argument description as well. Although **Usage** shows `header = FALSE`, `read.table()` can infer a header for some file layouts. Set `header` explicitly when you know whether your file has column names. The syntax lesson's comma-separated file needs `header = TRUE` and `sep = ","`; you do not need to supply every other input listed in **Usage**.

In the entries for `read.csv()` and `read.csv2()`, `...` indicates that additional arguments can be passed to `read.table()`. Supply the actual named arguments you need, such as `skip = 4`. The dots are documentation notation here, not text to copy into an import call.

## Guided view of the help page

Now that you know how to access the built-in R help pages you need to know how to read them. Typically, the R Help files follow a fairly standard outline as seen below in a heavily clipped screenshot of the function `read.table`. Different functions might have different sections, but these are the main ones you should be aware of:

<img alt="read.table help page showing the package, title, description and usage signature; these sections are explained alongside." src="{{ '/assets/images/unit_images/u01/selfhelp_2.1.png' | relative_url }}" width="400" height="631" align="right" vspace="10" hspace="20">
<u>Package Name:</u> <br>The package to which the function belongs (in grey). <br><br>
<u>Title:</u> <br>The name of the function and its purpose.
<br><br>
<u>Description:</u> <br>An extended description of what the function does.
<br><br>
<u>Usage</u>: <br>A description of the syntax of the function. This is where all the arguments can be found that can be supplied to the function, as well as any default values of these arguments.
<br><br>

---

<img alt="Arguments section of read.table help, listing argument names and their meanings." src="{{ '/assets/images/unit_images/u01/selfhelp_2.2.png' | relative_url }}" width="400" height="879" align="right" vspace="10" hspace="20">
<u>Arguments:</u> <br>A description of each argument. <br><br> Usually this includes a specification of the class (character, numeric, list, etc.). <br><br> This section is an important one to understand, because arguments are frequently a cause of errors in R.
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

---

<img alt="Value section of read.table help: the result is a data frame representing the file contents." src="{{ '/assets/images/unit_images/u01/selfhelp_2.3.png' | relative_url }}" width="400" height="271" align="right" vspace="10" hspace="20">
<u>Value:</u> <br>A description of the class of the value returned by the function.
<br><br><br><br><br><br><br>

---

<img alt="Memory usage notes in read.table help, including the cost of storing imported columns." src="{{ '/assets/images/unit_images/u01/selfhelp_2.4.png' | relative_url }}" width="400" height="431" align="right" vspace="10" hspace="20">
<u>Other comments:</u> <br>Other comments worth mentioning.
<br><br><br><br><br><br><br><br><br><br><br><br>

---

<img alt="Details section of read.table help describing how columns are read and converted." src="{{ '/assets/images/unit_images/u01/selfhelp_2.5.png' | relative_url }}" width="400" height="307" align="right" vspace="10" hspace="20">
<u>Details:</u> <br>This section provides more details about how the function works, including the various ways to call it and a longer discussion of its arguments.
<br><br><br><br><br><br>

---

<img alt="References section of read.table help, citing the underlying statistical-computing literature." src="{{ '/assets/images/unit_images/u01/selfhelp_2.6.png' | relative_url }}" width="400" height="122" align="right" vspace="10" hspace="20">
<u>References:</u> <br>References underlying the implementation or use of the function.
<br><br>

---

<img alt="See Also section of read.table help with related import functions and documentation." src="{{ '/assets/images/unit_images/u01/selfhelp_2.7.png' | relative_url }}" width="400" height="263" align="right" vspace="10" hspace="20">
<u>See also:</u> <br>Links to other relevant functions that can be read.
<br><br><br><br><br><br>

---

<img alt="Examples section of read.table help with runnable import code." src="{{ '/assets/images/unit_images/u01/selfhelp_2.8.png' | relative_url }}" width="400" height="427" align="right" vspace="10" hspace="20">
<u>Examples:</u> <br>Worked examples of real R code that can be pasted into the R console and run.
<br><br><br><br><br><br><br><br><br><br><br>

---

## Summary

* **Title:** name of the function.
* **Description:** a short description of what the function does.
* **Usage:** the syntax of the function.
* **Arguments:** the description of the arguments taken by the function.
* **Value:** the value returned by the function
* **Examples:** provide examples on how to use the function

## Try reading the help yourself {#try-reading-the-help-yourself}

Use `?read.table` to answer these questions in your own words:

1. Which argument skips introductory lines, and what is its default?
2. Which argument limits the number of data rows read? What does its default mean?
3. What kind of object does the function return? Which operator would you use to store it under the name `trees`?

<details markdown="1">
<summary>Suggested answers</summary>

1. `skip` controls how many initial lines are skipped. Its default is `0`, so reading starts at the beginning of the file.
2. `nrows` sets the maximum number of data rows. Its default, `-1`, places no row limit; `nrows = 2` reads at most two data rows after any skipped lines and header.
3. It returns a data frame. Use `trees <- read.table(...)`, replacing `...` with the actual arguments needed by your file. The arrow assigns the returned value; the equals signs inside the call connect argument names to their supplied values.

</details>

**Ready to continue:** you can find an argument's meaning and default, choose settings for a file, and identify the returned object. Practise changing the supplied import in [R Syntax]({{ '/unit01/unit01-04a_r_syntax.html' | relative_url }}#practice), or use the [Unit 01 summary]({{ '/unit01/unit01-07_summary.html' | relative_url }}#practice) to check your first saved script.




<!--
## Further reading

???
Syntax Erklärung in die help Seite einbauen
  - sowas mit function(object, argument=parameter) und wie man das in der Hilfe findet
  - funktionsname z.b. read.csv, paket, argumente, parameter, reihenfolge, defaults wenn nicht explizit genannt.


  <br><br><br><br><br><br><br><br><br><br><br><br>

  <style>.unit p {text-align: justify;}</style>
  <div class="unit">
  <img src="{{ '/assets/images/unit_images/u01/selfhelp_2.3.png' | relative_url }}" width="400" height="271" align="right" vspace="10" hspace="20">
  <u>Value:</u> A description of the class of the value returned by the function.

add some day
-->
