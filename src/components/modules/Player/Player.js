import React from 'react'
import Info from '../Character/Info'
import Loot from '../Character/Loot'

const Player = ({ player }) => (
    <div className="character-box">
      <Info char={player}/>
      <Loot char={player}/>
    </div>
)

export default Player