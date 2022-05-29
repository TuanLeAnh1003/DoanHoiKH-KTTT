import React from 'react'
import './ViewMoreItem.css'

function ViewMoreItem({ img, title }) {
  return (
    <div style={{backgroundImage: 'url('+ img + ')'}} className="view-more-item">
      <div>{title}</div>
    </div>
  )
}

export default ViewMoreItem
