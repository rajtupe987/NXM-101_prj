const mongoose = require("mongoose");


const buetyshcema = mongoose.Schema({
     img:String,
     price:Number,
     content:String
})


const buetyModel=mongoose.model("buety",buetyshcema);



module.exports={
    buetyModel
}