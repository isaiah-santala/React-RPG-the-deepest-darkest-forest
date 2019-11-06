import React, { Component } from 'react'
import { connect } from 'react-redux'
import EnemyBox from './modules/Character/EnemyBox'
import PlayerBox from './modules/Character/PlayerBox'
import CombatActions from './modules/Actions/CombatActions'
import { generateNewEnemy } from '../logic/generators/generators'
import { setEnemy, enemyAddLoot, setEnemyStats } from '../redux/actions'


class CombatView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.playerAttack = this.playerAttack.bind(this)
    this.enemyAttack = this.enemyAttack.bind(this)
    this.isPlayerDead = this.isPlayerDead.bind(this)
    this.gainXp = this.gainXp.bind(this)
    this.gainAp = this.gainAp.bind(this)
  }

  componentDidMount() {
    this.generateNewEnemy(this.props.player.stats.lvl)
  }

  generateNewEnemy(playerLvl) {
    const newEnemy = generateNewEnemy(playerLvl)
    const { desc, stats, loot } = newEnemy
    console.log(stats)
    this.props.setEnemy(desc)
    this.props.enemyAddLoot(loot)
    this.props.setEnemyStats(stats)
  }

  playerAttack() {
    const { player, enemy } = this.props
    const dmg = player.rollAttack()
    enemy.takeDamage(dmg)
    
    this.setState({ enemy }, () => 
      this.props.openPopup(
        `you deal ${dmg} damage`, 
        this.enemyAttack
      )
    )
  }

  enemyAttack() {
    const { enemy } = this.state
    const { player, updatePlayer } = this.props

    if (enemy.stats.hp <= 0) return this.enemyKilled()

    const dmg = enemy.rollAttack()
    player.takeDamage(dmg)

    updatePlayer(
      player, 
      () => {
        this.props.openPopup(
        `${enemy.desc.name} deals ${dmg} damage`,
        this.isPlayerDead
      )}
    )
  }

  enemyKilled() {
    // give player ap
    // alert player

    // give player loot
    // alert player

    //return player to homeview

    this.props.openPopup(
      'You have triumphed',
      this.gainXp
    )
  }

  gainXp() {
    const { enemy } = this.state
    const { player, updatePlayer } = this.props

    const previousLvl = player.stats.lvl
    player.gainXp(enemy.giveXp())

    const msg = player.stats.lvl > previousLvl ?
      `Congratulations! you have advanced a combat level` :
      `You gained ${enemy.giveXp()} XP`


    updatePlayer(
      player,
      () => {
        this.props.openPopup(
          msg,
          this.gainAp
        )
      }
    ) 
  }

  gainAp() {
    console.log('gain AP')
    this.isPlayerDead()
  }

  isPlayerDead() {
    const { player } = this.props
    console.log(player.stats.hp)
    if (player.stats.hp <= 0) this.props.gameOver()
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
            enemy={this.props.enemy}
          />
        </div>

        <div className="actions">
          {!this.props.popup &&
            <CombatActions 
              attack={this.playerAttack}
            />}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  player: {
    stats: state.playerStats,
    loot: state.playerLoot,
    desc: state.playerDesc
  },
  enemy: {
    stats: state.enemyStats,
    loot: state.enemyLoot,
    desc: state.enemyDesc
  }
})

export default connect(
  mapStateToProps,
  { setEnemy, enemyAddLoot, setEnemyStats }
)(CombatView)