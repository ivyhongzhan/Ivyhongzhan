---
layout: academic-home
title: About
permalink: /
nav: false
description: Academic website of Hong (Ivy) Zhan, featuring research in human–AI interaction, computational social science, information science, and software projects.
---

## About

Hello! I’m Hong Zhan, though you can call me Ivy. My research examines how the **measurement and aggregation of AI-related discourse** influence interpretations of **trust and distrust**. My current work uses **descriptive secondary analysis** of **released classification data** to compare aggregate findings with **community- and time-specific patterns**, with particular attention to **measurement boundaries and data provenance**.

My background spans **computer science and social media research**, including **qualitative interviewing, thematic analysis, quantitative analysis, and information-system development**. These experiences inform my interest in context-sensitive approaches to studying **human–AI interaction**.

Outside academia, I enjoy traveling, hiking, and learning languages. I’ve visited more than 100 countries and enjoy exploring new places on foot. I’m also studying Spanish, Italian, German, and Japanese.

## Selected Work

Research, empirical methods, and a working software prototype—three complementary ways of investigating digital technologies and human experience.

<style>
.hz-featured-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:repeat(6,auto);column-gap:16px;row-gap:0;margin:20px 0 27px}
.hz-featured-card{min-width:0;display:grid;grid-row:span 6;grid-template-rows:subgrid;padding:23px 21px 19px;border:1px solid #dce4ec;border-radius:15px;background:#fff;box-shadow:0 6px 22px rgba(22,42,67,.055);color:#172a41}
/* Subtle elevation only on pointer-hover devices, without moving neighboring cards. */
@media (hover:hover) and (pointer:fine){
  .hz-featured-card{position:relative;transition:transform .22s ease,box-shadow .22s ease;transform-origin:center center}
  .hz-featured-card:hover,.hz-featured-card:focus-within{transform:scale(1.05);z-index:2;box-shadow:0 14px 34px rgba(22,42,67,.14)}
}
@media (prefers-reduced-motion:reduce){
  .hz-featured-card{transition:none!important}
}
.hz-featured-card:first-child{border-top:4px solid #325d8d}.hz-featured-card:nth-child(2){border-top:4px solid #3d777c}.hz-featured-card:nth-child(3){border-top:4px solid #685b88}
.hz-featured-eyebrow{font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;font-weight:750;color:#496279;margin-bottom:12px}
.hz-featured-card h3{font-size:1.22rem!important;line-height:1.3!important;letter-spacing:-.015em;margin:0 0 13px!important;color:#172a41!important}
.hz-featured-card p{font-size:.86rem;line-height:1.6;color:#45566b;margin:0 0 12px}
.hz-featured-card .hz-featured-question{font-size:.87rem;font-weight:600;color:#263e58}
.hz-featured-divider{height:1px;background:#e5eaf0;margin:8px 0 13px}
.hz-featured-label{font-weight:750;color:#223c57}
.hz-featured-links{display:flex;flex-wrap:wrap;gap:9px 14px;align-items:center;align-self:start;margin-top:0;padding-top:9px}
.hz-featured-links a{font-size:.84rem;font-weight:700;text-decoration:underline;text-underline-offset:3px;color:#205988}
.hz-featured-links a:focus-visible{outline:3px solid #205988;outline-offset:3px}
.hz-featured-note{font-size:.79rem;color:#53667b}
@media(max-width:950px){.hz-featured-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.hz-featured-card:last-child{grid-column:1/-1;margin-top:16px}}
@media(max-width:630px){.hz-featured-grid{grid-template-columns:minmax(0,1fr)}.hz-featured-card{padding:19px}.hz-featured-card:not(:first-child){margin-top:16px}}
@supports not (grid-template-rows:subgrid){.hz-featured-grid{grid-template-rows:none;row-gap:16px}.hz-featured-card{display:flex;flex-direction:column}.hz-featured-links{margin-top:auto}.hz-featured-card:last-child{margin-top:0}}
</style>

<section class="hz-featured-grid" aria-label="Selected research and software work">
<article class="hz-featured-card">
  <div class="hz-featured-eyebrow">2026 · Sole-author manuscript · PACM HCI (CSCW) under review</div>
  <h3>Beyond the Aggregate: Trust and Distrust in Generative AI</h3>
  <p class="hz-featured-question">How do aggregated AI-trust classifications differ from patterns across communities and time?</p>
  <p><span class="hz-featured-label">My work.</span> Secondary computational analysis of 8,519 classification records from five technical Reddit communities, with a separate 4,964-record dimension archive; community- and half-year-level descriptive summaries.</p>
  <p><span class="hz-featured-label">Evidence.</span> <em>Neither</em> is the largest pooled category (41.7%); <em>Trust</em> leads in two communities. Source provenance, denominators and reproduction limits are documented.</p>
  <div class="hz-featured-links">
    <a href="{{ '/research/genai-trust/' | relative_url }}">Study & findings</a>
    <a href="https://github.com/ivyhongzhan/genai-trust-reddit-analysis">Code & verification</a>
    <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7671698">Preprint</a>
  </div>
</article>
<article class="hz-featured-card">
  <div class="hz-featured-eyebrow">2023 · MSc dissertation · University of York</div>
  <h3>Cross-platform Social Media & Information Practices</h3>
  <p class="hz-featured-question">How do different platform and cultural environments shape Chinese students' communication and sense of belonging in the UK?</p>
  <p><span class="hz-featured-label">My work.</span> Designed and conducted 15 semi-structured interviews; recorded, transcribed, translated and organized materials; used NVivo-assisted thematic coding and Excel.</p>
  <p><span class="hz-featured-label">Research focus.</span> Cross-platform communication, language barriers, information credibility and cultural adaptation, informed by interview coding and analysis of social-media posts. No identifiable participant materials are displayed.</p>
  <div class="hz-featured-links">
    <a href="{{ '/research/masters/' | relative_url }}">Research case study & methods</a>
    <a href="https://github.com/ivyhongzhan/msc-qualitative-analysis-toolkit">2026 Python companion (synthetic data)</a>
  </div>
</article>
<article class="hz-featured-card">
  <div class="hz-featured-eyebrow">2021 · BEng capstone topic | 2026 · Interactive software</div>
  <h3>Recruitment Management System</h3>
  <p class="hz-featured-question">An interactive recruitment pipeline informed by practical screening and placement workflows at Zero Point HR.</p>
  <p><span class="hz-featured-label">My work.</span> Implemented a 2026 recruitment workflow reconstruction using Java, Spring Boot and MySQL, with six-stage application tracking, validated transitions and operation-event history.</p>
  <p><span class="hz-featured-label">Try it.</span> The browser demo supports fictional applicant creation, search, stage transitions and local history. It uses synthetic data and browser-local storage.</p>
  <div class="hz-featured-links">
    <a href="{{ '/research/recruitment-system/' | relative_url }}">System design & tests</a>
    <a href="https://github.com/ivyhongzhan/recruitment-management-system">Java/MySQL source & tests</a>
    <a href="{{ '/assets/recruitment-demo.html' | relative_url }}">Interactive demo</a>
  </div>
</article>
</section>

<p class="hz-featured-note">Public materials distinguish empirical findings, qualitative interpretations and synthetic software demonstration data. No new usability-study outcomes are claimed.</p>

## Education

**[University of York](https://www.york.ac.uk/), United Kingdom**

MSc Social Media and Management · 2022–2024

**[Wuchang University of Technology](https://www.wut.edu.cn/), China**

BEng Computer Science and Technology · 2017–2021
