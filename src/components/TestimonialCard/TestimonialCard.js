import React from "react";
import "./TestimonialCard.css";
const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <div className="d-flex gap-1 align-items-center">
        <div className="font-500">Rahul P.</div>
        <div className="position-text">Ex Prime Minister</div>
      </div>
      <div className="testimonial-text mt-10">
        “Love how Loch integrates portfolio analytics and whale watching into
        one unified app.”
      </div>
    </div>
  );
};

export default TestimonialCard;
