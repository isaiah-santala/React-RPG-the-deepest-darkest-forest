import React, { Component } from 'react'
import { connect } from "react-redux";

import Popup from './modules/PopUp/Popup'
import GameOver from './GameOver'
import HomeView from './HomeView'
import CombatView from './CombatView'

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

      this.setState({
        cb: null
      })
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
    const { view, popup, msg, cb, useItem } = this.state

    return (
      <div>
        {view === 'HOME' &&
          <HomeView
            popup={popup}
            player={player}
            updateView={this.updateView}
            describeItem={this.describeItem}
          />}
        {view === 'COMBAT' &&
          <CombatView
            popup={popup}
            updateView={this.updateView}
            describeItem={this.describeItem}
            openPopup={this.openPopup}
            updatePlayer={this.updatePlayer}
            gameOver={this.gameOver}
          />}
        {view === 'GAMEOVER' &&
          <GameOver/>} 
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