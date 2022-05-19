---
title: "CSS in R Markdown"
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/spotlights/css_header.jpg
  image_description: "A spotlight"
  caption: "Image from [Wallup.net](https://wallup.net)"
---

<!--more-->
Before a CSS file can be included in a markdown document, you must first understand what CSS is and how it relates to HTML.

# Basics of web development
The holy trinity in web development: HTML, CSS, JavaScript and  are inevitably linked and working together.

<body>
<img src="https://html-css-js.com/images/og.jpg" width="451" height="334" align="right" vspace="10" hspace="20">
<p>
<b>HTML</b> provides the individual elements of the page, defines their type and the structure and how they are logically arranged to each other. The question is <u>"What is it"</u>? <br> <br>
<b>CSS</b> stands for Cascading Style Sheets and takes care of the question <u>"What does it look like?"</u> <br> <br>
With HTML and CSS, web pages are static. If I want to change elements or their appearance, <b>JavaScript</b> comes into play. The question would be: <u>"What should it do?"</u>?  <br>
Since HTML properties as well as CSS properties can be changed with JavaScript, the content and structure as well as the look and layout of a page can be changed. All one needs to do is say when this behavior should happen. For example if the color of a textbox should change as soon as someone touches it or a website should have interactive elements, JavaScript code is needed.


