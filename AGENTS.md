# Agents

## Purpose
This file defines how all workers operate against this repo.

## Core rule
A worker must choose an operating lane before doing any work.

Available lanes:
- `SOURCE_INGESTION_LANE`
- `CANONICAL_PROMOTION_LANE`
- `BUILD_LANE`
- `PROJECT_GOVERNANCE_LANE`

If the lane is not explicit in the task, stop and infer the narrowest valid lane from the requested outcome.

---

## Roles
- Driver: produces the first serious output
- Critic: pressure-tests logic and completeness
- Auditor: checks evidence and rule compliance
- Scout: gathers source material
- Builder: implements code, structure, or assets
- Archivist: writes back summaries and logs

---

## Canonical authority
The canonical governing layer for MarriageOS is:

1. `docs/MASTER_SPEC.md`
2. `docs/DRIFT_REGISTER.md`
3. `src/config/theme.ts`
4. `src/config/page-data.ts`

If any source, extract, dossier, feeder file, or draft conflicts with this layer, the canonical layer wins.

If a canonical file is missing in the current repo snapshot, record the fallback explicitly in the output rather than inventing missing canonical state.

---

## Mandatory read rules by lane

### For all lanes
Every meaningful task must start from:
- `AGENTS.md`
- `MISSION.md`

### For `SOURCE_INGESTION_LANE`
Also read:
- `docs/specs/source-pipeline-playbook.md`
- the source files being processed
- any destination-specific canonical files that are actually needed

Not required by default:
- `STATE.json`
- task files
- dashboard files

### For `CANONICAL_PROMOTION_LANE`
Also read:
- the relevant dossier
- the relevant verification file
- the existing canonical target file if it exists

### For `BUILD_LANE`
Read the specific implementation files and schemas required by the task.

### For `PROJECT_GOVERNANCE_LANE`
Read:
- `STATE.json`
- relevant task file(s)
- relevant dashboard or log files

Do not force governance-file reads into source-ingestion work.

---

## Output rules
- Return only the requested format
- State uncertainty explicitly
- Do not invent missing state
- Do not overwrite canonical files unless explicitly instructed
- Separate facts, inferences, and open questions where relevant
- Preserve contradictions instead of blending them away

---

## Write-back rules
All durable output must be saved to an explicit path before the task starts.

If a task does not define a write path, derive one only inside the currently active operating lane.

---

## Lane rules

## `SOURCE_INGESTION_LANE`

### Purpose
Convert raw source material into source-scoped structured assets that support MarriageOS downstream work.

### Allowed writes
- `sources/raw/**`
- `sources/derived/**`

### Forbidden writes
Do not modify:
- `MISSION.md`
- `STATE.json`
- `LOG.md`
- `NEXT_ACTIONS.md`
- `tasks/**`
- `dashboard-data/**`
- `outputs/**`
- `content/**`
- `app/**`
- `components/**`
- `lib/**`
- `scripts/**`

unless the task explicitly overrides this lane rule.

### Required workflow
Use this sequence:
1. source registration
2. source normaliser
3. extract set
4. dossier
5. final-content-candidate
6. verification
7. manifest

### Source key rule
Every source must use a stable source key:

`<clean-source-slug>--<sha6>`

All generated files for that source must remain scoped under that source key to prevent collisions.

### Canonical promotion rule
During source ingestion:
- final outputs are candidates only
- canonical promotion is forbidden
- no writes to `content/**`

### Manifest rule
A source is complete only when:
`sources/derived/<source_key>/manifest.json`
exists and records full completion.

---

## `CANONICAL_PROMOTION_LANE`

### Purpose
Promote a verified source-scoped candidate into canonical content.

### Allowed writes
- relevant `content/**`
- related verification or merge-note files
- other paths explicitly named by the task

### Rules
- never promote unverified material
- never overwrite canonical content blindly
- if canonical content exists, compare first
- if there is conflict, write a merge note instead of forcing replacement

---

## `BUILD_LANE`

### Purpose
Implement product, schema, route, UI, or tooling changes.

### Rules
- do not treat feeder prose as implementation truth
- canonical config and schemas win
- do not mix source-ingestion work with build work unless explicitly instructed

---

## `PROJECT_GOVERNANCE_LANE`

### Purpose
Update repo-level state, task tracking, dashboard data, logs, or phase-control files.

### Rules
- do not enter this lane during source ingestion unless explicitly instructed
- minimise churn in repo-level state files
- batch updates are preferred over per-source updates

---

## Escalation conditions
Escalate when:
- mission is unclear
- the requested lane is unclear
- acceptance criteria conflict
- required sources are missing
- evidence is weak
- canonical authority is missing or inconsistent
- the task appears to require writes outside the current lane
- source material and canonical doctrine materially conflict

---

## Anti-hallucination rules
- If it is not in the repo context provided, treat it as unknown
- If a canonical file is referenced but absent, do not fabricate it
- Separate facts, inferences, and open questions
- Preserve contradictions instead of blending them away
- Do not pretend candidate content is canonical content

---

## Practical default
If the task is “process PDFs,” “ingest sources,” “build dossiers,” or “run the source pipeline,” default to:

`SOURCE_INGESTION_LANE`

and stay there unless the user explicitly instructs a promotion or governance step.