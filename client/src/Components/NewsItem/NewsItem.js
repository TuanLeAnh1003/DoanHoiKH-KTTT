import React from 'react'
import './NewsItem.css'
import { Container, Row, Col } from 'react-bootstrap';
import NewsItemOutstanding from './NewsItemOutstanding';


function NewsItem({ title, index, newsList }) {
  return (
    <Container className="news-item" key={index}>
      <Row className="news-item__row1">{title}</Row>
      <Row className="news-item__row2">
        <Col md={8}>
          <img src={newsList[0].image} alt="img" />
          <div>
            <h6>{newsList[0].title}</h6>
            <p>{newsList[0].date}</p>
          </div>
          <div>{newsList[0].label}</div>
        </Col>
        <Col md={4}>
          <h6>Tin nổi bật</h6>
          {
            newsList.map((item, index) => (
              index !== 0 && 
              <NewsItemOutstanding
                news= {item}
                index={index}
              />
            ))
          }
        </Col>
      </Row>
    </Container>
  )
}

export default NewsItem
