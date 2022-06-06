import React from 'react'
import './Activities.css'
import "bootstrap/dist/css/bootstrap.css";
import ViewMore from '../../../Components/ViewMore/ViewMore';
import Tabs from "../../../Components/Tabs/Tabs";
import Thumbnail from '../../../Assets/Images/thumbnail.png';
import NewsImage2 from '../../../Assets/Images/Image2.png';
import NewsImage1 from '../../../Assets/Images/Image1.png';
import NewsImage3 from '../../../Assets/Images/Image3.png';


function Activities() {
  return (
    <div>
      <div className='cover'>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-custom">
            <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
            <li className="breadcrumb-item active" aria-current="page">Hoạt động</li>
          </ol>
        </nav>
        <div className='title'>
          <h1>Hoạt động</h1>
          <p>Những thông tin mới nhất về các hoạt động tại khoa KH&KTTT, các thông tin về các chương trình cho sinh viên khoa KH&KTTT.</p>
        </div>
      </div>

      <ViewMore 
        title="Website Đoàn - Hội ISE có gì?"
        subTitle="Khám phá"
      />

      <div className='tabcontent'>
        <Tabs>
          <div label="Tất cả">
            <div className='livenews'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='layoutleft'>
                      <p>All news</p>
                      <h2>Tổng kết Hội nghị Sinh viên KH&KTTT năm 2022</h2>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='layoutright'>
                      <p>Hội nghị sinh viên khoa Khoa học và Kỹ thuật Thông tin được tổ chức vào ngày 19/04/2022 đã kết thúc trong sự thành công và những kết quả tốt đẹp nhất. <br></br><br></br>Không khí của hội trường E đã nóng hơn bao giờ hết bởi sự quan tâm tham gia của tất cả các bạn sinh viên khoa Khoa học và Kỹ thuật Thông tin của chúng ta, cùng với đó, những câu hỏi, thắc mắc của các bạn sinh viên và sự giải đáp nhiệt tình nhưng không kém phần thân thiện, hóm hỉnh của các Thầy Cô đã góp phần khiến cho buổi Hội nghị thêm phần thành công rực rỡ.</p>
                      <a href='#'>Xem thêm </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div label="Bản tin Đoàn - Hội">
            <div className='livenews'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='layoutleft'>
                      <p>bản tin Đoàn - Hội</p>
                      <h2>Tổng kết Hội nghị Sinh viên KH&KTTT năm 2022</h2>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='layoutright'>
                      <p>Hội nghị sinh viên khoa Khoa học và Kỹ thuật Thông tin được tổ chức vào ngày 19/04/2022 đã kết thúc trong sự thành công và những kết quả tốt đẹp nhất. <br></br><br></br>Không khí của hội trường E đã nóng hơn bao giờ hết bởi sự quan tâm tham gia của tất cả các bạn sinh viên khoa Khoa học và Kỹ thuật Thông tin của chúng ta, cùng với đó, những câu hỏi, thắc mắc của các bạn sinh viên và sự giải đáp nhiệt tình nhưng không kém phần thân thiện, hóm hỉnh của các Thầy Cô đã góp phần khiến cho buổi Hội nghị thêm phần thành công rực rỡ.</p>
                      <a href='#'>Xem thêm </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div label="Hoạt động đang diễn ra">
            <div className='livenews'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='layoutleft'>
                      <p>Live - news</p>
                      <h2>Tổng kết Hội nghị Sinh viên KH&KTTT năm 2022</h2>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='layoutright'>
                      <p>Hội nghị sinh viên khoa Khoa học và Kỹ thuật Thông tin được tổ chức vào ngày 19/04/2022 đã kết thúc trong sự thành công và những kết quả tốt đẹp nhất. <br></br><br></br>Không khí của hội trường E đã nóng hơn bao giờ hết bởi sự quan tâm tham gia của tất cả các bạn sinh viên khoa Khoa học và Kỹ thuật Thông tin của chúng ta, cùng với đó, những câu hỏi, thắc mắc của các bạn sinh viên và sự giải đáp nhiệt tình nhưng không kém phần thân thiện, hóm hỉnh của các Thầy Cô đã góp phần khiến cho buổi Hội nghị thêm phần thành công rực rỡ.</p>
                      <a href='#'>Xem thêm </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div label="Hoạt động sắp diễn ra">
            <div className='livenews'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='layoutleft'>
                      <p>Hoạt động sắp diễn ra</p>
                      <h2>Tổng kết Hội nghị Sinh viên KH&KTTT năm 2022</h2>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='layoutright'>
                      <p>Hội nghị sinh viên khoa Khoa học và Kỹ thuật Thông tin được tổ chức vào ngày 19/04/2022 đã kết thúc trong sự thành công và những kết quả tốt đẹp nhất. <br></br><br></br>Không khí của hội trường E đã nóng hơn bao giờ hết bởi sự quan tâm tham gia của tất cả các bạn sinh viên khoa Khoa học và Kỹ thuật Thông tin của chúng ta, cùng với đó, những câu hỏi, thắc mắc của các bạn sinh viên và sự giải đáp nhiệt tình nhưng không kém phần thân thiện, hóm hỉnh của các Thầy Cô đã góp phần khiến cho buổi Hội nghị thêm phần thành công rực rỡ.</p>
                      <a href='#'>Xem thêm </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div label="Các cuộc thi của Đoàn Thanh niên">
            <div className='livenews'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='layoutleft'>
                      <p>Các cuộc thi</p>
                      <h2>Tổng kết Hội nghị Sinh viên KH&KTTT năm 2022</h2>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='layoutright'>
                      <p>Hội nghị sinh viên khoa Khoa học và Kỹ thuật Thông tin được tổ chức vào ngày 19/04/2022 đã kết thúc trong sự thành công và những kết quả tốt đẹp nhất. <br></br><br></br>Không khí của hội trường E đã nóng hơn bao giờ hết bởi sự quan tâm tham gia của tất cả các bạn sinh viên khoa Khoa học và Kỹ thuật Thông tin của chúng ta, cùng với đó, những câu hỏi, thắc mắc của các bạn sinh viên và sự giải đáp nhiệt tình nhưng không kém phần thân thiện, hóm hỉnh của các Thầy Cô đã góp phần khiến cho buổi Hội nghị thêm phần thành công rực rỡ.</p>
                      <a href='#'>Xem thêm </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div label="Hoạt động tại UIT">
            <div className='livenews'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='layoutleft'>
                      <p>Hoạt động UIT</p>
                      <h2>Tổng kết Hội nghị Sinh viên KH&KTTT năm 2022</h2>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='layoutright'>
                      <p>Hội nghị sinh viên khoa Khoa học và Kỹ thuật Thông tin được tổ chức vào ngày 19/04/2022 đã kết thúc trong sự thành công và những kết quả tốt đẹp nhất. <br></br><br></br>Không khí của hội trường E đã nóng hơn bao giờ hết bởi sự quan tâm tham gia của tất cả các bạn sinh viên khoa Khoa học và Kỹ thuật Thông tin của chúng ta, cùng với đó, những câu hỏi, thắc mắc của các bạn sinh viên và sự giải đáp nhiệt tình nhưng không kém phần thân thiện, hóm hỉnh của các Thầy Cô đã góp phần khiến cho buổi Hội nghị thêm phần thành công rực rỡ.</p>
                      <a href='#'>Xem thêm </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>

      <div className='listnew'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <h2>Bài đăng</h2>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Mới nhất
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Từ A - Z</a>
                  <a class="dropdown-item" href="#">Lượt xem nhiều nhất</a>
                </div>
              </div>
              <div className='List_News'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <img className='News_Image' src={NewsImage3} alt='Thumbnail'></img>
                    </div>
                    <div className='col-md-6'>
                      <h4 className='News_Item_Title'>Pathway to the Mediterraneanv</h4>
                      <p className='News_Item_Time'>04/02/2021</p>
                      <p className='News_Item_Description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                    </div>
                  </div>
                </div>

                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <img className='News_Image' src={NewsImage2} alt='Thumbnail'></img>
                    </div>
                    <div className='col-md-6'>
                      <h4 className='News_Item_Title'>Pathway to the Mediterraneanv</h4>
                      <p className='News_Item_Time'>04/02/2021</p>
                      <p className='News_Item_Description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                    </div>
                  </div>
                </div>

                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <img className='News_Image' src={NewsImage1} alt='Thumbnail'></img>
                    </div>
                    <div className='col-md-6'>
                      <h4 className='News_Item_Title'>Pathway to the Mediterraneanv</h4>
                      <p className='News_Item_Time'>04/02/2021</p>
                      <p className='News_Item_Description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                    </div>
                  </div>
                </div>

              </div>  
            </div>
            <div className='col-md-4'>
              <div className='Trending__Topic'>
                <h2>Trending</h2>
                <ul className='Trending__Topic__List'>
                  <li className='Trending__Topic__Item'>
                    <img className='Trending__Topic__Img' src={Thumbnail} alt='Thumbnail'></img>
                    <p className='Trending__Topic__Desc'>Pathway to the Mediterranean</p>
                  </li>
                  <li className='Trending__Topic__Item'>
                    <img className='Trending__Topic__Img' src={Thumbnail} alt='Thumbnail'></img>
                    <p className='Trending__Topic__Desc'>Pathway to the Mediterranean</p>
                  </li>
                  <li className='Trending__Topic__Item'>
                    <img className='Trending__Topic__Img' src={Thumbnail} alt='Thumbnail'></img>
                    <p className='Trending__Topic__Desc'>Pathway to the Mediterranean</p>
                  </li>
                </ul>
                <div className='Trending__Tags'>
                  <h2>Tags</h2>
                  <div className='Trending__Tags__List'>
                      <button className='Trending__Tags__Button'>
                        <span className='Trending__Tags__Text'>Affordable</span>
                      </button>
                      <button className='Trending__Tags__Button'>
                        <span className='Trending__Tags__Text'>Europe</span>
                      </button>
                      <button className='Trending__Tags__Button'>
                        <span className='Trending__Tags__Text'>Most visitted</span>
                      </button>
                      <button className='Trending__Tags__Button'>
                        <span className='Trending__Tags__Text'>Luxury</span>
                      </button>
                      <button className='Trending__Tags__Button'>
                        <span className='Trending__Tags__Text'>Activity</span>
                      </button>
                      <button className='Trending__Tags__Button'>
                        <span className='Trending__Tags__Text'>Swimming</span>
                      </button>
                      <button className='Trending__Tags__Button'>
                        <span className='Trending__Tags__Text'>Best food</span>
                      </button>
                      <button className='Trending__Tags__Button'>
                        <span className='Trending__Tags__Text'>Trending</span>
                      </button>
                      <button className='Trending__Tags__Button'>
                        <span className='Trending__Tags__Text'>Asia</span>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Activities