import React from 'react';
import './App.css'; // Import your CSS for styling
import fashionMnistImage from './fashionmnist.png';

function App() {
  return (
    <div className="App">
      <h1 className="title">Classifiers for the Fashion MNIST Datasets</h1>
      <img src={fashionMnistImage} alt="Fashion MNIST" className="image" />

      <p className="description">
       This blog is a documentation and summary of the various models we tried to peform a classification task using the FashionMNIST dataset. We dive into why we
       chose the particular models we experimented with and how we gradually converged to the optimal solution according to us.
      </p>
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
        <p className="footer-text">Authors: Akshat Pandey, Logan Garcia, Vishnu, Pragya, Tanmay</p>
      </footer>
    </div>

  );
}

export default App;
