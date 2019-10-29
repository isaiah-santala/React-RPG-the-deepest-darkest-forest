import React from 'react'
import { generatePlayer } from '../../../logic/generators/generators'


const Player = ({ player }) => {
  player = generatePlayer('Bob Trufant')
  
  return(
    <div className="character-box">

      <div className="character-row">

        <div className="character-info">
          <div className="character-headshot character-box-item">
            img
          </div>
          <div className="character-name character-box-item">
            {player.name}
          </div>
        </div>

        <div className="character-stats character-box-item">
          <div>HP: {player.hp}</div>
          <div>XP: {player.xp}</div>
          <div>AP: {player.ap}</div>
          <div>LVL: {player.lvl}</div>
        </div>

      </div>

      <div className="character-row">
        <div className="character-loot character-box-item">
          {player.loot.map((e, i) =>
            <div>{e.name}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Player