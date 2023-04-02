const mongoose = require("mongoose");


const eleshcema = mongoose.Schema({
     img:String,
     price:Number,
     content:String
})


const eleModel=mongoose.model("electronic",eleshcema);



module.exports={
    eleModel
}