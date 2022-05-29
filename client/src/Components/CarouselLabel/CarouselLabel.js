import React from 'react'
import './CarouselLabel.css'

function CarouselLabel({ label, title, date }) {
  return (
    <div className="carousel-label">
      <div>{label}</div>
      <h4>{title}</h4>
      <p>{date}</p>
    </div>
  )
}

export default CarouselLabel
