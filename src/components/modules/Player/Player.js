import React from 'react'
import { generatePlayer, generateNewEnemy } from '../../../logic/generators/generators'
import Info from '../Character/Info'
import Loot from '../Character/Loot'

const Player = ({ player }) => {
  player = generatePlayer('Bob Trufant', 'I am reading my catologue Derek!!')
  const enemy = generateNewEnemy(player.stats.lvl)
  console.log(player, enemy)

  return(
    <div className="character-box">
      <Info char={player}/>
      <Loot char={player}/>
    </div>
  )
}

export default Player