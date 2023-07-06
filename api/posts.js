const postsRouter = require('express').Router();
const { getAllPosts } = require('../db')

postsRouter.get('/', async (req, res) => {
  const posts = await getAllPosts();

  res.send({
    'posts': posts
  })
})

module.exports = postsRouter;