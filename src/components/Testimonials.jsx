import React from 'react';

import testimonials from '../Json/testimonials.json'
function Testimonials() {

  return (
    <div className="testimonials" id="testimonials">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <img src={testimonial.image} alt={`${testimonial.author} foto`} />
            <p>{testimonial.text}</p>
            <h4>{testimonial.author}</h4>
            <span>{testimonial.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
