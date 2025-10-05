import React from 'react';
import './Features.css';

const features = [
  {
    title: "Speaking Practice",
    desc: "Get live 1-on-1 sessions with expert IELTS trainers.",
  },
  {
    title: "Mock Tests",
    desc: "Access full-length IELTS mock tests with instant feedback.",
  },
  {
    title: "AI Band Score",
    desc: "Use our AI tool to estimate your band score and track progress.",
  },
  {
    title: "Personalized Feedback",
    desc: "Receive tailored feedback on your writing and speaking tasks.",
  }
];

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Our Key Features</h2>
      <div className="feature-cards">
        {features.map((f, index) => (
          <div className="card" key={index}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
