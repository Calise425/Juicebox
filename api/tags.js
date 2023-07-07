const tagsRouter = require('express').Router();
const { getAllTags, getPostsByTagName } = require('../db');

tagsRouter.get('/', async (req, res) => {
  const tags = await getAllTags();

  res.send({
    "tags": tags
  })
})

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
  const { tagName } = req.params;
  
  try {
    const allPosts = await getPostsByTagName(tagName);
    const posts = allPosts.filter(post => {
      return post.active || (req.user && post.author.id === req.user.id);
    });
    res.send({posts: posts})
  } catch ({ name, message }) {
    next({name, message})
  }
});

module.exports = tagsRouter;