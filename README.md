# Fashion MNIST Classification



This repository contains a project focused on classifying images from the [Fashion MNIST dataset](https://github.com/zalandoresearch/fashion-mnist). The project evaluates multiple machine learning models using metrics like accuracy, precision, recall, and F1-score.
You can view the detailed results and visualizations on the [project website](https://akshatowl.github.io/FashionMNISTClassifiers/).

## Table of Contents
- [Overview](#overview)
- [Dataset](#dataset)
- [Models](#models)
- [Evaluation Metrics](#evaluation-metrics)
- [Setup](#setup)
- [Results](#results)
- [Future Work](#future-work)
- [License](#license)

## Overview
The goal of this project is to compare the performance of different classifiers on the Fashion MNIST dataset. The models include traditional algorithms like Logistic Regression and Decision Trees, as well as advanced techniques like Support Vector Machines (SVMs) and Convolutional Neural Networks (CNNs).

## Dataset
The Fashion MNIST dataset consists of 70,000 grayscale images of 28x28 pixels, categorized into 10 classes:
1. T-shirt/top  
2. Trouser  
3. Pullover  
4. Dress  
5. Coat  
6. Sandal  
7. Shirt  
8. Sneaker  
9. Bag  
10. Ankle boot  

The dataset is divided into 60,000 training samples and 10,000 test samples.

## Models
The following classifiers are implemented in this project:
- **K-Nearest Neighbours(KNN)**
- **Logistic Regression**
- **Decision Trees**
- **Support Vector Machines (SVMs)**
- **Convolutional Neural Networks (CNNs)**

## Evaluation Metrics
The models are evaluated using:
- **Accuracy**: Overall correctness of the predictions.
- **Precision**: Measure of true positive results divided by all positive predictions.
- **Recall**: Measure of true positive results divided by all actual positives.
- **F1-Score**: Harmonic mean of precision and recall.

## Setup
### Prerequisites
- Python 3.8+
- Required Python libraries:
  - `numpy`
  - `pandas`
  - `matplotlib`
  - `scikit-learn`
  - `tensorflow` or `pytorch` (for CNNs)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fashion-mnist-classification.git
   cd fashion-mnist-classification

## Results
Below is a summary of the evaluation metrics for each model (scaled data analysis):

| Model             | Accuracy (%) | Precision (%) | Recall (%) | F1-Score (%) |
|-------------------|--------------|---------------|------------|--------------|
| KNN               | 85.35        | 85.66         | 85.35      | 85.36        |
| Logistic Regression | 83.61      | 83.42         | 83.61      | 83.50        |
| Decision Tree     | 80.26        | 80.66         | 80.26      | 80.31        |
| Linear SVM        | 84.00        | 83.60         | 83.50      | 83.50        |
| RBF SVM           | 88.00        | 88.10         | 88.20      | 88.20        |
| CNN               | 91.98        | 91.99         | 91.98      | 91.96        |
