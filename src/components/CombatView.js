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
    this.playerAttack = this.playerAttack.bind(this)
    this.enemyAttack = this.enemyAttack.bind(this)
  }

  componentDidMount() {
    this.generateNewEnemy(this.props.player.stats.lvl)
  }

  generateNewEnemy(playerLvl) {
    this.setState({
      enemy: generateNewEnemy(playerLvl)
    })
  }

  playerAttack() {
    if (this.props.popup) {
      this.props.togglePopup()
      return this.enemyAttack()
    }

    const { player } = this.props
    const { enemy } = this.state
    const dmg = player.rollAttack()
    enemy.takeDamage(dmg)
    
    this.setState({ enemy }, () => 
      this.props.togglePopup(
        `you deal ${dmg} damage`, 
        this.enemyAttack
      )
    )
  }

  enemyAttack() {
    const { enemy } = this.state
    const { player } = this.props

    if (enemy.stats.hp <= 0) return this.enemyKilled()

    const dmg = enemy.rollAttack()
    player.takeDamage(dmg)

    this.setState({ player }, () =>
      this.props.togglePopup(
        `${enemy.desc.name} deals ${dmg} damage`,
        this.isPlayerDead
      )
    )
  }

  enemyKilled() {
    console.log('you killed your foe!')
  }

  isPlayerDead() {
    if (player.stats.hp <= 0) console.log('game over')
  }

  render() {
    return (
      <div className="combat-view">

        <div className="row">
          <PlayerBox 
            player={this.props.player}
            describeItem={this.props.describeItem}
          />
          <div 
            className="vs"
          >VS</div>
          <EnemyBox 
            enemy={this.state.enemy}
          />
        </div>

        <div className="actions">
          <CombatActions 
            attack={this.playerAttack}
          />
        </div>

      </div>
    )
  }
}

export default CombatView