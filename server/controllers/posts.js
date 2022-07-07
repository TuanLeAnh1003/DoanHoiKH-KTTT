import { PostModel } from '../models/PostModel.js'
import { fileURLToPath } from 'url';
import path from 'path'
import fs from 'fs'
import { uploadFile, deleteFile } from '../firebase/util.js'

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

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

export const uploadImageToFirebase = async (req, res) => {
  // if(!req.file) {
  //   return res.status(400).send("Error: No files found")
  // } 

  // const blob = firebase.bucket.file(req.file.originalname)

  // const blobWriter = blob.createWriteStream({
  //     metadata: {
  //         contentType: req.file.mimetype,
  //     }
  // })

  // blobWriter.on('error', (err) => {
  //     console.log(err)
  // })

  // blobWriter.on('finish', () => {
  //   console.log(firebase.bucket.methods.get);
  //   res.status(200).send({blobWriter, firebase})
  // })

  // blobWriter.end(req.file.buffer)
  console.log(req.file);
}

export const uploadImages = async (req, res) => {
  try {
    fs.readFile(req.files.upload.path, function (err, data) {
        // var newPath = __dirname + '/public/images/' + req.files.upload.name;
        // fs.writeFile(newPath, data, function (err) {
        //     if (err) console.log({err: err});
        //     else {
        //         console.log(req.files.upload.originalFilename);
        //     //     imgl = '/images/req.files.upload.originalFilename';
        //     //     let img = "<script>window.parent.CKEDITOR.tools.callFunction('','"+imgl+"','ok');</script>";
        //     //    res.status(201).send(img);
             
        //         let fileName = req.files.upload.name;
        //         let url = '/images/'+fileName;                    
        //         let msg = 'Upload successfully';
        //         let funcNum = req.query.CKEditorFuncNum;
        //         console.log({url,msg,funcNum});
               
        //         res.status(201).send("<script>window.parent.CKEDITOR.tools.callFunction('"+funcNum+"','"+url+"','"+msg+"');</script>");
        //     }
        // });
        console.log(req.files.upload);
        if(!req.files.upload) {
    return res.status(400).send("Error: No files found")
  } 

  const blob = firebase.bucket.file(req.files.upload.originalname)

  const blobWriter = blob.createWriteStream({
      metadata: {
          contentType: req.files.upload.mimetype,
      }
  })

  blobWriter.on('error', (err) => {
      console.log(err)
  })

  blobWriter.on('finish', () => {
    console.log(firebase.bucket.methods.get);
    res.status(200).send({blobWriter, firebase})
  })

  blobWriter.end(req.file.buffer)
    });
   } catch (error) {
       console.log(error.message);
   }
}