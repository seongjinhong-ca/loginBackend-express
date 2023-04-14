const { User } = require("../models/User");

const getUserRegister = async (req, res)=> {
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
    

}

const getUserLogin = async (req, res)=>{
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
}
const getUserStatus = (req, res)=>{
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
}
const findOneAndUpdate = (req, res) => {
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
}

module.exports = {getUserRegister, getUserLogin, getUserStatus, findOneAndUpdate};