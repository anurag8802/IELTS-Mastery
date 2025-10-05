import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Aditi Sharma",
    text: "IELTS Mastery helped me jump from Band 6 to Band 8 in just 2 months!",
  },
  {
    name: "Rahul Mehta",
    text: "The mock tests and feedback system were extremely accurate and helpful.",
  },
  {
    name: "Sara Khan",
    text: "I loved the AI Band Score predictor — it kept me motivated to improve.",
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <div className="testimonial" key={index}>
            <p>"{t.text}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
