const express = require("express");
const app = express();
const router = require('./routes/router');
require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require("mongoose");


// middlewares
app.use(express.json());
const cors = require("cors");
app.use(cors(
  {
    origin: 'http://localhost:3000',
    credentials: true,
  }
));
app.use(bodyParser.urlencoded({
  extended: true,
}));


app.use(router);

// database connection

mongoose.connect(process.env.MONGODB_URL)
    .then(res => console.log("mongodb connected"))
    .catch(err => console.log('Error connecting to MongoDB'))



app.get("/", async (req, res) => {
  res.send("Success!!!!!!");
});

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
