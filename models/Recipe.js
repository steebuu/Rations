const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'users'
  // },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;