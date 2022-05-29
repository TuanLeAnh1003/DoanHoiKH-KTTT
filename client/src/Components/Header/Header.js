import React, { useState } from "react";
import './Header.css'
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Row,
  Form,
  FormControl,
  Button,
  Link,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from '../../Assets/Images/logo.png'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  const [clickSearch, setClickSearch] = useState(false)
 
  return (
    <div className="header">
      <Container className="header__top">
        <div className="header__top-wrap">
          <div className="header__top-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__top-login">Đăng nhập</div>
        </div>
      </Container>
      <Navbar collapseOnSelect expand='lg' variant='dark' sticky="top" className="header__navbar">
        <Container style={{maxWidth: '1090px'}}>
          <Navbar.Brand href='/'>
            <FontAwesomeIcon icon={solid("house")} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <NavDropdown title='GIỚI THIỆU' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='gioi-thieu'>GIỚI THIỆU</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='doan-hoi'>Đoàn - Hội KH&KTTT</NavDropdown.Item>
                <NavDropdown.Item href='co-cau'>Cơ cấu nhân sự</NavDropdown.Item>
                <NavDropdown.Item href='lien-he'>Thông tin liên hệ</NavDropdown.Item>
                <NavDropdown.Item href='danh-hieu'>Danh hiệu SV5T - TNTT</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='HOẠT ĐỘNG' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='hoat-dong'>HOẠT ĐỘNG</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='ban-tin'>Bản tin Đoàn - Hội</NavDropdown.Item>
                <NavDropdown.Item href='dang-dien-ra'>Hoạt động đang diễn ra</NavDropdown.Item>
                <NavDropdown.Item href='sap-dien-ra'>Hoạt động sắp diễn ra</NavDropdown.Item>
                <NavDropdown.Item href='cac-cuoc-thi'>Các cuộc thi của Đoàn Thanh niên</NavDropdown.Item>
                <NavDropdown.Item href='tai-uit'>Hoạt động tại UIT</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='TIN TỨC' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='tin-tuc'>TIN TỨC</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='thong-bao'>Thông báo</NavDropdown.Item>
                <NavDropdown.Item href='tin-cong-nghe'>Tin công nghệ</NavDropdown.Item>
                <NavDropdown.Item href='sinh-vien-tieu-bieu'>Sinh viên tiêu biểu</NavDropdown.Item>
                <NavDropdown.Item href='cau-chuyen-dep'>Những câu chuyện đẹp tại ISE</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='HỖ TRỢ' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='ho-tro'>HỖ TRỢ</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='quy-trinh'>Quy trình - văn bản</NavDropdown.Item>
                <NavDropdown.Item href='hoc-bong'>Học bổng</NavDropdown.Item>
                <NavDropdown.Item href='viec-lam'>Việc làm - Thực tập</NavDropdown.Item>
                <NavDropdown.Item href='khac'>Khác</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='HỌC TẬP' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='hoc-tap'>HỌC TẬP</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='cuoc-thi'>Cuộc thi học thuật</NavDropdown.Item>
                <NavDropdown.Item href='tai-lieu'>Kho tài liệu</NavDropdown.Item>
                <NavDropdown.Item href='lien-he'>Thông tin liên hệ</NavDropdown.Item>
                <NavDropdown.Item href='nghien-cuu'>Nghiên cứu khoa học cùng ISE</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {
                clickSearch === false ? (
                  <FontAwesomeIcon className="header__navbar-search" icon={solid("search")} onClick={() => setClickSearch(true)} />
                ) : (
                  <div className="header__navbar-search-wrap">
                    <input type="text" />
                    <FontAwesomeIcon className="header__navbar-search" icon={solid("search")} onClick={() => setClickSearch(true)} />
                  </div>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
