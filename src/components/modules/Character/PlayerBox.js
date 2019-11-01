import React from 'react'
import Info from './Info'
import Loot from './Loot'

const PlayerBox = ({ player, describeItem }) => (
    <div className="character-box">
      <Info char={player}/>
      <Loot 
        char={player}
        describeItem={describeItem}
      />
    </div>
)

export default PlayerBox