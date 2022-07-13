import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import './BlogItem.css';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from "moment"
import BlogItemDetail from './../BlogItemDetail';

function BlogItem({ postId, title, subHeader, image, label, content, createdAt, index, linkPost, setType, handleClickUpdate }) {
  return (
    <Accordion.Item eventKey={index}>
        <Accordion.Header className="BlogItem">
          <Col xs={1}>
            <input type="checkbox" />
          </Col>
          <Col className="BlogItem__col2" xs={7}>
            <img src={image} alt="img" />
            <div>
              <h4>{title}</h4>
              <p>{subHeader}</p>
            </div>
          </Col>
          <Col className="BlogItem__col3" xs={2}>
            <p>{moment(createdAt).format('DD-MM-YYYY')}</p>
          </Col>
          <Col className="BlogItem__col4" xs={2}>
            <FontAwesomeIcon icon={solid('eye')} />
            <p>0</p>
          </Col>
        </Accordion.Header>
        <Accordion.Body>
          <BlogItemDetail
            key={index}
            postId= {postId}
            title= {title}
            subHeader= {subHeader}
            image= {image}
            label= {label}
            content= {content}
            createdAt= {createdAt}
            linkPost= {linkPost}
            setType= {setType}
            handleClickUpdate = {handleClickUpdate}
          />
        </Accordion.Body>
    </Accordion.Item>
  );
}

export default BlogItem;
