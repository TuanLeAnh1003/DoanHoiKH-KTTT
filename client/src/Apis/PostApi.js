import axiosInstance from "./axiosInstance";

const getAllPosts = async () => {
  return await axiosInstance.get('/posts');
}

const getPostById = async (data) => {
  return await axiosInstance.get(`/posts/${data.postId}`)
}

const getPostsByTitle = async (data) => {
  return await axiosInstance.post('/posts/getPostsByTitle', data)
}

const getEnoughPostsByTitle = async (data) => {
  return await axiosInstance.post('/posts/getEnoughPostsByTitle', data)
}

const getPostsByLabel = async (data) => {
  return await axiosInstance.post('/posts/getPostsByLabel', data)
}

const uploadImageToFirebase = async (data) => {
  console.log(data.image);
  return await axiosInstance.post('/posts/upload', data.image, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export default {
  getAllPosts,
  getPostById,
  getPostsByTitle,
  getEnoughPostsByTitle,
  getPostsByLabel,
  uploadImageToFirebase
}