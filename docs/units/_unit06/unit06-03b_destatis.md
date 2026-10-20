---
title: "Example: Importing Destatis data"
toc: TRUE
toc_float: TRUE
toc_label: In this example
header:
  image: /assets/images/unit_images/u06/header.png
  image_description: "computer"
  caption: "Photo by [Free-Photos](https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=336373) [Pixabay](https://pixabay.com/de/?utm_source=link-attribution&amp;utm_campaign=image&amp;utm_content=336373)"
---

Official data need careful import and interpretation. In this example, you will import recent German land-use statistics, translate the column names, preserve identifiers, distinguish missing cells from zero, and select comparable observations. All R code uses Base R; no additional package is required.

<!--more-->

## What do these data describe?

**Destatis** is the short name of Germany's Federal Statistical Office (*Statistisches Bundesamt*). We use its report **Flächenerhebung nach Art der tatsächlichen Nutzung 2024**, meaning **Survey of land area by actual use, 2024**. The observations refer to **December 31, 2024**; the report was published on **November 21, 2025**. The reporting year and publication year describe different things.

The report uses the **ALKIS** classification. The German name *Amtliches Liegenschaftskataster-Informationssystem* means **Official Real Estate Cadastre Information System**. A cadastre records land parcels and their characteristics. Here, *tatsächliche Nutzung* means the recorded actual use of an area; it does not describe a proposed future use in a planning document.

Our source is worksheet `csv-33111-03`, associated with table `33111-03`: **Anteile der Nutzungsarten an der Bodenfläche 2024 nach regionaler Gliederung**. This means **Shares of land-use categories in total area, by reporting region, 2024**. The worksheet's description also labels it `33111-3.1`. These are publisher table identifiers, not years or measurements. `33111` identifies the statistical survey.

This table contains **17 records**: one for Germany and one for each of its **16 federal states**. It contains **64 columns**, including descriptions, identifiers, total area, and many land-use categories. It does not contain district-level records or a time series.

## Download and prepare your project

Create `Data/` and `Output/` folders inside your RStudio project. Open the `.Rproj` file so that the working directory is the project folder; use `getwd()` to check it.

Download these files:

- [Teaching CSV: destatis-land-use-2024.csv]({{ '/assets/data/destatis-land-use-2024.csv' | relative_url }}). Save it as `Data/destatis-land-use-2024.csv`.
- [Original Destatis workbook]({{ '/assets/data/destatis-land-use-2024.xlsx' | relative_url }}), for inspecting the original tables and explanatory notes.
- [Bilingual dictionary of all 64 columns]({{ '/assets/data/destatis-land-use-2024-dictionary.csv' | relative_url }}), with the original name, German label, English meaning, unit, and category code.
- [Source and export notes]({{ '/assets/data/destatis-land-use-2024-source.txt' | relative_url }}), documenting the version and preparation of the teaching CSV.

The original workbook has both presentation sheets with multiple header rows and sheets prepared for data processing. Destatis calls the latter **CSV-Tabellen**. We exported the complete `csv-33111-03` sheet: all 17 records and all 64 original column names. The course CSV uses UTF-8 text, semicolons between fields, and decimal commas. Percentages are written to the workbook's published precision of one decimal place. Empty source cells remain empty.

The CSV starts directly with its header. Do not skip four lines as in the preceding Quakes example. Choosing the correct source table and checking its format are already important preprocessing decisions.

## Import and inspect {#land-use-import-and-inspect}

Start by reading every column as character data. This preserves leading zeros and lets you decide which fields should become numbers:

```r
destatis_raw <- read.csv2("Data/destatis-land-use-2024.csv",
                          colClasses = "character", na.strings = "",
                          fileEncoding = "UTF-8", check.names = FALSE)
dim(destatis_raw)
sum(is.na(destatis_raw))
```

```text
[1] 17 64
[1] 94
```

`dim()` returns the number of rows and columns. `is.na()` marks unavailable entries, and `sum()` counts those marks. The full table contains **94 empty source cells**, represented as `NA` here. This does not tell us why each cell is empty.

