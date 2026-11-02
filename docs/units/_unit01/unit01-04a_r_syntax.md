---
title: "R Syntax"
toc: true
toc_label: On this page
---

Read an R function call from left to right, then save and rerun a small data import.

<!--more-->

{% include self-study-start.html %}

**Syntax** is the set of rules for writing valid code. You have already used names, values and the assignment arrow in [First Steps in R]({{ '/unit01/unit01-04_first_steps.html' | relative_url }}). Here we connect those pieces in a function call: an instruction to run a named function with the inputs it needs.

## Prepare the example {#prepare-the-example}

1. Open your RStudio project using its `.Rproj` file. If you need a project and your first saved script, follow the [short setup in First Steps]({{ '/unit01/unit01-04_first_steps.html' | relative_url }}#save-and-rerun-your-first-script).
2. In RStudio's **Files** pane, choose **New Folder** and name it `Data`. Alternatively, create that folder in your computer's file manager, inside the project folder.
3. <a href="{{ '/assets/data/example.csv' | relative_url }}" download="example.csv">Download example.csv</a> and save it as `Data/example.csv`. If your browser displays the text, use **Save As** to save the file. Move it from Downloads into `Data/` if needed; keep its name and contents.
4. Choose **File > New File > R Script** and save it as `first-import.R` beside the `.Rproj` file.

Your project now contains these files:

```text
base-r-practice/
├── base-r-practice.Rproj
├── first-steps.R
├── first-import.R
└── Data/
    └── example.csv
```

Your own project name may differ. The supplied file contains three invented tree observations for practising imports; heights are in meters:

```text
tree,height_m
beech,18.5
oak,21.0
pine,16.2
```

The first line names the two columns. Commas separate their values; a decimal point separates the whole and fractional parts of a height.

Opening the `.Rproj` sets the **working directory** to the project folder. A **relative path** starts there: `Data/example.csv` means enter `Data`, then find `example.csv`. Add these commands to your script and run them:

```r
getwd()
file.exists("Data/example.csv")
```

`getwd()` prints your project folder's location. `file.exists()` should return `TRUE`, meaning R can find the file. If it returns `FALSE`, reopen the correct `.Rproj` and check the folder, capitalization and filename, including an accidental extra extension such as `example.csv.txt`. Saving a script alone does not set the working directory. Keep it at the project folder; the path already includes `Data/`.

## Read a function call from left to right {#read-a-function-call-from-left-to-right}

Add this line to your script and run it. `read.table()` reads a text file and returns a table called a **data frame**:

```r
read.table(file = "Data/example.csv", header = TRUE, sep = ",")
```

```text
   tree height_m
1 beech     18.5
2   oak     21.0
3  pine     16.2
```

| Read next | Meaning |
|---|---|
| `read.table` | The function's name. The dot belongs to the name. |
| `(` | Opens the parentheses around the inputs. |
| `file` | Names the input that tells the function which file to read. |
| `=` | Connects that argument name to the value you supply. |
| `"Data/example.csv"` | The value: a file path written as a character string in quotation marks. |
| `,` | Separates this argument from the next one. |
| `header = TRUE` | Uses the first line of the file as column names. `TRUE` is a logical value. |
| `,` | Separates the next argument. |
| `sep = ","` | Supplies a character string containing one comma: the separator between columns in this file. |
| `)` | Closes the function call. There is no comma after the final argument. |

The repeated pattern is **argument name = value**, with commas between arguments. In a function's definition, an input name such as `header` is called a **formal argument** or **parameter**. In your call, `header = TRUE` is a **named argument**, supplying the value `TRUE` to that parameter.

The comma **between** `header = TRUE` and `sep = ","` separates arguments in R code. The comma **inside the quotes** is text describing the data file. These two commas have different jobs.

### Quotes, values and names

`TRUE` and `FALSE` are logical values; `"TRUE"` is text. Likewise, `0` is a number and `"0"` is text. Write argument names such as `header` without quotes. R distinguishes uppercase and lowercase: use `read.table`, not `Read.Table`, and `TRUE`, not `true`.

The filename and folder are inside one quoted string. Use forward slashes `/` in file paths, including on Windows. Later, [Work Environment]({{ '/unit05/unit05-02_wenvironment.html' | relative_url }}) explains paths in more detail.

### Named and positional arguments {#named-and-positional-arguments}

For `read.table()`, `file` is the first parameter. These calls therefore read the same file with the same settings:

```r
read.table(file = "Data/example.csv", header = TRUE, sep = ",")
read.table("Data/example.csv", header = TRUE, sep = ",")
```

The unnamed file path is matched by its position. Named arguments identify their inputs explicitly, so the fully named inputs in this example can also appear in a different order. Prefer full argument names while learning; compare them with the function's help page.

## Store and inspect the result {#store-and-inspect-the-result}

The first call displayed the table. To keep it for later use, assign the returned value to an object named `trees`:

```r
trees <- read.table(
  file = "Data/example.csv",
  header = TRUE,
  sep = ","
)
trees
dim(trees)
str(trees)
```

`trees` displays the same table. `dim(trees)` reports its dimensions:

```text
[1] 3 2
```

That means **3 rows and 2 columns**. `str(trees)` describes its structure: `tree` contains text and `height_m` contains numbers. These functions inspect the result you imported; you will meet data frames in more detail in [Unit 03]({{ '/unit03/unit03-03_types_of_objects.html' | relative_url }}).

The arrow in `trees <-` stores the returned table under a name **outside** the call. The equals signs **inside** the call supply inputs to `read.table()`. Use `<-` for assignments in this course. R also permits `=` for some assignments, but keeping these roles visually distinct makes the code easier to read. The comparison operator `==` asks whether values are equal; it neither stores an object nor supplies a named argument.

Line breaks and indentation help you read the longer call. Parentheses and commas still define its structure. In `dim(trees)`, the object `trees` is itself the value passed to another function as an unnamed argument.

## Connect the call to its help page {#connect-the-call-to-its-help-page}

Enter either `?read.table` or `help("read.table")` in the Console. In RStudio, the documentation opens in the **Help** pane. Find `file`, `header` and `sep` in **Usage**, read their explanations in **Arguments**, and check **Value** for the returned data frame.

The [R Help-Files guide]({{ '/unit01/unit01-06_helpfiles.html' | relative_url }}) explains those sections and default values using the same function. If you do not know the function's name, the [help-search guide]({{ '/unit01/unit01-05_selfhelp.html' | relative_url }}) shows how to find it.

## Try it yourself {#practice}

Save `first-import.R`, close and reopen its editor tab, then restart R with **Session > Restart R**. Run your saved script from the top. Check that it recreates the table with three rows, two columns and numeric heights. If the table is missing, run the assignment before inspecting `trees`; if R cannot open the file, repeat the path checks above.

Now use `?read.table` to find the argument that limits the number of data rows read. On your own, add that argument to import **only the first two observations** into a new object named `two_trees`. Predict which rows will remain, then run your code and check the result.

<details markdown="1">
<summary>Hint</summary>

Look for **nrows** in **Arguments**. Keep the existing `file`, `header` and `sep` settings. Add a comma before the new named argument and use `<-` to give the returned table its own name.

</details>

<details markdown="1">
<summary>Compare a possible solution</summary>

```r
two_trees <- read.table(
  file = "Data/example.csv",
  header = TRUE,
  sep = ",",
  nrows = 2
)
two_trees
dim(two_trees)
```

The table contains beech at 18.5 m and oak at 21.0 m; its dimensions are `2 2`. The header supplies column names and does not count as a data row. `trees` still contains all three observations because the new assignment uses a different object name. Other object names are fine if the result has these properties.

</details>

**Ready to continue:** you can explain each part of the import call, recreate its result from your saved script, and use help to change an input. Continue with [finding help]({{ '/unit01/unit01-05_selfhelp.html' | relative_url }}) and [reading help files]({{ '/unit01/unit01-06_helpfiles.html' | relative_url }}). [Unit 06]({{ '/unit06/unit06-03_data_import.html' | relative_url }}) later applies these ideas to a real earthquake dataset with additional import settings.
