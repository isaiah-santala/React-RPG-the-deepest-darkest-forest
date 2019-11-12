import React from 'react'
import Info from './Info'
import Loot from './Loot'

const PlayerBox = ({ player, describeItem, popup }) => (
    <div className="character-box">
      <Info char={player}/>
      <Loot 
        char={player}
        popup={popup}
        describeItem={describeItem}
      />
    </div>
)

export default PlayerBox