import React from 'react'
import './BlogPopup.css'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Link } from 'react-router-dom'

function BlogPopup({type}) {
  const labelList = ["Đoàn - Hội KH&KTTT", "Cơ cấu nhân sự", "Danh hiệu SV5T - TNTT", "Bản tin Đoàn - Hội", "Tin công nghệ"]

  const handleClickLabel = (e) => {
    const activeLabel = document.querySelector('.b-popup__label-active')
    
    if (activeLabel !== null)
      activeLabel.classList.remove('b-popup__label-active')

    e.classList.add('b-popup__label-active')
  }

  return (
    <>
    {
      type === 'create' ? (
        <div className="b-popup">
          <h3>Thêm bài đăng</h3>
          <label>Tiêu đề<span style={{color: 'red'}}>*</span></label><br />
          <input type="text" placeholder="Nhập tiêu đề..." /><br />
          <label>Thumbnail</label><br />
          <input type="file" title="Thêm ảnh" /><br />
          <label>Chọn chủ đề<span style={{color: 'red'}}>*</span></label><br />
          <div className="b-popup__label-wrap">
            {
              labelList.map((label, index) => (
                <div key={index} className="b-popup__label" value={label} onClick={e => handleClickLabel(e.target)}>{label}</div>
              ))
            }
          </div>
          <label>Nội dung:</label><br />
          <CKEditor 
            editor = { ClassicEditor }
            // config = {
            //   {
            //     ckfinder: {
            //       uploadUrl: 'http://localhost:5000/uploads'
            //     }
            //   }
            // }

            // onChange = {(event, editor) => {
            //   const data = editor.getData();
            //   setContent(data)
            // }}
          />
          <p>Xem trước bài đăng</p>
          <div className="b-popup__button">
            <button>Đăng bài</button>
            <Link to='/'>Hủy</Link>
          </div>
        </div>
      ) : (
        <div className="b-popup">
          <h3>Cập nhật bài đăng</h3>
          <label>Tiêu đề<span style={{color: 'red'}}>*</span></label><br />
          <input type="text" placeholder="Nhập tiêu đề..." /><br />
          <label>Thumbnail</label><br />
          <input type="file" title="Thêm ảnh" /><br />
          <label>Chọn chủ đề<span style={{color: 'red'}}>*</span></label><br />
          <div className="b-popup__label-wrap">
            {
              labelList.map((label, index) => (
                <div key={index} className="b-popup__label" value={label} onClick={e => handleClickLabel(e.target)}>{label}</div>
              ))
            }
          </div>
          <label>Nội dung:</label><br />
          <CKEditor 
            editor = { ClassicEditor }
            // config = {
            //   {
            //     ckfinder: {
            //       uploadUrl: 'http://localhost:5000/uploads'
            //     }
            //   }
            // }

            // onChange = {(event, editor) => {
            //   const data = editor.getData();
            //   setContent(data)
            // }}
          />
          <p>Xem trước bài đăng</p>
          <div className="b-popup__button">
            <button>Cập nhật</button>
            <Link to='/'>Hủy</Link>
          </div>
        </div>
      )
    }
    </>
  )
}

export default BlogPopup