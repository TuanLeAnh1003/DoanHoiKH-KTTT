import React from 'react'
import Header from '../../../Components/Header/Header'
import { Routes, Route } from 'react-router-dom';
import General from '../General/General';
import AccountManagement from '../AccountManagement/AccountManagement';
import BlogManagement from '../BlogManagement/BlogManagement';
import Setting from '../Setting';
import NotFound from '../../HomePage/NotFound/NotFound';
import { Container, Row, Col } from 'react-bootstrap'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar';

function AdminPage({ currentUser, setCurrentUser}) {
  return (
    <div>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Container>
        <Row>
          <Col sm={3}>
            <AdminSidebar currentUser={currentUser} />
          </Col>
          <Col sm={9}>
            <Routes>
              <Route path='/' element={<General />} exactly />
              <Route path='/account-management' element={<AccountManagement />} />
              <Route path='/blog-management' element={<BlogManagement />} />
              <Route path='/setting' element={<Setting />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AdminPage