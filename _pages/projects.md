---
layout: page
title: projects
permalink: /projects/
# Research Projects  

---

## 🔧 Temporal Fusion Transformer for Predictive Maintenance  
**NASA C-MAPSS · 2024 · Time-Series Modeling · Transformer Architectures**

Developed a Transformer-based system for modeling multi-sensor turbofan engine degradation.  
Traditional RNN-based approaches (LSTM/GRU) struggle to capture long-term dependencies and cross-sensor interactions; this project adapts the **Temporal Fusion Transformer (TFT)** for engineering prognostics.

**Highlights:**  
- Designed a multi-sensor feature fusion pipeline (spectral, correlation, trend features)  
- Implemented TFT in PyTorch with gating mechanisms and attention-based temporal reasoning  
- Achieved **~20% RMSE improvement** over LSTM/GRU baselines  
- Applied SHAP for interpretable prediction of failure precursors  
- Presented results at internal departmental seminar  

**Keywords:** Transformer, Time-series, Predictive Maintenance, SHAP, Multi-sensor Fusion  
**Code:** *(to be added)*  

---

## 🎯 Causal Analysis of Oversampling under Distribution Shift  
**Applied ML · 2024 · Causal Inference · Robustness**

This project investigates why oversampling methods (SMOTE, ADASYN) often fail under covariate shift—even when they improve in-distribution accuracy.  
Using **causal inference**, I isolate oversampling effects from confounders to understand true robustness behavior.

**Contributions:**  
- Applied **Propensity Score Matching (PSM)** to estimate causal effect of oversampling  
- Benchmarked across multiple tabular datasets  
- Found **consistent 10–15% accuracy degradation** in OOD settings  
- Compared against cost-sensitive learning and reweighting strategies  
- Generated detailed robustness curve visualizations  

**Keywords:** Causal Inference, Robust ML, Oversampling, Distribution Shift, PSM  
**Report:** Internal ML Reading Group presentation  

---

## 📉 Bayesian Active Learning for Industrial Visual Inspection  
**MVTec AD · 2024 · Uncertainty Estimation · Data-efficient Learning**

To reduce annotation cost in industrial defect inspection, this project implements **Bayesian Active Learning** using uncertainty-based querying.

**Technical Approach:**  
- Implemented Monte Carlo Dropout to estimate **epistemic uncertainty**  
- Used **BALD (Bayesian Active Learning by Disagreement)** for query selection  
- Developed a CNN-based defect classification model for MVTec AD  
- Built an interactive sample selection dashboard  

**Results:**  
- Achieved **95% accuracy with 40% fewer labeled samples**  
- Demonstrated significant gain over random sampling  
- Released reproducible code and experiment pipeline  

**Keywords:** Bayesian ML, Active Learning, Industrial Vision, Uncertainty Quantification  
**Code:** *(to be added)*  

---

## 📚 Additional Work  
- Feature selection robustness under distribution shift (BEng Thesis)  
- Social media algorithmic exposure analysis (MSc Dissertation)  
- Participation in ML reading groups and industrial AI seminars  

---

If you’d like to see the corresponding code, datasets, or experiment logs, feel free to reach out or view my GitHub profile.  

