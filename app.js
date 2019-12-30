const mongoose = require("mongoose");
const users = require("./routes/api/users");
const recipes = require("./routes/api/recipes");
const bodyParser = require('body-parser');
const passport = require('passport');

const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


app.get("/", (req, res) => {
  console.log(res);
  res.send("Greetings World");
});

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/recipes", recipes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));