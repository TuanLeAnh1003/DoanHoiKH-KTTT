import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import logo from '../../Assets/Images/logo.png'
import { faYoutube, faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'

function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="footer">
      <Container>
        <Row className="footer__row1">
          <Col className="footer__col1" md={3}>
            <img src={logo} alt="logo" />
            <p>Kênh thông tin Đoàn - Hội khoa KH&KTTT, trường ĐH CNTT - ĐHQG HCM. Website do Đoàn - Hội KH&KTTT thực hiện và quản lý.</p>
            <div className="footer__col1-media">
              <FontAwesomeIcon style={{ color: '#0888BA', fontSize: '20px', marginRight: '10px' }} icon={faYoutube} />
              <FontAwesomeIcon style={{ color: '#0888BA', fontSize: '20px', marginRight: '10px' }} icon={faFacebook} />
              <FontAwesomeIcon style={{ color: '#0888BA', fontSize: '20px', marginRight: '10px' }} icon={faFacebookMessenger} />
            </div>
          </Col>
          <Col style={{paddingLeft: '90px', paddingRight: '0'}} className="footer__col2" md={3}>
            <h5>VỀ CHÚNG TÔI</h5>
            <p><b>Địa chỉ:</b> Tầng 10, Khu E, Đại học CNTT, Khu phố 6, Phường Linh Trung, Quận Thủ Đức, TP HCM</p>
            <p><b>Fanpage:</b> www.facebook.com/UIT.ISE</p>
            <p><b>Email:</b> bch.khkttt.uit@gmail.com</p>
          </Col>
          <Col style={{paddingLeft: '90px'}} className="footer__col2" md={3}>
            <h5>LIÊN HỆ</h5>
            <p><b>Bí thư Đoàn khoa: </b></p>
            <p>Phan Thị Oanh</p>
            <p>19521984@gm.uit.edu.vn</p>
            <p><b>Liên Chi Hội trưởng</b></p>
            <p>Đặng Lê Thiên Thanh</p>
            <p>19520952@gm.uit.edu.vn</p>
          </Col>
          <Col className="footer__col2" md={3}>
            <h5>DANH MỤC NỔI BẬT</h5>
            <Link to='/gioi-thieu'>Giới thiệu</Link><br />
            <Link to='/hoat-dong'>Hoạt động</Link><br />
            <Link to='/tin-tuc'>Tin tức</Link><br />
            <Link to='/ho-tro'>Hỗ trợ</Link><br />
            <Link to='/hoc-tap'>Học tập</Link>
          </Col>
        </Row>
        <Row className="footer__row2">
          <p style={{ fontWeight: '300', fontSize: '14px', padding: '12px 24px'}}>© 2022, Website Đoàn - Hội Khoa Khoa học và Kỹ thuật Thông tin</p>
          <button onClick={handleScrollTop}>
            <FontAwesomeIcon style={{ color: '#fff', fontSize: '20px' }} icon={solid('circle-arrow-up')} />
          </button>
        </Row>
      </Container>
    </div>
  )
}

export default Footer