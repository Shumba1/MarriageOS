# Marriage OS — repo-ready canonical layer

This folder is the best-effort application of the canonical layer back into a repo structure.

## Important note
No live project git repository was present in the workspace when this was generated.
Accordingly, this folder is a **repo-ready projection** rather than an in-place patch to an existing checkout.

## Applied canonical files
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `src/config/theme.ts`
- `src/config/page-data.ts`
- `src/config/routes.ts`
- `src/config/component-registry.ts`
- `src/components/domain/knowledge/article-section.tsx`

## What was applied
- Canonical governance docs installed under `docs/`
- Executable theme/page layer installed under `src/config/`
- Route tree restored so canonical files import cleanly
- Component registry updated to include `ArticleSection`
- Knowledge detail body renderer stub added at the expected path

## Follow-on work in a real repo
1. Merge these files into the live repo.
2. Update runtime registry and renderers if they already exist.
3. Mark older narrative docs as reference-only.
4. Align nav rendering so `guides` displays publicly as `Perspectives`.

## Source governance layer added
- `docs/README_ACTIVE_SET.md`
- `docs/SOURCE_MANIFEST.md`
- `docs/source-notes/*`

## Builder start order
1. `docs/README_ACTIVE_SET.md`
2. `docs/MASTER_SPEC.md`
3. `docs/DRIFT_REGISTER.md`
4. `src/config/routes.ts`
5. `src/config/theme.ts`
6. `src/config/page-data.ts`
7. `docs/SOURCE_MANIFEST.md`
8. Referenced active feeder docs only within their allowed-use limits
