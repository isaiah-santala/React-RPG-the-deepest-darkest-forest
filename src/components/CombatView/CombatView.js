import React from 'react'
import Enemy from '../modules/Enemy/Enemy'
import Player from '../modules/Player/Player'
import CombatActions from '../modules/Actions/CombatActions'
import { generatePlayer, generateNewEnemy } from '../../logic/generators/generators'


const CombatView = (props) => {
  const player = generatePlayer('Bob Trufant', 'I am the best')
  const enemy = generateNewEnemy(player.stats.lvl)

  return (
    <div className="combat-view">
      <div className="row">
        <Player player={player}/>
        <div className="vs">VS</div>
        <Enemy enemy={enemy}/>
      </div>

      <div className="actions">
        <CombatActions/>
      </div>
    </div>
  )
}

export default CombatView