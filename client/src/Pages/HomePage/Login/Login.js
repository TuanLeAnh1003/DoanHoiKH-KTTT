import React from 'react'
import './Login.css'
import "bootstrap/dist/css/bootstrap.css";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Login() {
  return (
    <section className="fullbody">
          <div className="px-4 py-5 px-md-5 text-center text-lg-start">
            <div className="container">
              <div className="row gx-lg-5 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <h4 className="my-5 display-3 fw-bold ls-tight">
                    The best offer <br />
                    <span className="text-primary">for your business</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                    quibusdam tempora at cupiditate quis eum maiores libero
                    veritatis? Dicta facilis sint aliquid ipsum atque?
                  </p>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="card">
                    <div className="card-body py-5 px-md-5">
                      <h2>Đăng nhập</h2>
                      <form>
                        <div className="form-outline mb-4">
                          <label className="form-label" for="form3Example3">Tên đăng nhập</label>
                          <input type="email" className="form-control" placeholder='Nhập tên đăng nhập' />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form3Example4">Mật khẩu</label>
                          <input type="password" className="form-control" placeholder='Nhập mật khẩu' />
                        </div>

                        <div class="d-grid gap-2">
                          <button class="btn btn-custom btn-custom-primary" type="button">Đăng nhập</button>
                        </div>

                        <div class="row">
                          <div class="col-md-6 mb-4">
                            <div className="form-check d-flex justify-content-center mb-4">
                              <FontAwesomeIcon className="rememberpass" icon={solid("toggle-on")}/>
                              <label className="form-check-label" for="form2Example33"> Ghi nhớ </label>
                          </div>
                          </div>
                          <div class="col-md-6 mb-4">
                              <p> <a className='forgotpassword' href='#'> Quên mật khẩu? </a></p>
                          </div>
                        </div>
                        <hr></hr>
                        <div>
                          <p className='notes'> Nếu bạn chưa có tài khoản, hãy liên hệ với tổ chức của bạn.</p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Login