The arguments matter:

- `read.csv2()` expects semicolon-separated fields and decimal commas. A German-language source does not guarantee these settings; they match this particular CSV export.
- `colClasses = "character"` keeps all fields as text initially. Consequently, a value such as `"9,5"` is still text even though the decimal setting is correct.
- `na.strings = ""` maps empty cells to `NA`. It does not convert a recorded zero into `NA`.
- `fileEncoding = "UTF-8"` matches this teaching CSV and preserves names with German characters.
- `check.names = FALSE` preserves the publisher's exact column names, which we use below to select columns.

Inspect the reporting areas:

```r
head(destatis_raw[c("Schluesselnummer_Land", "Regionale_Gliederung")], 3)
```

```text
  Schluesselnummer_Land Regionale_Gliederung
1                     0          Deutschland
2                    01   Schleswig-Holstein
3                    02              Hamburg
```

The identifier `"01"` must stay text. Converting it to a number would turn it into `1` and change its representation. The country aggregate is `"0"`; it is not a seventeenth state.

## Understand the German names

### Descriptions, time, geography, and units

| Original field | English meaning | How to interpret it |
|---|---|---|
| `Statistik` | Statistical survey | The survey's name, repeated for each record. It is metadata, not a measured variable. |
| `Beschreibung` | Description | A description of the published table, also repeated. |
| `Bezugszeitraum` | Reference period | `2024` is the reporting year. In this survey the reference date is December 31. |
| `Schluesselnummer_Land` | Federal-state identifier | *Schlüsselnummer* means an identification code. *Land* here means a German federal state (*Bundesland*). Keep the code as text; `0` identifies Germany as a whole. |
| `Regionale_Gliederung` | Regional breakdown | The name of the reporting area: Germany or a federal state. It is not a land-use category. |
| `Bodenflaeche_insgesamt_in_Hektar` | Total area in hectares | *Bodenfläche* here means geographic area, not a soil measurement. *Insgesamt* means total. One hectare (`ha`) is 10,000 m² or 0.01 km². |

The machine-readable headers replace some German letters: `ae` stands for `ä`, `oe` for `ö`, `ue` for `ü`, and `ss` may stand for `ß`. Thus `Flaeche` means *Fläche* (area), `Schluessel` means *Schlüssel* (key or code), and `Gewaesser` means *Gewässer* (bodies of water). Underscores separate words.

### Read a long measurement name

For example, the name

```text
Anteil_der_Flaeche_fuer_Siedlung_in_Prozent_10000000
```

can be read piece by piece:

| Part | Meaning |
|---|---|
| `Anteil` | Share or proportion |
| `der_Flaeche` | Of the area |
| `fuer_Siedlung` | Used for the settlement category |
| `in_Prozent` | Expressed as a percentage of the reporting area's total area |
| `10000000` | The land-use classification code for settlement area |

The complete meaning is **percentage of total area assigned to the settlement category**. The eight-digit suffix is a category identifier, not a value, date, or regional code. It is different from a state's two-digit identifier. Codes are important because some category names look similar but describe different levels of the classification.

### Categories used in this example

The long percentage headers have the same general structure. We will select the following categories and give them short English names:

| German category and code | English name in our data frame | Meaning |
|---|---|---|
| *Siedlung*, `10000000` | `settlement_pct` | Settlement land, a broad category including residential, industrial, recreational, and other uses. It is not the percentage of soil sealed by buildings or pavement. |
| *Verkehr*, `20000000` | `transport_pct` | Land used for transport infrastructure, including roads, railways, and other transport uses. It does not measure traffic volume. |
| *Vegetation*, `30000000` | `vegetation_pct` | A parent category including agricultural land, forest, and other vegetation categories. |
| *Landwirtschaft*, `31000000` | `agriculture_pct` | Agricultural land, a subcategory within vegetation. |
| *Wald*, `32000000` | `forest_pct` | Forest land, another subcategory within vegetation. |
| *Gewässer*, `40000000` | `water_pct` | Water surfaces, including several types of inland water and the sea category recorded in this classification. |

