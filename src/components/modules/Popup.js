import React from 'react'

const Popup = ({ msg, togglePopup }) => (
  <div 
    className="blackout"
    onClick={() => togglePopup()}
  >
    <div className="popup">
      <div className="popup-top-row">
        <button
          onClick={() => togglePopup()}
        >x</button>
      </div>
      <div className="popup-msg">
        {msg}
      </div>
    </div>
  </div>
)

export default Popup