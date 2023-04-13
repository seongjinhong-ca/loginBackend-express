import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { getInstance } from '../../../utils/api_client';
import { useNavigate } from 'react-router-dom';
import RoomModal from '../RoomModal/RoomModal';

function LandingPage() {
  // navigate between logout and login
  let navigate = useNavigate();

  const init_ChatRooms = [];

  const [chatRooms, setChatRooms] = useState(init_ChatRooms);

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

    const showModal = () => {
      return(
        <RoomModal/>
      )
    }
  return (
    <div>
        This is landing page
        <div style={{
          display:'flex', justifyContent:"center", alignItems:"center",
          width:'100%', height: '100vh'
        }}>

          <li>
            list of rooms
          </li>
          <button onClick={showModal}>Create Room</button>
          
          <h2>시작 페이지</h2>
          <button onClick={onaHandleClickLogout}>logout</button>
        </div>
    </div>
  )
}

export default LandingPage
