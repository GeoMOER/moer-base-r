---
title: "DataCamp Exercise"
header:
  image: /assets/images/unit_images/u03/header.png
  image_description: "neon data"
  caption: "Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) [from unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)"
---
It is time for DATA CAMP exercises!

<!--more-->
Take your first steps with R. To test your knowledge up to know you can test yourself in the following exercises.

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
      <h2>Simple calculation to start:</h2>
    </div>
    <div data-datacamp-exercise data-lang="r" data-height="500">
      <code data-type="pre-exercise-code"># no pec</code>
      <code data-type="sample-code">
        # Calculate 3 + 4
        3 + 4

        # Calculate 6 + 12


      </code>
      <code data-type="solution">
        # Calculate 3 + 4
        3 + 4

        # Calculate 6 + 12
        6 + 12</code>
      <code data-type="sct">
        test_output_contains(&quot;18&quot;, incorrect_msg = &quot;Make sure to add `6 + 12`
        on
        a new line. Do not start the line with a `#`, otherwise your R code is not executed!&quot;)
        success_msg(&quot;Awesome! See how the console shows the result of the R code you
        submitted? Now that you&#39;re familiar with the interface, let&#39;s get down to R
        business!&quot;)
      </code>
      <div data-type="hint">
        <p>Just add a line of R code that calculates the sum of 6 and 12, just like the
          example
          in the sample code!</p>
      </div>
    </div>
  </div>

<h2>   </h2>

<div class="exercise">
  <div class="title">
    <h2>Arithmetic calculations</h2>
  </div>
<p>In its most basic form, R can be used as a simple calculator with the following arithmetic operators: </p>

<ul>
<li>Addition: + </li>
<li>Subtraction: - </li>
<li>Multiplication: * </li>
<li>Division: / </li>
<li>Exponentiation: ^ </li>
<li>Modulo: %% </li>
</ul>
<p>The last two might need some explaining: <br><br>

The <code class="language-plaintext highlighter-rouge">^</code> operator raises the number to its left to the power of the number to its right: for example <code class="language-plaintext highlighter-rouge">3^2</code> is 9. <br><br>
The modulo <code class="language-plaintext highlighter-rouge">%%</code> returns the remainder of the division of the number to the left by the number on its right, for example <code class="language-plaintext highlighter-rouge">5 %% 3</code> is 2.</p>

<p><u>Instructions:</u></p>
<ul><li>Type 5^2 in the editor to calculate 2 to the power 5. </li>
<li>Type 28 %% 6 to calculate 28 modulo 6. </li>
<li>Submit the answer and have a look at the R output in the console. </li></ul>


    <div data-datacamp-exercise data-lang="r" data-height="350">
      <code data-type="pre-exercise-code"># no pec</code>
      <code data-type="sample-code">
        # An addition example
        5 + 5

        # A subtraction example
        5 - 5

        # A multiplication example
        3 * 5

        # A division example
        10 / 2

        # Exponentiation (5²)


        # Modulo  (28 modulo 6)


      </code>
      <code data-type="solution">
        # An addition
        5 + 5

        # A subtraction
        5 - 5

        # A multiplication
        3 * 5

        # A division
        10 / 2

        # Exponentiation (5²)
        5 ^ 2

        # Modulo (28 modulo 6)
        28 %% 6
      </code>
      <code data-type="sct">
        msg = &quot;Do not remove the other arithmetic examples!&quot;
        test_output_contains(&quot;5^2&quot;, incorrect_msg = &quot;The exponentiation
        example
        is not correct. Write `5 ^ 2` on a new line.&quot;)
        test_output_contains(&quot;28 %% 6&quot;, incorrect_msg = &quot;There seems to be an
        issue with the modulo example. Write `28 %% 6` on a new line.&quot;)
        success_msg(&quot;Great! Head over to the next exercise.&quot;)
      </code>
      <div data-type="hint">
        <p>Another example of the modulo operator:
          <code>9 %% 2</code> equals
          <code>1</code>.
        </p>
      </div>
    </div>
  </div>

<h2>   </h2>

  <div class="exercise">
    <div class="title">
      <h2>Assign variables part 1</h2>
    </div>

  <p>A basic concept in (statistical) programming is called a variable. <br><br>

    A variable allows you to store a value (e.g. 4) or an object (e.g. a function description) in R. You can then later use this variable's name to easily access the value or the object that is stored within this variable.

    You can assign a value 4 to a variable with the command <code class="language-plaintext highlighter-rouge">my_var <- 4</code>.</p>

    <p><u>Instructions:</u></p>
    <ul><li>Complete the code in the editor such that it assigns the value 42 to the variable x.</li>
    <li>Print x.</li>
    <li>Submit the answer.</li></ul>

    <div data-datacamp-exercise data-lang="r" data-height="350">
      <code data-type="pre-exercise-code"># no pec</code>
      <code data-type="sample-code">
        # Assign the value 42 to x

        # Print out the value of the variable x

      </code>
      <code data-type="solution">
        # Assign the value 42 to x
        x &lt;- 42

        # Print out the value of the variable x
        x
      </code>
      <code data-type="sct">
        test_object(&quot;x&quot;, undefined_msg = &quot;Make sure to define a variable `x`.&quot;,
        incorrect_msg = &quot;Make sure that you assign the correct value to `x`.&quot;)
        success_msg(&quot;Good job! Have you noticed that R does not print the value of a
        variable to the console when you did the assignment? `x &lt;- 42` did not generate
        any
        output, because R assumes that you will be needing this variable in the future.
        Otherwise you wouldn&#39;t have stored the value in a variable in the first place,
        right? Proceed to the next exercise!&quot;)
      </code>
      <div data-type="hint">
        <p>Look at how the value 4 was assigned to
          <code>my_variable</code> in the exercise&#39;s assignment. Do the exact same
          thing
          in the editor, but now assign 42 to the variable
          <code>x</code>.
        </p>
      </div>
    </div>
  </div>

