import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";


function Footer() {
  return (
    <div style={{ backgroundColor: '#E6F3F8', minHeight: '300px', width: '100%' }}>
      <Container>
        <Row>
          <Col>Footer nè</Col>
          <Col>2</Col>
          <Col>3</Col>
          <Col>4</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer