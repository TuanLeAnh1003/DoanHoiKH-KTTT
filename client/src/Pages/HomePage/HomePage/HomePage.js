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
          <Route path="/activities" element={<Activities />}/>
          <Route path="/activities/activity" element={<Activity />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
