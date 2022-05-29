import React, { useState } from 'react'
import './AccountManagement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';

function AccountManagement() {
  const [showUserName, setShowUserName] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showEmail, setShowEmail] = useState(false)

  return (
    <>
      <div className="AccManage__header">
        <div className='AccManage__header-heading'>Tài khoản</div>
        <div className='AccManage__header-edit'>Chỉnh sửa</div>
      </div>
      <div className='AccManage__container'>
        <div className="AccManage__container-form">
          <div className="AccManage__container-form-row">
            <div className='AccManage__container-form-user-label'>Tên đăng nhập</div>
            <input type="text" className='AccManage__container-form-input'  placeholder='admin.ise'/> 
            <div className='AccManage__container-form-edit'>    
              <FontAwesomeIcon className='AccManage__container-form-edit-icon' icon={solid('edit')} onClick={() => {setShowUserName(true)}}/>
            </div>
          </div>

          {/* Change username form */}
          {
            showUserName && (
            <div className="AccManage__form-change">
              <div className="AccManage__form-change-header">
                <div className="AccManage__form-change-heading">Đổi tên đăng nhập</div>
                <div className="AccManage__form-change-close">
                  <FontAwesomeIcon className='AccManage__form-change-close-icon' icon={solid ('times-circle')} onClick={() => {setShowUserName(false)}}/>
                </div>
              </div>
              <div className="AccManage__form-change-body">
                <div className="AccManage__form-change-section">
                  <div className="AccManage__form-change-section-row">
                    <div className="AccManage__form-change-section-row-label">Tên đăng nhập hiện tại</div>
                    <input className="AccManage__form-change-section-row-input" placeholder='************'/>
                  </div>

                  <div className="AccManage__form-change-section-row">
                    <div className="AccManage__form-change-section-row-label">Tên đăng nhập mới</div>
                    <input className="AccManage__form-change-section-row-input" placeholder='************'/>
                  </div>

                  <div className="AccManage__form-change-section-row">
                    <div className="AccManage__form-change-section-row-label">Nhập lại tên đăng nhập</div>
                    <input className="AccManage__form-change-section-row-input" placeholder='************'/>
                  </div>

                  <div className="AccManage__form-change-section-function">
                    <button className="AccManage__form-change-section-btn" onClick={() => {setShowUserName(false)}}>Hủy</button>
                    <button className="AccManage__form-change-section-btn AccManage__form-change-section--color">Lưu thay đổi</button>
                  </div>
                </div>
              </div>
            </div>
            )
          }
        </div>

        <div className="AccManage__container-form">
          <div className="AccManage__container-form-row">
            <div className='AccManage__container-form-user-label'>Mật khẩu</div>
            <input type="password" className='AccManage__container-form-input' placeholder='***************'/> 
            <div className='AccManage__container-form-edit'>    
              <FontAwesomeIcon className='AccManage__container-form-edit-icon' icon={solid('edit')} onClick={() => {setShowPassword(true)}} />
            </div>
          </div>

          {/* Change password form */}
          {
            showPassword && (
          <div className="AccManage__form-change">
            <div className="AccManage__form-change-header">
              <div className="AccManage__form-change-heading">Đổi mật khẩu</div>
              <div className="AccManage__form-change-close">
                <FontAwesomeIcon className='AccManage__form-change-close-icon' icon={solid ('times-circle')} onClick={() => {setShowPassword(false)}} />
              </div>
            </div>
            <div className="AccManage__form-change-body">
              <div className="AccManage__form-change-section">
                <div className="AccManage__form-change-section-row">
                  <div className="AccManage__form-change-section-row-label">Mật khẩu hiện tại</div>
                  <input className="AccManage__form-change-section-row-input" placeholder='************'/>
                </div>

                <div className="AccManage__form-change-section-row">
                  <div className="AccManage__form-change-section-row-label">Mật khẩu mới</div>
                  <input className="AccManage__form-change-section-row-input" placeholder='************'/>
                </div>

                <div className="AccManage__form-change-section-row">
                  <div className="AccManage__form-change-section-row-label">Nhập lại mật khẩu</div>
                  <input className="AccManage__form-change-section-row-input" placeholder='************'/>
                </div>

                <div className="AccManage__form-change-section-function">
                  <button className="AccManage__form-change-section-btn" onClick={() => {setShowPassword(false)}}>Hủy</button>
                  <button className="AccManage__form-change-section-btn AccManage__form-change-section--color">Lưu thay đổi</button>
                </div>
              </div>
            </div>
          </div>
            )
          }
        </div>

        <div className="AccManage__container-form">
          <div className="AccManage__container-form-row">
            <div className='AccManage__container-form-user-label'>Email</div>
            <input type="email" className='AccManage__container-form-input' placeholder='bch.khkttt.uit@gmail.com'/>
            <div className='AccManage__container-form-edit'>    
              <FontAwesomeIcon className='AccManage__container-form-edit-icon' icon={solid('edit')} onClick={() => {setShowEmail(true)}}/>
            </div>
          </div>

          {/* Change email form */}
          {
            showEmail && (
          <div className="AccManage__form-change">
            <div className="AccManage__form-change-header">
              <div className="AccManage__form-change-heading">Đổi email</div>
              <div className="AccManage__form-change-close">
                <FontAwesomeIcon className='AccManage__form-change-close-icon' icon={solid ('times-circle')} onClick={() => {setShowEmail(false)}}/>
              </div>
            </div>
            <div className="AccManage__form-change-body">
              <div className="AccManage__form-change-section">
                <div className="AccManage__form-change-section-row">
                  <div className="AccManage__form-change-section-row-label">Email hiện tại</div>
                  <input className="AccManage__form-change-section-row-input" placeholder='************'/>
                </div>

                <div className="AccManage__form-change-section-row">
                  <div className="AccManage__form-change-section-row-label">Email mới</div>
                  <input className="AccManage__form-change-section-row-input" placeholder='************'/>
                </div>

                <div className="AccManage__form-change-section-row">
                  <div className="AccManage__form-change-section-row-label">Nhập lại email</div>
                  <input className="AccManage__form-change-section-row-input" placeholder='************'/>
                </div>

                <div className="AccManage__form-change-section-function">
                  <button className="AccManage__form-change-section-btn" onClick={() => {setShowEmail(false)}}>Hủy</button>
                  <button className="AccManage__form-change-section-btn AccManage__form-change-section--color">Lưu thay đổi</button>
                </div>
              </div>
            </div>
          </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default AccountManagement