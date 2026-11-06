---
layout: page
title: "Recruitment Management System"
permalink: /research/recruitment-system/
nav: false
description: "A hiring-workflow prototype with state transitions, audit history and synthetic-data evaluation."
---

# Recruitment Management System

**BEng capstone · Wuchang University of Technology · 2021**  
**Current portfolio implementation · 2026**

The **2021 BEng graduation design** used **Spring Boot and MySQL**. The **2026 system reconstruction** also uses **Java, Spring Boot, Spring Data JPA and MySQL**, while preserving the reviewed HTML, CSS and JavaScript interface. It implements job and application management, validated six-stage transitions, persistent records and audit history. [View the complete source, Docker Compose setup and integration tests on GitHub](https://github.com/ivyhongzhan/recruitment-management-system). The [public browser demo]({{ '/assets/recruitment-demo.html' | relative_url }}) is a separate JavaScript prototype that stores synthetic records in the visitor's browser with `localStorage`; it is **not connected to the project's MySQL database**.

The demo draws on my professional recruitment operations experience at Zero Point HR. It demonstrates the application and screening-to-decision workflow, not shift scheduling or placement management.

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

## Workflow rules and scope

The following reasons explain the 2026 demonstration design; they are not evidence of universal recruiting practice or a validated user requirement. Five ordered progress states plus one rejection outcome make six displayed stages.

| Implemented rule | Design reason | Unsupported exception |
| --- | --- | --- |
| Applied → Screening → Interview → Offer → Hired; no skipping or backward moves | Makes each change explicit and the next action inspectable | Fast-track hiring, correction/backtracking and parallel stages |
| Rejection from any active stage; Hired and Rejected are terminal | Preserves a simple final outcome without silently reopening it | Candidate withdrawal, offer declined and reopening a rejected application; these must not be relabelled as employer rejection |
| One application per candidate email and job | Prevents duplicate records within this demo | Reapplication to the same job or separate recruitment cycles |
| Interview is one stage | Keeps the overview compact | Multiple interview rounds and interview scheduling |
| Closed jobs reject new applications; existing applications remain | Separates intake availability from existing workflow | Automatically cancelling active applications when a job closes |
| Application updates require the current version | Detects stale edits | Automatic conflict merging or a multi-user approval workflow |

A different operational setting may require additional states and explicit event types. The current model should be evaluated with recruiters before extending it; rejected must not stand in for every reason an application ends.

### Inspectable workflow

1. View an applicant and identify the allowed next action.
2. Advance the applicant to an eligible stage.
3. Check the record's version and stage history.
4. Reload the system and confirm persisted changes.
5. Test duplicate applications and invalid transitions to observe safeguards.

## Interactive preview

**[Open the interactive recruitment management demo]({{ '/assets/recruitment-demo.html' | relative_url }})** — add fictional applicants or job openings, filter applications, update hiring stages, inspect event history, and export example data. The public version saves changes only in your own browser through JavaScript `localStorage`; it is not connected to MySQL. The independently runnable Java/Spring Boot project provides MySQL persistence and server-side workflow validation. [Open the GitHub repository](https://github.com/ivyhongzhan/recruitment-management-system).

## Engineering checks

The repository includes Java integration tests against MySQL 8.4 for job/application operations, validation, stage transitions, audit history, persistence and frontend/API serving. [View the verified GitHub Actions run](https://github.com/ivyhongzhan/recruitment-management-system/actions/runs/42068376340): five integration tests passed with no failures or skips, and a restart check confirmed MySQL persistence.

The public presentation is intended to use a read-only or isolated synthetic-data environment. A writable recruitment backend without authentication must not be exposed publicly.

## Evidence and limitations

The **2026 portfolio implementation** is a software design and engineering artifact, not a completed usability experiment. Real-user completion times, success rates, satisfaction scores and claims of improved efficiency are **not reported**. A formative evaluation protocol and blank observation templates are included with the source package for a future consent-based study.

[Back to research overview]({{ '/research/' | relative_url }})
