import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  }
}, { timestamp: true, collection: 'users' })

export const UserModel = mongoose.model('User', schema)