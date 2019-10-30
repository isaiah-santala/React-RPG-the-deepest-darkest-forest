import React, { Component } from 'react'
import Enemy from '../modules/Enemy/Enemy'
import Player from '../modules/Player/Player'
import CombatActions from '../modules/Actions/CombatActions'
import { generateNewEnemy } from '../../logic/generators/generators'


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
          <Player player={this.props.player}/>
          <div className="vs">VS</div>
          <Enemy enemy={this.state.enemy}/>
        </div>

        <div className="actions">
          <CombatActions/>
        </div>
      </div>
    )
  }
}

export default CombatView