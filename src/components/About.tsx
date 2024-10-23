import React from "react";
import "./about.css"; // Link the About page CSS
// import image from "../assets/pest_control.png";
const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h3>ABOUT US</h3>
        <h1>Helping farmers detect pests through the power of AI.</h1>
        <p>
          PestPatrol is a web-based platform designed to assist farmers and
          gardeners in managing plant protection efficiently. Using advanced
          technology, this website offers a disease identification feature by
          allowing users to upload photos of plant symptoms.
        </p>
        <p>
          Once the issue is identified, users receive tailored recommendations
          for solutions, including environmentally-friendly biological and
          organic treatment methods.
        </p>
        <p>
          We serve the needs of both large-scale farmers and home gardeners,
          aligning with modern trends where millennials increasingly rely on
          technology to grow their own food.
        </p>
        <p>
          The platform is focused on delivering practical, user-friendly
          solutions for sustainable plant health management.
        </p>
        <button className="signup-button">Sign Up for Free</button>
      </div>
      <div className="about-right">
        <img
          src="../assets/pest_control.png"
          alt="About PestPatrol"
          className="about-image"
        />
        <div className="contact-icons">
          {/* <img src="" alt="Contact Us Icons" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
