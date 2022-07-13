import React, { useState, useEffect } from 'react'
import PostApi from '../../../Apis/PostApi'
import Thumbnail from '../../../Assets/Images/thumbnail.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import  "./Search.css"

function Search() {
  const [postsList, setPostsList] = useState()

  useEffect(() => {
    PostApi.getAllPosts()
    .then((res) => {
      setPostsList(res);
    })
  }, [])
  return (
    <div>
        <div className='listnew'>
          <div className='container'>
            <div className="Search__search">
              <div className="Search__search-input-wrap">
                <input type="text" className='Search__search-input' placeholder='Tìm kiếm...'/>
              </div>        
              <div className="Search__search-btn">
                <FontAwesomeIcon className='Search__search-btn-icon' icon={solid('search')} />
              </div>
            </div>
            <p className="Search__quantity">Tìm thấy 400 kết quả</p>

            <div className='row'>
              <div className='col-md-8'>
                <div className='List_News' style={{marginTop: "0%"}}>
                  {
                    postsList?.map((post, index) => index < 3 && (
                      <div key={index} className='container'>
                        <div className='row'>
                          <div className='col-md-6'>
                            <img
                              className='News_Image'
                              src={post.image}
                              alt='Thumbnail'
                            ></img>
                          </div>
                          <div className='col-md-6'>
                            <h4 className='News_Item_Title'>
                              {post.title}
                            </h4>
                            <p className='News_Item_Time'>{new Date(post.createdAt).toLocaleDateString('pt-PT')}</p>
                            <p className='News_Item_Description'>
                              {
                                post.content.length > 10 ? (
                                  `${post.content.substring(0, 10)}...`
                                ) : (
                                  post.content
                                )
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className="Search__pagination">
                  <button className="Search__pagination-left Search__btn">
                   <FontAwesomeIcon className='Search__btn-direction' icon={solid('angle-left')} />                 
                  </button>
                  <a href="" className="Search__pagination-page">2</a>
                  <a href="" className="Search__pagination-page Search__pagination-page--active">3</a>
                  <a href="" className="Search__pagination-page">4</a>
                  <a href="" className="Search__pagination-page">5</a>
                  <button className="Search__pagination-right Search__btn">
                    <FontAwesomeIcon className='Search__btn-direction' icon={solid('angle-right')} />                 
                  </button>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='Trending__Topic'>
                  
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
                        <span className='Trending__Tags__Text'>
                          Most visitted
                        </span>
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

export default Search