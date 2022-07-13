import React, { useState, useEffect, memo } from 'react';
import BlogPopup from '../../../Components/BlogPopup/BlogPopup';
import './BlogManagement.css';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import BlogItem from '../../../Components/BlogItem';
import PostApi from '../../../Apis/PostApi';

function BlogManagement() {
  const [type, setType] = useState('');
  const [postsList, setPostsList] = useState();
  const [updatePost, setUpdatePost] = useState({});

  useEffect(() => {
    PostApi.getAllPosts().then((res) => {
      setPostsList(res);
    });
  }, []);

  const handleClickUpdate = (data) => {
    PostApi.getPostById({
      postId: data
    })
    .then(async (res) => {
      await setUpdatePost(res);
      await setType('update')
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="b-mng">
      <Container style={{ marginTop: '30px' }}>
        <Row className="b-mng__row1">
          <Col>
            <h2 style={{ textAlign: 'left', paddingBottom: '0' }}>Bài đăng</h2>
          </Col>
          <Col style={{ textAlign: 'right' }}>
            <button type="button" onClick={() => setType('create')}>+ Tạo bài đăng mới</button>
          </Col>
        </Row>
        <Row className="b-mng__row2" style={{ textAlign: 'center', paddingRight: '30px' }}>
          <Col xs={8}>Bài viết</Col>
          <Col xs={2}>Ngày đăng</Col>
          <Col xs={2}>Lượt xem</Col>
        </Row>
        <Accordion defaultActiveKey={['0']}>
          {postsList?.map((post, index) => (
            <BlogItem
              postId={post._id}
              title={post.title}
              key={index}
              index={index}
              subHeader={post.subHeader}
              image={post.image}
              label={post.label}
              content={post.content}
              createdAt={post.createdAt}
              linkPost={post.linkPost}
              setType={setType}
              handleClickUpdate= {handleClickUpdate}
            />
          ))}
        </Accordion>
      </Container>
      <BlogPopup type={type !== '' ? type : ''} setType={setType} updatePost={updatePost} setUpdatePost={setUpdatePost}/>
    </div>
  );
}

export default memo(BlogManagement);
