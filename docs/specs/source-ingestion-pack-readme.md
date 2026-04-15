# Source Ingestion Pack

This pack is the controlled workflow for turning large volumes of raw source material into finished product content for the Marriage OS project.

## Purpose

The project is explicitly a **mobile-first micro-intervention system** for couples with goodwill left, and V1 is meant to stay **repair-first**, not theory-first or archive-first. Repair is the practical centre of V1, Perspectives are parallel interpretation tracks, Knowledge is a repository, and the UX must stay calm, premium, and operational rather than preachy or overloaded. Source material must therefore influence the final content without overwhelming it or bypassing the canonical layer.

## Governing rule

Use this pipeline:

1. Raw source material
2. Structured extracts
3. Target dossier
4. Final content generation
5. Verification pass

Do **not** go directly from raw material to finished content.

## Canonical-first rule

Every content-generation workflow must include the canonical layer as governing authority:
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `src/config/theme.ts`
- `src/config/page-data.ts`

If any raw source, extract, or dossier conflicts with the canonical layer, the canonical layer wins.

## Included files

### Templates
- `templates/raw-source-template.md`
- `templates/extract-card-template.yaml`
- `templates/dossier-template.md`
- `templates/content-traceability-template.csv`

### Schemas
- `schemas/extract.schema.json`
- `schemas/dossier.schema.json`

### Prompts
- `prompts/01-source-normaliser.md`
- `prompts/02-extract-deduper.md`
- `prompts/03-dossier-builder.md`
- `prompts/04-final-generator.md`
- `prompts/05-verifier.md`

### Example
- `examples/pressure-loop-dossier-example.md`

## Recommended workflow

### Step 1 — Create raw source files
Use `raw-source-template.md` for each major source item.

### Step 2 — Run source normalisation
Use `01-source-normaliser.md` to turn raw material into atomic extract cards.

### Step 3 — Deduplicate extracts
Use `02-extract-deduper.md` to merge overlaps, remove duplicates, and flag contradictions.

### Step 4 — Build a target dossier
Use `03-dossier-builder.md` and `dossier-template.md` to assemble a dossier for **one** output object only:
- one repair module
- one perspective guide
- one knowledge article
- one product page

### Step 5 — Generate final content
Use `04-final-generator.md` to produce the finished output from the canonical layer + dossier only.

### Step 6 — Run verification
Use `05-verifier.md` to detect unsupported claims, tone drift, omissions, and structure problems.

## Target content types

The pack is designed for these final outputs:
- Repair modules
- Perspectives guides
- Knowledge articles
- Product/tool pages
- Script packs

## Strong recommendation

Start ingestion with the highest-value theme clusters:
- drift
- resentment
- pressure loop / intimacy mismatch
- one-sided initiation
- postpartum / touched out
- mental load / manager mode
- desire maintenance
- external pull / affair risk

These themes map directly to the strongest V1 repair surfaces and monetisable tools.
