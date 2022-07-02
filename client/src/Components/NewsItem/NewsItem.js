import React, { memo } from 'react'
import './NewsItem.css'
import { Container, Row, Col } from 'react-bootstrap';
import NewsItemOutstanding from './NewsItemOutstanding';
import { Link } from 'react-router-dom'

function NewsItem({ title, index, postsList }) {
  let titleUrl = ''
  let labelLink = ''
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

  switch (postsList[0].label[title][0]) {
    case "Đoàn hội KH&KTTT":
      labelLink = "doan-hoi";
      break;
    case "Cơ cấu nhân sự":
      labelLink = "co-cau";
      break;
    case "Danh hiệu SV5T - TNTT":
      labelLink = "danh-hieu";
      break;
    case "Bản tin Đoàn - Hội":
      labelLink = "ban-tin";
      break;
    case "Hoạt động đang diễn ra":
      labelLink = "dang-dien-ra";
      break;
    case "Hoạt động sắp diễn ra":
      labelLink = "sap-dien-ra";
      break;
    case "Các cuộc thi của Đoàn Thanh niên":
      labelLink = "cac-cuoc-thi";
      break;
    case "Hoạt động tại UIT":
      labelLink = "tai-uit";
      break;
    case "Thông báo":
      labelLink = "thong-bao";
      break;
    case "Tin công nghệ":
      labelLink = "tin-cong-nghe";
      break;
    case "Sinh viên tiêu biểu":
      labelLink = "sinh-vien-tieu-bieu";
      break;
    case "Những câu chuyện đẹp tại ISE":
      labelLink = "cau-chuyen-dep";
      break;
    case "Quy trình - văn bản":
      labelLink = "quy-trinh";
      break;
    case "Học bổng":
      labelLink = "hoc-bong";
      break;
    case "Việc làm - Thực tập":
      labelLink = "viec-lam";
      break;
    case "Khác":
      labelLink = "khac";
      break;
    case "Cuộc thi học thuật":
      labelLink = "cuoc-thi";
      break;
    case "Kho tài liệu":
      labelLink = "tai-lieu";
      break;
    case "Nghiên cứu khoa học cùng ISE":
      labelLink = "nghien-cuu";
      break;
    default:
      break;
  }
  
  return (
    <Container className="news-item" key={index}>
      <Row className="news-item__row1">{title}</Row>
      <Row className="news-item__row2">
        <Col md={8}>
          <Link to={`/${titleUrl}/${labelLink}/${postsList[0]?._id}`}>
            <img src={postsList[0]?.image} alt="img" />
          </Link>
          <div>
          <Link to={`/${titleUrl}/${labelLink}/${postsList[0]?._id}`}>
            <h6>{postsList[0]?.title}</h6>
          </Link>
            <p>{postsList[0]?.date}</p>
          </div>
          <div className="news-item-row2-wrapper">
            {
              postsList[0].label[title]?.map((label, ind) => (
                <div className="news-item-row2-label">
                  {label}
                </div>
              ))
            }
          </div>
        </Col>
        <Col md={4}>
          <h5>Tin nổi bật</h5>
          {
            postsList?.map((item, ind) => {
              return (
                ind !== 0 && ind < 4 &&
                <NewsItemOutstanding
                  key={ind}
                  post= {item}
                  ind={index}
                  title={title}
                  titleUrl={titleUrl}
                />
              )
            })
          }
        </Col>
      </Row>
    </Container>
  )
}

export default memo(NewsItem)
