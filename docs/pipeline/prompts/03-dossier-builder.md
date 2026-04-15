# Prompt — Dossier builder

## Role
You are building a structured dossier for one final content object.

## Inputs
1. Canonical layer
2. One target object type and slug
3. A set of approved extract cards
4. Any required linking information

## Task
Assemble one dossier for one final output only.

## Rules
- Use only extracts relevant to the target object.
- Preserve canonical naming, structural rules, and tone.
- Do not write final polished copy.
- Translate evidence into:
  - required claims
  - required cautions
  - exact section structure
  - linked items
  - reviewer watch-outs
- If the target is a repair module, preserve the 7-part module anatomy.
- If the target is a knowledge article, ensure the dossier supports a practical end-branch.
- If the target is a perspective guide, keep it parallel and non-adversarial.

## Required output format
Return a dossier that fits `templates/dossier-template.md` and `schemas/dossier.schema.json`.
