# Source Manifest

| File | Tier | Status | Allowed uses | Forbidden uses | Canonical override / successor |
|---|---|---|---|---|---|
| `docs/MASTER_SPEC.md` | Tier 1 | Canonical | Product doctrine, audience, exclusions, V1 scope, ratified naming | N/A | Primary authority |
| `docs/DRIFT_REGISTER.md` | Tier 1 | Canonical | Conflict resolution, supersession history, implementation status | N/A | Primary authority |
| `src/config/theme.ts` | Tier 1 | Canonical | Design tokens, typography, labels, UX rules, visual constraints | N/A | Primary authority |
| `src/config/page-data.ts` | Tier 1 | Canonical | Screen hierarchy, page copy, CTA wording, flow structure | N/A | Primary authority |
| `Marriage Project.md` | Tier 2 | Active feeder | Mission, doctrine, audience, exclusions, system-decay / repair framing, monetisation philosophy | Final page copy, route truth, display-label truth where canonical differs | `docs/MASTER_SPEC.md`, `src/config/page-data.ts` |
| `Marriage Project Revised premium UX spec.md` | Tier 2 | Active feeder | Tone, copy refinement, spacing, target sizing, display-label upgrades, page-level UX behaviour | Route truth, type truth, slug truth where canonical differs | `src/config/theme.ts`, `src/config/page-data.ts` |
| `Marriage Project Addendum - splitting the knowledge layer into two different component responsibilities.md` | Tier 2 | Active feeder / accepted patch | Knowledge-detail architecture, component split, registry/resolver corrections | Broader product truth outside the knowledge-layer patch | Canonical once merged into config/components |
| `Marriage Project Version One Code Samples.md` | Tier 2 | Active feeder (selective) | Repo tree, schema ideas, DB map, content/source-of-truth assumptions, implementation scaffolding | Stale component mappings, stale page assumptions, any route/component truth superseded by addendum or canonical layer | `src/config/page-data.ts`, `src/config/theme.ts`, accepted patch notes |
| `Marriage Project Builder-ready Token file and page-by-page component spec.md` | Tier 2 | Active feeder (selective) | Fonts, premium tokens, page hierarchy ideas, component contracts, builder detail | Overriding canonical theme/page data after ratification | `src/config/theme.ts`, `src/config/page-data.ts` |
| `Marriage Project Version One PWA.md` | Tier 3 | Archived / reference-only | Historical context, early IA, early flows, early monetisation thinking | Direct build truth, final CTA copy, final naming, final route assumptions | Entire canonical layer |

## Builder rule

If a Tier 2 or Tier 3 file conflicts with Tier 1, **Tier 1 wins immediately**.

## Prompting rule

When using AI builders, prefer this source scope:

- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `src/config/theme.ts`
- `src/config/page-data.ts`
- selected Tier 2 feeder files only as needed

Do **not** prompt from the full historical set without this manifest.
