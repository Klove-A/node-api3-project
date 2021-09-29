const express = require('express');

const User = require("./users-model");
const Post = require("../posts/posts-model");

const {
  validateUserId,
  validateUser,
  validatePost
} = require("../middleware/middleware");

const router = express.Router();

router.get('/', (req, res, next) => {
  User.get()
    .then(users => {
      res.json(users)
    })
    .catch(next)
});

router.get('/:id', validateUserId, (req, res) => {
  res.json(req.user);
});

router.post('/', validateUser, (req, res, next) => {
  User.insert({ name: req.name })
    .then(newUser => {
      res.status(201).json(newUser)
    })
    .catch(next)
});

router.put('/:id', validateUserId, validateUser, (req, res, next) => {
  const { id } = req.params;
  User.update(id, { name: req.name })
    .then(() => {
      return User.getById(id)
    })
    .then(user => {
      res.json(user)
    })
    .catch(next)
});

router.delete('/:id', validateUserId, (req, res, next) => {
  User.remove(req.params.id)
    .then(() => {
      res.status(200).json(req.user)
    })
    .catch(next)
});

router.get('/:id/posts', validateUserId, (req, res, next) => {
  User.getUserPosts(req.params.id)
    .then(posts => {
      res.json(posts)
    })
    .catch(next)
});

router.post('/:id/posts', validateUserId, validatePost, (req, res, next) => {
  Post.insert({
    user_id: req.params.id,
    text: req.text
  })
    .then(newPost => {
      res.status(201).json(newPost)
    })
    .catch(next)
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
