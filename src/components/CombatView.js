import React, { Component } from 'react'
import { connect } from 'react-redux'
import EnemyBox from './modules/Character/EnemyBox'
import PlayerBox from './modules/Character/PlayerBox'
import CombatActions from './modules/Actions/CombatActions'
import { generateNewEnemy } from '../logic/generators/generators'
import { setEnemy, enemyAddLoot, setEnemyStats, enemyTakeDmg } from '../redux/actions'
import { rollDice } from '../logic/helpers'


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
    this.props.setEnemy(desc)
    this.props.enemyAddLoot(loot)
    this.props.setEnemyStats(stats)
  }

  playerAttack() {
    const { player, enemy } = this.props
    const dmg = this.rollAttack(player)
    console.log(`you dealt ${dmg} damage!`)
    this.props.enemyTakeDmg(dmg)
    // enemy.takeDamage(dmg)
    // this.setState({ enemy }, () => 
    //   this.props.openPopup(
    //     `you deal ${dmg} damage`, 
    //     this.enemyAttack
    //   )
    // )
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

  maxHit(char) {
    return (char.stats.lvl * 2) + 10
  }

  baseHit(char) {
    return this.maxHit(char) / 2
  }

  rollAttack(char) {
    const roll = rollDice(100)
    if (roll <= 10) return 0
    if (roll > 10 && roll <= 30) return Math.floor(this.baseHit(char) - (this.baseHit(char) / 2) + rollDice(this.baseHit(char) / 4))
    if (roll > 30 && roll <= 70) return Math.floor(this.baseHit(char) + (rollDice(this.baseHit(char) / 4)))
    if (roll > 70 && roll <= 90) return Math.floor(this.baseHit(char) + (this.baseHit(char) / 2) + (rollDice(this.baseHit(char) / 4)))
    if (roll > 90) return Math.floor(this.maxHit(char) + (rollDice(this.baseHit(char) / 4)))
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

const mapStateToProps = ({
  playerStats,
  playerLoot,
  playerDesc,
  enemyStats,
  enemyLoot,
  enemyDesc
}) => ({
  playerStats,
  playerLoot,
  playerDesc,
  enemyStats,
  enemyLoot,
  enemyDesc
})

const mergeProps = (
  { playerStats,
    playerLoot,
    playerDesc,
    enemyStats,
    enemyLoot,
    enemyDesc }, 
  actions,
  props
) => {
  const merged = Object.assign(
    Object.assign(
      {}, 
      props
    ), actions)
  merged.player = {
    stats: playerStats,
    loot: playerLoot,
    desc: playerDesc
  }
  merged.enemy = {
    stats: enemyStats,
    loot: enemyLoot,
    desc: enemyDesc
  }
  return merged
}

export default connect(
  mapStateToProps,
  { 
    setEnemy, 
    enemyAddLoot, 
    setEnemyStats,
    enemyTakeDmg 
  },
  mergeProps
)(CombatView)