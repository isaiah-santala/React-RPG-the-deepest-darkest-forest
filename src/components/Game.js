import React, { Component } from 'react'
import { connect } from "react-redux";

import Popup from './modules/Popup'
import GameOver from './GameOver'
import HomeView from './HomeView'
import CombatView from './CombatView'
import { generatePlayer } from '../logic/generators/generators'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'COMBAT',
      popup: false,
      msg: null,
      cb: null
    }
    this.describeItem = this.describeItem.bind(this)
    this.updateView = this.updateView.bind(this)
    this.openPopup = this.openPopup.bind(this)
    this.closePopUp = this.closePopUp.bind(this)
    this.updatePlayer = this.updatePlayer.bind(this)
    this.gameOver = this.gameOver.bind(this)
  }

  componentDidMount() {
  }

  generatePlayer(player) {
    this.setState({
      player: generatePlayer(player)
    })
  }

  updateView(view) {
    this.setState({ view })
  }

  describeItem(msg) {
    this.openPopup(msg)
  }

  openPopup(msg = null, cb = null) {
    this.setState({ 
      cb,
      msg, 
      popup: true
    })
  }

  closePopUp(cb = null) {
    this.setState({
      popup: false
    }, () => {
      if (cb) cb()
    })
  }

  updatePlayer(player, cb = null) {
    this.setState({ 
      player 
    }, () => {
      if (cb) cb()
    })
  }

  gameOver() {
    this.setState({
      view: 'GAMEOVER'
    })
  }

  render(props) {
    const { player } = this.props
    console.log(player)
    const { view, popup, msg, cb } = this.state

    return (
      <div>
        {view === 'HOME' &&
          <HomeView
            player={player}
            updateView={this.updateView}
            describeItem={this.describeItem}
          />}
        {view === 'COMBAT' &&
          <CombatView
            popup={popup}
            player={player}
            updateView={this.updateView}
            describeItem={this.describeItem}
            openPopup={this.openPopup}
            updatePlayer={this.updatePlayer}
            gameOver={this.gameOver}
          />}
        {view === 'GAMEOVER' &&
          <GameOver 
          />} 
        {popup &&
          <Popup
            msg={msg}
            closePopUp={this.closePopUp}
            cb={cb}
          />}
      </div>
    )
  }
}

const mapStateToProps = state => ({ 
  player: {
    stats: state.playerStats,
    loot: state.playerLoot,
    desc: state.playerDesc
  }
})

export default connect(
  mapStateToProps
)(Game)