import React from 'react'

const Popup = ({ msg, closePopUp, cb }) => {

  document.addEventListener(
    'keydown', 
    () => closePopUp(cb), 
    false
  )

  return (
    <div 
      className="blackout"
      onClick={() => closePopUp(cb)}
    >
      <div className="popup">

        <div className="popup-msg">
          <p>{msg}</p>
          <button>continue</button>
        </div>  

      </div>
    </div>
  )
}

export default Popup