import React from 'react'
import './TestimonialCarousel.css'
import TestimonialCard from "../TestimonialCard/TestimonialCard"

const testimonial=[
    {
        name:"Rahul.P.",
        title:"Frontend Developer",
        testimonial:"“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
    },
    {
        name:"Sanjay.P.",
        title:"Fullstack Developer",
        testimonial:"“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
    },
    {
        name:"Someone.P.",
        title:"Backend Developer",
        testimonial:"“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”"
    },
]

const TestimonialCarousel = () => {
  return (
    <div className="testimonial-carousel hide-scrollbar mt-30">
      {testimonial.map((testimonial,index)=>   <TestimonialCard key={`${index}-testimonial`} name={testimonial.name} title={testimonial.title} testimonial={testimonial.testimonial}/>)}
    </div>
  )
}

export default TestimonialCarousel