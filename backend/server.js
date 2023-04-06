// get express framework
const express = require("express");
// create a server call "app" by running express object
const app = express()
// import User from "./models/user"
const {User} = require("./models/User");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const {auth} = require("./middleware/auth");

// http header content type: https://it-eldorado.tistory.com/143#:~:text=%EB%A8%BC%EC%A0%80%2C%20URL%20%EC%9D%B8%EC%BD%94%EB%94%A9%EC%9D%B4%EB%9E%80%20URL,%EB%8A%94%2016%EC%A7%84%EC%88%98%20%EA%B0%92%EC%9D%B4%EB%8B%A4.
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json
app.use(bodyParser.json());
app.use(cookieParser());

// parser is the function
/*
example:
bodyParser.json() is returning a parser function.
jsonParser = bodyParser.json();
...
// parser함수를 end-point의 parameter로 보내고 parsing을 한다.
app.get("/", jsonParser, (req, res) => res.send("Hello world!~안녕하세요."))

// end point : take in the request and give out the response.
app.get(url-path, parser, callback(request, response, error)=> {
    take in the request

    give out the response

    if there is an error, catch the error
})

app.post(url-path, parser, callback(request, response)=> {
    take in the request

    there is no response, but save the request data into DB
    model.save()
})

*/
// by using use() middleware, the parser is being rendered.

const cors = require('cors');
const config = require('./config/key')
// connecting mongoDb using mongoose
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
}).then(()=> console.log('MongoDB connected...'))
.catch(err => console.log(err))

app.use(cors())

// end point
app.get("/", (req, res) => res.send("Hello world!~안녕하세요."))

app.get('/api/hello', (req, res)=>{
    res.send("안녕하세요")
})
app.post("/api/users/register", async (req, res)=> {
    // get the schema of user model
    const user = new User(req.body);
    // saving user takes asynchronous amount of time
    await user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.error(err);
      res.json({
        success: false,
        err: err,
      });
    });

    // try{
    //     //회원가입 할 때 필요한 정보를 client에서 가져오면
    //     // 그것을 데이터베이스에 넣어준다
    //     // create a user model
    //     // request 객체가 body에 body parser된 request의 body를 User schema를 통해서 모델을 만든다.
    //     const user = new User(req.body);
    //     user.save()
    //     .then((savedUser)=>{
    //         res.render("secret");
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     });
    //     // user.save((error, userInfo) => {
    //     //     if(error){
    //     //         return res.json({success: false, error})
    //     //     }
    //     //     return res.status(200).json({success: true})
    //     // }); // save() is coming from mongodb method -> saving user model into mongodb
    // }catch (error){
    //     console.log(error);
    // }
    

})

app.post('/api/users/login', async (req, res)=>{
    // try to find if email already exist in db
    const user = await User.findOne({ email:req.body.email })
    if(!user){
        return res.json({
            loginSuccess:false,
            message:"제공된 이메일에 해당하는 유저가 없습니다"
        })
    }
    // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인.
    user.comparePassword(req.body.password, (err, isMatch) => {
        if(!isMatch){
            return  res.json({loginSuccess:false, message:"비밀번호가 틀렸습니다"})
        }
        // 비밀번호까지 맞다면 토큰을 생성하기
        user.generateToken((err, user)=>{
            if(err) return res.status(400).send(err);
            // 토큰을 저장한다. 어디에? 쿠키, 로컬 스토리지
            res.cookie("x_auth", user.token)
            .status(200)
            .json({loginSuccess:true, userId:user._id})
        })
    })
})

/*
app.post('/login', async (req, res)=>{
    // try to find if email already exist in db
    await User.findOne({ email:req.body.email }, (err, user)=>{
        // user not exist
        if(!user){
            return res.json({
                loginSuccess:false,
                message:"제공된 이메일에 해당하는 유저가 없습니다"
            })
        }
        // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인.
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch){
                return  res.json({loginSuccess:false, message:"비밀번호가 틀렸습니다"})
            }
            // 비밀번호까지 맞다면 토큰을 생성하기
            user.generateToken((err, user)=>{
                if(err) return res.status(400).send(err);
                // 토큰을 저장한다. 어디에? 쿠키, 로컬 스토리지
                res.cookie("x_auth", user.token)
                .status(200)
                .json({loginSuccess:true, userId:user._id})
            })
        } )
    })
})
*/

app.get('/api/users/auth', auth, (req, res)=>{
    res.status(200).json({
        _id:req.user._id,
        isAdmin: req.user.role === 0? false:true,
        isAuth:true,
        email:req.user.email,
        name:req.user.name,
        lastname:req.user.lastname,
        role:req.user.role,
        image:req.user.image
    })
})

//logout
app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({_id:req.user._id},
        {token:""})
        .then((user)=>{
            res.status(200).send({
                success:true
            })
        })
        .catch((err)=> {
            return res.json({success:false, err})
        })
        // (err, user)=>{
        //     if(err) return res.json({success:false, err});
        //     return res.status(200).send({
        //         success:true
        //     })
        // }
})

// set the port
const port = 8000;
// connecting server through port == 8000 -> line 4
app.listen(port, ()=> {
    console.log("port 8000 server is connected!")
})
