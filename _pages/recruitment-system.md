---
layout: page
title: "Recruitment Management System"
permalink: /research/recruitment-system/
nav: false
description: "A hiring-workflow prototype with state transitions, audit history and synthetic-data evaluation."
---

# Recruitment Management System

**BEng capstone topic · Wuchang University of Technology · 2021**  
**Current software implementation · 2026**

An interactive recruitment-workflow system that makes candidate progression, workflow states and record histories inspectable. The latest implementation uses **FastAPI, SQLite, HTML, CSS and JavaScript**.

## What the system does

- Manage jobs and whether positions accept applications.
- Add and search applicants using **synthetic demonstration data**.
- Explore applications in a six-stage hiring **board or table**.
- Apply explicit stage transitions, with rejection and terminal-state rules.
- Examine candidate details, change history and an operations log.
- Inspect descriptive pipeline counts with clearly stated denominators.

The system does **not** score candidates, recommend hiring decisions, or analyze sensitive personal characteristics.

## Design rationale

| Research lens                    | Design choice                                                                                                   | What it demonstrates                                                              |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **HCI**                          | Board/table alternatives, a short guided workflow, stage-specific actions, accessible labels and error messages | Explicit interaction design decisions to be evaluated with users                  |
| **Information Systems**          | Relational entities, persistence, job and stage rules, version checks, event history                            | Traceable workflow implementation and data integrity                              |
| **Computational Social Science** | Stage snapshot counts with synthetic data and declared denominators                                             | Measurement transparency and caution about interpreting cross-sectional summaries |

### Inspectable workflow

1. View an applicant and identify the allowed next action.
2. Advance the applicant to an eligible stage.
3. Check the record's version and stage history.
4. Reload the system and confirm persisted changes.
5. Test duplicate applications and invalid transitions to observe safeguards.

## Interactive preview

**[Open the read-only recruitment pipeline demo]({{ '/research/recruitment-system/demo/' | relative_url }})** — explore fictional records, filter job openings, and inspect stage states without submitting applicant data. The complete local application (with SQLite persistence, updates and audit events) is described below.

## Engineering checks

The implementation has automated API tests covering core workflow behavior, data validation, persistence and read-only preview controls. In a real local HTTP run on **5 November 2026**, nine integrated assertions passed, including creating jobs and applicants, preventing duplicate applications, updating stages, checking history and blocking applications to closed jobs.

The public presentation is intended to use a read-only or isolated synthetic-data environment. A writable recruitment backend without authentication must not be exposed publicly.

## Evidence and limitations

This is a **software design and engineering artifact**, not a completed usability experiment. Real-user completion times, success rates, satisfaction scores and claims of improved efficiency are **not reported**. A formative evaluation protocol and blank observation templates are included with the source package for a future consent-based study.

[Back to research overview]({{ '/research/' | relative_url }})
