const express = require("express");
const router = express.Router();
const axios = require('axios');
const mongoose = require('mongoose');
const Recipe = require('../../models/Recipe');
const keys = require('../../config/keys');
const validateRecipeInput = require('../../validation/recipes');

router.post('/', (req, res) => {
  const {filters} = req.body;
  const ingredientsString = filters.ingredients.map(ingredient => ingredient + '%2C');
  const baseUrl = `https://api.spoonacular.com/recipes/findByIngredients?number=${filters.number}&ranking=2&ingredients=`
  const advancedUrl = baseUrl + ingredientsString;
  const perfectUrl = advancedUrl + `&apiKey=${keys.recipeKey}`;
  axios.get(perfectUrl).then(recipes => {
    return res.json(recipes.data);
  });
});

router.post('/random', (req, res) => {
  const { number} = req.body;
  const baseUrl = `https://api.spoonacular.com/recipes/random?number=${number}`
  const perfectUrl = baseUrl + `&apiKey=${keys.recipeKey}`;
  axios.get(perfectUrl).then(recipes => {
    return res.json(recipes.data);
  });
});

router.get('/:id', (req, res) => {
  const baseUrl = `https://api.spoonacular.com/recipes/${req.params.id}/information?`
  const perfectUrl = baseUrl + `&apiKey=${keys.recipeKey}`;
  axios.get(perfectUrl).then(recipe => {
    return res.json(recipe.data);
  });
});

router.get('/user/:user_id', (req, res) => {
  Recipe.find({ user: req.params.user_id })
    .then(recipes => res.json(recipes))
    .catch(err =>
      res.status(404).json({ noRecipesfound: 'No recipes found from that user' }
      )
    );
});

router.get('/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err =>
      res.status(404).json({ noRecipefound: 'No recipe found with that ID' })
    );
});


module.exports = router;