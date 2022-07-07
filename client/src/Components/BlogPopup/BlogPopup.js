import React, { useId, useState, useEffect } from 'react';
import './BlogPopup.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Link } from 'react-router-dom';
import PostApi from '../../Apis/PostApi';
import { uploadFile, deleteFile } from '../../firebase/util'

function BlogPopup({ type }) {
  const [thumbnail, setThumbnail] = useState();
  const [thumbnailUrl, setThumbnailUrl] = useState();

  const id = useId();

  const labelList = [
    'Đoàn - Hội KH&KTTT',
    'Cơ cấu nhân sự',
    'Danh hiệu SV5T - TNTT',
    'Bản tin Đoàn - Hội',
    'Tin công nghệ',
  ];

  const handleClickLabel = (e) => {
    const activeLabel = document.querySelector('.b-popup__label-active');

    if (activeLabel !== null) activeLabel.classList.remove('b-popup__label-active');

    e.classList.add('b-popup__label-active');
  };

  const handleCreatePost = async () => {
    const formData = new FormData();
    await formData.append('file', thumbnail); // thumbnail là state chứa file ảnh cần upload

    PostApi.uploadImageToFirebase({
      file: formData,
    }).then((res) => {
      console.log(res);
    });
  };

  // useEffect(() => {
  //   console.log(thumbnail);
  //   const storageRef = firebase.storage().ref(`${thumbnail.imageData.name}`).put(thumbnail.imageData);
  //   storageRef.on(
  //     `state_changed`,
  //     (snapshot) => {
  //       console.log(snapshot);
  //     },
  //     (error) => {
  //       console.log(error.message);
  //     },
  //     () => {
  //       storageRef.snapshot.ref.getDownloadURL().then((url) => {
  //         console.log(url);
  //       });
  //     },
  //   );
  // }, []);

  return (
    <>
      {type === 'create' ? (
        <div className="b-popup">
          <h3>Thêm bài đăng</h3>
          <label htmlFor="title">
            Tiêu đề<span style={{ color: 'red' }}>*</span>
          </label>
          <br />
          <input id="title" type="text" placeholder="Nhập tiêu đề..." />
          <br />
          <label htmlFor="thumbnail">Thumbnail</label>
          <br />
          <input id="thumbnail" type="file" title="Thêm ảnh" onChange={(e) => setThumbnail(e.target.files[0])} />
          <br />
          <label>
            Chọn chủ đề<span style={{ color: 'red' }}>*</span>
          </label>
          <br />
          <div className="b-popup__label-wrap">
            {labelList.map((label, index) => (
              <div key={index} className="b-popup__label" value={label} onClick={(e) => handleClickLabel(e.target)}>
                {label}
              </div>
            ))}
          </div>
          <label>Nội dung:</label>
          <br />
          <CKEditor
            editor={ClassicEditor}
            config = {
              {
                // plugins: [CKFinder],
                ckfinder: {
                  uploadUrl: 'http://localhost:5000/posts/uploads'
                }
              }
            }

            onChange = {(event, editor) => {
              const data = editor.getData();
              console.log(data)
            }}

            // editor={ ClassicEditor }
            //         data="<p>Hello from CKEditor 5!</p>"
            //         onInit={editor => {
            //           editor.plugins.get("FileRepository").createUploadAdapter = loader => {
            //             return new MyUploadAdapter(loader);
            //           };
            //         }}
            //         onChange={ ( event, editor ) => {
            //             const data = editor.getData();
            //             console.log( { event, editor, data } );
            //         } }
            //         onBlur={ ( event, editor ) => {
            //             console.log( 'Blur.', editor );
            //         } }
            //         onFocus={ ( event, editor ) => {
            //             console.log( 'Focus.', editor );
            //         } }
          />
          <p>Xem trước bài đăng</p>
          <div className="b-popup__button">
            <button type="button" onClick={handleCreatePost}>
              Đăng bài
            </button>
            <Link to="/">Hủy</Link>
          </div>
        </div>
      ) : (
        <div className="b-popup">
          <h3>Cập nhật bài đăng</h3>
          <label>
            Tiêu đề<span style={{ color: 'red' }}>*</span>
          </label>
          <br />
          <input type="text" placeholder="Nhập tiêu đề..." />
          <br />
          <label>Thumbnail</label>
          <br />
          <input type="file" title="Thêm ảnh" />
          <br />
          <label>
            Chọn chủ đề<span style={{ color: 'red' }}>*</span>
          </label>
          <br />
          <div className="b-popup__label-wrap">
            {labelList.map((label, index) => (
              <div key={index} className="b-popup__label" value={label} onClick={(e) => handleClickLabel(e.target)}>
                {label}
              </div>
            ))}
          </div>
          <label>Nội dung:</label>
          <br />
          <CKEditor
            editor={ClassicEditor}
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
            <Link to="/">Hủy</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogPopup;
