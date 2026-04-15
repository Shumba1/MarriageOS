# Active Source Set README

## Purpose

This file is the **entry point for builders and reviewers** working from the uploaded Marriage Project materials.

It exists to stop spec drift.

The original uploaded files remain intact as source artifacts. They are **not all equal in authority**. Some remain active feeder documents. Some are now archived as reference-only. The canonical implementation layer sits above them and must win on conflict.

## Canonical authority layer

These files are the only implementation authority:

1. `docs/MASTER_SPEC.md`
2. `docs/DRIFT_REGISTER.md`
3. `src/config/theme.ts`
4. `src/config/page-data.ts`

If any active feeder file conflicts with the canonical layer, **the canonical layer wins**.

## Active feeder set

These original uploaded files remain usable, but only within declared limits:

1. `Marriage Project.md`
2. `Marriage Project Revised premium UX spec.md`
3. `Marriage Project Addendum - splitting the knowledge layer into two different component responsibilities.md`
4. `Marriage Project Version One Code Samples.md`
5. `Marriage Project Builder-ready Token file and page-by-page component spec.md`

These files may be used to:
- clarify doctrine
- refine UX and copy
- supply repo structure ideas
- supply schema and data-model ideas
- preserve accepted architectural patches

These files must **not** be used to overrule canonical route, theme, page, or drift decisions.

## Archived / reference-only set

The following uploaded file is now **reference-only**:

1. `Marriage Project Version One PWA.md`

It remains useful for historical context and early V1 thinking, but it must not be used as direct build truth.

## How builders should work

### Allowed workflow

1. Read the canonical layer first.
2. Read this README second.
3. Check `SOURCE_MANIFEST.md` for file status.
4. Use only the declared feeder files for clarification.
5. If a feeder file conflicts with canonical config, record it in drift notes and follow canonical.

### Forbidden workflow

Do not:
- prompt models with the full uploaded set and ask them to “build the app”
- treat all uploaded docs as equal
- revive superseded CTA labels, route ideas, or component assumptions
- use archived files as primary authority

## Source-note companions

Each uploaded project file now has a companion status note under:

`docs/source-notes/`

Each note declares:
- authority level
- current status
- allowed uses
- forbidden uses
- canonical overrides

## Rule of interpretation

When in doubt, interpret the source set like this:

- **Canonical layer** = binding
- **Active feeder docs** = selective support
- **Archived docs** = historical reference only

## Practical consequence

This governance pack is designed to preserve provenance while preventing recurrence of the same spec drift that already appeared across:
- page naming
- CTA wording
- repair category labels
- knowledge detail rendering
- route assumptions

