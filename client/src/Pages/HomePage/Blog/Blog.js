import React, { useState, useEffect } from 'react'
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import BlogImg1 from '../../../Assets/Images/BlogImg1.jpg'
import BlogImg2 from '../../../Assets/Images/BlogImg2.jfif'
import { useParams } from 'react-router-dom'
import PostApi from '../../../Apis/PostApi';

function Blog({title}) {
  const [post, setPost] = useState()
  const [postsListTitle, setPostsListTitle] = useState()
  const [postsListLabel, setPostsListLabel] = useState()

  
  const { postId, lab } = useParams()
  
  let label = ''
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
    PostApi.getPostsByTitle({
      title: title
    })
    .then(res => {
      setPostsListTitle(res);
    })
    PostApi.getPostsByLabel({
      label: label
    })
    .then(res => {
      setPostsListLabel(res);
    })
  }, [])

  useEffect(() => {
    PostApi.getPostById({
      postId: postId
    })
    .then(res => {
      setPost(res);
    })
  }, [postId])

  return (
    <div>
      <div>
        <div className='Blog__Dir'>
          <ul className='Blog__list'>
            <li className='Blog__DirItem'>Trang chủ</li>
            <li className='Blog__DirItem Blog__DirIcon'><FontAwesomeIcon icon={solid('angle-right')}/></li>
            <li className='Blog__DirItem'>{title}</li>
            <li className='Blog__DirItem Blog__DirIcon'><FontAwesomeIcon icon={solid('angle-right')}/></li>
            <li className='Blog__DirItem'>{label}</li>
            <li className='Blog__DirItem Blog__DirIcon'><FontAwesomeIcon icon={solid('angle-right')}/></li>
            <li className='Blog__DirItem'>{post && (post?.title.length > 25 ? `${post?.title.slice(0, 25)}` : post.title)}</li>
          </ul>
        </div>
        <div className='Blog__Content'>
          <div className='Blog__Main'>
            <div className='Blog__Content__Header'>
              <div className='Blog__Label'>
                <div className='Blog__Label__Name'>{label}</div>
              </div>
              <div className='Blog__Title'>{post?.title}</div>
              <div className='Blog__Title__Footer'>
                <div className='Blog__Time'>{new Date(post?.createdAt).toLocaleDateString('pt-PT')}</div>
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
              <p className='Blog__Paragraph1 Blog__Content__Text'>{post?.content}</p>
              {/* <p className='Blog__Paragraph2'>Sales Copywriting vs. UX copywriting</p>
              <p className='Blog__Paragraph3 Blog__Content__Text'>First things first, understand the nature of the copy you’re writing for. There are some subtle differences between sales (or persuasive) copywriting and UX writing.</p>
              <ul className='Blog__Content__List1'>
                <li className='Blog__Paragraph4 Blog__Content__Text'>Why consistent writing makes you a better designer</li>
                <li className='Blog__Paragraph4 Blog__Content__Text'>5 soft skills every product designer should master</li>
                <li className='Blog__Paragraph4 Blog__Content__Text'>The UX Writing Starter-Kit</li>
              </ul>
              <p className='Blog__Paragraph5 Blog__Content__Text'>Sales copywriting is all about getting users to make a purchase or sign up for a product or service. UX copywriting, on the other hand, is all about helping users reach a goal efficiently and effectively.</p>
              <p className='Blog__Paragraph6'>Make your copy easy to scan. People reading on the web don’t want to read huge chunks of content.</p>
              <p className='Blog__Paragraph7 Blog__Content__Text'>There are overlaps between the two, for sure. But while sales copywriting is often about convincing a customer to do something, UX copywriting is about helping them do something they’re already trying to do. You don’t have to sell them on the goal, just help them achieve it.</p>
              <div className='Blog__Img'>
                <img src={BlogImg1} alt='BlogImg1' className='Blog__Img1'></img>
                <p className='Blog__Img1__Desc'>illustration by Camille Pagni</p>
              </div>
              <p className='Blog__Paragraph8 Blog__Content__Text'>Make your copy easy for visitors to scan. That means keeping paragraphs short (2-4 sentences is a good rule of thumb), using plenty of headlines, adding bulleted lists where they make sense, and even using bold and italic text (sparingly) to highlight the most important parts of the content.</p> */}
              <div className='Blog__Body__Tags'>
                <span className='Blog__Body__Tags__Name'>Tags</span>
                <ul className='Blog__Body__Tags__List'>
                  <li className='Blog__Body__Tags__Item'>#{title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').replace(/\s/g, '').toLowerCase()} </li>
                  <li className='Blog__Body__Tags__Item'>#{lab}</li>
                  <li className='Blog__Body__Tags__Item'>#{post?.title.slice(0,10).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').replace(/\s/g, '').toLowerCase()}</li>
                </ul>
              </div>
              <div className='Blog__Line__Pos2 Blog__Line'></div>
            </div>
            <div className='Blog__Content__Footer'>
              <div className='Blog__News__Title'>Tin mới nhất</div>
              <div className='Blog__News__List'>
                {
                  postsListTitle?.map((pos, index) => index < 3 && (
                    <span key={index} className='Blog__News__Item'>
                      <img className='Blog__News__Img' src={pos.image} alt='BlogImg2'></img>
                      <p className='Blog__News__Desc'>{pos.title}</p>
                      {
                        pos.label[title].map((p, index) => (
                          <button key={index} className='Blog__News__Button'>{p}</button>
                        ))
                      }
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
          <div className='Blog__Side'>
            <div className='Blog__About'>
              <div className='Blog__About__Title'>
                <span className='Blog__About__Icon'><FontAwesomeIcon icon={solid('spinner')}/></span>
                <p className='Blog__About__Name'>Khoa Khoa học và Kỹ thuật Thông tin - UIT</p>
              </div>
              <div className='Blog__About__Desc'>
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.”
                <br></br>
                <br></br>
                <br></br>
                Kristin Watson  /  CEO, Docker
              </div>
            </div>
            <div className='Blog__Topic'>
              <div className='Blog__Topic__Title'>Cùng chủ đề</div>
              <ul className='Blog__Topic__List'>
                {
                  postsListLabel?.map((pos, index) => index < 3 && (
                    <li className='Blog__Topic__Item'>
                      <img className='Blog__Topic__Img' src={pos.image} alt='BlogImg2'></img>
                      <p className='Blog__Topic__Desc'>{pos.title}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className='Blog__Tags'>
              <div className='Blog__Tags__Title'>Tags</div>
              <div className='Blog__Tags__List'>
                  <button className='Blog__Tags__Button'>
                    <span className='Blog__Tags__Text'>#{title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').replace(/\s/g, '').toLowerCase()}</span>
                  </button>
                  <button className='Blog__Tags__Button'>
                    <span className='Blog__Tags__Text'>#{lab}</span>
                  </button>
                  <button className='Blog__Tags__Button'>
                    <span className='Blog__Tags__Text'>#{post?.title.slice(0,10).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').replace(/\s/g, '').toLowerCase()}</span>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog