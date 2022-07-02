import React from 'react'
import './ViewMoreItem.css'
import { Link } from "react-router-dom";

function ViewMoreItem({ img, title }) {
  let titleUrl = ''
  switch (title) {
    case 'Giới thiệu':
      titleUrl = 'gioi-thieu'
      break;
    case 'Hoạt động':
      titleUrl = 'hoat-dong'
      break;
    case 'Tin tức':
      titleUrl = 'tin-tuc'
      break;
    case 'Hỗ trợ':
      titleUrl = 'ho-tro'
      break;
    case 'Học tập':
      titleUrl = 'hoc-tap'
      break;
    default:
      break;
  }

  return (
    <div style={{backgroundImage: 'url('+ img + ')'}} className="view-more-item">
      <div><Link to={`/${titleUrl}`}>{title}</Link></div>
    </div>
  )
}

export default ViewMoreItem
