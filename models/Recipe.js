const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  username: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    required: true
  },
  directions: {
    type: Array,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;