---
title: "CSV"
toc: TRUE
toc_float: TRUE
toc_label: In this example
header:
  image: /assets/images/unit_images/u06/header.png
  image_description: "computer"
  caption: "Photo by [Free-Photos](https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=336373) [Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=336373)"
---

> “Torture the data, and it will confess to anything.” – Ronald Coase
<!--more-->

## An introduction to comma-seperated values

### What is a .csv-file?
A csv is a comma-separated values file, which allows data to be saved in a tabular format. CSVs look like a spreadsheet but with a .csv extension. CSV files can be used with the most of spreadsheet programs, such as Microsoft Excel or Google Spreadsheets. They differ from other spreadsheet file types because they can only have a single sheet in a file, they can not save cells, columns, or rows. Also, there cannot be saved formulas in this format. These files may sometimes be called Character Separated Values or Comma Delimited files. They mostly use the comma character to separate (or delimit) data, but sometimes use other characters, like semicolons.

### Why are .csv files used?
These files serve a number of different purposes. They are often used for exchanging data between different applications, for example databases. They help to export a high volume of data to a more concentrated database, for instance. They also serve other primary functions:

* CSV files are plain-text files, making them easier for the website developer to create.
* Since they're plain text, they're easier to import into a spreadsheet or another storage database, regardless of the specific used software.
* To better organize large amounts of data.

The idea is that it is possible to export complex data from one application to a csv file, and then import the data in that csv file into another application.

### How do I save .csv files?
Saving csv files is relatively easy, you just need to know where to change the file type.

Under the "File name" section in the "Save As" tab, there can be selected `Save as` type and change it to `CSV (Comma delimited) (*.csv)`. This should be the same for both Apple and Microsoft operating systems.

### The Structure of a .csv File
A csv file has a fairly simple structure. It’s a list of data separated by commas or semicolons. For example, let’s say there are a few contacts in a contact manager, and they are exported as a csv file. The result is a file containing text like this:

```r
    ID;Name;Email;Phone_Number;Address
    01;Bob Smith;bob@example.com;123-456-7890;123 Fake Street
    02;Mike Jones;mike@example.com;098-765-4321;321 Fake Avenue
```

They can be more complicated than that, and can contain thousands of lines, more entries on each line, or long strings of text. Some CSV files may not even have the headers at the top, and some may use quotation marks to surround each bit of data, but that’s the basic format.

That simplicity is a feature. CSV files are designed to be a way to easily export data and import it into other programs. The resulting data is human-readable and can be easily viewed with a text editor like Notepad or a spreadsheet program like Microsoft Excel.

## Know your decimal seperator!
As mentioned in [Unit 2.5 - Types of Data](https://geomoer.github.io/moer-base-r/unit02/unit02-05_types_of_data.html){:target="_blank"} it is essentially to know the decimal seperator.

When you check `?read.table` you will probably find all the answer that you need.
There are two issues with European csv files:

* What does the `c` in csv stand for? For standard csv this is a `,`, for European csv this is a `;`, `sep=""` is the corresponding argument in `read.table`
* What is the character for the decimal point? For standard csv this is a `.`, for European csv this is a `,`, `dec=""` is the corresponding argument in `read.table`

To read standard csv use `read.csv`, to read European csv use `read.csv2`. These two functions are just wrappers to `read.table` that set the appropriate arguments.

If your file does not follow either of these standards set the arguments manually with `sep` and `dec`.


{% include figure image_path="/assets/images/unit_images/u06/602_csv.PNG" caption="Structure of an csv file." %}


Let's move on to the next chapter: Working with csv ...


<!--
## Further reading

add some day
-->
