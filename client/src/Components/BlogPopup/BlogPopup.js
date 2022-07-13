import React, { useId, useState, useEffect, useMemo } from 'react';
import './BlogPopup.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Link, useNavigate } from 'react-router-dom';
import PostApi from '../../Apis/PostApi';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from "sweetalert2";

function BlogPopup({ type, setType, updatePost, setUpdatePost }) {
  const [thumbnail, setThumbnail] = useState();
  const [title, setTitle] = useState();
  const [subHeader, setSubHeader] = useState();
  const [labelSelected, setLabelSelected] = useState([])
  const [linkPost, setLinkPost] = useState()
  const [content, setContent] = useState()

  const navigate = useNavigate()
  const randomId = useId();

  const labelList = [
    'Đoàn - Hội KH&KTTT', 'Cơ cấu nhân sự', 'Danh hiệu SV5T - TNTT',
    'Bản tin Đoàn - Hội',"Hoạt động đang diễn ra", "Hoạt động sắp diễn ra", "Các cuộc thi của Đoàn Thanh niên", "Hoạt động tại UIT",
    "Thông báo", "Tin công nghệ", "Sinh viên tiêu biểu", "Những câu chuyện đẹp tại ISE",
    "Quy trình - văn bản", "Học bổng", "Việc làm - Thực tập", "Khác",
    "Cuộc thi học thuật", "Kho tài liệu", "Nghiên cứu khoa học cùng ISE"
  ];

  const handleClickLabel = (e) => {
    if(labelSelected.includes(e.target.getAttribute('value'))) {
      e.target.classList.remove('b-popup__label-active');

      const temp = labelSelected.filter((label, index) => {
        return label !== e.target.getAttribute('value')
      })

      setLabelSelected(temp)
    } else {
      e.target.classList.add('b-popup__label-active');

      const temp = labelSelected

      temp.push(e.target.getAttribute('value'))

      setLabelSelected(temp)
    }
  };

  const handleLabelList = (list) => {
    let ojectTemp = {
      'Giới thiệu': [],
      'Hoạt động': [],
      'Tin tức': [],
      'Hỗ trợ': [],
      'Học tập': [],
    }
    const arrayTemp = ['Giới thiệu', 'Hoạt động', 'Tin tức', 'Hỗ trợ', 'Học tập']

    const list1 = ["Đoàn - Hội KH&KTTT", "Cơ cấu nhân sự", "Danh hiệu SV5T - TNTT"]
    const list2 = ["Bản tin Đoàn - Hội", "Hoạt động đang diễn ra", "Hoạt động sắp diễn ra", "Các cuộc thi của Đoàn Thanh niên", "Hoạt động tại UIT"]
    const list3 = ["Thông báo", "Tin công nghệ", "Sinh viên tiêu biểu", "Những câu chuyện đẹp tại ISE"]
    const list4 = ["Quy trình - văn bản", "Học bổng", "Việc làm - Thực tập", "Khác"]
    const list5 = ["Cuộc thi học thuật", "Kho tài liệu", "Nghiên cứu khoa học cùng ISE"]

    for (let label of list) {
      if (list1.includes(label)) {
        ojectTemp['Giới thiệu'].push(label)
      }
      if (list2.includes(label)) {
        ojectTemp['Hoạt động'].push(label)
      }
      if (list3.includes(label)) {
        ojectTemp['Tin tức'].push(label)
      }
      if (list4.includes(label)) {
        ojectTemp['Hỗ trợ'].push(label)
      }
      if (list5.includes(label)) {
        ojectTemp['Học tập'].push(label)
      }
    }

    for (let label of arrayTemp) {
      if (ojectTemp[label].length === 0) {
        delete ojectTemp[label]
      }
    }

    return ojectTemp;
  }

  const handleCharacter = (string) => {
    while (string.indexOf('&amp;') !== -1) {
      string = string.slice(0, string.indexOf('&amp;') + 1) + string.slice(string.indexOf('&amp;') + 5, string.length)
    }
    return string;
  }

  const handleCreatePost = async () => {
    let thumbnailUrl = ''
      const formData = new FormData();
      await formData.append('image', thumbnail);
      await PostApi.uploadImageToFirebase({
        image: formData,
      }).then((res) => {
        thumbnailUrl = res.url;
        console.log(res.url);
      });

    const objectLabel = await handleLabelList(labelSelected)

    await PostApi.createPost({
      title: title,
      subHeader: subHeader,
      image: thumbnailUrl,
      label: objectLabel,
      linkPost: linkPost,
      content: content
    })
    .then((res) => {
      console.log(res);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Tạo bài viết thành công!',
        showConfirmButton: false,
        timer: 1500
      });
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    })
  };

  const handleUpdatePost = async () => {
    let thumbnailUrl = ''
    if (thumbnail === updatePost.image) {
      thumbnailUrl = thumbnail
    } else {
      const formData = new FormData();
      await formData.append('image', thumbnail);
      await PostApi.uploadImageToFirebase({
        image: formData,
      }).then((res) => {
        thumbnailUrl = res.url;
        console.log(res.url);
      });
    }

    const objectLabel = await handleLabelList(labelSelected)

    await PostApi.updatePost({
      postId: updatePost._id,
      title: title,
      subHeader: subHeader,
      image: thumbnailUrl,
      label: objectLabel,
      linkPost: linkPost,
      content: content
    }).then((res) => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Cập nhật bài viết thành công!',
        showConfirmButton: false,
        timer: 1500
      });
      setUpdatePost({})
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    if (updatePost !== {}) {
      setTitle(updatePost.title);
      setSubHeader(updatePost.subHeader);
      setLinkPost(updatePost.linkPost);
      setContent(updatePost.content);
      setThumbnail(updatePost.image)

      let arrayLabel = []
      if (updatePost.label !== undefined) {
        for (let labelsList of Object.values(updatePost.label)) {
          for (let label of labelsList) {
            arrayLabel.push(label);
          }
        }
        setLabelSelected(arrayLabel);
      }

      
      const inputLabelList = document.querySelectorAll('.b-popup__label')
      for (let inputLabel of inputLabelList) {
        if (arrayLabel.includes(inputLabel.getAttribute('value'))) {
          inputLabel.classList.add('b-popup__label-active')
        }
      }
    }
  }, [updatePost])

  return (
    <>
      {type === 'create' && (
        <div className="b-popup">
          <FontAwesomeIcon icon={solid("circle-xmark")} className="b-popup__close" onClick={() => setType('')}/>
          <h3>Thêm bài đăng</h3>
          <label htmlFor="title">
            Tiêu đề<span style={{ color: 'red' }}>*</span>
          </label>
          <br />
          <input id="title" type="text" placeholder="Nhập tiêu đề..." onChange={e => setTitle(e.target.value)}/>
          <br />
          <label htmlFor="subHeader">
            Tiêu đề phụ <span style={{ color: 'red' }}>*</span>
          </label>
          <br />
          <input id="subHeader" type="text" placeholder="Nhập tiêu đề phụ..." onChange={e => setSubHeader(e.target.value)}/>
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
              <div key={index} className="b-popup__label" value={label} onClick={(e) => handleClickLabel(e)}>
                {label}
              </div>
            ))}
          </div>
          <br />
          <label htmlFor="link">Link bài viết</label>
          <br />
          <input id="link" type="text" placeholder="Nhập link bài viết nếu có..." onChange={e => setLinkPost(e.target.value)}/>
          <br />
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

            onChange = {async (event, editor) => {
              const data = await editor.getData();
              const dataHandled = handleCharacter(data);
              console.log(dataHandled);
              setContent(dataHandled)
            }}
          />
          <p>Xem trước bài đăng</p>
          <div className="b-popup__button">
            <button type="button" onClick={handleCreatePost}>
              Đăng bài
            </button>
            <Link to="/">Hủy</Link>
          </div>
        </div>
      )}
      {type === 'update' && (
        <div className="b-popup">
          <FontAwesomeIcon icon={solid("circle-xmark")} className="b-popup__close" onClick={() => setType('')}/>
          <h3>Cập nhật bài đăng</h3>
          <label htmlFor="title">
            Tiêu đề<span style={{ color: 'red' }}>*</span>
          </label>
          <br />
          <input id="title" type="text" placeholder={updatePost.title} onChange={e => setTitle(e.target.value)}/>
          <br />
          <label htmlFor="subHeader">
            Tiêu đề phụ <span style={{ color: 'red' }}>*</span>
          </label>
          <br />
          <input id="subHeader" type="text" placeholder={updatePost.subHeader} onChange={e => setSubHeader(e.target.value)}/>
          <br />
          <label htmlFor="thumbnail">Thumbnail</label>
          <br />
          <input id="thumbnail" type="file" title="Thêm ảnh" onChange={(e) => setThumbnail(e.target.files[0])} />
          <br />
          <img style={{ maxWidth: '200px' }} src={updatePost.image} alt="img" />
          <br />
          <label>
            Chọn chủ đề<span style={{ color: 'red' }}>*</span>
          </label>
          <br />
          <div className="b-popup__label-wrap">
            {labelList.map((label, index) => (
              <div key={index} className="b-popup__label" value={label} onClick={(e) => {handleClickLabel(e)}}>
                {label}
              </div>
            ))}
          </div>
          <br />
          <label htmlFor="link">Link bài viết</label>
          <br />
          <input id="link" type="text" placeholder={updatePost.linkPost} onChange={e => setLinkPost(e.target.value)}/>
          <br />
          <label>Nội dung:</label>
          <br />
          <CKEditor
            editor={ClassicEditor}

            data={updatePost.content}
            config = {
              {
                // plugins: [CKFinder],
                ckfinder: {
                  uploadUrl: 'http://localhost:5000/posts/uploads'
                }
              }
            }

            onChange = {async (event, editor) => {
              const data = await editor.getData();
              const dataHandled = handleCharacter(data);
              console.log(dataHandled);
              setContent(dataHandled)
            }}
          />
          <p>Xem trước bài đăng</p>
          <div className="b-popup__button">
            <button type="button" onClick={handleUpdatePost}>
              Cập nhật
            </button>
            <Link to="/">Hủy</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogPopup;
