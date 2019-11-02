import React from 'react'

const Popup = ({ msg, closePopUp, cb }) => {
  let hasRun = false

  document.addEventListener(
    'keydown', 
    () => {
      if (hasRun) return null
      closePopUp(cb)
      hasRun = true
    }, 
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