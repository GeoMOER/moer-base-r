---
title: "Summary"
unit_summary: true
toc: TRUE
toc_float: TRUE
published: TRUE
header:
  image: /assets/images/unit_images/u01/header.png
  image_description: "Android Market-share Worldwide 2018-2020"
  caption: "Mobile Android operating system market share by version worldwide from 2018 to 2020: [StatCounter](https://gs.statcounter.com/android-version-market-share/mobile/worldwide/#monthly-201907-202001) [via Statista](https://www.statista.com/statistics/921152/mobile-android-version-share-worldwide/)"
---

You can now use RStudio to write and run a small R script, and find help when a command is unfamiliar.

<!--more-->

## What you learned

- **R** is the language that performs the calculations. **RStudio** provides an interface for writing code, running it, inspecting objects, and viewing plots.
- The **Console** runs commands immediately. A **script** saves commands as a text file so that you can run them again.
- The **Environment** pane shows objects in the current R session. The **Files**, **Plots**, **Packages**, and **Help** tabs support different tasks; their positions depend on your RStudio layout.
- Use `<-` to assign a value to an object. Object names are case sensitive: `height` and `Height` are different names.
- Functions take arguments in parentheses. Comments start with `#` and explain the code without being executed.

## A short recap in R

Run these lines from a saved script. In RStudio, use Ctrl+Enter on Windows/Linux or Cmd+Enter on macOS to send a line or selection to the Console.

```r
# Illustrative measurements in centimeters
height <- 12
width <- 5
area <- height * width
area
sqrt(area)
```

`area` is `60`; `sqrt(area)` is approximately `7.746`. Assignment stores a result, while entering an object's name prints its value. Parentheses control the order of calculations, for example `(2 + 3) * 4` gives `20`.

## Finding help

For a known function, enter `?sqrt` or `help("sqrt")`. For a topic whose function name you do not know, try `help.search("square root")` and inspect the results. Check the relevant parts of a help page:

| Section | What it tells you |
|---|---|
| Title and Description | What the function does. |
| Usage | How to call it and which arguments have defaults. |
| Arguments | What each input means and which values it accepts. |
| Value | What the function returns. |
| Examples | Calls you can run and adapt. |

When a command fails, read the error message, check spelling and parentheses, and reduce the problem to a few reproducible lines. Include those lines and the exact error when asking for help.

## Check your understanding

1. Explain the difference between typing a command in the Console and saving it in a script.
2. Change `width` to `8`. Which lines must you rerun to update `area` and its square root?
3. Find the **Arguments** and **Value** sections of `?sqrt`. What input does it expect, and what does it return?

Revisit [first steps]({{ '/unit01/unit01-04_first_steps.html' | relative_url }}) and [reading help files]({{ '/unit01/unit01-06_helpfiles.html' | relative_url }}) if needed.

## Test GUI

<iframe title="Interactive exercise: identify the RStudio panes" src="https://geomoer.github.io/moer-h5p-content/h5p-standalone-1.3.x/demo/base-r-unit01-03-gui.html" width="1090" height="792" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"> </iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
