---
layout: page
title: "AI Trust & Verification"
permalink: /research/ai-trust-verification/
nav: false
description: "Interactive HCI prototype for human-led evidence review of AI-generated answers."
---

# AI Trust & Verification

**Independent HCI research prototype · 2026**

**[Launch interactive demo](https://ivyhongzhan.github.io/ai-trust-verification/)** · **[View source and tests](https://github.com/ivyhongzhan/ai-trust-verification)** · [Research rationale](https://github.com/ivyhongzhan/ai-trust-verification/blob/main/docs/RESEARCH_RATIONALE.md) · [Proposed evaluation](https://github.com/ivyhongzhan/ai-trust-verification/blob/main/docs/STUDY_PROTOCOL.md)

## Research question

How does a claim–evidence workspace, compared with an answer and free-form notes, affect the quality of evidence-grounded judgments and the effort of reviewing AI-generated informational answers?

This is a **proposed question**, not a tested outcome. No user study has been conducted, and the prototype is not an automated fact-checker or a validated intervention for improving trust calibration.

## Working prototype

I designed and implemented a human-led React, TypeScript and Vite application that lets a person:

- Create and edit claims from an AI-generated answer.
- Add evidence excerpts and classify each source's relationship to a claim as supporting, challenging or contextual.
- Record explicit human judgments, including unresolved and mixed-evidence conclusions.
- Separate evidence assessment from trust/distrust reflections and an intended-use decision.
- Save records in the browser and import/export JSON or export Markdown.

The demonstration provides **synthetic claims, sources and scenarios**. It does not use live model outputs, independently verify sources or assign an objective reliance score.

## Connection to my research

My empirical study, [*Beyond the Aggregate*]({{ '/research/genai-trust/' | relative_url }}), describes patterns in released computational labels of AI trust and distrust across technical Reddit communities and time. It does **not** observe how individuals verify answers or rely on AI.

The prototype responds to that unresolved human–AI interaction question by making evidence, uncertainty and intended use inspectable. Its design rationale motivates a future comparison; it is **not an empirically supported conclusion** from the Reddit study.

## Evaluation status and limitations

A formative evaluation and a later randomized comparison with free-form note-taking are **proposals only**. No participants, ethics approval, usability findings or demonstrated improvements in decision quality are claimed. The research protocol and verification report describe the proposed measures, implementation checks and remaining work.

**[Try the interactive prototype](https://ivyhongzhan.github.io/ai-trust-verification/)** · [GitHub repository](https://github.com/ivyhongzhan/ai-trust-verification) · [Verification report](https://github.com/ivyhongzhan/ai-trust-verification/blob/main/docs/VERIFICATION.md)
