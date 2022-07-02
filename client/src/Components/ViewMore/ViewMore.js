import React, { useState, useEffect, useRef } from 'react'
import './ViewMore.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import ViewMoreItem from './ViewMoreItem';
import ViewMoreImg from '../../Assets/Images/ViewMore.png'

function ViewMore({ title, subTitle }) {
  const [trans, setTrans] = useState(-(1075-window.innerWidth/2))
  
  const titleList = [
    {
      title: "Giới thiệu"
    },
    {
      title: "Hoạt động"
    },
    {
      title: "Tin tức"
    },
    {
      title: "Hỗ trợ"
    },
    {
      title: "Học tập"
    },
  ]

  return (
    <div className="view-more">
      <p>{subTitle}</p>
      <h4>{title}</h4>
      <div className="view-more__wrap">
        <div className="view-more__wrap-item">
          <ul 
            className="view-more__list"
            style={{left: trans + 'px'}}
          >
            {
              titleList.map((item, index) => (
                <li key={index}>
                  <ViewMoreItem 
                    img={ViewMoreImg}
                    title={item.title}
                  />
                </li>
              ))
            }
          </ul>
        </div>
        <div className="view-more__wrap-icon">
          <div>
            <FontAwesomeIcon icon={solid('angle-left')} onClick={() => setTrans(-15)}/>
          </div>
          <div>
            <FontAwesomeIcon icon={solid('angle-right')} onClick={() => setTrans(-2*(1075-window.innerWidth/2))}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewMore
