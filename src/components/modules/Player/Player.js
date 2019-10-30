import React from 'react'
import { generatePlayer } from '../../../logic/generators/generators'
import Info from '../Character/Info'
import Loot from '../Character/Loot'

const Player = ({ player }) => {
  player = generatePlayer('Bob Trufant')
  console.log(player)

  return(
    <div className="character-box">
      <Info char={player}/>
      <Loot char={player}/>
    </div>
  )
}

export default Player