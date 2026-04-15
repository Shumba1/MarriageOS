# DRIFT_REGISTER.md

**Status:** Canonical drift log  
**Purpose:** Record every resolved or open spec conflict so builders do not guess.

| ID | Topic | Conflicting sources | Decision | Winner | Status | Implement in |
|---|---|---|---|---|---|---|
| D-001 | Product centre | Mission doctrine vs general knowledge-library framing | Repair is the centre of V1. Knowledge is a repository, not the centre. | Mission doctrine + premium UX | Accepted | `MASTER_SPEC.md`, `page-data.ts` |
| D-002 | Guides label | Route tree uses `guides`; premium UX uses `Perspectives` | Keep internal key and route id as `guides`; ship UI label as `Perspectives`. | Both, split by layer | Accepted | `theme.ts`, `page-data.ts` |
| D-003 | Repair category naming | Older schemas/slugs vs premium UX public labels | Preserve infra slugs; change display labels only. | Premium UX for display, code samples for slugs | Accepted | `theme.ts`, UI components |
| D-004 | Homepage CTA | `Check Our State` vs `Check the Relationship State` | Use revised premium CTA copy. | Premium UX | Accepted | `page-data.ts` |
| D-005 | Start CTA | `Continue Solo` vs `Start the Solo Check-In` | Use revised premium CTA copy. | Premium UX | Accepted | `page-data.ts` |
| D-006 | Check-in hero | `How are things today?` vs `How does the relationship feel today?` | Use revised premium copy. | Premium UX | Accepted | `page-data.ts` |
| D-007 | State result CTA | `Do This First` vs `Open the First Repair Step` | Use revised premium CTA copy. | Premium UX | Accepted | `page-data.ts` |
| D-008 | Today hero | `Today’s next move` vs `Today’s next best move` | Use revised premium copy. | Premium UX | Accepted | `page-data.ts` |
| D-009 | Knowledge detail renderer | Old route/component map lacks article-body renderer; addendum introduces `ArticleSection` | Adopt addendum. `KnowledgeArticleCard` is for list/index; `ArticleSection` is for detail body. | Knowledge-layer addendum | Accepted | `page-data.ts`, component registry |
| D-010 | Upgrade route | Older PWA includes `/upgrade`; route tree and premium spec use `/pricing` and `/store` | Remove `/upgrade` from canonical V1. | Route tree + premium page spec | Accepted | `MASTER_SPEC.md`, `page-data.ts` |
| D-011 | Safety cards | Older safety screen included privacy/minimal-data cards; newer premium spec uses four stricter cards | Use four-card premium safety set. Privacy belongs elsewhere. | Premium page spec | Accepted | `page-data.ts` |
| D-012 | Guides tab label in nav | Primary nav item is `guides` in code samples, but public naming prefers `Perspectives` | Keep nav ID `guides`, public label `Perspectives`. | Layered decision | Accepted | `theme.ts`, UI nav rendering |
| D-013 | Knowledge article ending | Older layouts imply generic detail; addendum requires summary + article sections + use-now CTA + related products | Use addendum layout in canonical page spec. | Knowledge-layer addendum | Accepted | `page-data.ts` |
| D-014 | Design tokens source | Narrative premium tokens vs consolidated `theme.ts` pair | Use consolidated `theme.ts` as executable theme truth. | Consolidated builder spec | Accepted | `theme.ts` |
| D-015 | Store posture | Risk of detached ecommerce feel vs system-native commerce | Store must feel like an extension of Repair, not a separate commerce site. | Premium page spec | Accepted | `page-data.ts` |
| D-016 | Internal vs public naming of categories | `repair-desire` / `threats-to-system` too mechanical for public UX | Keep slugs, soften public labels. | Split by layer | Accepted | `theme.ts`, UI rendering |
| D-017 | Solo vs coupled V1 | Some prose allows `Use Together`; architecture says solo-first | Solo-first V1. Together mode remains disabled/coming later. | PWA + premium page spec | Accepted | `MASTER_SPEC.md`, `page-data.ts` |
| D-018 | Operational font usage | Some earlier notes lacked explicit font enforcement | Sans-only on control surfaces; serif only for selective marketing hero/display use. | Builder token spec | Accepted | `theme.ts` |
| D-019 | Progress metrics | Older PWA mentions family atmosphere trend; later premium spec adds recovery speed | Keep recovery speed in canonical progress overview; family-atmosphere effects may remain in content/metrics logic but not as a top-level canonical card requirement. | Premium page spec | Accepted | `page-data.ts` |
| D-020 | Open question: account/settings exposure in public IA docs | Route tree includes `/account` and `/settings`, but premium page spec does not detail them | Keep routes in executable tree; defer detailed screen spec until member-account pass. | Route tree | Deferred | later canonical page extension |

## Usage rule
If a builder encounters a new conflict, they must:
1. log it here,
2. mark it `Open`,
3. avoid implementing from personal judgement,
4. wait for ratification.

If a conflict is not recorded here, it is not resolved.
