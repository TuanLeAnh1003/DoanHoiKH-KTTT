import React, { memo } from 'react'
import './BlogItemDetail.css'
import { Container, Row, Col } from 'react-bootstrap'
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';

function BlogItemDetail({ postId, title, subHeader, image, label, content, linkPost, createdAt, setType, handleClickUpdate }) {

  return (
    <Container className="BlogItemDetail">
      <Row className="BlogItemDetail__row1">
        <h4>Tùy chỉnh bài viết</h4>
      </Row>
      <Row className="BlogItemDetail__row2">
        <Col xs={4}>
          <img src={image} alt="img" />
        </Col>
        <Col xs={8}>
          <h3>{title}</h3>
          <p>{moment(createdAt).format('DD-MM-YYYY')}</p>
          <div className="BlogItemDetail__row2-wrapper">
            <button type="button" value={postId} onClick={(e) => {handleClickUpdate(e.target.value)}}>Cập nhật</button>
            <button type="button">Xóa</button>
          </div>
        </Col>
      </Row>
      <Row style={{ display: 'flex', alignItems: 'center', margin: '20px 0'}}>
        <Col xs={3}>Xem trước bài viết</Col>
        <Col style={{ background: 'rgba(0, 0, 0, 0.1)', height: '1px', width: '100%' }}></Col>
      </Row>
      <Row>
      <div className='Blog__Main'>
            <div className='Blog__Content__Header'>
              <div className='Blog__Label'>
                {
                  Object.values(label)?.map((lab, index) => 
                      (<div key={index} className='Blog__Label__Name'>{lab}</div>)
                  )
                }
              </div>
              <div className='Blog__Title'>{title}</div>
              <div className='Blog__Title__Footer'>
                <div className='Blog__Time'>{new Date(createdAt).toLocaleDateString('pt-PT')}</div>
                <div className='Blog__Interact'>
                  <button className='Blog__Button'>
                    <div className='Blog__Button__Icon'><FontAwesomeIcon icon={solid('thumbs-up')}/></div>
                    <div className='Blog__Button__Text'>Thích</div>
                  </button>
                  <button className='Blog__Button'>
                    <div className='Blog__Button__Icon'><FontAwesomeIcon icon={solid('share')}/></div>
                    <div className='Blog__Button__Text'>Chia sẻ</div>
                  </button>
                </div>
              </div>
              <div className='Blog__Line__Pos1 Blog__Line'></div>
            </div>
            <div className='Blog__Content__Body'>
              <p className='Blog__Paragraph1 Blog__Content__Text'>{subHeader}</p>
            </div>
            <div className="Blog__Content__Footer" style={{ justifyContent: 'right', flexDirection: 'row', paddingRight: '50px', marginBottom: '20px'}}>
              <div>
                <Link to='/' style={{ width: 'fit-content', display: 'flex', marginRight: '5px', color: '#FF5F40', alignItems: 'center' }}>
                  Xem tất cả
                  <FontAwesomeIcon icon={solid('angle-right')}/>
                </Link>
              </div>
            </div>
          </div>
      </Row>
    </Container>
  )
}

export default memo(BlogItemDetail)
