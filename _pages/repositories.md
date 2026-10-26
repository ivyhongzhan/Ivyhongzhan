---
layout: page
permalink: /repositories/
title: Research Repository
nav: false
description: Research code, results, and reproducibility materials.
---

# Research Repository

The accompanying research code, aggregate results, figures, and verification resources are available in the repository below.

[Research Artifacts on Zenodo](https://doi.org/10.5281/zenodo.23655847)

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
{% for repo in site.data.repositories.github_repos %}
  {% include repository/repo.liquid repository=repo %}
{% endfor %}
</div>
