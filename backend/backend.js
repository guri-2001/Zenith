const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require('./routes/router')


app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use(router);


//mongodb connection
const mongoUrl = process.env.MONGODB_URL
// "mongodb+srv://codecrafters:Devteam2024@data.ma9zn4r.mongodb.net/companyRecords?retryWrites=true&w=majority&appName=data";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

app.get("/", async (req, res) => {
  res.json({ message: "Success!!!!!!" });
});

app.listen(5000, () => {
  console.log("Server Started");
});

//////////////////////////////////////////////////////////////

// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../src/images/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/upload-image", upload.single("image"), async (req, res) => {
//   console.log(req.body);
//   const imageName = req.file.filename;
//   const { name } = req.body

//   try {
//     await Images.create({ image: imageName, name});
//     res.json({ status: "ok" });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });

// app.get("/get-image", async (req, res) => {
//   try {
//     Images.find({}).then((data) => {
//       res.send({ status: "ok", data: data });
//     });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });
