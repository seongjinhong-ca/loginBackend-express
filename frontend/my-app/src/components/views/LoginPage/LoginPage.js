import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getInstance } from '../../../utils/api_client';
// import { useHistory } from "react-router-dom";
// import { redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {
    // const history = useHisotry
    let navigate = useNavigate();
    const init_email = "";
    const [email, setEmail] = useState(init_email);
    // this.state = {email:""}
    const [password, setPassword] = useState("");
    // this.state = {password:""}

    const init_form = {
        email:"",
        password:""
    };
    const [form, setForm] = useState(init_form);
    
    // get a user data from server at the end-point /api/users/register
    // useEffect(() => {
    //     axios.post('/api/users/login')
    //     .then(response => console.log(response.data))
    // })

    const onEmailHandler = (e) => {
        const {name, value} = e.currentTarget;
        // console.log(e.currentTarget)
        setEmail(e.currentTarget.value);
        // setEmail({...email, [name]:value})
        // setEmail([email.concat(value)])
        // setEmail(`${email}`, value)
        setEmail({...email, [name]:value})
        console.log(email);
        // setEmail(email.concat(value));
    }
    
    const onPasswordHandler = (e) => {
        const {name, value} = e.currentTarget;
        // setPassword(e.currentTarget.value);
        setPassword({...name, [name]:value});
    }

    const handleChange2 = (e) => {
        const {name, value} = e.currentTarget;
        setForm({...form, [name]:value})
        console.log("name: ", name);
        console.log("value: ", value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        let body = form;
        getInstance().post('/api/users/login', body)
        .then((response)=>{
            if(response?.status===200){
                navigate("/landing");
            }
        })
        // hi, hi@gmail.com 1234567
    }

    return (
        <>
        This is login page
        <progress value={null} />
        <div style={{
          display:'flex', justifyContent:"center", alignItems:"center",
          width:'100%', height: '100vh'
        }}>
            <form onSubmit={onFormSubmit} style={{ display: 'flex', flexDirection:"column"}}>
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange2}></input>
                {/* <input type="email" name="email" value={email} onChange={onEmailHandler}></input> */}
                
                <label>Password</label>
                <input type="password" name="password" value={form.password} onChange={handleChange2}></input>
                {/* <input type="text" name="password" value={password} onChange={onPasswordHandler}></input> */}
                <br/>
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
        </>
    )

}