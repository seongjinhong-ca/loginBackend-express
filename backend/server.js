const express = require("express");
// const collection = require("./mongo");
const cors = require('cors');
const app = express()
// import User from "./models/user"

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://chrissj129:p50pk4Fvo1BKS8Wl@cluster0.jtnsdmq.mongodb.net/?retryWrites=true&w=majority", {
}).then(()=> console.log('MongoDB connected...'))
.catch(err => console.log(err))

// end point
app.get("/getusers", (req, res)=>{
    UserModel.find({}, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

app.listen(8000, ()=> {
    console.log("port 8000 server is connected!")
})