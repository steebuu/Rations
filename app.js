const mongoose = require("mongoose");
const users = require("./routes/api/users");
const recipes = require("./routes/api/recipes");
const likes = require("./routes/api/likes");
const comments = require("./routes/api/comments");
const bodyParser = require('body-parser');
const passport = require('passport');

const express = require("express");
const app = express();
const path = require('path');
const db = require('./config/keys').mongoURI;
const keys = require('./config/keys');
// displayRoutes = require('express-routemap');
console.log(keys);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/recipes", recipes);
app.use("/api/likes", likes);
app.use("/api/comments", comments);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  // displayRoutes(app, 'route-table.log');
});