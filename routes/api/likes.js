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
  console.log(req);
  // let collection = mongoose.get().collection('likes');
  // collection.deleteOne({ _id: new mongo.ObjectId(req.params.id) });
  
  // Like.deleteOne({ "_id": new mongo.ObjectId(req.params.id) }, function (err) {
  //   if (err) console.log(err);
  //   console.log("Successful deletion");
  // });  

  Like.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      console.log("error in deleting yo!");
      throw error;
    } else {
      console.log("data all gone and deleted yo");
    }
});

});
 



module.exports = router;
