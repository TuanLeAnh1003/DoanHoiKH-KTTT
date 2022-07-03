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

export const getEnoughPostsByTitle = async (req, res) => {
  let labelList = []
  const tempList = []

  switch (req.body.title) {
    case "Giới thiệu":
      labelList = ["Đoàn - Hội KH&KTTT", "Cơ cấu nhân sự", "Danh hiệu SV5T - TNTT"]
      break;
    case "Hoạt động":
      labelList = ["Bản tin Đoàn - Hội", "Hoạt động đang diễn ra", "Hoạt động sắp diễn ra", "Các cuộc thi của Đoàn Thanh niên", "Hoạt động tại UIT"]
      break;
    case "Tin tức":
      labelList = ["Thông báo", "Tin công nghệ", "Sinh viên tiêu biểu", "Những câu chuyện đẹp tại ISE"]
      break;
    case "Hỗ trợ":
      labelList = ["Quy trình - văn bản", "Học bổng", "Việc làm - Thực tập", "Khác"]
      break;
    case "Học tập":
      labelList = ["Cuộc thi học thuật", "Kho tài liệu", "Nghiên cứu khoa học cùng ISE"]
      break;
    default:
      break;
  }

  try {
    const posts = await PostModel.find().sort({updatedAt: 'desc'})
    const postsList = []
    
    for (let label of labelList) {
      for (let post of posts) {
        if (Object.values(post.label)[0].includes(label)) {
          postsList.push(post)
          break;
        }
      }
    }

    res.status(200).json(postsList)

  } catch (err) {
    res.status(500).json(err)
  }
}