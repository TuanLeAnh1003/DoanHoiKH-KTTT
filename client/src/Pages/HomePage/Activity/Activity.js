import React, { useState, useEffect } from 'react'
import './Activity.css'
import "bootstrap/dist/css/bootstrap.css";
import NewsItem from '../../../Components/NewsItem/NewsItem';
import NewsItemImg from '../../../Assets/Images/news-item.png'
import Thumbnail from '../../../Assets/Images/thumbnail.png';
import NewsImage2 from '../../../Assets/Images/Image2.png';
import NewsImage1 from '../../../Assets/Images/Image1.png';
import NewsImage3 from '../../../Assets/Images/Image3.png';
import { Link } from 'react-router-dom';
import PostApi from '../../../Apis/PostApi'

import { useParams, useNavigate } from 'react-router-dom';

function Activity({ title }) {
  const [postsList, setPostsList] = useState()

  let label = ''

  const { lab } = useParams();
  const navigate = useNavigate()
  
  switch (lab) {
    case "doan-hoi":
      label = "Đoàn hội KH&KTTT";
      break;
    case "co-cau":
      label = "Cơ cấu nhân sự";
      break;
    case "danh-hieu":
      label = "Danh hiệu SV5T - TNTT";
      break;
    case "ban-tin":
      label = "Bản tin Đoàn - Hội";
      break;
    case "dang-dien-ra":
      label = "Hoạt động đang diễn ra";
      break;
    case "sap-dien-ra":
      label = "Hoạt động sắp diễn ra";
      break;
    case "cac-cuoc-thi":
      label = "Các cuộc thi của Đoàn Thanh niên";
      break;
    case "tai-uit":
      label = "Hoạt động tại UIT";
      break;
    case "thong-bao":
      label = "Thông báo";
      break;
    case "tin-cong-nghe":
      label = "Tin công nghệ";
      break;
    case "sinh-vien-tieu-bieu":
      label = "Sinh viên tiêu biểu";
      break;
    case "cau-chuyen-dep":
      label = "Những câu chuyện đẹp tại ISE";
      break;
    case "quy-trinh":
      label = "Quy trình - văn bản";
      break;
    case "hoc-bong":
      label = "Học bổng";
      break;
    case "viec-lam":
      label = "Việc làm - Thực tập";
      break;
    case "khac":
      label = "Khác";
      break;
    case "cuoc-thi":
      label = "Cuộc thi học thuật";
      break;
    case "tai-lieu":
      label = "Kho tài liệu";
      break;
    case "nghien-cuu":
      label = "Nghiên cứu khoa học cùng ISE";
      break;
    default:
      break;
  }

  useEffect(() => {
    PostApi.getPostsByLabel({
      label: label
    })
    .then(res => {
      setPostsList(res);
    })
  }, [lab])

  return (
    <div>
      <div className='cover'>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-custom">
            <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
            <li className="breadcrumb-item"><a style={{ cursor: 'pointer' }} onClick={() => navigate(`./../`, { replace: true })}>{title}</a></li>
            <li className="breadcrumb-item active" aria-current="page">{label}</li>
          </ol>
        </nav>
        <div className='title_activity'>
          <p className='category'>{title}</p>
          <h1>{label}</h1>
          <p>Already use Dlex? Sign in so we can tailor your support experience. If that’s not possible, we’d still like to hear from you.</p>
        </div>
      </div>

      {/* <NewsItem
        key={index}
        title={item.title}
        index={index}
        postsList={list}
      /> */}

      {
        postsList?.length > 0 ? (
          <>
            <div className='livenews_activity' style={{backgroundImage: `url('${postsList && postsList[0]?.image}')`}}>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='layoutleft'>
                      <p>{postsList && postsList[0]?.label[title]}</p>
                      <h2>{postsList && postsList[0]?.title}</h2>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='layoutright'>
                      <p>{postsList && postsList[0]?.content}</p>
                      <a onClick={() => navigate(`./${postsList[0]?._id}`, { replace: true })}>Xem thêm </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='listnew'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8'>
                    <h2>Bài đăng</h2>
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mới nhất
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Từ A - Z</a>
                        <a className="dropdown-item" href="#">Lượt xem nhiều nhất</a>
                      </div>
                    </div>
                    <div className='List_News'>
                      {
                        postsList?.map((post, index) => (
                          <div className='container'>
                            <div className='row'>
                              <div className='col-md-6'>
                                <img className='News_Image' src={post.image} alt='Thumbnail'></img>
                              </div>
                              <div className='col-md-6'>
                                <h4 className='News_Item_Title'>{post.title}</h4>
                                <p className='News_Item_Time'>{new Date(post.createdAt).toLocaleDateString('pt-PT')}</p>
                                <p className='News_Item_Description'>{post.content}</p>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='Trending__Topic'>
                      <h2>Trending</h2>
                      <ul className='Trending__Topic__List'>
                        <li className='Trending__Topic__Item'>
                          <img className='Trending__Topic__Img' src={Thumbnail} alt='Thumbnail'></img>
                          <p className='Trending__Topic__Desc'>Pathway to the Mediterranean</p>
                        </li>
                        <li className='Trending__Topic__Item'>
                          <img className='Trending__Topic__Img' src={Thumbnail} alt='Thumbnail'></img>
                          <p className='Trending__Topic__Desc'>Pathway to the Mediterranean</p>
                        </li>
                        <li className='Trending__Topic__Item'>
                          <img className='Trending__Topic__Img' src={Thumbnail} alt='Thumbnail'></img>
                          <p className='Trending__Topic__Desc'>Pathway to the Mediterranean</p>
                        </li>
                      </ul>
                      <div className='Trending__Tags'>
                        <h2>Tags</h2>
                        <div className='Trending__Tags__List'>
                          <button className='Trending__Tags__Button'>
                            <span className='Trending__Tags__Text'>Affordable</span>
                          </button>
                          <button className='Trending__Tags__Button'>
                            <span className='Trending__Tags__Text'>Europe</span>
                          </button>
                          <button className='Trending__Tags__Button'>
                            <span className='Trending__Tags__Text'>Most visitted</span>
                          </button>
                          <button className='Trending__Tags__Button'>
                            <span className='Trending__Tags__Text'>Luxury</span>
                          </button>
                          <button className='Trending__Tags__Button'>
                            <span className='Trending__Tags__Text'>Activity</span>
                          </button>
                          <button className='Trending__Tags__Button'>
                            <span className='Trending__Tags__Text'>Swimming</span>
                          </button>
                          <button className='Trending__Tags__Button'>
                            <span className='Trending__Tags__Text'>Best food</span>
                          </button>
                          <button className='Trending__Tags__Button'>
                            <span className='Trending__Tags__Text'>Trending</span>
                          </button>
                          <button className='Trending__Tags__Button'>
                            <span className='Trending__Tags__Text'>Asia</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
          
        ) : (
          <h3 style={{ marginBottom: '50px' }}>Hiện chưa có bài viết nào</h3>
        )
      }

    </div>
  )
}

export default Activity
