import React, { memo, useState, useEffect} from 'react'
import './NewsItemOutstanding.css'
import { Link } from 'react-router-dom'

function NewsItemOutstanding({post, title, titleUrl}) {
  const [arrayLabel, setArrayLabel] = useState([])

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
  }, [])

  let labelLink = ''
  switch (post.label[title][0]) {
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
  return (
      <Link to={`/${titleUrl}/${labelLink}/${post._id}`}>
        <div className="news-item-outstanding">
            <img src={post.image} alt="img" />
            <div className="news-item-outstanding-label-wrapper">
                {
                  arrayLabel?.map((label, ind) => (
                    <div key={ind} className="news-item-outstanding-label">
                      {label}
                    </div>
                  ))
                }
              <p>{post.title}</p>
            </div>
        </div>
      </Link>
  )
}

export default memo(NewsItemOutstanding)
