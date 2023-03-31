const express=require("express");
const {connection}=require("./config/db");
const {userrouter}=require("./Routs/userroute");
const {Authenticator}=require("./middleware/Authenticator")
require("dotenv").config();
const cors=require("cors")


const app=express();
app.use(express.json());



app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.use("/users",userrouter);



app.listen(process.env.port,async()=>{
    
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log("Error while connecting");
        console.log(error)
    }
    console.log(`port is runnit at ${process.env.port}`)
})