const mongoose = require("mongoose");


const fashionshcema = mongoose.Schema({
     img:String,
     price:Number,
     content:String
})


const fashionModel=mongoose.model("fashion",fashionshcema);



module.exports={
    fashionModel
}