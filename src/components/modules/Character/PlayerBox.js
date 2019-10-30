import React from 'react'
import Info from './Info'
import Loot from './Loot'

const PlayerBox = ({ player }) => (
    <div className="character-box">
      <Info char={player}/>
      <Loot char={player}/>
    </div>
)

export default PlayerBox