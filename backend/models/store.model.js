const mongoose = require("mongoose");


const storeshcema = mongoose.Schema({
     img:String,
     price:Number,
     content:String
})


const storeModel=mongoose.model("store",storeshcema);



module.exports={
    storeModel
}