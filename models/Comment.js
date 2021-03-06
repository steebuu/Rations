const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  body: {
    type: String,
    required: true
  },
  recipe: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String
  }
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;