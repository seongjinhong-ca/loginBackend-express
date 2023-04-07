const mongoose = require("mongoose");
// mongoose.connect('mongodb://1270.0.1:27017/login-db')
// .then(() => {console.log("mongodb is connected through mongoose!")})
// .catch(() => {console.log("failed")})

const loginInfoSchema = new mongoose.Schema({
    loginInfo : {
        type: {
            username : "",
            password : "",
            email: "",
            require:true
        }
    }
})

const collection = mongoose.model("collection", loginInfoSchema)
module.exports = collection;
