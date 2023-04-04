const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRound = 10;
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        amxLength:50
    },
    role: {
        type:Number,
        default:0
    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
})

userSchema.pre('save', function( next ){

    let user = this;
    // 비밀번호를 암호화시킨다.
    if(user.isModified('password')){
        bcrypt.genSalt(saltRound, function(err, salt){
            if(err) return next(err);
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);
                user.password = hash;
                next();
            });
        });
    }else{
        next();
    }
});

userSchema.methods.comparePassword = function(plainPassword, cb){
    // plainPassword 1234567 암호화된 비밀번호를 같은지 체크
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function (cb) {
    var user = this;
    // jsonwebtoken을 이용해서 token을 생성하기
    var token = jwt.sign(user._id.toHexString(), "secretToken")
    /*
    user._id + "secretToken" = token
    token("secretToken") -> user._id
    */
   user.token = token;
   user.save()
   .then(() => {
    return cb(null, user)
   }).catch((err)=> {
    return cb(err);
   });
   /*
   user.save(function(err, user){
    if(err) return cb(err);
    cb(null, user)
   })
   */
}

userSchema.statics.findByToken = function (token, cb){
    let user = this;

    // token을 decode한다.
    jwt.verify(token, "secretToken",function(err, decoded) {
        // 유저 아이디를 이용해서 유저를 찾은 다음에
        // 클라이언트에서 가져온 token과 데이터베이스에 보관되어있는 token이 일치하는지 확인
        user.findOne({"_id":decoded, "token": token})
        .then((user) => {
            return cb(null, user)
        })
        .catch((err)=>{
            return cb(err)
        })

        // function (err, user){
        //     if (err) {return cb(err)}
        //     cb(null, user)
        // }
    })
}
const User = mongoose.model("User", userSchema);
module.exports = {User}
// module.exports = User = mongoose.model('user', UserSchema);