import React from 'react'
import PlayerBox from './modules/Character/PlayerBox'

const HomeView = (props) => (
    <div>
      <PlayerBox
        player={props.player}
        describeItem={props.describeItem}
      />
    </div>
)

export default HomeView