Our suffix `_pct` means **percentage**, on a scale from 0 to 100. A value of `9.5` means 9.5% of the total area, equivalent to a fraction of 0.095; it does not mean 9.5 hectares. `_ha` means a measurement in hectares. These suffixes are English names we choose for clarity; they are not additional source variables.

The [complete bilingual dictionary]({{ '/assets/data/destatis-land-use-2024-dictionary.csv' | relative_url }}) also explains categories we do not select. Its English descriptions are teaching translations; the official German definitions remain the reference for classification decisions.

### Which places do the names refer to?

| Code | German name in the source | English name or explanation |
|---|---|---|
| `0` | Deutschland | Germany; the national aggregate |
| `01` | Schleswig-Holstein | Schleswig-Holstein |
| `02` | Hamburg | Hamburg; a city-state |
| `03` | Niedersachsen | Lower Saxony |
| `04` | Bremen | The state of Bremen, comprising Bremen and Bremerhaven |
| `05` | Nordrhein-Westfalen | North Rhine-Westphalia |
| `06` | Hessen | Hesse |
| `07` | Rheinland-Pfalz | Rhineland-Palatinate |
| `08` | Baden-Württemberg | Baden-Württemberg |
| `09` | Bayern | Bavaria |
| `10` | Saarland | Saarland |
| `11` | Berlin | Berlin; a city-state |
| `12` | Brandenburg | Brandenburg |
| `13` | Mecklenburg-Vorpommern | Mecklenburg-Western Pomerania |
| `14` | Sachsen | Saxony |
| `15` | Sachsen-Anhalt | Saxony-Anhalt |
| `16` | Thüringen | Thuringia |

## Select and rename columns {#land-use-cleaning-decisions}

Keep `destatis_raw` unchanged. The named character vector `columns` below is a translation map: the names on the left are our short English names; the strings on the right are exact source headers.

```r
columns <- c(
  year = "Bezugszeitraum",
  region_code = "Schluesselnummer_Land",
  region_name = "Regionale_Gliederung",
  total_area_ha = "Bodenflaeche_insgesamt_in_Hektar",
  settlement_pct = "Anteil_der_Flaeche_fuer_Siedlung_in_Prozent_10000000",
  transport_pct = "Anteil_der_Flaeche_fuer_Verkehr_in_Prozent_20000000",
  vegetation_pct = "Anteil_der_Flaeche_fuer_Vegetation_in_Prozent_30000000",
  agriculture_pct = "Anteil_der_Flaeche_fuer_Landwirtschaft_in_Prozent_31000000",
  forest_pct = "Anteil_der_Flaeche_fuer_Wald_in_Prozent_32000000",
  water_pct = "Anteil_der_Flaeche_fuer_Gewaesser_in_Prozent_40000000"
)
land_use <- destatis_raw[unname(columns)]
names(land_use) <- names(columns)
```

For a data frame, selecting with a vector of column names keeps those columns in the specified order. `unname(columns)` supplies the original header strings; `names(columns)` supplies our English names. We deliberately omit the repeated survey and table descriptions from the working table, while keeping them in `destatis_raw` and the original workbook.

Now convert only the fields that represent numbers:

```r
land_use$year <- as.integer(land_use$year)
measurement_columns <- c("total_area_ha", "settlement_pct", "transport_pct",
                          "vegetation_pct", "agriculture_pct", "forest_pct",
                          "water_pct")
land_use[measurement_columns] <- type.convert(
  land_use[measurement_columns], dec = ",", as.is = TRUE
)
str(land_use)
```

`type.convert()` interprets the selected character columns using the decimal comma and assigns suitable numeric types. `as.is = TRUE` leaves any remaining text as character data rather than making factors. We exclude `region_code` and `region_name` from the conversion. Always inspect `str()` afterwards: a conversion instruction does not guarantee that unexpected input was numeric.

Compare the identifiers and a measurement:

```r
land_use[1:3, c("region_code", "region_name", "settlement_pct")]
```

```text
  region_code        region_name settlement_pct
1           0        Deutschland            9.5
2          01 Schleswig-Holstein            9.4
3          02            Hamburg           46.3
```

