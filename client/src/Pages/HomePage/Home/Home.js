import React from 'react'
import './Home.css'
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import CoverHomeImage from '../../../Assets/Images/cover-home.png'
import CarouselLabel from '../../../Components/CarouselLabel/CarouselLabel';
import HomeImage1 from '../../../Assets/Images/home-image-1.png'
import ViewMore from '../../../Components/ViewMore/ViewMore';
import NewsItem from '../../../Components/NewsItem/NewsItem';
import NewsItemImg from '../../../Assets/Images/news-item.png'
import VideoDoanHoi from '../../../Assets/Videos/video-doan-hoi.mp4'
import LikeAndShare from '../../../Components/SocialPlugin/LikeAndShare';
import { FacebookProvider, Like, Group, LikeLayout, LikeAction, Page, Share, ShareButton, EmbeddedPost, Login, Comments, Feed } from 'react-facebook';


function Home() {
  const titleList = [
    {
      title: "GIỚI THIỆU"
    },
    {
      title: "HOẠT ĐỘNG"
    },
    {
      title: "TIN TỨC"
    },
    {
      title: "HỖ TRỢ"
    },
    {
      title: "HỌC TẬP"
    },
  ]

  const newsList = [
    {
      image: NewsItemImg,
      title: "The Gorgeous Statues of Thailand",
      label: "Bản tin Đoàn - Hội",
      date: "01/05/2022"
    },
    {
      image: NewsItemImg,
      title: "The Gorgeous Statues of Thailand",
      label: "Tin công nghệ"
    },
    {
      image: NewsItemImg,
      title: "The Gorgeous Statues of Thailand",
      label: "HĐ sắp diễn ra"
    },
    {
      image: NewsItemImg,
      title: "The Gorgeous Statues of Thailand",
      label: "Nghiên cứu khoa học"
    }
  ]

  return (
    <div className='home'>
      <Carousel className='home__carousel'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={CoverHomeImage}
            alt='First slide'
          />
          <Carousel.Caption>
            <CarouselLabel
              label='Bản tin Đoàn - Hội'
              title='Đội hình thường trực Vị Xuân - Cảm ơn... vì đã đồng hành!'
              date='01/05/2022'
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={CoverHomeImage}
            alt='Second slide'
          />

          <Carousel.Caption>
            <CarouselLabel
              label='Bản tin Đoàn - Hội'
              title='Đội hình thường trực Vị Xuân - Cảm ơn... vì đã đồng hành!'
              date='01/05/2022'
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={CoverHomeImage}
            alt='Third slide'
          />

          <Carousel.Caption>
            <CarouselLabel
              label='Bản tin Đoàn - Hội'
              title='Đội hình thường trực Vị Xuân - Cảm ơn... vì đã đồng hành!'
              date='01/05/2022'
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
        <Share href="https://www.facebook.com/UIT.ISE/posts/2148508611981543">
          {({ handleClick, loading }) => (
            <button type="button" disabled={loading} onClick={handleClick}>Share</button>
          )}
        </Share>
        <Comments href="https://www.facebook.com/UIT.ISE/posts/2148508611981543" />
        {/* <EmbeddedPost href="https://www.facebook.com/UIT.ISE/posts/2148508611981543" width="500" /> */}
        <Feed link="https://www.facebook.com/UIT.ISE/posts/2148508611981543">
          {({ handleClick }) => (
            <button type="button" onClick={handleClick}>Share on Feed</button>
          )}
        </Feed>
        <Group
          href="https://www.facebook.com/groups/375934682909754"
          width="300"
          showSocialContext={true}
          showMetaData={true}
          skin="light"
        />
      </FacebookProvider>

      <Container>
        <Row className="home__container-row1">
          <Col md={5}>
            <img src={HomeImage1} alt='img' />
          </Col>
          <Col md={7}>
            <h4>Xin chào</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              a porta accumsan orci orci, duis ultricies rhoncus.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Tincidunt a porta
              accumsan orci orci, duis ultricies rhoncus.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Tincidunt a porta accumsan orci
              orci, duis ultricies rhoncus.
            </p>
          </Col>
        </Row>
      </Container>

      <ViewMore 
        title="Website Đoàn - Hội ISE có gì?"
        subTitle="Khám phá"
      />

      {
        titleList.map((item, index) => (
          <NewsItem
            title={item.title}
            index={index}
            newsList={newsList}
          />
        ))
      }

      <video width="80%" controls >
        <source src={VideoDoanHoi} type="video/mp4" />
      </video>
    </div>
  );
}

export default Home