<h2>   </h2>

<div class="exercise">
    <div class="title">
      <h2>Assign variables part 2</h2>
    </div>
<p>Suppose you have a fruit basket with five apples and you want to store the number of apples in a variable with the name <code class="language-plaintext highlighter-rouge">my_apples</code>.</p>

<p><u>Instructions:</u></p>
<ul><li>Type the following code in the editor: my_apples <- 5. This will assign the value 5 to my_apples.</li>
<li>Print my_apples.</li>
<li>Submit the answer.</li></ul>

    <div data-datacamp-exercise data-lang="r" data-height="350">
      <code data-type="pre-exercise-code"># no pec</code>
      <code data-type="sample-code">
        # Assign the value 5 to the variable my_apples


        # Print out the value of the variable my_apples
      </code>
      <code data-type="solution">
        # Assign the value 5 to the variable my_apples
        my_apples &lt;- 5

        # Print out the value of the variable my_apples
        my_apples
      </code>
      <code data-type="sct">
        test_object(&quot;my_apples&quot;,
        undefined_msg = &quot;Please make sure to define a variable `my_apples`.&quot;,
        incorrect_msg = &quot;Make sure that you assign the correct value to `my_apples`.&quot;)
        test_output_contains(&quot;my_apples&quot;, incorrect_msg = &quot;Have you
        explicitly
        told R to print out the `my_apples` variable to the console?&quot;)
        success_msg(&quot;Great! Continue to the next exercise!&quot;)
      </code>
      <div data-type="hint">
        <p>Remember that if you want to assign a number or an object to a variable in R, you
          can
          make use of the assignment operator
          <code>&lt;-</code>. Alternatively, you can use
          <code>=</code>, but
          <code>&lt;-</code> is widely preferred in the R community.
        </p>
      </div>
    </div>
  </div>

<h2>   </h2>

<div class="exercise">
    <div class="title">
      <h2>Assign variables part 3</h2>
    </div>

<p>Every tasty fruit basket needs oranges, so you decide to add six oranges. Your reflex is to immediately create the variable <code class="language-plaintext highlighter-rouge">my_oranges</code> and assign the value 6 to it. Next, you want to calculate how many pieces of fruit you have in total. Since you have given meaningful names to these values, you can now code this in a clear way: <code class="language-plaintext highlighter-rouge">my_apples + my_oranges</code>.</p>

<p><u>Instructions:</u></p>
<ul><li>Assign to <code class="language-plaintext highlighter-rouge">my_oranges</code> the value 6.</li>
<li>Add the variables <code class="language-plaintext highlighter-rouge">my_apples</code> and <code class="language-plaintext highlighter-rouge">my_oranges</code> and have R simply print the result.</li>
<li>Assign the result of adding my_apples and my_oranges to a new variable <code class="language-plaintext highlighter-rouge">my_fruit</code>.</li></ul>

    <div data-datacamp-exercise data-lang="r" data-height="350">
      <code data-type="pre-exercise-code"># no pec</code>
      <code data-type="sample-code">
        # Assign a value to the variables my_apples and my_oranges
        my_apples &lt;- 5


        # Add these two variables together


        # Create the variable my_fruit
      </code>
      <code data-type="solution">
        # Assign a value to the variables my_apples and my_oranges
        my_apples &lt;- 5
        my_oranges &lt;- 6

        # Add these two variables together
        my_apples + my_oranges

        # Create the variable my_fruit
        my_fruit &lt;- my_apples + my_oranges
      </code>
      <code data-type="sct">
        test_object(&quot;my_apples&quot;, incorrect_msg = &quot;Keep the line that assigns
        5 to
        `my_apples`.&quot;)
        test_object(&quot;my_oranges&quot;, incorrect_msg = &quot;Keep the line that assigns
        6
        to `my_oranges`.&quot;)
        test_output_contains(&quot;my_apples + my_oranges&quot;,
        incorrect_msg = &quot;Make sure to print out the result of adding `my_apples` and
        `my_oranges`. The code example in the description already gives away the answer to
        this
        instruction!&quot;)
        msg &lt;- &quot;Have you used `my_fruit &lt;- my_apples + my_oranges` to create the
        `my_fruit` variable?&quot;
        test_object(&quot;my_fruit&quot;, undefined_msg = msg, incorrect_msg = msg)
        success_msg(&quot;Nice one! The great advantage of doing calculations with variables
        is
        reusability. If you just change `my_apples` to equal 12 instead of 5 and rerun the
        script, `my_fruit` will automatically update as well. Continue to the next exercise.&quot;)
      </code>
      <div data-type="hint">
        <p>
          <code>my_fruit</code> is just the sum of
          <code>my_apples</code> and
          <code>my_oranges</code>. You can use the
          <code>+</code> operator to sum the two and
          <code>&lt;-</code> to assign that value to the variable
          <code>my_fruit</code>.
        </p>
      </div>
    </div>
  </div>

<h2>   </h2>
