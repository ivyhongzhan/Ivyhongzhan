---
layout: academic-home
title: About
permalink: /
nav: false
description: Academic website of Hong (Ivy) Zhan, featuring research in human–AI interaction, computational social science, information science, and software projects.
---

## About

Hello! I’m Hong Zhan, though you can call me Ivy. I study how people evaluate information, use digital platforms, and express trust in AI. My current research compares released classifications of AI-trust discourse across Reddit communities and time, with attention to what the measures can tell us.

My background combines computer science and social media research. I have designed interview studies, conducted thematic and quantitative analyses, and developed information systems. I want to build on these experiences in human–AI interaction research.

Outside academia, I enjoy traveling, hiking, and learning languages. I’ve visited more than 100 countries and enjoy exploring new places on foot. I’m also studying Spanish, Italian, German, and Japanese.

## Selected Work

Computational and qualitative research, recruitment systems, and AI review tools.

<style>
.hz-featured-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(6,auto) 20px repeat(6,auto);column-gap:20px;row-gap:0;margin:20px 0 27px}
.hz-featured-card{min-width:0;display:grid;grid-row:span 6;grid-template-rows:subgrid;padding:23px 21px 19px;border:1px solid #dce4ec;border-radius:15px;background:#fff;box-shadow:0 6px 22px rgba(22,42,67,.055);color:#172a41}
.hz-featured-card:nth-child(3){grid-column:1;grid-row:8/span 6}
.hz-featured-card:nth-child(4){grid-column:2;grid-row:8/span 6}
@media (hover:hover) and (pointer:fine){
  .hz-featured-card{position:relative;transition:transform .22s ease,box-shadow .22s ease;transform-origin:center center}
  .hz-featured-card:hover,.hz-featured-card:focus-within{transform:scale(1.05);z-index:2;box-shadow:0 14px 34px rgba(22,42,67,.14)}
}
@media (prefers-reduced-motion:reduce){.hz-featured-card{transition:none!important}}
.hz-featured-card:first-child{border-top:4px solid #325d8d}
.hz-featured-card:nth-child(2){border-top:4px solid #3d777c}
.hz-featured-card:nth-child(3){border-top:4px solid #685b88}
.hz-featured-card:nth-child(4){border-top:4px solid #96764c}
.hz-featured-eyebrow{font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;font-weight:750;color:#496279;margin-bottom:12px}
.hz-featured-card h3{font-size:1.22rem!important;line-height:1.3!important;letter-spacing:-.015em;margin:0 0 13px!important;color:#172a41!important}
.hz-featured-card p{font-size:.86rem;line-height:1.6;color:#45566b;margin:0 0 12px}
.hz-featured-card .hz-featured-question{font-size:.87rem;font-weight:600;color:#263e58}
.hz-featured-label{font-weight:750;color:#223c57}
.hz-featured-links{display:flex;flex-wrap:wrap;gap:9px 14px;align-items:center;align-self:start;margin-top:0;padding-top:9px}
.hz-featured-links a{font-size:.84rem;font-weight:700;text-decoration:underline;text-underline-offset:3px;color:#205988}
.hz-featured-links a:focus-visible{outline:3px solid #205988;outline-offset:3px}
.hz-featured-note{font-size:.79rem;color:#53667b}
@media(max-width:1050px){
  .hz-featured-grid{grid-template-columns:minmax(0,1fr);grid-template-rows:none;row-gap:18px}
  .hz-featured-card{display:flex;flex-direction:column;grid-row:auto!important;grid-column:auto!important}
  .hz-featured-card .hz-featured-links{margin-top:auto}
}
@media(max-width:630px){.hz-featured-card{padding:19px}}
@supports not (grid-template-rows:subgrid){
  .hz-featured-grid{grid-template-rows:none;row-gap:18px}
  .hz-featured-card{display:flex;flex-direction:column;grid-row:auto;grid-column:auto}
  .hz-featured-links{margin-top:auto}
}
</style>

<section class="hz-featured-grid" aria-label="Selected research and software work">
<article class="hz-featured-card">
  <div class="hz-featured-eyebrow">2026 · Sole-author manuscript · PACM HCI (CSCW) under review</div>
  <h3>Beyond the Aggregate: Trust and Distrust in Generative AI</h3>
  <p class="hz-featured-question">How do aggregated AI-trust classifications differ from patterns across communities and time?</p>
  <p><span class="hz-featured-label">My work.</span> I analyzed 8,519 released classification records from five technical Reddit communities and a separate archive of 4,964 dimension records, comparing distributions by community and half-year.</p>
  <p><span class="hz-featured-label">Finding.</span> <em>Neither</em> is the most frequent pooled label (41.7%), while <em>Trust</em> leads in two of the five communities.</p>
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
  <p><span class="hz-featured-label">My work.</span> I designed and conducted 15 semi-structured interviews, recorded and prepared the materials, and used NVivo and Excel for thematic analysis and organization.</p>
  <p><span class="hz-featured-label">Findings.</span> Interview coding and social-media-post analysis identified platform-specific communication, language barriers, and cross-platform credibility checking in students’ accounts of cultural adaptation.</p>
  <div class="hz-featured-links">
    <a href="{{ '/research/masters/' | relative_url }}">Research case study & methods</a>
    <a href="https://github.com/ivyhongzhan/msc-qualitative-analysis-toolkit">2026 Python companion (synthetic data)</a>
  </div>
</article>
<article class="hz-featured-card">
  <div class="hz-featured-eyebrow">2021 · BEng Thesis Project</div>
  <h3>Recruitment Management System</h3>
  <p class="hz-featured-question">An interactive recruitment pipeline informed by practical screening and placement workflows at Zero Point HR.</p>
  <p><span class="hz-featured-label">My work.</span> For my 2021 capstone, I built a Spring Boot/MySQL system and used think-aloud testing with 8 participants to guide interface revisions. In 2026, I reconstructed the workflow in Java and Spring Boot.</p>
  <p><span class="hz-featured-label">Try it.</span> The browser demo lets you add fictional applicants, search records, move applications through six stages, and inspect their history. Changes stay in your browser.</p>
  <div class="hz-featured-links">
    <a href="{{ '/research/recruitment-system/' | relative_url }}">System design & tests</a>
    <a href="https://github.com/ivyhongzhan/recruitment-management-system">Java/MySQL source & tests</a>
    <a href="{{ '/assets/recruitment-demo.html' | relative_url }}">Interactive demo</a>
  </div>
</article>
<article class="hz-featured-card">
  <div class="hz-featured-eyebrow">2026 · HCI research prototype · Interactive demo</div>
  <h3>AI Trust &amp; Verification</h3>
  <p class="hz-featured-question">How might an editable claim–evidence workspace support critical review of AI-generated answers?</p>
  <p><span class="hz-featured-label">My work.</span> Designed and implemented a React and TypeScript workspace for manually reviewing claims, comparing evidence, documenting judgments and exporting review records.</p>
  <p><span class="hz-featured-label">Research scope.</span> The interactive demo uses synthetic scenarios. A comparative user study is proposed but has not been conducted; the interface has not been shown to improve judgment quality.</p>
  <div class="hz-featured-links">
    <a href="{{ '/research/ai-trust-verification/' | relative_url }}">Prototype &amp; design</a>
    <a href="https://ivyhongzhan.github.io/ai-trust-verification/">Live demo</a>
    <a href="https://github.com/ivyhongzhan/ai-trust-verification">GitHub source</a>
  </div>
</article>
</section>

<p class="hz-featured-note">The 2026 software demos use fictional data. Their engineering tests are separate from the user research conducted for my original capstone.</p>

## Education

**[University of York](https://www.york.ac.uk/), United Kingdom**

MSc Social Media and Management · 2022–2024

**[Wuchang University of Technology](https://www.wut.edu.cn/), China**

BEng Computer Science and Technology · 2017–2021
