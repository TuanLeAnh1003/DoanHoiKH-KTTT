import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import posts from './router/posts.js'
import users from './router/users.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.DATABASE_URL

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/posts', posts)
app.use('/users', users)

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to db');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    });
  }).catch((err) => {
    console.log('err', err);
  })

