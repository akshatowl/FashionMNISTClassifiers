import React from 'react';
import './App.css'; // Import your CSS for styling
import fashionMnistImage from './fashionmnist.png';
import fashion from './fashion.png';
import gini from './gini.png';
import entropy from './entropy.png';
import svm from './svm.png';
import lr from './lr.png';
import bp from './bp.png';
import cnn from './cnnarch.png';
import method from './method.png';
import result from './results.png';

function App() {
  return (
    <div className="App">
      <h1 className="title"><u>Study And Insights On FashionMNIST Datasets</u></h1>
      <img src={fashion} alt="Fashion MNIST" className="image" />

      <p className="description">
      Image classification is everywhere - from unlocking your phone with your face to self-driving cars spotting road signs. In our project, we tackled this fascinating field using the FashionMNIST dataset, a collection of 70,000 grayscale images showing different clothing items like T-shirts, trousers, and sneakers.

We explored this challenge using both traditional and cutting-edge approaches. On the traditional side, we used tried-and-true methods like logistic regression and decision trees - simple yet powerful tools that help us understand exactly how the classification works. We also implemented Support Vector Machines (SVMs), which excel at handling complex image data, and Convolutional Neural Networks (CNNs), the current powerhouse of image recognition.

To measure how well these different approaches performed, we used various metrics like accuracy (how often the model is right), precision (how reliable its positive predictions are), and recall (how many actual positives it catches).

This blog post will walk you through our journey of comparing these different approaches and share what we learned about their strengths and weaknesses in fashion image classification.
      </p>
      {/* Methodology */}
      <section className="methodology">
        <h2 className="section-title">Methodology</h2>
        <p className="section-text">
        We worked with FashionMNIST, a dataset of 28x28 pixel grayscale clothing images. Before jumping into machine learning, we did some essential housekeeping. First, we split our data into three parts: training, validation, and testing. We also standardized the data and used PCA to simplify our images while keeping 95% of their important information - like compressing a photo without losing the important details.
        We tried two main approaches: <br/><br/>
        <b>Traditional Machine Learning</b><br/>
We tested several classic algorithms: K-Nearest Neighbors, Logistic Regression, Support Vector Machines, and Decision Trees. Each model got its own special tuning to perform at its best.

<br/><br/><b>Deep Learning with CNN</b><br/>
We also built a more sophisticated model called a Convolutional Neural Network using PyTorch. Think of it as a digital brain that learns to spot patterns in images. To make it even smarter, we flipped and rotated images slightly to help the model learn better. We kept track of how well it was learning using various performance metrics and saved the version that performed best.

Using this two-pronged approach let us compare traditional methods with modern deep learning techniques, giving us a comprehensive view of what works best for fashion image classification.

        </p>
        <img src={method} alt="methodology" className="image" />
      </section>

      <section className="data-preprocessing">
        <h2 className="section-title">Data-preprocessing</h2>
        <p className="section-text">
        The Fashion-MNIST dataset, consisting of 70,000 grayscale images (28x28 pixels) of 10 fashion categories, was preprocessed for classical and deep learning models. 
        Using PyTorch, the images were flattened into 784-dimensional vectors. The pixel values were standardized with StandardScaler, ensuring a mean of 0 and a standard deviation of 1 to enhance gradient-based optimization. 
        The dataset was split into training (further divided into training and validation sets with a 90-10 ratio) and test sets. 
        To reduce dimensionality and computational complexity while retaining 95% of the variance, Principal Component Analysis (PCA) was applied post-standardization, yielding inputs for machine learning models.
        </p>
      </section>
      {/* New Section: KNN */}
      <section className="KNN-section">
        <h2 className="section-title">KNN Model</h2>
        <p className="section-text">
        KNN is simple to implement and effective for classifying similar data, making it suitable for FashionMNIST. Ren, Fei, et al. found a k value of 4 to be optimal, but our tests showed that the default k value of 5 outperformed k=4 on test data, so it was used. The default p value of 2 (Euler distance) also provided comparable scores during initial tests and was retained.
        </p>
      </section>

      {/* New Section: Linear regression */}
      <section className="linear-regression-section">
        <h2 className="section-title">Linear Regression Model</h2>
        <p className="section-text">
        Logistic regression was chosen for its simplicity, efficiency, and ability to handle multinomial classification, suitable for the dataset's 10 classes. The lbfgs solver effectively managed the 784-pixel input space and loss function, while the regularization parameter (C=1.0) balanced model complexity and generalization to prevent overfitting. Setting max\_iter = 1000 ensured convergence without excessive computation, and random\_state = 42 guaranteed reproducibility. This configuration efficiently linked pixel intensity values to clothing categories while preserving computational efficiency and interpretability.
        </p>
        <img src={lr} alt="linear regression" className="image" />
      </section>
      
      {/* New Section: Decision Tree */}
      <section className="decision-tree-section">
        <h2 className="section-title">Decision Tree Model</h2>
        <p className="section-text">
        A decision tree is a versatile machine learning algorithm used for classification and regression tasks, represented as a tree structure that is simple, interpretable, and capable of handling both categorical and continuous data.
        It consists of several components: the root node, which represents the starting point and encompasses the entire dataset; internal nodes, where decisions or tests are made based on specific attributes; branches, which connect nodes and indicate the outcomes of these decisions; and leaf nodes, which are the final outputs of the tree, providing the classification result or prediction with no further splitting.
        In building decision trees, two common criteria are often used to measure how well the splits are made:<br/>
        <b>Gini Impurity:</b> This metric indicates how often a randomly chosen instance would be misclassified if it were assigned to a class according to the distribution of classes in the dataset.<br/>
        <img src={entropy} alt="Gini index formula" className="image" /> <br/>
        <b>Entropy:</b> This measures the level of uncertainty or disorder in the dataset, helping to assess the purity of a node in the tree.<br/>
        <img src={gini} alt="Entropy formula" className="image" /> <br/>
        In essence, decision trees provide a simple, yet powerful, way to model decision-making processes by systematically testing data attributes and making predictions based on these tests.<br/>
        </p>
      </section>
      {/* New Section: svm */}
      <section className="svm-section">
        <h3 className='section-title'>Linear SVM</h3>
        <p className="section-text">
        Linear SVM is ideal for datasets where classes can be separated by a straight line or hyperplane. It focuses on finding the optimal hyperplane that maximizes the margin between classes, ensuring robust generalization. The regularization parameter C balances the trade-off between maximizing the margin and minimizing errors. By using dimensionality reduction techniques like PCA, high-dimensional data can often be projected into a space where a linear decision boundary suffices. Linear SVM is computationally efficient and offers clear interpretability, making it a great choice for linearly separable data and scenarios prioritizing simplicity and speed.

        </p>
        <h3 className='section-title'>Radical Basis Function SVM</h3>
        <p>
        For datasets with complex, non-linear relationships, RBF SVM offers the flexibility to map data into higher-dimensional spaces using the kernel trick. This allows it to create intricate decision boundaries that better separate classes. The gamma parameter in RBF SVM controls the influence of individual data points, balancing overfitting and generalization. While more computationally intensive, RBF SVM excels in handling datasets with intricate patterns, making it a powerful choice for non-linearly separable data.
        </p>
        <img src={svm} alt="svm" className="image" /> <br/>
      </section>
      {/* New Section: Using Deep Learning: Convolutional Neural Networks */}
      <section className="deep-learning-section">
        <h2 className="section-title">Deep Learning: Convolutional Neural Networks</h2>
        <p className="section-text">
        Convolutional Neural Networks are a revolution in the deep learning field and especially in image recognition. 
        The CNN is designed in such a way that it will automatically learn and adapt the feature hierarchies from the images at the spatial level. 
        It works on the visual performances of object detection, image classification, and image segmentation.In general, CNNs are comprised of 
        convolutional layers, pooling layers, and fully connected layers. Among these, the convolutional layers take care of feature extraction,
        while the pooling layers reduce dimensionality and computational cost. The fully connected layers, finally, make a prediction based on learned features.
        </p>
        <img src={cnn} alt="cnn" className="image" />
      </section>
      {/* New Section: results */}
      <section className="results-section">
        <h2 className="section-title">Results</h2>
        <p className="section-text">
        The dataset was split with 10% of the training data used for validation, ensuring consistent splits using a random state of 42. Data scaling was applied across all models, and PCA was performed to create reduced-dimension datasets retaining 95% variance. Models were trained on both scaled and PCA-transformed data, repeated three times to ensure reproducibility and mitigate variability from random initialization. Performance was evaluated using accuracy, precision, recall, F1-score, and confusion matrices.
The CNN model outperformed others on scaled data, followed by RBF SVM and KNN. On PCA-transformed data, CNN was unable to process the reduced dimensions. RBF SVM and KNN performed best, with logistic regression following. Results align with prior studies highlighting PCA's benefits for SVM. Metrics across models showed high consistency, indicating reliable evaluation.
        </p>
        <img src={result} alt="Results" className="image" /><br/>
      </section>
      {/* New Section: bp */}
      <section className="bp-section">
        <h2 className="section-title">Business Perspective</h2>
        <p className="section-text">
        Our project with FashionMNIST offers a glimpse into some game-changing applications.

Smart Retail Operations
Imagine a warehouse where thousands of clothing items are automatically sorted and categorized without human intervention. Large retailers use image classification to streamline their distribution centers, cutting down what used to be days of manual sorting into mere hours. <br/>

<br/><b>Multi-layered Quality Control</b><br/>
Think of it as a multi-layer security check, but for clothes. Different AI models work together like a well-oiled machine: simple models quickly check if a t-shirt is actually a t-shirt, while more sophisticated ones scan for subtle defects like irregular stitching or fabric flaws.<br/>

<br/><b>Trend Spotting</b><br/>
AI is becoming fashion's new trend forecaster. By analyzing countless images from social media, runway shows, and street fashion, these systems can spot emerging trends before they hit mainstream. Fashion brands use this intel to make smarter decisions about what to design and produce next.<br/>

<br/><b>Sustainable Fashion</b><br/>
Here's where it gets really interesting - AI helps fashion become more eco-friendly. By better predicting demand and spotting production issues early, companies can reduce overproduction and waste.

        </p>
        <img src={bp} alt="bp" className="image" /> <br/>
      </section>
      <p/><p/><p/><p/><p/><p/><p/><p/><p/><p/><p/><p/><p/><p/><p/>
      <hr width="100%" size="2"></hr>
      <footer className="footer">
        <p className="footer-text">Authors: Akshat Pandey, Logan Garcia, Pragya Mittal, Tanay, Vishnu</p>
      </footer>
    </div>

  );
}

export default App;