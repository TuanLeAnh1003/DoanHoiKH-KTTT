import React, { useState } from 'react'
import BlogPopup from '../../../Components/BlogPopup/BlogPopup'
import './BlogManagement.css'

function BlogManagement() {
  const [type, setType] = useState('update')

  return (
    <div className="b-mng">
      <p>
        BlogManagement
      </p>
      <BlogPopup type={type} />
    </div>
  )
}

export default BlogManagement