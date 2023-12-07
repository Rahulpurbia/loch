import React from 'react'
import './TestimonialCarousel.css'
import TestimonialCard from "../TestimonialCard/TestimonialCard"

const TestimonialCarousel = () => {
  return (
    <div className="testimonial-carousel hide-scrollbar mt-30">
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
    </div>
  )
}

export default TestimonialCarousel