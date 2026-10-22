---
title: Operators
order: 2
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "loop"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

> “Data is the new oil.” — Clive Humby
<!--more-->

Operators perform calculations, compare values, or combine logical values. Control structures use logical conditions to decide which code to run. Common examples include arithmetic operations such as addition (`+`), comparisons such as greater than (`>`), and Boolean operations such as AND (`&` or `&&` in R).

| Operator  | Description                          | Example   |
|-----------|--------------------------------------|-----------|
| **Arithmetic operators** ||
| +         | Addition                             | `x + y` |
| -         | Subtraction                          | `x - y` |
| *         | Multiplication                       | `x * y` |
| /         | Division                             | `x / y` |
| ^ or **   | Exponentiation                       |  `x^y`  |
| x %% y    | Modulus (x mod y)                    | `x %% y` |
| **Relational operators** ||
| <         | Test whether x is smaller than y           | `x < y`  |
|   >       | Test whether x is greater than y           | `x > y`  |
|  ==       | Test whether x equals y       | `x == y` |
|    >=     | Test whether x is greater than or equal to y  | `x >= y` |
|   <=      | Test whether x is less than or equal to y  | `x <= y` |
|   !=      | Test whether x differs from y           | `x != y` |
| **Logical operators** ||
| !         | logical NOT                           | `!x`        |
| &         | element-wise logical AND              | `x & y`     |
| &&        | logical AND                           | `x && y`    |
| &#124;     | element-wise logical OR              |  <code>x &#124; y</code>    |
| &#124;&#124;        | logical OR                  |  <code>x &#124;&#124; y</code>  |

------

<div class="course-info">
  <p><strong>Information</strong>
  <br>
<ul>
    <li>Modulo gives the remainder after division.<br><br>
  <center>Example: 10 %% 3 = 1 (i.e. "ten modulo three equals one") <br> because 10 / 3 = 3, remainder 1 (3 * 3 + 1 = 10)</center></li><br>

    <li>Relational operators compare values.</li> <br>

    <li>Logical operators carry out Boolean operations such as AND, OR, and NOT on logical values.</li><br>

    <li>Operators & and &#124; perform element-wise operations. Their result has the length of the longer operand. <br><br> Operators && and &#124;&#124; use a single logical value from each operand and return a single logical value. Use length-one operands; supplying a vector with more than one element causes an error in current R versions.</li>
  </ul>
  </p>
</div>



<!--
## Further reading

add some day
-->
