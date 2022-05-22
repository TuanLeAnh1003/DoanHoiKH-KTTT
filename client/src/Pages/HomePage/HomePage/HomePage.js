import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from '../../../Components/Header/Header'
import Footer from '../../../Components/Footer/Footer'
import Home from '../Home/Home'

function HomePage() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default HomePage
