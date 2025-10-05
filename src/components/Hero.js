import React from 'react';
import './Hero.css';
import heroImg from '../assests/hero-image.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Achieve Your Dream IELTS Band!</h1>
        <p>Join 10,000+ students who improved their IELTS score with expert trainers and AI-powered tools.</p>
        <button className="hero-btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="IELTS Banner" />
      </div>
    </section>
  );
};

export default Hero;
