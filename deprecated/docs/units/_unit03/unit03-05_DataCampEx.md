---
title: "DataCamp Exercise"
toc: TRUE
published: FALSE
toc_float: TRUE
header:
  image: /assets/images/unit_images/u03/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---
Try yourself in Exercise 1!

<!--more-->
<html>
<head>
  <meta charset="utf-8" />
  <title>DataCamp Light | Standalone example</title>
  <link rel='shortcut icon' type='image/x-icon' href='https://www.datacamp.com/assets/favicon.ico'/>
  <style>
    .exercise {
      margin: 50px;
    }

    [data-datacamp-exercise] {
        visibility: hidden;
      }
  </style>
  <script async src="//cdn.datacamp.com/dcl/latest/dcl-react.js.gz"></script>
</head>

<body>
<div class="exercise">
  <div class="title">
    <h2>What's that data type?</h2>
  </div>
  <p>Test <code class="language-plaintext highlighter-rouge">class()</code> Test.</p>

<p><u>Instructions:</u></p>
<ul><li>Test</li>
<li>Test</li>
<li>Test</li>
<li>Test</li></ul>

  <div data-datacamp-exercise data-lang="r" data-height="500" data-show-run-button>

    <code data-type="pre-exercise-code"># no pec</code>

    <code data-type="sample-code">
      # Define the variable vegas

    </code>

    <code data-type="solution">
      # Define the variable vegas
      vegas &lt;- &quot;Go!&quot;

    </code>

    <code data-type="sct">
    msg = &quot;Do not remove the other examples!&quot;
    test_object(&quot;vegas&quot;, incorrect_msg = &quot;Have you correctly
    assigned `vegas` to `\&quot;Go!\&quot;`? Don&#39;t forget the quotes!&quot;)
    success_msg(&quot;Great work! Continue to the next exercise.&quot;)
    </code>

    <div data-type="hint">
      <p>Just type the following line in the editor:<code>vegas <- "Go!"</code>.
      </p>
    </div>
  </div>
</div>
</body>
</html>



<!--
https://cdn.datacamp.com/dcl-react-prod/index.html#tutorial

Pre-exercise code
This code will be run before any other code. This is useful if you want to load some packages or initialize some variables beforehand.

Sample code
This code will be present in the editor when your student opens the page.

Solution
The code that you consider "correct". This will show up when the user presses the "Solution" button.

SCT code: Submission Correctness Test (SCT)
This is the code that will check if your student's code is correct or not.

<code data-type="sct">
	test_object("a")
	test_function("print")
	success_msg("Great job!")
</code>

In our example the first line checks whether the user declared the variable a and whether its value matches that of the solution code. The second line checks whether the print function is called and lastly a success message is specified that will be shown to the user when the exercise is successfully completed.

Hint
This will be shown when the student presses the “Hint” button.

&lt; stands for the less-than sign: <
&gt; stands for the greater-than sign: >
&le; stands for the less-than or equals sign: ≤
&ge; stands for the greater-than or equals sign: ≥
-->
