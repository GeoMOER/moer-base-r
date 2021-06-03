---
title: "Help?!"
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u01/header.png
  image_description: "Android Market-share Worldwide 2018-2020"
  caption: "Mobile Android operating system market share by version worldwide from 2018 to 2020: [StatCounter](https://gs.statcounter.com/android-version-market-share/mobile/worldwide/#monthly-201907-202001) [via Statista](https://www.statista.com/statistics/921152/mobile-android-version-share-worldwide/)"
---
*What to do if you get lost in R?*

<!--more-->

Before asking others for help, it’s generally a good idea to try to help yourself first. R includes extensive facilities for accessing documentation and searching for help. There are also specialized search engines for accessing information about R on internet search engines can also prove useful.

## *help()* and *?*

The `help()` function and `?` help operator in R provide access to the documentation pages for R functions, data sets, and other objects, both for packages in the standard R distribution and for contributed packages. To access documentation for the standard `lm` (linear model) function, for example, enter the command `help(lm)` or `help("lm")`, or `?lm` or `?"lm"` (i.e., the quotes are optional).

To access help for a function in a package that’s *not* currently loaded, specify in addition the name of the package: For example, to obtain documentation for the `rlm()` (robust linear model) function in the MASS package, `help(rlm, package="MASS")`.

You may also use the `help()` function to access information about a package in your library — for example, `help(package="MASS")` — which displays an index of available help pages for the package along with some other information.

Help pages for functions usually include a section with executable examples illustrating how the functions work. You can execute these examples in the current R session via the `example()` command: e.g., `example(lm)`.

other examples: `?mean`, `?plot`, `?hist`

`help.start()` starts and displays a hypertext based version of R’s online documentation in your default browser that provides links to locally installed versions of the R manuals, a listing of your currently installed packages and other documentation resources.

The `help()` function and `?` operator are useful *only if you already know* the name of the function that you wish to use. There are also facilities in the standard R distribution for discovering functions and other objects. The following functions cast a progressively wider net. Use the help system to obtain complete documentation for these functions:

* `apropos()`
* `help.search()` and `??`
* `RSiteSearch()`
* `findfn()` and `???`



## Online Ressources

There are internet search sites that are specialized for R searches, including [search.r-project.org](search.r-project.org) (which is the site used by RSiteSearch) and [Rseek.org](rseek.org).

It is also possible to use a general search site like Google, Ecosia, Duckduckgo etc. by qualifying the search with “R”, "Cran R" or the name of an R package (or both). It can be particularly helpful to paste an error message into a search engine to find out whether others have solved a problem that you encountered.

**Asking for help:**
If you find that you can’t answer a question or solve a problem yourself, you can ask others for help, either locally (if you know someone who is knowledgeable about R) or on the internet.

In order to ask a question effectively, it helps to phrase the question clearly, and, if you’re trying to solve a problem, to include a small, self-contained, reproducible example of the problem that others can execute. For information on how to ask questions, see, e.g., the [R mailing list posting guide](https://www.r-project.org/posting-guide.html), and the document about [how to create reproducible examples for R](https://stackoverflow.com/questions/5963269/how-to-make-a-great-r-reproducible-example) on Stack Overflow.

Which leads us to **Stack Overflow:**
Stack Overflow is a well organized site for help and discussions about programming. It has excellent searchability and “R” is a very popular tag on the site. To go directly to R-related topics, visit [Questions tagged R](http://stackoverflow.com/questions/tagged/r).

{% include figure image_path="/assets/images/unit_images/u01/help.png" caption="Using a search engine for help" %}

---

### Google: "searchme": site:moer-base-r

<style>.unit p {text-align: justify;}</style>
<div class="unit">
<img src="google2.png" width="515" height="283" align="right" vspace="10" hspace="20">
<p>Although the page itself does not contain a search function for keywords, the page can still be searched to a limited extent with the help of Google. To do this, enter the word to be searched for in quotation marks with a colon and the keyword <i>site:</i> plus the URL of the Base R page. By the way this works for every site on the web. <br> <br>

For example, if you want to search for the word "ratio", it looks like this:
</p></div>

<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
div {
  margin-bottom: 15px;
  padding: 4px 12px;
}

.info {
  background-color: #e7f3fe;
  border-left: 6px solid #2196F3;
}

</style>
</head>
<body>
<div class="info">
  <p> "ratio": site:https://geomoer.github.io/moer-base-r </p>
</div>
</body>
</html>

---

Long Story short:

* R integrated help through functions: `help()` ; `?` ; `apropos()` ; `help.search()` ; `RSiteSearch()` ; `findfn()`
* [R Documentation](https://www.rdocumentation.org/)
* [R Project Help](https://www.r-project.org/help.html)
* [R Manuals](https://cran.r-project.org/manuals.html)
* [Quick-R.net](https://www.statmethods.net/)
* [R-Graph-Gallery.com](https://www.r-graph-gallery.com/)
* [R-Bloggers.com](https://www.r-bloggers.com/)
* [German R-Forum](http://forum.r-statistik.de/index.php)
* [Stack Overflow with r questions](http://stackoverflow.com/questions/tagged/r)
* [Stack Overflow](https://stackoverflow.com/)
* Last but not least: simply use a search engine and phrase your problem.



<!--
## Further reading

add some day
-->
