import React from 'react'
import Filler from './Filler'

const XpBar = (props) => {
    return (
        <div className="progress-bar">
          <Filler percentage={props.percentage} />
        </div>
      )
  }

export default XpBar
