import React, { useState, useEffect } from 'react'
import PostApi from '../../../Apis/PostApi'
import Thumbnail from '../../../Assets/Images/thumbnail.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import  "./Search.css"
import parser from 'html-react-parser'
import Pagination from 'react-bootstrap/Pagination';

function Search({ inputSearch, setInputSearch }) {
  const [postsList, setPostsList] = useState()
  const [totalPage, setTotalPage] = useState(1)
  const [page, setPage] = useState(1)

  const productsPerPage = 2

  useEffect(() => {
    PostApi.getPostsSearch({ input: inputSearch })
    .then((res) => {
      console.log(res);
      setPostsList(res);
      setTotalPage(Math.floor(res.length/productsPerPage) + 1)

      setPage(1)
      const listPage = document.querySelectorAll('.page-item')

      listPage[2].classList.add('active')
    })

  }, [inputSearch])

  const handleClickFirst = () => {
    setPage(1)

    const activePage = document.querySelector('.page-item.active')
    if (activePage) {
      activePage.classList.remove('active')
    }

    const listPage = document.querySelectorAll('.page-item')

    listPage[2].classList.add('active')
  }

  const handleClickPrev = () => {
    if (page > 1) {
      const activePage = document.querySelector('.page-item.active')
      if (activePage) {
        const listPage = document.querySelectorAll('.page-item')

        listPage[activePage.childNodes[0].getAttribute('value')].classList.add('active')

        activePage.classList.remove('active')
      }

      setPage(page - 1)
    }
  }

  const handleClickPage = (e) => {
    setPage(e.target.getAttribute('value'))

    const activePage = document.querySelector('.page-item.active')
    if (activePage) {
      activePage.classList.remove('active')
    }

    e.target.parentNode.classList.add('active')
  }

  const handleClickNext = () => {
    const activePage = document.querySelector('.page-item.active')

    console.log(Number(activePage.childNodes[0].getAttribute('value')) + 1);
    if (activePage.childNodes[0].getAttribute('value') < totalPage) {
      const listPage = document.querySelectorAll('.page-item')


      listPage[Number(activePage.childNodes[0].getAttribute('value')) + 2].classList.add('active')
      activePage.classList.remove('active')

      setPage(page + 1)
    }
  }

  const handleClickLast = () => {
    const activePage = document.querySelector('.page-item.active')
    const listPage = document.querySelectorAll('.page-item')

    
    listPage[totalPage + 1].classList.add('active')
    if (activePage) {
      activePage.classList.remove('active')
    }
    setPage(totalPage)
    
  }


  return (
    <div>
        <div className='listnew'>
          <div className='container'>
            <div className="Search__search">
              <div className="Search__search-input-wrap">
                <input type="text" className='Search__search-input' placeholder={inputSearch} onChange={(e) => setInputSearch(e.target.value)}/>
              </div>        
              <div className="Search__search-btn">
                <FontAwesomeIcon className='Search__search-btn-icon' icon={solid('search')}/>
              </div>
            </div>
            <p className="Search__quantity">Tìm thấy {postsList?.length} kết quả</p>

            <div className='row'>
              <div className='col-md-8'>
                <div className='List_News' style={{marginTop: "0%"}}>
                  {
                    postsList?.map((post, index) => index < (page * productsPerPage) && index >= ((page-1)*productsPerPage) && (
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
                                post.subHeader.length > 20 ? (
                                  `${parser(post.subHeader).substring(0, 20)}...`
                                ) : (
                                  parser(post.subHeader)
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
                  <Pagination style={{margin: '0 auto'}}>
                    <Pagination.First onClick={handleClickFirst}/>
                    <Pagination.Prev onClick={handleClickPrev}/>
                    {
                      totalPage !== 0 && Array(totalPage).fill().map((pageNum, index) => (
                        <Pagination.Item value={index+1} onClick={(e) => handleClickPage(e)}>{index + 1}</Pagination.Item>
                      ))
                    }
                    {/* <Pagination.Ellipsis /> */}
                    <Pagination.Next onClick={handleClickNext}/>
                    <Pagination.Last onClick={handleClickLast}/>
                  </Pagination>
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