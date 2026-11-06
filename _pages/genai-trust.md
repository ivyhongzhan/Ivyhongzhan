---
layout: page
title: "Generative AI Trust and Distrust"
permalink: /research/genai-trust/
nav: false
description: "Beyond the Aggregate: Trust and Distrust in Generative AI Across Technical Reddit Communities and Time."
---

## Beyond the Aggregate

_Trust and Distrust in Generative AI Across Technical Reddit Communities and Time_

**Sole-author research · 2026**<br>
_Under review at PACM HCI (CSCW)_

## Research question

How do pooled classifications of trust and distrust in generative AI compare with patterns within individual Reddit communities and half-year periods?

## What I did

I conducted a descriptive secondary analysis of data released by Pessianzadeh et al. (2026). I analyzed **8,519 eligible classification records** from five technical Reddit communities and **4,964 dimension records** in a separate archive.

I compared pooled, community, and half-year distributions, documenting the measurement fields, denominators, missing labels, and sparse or unavailable periods. Primary temporal comparisons cover **2023-H1 through 2025-H1**; December 2022 is partial-coverage context only.

For dimensions, I used the same released model-output field throughout: `Output_gpt-4.1-2025-04-14_few`. This documented replacement estimand differs from the source study’s mixed-field specification, which could not be reconstructed from the public release.

## Main findings

- **The pooled leading label does not lead in every community.** _Neither_ accounts for **41.7%** of pooled classifications, compared with **40.0%** for _Trust_. _Trust_ leads in ChatGPTCoding (**43.1%**) and programming (**46.2%**); _Neither_ leads in webdev, GitHub, and compsci.
- **Several dimension indicators occur frequently.** In the separate dimensions archive, Competence appears in **70.6%** of records, Reliability in **49.4%**, and Familiarity in **45.2%**. Indicators can co-occur within a record.
- **Community and time views reveal differences in composition and coverage.** A pooled percentage alone does not show these distributions or the sparse and unavailable half-years.

The findings support reporting pooled AI-trust discourse summaries alongside community and temporal views. They describe released discourse records, not individual attitudes, population prevalence, or causal effects. The two archives remain separate.

![Pooled and community-specific distributions of trust and distrust](https://raw.githubusercontent.com/ivyhongzhan/genai-trust-reddit-analysis/main/figures/rq1_figure.png)

_Figure 1. Classification and dimension profiles across five technical Reddit communities. The panels use separate archives and denominators._

## Code and reproduction

The [public workflow](https://github.com/ivyhongzhan/genai-trust-reddit-analysis/blob/main/docs/PUBLIC_REPRODUCTION.md) rebuilds the main numerical results and three principal figure layouts from the public source archives. A documented clean-checkout run passed **68 specified checks**, **11 unit tests**, and **12 frozen-file integrity checks**.

These checks do not validate the original computational labels or reproduce the complete submission. Some historical workflow checks remain blocked, and the original code for two supporting figures is unavailable. The [dated audit](https://github.com/ivyhongzhan/genai-trust-reddit-analysis/blob/main/docs/PUBLIC_REPRODUCTION_AUDIT_20261105.md) explains the remaining limits. Record-level Reddit data are not redistributed here.

## Research materials

[SSRN preprint](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7671698) · [Code and results](https://github.com/ivyhongzhan/genai-trust-reddit-analysis) · [Zenodo v3 archive](https://doi.org/10.5281/zenodo.23666151) · [Figure 1 (PDF; approximately 320 dpi embedded images)](https://github.com/ivyhongzhan/genai-trust-reddit-analysis/blob/main/figures/rq1_figure_300dpi.pdf)

[Source study](https://doi.org/10.1162/TACL.a.744) · [Source dataset](https://doi.org/10.5281/zenodo.20331918)

[Back to research overview]({{ '/research/' | relative_url }})
