import React, { useState, useEffect, memo } from "react";
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
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from '../../Assets/Images/logo.png'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import firebase, { auth } from '../../firebase/config'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Header({currentUser, setCurrentUser}) {
  const [clickSearch, setClickSearch] = useState(false)
  const [inputSearch, setInputSearch] = useState()

  const navigate = useNavigate()

  function isEmptyObject(obj){
    return JSON.stringify(obj) === '{}';
  }

  const handleLogout = () => {
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    localStorage.removeItem('image')
    localStorage.removeItem('name')
    localStorage.removeItem('isLogInFb')
    localStorage.removeItem('role')
    firebase.auth().signOut().then(() => {
      console.log("Logout success");
    })
    setCurrentUser({})
  }

  const handleClickSearch = () => {
    console.log(inputSearch);
  }

  return (
    <div className="header">
      <Container className="header__top">
        <div className="header__top-wrap">
          <div className="header__top-logo">
            <Link to='/'>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          {
            isEmptyObject(currentUser) ? (
              <div className="header__top-login" onClick={() => navigate('/login')}>Đăng nhập</div>
            ) : (
              <div style={{display: 'flex'}}>
                <h4>{currentUser?.name}</h4>
                {
                  currentUser?.image ? (
                    <img src={currentUser?.image} alt="img" />
                  ) : (<></>)
                }
                <button type="button" onClick={handleLogout}>Đăng xuất</button>
              </div>
            )
          }
        </div>
      </Container>
      <Navbar collapseOnSelect expand='lg' variant='dark' sticky="top" className="header__navbar">
        <Container style={{maxWidth: '1090px'}}>
          <Link className="header__brand" to='/'>
            <FontAwesomeIcon icon={solid("house")} />
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <NavDropdown title='GIỚI THIỆU' id='collasible-nav-dropdown'>
                <Link className="header__link" to='gioi-thieu'>GIỚI THIỆU</Link>
                <NavDropdown.Divider />
                <Link className="header__link" to='gioi-thieu/doan-hoi'>Đoàn - Hội KH&KTTT</Link>
                <Link className="header__link" to='gioi-thieu/co-cau'>Cơ cấu nhân sự</Link>
                <Link className="header__link" to='gioi-thieu/lien-he'>Thông tin liên hệ</Link>
                <Link className="header__link" to='gioi-thieu/danh-hieu'>Danh hiệu SV5T - TNTT</Link>
              </NavDropdown>
              <NavDropdown title='HOẠT ĐỘNG' id='collasible-nav-dropdown'>
                <Link className="header__link" to='hoat-dong'>HOẠT ĐỘNG</Link>
                <NavDropdown.Divider />
                <Link className="header__link" to='hoat-dong/ban-tin'>Bản tin Đoàn - Hội</Link>
                <Link className="header__link" to='hoat-dong/dang-dien-ra'>Hoạt động đang diễn ra</Link>
                <Link className="header__link" to='hoat-dong/sap-dien-ra'>Hoạt động sắp diễn ra</Link>
                <Link className="header__link" to='hoat-dong/cac-cuoc-thi'>Các cuộc thi của Đoàn Thanh niên</Link>
                <Link className="header__link" to='hoat-dong/tai-uit'>Hoạt động tại UIT</Link>
              </NavDropdown>
              <NavDropdown title='TIN TỨC' id='collasible-nav-dropdown'>
                <Link className="header__link" to='tin-tuc'>TIN TỨC</Link>
                <NavDropdown.Divider />
                <Link className="header__link" to='tin-tuc/thong-bao'>Thông báo</Link>
                <Link className="header__link" to='tin-tuc/tin-cong-nghe'>Tin công nghệ</Link>
                <Link className="header__link" to='tin-tuc/sinh-vien-tieu-bieu'>Sinh viên tiêu biểu</Link>
                <Link className="header__link" to='tin-tuc/cau-chuyen-dep'>Những câu chuyện đẹp tại ISE</Link>
              </NavDropdown>
              <NavDropdown title='HỖ TRỢ' id='collasible-nav-dropdown'>
                <Link className="header__link" to='ho-tro'>HỖ TRỢ</Link>
                <NavDropdown.Divider />
                <Link className="header__link" to='ho-tro/quy-trinh'>Quy trình - văn bản</Link>
                <Link className="header__link" to='ho-tro/hoc-bong'>Học bổng</Link>
                <Link className="header__link" to='ho-tro/viec-lam'>Việc làm - Thực tập</Link>
                <Link className="header__link" to='ho-tro/khac'>Khác</Link>
              </NavDropdown>
              <NavDropdown title='HỌC TẬP' id='collasible-nav-dropdown'>
                <Link className="header__link" to='hoc-tap'>HỌC TẬP</Link>
                <NavDropdown.Divider />
                <Link className="header__link" to='hoc-tap/cuoc-thi'>Cuộc thi học thuật</Link>
                <Link className="header__link" to='hoc-tap/tai-lieu'>Kho tài liệu</Link>
                <Link className="header__link" to='hoc-tap/nghien-cuu'>Nghiên cứu khoa học cùng ISE</Link>
              </NavDropdown>
            </Nav>
            <Nav>
              {
                clickSearch === false ? (
                  <FontAwesomeIcon className="header__navbar-search" icon={solid("search")} onClick={() => setClickSearch(true)} />
                ) : (
                  <div className="header__navbar-search-wrap">
                    <input type="text" onChange={e => setInputSearch(e.target.value)}/>
                    <FontAwesomeIcon className="header__navbar-search" icon={solid("search")} onClick={handleClickSearch} />
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
