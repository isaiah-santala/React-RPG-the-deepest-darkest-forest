import React, { Component } from 'react'
import EnemyBox from './modules/Character/EnemyBox'
import PlayerBox from './modules/Character/PlayerBox'
import CombatActions from './modules/Actions/CombatActions'
import { generateNewEnemy } from '../logic/generators/generators'


class CombatView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      enemy: generateNewEnemy(null)
    }
  }

  componentDidMount() {
    this.generateNewEnemy(this.props.player.stats.lvl)
  }

  generateNewEnemy(playerLvl) {
    this.setState({
      enemy: generateNewEnemy(playerLvl)
    })
  }

  render(props) {
    return (
      <div className="combat-view">
        <div className="row">
          <PlayerBox player={this.props.player}/>
          <div className="vs">VS</div>
          <EnemyBox enemy={this.state.enemy}/>
        </div>

        <div className="actions">
          <CombatActions handleAction={this.props.handleAction}/>
        </div>
      </div>
    )
  }
}

export default CombatView