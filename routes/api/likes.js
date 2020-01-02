const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const mongo = require('mongodb');
const Like = require('../../models/Like');

router.post('/', (req, res) => {
  const { recipe, user } = req.body;
  const newLike = new Like({
    user: user,
    recipe: recipe
  });
  newLike.save().then(like => res.json(like));
});

router.delete('/:id', (req, res) => {
  Like.findByIdAndRemove(req.params.id)
    .then(like => res.json(like))
    .catch((error) => {throw error})
});

router.get('/recipes/:recipe_id', (req, res) => {
  Like.find({ recipe: req.params.recipe_id})
    .then(likes => res.json(likes))
    .catch( () => 
      res.json({}));
});

router.get('/users/:user_id', (req, res) => {
  Like.find({ user: req.params.user_id })
    .then(likes => res.json(likes))
    .catch(() =>
      res.json({}));
});

module.exports = router;
