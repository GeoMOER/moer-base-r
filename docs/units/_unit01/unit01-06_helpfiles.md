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

Now that you know how to access the R-intern help pages you need to know how to read them. Typically, the R Help files follow a fairly standard outline as seen below in a heavily clipped screenshot of the function `read.table`. Different functions might have different sections, but these are the main ones you should be aware of:

<img src="selfhelp_2.1.png" width="400" height="631" align="right" vspace="10" hspace="20">
<u>Package Name:</u> <br>The package to which the function belongs to (in grey). <br><br>
<u>Title:</u> <br>The name of the function and its purpose.
<br><br>
<u>Description:</u> <br>An extended description of what the function does.
<br><br>
<u>Usage</u>: <br>A description of the syntax of the function. This is where all the arguments can be found that can be supplied to the function, as well as any default values of these arguments.
<br><br>

---

<img src="selfhelp_2.2.png" width="400" height="879" align="right" vspace="10" hspace="20">
<u>Arguments:</u> <br>A description of each argument. <br><br> Usually this includes a specification of the class (character, numeric, list, etc.). <br><br> This section is an important one to understand, because arguments are frequently a cause of errors in R.
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

---

<img src="selfhelp_2.3.png" width="400" height="271" align="right" vspace="10" hspace="20">
<u>Value:</u> <br>A description of the class of the value returned by the function.
<br><br><br><br><br><br><br>

---

<img src="selfhelp_2.4.png" width="400" height="431" align="right" vspace="10" hspace="20">
<u>Other comments:</u> <br>Other comments worth mentioning.
<br><br><br><br><br><br><br><br><br><br><br><br>

---

<img src="selfhelp_2.5.png" width="400" height="307" align="right" vspace="10" hspace="20">
<u>Details:</u> <br>Extended details about how the function works, provides longer descriptions of the various ways to call the function and a longer discussion of the arguments.
<br><br><br><br><br><br>

---

<img src="selfhelp_2.6.png" width="400" height="122" align="right" vspace="10" hspace="20">
<u>References:</u> <br>References on which scientific basis the functions and arguments are based.
<br><br>

---

<img src="selfhelp_2.7.png" width="400" height="263" align="right" vspace="10" hspace="20">
<u>See also:</u> <br>Links to other relevant functions that can be read.
<br><br><br><br><br><br>

---

<img src="selfhelp_2.8.png" width="400" height="427" align="right" vspace="10" hspace="20">
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




<!--
## Further reading

???
Syntax Erklärung in die help Seite einbauen
  - sowas mit function(object, argument=parameter) und wie man das in der Hilfe findet
  - funktionsname z.b. read.csv, paket, argumente, parameter, reihenfolge, defaults wenn nicht explizit genannt.


  <br><br><br><br><br><br><br><br><br><br><br><br>

  <style>.unit p {text-align: justify;}</style>
  <div class="unit">
  <img src="selfhelp_2.3.png" width="400" height="271" align="right" vspace="10" hspace="20">
  <u>Value:</u> A description of the class of the value returned by the function.

add some day
-->