You can try the differences and play with the heads from the picture above on [html-css-js.com](https://html-css-js.com/).

For simplicity JavaScript is now omitted.
</p></body>

## What is HTML?
HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.

It is the language used to create webpages. "Hypertext" refers to the hyperlinks that an HTML page may contain. "Markup language" refers to the way tags are used to define the page layout and elements within the page.

Below is an example of HTML used to define a basic webpage with a title and a single paragraph of text.

---
```html
<!doctype html>
<html lang="de">
  <head>
    <title>Description of the page (appears in the title bar of the browser)</title>
  </head>
  <body>
    <p>This text is displayed in the browser window.</p>
  </body>
</html>
```

And the result:

---
<html lang="de">
  <head>
    <title>Description of the page (appears in the title bar of the browser)</title>
  </head>
  <body>
    <p>This text is displayed in the browser window.</p>
  </body>
</html>
---

These angle brackets are typical of HTML. HTML is a markup language, which means that there is text, and there are symbols that mark sections of text and tell the browser what that piece of text means. To distinguish symbols from text, you put them in angle brackets. The <span style="color: #259ebc"><html></span> symbol means: this is where the HTML section starts. If the symbols are to mark a section of text, there must be one for "end" in addition to the symbol for "beginning". The counterpart of <span style="color: #259ebc"><html></span> is positioned at the end of the example and it looks like this: <span style="color: #259ebc"></html></span>. It tells the browser that the HTML section ends here. End symbols differentiate from start symbols by the slash that comes between the angle bracket and the symbol name.

The first line defines what type of contents the document contains. `<!doctype html>` means the page is written in HTML5. Properly formatted HTML pages should include
<span style="color: #259ebc"><html></span>, <span style="color: #259ebc"><head></span>, and <span style="color: #259ebc"><body></span>, tags, which are all included in the example above. The page title, metadata, and links to referenced files are placed between the <span style="color: #259ebc"><head></span> tags. The actual contents of the page go between the <span style="color: #259ebc"><body></span> tags.

The web has gone through many changes over the past few decades, but HTML has always been the fundamental language used to develop webpages. Interestingly, while websites have become more advanced and interactive, HTML has actually gotten simpler. If you compare the source of an HTML5 page with a similar page written in HTML 4.01 or XHTML 1.0, the HTML5 page would probably contain less code. This is because modern HTML relies on **Cascading Style Sheets** or JavaScript to format nearly all the elements within a page.

So basically HTML is the text content on webpages.

---

More information and self-study elements on
* [w3schools.com](https://www.w3schools.com/html/)
* [selfhtml.org](https://wiki.selfhtml.org/wiki/Startseite).

---

## What is CSS?
CSS stands for **Cascading Style Sheets** with an emphasis placed on _Style_. While HTML is used to structure a web document (defining things like headlines and paragraphs, and allowing to embed images, video, and other media), CSS specifies the document’s style. Page layouts, colors, and fonts are all determined with CSS.

CSS is basically the appearance of a webpage.

When something should change in the appearance of a page, the browser needs to know:

* Which HTML element do we want to select (choose) in order to change its appearance?
* What about this element (what property) do we want to change? (Position, color, background color, text size...?).
* How should it finally look like (which value do we assign to the property)?

Examples are: <br>
Text color: red;<br>
background color: beige;<br>
text size: twice the normal size;<br>
Position: 2 cm further to the left;<br>
etc.

Such settings are called the style of an element. But not everything looks the same on a site. For example, headings are larger and bolder than normal text. This is because your browser already comes with extensive style rules for each element.

A style property is set, in general terms, with this notation:

```
name: value;
```
To assign the text color red to an element, use the color property. Colors can be specified in many ways, the easiest is to specify the color name (the list is extensive):
```
color: red;
```

And where to put it? Their place is in the style element, which must be found in the head area of the page. A style rule looks like this: <br>

{% include figure image_path="assets/images/spotlights/anatomy-of-a-css-rule.png" caption="Anatomy of a CSS rule. Image from [waiffarer.com](http://www.waiffarer.com)" %}

A CSS rule begins with a __selector__ that specifies which HTML elements the rule should apply to. One way to do this is to name HTML elements; this example rule applies to every <span style="color: #259ebc"><h2></span> element. The selector is followed by a left curly bracket ({), then the CSS properties to set for the selected elements. Each property is terminated by a semicolon. Finally, the rule is ended with a right curly bracket (}).

In the <span style="color: #259ebc"><head></span> area of your page, it may look like this:

```
<style>
h2 {
  color: red;
  background-color: beige;
  font-size: 1.5em;
}
p {
  color: brown;
}
</style>
```

Note that the semicolon after each property is important part of CSS syntax. Line breaks are irrelevant for CSS rules.

Besides the text color, the first rule specifies two other properties. One is the background-color, and the other is the font-size. 1.5 stands for "1.5" (one point five). You have to get used to this number notation with CSS. Like so many computer things, CSS comes from the USA, and there they use the dot as a decimal separator, not the comma as we do. The second rule sets the font color for all <span style="color: #259ebc"><p></span> elements to brown.

You can write as many CSS rules as you like in the <span style="color: #259ebc"><style></span> element. A separator between two rules is not required.

It is possible to store the formatting in a style element in the head of the page. But it makes more sense to collect them in one CSS file for all HTML documents. Therefore writing the CSS rulesets in a new file and save it under the name *format.css* in the same directory as the index file. It is necessary to tell the browser that it should consider the file *format.css* when it displays the index.html. It is possible to think it is obvious that the two files somehow belong together, but the browser does not.

For this the start page, the index.html file, has to be adjusted with <span style="color: #259ebc"><link rel="stylesheet" href="format.css"></span>
The new line just tells the browser to apply the CSS instructions from the file format.css to the HTML file. This line needs to be included in the other HTML files as well and in any subsequent ones that might be added later. This stylesheet now sets the appearance centrally for all web pages.

Note that for the subpages, which are after all in a directory other than index.html, you need to adjust the URL of the format.css: <span style="color: #259ebc"><link rel=".../stylesheet" href="format.css"></span>

```
<!doctype html>
<html lang="de">
  <head>
    <title>Description of the page (appears in the title bar of the browser)</title>
    <link rel="stylesheet" href="format.css">
  </head>
  <body>
    <p>This text is displayed in the browser window.</p>
  </body>
</html>
```
<br><br>

You don't have to reinvent the wheel to make a nice page. There are plenty of free code snippets on the web and even ready-made CSS styles for free or to buy.
Free CSS style templates available at
* [w3schools.com](https://www.w3schools.com/w3css/w3css_templates.asp)
* [templated.co](https://templated.co/)
* [free-css.com](https://www.free-css.com/)


<br><br>

**This Edureka video on "what is CSS" explains what is CSS along with all the varied elements and fundamentals of CSS.**
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6vbgZnQrpbU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<br><br>

## HTML and CSS in a nutshell

**At the end here are the differences between HTML and CSS**
{% include figure image_path="/assets/images/spotlights/html-css.png" caption="The differences between HTML and CSS from [codingdojo.com](www.codingdojo.com)" %}


---

Further information about CSS:
* [w3schools.com](https://www.w3schools.com/css/)
* [mozilla.org](https://developer.mozilla.org/de/docs/Learn/CSS)
* [css-lernen.net](http://www.css-lernen.net/)
* [learnlayout](https://learnlayout.com/)

---

## CSS in R Markdown
It is strongly recommended to learn at least the basics of CSS (and JavaScript) if you wish to customize the appearance of HTML documents.
For beginners, it is extremely important to understand selectors and precedence of rules in CSS, otherwise you may be confused why your custom CSS rules do not work as expected (they may not have enough precedence).

To include one or multiple custom stylesheets in an rmd document (R Markdown), you can use the css option, e.g.,

```
output:
  html_document:
    css: "style.css"
```

To include multiple stylesheets, you may list them in brackets, e.g.,

```
output:
  html_document:
    css: ["style-1.css", "style-2.css"]
```

Alternatively, you can use a CSS code chunk to embed the style rules directly in your Rmd document, e.g.,

```
{css, echo=FALSE}
p {
  font-size: 32px;
}
```

The chunk option `echo = FALSE` means the CSS code will not be displayed verbatim in the output, but a `<style>` tag containing the CSS code will be generated to the HTML output file.

Example with a list:

```
* Item 1
* Item 2

and

1. Item 1
1. Item 2
  - Sub a
  - Sub b
```

<br> The above Markdown renders to the following HTML:

```
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>    
<p>and</p>
<ol>
    <li>Item 1</li>
    <li>Item 2
        <ul>
            <li>Sub a</li>
            <li>Sub b</li>
        </ul>
    </li>
</ol>
```

<br> The Markdown ultimately renders to the following output:

---
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>    
<p>and</p>
<ol>
    <li>Item 1</li>
    <li>Item 2
        <ul>
            <li>Sub a</li>
            <li>Sub b</li>
        </ul>
    </li>
</ol>
---

Nice, but what if you want to style a particular Markdown list with a specific colored list? Markdown renders to empty HTML tags like <ul>, <li>, <p>, etc. without class names, so there is no way to add a unique class identifier to a Markdown element. Let’s use a neat CSS trick to easily style an individual Markdown element: the immediate sibling selector (+).

```
<style>
    .bold-list + ol {
        font-weight: 900;
        color: #257f96;
    }
</style>
```
```
<div class="bold-list"></div>
1. Item 1
1. Item 2
  - Sub a
  - Sub b

but this is not styled:

1. Another item 1
1. Another item 2
```
With this neat CSS trick we get this output:

<style>
    .bold-list + ol {
        font-weight: 900;
        color: #257f96;
    }
</style>

<div class="bold-list"></div>
1. Item 1
1. Item 2
  - Sub a
  - Sub b

but this is not styled:

1. Another item 1
1. Another item 2

---

**For more information about R Markdown syntax in general have a look at the R Markdown cheat sheet:**
<a href="https://geomoer.github.io/moer-base-r/assets/data/cheatsheets/rmarkdown-cheatsheet.pdf" download="rmarkdown-cheatsheet.pdf">Download R Markdown Cheat Sheet</a>{:target="_blank"}
{% include figure image_path="assets/images/cheatsheet/03pdf_rmarkdown_cheatsheet_p1.PNG" caption="R Markdown Cheat Sheet 1/2" %}
{% include figure image_path="assets/images/cheatsheet/03pdf_rmarkdown_cheatsheet_p2.PNG" caption="R Markdown Cheat Sheet 2/2" %}






<!--
## Further reading

add some day
-->
