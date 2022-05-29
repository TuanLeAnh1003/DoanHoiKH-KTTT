import React from 'react'
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import BlogImg1 from '../../../Assets/Images/BlogImg1.jpg'
import BlogImg2 from '../../../Assets/Images/BlogImg2.jfif'

function Blog() {
  return (
    <div>
      <div>
        <div className='Blog__Dir'>
          <ul className='Blog__list'>
            <li className='Blog__DirItem'>Trang chủ</li>
            <li className='Blog__DirItem Blog__DirIcon'><FontAwesomeIcon icon={solid('angle-right')}/></li>
            <li className='Blog__DirItem'>Hoạt động</li>
            <li className='Blog__DirItem Blog__DirIcon'><FontAwesomeIcon icon={solid('angle-right')}/></li>
            <li className='Blog__DirItem'>Bản tin Đoàn - Hội</li>
            <li className='Blog__DirItem Blog__DirIcon'><FontAwesomeIcon icon={solid('angle-right')}/></li>
            <li className='Blog__DirItem'>Tổng kết Hội nghị Sinh viên...</li>
          </ul>
        </div>
        <div className='Blog__Content'>
          <div className='Blog__Content__Header'>
            <div className='Blog__Label'>
              <div className='Blog__Label__Name'>BẢN TIN ĐOÀN - HỘI</div>
            </div>
            <div className='Blog__Title'>Tổng kết Hội nghị Sinh viên KH&KTTT năm 2022</div>
            <div className='Blog__Time'>01/05/2022</div>
            <div className='Blog__Interact'>
              <button className='Blog__Button'>
                <div className='Blog__Button__Icon'><FontAwesomeIcon icon={solid('thumbs-up')}/></div>
                <div className='Blog__Button__Text'>Thích</div>
              </button>
              <button className='Blog__Button'>
                <div className='Blog__Button__Icon'><FontAwesomeIcon icon={solid('share')}/></div>
                <div className='Blog__Button__Text'>Chia sẻ</div>
              </button>
            </div>
            <div className='Blog__Line__Pos1 Blog__Line'></div>
          </div>
          <div className='Blog__Content__Body'>
            <p className='Blog__Paragraph1 Blog__Content__Text'>
                Believe it or not, copywriting is one of the most important content-creation skills a designer can possess. If you think about it, design exists to support and deliver content—not the other way around.' <br></br> <br></br>
                As a designer, content should be the driving force behind many of your decisions, whether you’re creating the content or someone else is. So if you can understand how to write effective copy (and understand the purpose that it serves), you’ll be able to better serve your clients and ultimately create better designs. <br></br> <br></br>
                In this article, we’ll cover some helpful copywriting tips for designers to help you build better experiences.
            </p>
            <p className='Blog__Paragraph2 Blog__Content__Text'>Sales Copywriting vs. UX copywriting</p>
            <p className='Blog__Paragraph3 Blog__Content__Text'>First things first, understand the nature of the copy you’re writing for. There are some subtle differences between sales (or persuasive) copywriting and UX writing.</p>
            <ul className='Blog__Content__List1'>
              <li className='Blog__Paragraph4 Blog__Content__Text'>Why consistent writing makes you a better designer</li>
              <li className='Blog__Paragraph4 Blog__Content__Text'>5 soft skills every product designer should master</li>
              <li className='Blog__Paragraph4 Blog__Content__Text'>The UX Writing Starter-Kit</li>
            </ul>
            <p className='Blog__Paragraph5 Blog__Content__Text'>Sales copywriting is all about getting users to make a purchase or sign up for a product or service. UX copywriting, on the other hand, is all about helping users reach a goal efficiently and effectively.</p>
            <p className='Blog__Paragraph6'>Make your copy easy to scan. People reading on the web don’t want to read huge chunks of content.</p>
            <p className='Blog__Paragraph7 Blog__Content__Text'>There are overlaps between the two, for sure. But while sales copywriting is often about convincing a customer to do something, UX copywriting is about helping them do something they’re already trying to do. You don’t have to sell them on the goal, just help them achieve it.</p>
            <div className='Blog__Img'>
              <img src={BlogImg1} alt='BlogImg1' className='Blog__Img1'></img>
              <p className='Blog__Img1__Desc'>illustration by Camille Pagni</p>
            </div>
            <p className='Blog__Paragraph8 Blog__Content__Text'>Make your copy easy for visitors to scan. That means keeping paragraphs short (2-4 sentences is a good rule of thumb), using plenty of headlines, adding bulleted lists where they make sense, and even using bold and italic text (sparingly) to highlight the most important parts of the content.</p>
            <div className='Blog__Body__Tags'>
              <span className='Blog__Body__Tags__Name'>Tags</span>
              <ul className='Blog__Body__Tags__List'>
                <li className='Blog__Body__Tags__Item'>#hometownchachacha </li>
                <li className='Blog__Body__Tags__Item'>#ShinMinAh</li>
                <li className='Blog__Body__Tags__Item'>#KimSeonHo</li>
                <li className='Blog__Body__Tags__Item'>#PhimHanQuoc</li>
              </ul>
            </div>
            <div className='Blog__Line__Pos2 Blog__Line'></div>
          </div>
          <div className='Blog__Content__Footer'>
            <div className='Blog__News__Title'>Tin mới nhất</div>
            <div className='Blog__News__List'>
              <span className='Blog__News__Item'>
              <img className='Blog__News__Img' src={BlogImg2} alt='BlogImg2'></img>
                <p className='Blog__News__Desc'>Pathway to the Mediterranean</p>
                <button className='Blog__News__Button'>Design</button>
              </span>
              <span className='Blog__News__Item'>
              <img className='Blog__News__Img' src={BlogImg2} alt='BlogImg2'></img>
                <p className='Blog__News__Desc'>Pathway to the Mediterranean</p>
                <button className='Blog__News__Button'>Design</button>
              </span>
              <span className='Blog__News__Item'>
                <img className='Blog__News__Img' src={BlogImg2} alt='BlogImg2'></img>
                <p className='Blog__News__Desc'>Pathway to the Mediterranean</p>
                <button className='Blog__News__Button'>Design</button>
              </span>
            </div>
          </div>
          <div className='Blog__Side'>
            <div className='Blog__About'>
              <div className='Blog__About__Title'>
                <span className='Blog__About__Icon'><FontAwesomeIcon icon={solid('spinner')}/></span>
                <p className='Blog__About__Name'>Khoa Khoa học và Kỹ thuật Thông tin - UIT</p>
              </div>
              <div className='Blog__About__Desc'>
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.”
                <br></br>
                <br></br>
                Kristin Watson  /  CEO, Docker
              </div>
            </div>
            <div className='Blog__Topic'>
              <div className='Blog__Topic__Title'>Cùng chủ đề</div>
              <ul className='Blog__Topic__List'>
                <li className='Blog__Topic__Item'>
                  <img className='Blog__Topic__Img' src={BlogImg2} alt='BlogImg2'></img>
                  <p className='Blog__Topic__Desc'>Pathway to the Mediterranean</p>
                </li>
                <li className='Blog__Topic__Item'>
                  <img className='Blog__Topic__Img' src={BlogImg2} alt='BlogImg2'></img>
                  <p className='Blog__Topic__Desc'>Pathway to the Mediterranean</p>
                </li>
                <li className='Blog__Topic__Item'>
                  <img className='Blog__Topic__Img' src={BlogImg2} alt='BlogImg2'></img>
                  <p className='Blog__Topic__Desc'>Pathway to the Mediterranean</p>
                </li>
              </ul>
            </div>
            <div className='Blog__Tags'>
              <div className='Blog__Tags__Title'>Tags</div>
              <div className='Blog__Tags__List'>
                  <button className='Blog__Tags__Button'>
                    <span className='Blog__Tags__Text'>Affordable</span>
                  </button>
                  <button className='Blog__Tags__Button'>
                    <span className='Blog__Tags__Text'>Europe</span>
                  </button>
                  <button className='Blog__Tags__Button'>
                    <span className='Blog__Tags__Text'>Most visitted</span>
                  </button>
                  <button className='Blog__Tags__Button'>
                    <span className='Blog__Tags__Text'>Luxury</span>
                  </button>
                  <button className='Blog__Tags__Button'>
                    <span className='Blog__Tags__Text'>Activity</span>
                  </button>
                  <button className='Blog__Tags__Button'>
                    <span className='Blog__Tags__Text'>Swimming</span>
                  </button>
                  <button className='Blog__Tags__Button'>
                    <span className='Blog__Tags__Text'>Best food</span>
                  </button>
                  <button className='Blog__Tags__Button'>
                    <span className='Blog__Tags__Text'>Trending</span>
                  </button>
                  <button className='Blog__Tags__Button'>
                    <span className='Blog__Tags__Text'>Asia</span>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog