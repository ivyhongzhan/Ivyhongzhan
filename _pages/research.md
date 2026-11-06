---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 2
description: Research on trust in generative AI across technical online communities.
---

## 01. Beyond the Aggregate

_Trust and Distrust in Generative AI Across Technical Reddit Communities and Time_

Sole-author research · 2026<br>
_Manuscript under review at PACM HCI (CSCW)_

Human–AI Interaction · Information Science · Computational Social Science

### Overview

How do aggregate measures of trust and distrust in generative AI relate to the community-specific and temporal patterns underlying them?

This study examines released computational classifications across five technical Reddit communities, comparing pooled results with community- and time-stratified patterns.

### Methods & Contributions

- **Research design:** Re-analyzed 8,519 eligible trust/distrust classifications across five technical Reddit communities, comparing pooled, community-level, and half-year patterns.
- **Measurement and reproducibility:** Analyzed 4,964 dimension records in a separate archive; documented archive-specific denominators, eligibility criteria, and a uniform-field replacement estimand; released frozen results with automated verification checks.

### Key Findings

**1. Aggregate patterns differ across communities.**

_Neither_ is the most frequent classification overall (41.7%), while _Trust_ leads in ChatGPTCoding (43.1%) and programming (46.2%).

**2. Trust-related indicators capture multiple dimensions.**

Competence (70.6%), Reliability (49.4%), and Familiarity (45.2%) are the most frequently observed indicators in the separate dimensions archive.

**3. Stratification reveals the limits of pooled summaries.**

Pooled summaries do not show community-specific distributions or differences in half-year coverage. Stratified reporting makes these patterns and measurement boundaries explicit.

This work contributes to my broader research interest in how trust in AI is measured and interpreted across social contexts.

### Code & Reproducibility

The public analysis pipeline reconstructs the study's **main numerical results and three principal figures** from the two openly released source archives, without redistributing record-level data. A documented clean-checkout run completed **68/68 specified reproduction checks**; the frozen files and 11 automated unit tests also passed.

This is a bounded computational reproduction, **not** independent validation of the underlying computational labels, construct validity, or the complete anonymized submission. Historical Day 17 workflow gating and the unavailable Day 24 supporting-figure renderer remain explicitly documented.

**[Reproduce from public data](https://github.com/ivyhongzhan/genai-trust-reddit-analysis/blob/main/docs/PUBLIC_REPRODUCTION.md)** · [Audit and limitations](https://github.com/ivyhongzhan/genai-trust-reddit-analysis/blob/main/docs/PUBLIC_REPRODUCTION_AUDIT_20261105.md)

### Research Figure

![Pooled and community-specific distributions of trust and distrust](https://raw.githubusercontent.com/ivyhongzhan/genai-trust-reddit-analysis/main/figures/rq1_figure.png)

_Figure 1. Classification and dimension profiles across five technical Reddit communities. The panels use separate analytical archives and denominators._

### Research Materials

[SSRN: Preprint](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7671698) · [GitHub: Code & Reproducibility](https://github.com/ivyhongzhan/genai-trust-reddit-analysis) · [Zenodo: Archived Artifacts](https://doi.org/10.5281/zenodo.23666151) · [Public Reproduction Guide](https://github.com/ivyhongzhan/genai-trust-reddit-analysis/blob/main/docs/PUBLIC_REPRODUCTION.md) · [Figure 1 (320 dpi PDF)](https://github.com/ivyhongzhan/genai-trust-reddit-analysis/blob/main/figures/rq1_figure_300dpi.pdf)

---

## 02. Cross-platform information practices

**MSc dissertation · University of York · 2023**

Designed and conducted **15 semi-structured interviews** with Chinese students studying in the UK. Transcribed and coded interviews in NVivo and analyzed social-media posts to examine platform-specific communication, participation, information credibility and cultural adaptation. This study demonstrates primary user research, cross-language qualitative data preparation and interpretive analysis.

**[Read the MSc research case study]({{ '/research/masters/' | relative_url }})**

---

## 03. Recruitment Management System

**BEng Thesis Project · 2021 | Current web reconstruction · 2026**

A working information-system prototype with searchable applicants, six-stage recruitment boards, persisted records, state-transition rules and inspectable event history. The engineering artifact supports HCI interaction-design analysis and information-systems workflow evaluation. All demonstration records are synthetic; no empirical usability outcomes are claimed.

**[Explore the systems case study]({{ '/research/recruitment-system/' | relative_url }})**

**[Try the interactive synthetic-data demo]({{ '/assets/recruitment-demo.html' | relative_url }})**


---

## 04. AI Trust & Verification

**HCI research prototype · 2026 · Interactive demo**

An interactive, human-led claim–evidence review workspace for documenting sources, judgments and intended use when evaluating AI-generated answers. Built with React and TypeScript and demonstrated with synthetic scenarios. This is a **working prototype, not a completed user study or validated trust intervention**.

**[Explore the research prototype]({{ '/research/ai-trust-verification/' | relative_url }})** · [Try the interactive demo](https://ivyhongzhan.github.io/ai-trust-verification/) · [View source code](https://github.com/ivyhongzhan/ai-trust-verification)
