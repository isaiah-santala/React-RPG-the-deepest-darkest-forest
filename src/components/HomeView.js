import React from 'react'
import PlayerBox from './modules/Character/PlayerBox'

const HomeView = ({ player, describeItem, popup}) => (
    <div>
      <PlayerBox
        popup={popup}
        player={player}
        describeItem={describeItem}
      />
    </div>
)

export default HomeView