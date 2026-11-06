---
layout: page
title: "Generative AI Trust and Distrust"
permalink: /research/genai-trust/
nav: false
description: "Beyond the Aggregate: Trust and Distrust in Generative AI Across Technical Reddit Communities and Time."
---

## Beyond the Aggregate

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
