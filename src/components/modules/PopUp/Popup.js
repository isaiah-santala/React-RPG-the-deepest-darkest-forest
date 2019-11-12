import React from 'react'
import { Message } from './Message'

const Popup = ({ msg, closePopUp, cb, type = 'MSG' }) => {

  const handleClose = () => {
    closePopUp(cb)
    document.removeEventListener(
      'keydown',
      handleClose,
      false
    )
  }

  document.addEventListener(
    'keydown', 
    handleClose, 
    false
  )

  return (
    <div 
      className="blackout"
      onClick={() => handleClose()}
    >

      {type === 'MSG' && 
        <Message
          msg={msg}
        />}

    </div>
  )
}

export default Popup