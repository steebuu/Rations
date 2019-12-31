// const express = require("express");
// const router = express.Router();
// const Comment = require('../../models/Comment');


// router.post('/', (req, res) => {
//   const { body, userId } = req.params;

//   const newComment = new Comment({
//     user: userId,
//     body: body
//   });

//   newComment.save().then(comment => res.json(comment));
// });