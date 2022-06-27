import { PostModel } from '../models/PostModel.js'

export const getPosts = async (req, res) => {
  try {
    // create sample

    // const post = new PostModel({
    //   postId: 'test'
    // })
    // post.save()

    // --------------------------------------------------------

    const posts = await PostModel.find()

    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
}