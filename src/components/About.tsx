import React from "react";
import { useNavigate } from "react-router-dom";
import "./about.css"; // Link the About page CSS

const About: React.FC = () => {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleSignUp = () => {
    navigate("/login"); // Arahkan pengguna ke halaman login
  };

  return (
    <div className="about-container">
      {/* Bagian kiri */}
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
      </div>

      {/* Bagian kanan */}
      <div className="about-right">
        {/* Tombol Sign Up */}
        <button className="signup-button" onClick={handleSignUp}>
          Sign Up for Free
        </button>
        <img
          src="../assets/pest_control.png"
          alt="About PestPatrol"
          className="about-image"
        />
        <p className="contactus">Contact Us :</p>
        <div className="contact-icons">
          <a href="#">
            <img src="../assets/facebook.jpg" alt="Facebook" />
          </a>
          <a href="#">
            <img src="../assets/Instagram.jpg" alt="Instagram" />
          </a>
          <a href="#">
            <img src="../assets/x.jpg" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
