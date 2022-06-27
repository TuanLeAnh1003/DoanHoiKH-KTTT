import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  postId: {
    type: String,
    required: true
  },
  title: {
    type: String,
  },
  label: {
    type: Array,
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
}, { timestamp: true, collection: 'posts' })

export const PostModel = mongoose.model('Post', schema)