The percentage is now numeric, while `"01"` remains a character identifier. The working table contains 17 rows and ten selected columns. Its selected measurements are populated in this version, although other columns in the full source have empty cells.

## Check meaning before calculating

### Keep geographical levels separate

Germany's record summarizes the states. Including both the country and its states in a sum would count the same territory twice. Select the states explicitly:

```r
states <- land_use[land_use$region_code != "0", ]
nrow(states)
```

```text
[1] 16
```

A simple mean of state percentages gives every state equal weight. That is a different question from asking for Germany's percentage, where large and small states contribute different areas. For the national figure, use the published Germany record; the state values are rounded.

### Distinguish parent categories from their components

The four main categories are settlement, transport, vegetation, and water. Their rounded percentages should add to approximately 100:

```r
main_categories <- c("settlement_pct", "transport_pct",
                     "vegetation_pct", "water_pct")
range(rowSums(states[main_categories]))
```

```text
[1]  99.9 100.1
```

Small deviations are consistent with rounding to one decimal place. Do not add `agriculture_pct` and `forest_pct` to these four categories: both are already included in `vegetation_pct`. Adding parent categories and their components double-counts area.

Also distinguish a simple sum of settlement and transport from a specially defined policy indicator. In this workbook, the sustainability-indicator tables `33111-11` and `33111-12` exclude mining and open-cast extraction areas from that sum. Use their definitions when reproducing that indicator.

### Interpret empty cells and rounded zeros

An empty source cell is represented as `NA` in our import. It does not establish that the area is zero, and the file alone does not explain the cause of each empty cell. Replacing all empty cells with zero would introduce an assumption into the analysis.

The publisher's legend also warns that a displayed zero can represent a positive amount below the rounding threshold. In a percentage column shown to one decimal place, a displayed `0.0` can therefore conceal a share below 0.05%. A rounded zero does not establish that a category is absent. Consult the workbook's definitions and notes before deciding how to handle either case.

### Check comparability across versions

This example uses a single reporting date and classification version. ALKIS became the statistical basis in 2016, and its category catalog was expanded in 2023. Earlier Regionalatlas exports and newer reports can therefore differ in geography, category definitions, units, and structure. Do not append them to a time series simply because some column labels look similar.

## Save the prepared data and its meaning

Keep the original downloads and the bilingual dictionary. Save the prepared data under a different filename:

```r
write.csv(land_use, file = "Output/destatis-land-use-2024-cleaned.csv",
           row.names = FALSE, fileEncoding = "UTF-8")
saveRDS(land_use, file = "Output/destatis-land-use-2024-cleaned.rds")
restored <- readRDS("Output/destatis-land-use-2024-cleaned.rds")
identical(land_use, restored)
```

```text
[1] TRUE
```

`write.csv()` uses commas between fields and decimal points, so this output format differs from the semicolon-separated input. CSV does not store R column types; specify them when importing it again so that regional codes keep their leading zeros. RDS preserves the R object's types. Neither filename alone records the source definitions: keep the year, units, category mapping, and source notes with the data.

The important result is a documented preparation process: choose the right source sheet, understand its labels, preserve identifiers, handle unavailable cells explicitly, select comparable observations, and check the numerical and substantive meaning before analysis.

## Sources

- Statistisches Bundesamt (Destatis), *Statistischer Bericht: Flächenerhebung nach Art der tatsächlichen Nutzung 2024*, published November 21, 2025. Tables `33111-03` and `csv-33111-03`; explanatory sheets and publisher's legend. © Destatis, 2025; reproduction and distribution with source attribution are permitted in the workbook's *Impressum*.
- [Official Destatis land-use publications](https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Landwirtschaft-Forstwirtschaft-Fischerei/Flaechennutzung/_inhalt.html).
- [Official methods and comparability report](https://www.destatis.de/DE/Methoden/Qualitaet/Qualitaetsberichte/Land-Forstwirtschaft-Fischerei/flaechenerhebung.pdf?__blob=publicationFile).
