import axiosInstance from "./axiosInstance";

const login = async (data) => {
  return await axiosInstance.post('/auth/login', data)
}

const getUserById = async (data) => {
  return await axiosInstance.get(`/users/${data.userId}`)
}

export default {
  login,
  getUserById
}