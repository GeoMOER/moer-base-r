---
title: "?Help()?!"
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

## Online Ressources

There are internet search sites that are specialized for R searches, including [search.r-project.org](search.r-project.org) (which is the site used by RSiteSearch) and [Rseek.org](rseek.org).

It is also possible to use a general search site like Google, Ecosia, Duckduckgo etc. by qualifying the search with “R”, "Cran R" or the name of an R package (or both). It can be particularly helpful to paste an error message into a search engine to find out whether others have solved a problem that you encountered.

**Asking for help:**
If you find that you can’t answer a question or solve a problem yourself, you can ask others for help, either locally (if you know someone who is knowledgeable about R) or on the internet.

In order to ask a question effectively, it helps to phrase the question clearly, and, if you’re trying to solve a problem, to include a small, self-contained, reproducible example of the problem that others can execute. For information on how to ask questions, see, e.g., the [R mailing list posting guide](https://www.r-project.org/posting-guide.html){:target="_blank"}, and the document about [how to create reproducible examples for R](https://stackoverflow.com/questions/5963269/how-to-make-a-great-r-reproducible-example){:target="_blank"} on Stack Overflow.

Which leads us to **Stack Overflow:**
Stack Overflow is a well organized site for help and discussions about programming. It has excellent searchability and “R” is a very popular tag on the site. To go directly to R-related topics, visit [Questions tagged R](http://stackoverflow.com/questions/tagged/r){:target="_blank"}.

{% include figure image_path="/assets/images/unit_images/u01/help.png" caption="Using a search engine for help" %}

---
### ChatGPT

ChatGPT is a language model designed for natural language understanding and generation. It can – theoretically – be used for generating and annotating code and troubleshooting and you are free to use it for solving this courses tasks. There are also several possibilities to [implement ChatGPT in R](https://cran.r-project.org/web/packages/chatgpt/chatgpt.pdf). Note, however, that there are several potential issues:

1.  Accuracy: ChatGPT's responses may not always be accurate, leading to incorrect code generation or data analysis.
2.  Privacy: If sensitive or proprietary data is shared with ChatGPT during coding sessions, privacy concerns may arise.
3.	Legal: Depending on how ChatGPT is used, legal issues like copyright infringement or intellectual property violations could arise
4.	Ethical Considerations: There may be ethical concerns about the use of AI models like ChatGPT, such as biases in responses or misuse in certain contexts.

While ChatGPT might be a great help, it's important to use it responsibly, to validate generated code, and to be mindful of legal and ethical considerations while utilizing it in real-world projects. 
To effectively use ChatGPT for programming-related questions and tasks, and to evaluate whether it's accurate,  you need to have a basic understanding of how R works.

{% include figure image_path="/assets/images/unit_images/u01/ChatGPT.png" caption="Using ChatGPT for help" %}

Note, that use of generative AI (e.g., ChatGPT1 and other LLMs) is banned when posting content on Stack Overflow, according to their [policy](https://stackoverflow.com/help/gpt-policy):

*“Stack Overflow is a community built upon trust. The community trusts that users are submitting answers that reflect what they actually know to be accurate and that they and their peers have the knowledge and skill set to verify and validate those answers. The system relies on users to verify and validate contributions by other users with the tools we offer, including responsible use of upvotes and downvotes. Currently, contributions generated by GPT most often do not meet these standards and therefore are not contributing to a trustworthy environment”* 

---
### Google: "searchme": site:moer-base-r

<p>Although this page itself does not contain a search function for keywords, it can still be searched to a limited extent with the help of Google. To do this, enter the word to be searched for in quotation marks with a colon and the keyword <i>site:</i> plus the URL of the Base R page. By the way this works for every site on the web. The prerequisite, however, is that it is already indexed on Google with all its subpages, which is not always the case. <br> <br>

For example, if you want to search for the word "ratio", it looks like this:
</p>

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
* [R Documentation](https://www.rdocumentation.org/){:target="_blank"}
* [R Project Help](https://www.r-project.org/help.html){:target="_blank"}
* [R Manuals](https://cran.r-project.org/manuals.html){:target="_blank"}
* [Quick-R.net](https://www.statmethods.net/){:target="_blank"}
* [R-Graph-Gallery.com](https://www.r-graph-gallery.com/){:target="_blank"}
* [R-Bloggers.com](https://www.r-bloggers.com/){:target="_blank"}
* [German R-Forum](http://forum.r-statistik.de/index.php){:target="_blank"}
* [Stack Overflow with r questions](http://stackoverflow.com/questions/tagged/r){:target="_blank"}
* [Stack Overflow](https://stackoverflow.com/){:target="_blank"}
* Last but not least: simply use a search engine and phrase your problem.



<!--
## Further reading

<style>.unit p {text-align: justify;}</style>
<div class="unit">
<img src="google2.png" width="515" height="443" align="right" vspace="10" hspace="20">

add some day
-->
