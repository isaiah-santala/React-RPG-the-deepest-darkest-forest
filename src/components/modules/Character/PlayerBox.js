import React from 'react'
import Info from './Info'
import Loot from './Loot'

const PlayerBox = ({ player, handleAction }) => (
    <div className="character-box">
      <Info char={player}/>
      <Loot 
        char={player}
        handleAction={handleAction}
      />
    </div>
)

export default PlayerBox