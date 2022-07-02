import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  label: {
    type: Object,
    required: true
  },
  content: {
    type: String,
  },
  image: {
    type: String,
  },
  linkPost: {
    type: String,
  }
}, { timestamps: true, collection: 'posts' })

export const PostModel = mongoose.model('Post', schema)