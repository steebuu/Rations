const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const mongo = require('mongodb');
const Comment = require('../../models/Comment');
const validateCommentInput = require('../../validation/comments');


router.post('/', (req, res) => {
  const { errors, isValid } = validateCommentInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { body, user, recipe, username } = req.body;
  
  const newComment = new Comment({
    user: user,
    recipe: recipe,
    body: body,
    username: username
  });

  newComment.save().then(comment => {
    res.json(comment)});
});

router.delete('/:id', (req, res) => {
  Comment.findByIdAndRemove(req.params.id)
    .then(comment => res.json(comment))
    .catch((error) => { throw error; });
});

router.get('/recipes/:recipe_id', (req, res) => {
  Comment.find({ recipe: req.params.recipe_id })
    .then(comments => res.json(comments))
    .catch(err =>
      res.json({}));
});

router.patch('/:id', (req, res) => {
  Comment.findById(req.params.id, (error, comment) => {
    if (error) {
      throw error;
    } else {
      comment.body = req.body.body;
      comment.save();
    }
  });

  // Comment.findOneAndUpdate({ _id: req.body.id})
});

module.exports = router;