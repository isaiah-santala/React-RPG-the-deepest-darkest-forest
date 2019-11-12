import React from 'react'

export const Message = ({ msg }) => (
  <div className="popup">

    <div className="popup-msg">
      <p>{msg}</p>
      <button>continue</button>
    </div>

  </div>
)