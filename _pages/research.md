---
layout: page
title: Research
permalink: /research/
---

# Research  

My research aims to build **reliable, data-efficient, and deployment-ready AI for engineering and industrial systems**, with emphasis on robustness, uncertainty quantification, and learning under distribution shift.  
I develop methods that remain stable and interpretable when deployed in safety-critical environments such as manufacturing, aerospace, and equipment health monitoring.

---

## 🔍 Core Research Areas  

### **1. 🛡️ Robust & Trustworthy Machine Learning for Industrial Systems**  
Modern engineering applications operate under shifting distributions, noisy measurements, and extreme class imbalance.  
I study the principles that make machine learning **robust, generalizable, and causally reliable** outside of training conditions.

**Topics include:**  
- Robustness under distribution shift  
- Rare-event and class-imbalanced learning  
- Causal interpretation of data interventions  
- Reliability assessment for mission-critical decisions  

My research focuses on developing algorithms that maintain **stable performance in real industrial pipelines**, not only in idealized benchmarks.

---

### **2. ⏳ Transformer-Based Time-Series Modeling**  
Industrial sensors produce multi-channel temporal signals with long-range dependencies.  
I work on adapting **Transformer architectures** for prognostics and health monitoring.

**Topics of interest:**  
- Temporal Fusion Transformer (TFT)  
- Multi-sensor representation learning  
- Attention-based long-range dependency modeling  
- Failure precursor identification  
- Explainability via attention and SHAP analysis  

My work shows that Transformers significantly outperform RNN baselines in degradation modeling and early anomaly detection.

---

### **3. 📉 Bayesian Learning & Data-Efficient AI**  
Many industrial settings lack labeled data or have high annotation cost.  
I explore Bayesian and Active Learning frameworks to improve sample efficiency and decision reliability.

**Focus areas:**  
- Epistemic & aleatoric uncertainty quantification  
- Bayesian neural networks (MC Dropout, ensembles)  
- BALD & disagreement-based query strategies  
- Data-efficient defect inspection and anomaly detection  

My goal is to reduce human labeling requirements while ensuring **uncertainty-aware, reliable model decisions**.

---

## 🎯 Representative Research Questions  

1. **How can we design Transformer-based models that generalize under distribution shift in engineering systems?**  
2. **What is the causal effect of oversampling and data rebalancing strategies on model robustness?**  
3. **How can Bayesian uncertainty estimation guide reliable decision-making in industrial contexts?**  
4. **How can AI systems remain interpretable and trustworthy for engineers—not only for ML practitioners?**

---

## 🌟 Current Projects (with Key Results)

### **🔧 Temporal Fusion Transformer for Predictive Maintenance (NASA C-MAPSS)**  
- Designed Transformer-based degradation modeling pipeline  
- **Achieved ~20% RMSE reduction vs. LSTM/GRU baselines**  
- Applied SHAP to reveal early failure precursors  

---

### **🎯 Causal Analysis of Oversampling under Distribution Shift**  
- Used Propensity Score Matching (PSM) to isolate causal effect  
- **Observed consistent 10–15% OOD accuracy drop** with oversampling  
- Benchmarked alternative reweighting strategies  

---

### **📉 Bayesian Active Learning for Industrial Visual Inspection (MVTec AD)**  
- Implemented MC Dropout + BALD query strategy  
- **Achieved 95% accuracy using 40% fewer labeled samples**  
- Built reproducible defect inspection pipeline  

---

## 🚀 Long-Term Vision (PhD)  

My long-term research goal is to develop **next-generation industrial AI systems** that are:

- **Robust** to sensor drift, noise, and environmental variation  
- **Causally grounded** and interpretable  
- **Uncertainty-aware** for safe deployment  
- **Data-efficient** in annotation-scarce environments  
- **Deployable** in real manufacturing and engineering systems  

I aim to advance foundational methods at the intersection of **ML robustness, causal inference, Bayesian learning, and engineering systems**, with direct applications in manufacturing quality control, predictive maintenance, and intelligent industrial automation.

---

If you are interested in discussing research collaboration or PhD supervision, feel free to reach out.
