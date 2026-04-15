# Marriage OS — Repo Enforcement Checklist
**Source:** ADR-001 + ADR-002  
**Use this in PR review.**  
If any answer is “No”, the PR is not ready.

---

## 1. Production stack enforcement

### Auth
- [ ] Does this PR use **Supabase Auth only**?
- [ ] Does this PR avoid adding or reviving **NextAuth** or any parallel auth flow?
- [ ] If the PR touches identity, profiles, purchases, entitlements, or saved items, do they all resolve from the same Supabase user identity?

### Core stack
- [ ] Does this PR remain inside the approved production stack: **Next.js + TypeScript + Tailwind + Supabase + Stripe + in-repo content**?
- [ ] Does this PR avoid introducing a second primary backend, CMS, or auth layer without a new ADR?
- [ ] If commerce is touched, does it still route through **Stripe** and entitlement logic rather than ad hoc purchase handling?

### Content model
- [ ] Does this PR keep editorial content in the repo content layer rather than quietly moving it into database-managed CMS logic?
- [ ] If content is added, is it going into the correct content class: `repair`, `guides`, `knowledge`, or `products`?

---

## 2. Dead architecture enforcement

### NextAuth
- [ ] Does this PR avoid adding `NextAuth`, `[...nextauth]`, or any docs/comments implying dual-auth?
- [ ] If the repo still contains any dead NextAuth residue, does this PR remove it or clearly mark it dead instead of extending it?

### `/upgrade`
- [ ] Does this PR avoid introducing or preserving stale `/upgrade` route logic?
- [ ] If monetisation is touched, does it use the live surfaces: `/pricing`, `/store`, product pages, or contextual in-product monetisation?

### Old route / scaffold residue
- [ ] Does this PR avoid treating older scaffold files as live architecture?
- [ ] If a legacy artefact conflicts with the canonical layer or ADRs, does this PR remove it or stop depending on it?

---

## 3. Canonical UX and naming enforcement

### Public labels
- [ ] Are visible labels aligned to the canonical UX layer?
- [ ] Does the PR use **Perspectives** instead of old public `Guides` labels where user-facing?
- [ ] Does the PR use the ratified category labels such as **Attraction & Desire**, **Life Pressure**, and **External Pressure** in the UI?

### CTA copy
- [ ] Does the PR avoid stale CTA copy such as `Check Our State`, `Continue Solo`, or `See My State`?
- [ ] If new CTA copy is introduced, is it message-matched, specific, and consistent with the premium UX layer?

---

## 4. Knowledge-layer enforcement

- [ ] If `/knowledge/[slug]` is touched, does the PR use **ArticleSection** for article-body rendering?
- [ ] Does the PR avoid using **KnowledgeArticleCard** as a detail-page body renderer?
- [ ] If resolver logic is touched, are list/index concerns separated from detail/body concerns?
- [ ] Does Knowledge still behave like a supporting repository rather than taking over the product centre?

---

## 5. Product posture enforcement

- [ ] Does the PR preserve **Repair as the centre of V1**?
- [ ] Does the PR avoid turning Knowledge into the real product?
- [ ] Does the PR keep Perspectives parallel and non-adversarial?
- [ ] Does the PR keep the tone calm, practical, structured, and emotionally adult?
- [ ] Does the PR avoid ideology-coded, coercive, surveillance-oriented, or manipulative behaviour?

---

## 6. PR review stop conditions

**Stop the PR immediately if any of the following are true:**
- [ ] A second auth system is introduced or implied
- [ ] `/upgrade` is reintroduced as live route logic
- [ ] Stale public labels or CTA copy are reintroduced
- [ ] Knowledge detail is rendered through the wrong component path
- [ ] Legacy scaffold residue is being treated as architecture
- [ ] The PR conflicts with the canonical route/config/page-data layer
- [ ] The PR introduces a major stack decision without a new ADR

If any box above is checked, the PR should be sent back.

---

## 7. Reviewer sign-off

### Builder confirms
- [ ] I checked this PR against ADR-001
- [ ] I checked this PR against ADR-002
- [ ] I did not rely on dead scaffold artefacts
- [ ] I did not reintroduce stale route, auth, or UX logic

### Reviewer confirms
- [ ] I checked stack compliance
- [ ] I checked dead-architecture cleanup rules
- [ ] I checked canonical naming / CTA rules
- [ ] I checked the knowledge-detail path if relevant
- [ ] I found no ADR conflicts, or I have explicitly requested a new ADR

---

## 8. Short version

**No NextAuth. No `/upgrade`. No stale labels. No stale CTAs. No card-based knowledge detail rendering. No treating scaffold residue as live architecture.**

If a PR breaks one of those, it is not ready.
