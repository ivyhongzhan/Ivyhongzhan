---
layout: page
title: "Recruitment Management System"
permalink: /research/recruitment-system/
nav: false
description: "A recruitment system developed for my 2021 capstone and reconstructed in 2026."
---

**BEng Thesis Project · Wuchang University of Technology · 2021**<br>
**Software reconstruction · 2026**

## Original capstone

I translated recruitment workflows into requirements, interaction flows, and prototypes, then implemented job posting, application tracking, and candidate management with **Spring Boot and MySQL**. I evaluated the workflows through **think-aloud usability testing with 8 participants** and used the findings to revise the interface.

The project drew on my recruitment operations experience at Zero Point HR. The current demonstration covers applications and hiring stages; it does not include shift scheduling or placement management.

## 2026 reconstruction

I rebuilt the workflow using **Java, Spring Boot, Spring Data JPA, and MySQL**, retaining the HTML, CSS, and JavaScript interface from the FastAPI implementation. This is new code developed in 2026, rather than recovered thesis source.

The system supports:

- Job creation and closing or reopening applications.
- Applicant search and a six-stage board or table.
- Validated stage transitions and duplicate-application checks.
- Persistent records, version checks for stale edits, and operation-event history.
- Current-stage counts with explicit denominators.

The board supports scanning by stage; the table supports search and detailed operations. Stage controls show the permitted next actions, while server-side checks reject invalid updates. The history makes accepted changes inspectable.

## Try the browser demo

**[Open the interactive demo]({{ '/assets/recruitment-demo.html' | relative_url }})** to add fictional applicants and jobs, search records, change stages, inspect history, and export example data.

The demo is a separate JavaScript implementation. It saves changes in your browser with `localStorage` and is **not connected to MySQL**. The [Java project](https://github.com/ivyhongzhan/recruitment-management-system) runs independently with MySQL persistence and server-side validation.

## Workflow rules

Five ordered progress states and one rejection outcome make six displayed stages. These rules simplify the demo; other recruitment settings may need additional states and exceptions.

| Implemented rule | Design reason | Unsupported exception |
| --- | --- | --- |
| Applied → Screening → Interview → Offer → Hired; no skipping or backward moves | Makes each change explicit and the next action inspectable | Fast-track hiring, correction/backtracking and parallel stages |
| Rejection from any active stage; Hired and Rejected are terminal | Preserves a simple final outcome without silently reopening it | Candidate withdrawal, offer declined and reopening a rejected application; these must not be relabelled as employer rejection |
| One application per candidate email and job | Prevents duplicate records within this demo | Reapplication to the same job or separate recruitment cycles |
| Interview is one stage | Keeps the overview compact | Multiple interview rounds and interview scheduling |
| Closed jobs reject new applications; existing applications remain | Separates intake availability from existing workflow | Automatically cancelling active applications when a job closes |
| Application updates require the current version | Detects stale edits | Automatic conflict merging or a multi-user approval workflow |

Withdrawal and declined offers are distinct from employer rejection and are not implemented in this version. The counts describe current application stages, not conversion rates or hiring outcomes. The system does not score candidates or recommend hiring decisions.

## Engineering checks and evaluation

[GitHub Actions run 42068376340](https://github.com/ivyhongzhan/recruitment-management-system/actions/runs/42068376340) passed **five Java integration tests** against MySQL 8.4, with no failures, errors, or skips. The checks cover job and application operations, validation, transitions, history, and frontend/API serving. A restart check confirmed MySQL persistence.

These are engineering checks for the **2026 reconstruction**, separate from the 8-participant study of the **2021 capstone**. The reconstruction has not been evaluated in a new participant study. A [formative evaluation protocol](https://github.com/ivyhongzhan/recruitment-management-system/blob/main/docs/FORMATIVE_EVALUATION.md) and blank recording templates are available for future work; no sessions or outcomes have been recorded in them.

The Java API retains `/api/audit` as its route name. Its operation-event log records accepted changes and timestamps, but does not identify an authenticated operator or provide tamper-evident records. The application has no authentication and is intended for isolated use with fictional data.

[Source, setup, and tests](https://github.com/ivyhongzhan/recruitment-management-system) · [Back to research overview]({{ '/research/' | relative_url }})
