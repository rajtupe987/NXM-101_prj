const mongoose = require("mongoose");


const lshcema = mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    age: Number,
    city: String,
    password: String,
    confirmpass:String
})


const userModel=mongoose.model("nxm",lshcema);



module.exports={
    userModel
}