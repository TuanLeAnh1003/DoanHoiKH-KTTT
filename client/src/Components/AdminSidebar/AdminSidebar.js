import React, { useState, useEffect} from 'react'
import './AdminSidebar.css'
import { Link } from 'react-router-dom';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function AdminSidebar({ currentUser }) {
  const [funcActive, setFuncActive] = useState(0)

  const AdminFunc = ['Chung', 'Bài đăng', 'Tài khoản', 'Cài đặt']
  const AdminLink = ['/admin/', '/admin/blog-management', '/admin/account-management', '/admin/setting']

  return (
    <div className="AdminSideBar">
      <div className="AdminSideBar__account">
        <img src={currentUser.image !== 'undefined' ? currentUser.image : 'https://via.placeholder.com/50'} alt="avatar" />
        <div>
          <div>
            <h3><b>{currentUser.name}</b></h3>
            <FontAwesomeIcon icon={solid("circle-check")} />
          </div>
          <button type="button">Thay đổi ảnh đại diện</button>
        </div>
      </div>
      <div className="AdminSideBar__func">
        {
          AdminFunc.map((func, index) => (
            <>
              <Link to={AdminLink[index]} className={index === funcActive ? 'AdminSideBar__func-active' : ''} onClick={() => setFuncActive(index)}>{func}</Link>
              <br />
            </>
          ))
        }
      </div>
      <button type="button">Đăng xuất</button>
    </div>
  )
}

export default AdminSidebar
