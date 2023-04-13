import React, {useEffect} from 'react'
import axios from 'axios';
import { getInstance } from '../../../utils/api_client';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  let navigate = useNavigate();
    useEffect(()=>{
        getInstance().get('/api/hello')
        // axios.get('/api/hello')
        .then(response => console.log(response.data))
    },[])
    const onaHandleClickLogout = (e) => {
      getInstance().get(`/api/users/logout`)
      .then((response) => {
        if(response?.status === 200){
          navigate("/login")
        }
      })
    }
  return (
    <div>
        This is landing page
        <div style={{
          display:'flex', justifyContent:"center", alignItems:"center",
          width:'100%', height: '100vh'
        }}>
          <h2>시작 페이지</h2>
          <button onClick={onaHandleClickLogout}>logout</button>
        </div>
    </div>
  )
}

export default LandingPage
