import React from 'react'
import Info from './Info'

const EnemyBox = ({ enemy }) => (
    <div className="character-box">

      <Info char={enemy} />

      <div className="character-row">
        <div className="character-saying character-box-item">
          {enemy.desc.saying}
        </div>
      </div>
      
    </div>
)

export default EnemyBox