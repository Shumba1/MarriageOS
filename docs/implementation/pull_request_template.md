# Summary

<!-- What does this PR change? Keep it specific. -->

## Why this change

<!-- Why is this needed now? What problem does it solve? -->

## Targets touched

<!-- Tick all that apply -->
- [ ] Auth
- [ ] Routes / navigation
- [ ] Pricing / store / commerce
- [ ] Content layer
- [ ] Repair
- [ ] Perspectives
- [ ] Knowledge
- [ ] Product pages
- [ ] Theme / page-data / config
- [ ] Database / Supabase
- [ ] Stripe / entitlements
- [ ] Other: _________

---

# Production architecture checks (ADR-001)

## Auth
- [ ] This PR uses **Supabase Auth only**
- [ ] This PR does **not** add or revive **NextAuth** or any parallel auth flow
- [ ] If this PR touches identity, profiles, purchases, entitlements, or saved items, they all resolve from the same Supabase user identity

## Core stack
- [ ] This PR stays inside the approved production stack: **Next.js + TypeScript + Tailwind + Supabase + Stripe + in-repo content**
- [ ] This PR does **not** introduce a second primary backend, CMS, or auth layer without a new ADR
- [ ] If commerce is touched, it still routes through **Stripe** and entitlement logic rather than ad hoc purchase handling

## Content model
- [ ] Editorial content remains in the repo content layer
- [ ] New content goes into the correct content class: `repair`, `guides`, `knowledge`, or `products`

---

# Repo cleanup enforcement (ADR-002)

## Dead architecture
- [ ] This PR does **not** add `NextAuth`, `[...nextauth]`, or docs/comments implying dual-auth
- [ ] If dead NextAuth residue was encountered, it was removed or clearly marked dead rather than extended
- [ ] This PR does **not** introduce or preserve stale `/upgrade` route logic
- [ ] If monetisation is touched, it uses the live surfaces: `/pricing`, `/store`, product pages, or contextual in-product monetisation
- [ ] This PR does **not** treat older scaffold files as live architecture

## Canonical UX and naming
- [ ] Visible labels are aligned to the canonical UX layer
- [ ] User-facing UI uses **Perspectives** instead of old public `Guides` labels where relevant
- [ ] The UI uses ratified category labels such as **Attraction & Desire**, **Life Pressure**, and **External Pressure**
- [ ] This PR does **not** reintroduce stale CTA copy such as `Check Our State`, `Continue Solo`, or `See My State`

## Knowledge-layer enforcement
- [ ] If `/knowledge/[slug]` is touched, this PR uses **ArticleSection** for article-body rendering
- [ ] This PR does **not** use **KnowledgeArticleCard** as a detail-page body renderer
- [ ] If resolver logic is touched, list/index concerns are separated from detail/body concerns
- [ ] Knowledge still behaves like a supporting repository rather than taking over the product centre

---

# Product posture checks

- [ ] This PR preserves **Repair as the centre of V1**
- [ ] This PR does **not** turn Knowledge into the real product
- [ ] This PR keeps Perspectives parallel and non-adversarial
- [ ] This PR keeps the tone calm, practical, structured, and emotionally adult
- [ ] This PR does **not** introduce ideology-coded, coercive, surveillance-oriented, or manipulative behaviour

---

# Evidence

<!-- Link the strongest evidence for this PR -->
- Spec / ADR:
- Design / page-data / route reference:
- Test evidence:
- Screenshots / recording:
- Other:

---

# Reviewer focus

<!-- Point reviewers to the highest-risk parts -->
- Please review:
- Please ignore:
- Main risk area:
- Known follow-up work (if any):

---

# Stop conditions

<!-- If any of these are true, this PR is not ready -->
- [ ] A second auth system is introduced or implied
- [ ] `/upgrade` is reintroduced as live route logic
- [ ] Stale public labels or CTA copy are reintroduced
- [ ] Knowledge detail is rendered through the wrong component path
- [ ] Legacy scaffold residue is being treated as architecture
- [ ] This PR conflicts with the canonical route/config/page-data layer
- [ ] This PR introduces a major stack decision without a new ADR

> If any box above is checked, send this PR back.

---

# Builder sign-off

- [ ] I checked this PR against ADR-001
- [ ] I checked this PR against ADR-002
- [ ] I did not rely on dead scaffold artefacts
- [ ] I did not reintroduce stale route, auth, or UX logic

## Notes from builder

<!-- Optional -->

---

# Reviewer sign-off

- [ ] I checked stack compliance
- [ ] I checked dead-architecture cleanup rules
- [ ] I checked canonical naming / CTA rules
- [ ] I checked the knowledge-detail path if relevant
- [ ] I found no ADR conflicts, or I have explicitly requested a new ADR

## Review outcome

- [ ] Approve
- [ ] Request changes

## Notes from reviewer

<!-- Optional -->
