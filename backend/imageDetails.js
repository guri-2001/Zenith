const mongoose = require("mongoose");

// const ImageDetailsScehma = new mongoose.Schema(
//   {
//     name: String
//   },
//   {
//     image: String
//   },
//   {
//     collection: "ImageDetails",
//   }
// );

// mongoose.model("ImageDetails", ImageDetailsScehma);




const ImageDetailsScehma = new mongoose.Schema({
    name:{
        type:String,
    },
    image:{
        type:String,
    },
});


// create model

const ImageDetails = new mongoose.model("images",ImageDetailsScehma);

module.exports = ImageDetails;