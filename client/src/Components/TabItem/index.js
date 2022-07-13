import React, { memo, useState, useEffect } from 'react'
import './TabItem.css'
import { Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TabItem({ post, title }) {
  const [arrayLabel, setArrayLabel] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    let arrayTemp = []
    if (post) {
      if (post.label !== undefined) {
        for (let labelsList of Object.values(post.label)) {
          for (let label of labelsList) {
            arrayTemp.push(label);
          }
        }
      }
    }
    setArrayLabel(arrayTemp)
  }, [post])

  const handleClickViewMore = (data) => {
    console.log(data);
    let labelLink = ''
    switch (data) {
      case "Đoàn - Hội KH&KTTT":
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
    navigate(`./${labelLink}/${post?._id}`, { replace: true })
  }

  return (
    <Row className="TabItem" style={{ backgroundImage: `url(${post?.image})` }}>
      <Col className="TabItem__Col1" xs={7}>
        <ul className="TabItem__Col1--labelList">
          {arrayLabel?.map((label, index) => (
            <li key={index}>{label}</li>
          ))}
        </ul>
        <h1>{post?.title}</h1>
      </Col>
      <Col className="TabItem__Col2" xs={5}>
        <p>{post?.subHeader}</p>
        <a onClick={() => handleClickViewMore(post?.label[title][0])}>
          <p>Xem thêm</p>
          <FontAwesomeIcon icon={solid('angle-right')} />
        </a>
      </Col>
    </Row>
  );
}

export default memo(TabItem)