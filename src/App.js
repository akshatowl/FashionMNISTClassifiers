import React from 'react';
import './App.css'; // Import your CSS for styling
import fashionMnistImage from './fashionmnist.png';
import fashion from './fashion.png';
import gini from './gini.png';
import entropy from './entropy.png';

function App() {
  return (
    <div className="App">
      <h1 className="title">Study And Insights On FashionMNIST Datasets</h1>
      <img src={fashion} alt="Fashion MNIST" className="image" />

      <p className="description">
       This blog is a documentation and summary of the various models we tried to peform a classification task using the FashionMNIST dataset. We dive into why we
       chose the particular models we experimented with and how we gradually converged to the optimal solution according to us.
      </p>
      {/* New Section: Decision Tree */}
      <section className="decision-tree-section">
        <h2 className="section-title">Using Decision Tree Model</h2>
        <p className="section-text">
        A decision tree is a machine learning algorithm used for both classification and regression tasks. It represents decisions and their possible consequences in the form of a tree structure, which is easy to understand and interpret. Decision trees are popular due to their simplicity, interpretability, and the fact that they can handle both categorical and continuous data.
        It consists of various components:<br/>
        <b>Root Node:</b> This is the starting point of the tree, representing the entire dataset and the initial decision to be made.<br/>
        <b>Internal Nodes:</b> These nodes represent decisions or tests based on certain attributes. Each internal node has one or more branches leading to further decisions or outcomes.<br/>
        <b>Branches:</b> These are the paths that connect nodes and represent the outcomes of decisions made at previous nodes.<br/>
        <b>Leaf Nodes:</b> These nodes are the final outcomes of the tree, where no further splitting happens. They provide the classification result or prediction.<br/>
        In building decision trees, two common criteria are often used to measure how well the splits are made:<br/>
        <b>Gini Impurity:</b> This metric indicates how often a randomly chosen instance would be misclassified if it were assigned to a class according to the distribution of classes in the dataset.<br/>
        <img src={entropy} alt="Gini index formula" className="image" /> <br/>
        <b>Entropy:</b> This measures the level of uncertainty or disorder in the dataset, helping to assess the purity of a node in the tree.<br/>
        <img src={gini} alt="Entropy formula" className="image" /> <br/>
        In essence, decision trees provide a simple, yet powerful, way to model decision-making processes by systematically testing data attributes and making predictions based on these tests.<br/>
        </p>
      </section>
      {/* New Section: Using Deep Learning: Convolutional Neural Networks */}
      <section className="deep-learning-section">
        <h2 className="section-title">Using Deep Learning: Convolutional Neural Networks</h2>
        <p className="section-text">
        Convolutional Neural Networks are a revolution in the deep learning field and especially in image recognition. 
        The CNN is designed in such a way that it will automatically learn and adapt the feature hierarchies from the images at the spatial level. 
        It works on the visual performances of object detection, image classification, and image segmentation.In general, CNNs are comprised of 
        convolutional layers, pooling layers, and fully connected layers. Among these, the convolutional layers take care of feature extraction,
        while the pooling layers reduce dimensionality and computational cost. The fully connected layers, finally, make a prediction based on learned features.
        </p>
      </section>
      <p/><p/><p/><p/><p/><p/><p/><p/><p/><p/><p/><p/><p/><p/><p/>
      <footer className="footer">
        <p className="footer-text">Authors: Akshat Pandey, Logan Garcia, Pragya Mittal, Tanmay, Vishnu</p>
      </footer>
    </div>

  );
}

export default App;
