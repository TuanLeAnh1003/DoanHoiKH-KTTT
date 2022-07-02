import React from 'react'
import './Contact.css'
import contactImg from '../../../Assets/Images/contact.png'
import BG from '../../../Assets/Images/BG.png'

function Contact() {
  return (
    <div className="contact">
      <div className="contact-first">
        <div className="contact-first-title">
          <span className="contact-first-title-heading">Thông tin liên hệ</span>
          <div className="contact-first-introduction">
            Already use Dlex? Sign in so we can tailor your support experience. 
          </div>
          <div className="contact-first-introduction-2">
          If that’s not possible, we’d still like to hear from you.
          </div>
        </div>
      </div>
      <div className="container contact-second">
        <div className="row">
          <div className="col contact-second-map-contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.0014667443031!2d106.80319824261827!3d10.869755148374221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1655108411050!5m2!1svi!2s" width="600" height="500" ></iframe>
          </div>
          <div className="col contact-second-information-contact">
            <div className="col contact-second-information-contact-title">
              Đoàn - Hội Khoa Khoa học và Kỹ thuật Thông tin
            </div>
            <div className="col contact-second-information-contact-address">
              <div className="col contact-second-information-contact-address-bold">Địa chỉ</div>
              Tầng 10, Khu E, Đại học CNTT, Khu phố 6, Phường Linh Trung, Quận Thủ Đức, TP HCM
              <div className="col contact-second-information-contact-address-bold">Fanpage</div>
              www.facebook.com/UIT.ISE
              <div className="col contact-second-information-contact-address-bold">Email</div>
              bch.khkttt.uit@gmail.com
              <div className="col contact-second-information-contact-address-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum senectus sit nisi, nulla porttitor pulvinar.</div>
              <div className="col contact-second-information-contact-address-bold contact-second-information-contact-address-bold-2">Bí Thư Đoàn Khoa</div>
              Phan Thị Oanh: mssvmssv@gm.uit.edu.vn
              <div className="col contact-second-information-contact-address-bold">Liên Chi Hội Trưởng</div>
              Đặng Lê Thiên Thanh: mssvmssv@gm.uit.edu.vn
            </div>
          </div>
        </div>
      </div>
      <div className="contact-third">
        <div className="line-blues">

        </div>
        <div className="container contact-third-center">
          <div className="row">
            <div className="col-8">
            <div className="contact-third-blues">
          <p>Để lại lời nhắn</p>
        </div>
        <div className="contact-third-form">
          <div className="contact-third-form-inside">
          <div className="mb-3 contact-form-items">
            <label htmlFor="exampleFormControlInput1" className="form-label form-label-contact form-label-contact-margin">Họ và tên:</label>
            <input type="text" className="form-control form-control-to-css" id="exampleFormControlInput1" placeholder="Nhập họ tên" />
          </div>
          <div className="mb-3 contact-form-items">
            <label htmlFor="exampleFormControlInput1" className="form-label form-label-contact">Địa chỉ Email:</label>
            <input type="email" className="form-control form-control-to-css" id="exampleFormControlInput2" placeholder="Nhập email" />
          </div>
          <label htmlFor="exampleFormControlInput1" className="form-label form-label-contact">Chọn chủ đề:</label>
          <div className="mb-3 contact-form-items contact-form-items-checktitle">
            <input type="checkbox" className="btn-check btn-check-to-css" id="btn-check-outlined" autoComplete="off" />
            <label className="btn btn-outline-primary btn-outline-primary-to-css" htmlFor="btn-check-outlined">Adding or removing users</label>

            <input type="checkbox" className="btn-check btn-check-to-css" id="btn-check-outlined" autoComplete="off" />
            <label className="btn btn-outline-primary btn-outline-primary-to-css" htmlFor="btn-check-outlined">Billing and plans</label>

            <input type="checkbox" className="btn-check btn-check-to-css" id="btn-check-outlined" autoComplete="off" />
            <label className="btn btn-outline-primary btn-outline-primary-to-css" htmlFor="btn-check-outlined">Connection Trouble</label><br />

            <input type="checkbox" className="btn-check btn-check-to-css" id="btn-check-outlined" autoComplete="off" />
            <label className="btn btn-outline-primary btn-outline-primary-to-css" htmlFor="btn-check-outlined">Notifications</label>
            <input type="checkbox" className="btn-check btn-check-to-css" id="btn-check-outlined" autoComplete="off" />
            <label className="btn btn-outline-primary btn-outline-primary-to-css" htmlFor="btn-check-outlined">Managing Channels</label>
            <input type="checkbox" className="btn-check btn-check-to-css" id="btn-check-outlined" autoComplete="off" />
            <label className="btn btn-outline-primary btn-outline-primary-to-css" htmlFor="btn-check-outlined">Signing in</label><br />
            <input type="checkbox" className="btn-check btn-check-to-css" id="btn-check-outlined" autoComplete="off" />
            <label className="btn btn-outline-primary btn-outline-primary-to-css" htmlFor="btn-check-outlined">New design feedback</label>
            <input type="checkbox" className="btn-check btn-check-to-css" id="btn-check-outlined" autoComplete="off" />
            <label className="btn btn-outline-primary btn-outline-primary-to-css" htmlFor="btn-check-outlined">Trial of a paid plan</label><br />
          </div>
          <div className="mb-3 contact-form-items">
            <label htmlFor="exampleFormControlTextarea1" className="form-label form-label-contact">Lời nhắn</label>
            <textarea className="form-control form-control-textarea-message" id="exampleFormControlTextarea1" rows="4" placeholder="Nhập lời nhắn"></textarea>
          </div>
          <div className="col-12 btn-message-form-1">
            <button className="btn btn-primary btn-primary-message-form" type="submit">Gửi</button>
          </div>
          </div>
        </div>
            </div>
            <div className="col-4 edit-image">
            <img src={contactImg} alt="IconContact" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-fourth">
        <div className="contact-fourth-box-background">
        <div className="contact-fourth-box">
          <div className="contact-fourth-title">
            Theo dõi Website của chúng tôi
          </div>
          <div className="contact-fourth-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit.
          </div>
          <div className="form-floating mb-3 form-last-input">
            <input type="email" className="form-control form-input-email" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput" className="form-input-email-inside">Nhập địa chỉ Email</label>
            <button className="btn btn-primary btn-send-email-to-company" type="submit">Gửi</button>
          </div>

        </div>
        </div>
       
      </div>
      
    </div>
    
  )
}

export default Contact