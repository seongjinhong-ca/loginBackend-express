import React, {useEffect} from 'react'
import axios from 'axios';
import { getInstance } from '../../../utils/api_client';


function LandingPage() {
    useEffect(()=>{
        // getInstance().get('/api/hello')
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    },[])
  return (
    <div>
        This is landing page
        <div style={{
          display:'flex', justifyContent:"center", alignItems:"center",
          width:'100%', height: '100vh'
        }}>
          <h2>시작 페이지</h2>
        </div>
    </div>
  )
}

export default LandingPage
