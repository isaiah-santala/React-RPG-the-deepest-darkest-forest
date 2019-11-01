import React from 'react'

const Popup = ({ msg, togglePopup, cb }) => {


  const closePopUp = () => {
    togglePopup()
    if (cb) cb()
  }

  return (
    <div 
      onKeyPress
      className="blackout"
      onClick={closePopUp}
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