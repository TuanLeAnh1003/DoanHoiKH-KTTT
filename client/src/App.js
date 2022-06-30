import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage/HomePage';
import AdminPage from './Pages/AdminPage/AdminPage/AdminPage'
import AdminRoute from './routes/AdminRoute'

import UserApi from './Apis/UserApi';

function App() {
  const [currentUser, setCurrentUser] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    const isLoginFb = localStorage.getItem('isLogInFb')
    const userId = localStorage.getItem('userId')
    const name = localStorage.getItem('name')
    const image = localStorage.getItem('image')

    if (isLoginFb) {
      setCurrentUser({
        userId: userId,
        image: image,
        name: name
      })
    } else {
      UserApi.getUserById({
        userId: userId,
      })
      .then((res) => {
        setCurrentUser(res)
        if (res.admin)
          navigate('/admin')
      })
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<HomePage currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path='admin/*' element={<AdminRoute><AdminPage currentUser={currentUser} setCurrentUser={setCurrentUser}  /></AdminRoute>} />
        {/* <Route path='admin/*' element={<AdminPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;

