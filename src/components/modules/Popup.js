import React from 'react'

const Popup = ({ msg, closePopUp, cb }) => {

  return (
    <div 
      className="blackout"
      onClick={() => closePopUp(cb)}
    >
      <div className="popup">

        <div className="popup-top-row">
          <button>x</button>
        </div>

        <div className="popup-msg">
          <p>{msg}</p>

          <button>continue</button>
        </div>  

      </div>
    </div>
  )
}

export default Popup