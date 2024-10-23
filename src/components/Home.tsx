import React from 'react';
import './home.css'; // Link the home page CSS

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1>BEWARE OF <span className="highlight-text">PESTS</span></h1>
        <p>
          Pests are herbivores that economically damage cultivated plants. Pest
          attacks can decrease plant productivity, both in terms of quality and
          quantity, and may even cause crop failure. Therefore, pest control is
          necessary when their population exceeds the Economic Threshold.
        </p>
        <p>
          In pest control, it is important to recognize the types of pests
          (common names, life cycles, and characteristics) as well as plant
          damage symptoms, so that the control measures taken are accurate.
        </p>
        <p>
          PestPatrol is a website developed to help farmers better manage plant
          protection. The main focus of this website is on pest identification,
          a crucial component of plant protection routines. We also attract home
          gardeners who often seek advice from professionals. With the disease
          identification feature offered, users can upload images of problematic
          plant symptoms, and the website will provide an analysis along with
          appropriate solutions.
        </p>
      </div>
      <div className="home-right">
        <img
          src="/src/assets/image.png"
          alt="Pest detection illustration"
          className="home-image"
        />
      </div>
    </div>
  );
};

export default Home;
