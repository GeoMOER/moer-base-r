---
title: "R packages on Marburg OPSI PCs"
description: "Set up a personal R package library on the H: drive for your University of Marburg account and learn when Windows packages need Rtools."
excerpt: "Set up a personal R package library on the H: drive for your University of Marburg account and learn when Windows packages need Rtools."
toc: true
header:
  image: /assets/images/spotlights/Opsi.png
  image_description: "OPSI logo on a light background."
  caption: "OPSI logo. [OPSI project website](https://opsi.org/en/)."
---

This guide is intended for members of the University of Marburg who want to use a personal R package library on university-managed PCs.

<!--more-->

{% include self-study-start.html %}

## Install R packages in your user account on University of Marburg OPSI PCs {#install-r-packages-on-uni-marburg-opsi-pcs-in-your-own-account}

[OPSI](https://opsi.org/en/) is a system for managing computers and deploying software. This guide concerns R on the university's OPSI-managed Windows PCs.

**Requirements:** a university Windows PC, a university account and access to your H: drive.

**Goal:** store R packages in your account's H: drive so that the library is accessible on other university PCs where the same drive is available. Those PCs must use a compatible R version.

1. **Check the current package library paths.**

    ```r
    .libPaths() # The first entry is normally used for package installation.
    ```

    A path on C: is local to this computer. Check whether the first entry points to your H: drive; the default can vary between installations.

2. **Create your personal package folder on H:.** You only need to create this folder once.

    ```r
    mypath <- "H:/R/win-library"
    dir.create(mypath, recursive = TRUE, showWarnings = TRUE)
    ```

3. **Make the library path persistent in your user `.Rprofile`.** First, ask R which home directory it uses and where the user profile should be placed:

    ```r
    path.expand("~")
    file.path(path.expand("~"), ".Rprofile")
    ```

    If the home directory is `H:/Documents`, create or edit `H:/Documents/.Rprofile`. Otherwise, use the home directory reported by R. Add this line, preserving any existing content:

    ```r
    .libPaths("H:/R/win-library")
    ```

    By default, R looks for `.Rprofile` in its startup working directory before looking in the user home directory. A project-specific `.Rprofile` therefore takes precedence over the home file; include the library setting there too if needed. `R_PROFILE_USER` can select a different profile, and startup options can disable user profiles. See the [R startup documentation](https://stat.ethz.ch/R-manual/R-devel/library/base/html/Startup.html).

4. **Restart R and check the library paths again.**

    ```r
    .libPaths()
    ```

    `H:/R/win-library` should now be the first entry. Repeat this check on another university PC before relying on the shared setup. The H: drive mapping and R home directory must be suitable there too.

## Help for package installation {#install-packages-in-general}

The following commands open help pages; they do **not** install packages. Read the relevant help page for the package name, repository or version arguments needed for an installation. Help for `devtools` or `remotes` requires that package to be installed; these helper packages can be installed from CRAN with `install.packages()`.

**Packages from CRAN:**

```r
?install.packages
```

**Development versions from GitHub**, which may be unstable:

```r
?devtools::install_github
```

**Previous package versions:**

```r
?remotes::install_version
```

See also [R's documentation shortcuts](https://stat.ethz.ch/R-manual/R-devel/library/utils/html/Question.html).

## Install Rtools {#rtools-installation}

On Windows, Rtools is needed to build packages from source when they contain code that must be compiled, such as C, C++ or Fortran. Installing a Windows binary package normally does not require Rtools. Whether a package comes from CRAN or GitHub does not by itself determine whether compilation is required.

Choose the Rtools version that matches your R version from the [CRAN Rtools page](https://cran.r-project.org/bin/windows/Rtools/). The R version appears at the top of the console when you open RStudio. For example, R 4.4.x uses [Rtools44](https://cran.r-project.org/bin/windows/Rtools/rtools44/rtools.html), whose default installation folder is `C:/rtools44`.

Rtools installed on C: is available only on that computer. It must therefore be available separately on each university PC where you need to compile packages; storing your R package library on H: does not make Rtools available on other PCs.


