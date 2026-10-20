# Archived course sources

This folder contains 58 files that were unused by the published course on
20 October 2026. They are retained for reference and possible reuse, outside
the Jekyll source directory (`docs/`).

| Original location | Files | Reason for archiving |
|---|---:|---|
| `docs/units/material/` | 48 | Legacy lessons outside the configured unit collections. |
| `docs/units/_unit03/` and `docs/units/_unit99/` | 7 | Unpublished drafts with no active incoming course links. |
| `staging/` | 2 | Draft lessons outside the site source directory. |
| `docs/_includes/pdf` | 1 | PDF embed template with no caller in the project or configured theme. |

The directory tree mirrors each file's original repository path. The
[manifest](manifest.csv) lists every original path, archive path, reason,
and SHA-256 checksum. Archived file contents are unchanged; their examples,
links, and dependencies may be outdated. The Spotlights introduction still
contains commented planning links for four archived drafts; those links
were never part of its rendered content.

Existing public pages, images, and downloads remain at their original
locations to preserve URLs embedded in other courses. This includes public
assets without current course references and `docs/units/scripts/Rscript_unit_3.R`.
The `video` include remains because the remote theme references it.
Build dependencies and generated local build directories are also retained.

To restore a file, use its original path from the manifest and review its
content, references, and publication settings before including it in the course.
