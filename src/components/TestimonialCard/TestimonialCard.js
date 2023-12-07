import React from "react";
import "./TestimonialCard.css";
const TestimonialCard = ({name,title,testimonial}) => {
  return (
    <div className="testimonial-card">
      <div className="d-flex gap-1 align-items-center">
        <div className="font-500">{name}</div>
        <div className="position-text">{title}</div>
      </div>
      <div className="testimonial-text mt-10">
       {testimonial}
      </div>
    </div>
  );
};

export default TestimonialCard;
