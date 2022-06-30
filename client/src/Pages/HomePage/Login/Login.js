import React, { useState, useEffect } from 'react'
import './Login.css'
import "bootstrap/dist/css/bootstrap.css";
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserApi from '../../../Apis/UserApi';
import { useDispatch } from 'react-redux'
import { setUser } from '../../../store/actions/userAction';
import firebase, { auth } from '../../../firebase/config'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [isLoginFb, setIsLoginFb] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  const navigate = useNavigate()

  const fbProvider = new firebase.auth.FacebookAuthProvider()
  const dispatch = useDispatch()

  const handleLogin = () => {
    UserApi.login({
      username: username,
      password: password
    })
    .then((res) => {
      console.log(res);
      const cur = {
        userId: res._id,
        image: res.image,
        name: res.username,
        admin: res.admin
      }

      dispatch(setUser(cur))
      localStorage.setItem('userId', res._id)
      localStorage.setItem('image', res.image)
      localStorage.setItem('name', res.username)
      localStorage.setItem('isLogInFb', false)

      if (res.admin)
      {
        localStorage.setItem('role', true)
        navigate('/admin')
      }
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const cur = {
          userId: user._delegate.uid,
          image: user._delegate.photoURL,
          name: user._delegate.displayName
        }

        localStorage.setItem('userId', user._delegate.uid)
        localStorage.setItem('image', user._delegate.photoURL)
        localStorage.setItem('name', user._delegate.displayName)
        localStorage.setItem('isLogInFb', true)

        dispatch(setUser(cur))
        navigate('/')
        window.location.reload();
      }
      else navigate('/login')
    })
  }, [])

  const handleLoginFacebook = () => {
    auth.signInWithPopup(fbProvider)
  }

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
                          <label className="form-label" htmlFor="form3Example3">Tên đăng nhập</label>
                          <input type="email" className="form-control" placeholder='Nhập tên đăng nhập' onChange={e=>setUsername(e.target.value)} />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example4">Mật khẩu</label>
                          <input type="password" className="form-control" placeholder='Nhập mật khẩu' onChange={e => setPassword(e.target.value)} />
                        </div>

                        <div className="d-grid gap-2">
                          <button className="btn btn-custom btn-custom-primary" type="button" onClick={handleLogin}>Đăng nhập</button>
                        </div>

                        <div className="row">
                          <FontAwesomeIcon style={{height: '25px', color: '#0d6efd'}} icon={brands("facebook")} onClick={handleLoginFacebook}/>
                        </div>
                        

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-check d-flex justify-content-center mb-4">
                              <FontAwesomeIcon className="rememberpass" icon={solid("toggle-on")}/>
                              <label className="form-check-label" htmlFor="form2Example33"> Ghi nhớ </label>
                          </div>
                          </div>
                          <div className="col-md-6 mb-4">
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