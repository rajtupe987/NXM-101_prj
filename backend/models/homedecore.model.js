const mongoose = require("mongoose");


const homeshcema = mongoose.Schema({
     img:String,
     price:Number,
     content:String
})


const homeModel=mongoose.model("home",homeshcema);



module.exports={
    homeModel
}