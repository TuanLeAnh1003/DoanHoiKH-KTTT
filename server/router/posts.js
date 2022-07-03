import express from 'express';
import { getPosts, getPostById, createPost, getPostsByTitle, getPostsByLabel, getEnoughPostsByTitle } from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts);

router.get('/:postId', getPostById);

router.post('/', createPost)

router.post('/getPostsByTitle', getPostsByTitle)

router.post('/getEnoughPostsByTitle', getEnoughPostsByTitle)

router.post('/getPostsByLabel', getPostsByLabel)

export default router;