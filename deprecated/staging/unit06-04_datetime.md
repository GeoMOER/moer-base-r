---
title: "Date & Time"
toc: true
toc_label: In this example
header:
  image: /assets/images/unit_images/u06/u6_header.png
  image_description: "computer"
  caption: "Photo by [Free-Photos](https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=336373) [Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=336373)"
---



Coercing data types to date and/or time information is generally performed using
`as.Date` or either `as.POSIXct` or `as.POSIXlt`.


## as.date(x)
The easiest way to make a date in R is to use `as.Date(x)` where x is some date in yyyy-mm-dd format. For example,

```
mydate <- as.Date("2014-01-01")
mydate

## [1] "2014-01-01"

class(mydate)

## [1] "Date"
```

Similarly, a vector of dates is made by passing a vector of characters to `as.Date()`.

```
mydates <- as.Date(c("2014-01-31", "2014-02-01"))
mydates

## [1] "2014-31-01" "2014-02-01"
```

The most common issue that arises when dealing with dates is that they often come in different formats. If the character string supplied to the function comes in the ISO standard format that `as.Date` uses it will notice it automatically. Otherwise, we have to define the format. In these cases, `as.Date()` has to be told the format of the raw date values so that R can convert them into the ISO standard format yyyy-mm-dd. For example,

```
# year-month-day without spaces
yyyymmdd <- c("20140131", "20140201")
as.Date(yyyymmdd, format = "%Y%m%d")

## [1] "2014-01-31" "2014-02-01"

# month/day/year with slashes
mmddyyyy <- c("1/31/14", "2/1/14")
as.Date(mmddyyyy, format = "%m/%d/%y")

## [1] "2014-01-31" "2014-02-01"

# day-month year-with underscores
ddmmyyyy <- c("31_1_14", "1_2_14")
as.Date(ddmmyyyy, format = "%d_%m_%y")

## [1] "2014-01-31" "2014-02-01"

# month-day-year with full month names
month <- c("January 31, 2014", "February 1, 2014")
as.Date(annoying, format = "%B %d, %Y")

## [1] "2014-01-31" "2014-02-01"
```
and so on...

**But how to figure out those format strings?**
Simply read R’s documentation for `strptime()` (see `?strptime`). There are all the special conversion specifications that tell R what to look for.

While `as.Date` requires information on the year, month and day withouth any  exception, time information is not handled at all.

```
mydatestamp <- as.Date("2014-01-01 13:30:35")
mydatestamp

## [1] "2014-01-01"
```

## POSIX
If data and time or just time information is required to be handeled explicitly, the temporal information can be converted to a `POSIX` data type. In general, there are two kinds of POSIX classes:

* POSIXct which handles date/time information as seconds since a certain time (standard: 1970-01-01 00:00.00 UTC) and

* POSIXlt which stores date/time information as a list. Again, if the data/time information is not supplied in standard format, one has to define it:

```
as.POSIXct("01.01.2014 13:30:35", format = "%m.%d.%Y %H:%M:%S")

## [1] "2014-01-01 13:30:35 CET"
```

```
as.POSIXlt("01.01.2014 13:30:35", format = "%m.%d.%Y %H:%M:%S")

## [1] "2014-01-01 13:30:35 CET"
```
For an overview of the formatting syntax see the help pages of the `strptime` function which handles the conversion. The latter function can also be used directly for converting character information to POSIXlt:

```
lt <- strptime("01.01.2014 13:30:35", "%m.%d.%Y %H:%M:%S")
lt

## [1] "2014-01-01 13:30:35 CET"
```

```
class(lt)

## [1] "POSIXlt" "POSIXt"
```
This function is faster than `as.POSIXlt` if the time format is supplied the ISO way. Otherwise (and maybe even in this case), just forget about it.

Aside from theory, a pratical difference between the `POSIXct` and `POSIXlt` class is the way one can add or substract a specific amount of time. For `POSIXct`, you have to supply the time interval as seconds:

```
ct <- as.POSIXct("01.01.2014 13:30:35", format = "%m.%d.%Y %H:%M:%S")
ct + 60 * 30  # add 30 minutes to ct

## [1] "2014-01-01 14:00:35 CET"
```

While this can also be used for `POSIXlt`, one can also access the individual time information directly:

```
lt <- as.POSIXlt("01.01.2014 13:30:35", format = "%m.%d.%Y %H:%M:%S")
lt$hour <- lt$hour + 24  # add 24 hours
lt

## [1] "2014-01-02 13:30:35 CET"
```

To convert a POSIX information back to a character string, one can use the `strftime` function which allows precise formatting of the data/time string and also has an option for time zone conversion.

```
ct

## [1] "2014-01-01 13:30:35 CET"
```

```
strftime(ct, "%d. %b %y, %H:%M", tz = "UTC")

## [1] "01. Jan 14, 12:30"
```

Please note that the time zone conversion only works for POSIXct.


Finally, if you want to substract two date/time values, you can use the resoectuve arithmetic operation or the difftime function to control the layout of the result (see the help pages of `strptime` for an overview of the layout
specifications).

```
lt

## [1] "2014-01-02 13:30:35 CET"
```

```
ct

## [1] "2014-01-01 13:30:35 CET"
```

```
lt - ct

## Time difference of 1 days
```

```
difftime(lt, ct, units = "mins")

## Time difference of 1440 mins
```
