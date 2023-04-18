import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getInstance } from '../../../utils/api_client';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();

  const init_registeredInfo = {
    username:"",
    email:"",
    password:""
  }
  // state
  const [registeredInfo, setRegisteredInfo] = useState(init_registeredInfo);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSame, setIsSame] = useState(null);
  // const client = axios.create({
  //   baseURL: "http://localhost:8000"
  // });

  // useEffect
  useEffect(()=> {
    let ignore = false;
    // setBio(null);
    // fetchBio(person).then(result => {
    //   if (!ignore) {
    //     setBio(result);
    //   }
    // });
    // https://medium.com/@mike.mkrallaproductions/react-side-effects-useeffect-vs-event-handler-objective-comparison-7a77daa5e046
  
    // async function fetchRegister() {
    //   return await client.post('/api/users/register')
    // }
    // fetchRegister().then((response)=> console.log(response.data))
    // return () => {
    //   ignore = true;
    // };
  })
  // handlers
  const handleChange = (e) => {
    const {value, name} = e.currentTarget;
    setRegisteredInfo({...registeredInfo, [name]: value})
    console.log(registeredInfo);
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    // console.log(registeredInfo)


    let body = registeredInfo;
    getInstance().post('/api/users/register', body)
    .then((response)=> {
      if(response?.status === 200) {
        navigate(`/login`);
      }
    });
    // .then((response)=> {console.log(response)});
    //helloo, helloo@gmail.com, 123456
  }


const handelConfirmPassword = (e) =>{
  const {name, value} = e.currentTarget;
  setConfirmPassword(e.currentTarget.value);
}
const onConfirmCheck = (e) => {
  e.preventDefault();
  console.log(confirmPassword)

  if(!(registeredInfo.password === confirmPassword)){
    setIsSame(false);
    console.log("isSame1")
    console.log(isSame)
  }
  else if((registeredInfo.password === confirmPassword)){
    setIsSame(true);
    console.log("isSame2")
    console.log(isSame)
  }
}

  return (
    <div style={{
      display:'flex', justifyContent:"center", alignItems:"center",
      width:'100%', height: '100vh'
    }}>
      {/* <form onChange={onConfirmCheck} onSubmit={onSubmitHandler} style={{display:"flex", flexDirection:"column"}}></form> */}
      <form onSubmit={onSubmitHandler} style={{display:"flex", flexDirection:"column"}}>
        <label>username</label>
        <input name='username'value={registeredInfo.username} onChange={handleChange}/>
        <label>email</label>
        <input name='email' value={registeredInfo.email} onChange={handleChange}/>
        <label>Password</label>
        <input name="password" value={registeredInfo.password} onChange={handleChange}/>
        {/* <label>Confirm password</label>
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={handelConfirmPassword}></input>
        {isSame && (<> password is confirmed to be matched</>)}
        {isSame === false && (<> not matched</>)}
        {isSame === null && ("")} */}
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default RegisterPage
