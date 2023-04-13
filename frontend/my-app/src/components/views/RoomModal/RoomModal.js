import React from 'react'
import { useState } from 'react'

function RoomModal({children}) {
    const[shouldShow, setShouldShow] = useState(false); // hidden
  return (
    <>
        <button onClick={() => setShouldShow(true)}>see the Room Modal</button>
        {
            shouldShow && (
            <div>
                {children}
            </div>
            )
        }
    </>
  )
}

export default RoomModal
