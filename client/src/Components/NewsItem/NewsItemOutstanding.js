import React from 'react'
import './NewsItemOutstanding.css'

function NewsItemOutstanding({news, index}) {
  return (
    <div className="news-item-outstanding">
      <img src={news.image} alt="img" />
      <div>
        <div>{news.label}</div>
        <p>{news.title}</p>
      </div>
    </div>
  )
}

export default NewsItemOutstanding
