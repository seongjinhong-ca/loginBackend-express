import React, {useEffect} from 'react'
// import axios from 'axios';
import { getInstance } from '../../../utils/api_client';


function LandingPage() {
    useEffect(()=>{
        getInstance().get('/api/hello')
        .then(response => console.log(response.data))
    },[])
  return (
    <div>
        This is landing page
    </div>
  )
}

export default LandingPage
