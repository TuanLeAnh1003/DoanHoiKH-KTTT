import { PostModel } from '../models/PostModel.js'

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find().sort({updatedAt: 'desc'})

    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
}

export const getPostById = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.postId)

    res.status(200).json(post)
  } catch (err) {
    res.status(500).json(err)
  }
}

export const createPost = async (req, res) => {
  try {
    const post = new PostModel({
      title: req.body.title,
      label: req.body.label,
      content: req.body.content,
      image: req.body.image,
      linkPost: req.body.linkPost
    })

    post.save()

    res.status(200).json(post)
  } catch (err) {
    console.log(err);
  }
}

export const getPostsByTitle = async (req, res) => {
  try {
    const posts = await PostModel.find()
    const postsList = []
    for (let index = 0; index < posts.length; index++) {
      if (Object.keys(posts[index].label).includes(req.body.title)) {
        postsList.push(posts[index])
      }
    }
    res.status(200).json(postsList)

  } catch (err) {
    res.status(500).json(err)
  }
}

export const getPostsByLabel = async (req, res) => {
  try {
    const posts = await PostModel.find()
    const postsList = []
    for (let post of posts) {
      if (Object.values(post.label)[0].includes(req.body.label)) {
        postsList.push(post)
      }
    }

    res.status(200).json(postsList)
  } catch (err) {
    res.status(500).json(err)
  }
}