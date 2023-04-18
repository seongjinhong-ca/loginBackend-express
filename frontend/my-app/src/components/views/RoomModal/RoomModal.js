import React from 'react'
import { useState } from 'react'

function RoomModal({children}) {
    const[shouldShow, setShouldShow] = useState(false); // hidden
  return (
    <>
        <button onClick={() => setShouldShow(true)}>see the Room Modal</button>
        {
            shouldShow && (
            <div onClick={() => setShouldShow(false)}>
              <div onClick={e=> e.stopPropagation()}>
              <button onClick={()=> setShouldShow(false)}> Close Modal </button>
                {children}
              </div>
            </div>
            )
        }
    </>
  )
}

export default RoomModal
