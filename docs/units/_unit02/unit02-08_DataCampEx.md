---
title: "DataCamp Exercise"
header:
  image: /assets/images/unit_images/u03/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---
It is time for DATA CAMP exercises!

<!--more-->

* R makes use of the `#` sign to add comments, so that you and others can understand what the R code is about. Comments are not run as R code, so they will not influence your result. You will find the task written as comment.
* Write directly in the `script.R` window on the left. The comments are telling you what to do.
* When you are ready press `Submit` and every line of code is interpreted and executed by R and you get a message whether or not your code was correct.
* The output of your R code is shown in the `Console` panel on the right.
* Press `Hint` for tips.
* Press `Solution` for a new tab showing the solution.
* `Be patient:` this may take some time to load.

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
      <h2>Apples and oranges</h2>
    </div>

  <p>Common knowledge tells you not to add apples and oranges. <br>
  The <code class="language-plaintext highlighter-rouge">my_apples</code> and <code class="language-plaintext highlighter-rouge">my_oranges</code> variables both contained a number in the previous exercise. The <code class="language-plaintext highlighter-rouge">+</code> operator works with numeric variables in R. If you really tried to add "apples" and "oranges", and assigned a text value to the variable <code class="language-plaintext highlighter-rouge">my_oranges</code> (see the editor), you would be trying to assign the addition of a numeric and a character variable to the variable <code class="language-plaintext highlighter-rouge">my_fruit</code>. This is not possible.</p>

<p><u>Instructions:</u></p>
<ul><li>Submit the answer and read the error message. Make sure to understand why this did not work.</li>
<li>Adjust the code so that R knows you have 6 oranges and thus a fruit basket with 11 pieces of fruit.</li></ul>


    <div data-datacamp-exercise data-lang="r" data-height="350">
      <code data-type="pre-exercise-code"># no pec</code>
      <code data-type="sample-code">
        # Assign a value to the variable my_apples
        my_apples &lt;- 5

        # Fix the assignment of my_oranges
        my_oranges &lt;- &quot;six&quot;

        # Create the variable my_fruit and print it out
        my_fruit &lt;- my_apples + my_oranges
        my_fruit
      </code>
      <code data-type="solution">
        # Assign a value to the variable my_apples
        my_apples &lt;- 5

        # Fix the assignment of my_oranges
        my_oranges &lt;- 6

        # Create the variable my_fruit and print it out
        my_fruit &lt;- my_apples + my_oranges
        my_fruit
      </code>
      <code data-type="sct">
        test_error(incorrect_msg = &quot;You can do this by setting the `my_oranges`
        variable to
        a numeric value, not a string!&quot;)
        test_object(&quot;my_apples&quot;, incorrect_msg = &quot;Make sure that `my_apples`
        still contains `5`.&quot;)
        test_object(&quot;my_oranges&quot;, incorrect_msg = &quot;Make sure that
        `my_oranges` is
        equal to `6`.&quot;)
        test_object(&quot;my_fruit&quot;, incorrect_msg = &quot;The value of `my_fruit` is
        not
        correct. It should be 11, the sum of `my_apples` and `my_oranges`.&quot;)
        test_output_contains(&quot;my_fruit&quot;, incorrect_msg = &quot;Don&#39;t remove
        the
        line that prints out `my_fruit`.&quot;)
        success_msg(&quot;Awesome, keep up the good work! Continue to the next exercise.&quot;)
      </code>
      <div data-type="hint">
        <p>You have to assign the numeric value
          <code>6</code> to the
          <code>my_oranges</code> variable instead of the character value
          <code>&quot;six&quot;</code>. Note how the quotation marks are used to indicate
          that
          <code>&quot;six&quot;</code> is a character.
        </p>
      </div>
    </div>
  </div>

<h2>   </h2>

<div class="exercise">
    <div class="title">
      <h2>Basic data types in R</h2>
    </div>

<p>R works with numerous data types. Some of the most basic types to get started are:</p>
<ul><li>Decimal values like <code class="language-plaintext highlighter-rouge">4.5</code> are called <b>numerics</b>.</li>
<li>Whole numbers like <code class="language-plaintext highlighter-rouge">4</code> are called <b>integers</b>. Integers are also numerics.</li>
<li>The Boolean values <code class="language-plaintext highlighter-rouge">TRUE</code> or <code class="language-plaintext highlighter-rouge">FALSE</code> are called <b>logical</b>.</li>
<li>Text (or string) values are called <b>characters</b>.
<br> Note how the quotation marks in the editor indicate that <code class="language-plaintext highlighter-rouge">"Apple"</code> is a string just like <code class="language-plaintext highlighter-rouge">"five"</code>.</li></ul>

