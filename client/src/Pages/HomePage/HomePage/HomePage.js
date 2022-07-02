import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../../../Components/Header/Header'
import Footer from '../../../Components/Footer/Footer'
import Home from '../Home/Home'
import Activities from '../Activities/Activities';
import Activity from '../Activity/Activity';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import Login from '../Login/Login';
import { useSelector } from 'react-redux'
import NotFound from '../NotFound/NotFound';

function HomePage({ currentUser, setCurrentUser }) {
  return (
    <div>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <div style={{minHeight: '320px'}}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/gioi-thieu" element={<Activities title="Giới thiệu" />}/>
          <Route path="/hoat-dong" element={<Activities title="Hoạt động" />}/>
          <Route path="/tin-tuc" element={<Activities title="Tin tức" />}/>
          <Route path="/ho-tro" element={<Activities title="Hỗ trợ" />}/>
          <Route path="/hoc-tap" element={<Activities title="Học tập" />}/>
          <Route path="/gioi-thieu/lien-he" element={<Contact />}/>
          <Route path="/hoc-tap/lien-he" element={<Contact />}/>
          <Route path="/gioi-thieu/:lab" element={<Activity title="Giới thiệu" />}/>
          <Route path="/hoat-dong/:lab" element={<Activity title="Hoạt động" />}/>
          <Route path="/tin-tuc/:lab" element={<Activity title="Tin tức" />}/>
          <Route path="/ho-tro/:lab" element={<Activity title="Hỗ trợ" />}/>
          <Route path="/hoc-tap/:lab" element={<Activity title="Học tập" />}/>
          <Route path="/gioi-thieu/:lab/:postId" element={<Blog title="Giới thiệu" />}/>
          <Route path="/hoat-dong/:lab/:postId" element={<Blog title="Hoạt động" />}/>
          <Route path="/tin-tuc/:lab/:postId" element={<Blog title="Tin tức" />}/>
          <Route path="/ho-tro/:lab/:postId" element={<Blog title="Hỗ trợ" />}/>
          <Route path="/hoc-tap/:lab/:postId" element={<Blog title="Học tập" />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
