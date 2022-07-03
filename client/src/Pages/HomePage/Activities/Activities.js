import React, { useState, useEffect } from 'react'
import './Activities.css'
import "bootstrap/dist/css/bootstrap.css";
import ViewMore from '../../../Components/ViewMore/ViewMore';
import Tabs from "../../../Components/Tabs/Tabs";
import Thumbnail from '../../../Assets/Images/thumbnail.png';
import NewsImage2 from '../../../Assets/Images/Image2.png';
import NewsImage1 from '../../../Assets/Images/Image1.png';
import NewsImage3 from '../../../Assets/Images/Image3.png';
import PostApi from '../../../Apis/PostApi'
import { useNavigate, Link } from 'react-router-dom';

function Activities({ title }) {
  const [postsList, setPostsList] = useState()
  const [arrayOfPostsByLabel, setArrayOfPostsByLabel] = useState([])

  const navigate = useNavigate()

  let labelList = []

  if (title) {
    switch (title) {
      case "Giới thiệu":
        labelList = ["Đoàn - Hội KH&KTTT", "Cơ cấu nhân sự", "Danh hiệu SV5T - TNTT"]
        break;
      case "Hoạt động":
        labelList = ["Bản tin Đoàn - Hội", "Hoạt động đang diễn ra", "Hoạt động sắp diễn ra", "Các cuộc thi của Đoàn Thanh niên", "Hoạt động tại UIT"]
        break;
      case "Tin tức":
        labelList = ["Thông báo", "Tin công nghệ", "Sinh viên tiêu biểu", "Những câu chuyện đẹp tại ISE"]
        break;
      case "Hỗ trợ":
        labelList = ["Quy trình - văn bản", "Học bổng", "Việc làm - Thực tập", "Khác"]
        break;
      case "Học tập":
        labelList = ["Cuộc thi học thuật", "Kho tài liệu", "Nghiên cứu khoa học cùng ISE"]
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    PostApi.getEnoughPostsByTitle({
      title: title
    })
    .then((res) => {
      setArrayOfPostsByLabel(res);
    })
  }, [title])

  useEffect(() => {
    PostApi.getPostsByTitle({
      title: title
    })
    .then((res) => {
      setPostsList(res);
    })
  }, [title])

  const handleClickViewMore = (data) => {
    let labelLink = ''
    switch (data) {
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
    navigate(`./${labelLink}/${postsList[0]?._id}`, { replace: true })
  }

  return (
    <div>
      <div className='cover'>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb breadcrumb-custom'>
            <li className='breadcrumb-item'>
              <Link to='/'>Trang chủ</Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              {title}
            </li>
          </ol>
        </nav>
        <div className='title'>
          <h1>{title}</h1>
          <p>
            Những thông tin mới nhất về các hoạt động tại khoa KH&KTTT, các
            thông tin về các chương trình cho sinh viên khoa KH&KTTT.
          </p>
        </div>
      </div>

      <ViewMore title='Website Đoàn - Hội ISE có gì?' subTitle='Khám phá' />

      <div className='tabcontent'>
        <Tabs title={title} setPostsList={setPostsList} postsList={postsList}>
          <div label='Tất cả'>
            <div className='livenews' style={{ backgroundImage: postsList &&  `url('${postsList[0]?.image}')`}}>
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
                      <p>
                      {postsList && postsList[0]?.title}
                      </p>
                      <a onClick={() => handleClickViewMore(postsList[0]?.label[title][0])}>Xem thêm </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div label={labelList[0]}>
            <div className='livenews' style={{ backgroundImage: `url('${arrayOfPostsByLabel[0]?.image}')`}}>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='layoutleft'>
                      <p>{labelList[0]}</p>
                      <h2>{arrayOfPostsByLabel[0]?.title}</h2>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='layoutright'>
                      <p>
                        {arrayOfPostsByLabel[0]?.content}
                      </p>
                      <a onClick={() => navigate(`./${postsList[0]._id}`, { replace: true })}>Xem thêm </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div label={labelList[1]}>
            <div className='livenews' style={{ backgroundImage: `url('${arrayOfPostsByLabel[1]?.image}')`}}>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='layoutleft'>
                      <p>{labelList[1]}</p>
                      <h2>{arrayOfPostsByLabel[1]?.title}</h2>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='layoutright'>
                      <p>
                        {arrayOfPostsByLabel[1]?.content}
                      </p>
                      <a href='#'>Xem thêm </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div label={labelList[2]}>
            {
              arrayOfPostsByLabel[2] !== undefined ? (
                <div className='livenews' style={{ backgroundImage: `url('${arrayOfPostsByLabel[2]?.image}')`}}>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='layoutleft'>
                          <p>{labelList[2]}</p>
                          <h2>{arrayOfPostsByLabel[2]?.title}</h2>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='layoutright'>
                          <p>
                            {arrayOfPostsByLabel[2]?.content}
                          </p>
                          <a href='#'>Xem thêm </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <h3>Chưa có bài viết nào</h3>
              )
            }
          </div>
          
          <div label={labelList[3]}>
            {
              arrayOfPostsByLabel[3] !== undefined ? (
                <div className='livenews' style={{ backgroundImage: `url('${arrayOfPostsByLabel[3]?.image}')`}}>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='layoutleft'>
                          <p>{labelList[3]}</p>
                          <h2>{arrayOfPostsByLabel[3]?.title}</h2>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='layoutright'>
                          <p>
                            {arrayOfPostsByLabel[3]?.content}
                          </p>
                          <a href='#'>Xem thêm </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <h3>Chưa có bài viết nào</h3>
              )
            }
          </div>
          {/* <div label={labelList[4]}>
            <div className='livenews' style={{ backgroundImage: `url('${postsList[0]?.image}')`}}>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='layoutleft'>
                      <p>{labelList[4]}</p>
                      <h2>{arrayOfPostsByLabel[4]?.title}</h2>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='layoutright'>
                      <p>
                        {arrayOfPostsByLabel[4]?.content}
                      </p>
                      <a href='#'>Xem thêm </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </Tabs>
      </div>

      <div className='listnew'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <h2>Bài đăng</h2>
              <div className='dropdown'>
                <button
                  className='btn btn-secondary dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Mới nhất
                </button>
                <div
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
                >
                  <a className='dropdown-item' href='#'>
                    Từ A - Z
                  </a>
                  <a className='dropdown-item' href='#'>
                    Lượt xem nhiều nhất
                  </a>
                </div>
              </div>
              <div className='List_News'>
                {
                  postsList?.map((post, index) => index < 3 && (
                    <div key={index} className='container'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <img
                            className='News_Image'
                            src={post.image}
                            alt='Thumbnail'
                          ></img>
                        </div>
                        <div className='col-md-6'>
                          <h4 className='News_Item_Title'>
                            {post.title}
                          </h4>
                          <p className='News_Item_Time'>{new Date(post.createdAt).toLocaleDateString('pt-PT')}</p>
                          <p className='News_Item_Description'>
                            {
                              post.content.length > 10 ? (
                                `${post.content.substring(0, 10)}...`
                              ) : (
                                post.content
                              )
                            }
                          </p>
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
                    <img
                      className='Trending__Topic__Img'
                      src={Thumbnail}
                      alt='Thumbnail'
                    ></img>
                    <p className='Trending__Topic__Desc'>
                      Pathway to the Mediterranean
                    </p>
                  </li>
                  <li className='Trending__Topic__Item'>
                    <img
                      className='Trending__Topic__Img'
                      src={Thumbnail}
                      alt='Thumbnail'
                    ></img>
                    <p className='Trending__Topic__Desc'>
                      Pathway to the Mediterranean
                    </p>
                  </li>
                  <li className='Trending__Topic__Item'>
                    <img
                      className='Trending__Topic__Img'
                      src={Thumbnail}
                      alt='Thumbnail'
                    ></img>
                    <p className='Trending__Topic__Desc'>
                      Pathway to the Mediterranean
                    </p>
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
                      <span className='Trending__Tags__Text'>
                        Most visitted
                      </span>
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
    </div>
  );
}
export default Activities