<p><u>Instructions:</u></p>
Change the value of the following variables:
<ul><li><code class="language-plaintext highlighter-rouge">my_numeric</code> to 42.</li>
<li><code class="language-plaintext highlighter-rouge">my_character</code> to "universe". Note that the quotation marks indicate that "universe" is a character.</li>
<li><code class="language-plaintext highlighter-rouge">my_logical</code> to FALSE.</li>
</ul>

<p><i>Note that R is case sensitive!</i></p>

    <div data-datacamp-exercise data-lang="r" data-height="350">
      <code data-type="pre-exercise-code"># no pec</code>
      <code data-type="sample-code">
        # Change my_numeric to be 42
        my_numeric &lt;- 42.5

        # Change my_character to be &quot;universe&quot;
        my_character &lt;- &quot;some text&quot;

        # Change my_logical to be FALSE
        my_logical &lt;- TRUE
      </code>
      <code data-type="solution">
        # Change my_numeric to be 42
        my_numeric &lt;- 42

        # Change my_character to be &quot;universe&quot;
        my_character &lt;- &quot;universe&quot;

        # Change my_logical to be FALSE
        my_logical &lt;- FALSE
      </code>
      <code data-type="sct">
        test_object(&quot;my_numeric&quot;, incorrect_msg = &quot;Have you correctly changed
        the
        declaration of `my_numeric` so it contains the value 42?&quot;)
        test_object(&quot;my_character&quot;, incorrect_msg = &quot;Have you correctly
        changed
        `my_character` to `\&quot;universe\&quot;`? Don&#39;t forget the quotes!&quot;)
        test_object(&quot;my_logical&quot;, incorrect_msg = &quot;Have you correctly changed
        `my_logical` to `FALSE`? All letters of `FALSE` should be capitalized!&quot;)
        success_msg(&quot;Great work! Continue to the next exercise.&quot;)
      </code>
      <div data-type="hint">
        <p>Replace the values in the editor with the values that are provided in the
          exercise.
          For example:

          <code>my_numeric &lt;- 42</code> assigns the value 42 to the variable
          <code>my_numeric</code>.
        </p>
      </div>
    </div>
  </div>

<h2>   </h2>

  <div class="exercise">
    <div class="title">
      <h2>What's that data type?</h2>
    </div>
    <p>Do you remember that when you added <code class="language-plaintext highlighter-rouge">5 + "six"</code>, you got an error due to a mismatch in data types? You can avoid such situations by checking the data type of a variable beforehand. You can do this with the <code class="language-plaintext highlighter-rouge">class()</code> function, as the code in the editor shows.</p>

<p><u>Instructions:</u></p>
<ul><li>Complete the code in the editor and also print out the classes of my_character and my_logical.</li></ul>

    <div data-datacamp-exercise data-lang="r" data-height="350">
      <code data-type="pre-exercise-code"># no pec</code>
      <code data-type="sample-code">
        # Declare variables of different types
        my_numeric &lt;- 42
        my_character &lt;- &quot;universe&quot;
        my_logical &lt;- FALSE

        # Check class of my_numeric
        class(my_numeric)

        # Check class of my_character


        # Check class of my_logical
      </code>
      <code data-type="solution">
        # Declare variables of different types:
        my_numeric &lt;- 42
        my_character &lt;- &quot;universe&quot;
        my_logical &lt;- FALSE

        # Check class of my_numeric
        class(my_numeric)

        # Check class of my_character
        class(my_character)

        # Check class of my_logical
        class(my_logical)
      </code>
      <code data-type="sct">
        msg &lt;- &quot;Do not change the declaration of the variables!&quot;
        lapply(c(&quot;my_numeric&quot;, &quot;my_character&quot;, &quot;my_logical&quot;),
        test_object, undefined_msg = msg, incorrect_msg = msg)
        patt &lt;- &quot;Have you included `class(%1$s)` to print out the data type of
        `%1$s`?&quot;
        test_output_contains(&quot;class(my_numeric)&quot;,
        incorrect_msg = &quot;Do not remove the code that prints out the type of
        `my_numeric`.&quot;)
        test_output_contains(&quot;class(my_character)&quot;,
        incorrect_msg = sprintf(patt, &quot;my_character&quot;))
        test_output_contains(&quot;class(my_logical)&quot;,
        incorrect_msg = sprintf(patt, &quot;my_logical&quot;))
        success_msg(&quot;Congratulations! This was the last exercise for this chapter. Head
        over to the next chapter to get immersed in the world of vectors!&quot;)
      </code>
      <div data-type="hint">
        <p>The code that prints the data type of
          <code>my_numeric</code> is already included; do a similar things for
          <code>my_character</code> and
          <code>my_logical</code>.
        </p>
      </div>
    </div>
  </div>

</body>
</html>

Congratulations! This was the last exercise for this chapter.
