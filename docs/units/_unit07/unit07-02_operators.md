---
title: Operators
header:
  image: /assets/images/unit_images/u07/header.png
  image_description: "loop"
  caption: "Photo by [Christopher Kuszajewski](https://pixabay.com/de/users/kuszapro-369349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537) [from Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=583537)"
---

> “Data is the new oil.” — Clive Humby
<!--more-->

Control structures require arithmetic, logical or also boolean operators which test simple relationships between two or more variables.
Depending on the test results, control structures can be used to decide how the program should go on.
Common simple examples include arithmetic (e.g. addition), comparison (e.g. "greater than" with >), and logical operations (e.g. AND, also written && in some languages).

| Operator  | Description                          | Example   |
|-----------|--------------------------------------|-----------|
| **Arithmetic Operators** ||
| +         | Addition                             | `x + y` |
| -         | Subtraction                          | `x - y` |
| *         | Multiplication                       | `x * y` |
| /         | Division                             | `x / y` |
| ^ or **   | Exponentiation                       |  `x^y`  |
| x %% y    | Modulus (x mod y)                    | `x %% y` |
| **Relational Operators** ||
| <         | test if x is smaller than y           | `x < y`  |
|   >       | test if x is greater than y           | `x > y`  |
|  ==       | test if x is exactly equal to y       | `x == y` |
|    >=     | test if x is greater or equal than y  | `x >= y` |
|   <=      | test if x is smaller or equal than y  | `x <= y` |
|   !=      | test if x is not equal to y           | `x != y` |
| **Logical Operators** ||
| !         | logical NOT                           | `!x`        |
| &         | element-wise logical AND              | `x & y`     |
| &&        | logical AND                           | `x && y`    |
| &#124;     | element-wise logical OR              |  <code>y &#124; y</code>    |
| &#124;&#124;        | logical OR                  |  <code>x &#124;&#124; y</code>  |

------

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
  <p><strong>Information</strong>
  <br>
<ul>
    <li>Modulo (mod) is a mathematical function that names the remainder of a division of two integers.<br><br>
  <center>Example: 10 %% 3 = 1 (i.e. "ten modulo three equals one") <br> because 10 / 3 = 3, remainder 1 (3 * 3 + 1 = 10)</center></li><br>

    <li>Relational operators are used to compare between values.</li> <br>

    <li>Logical operators are used to carry out Boolean operations like AND, OR etc. Such operators compare two variables and return true or false depending on the result of the comparison.</li><br>

    <li>Operators & and &#124; perform element-wise operation producing result having length of the longer operand. <br><br> But && and &#124;&#124; examines only the first element of the operands resulting into a single length logical vector.</li>
  </ul>
  </p>
</div>
</body>
</html>



<!--
## Further reading

add some day
-->
