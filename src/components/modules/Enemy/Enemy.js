import React from 'react'
import Info from '../Character/Info'

const Enemy = ({ enemy }) => (
    <div className="character-box">

      <Info char={enemy} />

      <div className="character-row">
        <div className="character-saying character-box-item">
          {enemy.desc.saying}
        </div>
      </div>
      
    </div>
)

export default Enemy